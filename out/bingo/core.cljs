(ns bingo.core
  (:require-macros [cljs.core.async.macros :refer [go]])
  (:require [om.core :as om :include-macros true]
            [om.dom :as dom :include-macros true]
            [cljs.core.async :refer [put! chan <! alts!]]))

(enable-console-print!)

(def problems [
  "Single tracking" 
  "Fire / smoke" 
  "No passenger / disabled train" 
  "Escalator outage" 
  "Power or elevator outage"
  "Station closed / shuttle bus" 
  "People standing on or blocking left side of escalator" 
  "Rotting fish smell on platform" 
  "Train offloaded" 
  "Sick Passenger"
  "SmarTrip card not working / scanning" 
  "Station manager missing or asleep" 
  "Scheduled track maintenance" 
  "Overcrowded platform"
  "Warped or cracked rail due to hot or cold weather" 
  "Overcrowded train" 
  "SmarTrip / farecard machine out of service"
  "Train stopped / holding at location"
  "LED screen does not show your train or the ETA"
  "Doors not closing, operator warns / blames passengers"
  "Garbled or confusing announcement over loudspeaker" 
  "You give up, leave the station, and take a taxi"
  "System delay with no explanation or ETA given"
  "You arrive on time with no delay.  Hooray!"
])

(def range5 (range 5))

(defn add-free-square [cells]
  (concat 
    (take 12 cells) 
    [{:text "FREE SQUARE", :selected true, :free true}]
    (drop 12 cells)))

(defn init-state []
  (->> problems
    shuffle
    (take 24)
    (map (fn [text] {:text text, :selected false}))
    add-free-square
    (partition 5)
    (map vec)
    vec
  ))
  
(def bingo-state (atom (init-state)))
  
(defn render-cell [cell toggle row col]
  (dom/td
    #js {:onClick (if (:free cell) nil (fn [e] (put! toggle [row col])))
         :className (if (:selected cell) "selected" "")}
    (:text cell)))

(defn render-card [rows toggle]
  (apply dom/table nil
    (concat
      [(apply dom/tr nil 
        (map #(dom/th nil %) "BINGO"))]
      (map
        (fn [row row-index]
          (apply dom/tr nil
            (map 
              (fn [cell col-index]
                (render-cell cell toggle row-index col-index)) 
              row range5)))
        rows range5))))

(defn handle-events [app owner]
  (let [reset (om/get-state owner :reset)
        toggle (om/get-state owner :toggle)]
    (go (while true
      (let [[v ch] (alts! [reset toggle])]
        (apply om/transact! app
          (cond
            (= ch reset) [init-state]
            (= ch toggle) (let [[row col] v]
              [[row col :selected] not]))))))))

(defn is-winner [rows]
  (some                         ; Do any of the following lines of five cells
    (partial every? :selected)  ; have every cell selected?
    (concat
      rows                                         ; Horizontal lines
      (map (fn [n] (map #(nth % n) rows)) range5)  ; Vertical lines
      [(map nth rows range5)                       ; Diagonal top-left to bot-right line
       (map nth rows (reverse range5))]            ; Diagonal top-right to bot-left line
    )))    

(defn bingo-app [app owner]
  (reify
    om/IInitState
    (init-state [_]
      {:reset (chan), :toggle (chan)})
      
    om/IWillMount
    (will-mount [_]
      (handle-events app owner))
      
    om/IRenderState
    (render-state [_ {:keys [reset toggle]}]
      (dom/div nil
        (dom/h1 nil "Washington Metrorail")
        (render-card @bingo-state toggle)
        (if (is-winner @bingo-state)
          (dom/p #js {:className "win"} "Congratulations, you win!  Now stand up and yell, BINGO!")
          (dom/p nil "Click squares to mark conditions you notice..."))
        (dom/p nil (dom/button #js {:onClick (fn [e] (put! reset true))} "Reset card"))))
  ))

(om/root 
  bingo-app
  bingo-state
  {:target (. js/document (getElementById "bingo"))})


