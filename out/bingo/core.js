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
bingo.core.channel = cljs.core.async.chan.call(null);
bingo.core.is_winner = (function is_winner(rows){
return cljs.core.some.call(null,cljs.core.partial.call(null,cljs.core.every_QMARK_,new cljs.core.Keyword(null,"selected","selected",574897764)),cljs.core.concat.call(null,rows,cljs.core.map.call(null,(function (n){
return cljs.core.map.call(null,(function (p1__11842_SHARP_){
return cljs.core.nth.call(null,p1__11842_SHARP_,n);
}),rows);
}),bingo.core.range5),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.map.call(null,cljs.core.nth,rows,bingo.core.range5),cljs.core.map.call(null,cljs.core.nth,rows,cljs.core.reverse.call(null,bingo.core.range5))], null)));
});
bingo.core.render_screen = (function render_screen(rows){
return React.DOM.div(null,React.DOM.h1(null,"Washington Metrorail"),cljs.core.apply.call(null,om.dom.table,null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.apply.call(null,om.dom.tr,null,cljs.core.map.call(null,(function (p1__11843_SHARP_){
return React.DOM.th(null,p1__11843_SHARP_);
}),"BINGO"))], null),(function (){var iter__4495__auto__ = (function iter__11884(s__11885){
return (new cljs.core.LazySeq(null,(function (){
var s__11885__$1 = s__11885;
while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__11885__$1);
if(temp__4126__auto__){
var s__11885__$2 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__11885__$2)){
var c__4493__auto__ = cljs.core.chunk_first.call(null,s__11885__$2);
var size__4494__auto__ = cljs.core.count.call(null,c__4493__auto__);
var b__11887 = cljs.core.chunk_buffer.call(null,size__4494__auto__);
if((function (){var i__11886 = (0);
while(true){
if((i__11886 < size__4494__auto__)){
var vec__11906 = cljs.core._nth.call(null,c__4493__auto__,i__11886);
var row = cljs.core.nth.call(null,vec__11906,(0),null);
var row_index = cljs.core.nth.call(null,vec__11906,(1),null);
cljs.core.chunk_append.call(null,b__11887,cljs.core.apply.call(null,om.dom.tr,null,(function (){var iter__4495__auto__ = ((function (i__11886,vec__11906,row,row_index,c__4493__auto__,size__4494__auto__,b__11887,s__11885__$2,temp__4126__auto__){
return (function iter__11907(s__11908){
return (new cljs.core.LazySeq(null,((function (i__11886,vec__11906,row,row_index,c__4493__auto__,size__4494__auto__,b__11887,s__11885__$2,temp__4126__auto__){
return (function (){
var s__11908__$1 = s__11908;
while(true){
var temp__4126__auto____$1 = cljs.core.seq.call(null,s__11908__$1);
if(temp__4126__auto____$1){
var s__11908__$2 = temp__4126__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__11908__$2)){
var c__4493__auto____$1 = cljs.core.chunk_first.call(null,s__11908__$2);
var size__4494__auto____$1 = cljs.core.count.call(null,c__4493__auto____$1);
var b__11910 = cljs.core.chunk_buffer.call(null,size__4494__auto____$1);
if((function (){var i__11909 = (0);
while(true){
if((i__11909 < size__4494__auto____$1)){
var vec__11913 = cljs.core._nth.call(null,c__4493__auto____$1,i__11909);
var cell = cljs.core.nth.call(null,vec__11913,(0),null);
var col_index = cljs.core.nth.call(null,vec__11913,(1),null);
cljs.core.chunk_append.call(null,b__11910,React.DOM.td({"className": (cljs.core.truth_(new cljs.core.Keyword(null,"selected","selected",574897764).cljs$core$IFn$_invoke$arity$1(cell))?"selected":null), "onClick": ((cljs.core.not.call(null,new cljs.core.Keyword(null,"free","free",801364328).cljs$core$IFn$_invoke$arity$1(cell)))?((function (i__11909,i__11886,vec__11913,cell,col_index,c__4493__auto____$1,size__4494__auto____$1,b__11910,s__11908__$2,temp__4126__auto____$1,vec__11906,row,row_index,c__4493__auto__,size__4494__auto__,b__11887,s__11885__$2,temp__4126__auto__){
return (function (){
return cljs.core.async.put_BANG_.call(null,bingo.core.channel,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"toggle","toggle",1291842030),row_index,col_index], null));
});})(i__11909,i__11886,vec__11913,cell,col_index,c__4493__auto____$1,size__4494__auto____$1,b__11910,s__11908__$2,temp__4126__auto____$1,vec__11906,row,row_index,c__4493__auto__,size__4494__auto__,b__11887,s__11885__$2,temp__4126__auto__))
:null)},new cljs.core.Keyword(null,"text","text",-1790561697).cljs$core$IFn$_invoke$arity$1(cell)));

var G__11924 = (i__11909 + (1));
i__11909 = G__11924;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__11910),iter__11907.call(null,cljs.core.chunk_rest.call(null,s__11908__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__11910),null);
}
} else {
var vec__11914 = cljs.core.first.call(null,s__11908__$2);
var cell = cljs.core.nth.call(null,vec__11914,(0),null);
var col_index = cljs.core.nth.call(null,vec__11914,(1),null);
return cljs.core.cons.call(null,React.DOM.td({"className": (cljs.core.truth_(new cljs.core.Keyword(null,"selected","selected",574897764).cljs$core$IFn$_invoke$arity$1(cell))?"selected":null), "onClick": ((cljs.core.not.call(null,new cljs.core.Keyword(null,"free","free",801364328).cljs$core$IFn$_invoke$arity$1(cell)))?((function (i__11886,vec__11914,cell,col_index,s__11908__$2,temp__4126__auto____$1,vec__11906,row,row_index,c__4493__auto__,size__4494__auto__,b__11887,s__11885__$2,temp__4126__auto__){
return (function (){
return cljs.core.async.put_BANG_.call(null,bingo.core.channel,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"toggle","toggle",1291842030),row_index,col_index], null));
});})(i__11886,vec__11914,cell,col_index,s__11908__$2,temp__4126__auto____$1,vec__11906,row,row_index,c__4493__auto__,size__4494__auto__,b__11887,s__11885__$2,temp__4126__auto__))
:null)},new cljs.core.Keyword(null,"text","text",-1790561697).cljs$core$IFn$_invoke$arity$1(cell)),iter__11907.call(null,cljs.core.rest.call(null,s__11908__$2)));
}
} else {
return null;
}
break;
}
});})(i__11886,vec__11906,row,row_index,c__4493__auto__,size__4494__auto__,b__11887,s__11885__$2,temp__4126__auto__))
,null,null));
});})(i__11886,vec__11906,row,row_index,c__4493__auto__,size__4494__auto__,b__11887,s__11885__$2,temp__4126__auto__))
;
return iter__4495__auto__.call(null,cljs.core.map.call(null,cljs.core.list,row,bingo.core.range5));
})()));

var G__11925 = (i__11886 + (1));
i__11886 = G__11925;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__11887),iter__11884.call(null,cljs.core.chunk_rest.call(null,s__11885__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__11887),null);
}
} else {
var vec__11915 = cljs.core.first.call(null,s__11885__$2);
var row = cljs.core.nth.call(null,vec__11915,(0),null);
var row_index = cljs.core.nth.call(null,vec__11915,(1),null);
return cljs.core.cons.call(null,cljs.core.apply.call(null,om.dom.tr,null,(function (){var iter__4495__auto__ = ((function (vec__11915,row,row_index,s__11885__$2,temp__4126__auto__){
return (function iter__11916(s__11917){
return (new cljs.core.LazySeq(null,((function (vec__11915,row,row_index,s__11885__$2,temp__4126__auto__){
return (function (){
var s__11917__$1 = s__11917;
while(true){
var temp__4126__auto____$1 = cljs.core.seq.call(null,s__11917__$1);
if(temp__4126__auto____$1){
var s__11917__$2 = temp__4126__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__11917__$2)){
var c__4493__auto__ = cljs.core.chunk_first.call(null,s__11917__$2);
var size__4494__auto__ = cljs.core.count.call(null,c__4493__auto__);
var b__11919 = cljs.core.chunk_buffer.call(null,size__4494__auto__);
if((function (){var i__11918 = (0);
while(true){
if((i__11918 < size__4494__auto__)){
var vec__11922 = cljs.core._nth.call(null,c__4493__auto__,i__11918);
var cell = cljs.core.nth.call(null,vec__11922,(0),null);
var col_index = cljs.core.nth.call(null,vec__11922,(1),null);
cljs.core.chunk_append.call(null,b__11919,React.DOM.td({"className": (cljs.core.truth_(new cljs.core.Keyword(null,"selected","selected",574897764).cljs$core$IFn$_invoke$arity$1(cell))?"selected":null), "onClick": ((cljs.core.not.call(null,new cljs.core.Keyword(null,"free","free",801364328).cljs$core$IFn$_invoke$arity$1(cell)))?((function (i__11918,vec__11922,cell,col_index,c__4493__auto__,size__4494__auto__,b__11919,s__11917__$2,temp__4126__auto____$1,vec__11915,row,row_index,s__11885__$2,temp__4126__auto__){
return (function (){
return cljs.core.async.put_BANG_.call(null,bingo.core.channel,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"toggle","toggle",1291842030),row_index,col_index], null));
});})(i__11918,vec__11922,cell,col_index,c__4493__auto__,size__4494__auto__,b__11919,s__11917__$2,temp__4126__auto____$1,vec__11915,row,row_index,s__11885__$2,temp__4126__auto__))
:null)},new cljs.core.Keyword(null,"text","text",-1790561697).cljs$core$IFn$_invoke$arity$1(cell)));

var G__11926 = (i__11918 + (1));
i__11918 = G__11926;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__11919),iter__11916.call(null,cljs.core.chunk_rest.call(null,s__11917__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__11919),null);
}
} else {
var vec__11923 = cljs.core.first.call(null,s__11917__$2);
var cell = cljs.core.nth.call(null,vec__11923,(0),null);
var col_index = cljs.core.nth.call(null,vec__11923,(1),null);
return cljs.core.cons.call(null,React.DOM.td({"className": (cljs.core.truth_(new cljs.core.Keyword(null,"selected","selected",574897764).cljs$core$IFn$_invoke$arity$1(cell))?"selected":null), "onClick": ((cljs.core.not.call(null,new cljs.core.Keyword(null,"free","free",801364328).cljs$core$IFn$_invoke$arity$1(cell)))?((function (vec__11923,cell,col_index,s__11917__$2,temp__4126__auto____$1,vec__11915,row,row_index,s__11885__$2,temp__4126__auto__){
return (function (){
return cljs.core.async.put_BANG_.call(null,bingo.core.channel,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"toggle","toggle",1291842030),row_index,col_index], null));
});})(vec__11923,cell,col_index,s__11917__$2,temp__4126__auto____$1,vec__11915,row,row_index,s__11885__$2,temp__4126__auto__))
:null)},new cljs.core.Keyword(null,"text","text",-1790561697).cljs$core$IFn$_invoke$arity$1(cell)),iter__11916.call(null,cljs.core.rest.call(null,s__11917__$2)));
}
} else {
return null;
}
break;
}
});})(vec__11915,row,row_index,s__11885__$2,temp__4126__auto__))
,null,null));
});})(vec__11915,row,row_index,s__11885__$2,temp__4126__auto__))
;
return iter__4495__auto__.call(null,cljs.core.map.call(null,cljs.core.list,row,bingo.core.range5));
})()),iter__11884.call(null,cljs.core.rest.call(null,s__11885__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4495__auto__.call(null,cljs.core.map.call(null,cljs.core.list,rows,bingo.core.range5));
})())),(cljs.core.truth_(bingo.core.is_winner.call(null,cljs.core.deref.call(null,bingo.core.bingo_state)))?React.DOM.p({"className": "win"},"Congratulations, you win!  Now stand up and yell, BINGO!"):React.DOM.p(null,"Click squares to mark conditions you notice...")),React.DOM.p(null,React.DOM.button({"onClick": (function (){
return cljs.core.async.put_BANG_.call(null,bingo.core.channel,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reset","reset",-800929946)], null));
})},"Reset card")));
});
bingo.core.handle_events = (function handle_events(app,owner){
var c__6614__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6614__auto__){
return (function (){
var f__6615__auto__ = (function (){var switch__6599__auto__ = ((function (c__6614__auto__){
return (function (state_12007){
var state_val_12008 = (state_12007[(1)]);
if((state_val_12008 === (7))){
var inst_11982 = (state_12007[(2)]);
var inst_11983 = cljs.core.nth.call(null,inst_11982,(0),null);
var inst_11984 = cljs.core.nth.call(null,inst_11982,(1),null);
var inst_11985 = cljs.core.nth.call(null,inst_11982,(2),null);
var state_12007__$1 = (function (){var statearr_12009 = state_12007;
(statearr_12009[(7)] = inst_11985);

(statearr_12009[(8)] = inst_11984);

return statearr_12009;
})();
var G__12010_12029 = (((inst_11983 instanceof cljs.core.Keyword))?inst_11983.fqn:null);
switch (G__12010_12029) {
case "toggle":
var statearr_12011_12031 = state_12007__$1;
(statearr_12011_12031[(1)] = (10));


break;
case "reset":
var statearr_12012_12032 = state_12007__$1;
(statearr_12012_12032[(1)] = (9));


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(inst_11983)].join('')));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12008 === (1))){
var state_12007__$1 = state_12007;
var statearr_12013_12033 = state_12007__$1;
(statearr_12013_12033[(2)] = null);

(statearr_12013_12033[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12008 === (4))){
var state_12007__$1 = state_12007;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12007__$1,(7),bingo.core.channel);
} else {
if((state_val_12008 === (6))){
var inst_12003 = (state_12007[(2)]);
var state_12007__$1 = state_12007;
var statearr_12014_12034 = state_12007__$1;
(statearr_12014_12034[(2)] = inst_12003);

(statearr_12014_12034[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12008 === (3))){
var inst_12005 = (state_12007[(2)]);
var state_12007__$1 = state_12007;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12007__$1,inst_12005);
} else {
if((state_val_12008 === (2))){
var state_12007__$1 = state_12007;
var statearr_12015_12035 = state_12007__$1;
(statearr_12015_12035[(1)] = (4));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12008 === (9))){
var inst_11986 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_11987 = [bingo.core.init_state];
var inst_11988 = (new cljs.core.PersistentVector(null,1,(5),inst_11986,inst_11987,null));
var state_12007__$1 = state_12007;
var statearr_12017_12036 = state_12007__$1;
(statearr_12017_12036[(2)] = inst_11988);

(statearr_12017_12036[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12008 === (5))){
var state_12007__$1 = state_12007;
var statearr_12018_12037 = state_12007__$1;
(statearr_12018_12037[(2)] = null);

(statearr_12018_12037[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12008 === (10))){
var inst_11985 = (state_12007[(7)]);
var inst_11984 = (state_12007[(8)]);
var inst_11990 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_11991 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_11992 = [inst_11984,inst_11985,new cljs.core.Keyword(null,"selected","selected",574897764)];
var inst_11993 = (new cljs.core.PersistentVector(null,3,(5),inst_11991,inst_11992,null));
var inst_11994 = [inst_11993,cljs.core.not];
var inst_11995 = (new cljs.core.PersistentVector(null,2,(5),inst_11990,inst_11994,null));
var state_12007__$1 = state_12007;
var statearr_12019_12038 = state_12007__$1;
(statearr_12019_12038[(2)] = inst_11995);

(statearr_12019_12038[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12008 === (8))){
var inst_11998 = (state_12007[(2)]);
var inst_11999 = cljs.core.apply.call(null,om.core.transact_BANG_,app,inst_11998);
var state_12007__$1 = (function (){var statearr_12020 = state_12007;
(statearr_12020[(9)] = inst_11999);

return statearr_12020;
})();
var statearr_12021_12039 = state_12007__$1;
(statearr_12021_12039[(2)] = null);

(statearr_12021_12039[(1)] = (2));


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
});})(c__6614__auto__))
;
return ((function (switch__6599__auto__,c__6614__auto__){
return (function() {
var state_machine__6600__auto__ = null;
var state_machine__6600__auto____0 = (function (){
var statearr_12025 = [null,null,null,null,null,null,null,null,null,null];
(statearr_12025[(0)] = state_machine__6600__auto__);

(statearr_12025[(1)] = (1));

return statearr_12025;
});
var state_machine__6600__auto____1 = (function (state_12007){
while(true){
var ret_value__6601__auto__ = (function (){try{while(true){
var result__6602__auto__ = switch__6599__auto__.call(null,state_12007);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6602__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6602__auto__;
}
break;
}
}catch (e12026){if((e12026 instanceof Object)){
var ex__6603__auto__ = e12026;
var statearr_12027_12040 = state_12007;
(statearr_12027_12040[(5)] = ex__6603__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12007);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e12026;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6601__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12041 = state_12007;
state_12007 = G__12041;
continue;
} else {
return ret_value__6601__auto__;
}
break;
}
});
state_machine__6600__auto__ = function(state_12007){
switch(arguments.length){
case 0:
return state_machine__6600__auto____0.call(this);
case 1:
return state_machine__6600__auto____1.call(this,state_12007);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6600__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6600__auto____0;
state_machine__6600__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6600__auto____1;
return state_machine__6600__auto__;
})()
;})(switch__6599__auto__,c__6614__auto__))
})();
var state__6616__auto__ = (function (){var statearr_12028 = f__6615__auto__.call(null);
(statearr_12028[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6614__auto__);

return statearr_12028;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6616__auto__);
});})(c__6614__auto__))
);

return c__6614__auto__;
});
bingo.core.bingo_app = (function bingo_app(app,owner){
if(typeof bingo.core.t12045 !== 'undefined'){
} else {

/**
* @constructor
*/
bingo.core.t12045 = (function (owner,app,bingo_app,meta12046){
this.owner = owner;
this.app = app;
this.bingo_app = bingo_app;
this.meta12046 = meta12046;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
bingo.core.t12045.prototype.om$core$IRenderState$ = true;

bingo.core.t12045.prototype.om$core$IRenderState$render_state$arity$2 = (function (_,___$1){
var self__ = this;
var ___$2 = this;
return bingo.core.render_screen.call(null,cljs.core.deref.call(null,bingo.core.bingo_state));
});

bingo.core.t12045.prototype.om$core$IWillMount$ = true;

bingo.core.t12045.prototype.om$core$IWillMount$will_mount$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return bingo.core.handle_events.call(null,self__.app,self__.owner);
});

bingo.core.t12045.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12047){
var self__ = this;
var _12047__$1 = this;
return self__.meta12046;
});

bingo.core.t12045.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12047,meta12046__$1){
var self__ = this;
var _12047__$1 = this;
return (new bingo.core.t12045(self__.owner,self__.app,self__.bingo_app,meta12046__$1));
});

bingo.core.t12045.cljs$lang$type = true;

bingo.core.t12045.cljs$lang$ctorStr = "bingo.core/t12045";

bingo.core.t12045.cljs$lang$ctorPrWriter = (function (this__4326__auto__,writer__4327__auto__,opt__4328__auto__){
return cljs.core._write.call(null,writer__4327__auto__,"bingo.core/t12045");
});

bingo.core.__GT_t12045 = (function __GT_t12045(owner__$1,app__$1,bingo_app__$1,meta12046){
return (new bingo.core.t12045(owner__$1,app__$1,bingo_app__$1,meta12046));
});

}

return (new bingo.core.t12045(owner,app,bingo_app,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),71,new cljs.core.Keyword(null,"end-line","end-line",1837326455),99,new cljs.core.Keyword(null,"column","column",2078222095),3,new cljs.core.Keyword(null,"line","line",212345235),97,new cljs.core.Keyword(null,"file","file",-1269645878),"/home/jwaag/git/bingo-cljs-om/src/bingo/core.cljs"], null)));
});
om.core.root.call(null,bingo.core.bingo_app,bingo.core.bingo_state,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",253001721),document.getElementById("bingo")], null));

//# sourceMappingURL=core.js.map