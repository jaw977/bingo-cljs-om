// Compiled by ClojureScript 0.0-2657 {}
if(!goog.isProvided_('bingo.core')) {
goog.provide('bingo.core');
}
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('om.dom');
goog.require('om.core');
cljs.core.enable_console_print_BANG_.call(null);
bingo.core.problems = new cljs.core.PersistentVector(null, 24, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Single tracking","Fire / smoke","No passenger / disabled train","Escalator outage","Power or elevator outage","Station closed / shuttle bus","People standing on or blocking left side of escalator","Rotting fish smell on platform","Train offloaded","Sick Passenger","SmarTrip card not working / scanning","Station manager missing or asleep","Scheduled track maintenance","Overcrowded platform","Warped or cracked rail due to hot or cold weather","Overcrowded train","SmarTrip / farecard machine out of service","Train stopped / holding at location","LED screen does not show your train or the ETA","Doors not closing, operator warns / blames passengers","Garbled or confusing announcement over loudspeaker","You give up, leave the station, and take a taxi","System delay with no explanation or ETA given","You arrive on time with no delay.  Hooray!"], null);
bingo.core.range5 = cljs.core.range.call(null,(5));
bingo.core.add_free_square = (function add_free_square(cells){
return cljs.core.concat.call(null,cljs.core.take.call(null,(12),cells),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"text","text",-1790561697),"FREE SQUARE",new cljs.core.Keyword(null,"selected","selected",574897764),true,new cljs.core.Keyword(null,"free","free",801364328),true], null)], null),cljs.core.drop.call(null,(12),cells));
});
bingo.core.init_state = (function init_state(){
return cljs.core.vec.call(null,cljs.core.map.call(null,cljs.core.vec,cljs.core.partition.call(null,(5),bingo.core.add_free_square.call(null,cljs.core.map.call(null,(function (text){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"text","text",-1790561697),text,new cljs.core.Keyword(null,"selected","selected",574897764),false], null);
}),cljs.core.take.call(null,(24),cljs.core.shuffle.call(null,bingo.core.problems)))))));
});
bingo.core.bingo_state = cljs.core.atom.call(null,bingo.core.init_state.call(null));
bingo.core.render_cell = (function render_cell(cell,toggle,row,col){
return React.DOM.td({"className": (cljs.core.truth_(new cljs.core.Keyword(null,"selected","selected",574897764).cljs$core$IFn$_invoke$arity$1(cell))?"selected":""), "onClick": (cljs.core.truth_(new cljs.core.Keyword(null,"free","free",801364328).cljs$core$IFn$_invoke$arity$1(cell))?null:(function (e){
return cljs.core.async.put_BANG_.call(null,toggle,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [row,col], null));
}))},new cljs.core.Keyword(null,"text","text",-1790561697).cljs$core$IFn$_invoke$arity$1(cell));
});
bingo.core.render_card = (function render_card(rows,toggle){
return cljs.core.apply.call(null,om.dom.table,null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.apply.call(null,om.dom.tr,null,cljs.core.map.call(null,(function (p1__6658_SHARP_){
return React.DOM.th(null,p1__6658_SHARP_);
}),"BINGO"))], null),cljs.core.map.call(null,(function (row,row_index){
return cljs.core.apply.call(null,om.dom.tr,null,cljs.core.map.call(null,(function (cell,col_index){
return bingo.core.render_cell.call(null,cell,toggle,row_index,col_index);
}),row,bingo.core.range5));
}),rows,bingo.core.range5)));
});
bingo.core.handle_events = (function handle_events(app,owner){
var reset = om.core.get_state.call(null,owner,new cljs.core.Keyword(null,"reset","reset",-800929946));
var toggle = om.core.get_state.call(null,owner,new cljs.core.Keyword(null,"toggle","toggle",1291842030));
var c__6614__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6614__auto__,reset,toggle){
return (function (){
var f__6615__auto__ = (function (){var switch__6599__auto__ = ((function (c__6614__auto__,reset,toggle){
return (function (state_6764){
var state_val_6765 = (state_6764[(1)]);
if((state_val_6765 === (7))){
var inst_6733 = (state_6764[(7)]);
var inst_6731 = (state_6764[(2)]);
var inst_6732 = cljs.core.nth.call(null,inst_6731,(0),null);
var inst_6733__$1 = cljs.core.nth.call(null,inst_6731,(1),null);
var inst_6734 = cljs.core._EQ_.call(null,inst_6733__$1,reset);
var state_6764__$1 = (function (){var statearr_6766 = state_6764;
(statearr_6766[(8)] = inst_6732);

(statearr_6766[(7)] = inst_6733__$1);

return statearr_6766;
})();
if(inst_6734){
var statearr_6767_6789 = state_6764__$1;
(statearr_6767_6789[(1)] = (8));

} else {
var statearr_6768_6790 = state_6764__$1;
(statearr_6768_6790[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6765 === (1))){
var state_6764__$1 = state_6764;
var statearr_6769_6791 = state_6764__$1;
(statearr_6769_6791[(2)] = null);

(statearr_6769_6791[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6765 === (4))){
var inst_6727 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_6728 = [reset,toggle];
var inst_6729 = (new cljs.core.PersistentVector(null,2,(5),inst_6727,inst_6728,null));
var state_6764__$1 = state_6764;
return cljs.core.async.ioc_alts_BANG_.call(null,state_6764__$1,(7),inst_6729);
} else {
if((state_val_6765 === (13))){
var inst_6753 = (state_6764[(2)]);
var state_6764__$1 = state_6764;
var statearr_6770_6792 = state_6764__$1;
(statearr_6770_6792[(2)] = inst_6753);

(statearr_6770_6792[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6765 === (6))){
var inst_6760 = (state_6764[(2)]);
var state_6764__$1 = state_6764;
var statearr_6771_6793 = state_6764__$1;
(statearr_6771_6793[(2)] = inst_6760);

(statearr_6771_6793[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6765 === (3))){
var inst_6762 = (state_6764[(2)]);
var state_6764__$1 = state_6764;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_6764__$1,inst_6762);
} else {
if((state_val_6765 === (12))){
var state_6764__$1 = state_6764;
var statearr_6772_6794 = state_6764__$1;
(statearr_6772_6794[(2)] = null);

(statearr_6772_6794[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6765 === (2))){
var state_6764__$1 = state_6764;
var statearr_6773_6795 = state_6764__$1;
(statearr_6773_6795[(1)] = (4));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6765 === (11))){
var inst_6732 = (state_6764[(8)]);
var inst_6743 = cljs.core.nth.call(null,inst_6732,(0),null);
var inst_6744 = cljs.core.nth.call(null,inst_6732,(1),null);
var inst_6745 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_6746 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_6747 = [inst_6743,inst_6744,new cljs.core.Keyword(null,"selected","selected",574897764)];
var inst_6748 = (new cljs.core.PersistentVector(null,3,(5),inst_6746,inst_6747,null));
var inst_6749 = [inst_6748,cljs.core.not];
var inst_6750 = (new cljs.core.PersistentVector(null,2,(5),inst_6745,inst_6749,null));
var state_6764__$1 = state_6764;
var statearr_6775_6796 = state_6764__$1;
(statearr_6775_6796[(2)] = inst_6750);

(statearr_6775_6796[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6765 === (9))){
var inst_6733 = (state_6764[(7)]);
var inst_6740 = cljs.core._EQ_.call(null,inst_6733,toggle);
var state_6764__$1 = state_6764;
if(inst_6740){
var statearr_6776_6797 = state_6764__$1;
(statearr_6776_6797[(1)] = (11));

} else {
var statearr_6777_6798 = state_6764__$1;
(statearr_6777_6798[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6765 === (5))){
var state_6764__$1 = state_6764;
var statearr_6778_6799 = state_6764__$1;
(statearr_6778_6799[(2)] = null);

(statearr_6778_6799[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6765 === (10))){
var inst_6755 = (state_6764[(2)]);
var inst_6756 = cljs.core.apply.call(null,om.core.transact_BANG_,app,inst_6755);
var state_6764__$1 = (function (){var statearr_6779 = state_6764;
(statearr_6779[(9)] = inst_6756);

return statearr_6779;
})();
var statearr_6780_6800 = state_6764__$1;
(statearr_6780_6800[(2)] = null);

(statearr_6780_6800[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6765 === (8))){
var inst_6736 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_6737 = [bingo.core.init_state];
var inst_6738 = (new cljs.core.PersistentVector(null,1,(5),inst_6736,inst_6737,null));
var state_6764__$1 = state_6764;
var statearr_6781_6801 = state_6764__$1;
(statearr_6781_6801[(2)] = inst_6738);

(statearr_6781_6801[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__6614__auto__,reset,toggle))
;
return ((function (switch__6599__auto__,c__6614__auto__,reset,toggle){
return (function() {
var state_machine__6600__auto__ = null;
var state_machine__6600__auto____0 = (function (){
var statearr_6785 = [null,null,null,null,null,null,null,null,null,null];
(statearr_6785[(0)] = state_machine__6600__auto__);

(statearr_6785[(1)] = (1));

return statearr_6785;
});
var state_machine__6600__auto____1 = (function (state_6764){
while(true){
var ret_value__6601__auto__ = (function (){try{while(true){
var result__6602__auto__ = switch__6599__auto__.call(null,state_6764);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6602__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6602__auto__;
}
break;
}
}catch (e6786){if((e6786 instanceof Object)){
var ex__6603__auto__ = e6786;
var statearr_6787_6802 = state_6764;
(statearr_6787_6802[(5)] = ex__6603__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_6764);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e6786;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6601__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__6803 = state_6764;
state_6764 = G__6803;
continue;
} else {
return ret_value__6601__auto__;
}
break;
}
});
state_machine__6600__auto__ = function(state_6764){
switch(arguments.length){
case 0:
return state_machine__6600__auto____0.call(this);
case 1:
return state_machine__6600__auto____1.call(this,state_6764);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6600__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6600__auto____0;
state_machine__6600__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6600__auto____1;
return state_machine__6600__auto__;
})()
;})(switch__6599__auto__,c__6614__auto__,reset,toggle))
})();
var state__6616__auto__ = (function (){var statearr_6788 = f__6615__auto__.call(null);
(statearr_6788[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6614__auto__);

return statearr_6788;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6616__auto__);
});})(c__6614__auto__,reset,toggle))
);

return c__6614__auto__;
});
bingo.core.is_winner = (function is_winner(rows){
return cljs.core.some.call(null,cljs.core.partial.call(null,cljs.core.every_QMARK_,new cljs.core.Keyword(null,"selected","selected",574897764)),cljs.core.concat.call(null,rows,cljs.core.map.call(null,(function (n){
return cljs.core.map.call(null,(function (p1__6804_SHARP_){
return cljs.core.nth.call(null,p1__6804_SHARP_,n);
}),rows);
}),bingo.core.range5),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.map.call(null,cljs.core.nth,rows,bingo.core.range5),cljs.core.map.call(null,cljs.core.nth,rows,cljs.core.reverse.call(null,bingo.core.range5))], null)));
});
bingo.core.bingo_app = (function bingo_app(app,owner){
if(typeof bingo.core.t6810 !== 'undefined'){
} else {

/**
* @constructor
*/
bingo.core.t6810 = (function (owner,app,bingo_app,meta6811){
this.owner = owner;
this.app = app;
this.bingo_app = bingo_app;
this.meta6811 = meta6811;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
bingo.core.t6810.prototype.om$core$IRenderState$ = true;

bingo.core.t6810.prototype.om$core$IRenderState$render_state$arity$2 = (function (_,p__6813){
var self__ = this;
var map__6814 = p__6813;
var map__6814__$1 = ((cljs.core.seq_QMARK_.call(null,map__6814))?cljs.core.apply.call(null,cljs.core.hash_map,map__6814):map__6814);
var toggle = cljs.core.get.call(null,map__6814__$1,new cljs.core.Keyword(null,"toggle","toggle",1291842030));
var reset = cljs.core.get.call(null,map__6814__$1,new cljs.core.Keyword(null,"reset","reset",-800929946));
var ___$1 = this;
return React.DOM.div(null,React.DOM.h1(null,"Washington Metrorail"),bingo.core.render_card.call(null,cljs.core.deref.call(null,bingo.core.bingo_state),toggle),(cljs.core.truth_(bingo.core.is_winner.call(null,cljs.core.deref.call(null,bingo.core.bingo_state)))?React.DOM.p({"className": "win"},"Congratulations, you win!  Now stand up and yell, BINGO!"):React.DOM.p(null,"Click squares to mark conditions you notice...")),React.DOM.p(null,React.DOM.button({"onClick": ((function (___$1,map__6814,map__6814__$1,toggle,reset){
return (function (e){
return cljs.core.async.put_BANG_.call(null,reset,true);
});})(___$1,map__6814,map__6814__$1,toggle,reset))
},"Reset card")));
});

bingo.core.t6810.prototype.om$core$IWillMount$ = true;

bingo.core.t6810.prototype.om$core$IWillMount$will_mount$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return bingo.core.handle_events.call(null,self__.app,self__.owner);
});

bingo.core.t6810.prototype.om$core$IInitState$ = true;

bingo.core.t6810.prototype.om$core$IInitState$init_state$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"reset","reset",-800929946),cljs.core.async.chan.call(null),new cljs.core.Keyword(null,"toggle","toggle",1291842030),cljs.core.async.chan.call(null)], null);
});

bingo.core.t6810.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_6812){
var self__ = this;
var _6812__$1 = this;
return self__.meta6811;
});

bingo.core.t6810.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_6812,meta6811__$1){
var self__ = this;
var _6812__$1 = this;
return (new bingo.core.t6810(self__.owner,self__.app,self__.bingo_app,meta6811__$1));
});

bingo.core.t6810.cljs$lang$type = true;

bingo.core.t6810.cljs$lang$ctorStr = "bingo.core/t6810";

bingo.core.t6810.cljs$lang$ctorPrWriter = (function (this__4326__auto__,writer__4327__auto__,opt__4328__auto__){
return cljs.core._write.call(null,writer__4327__auto__,"bingo.core/t6810");
});

bingo.core.__GT_t6810 = (function __GT_t6810(owner__$1,app__$1,bingo_app__$1,meta6811){
return (new bingo.core.t6810(owner__$1,app__$1,bingo_app__$1,meta6811));
});

}

return (new bingo.core.t6810(owner,app,bingo_app,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),4,new cljs.core.Keyword(null,"end-line","end-line",1837326455),117,new cljs.core.Keyword(null,"column","column",2078222095),3,new cljs.core.Keyword(null,"line","line",212345235),99,new cljs.core.Keyword(null,"file","file",-1269645878),"/home/jwaag/git/bingo-cljs-om/src/bingo/core.cljs"], null)));
});
om.core.root.call(null,bingo.core.bingo_app,bingo.core.bingo_state,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",253001721),document.getElementById("bingo")], null));

//# sourceMappingURL=core.js.map