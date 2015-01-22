// Compiled by ClojureScript 0.0-2657 {}
if(!goog.isProvided_('cljs.core.async')) {
goog.provide('cljs.core.async');
}
goog.require('cljs.core');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
cljs.core.async.fn_handler = (function fn_handler(f){
if(typeof cljs.core.async.t9535 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t9535 = (function (f,fn_handler,meta9536){
this.f = f;
this.fn_handler = fn_handler;
this.meta9536 = meta9536;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t9535.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t9535.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t9535.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t9535.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_9537){
var self__ = this;
var _9537__$1 = this;
return self__.meta9536;
});

cljs.core.async.t9535.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_9537,meta9536__$1){
var self__ = this;
var _9537__$1 = this;
return (new cljs.core.async.t9535(self__.f,self__.fn_handler,meta9536__$1));
});

cljs.core.async.t9535.cljs$lang$type = true;

cljs.core.async.t9535.cljs$lang$ctorStr = "cljs.core.async/t9535";

cljs.core.async.t9535.cljs$lang$ctorPrWriter = (function (this__4326__auto__,writer__4327__auto__,opt__4328__auto__){
return cljs.core._write.call(null,writer__4327__auto__,"cljs.core.async/t9535");
});

cljs.core.async.__GT_t9535 = (function __GT_t9535(f__$1,fn_handler__$1,meta9536){
return (new cljs.core.async.t9535(f__$1,fn_handler__$1,meta9536));
});

}

return (new cljs.core.async.t9535(f,fn_handler,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),20,new cljs.core.Keyword(null,"end-line","end-line",1837326455),16,new cljs.core.Keyword(null,"column","column",2078222095),3,new cljs.core.Keyword(null,"line","line",212345235),13,new cljs.core.Keyword(null,"file","file",-1269645878),"/home/jwaag/dev/clj/bingo/out/cljs/core/async.cljs"], null)));
});
/**
* Returns a fixed buffer of size n. When full, puts will block/park.
*/
cljs.core.async.buffer = (function buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
* Returns a buffer of size n. When full, puts will complete but
* val will be dropped (no transfer).
*/
cljs.core.async.dropping_buffer = (function dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
* Returns a buffer of size n. When full, puts will complete, and be
* buffered, but oldest elements in buffer will be dropped (not
* transferred).
*/
cljs.core.async.sliding_buffer = (function sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
* Returns true if a channel created with buff will never block. That is to say,
* puts into this buffer will never cause the buffer to be full.
*/
cljs.core.async.unblocking_buffer_QMARK_ = (function unblocking_buffer_QMARK_(buff){
var G__9539 = buff;
if(G__9539){
var bit__4420__auto__ = null;
if(cljs.core.truth_((function (){var or__3739__auto__ = bit__4420__auto__;
if(cljs.core.truth_(or__3739__auto__)){
return or__3739__auto__;
} else {
return G__9539.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})())){
return true;
} else {
if((!G__9539.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__9539);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__9539);
}
});
/**
* Creates a channel with an optional buffer, an optional transducer (like (map f),
* (filter p) etc or a composition thereof), and an optional exception handler.
* If buf-or-n is a number, will create and use a fixed buffer of that size. If a
* transducer is supplied a buffer must be specified. ex-handler must be a
* fn of one argument - if an exception occurs during transformation it will be called
* with the thrown value as an argument, and any non-nil return value will be placed
* in the channel.
*/
cljs.core.async.chan = (function() {
var chan = null;
var chan__0 = (function (){
return chan.call(null,null);
});
var chan__1 = (function (buf_or_n){
return chan.call(null,buf_or_n,null,null);
});
var chan__2 = (function (buf_or_n,xform){
return chan.call(null,buf_or_n,xform,null);
});
var chan__3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("buffer must be supplied when transducer is"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,new cljs.core.Symbol(null,"buf-or-n","buf-or-n",-1646815050,null)))].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});
chan = function(buf_or_n,xform,ex_handler){
switch(arguments.length){
case 0:
return chan__0.call(this);
case 1:
return chan__1.call(this,buf_or_n);
case 2:
return chan__2.call(this,buf_or_n,xform);
case 3:
return chan__3.call(this,buf_or_n,xform,ex_handler);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
chan.cljs$core$IFn$_invoke$arity$0 = chan__0;
chan.cljs$core$IFn$_invoke$arity$1 = chan__1;
chan.cljs$core$IFn$_invoke$arity$2 = chan__2;
chan.cljs$core$IFn$_invoke$arity$3 = chan__3;
return chan;
})()
;
/**
* Returns a channel that will close after msecs
*/
cljs.core.async.timeout = (function timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
* takes a val from port. Must be called inside a (go ...) block. Will
* return nil if closed. Will park if nothing is available.
* Returns true unless port is already closed
*/
cljs.core.async._LT__BANG_ = (function _LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
* Asynchronously takes a val from port, passing to fn1. Will pass nil
* if closed. If on-caller? (default true) is true, and value is
* immediately available, will call fn1 on calling thread.
* Returns nil.
*/
cljs.core.async.take_BANG_ = (function() {
var take_BANG_ = null;
var take_BANG___2 = (function (port,fn1){
return take_BANG_.call(null,port,fn1,true);
});
var take_BANG___3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_9540 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_9540);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_9540,ret){
return (function (){
return fn1.call(null,val_9540);
});})(val_9540,ret))
);
}
} else {
}

return null;
});
take_BANG_ = function(port,fn1,on_caller_QMARK_){
switch(arguments.length){
case 2:
return take_BANG___2.call(this,port,fn1);
case 3:
return take_BANG___3.call(this,port,fn1,on_caller_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
take_BANG_.cljs$core$IFn$_invoke$arity$2 = take_BANG___2;
take_BANG_.cljs$core$IFn$_invoke$arity$3 = take_BANG___3;
return take_BANG_;
})()
;
cljs.core.async.nop = (function nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
* puts a val into port. nil values are not allowed. Must be called
* inside a (go ...) block. Will park if no buffer space is available.
* Returns true unless port is already closed.
*/
cljs.core.async._GT__BANG_ = (function _GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
* Asynchronously puts a val into port, calling fn0 (if supplied) when
* complete. nil values are not allowed. Will throw if closed. If
* on-caller? (default true) is true, and the put is immediately
* accepted, will call fn0 on calling thread.  Returns nil.
*/
cljs.core.async.put_BANG_ = (function() {
var put_BANG_ = null;
var put_BANG___2 = (function (port,val){
var temp__4124__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__4124__auto__)){
var ret = temp__4124__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});
var put_BANG___3 = (function (port,val,fn1){
return put_BANG_.call(null,port,val,fn1,true);
});
var put_BANG___4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__4124__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__4124__auto__)){
var retb = temp__4124__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__4124__auto__){
return (function (){
return fn1.call(null,ret);
});})(ret,retb,temp__4124__auto__))
);
}

return ret;
} else {
return true;
}
});
put_BANG_ = function(port,val,fn1,on_caller_QMARK_){
switch(arguments.length){
case 2:
return put_BANG___2.call(this,port,val);
case 3:
return put_BANG___3.call(this,port,val,fn1);
case 4:
return put_BANG___4.call(this,port,val,fn1,on_caller_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
put_BANG_.cljs$core$IFn$_invoke$arity$2 = put_BANG___2;
put_BANG_.cljs$core$IFn$_invoke$arity$3 = put_BANG___3;
put_BANG_.cljs$core$IFn$_invoke$arity$4 = put_BANG___4;
return put_BANG_;
})()
;
cljs.core.async.close_BANG_ = (function close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function random_array(n){
var a = (new Array(n));
var n__4626__auto___9541 = n;
var x_9542 = (0);
while(true){
if((x_9542 < n__4626__auto___9541)){
(a[x_9542] = (0));

var G__9543 = (x_9542 + (1));
x_9542 = G__9543;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.call(null,i,n)){
return a;
} else {
var j = cljs.core.rand_int.call(null,i);
(a[i] = (a[j]));

(a[j] = i);

var G__9544 = (i + (1));
i = G__9544;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t9548 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t9548 = (function (flag,alt_flag,meta9549){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta9549 = meta9549;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t9548.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t9548.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t9548.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t9548.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_9550){
var self__ = this;
var _9550__$1 = this;
return self__.meta9549;
});})(flag))
;

cljs.core.async.t9548.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_9550,meta9549__$1){
var self__ = this;
var _9550__$1 = this;
return (new cljs.core.async.t9548(self__.flag,self__.alt_flag,meta9549__$1));
});})(flag))
;

cljs.core.async.t9548.cljs$lang$type = true;

cljs.core.async.t9548.cljs$lang$ctorStr = "cljs.core.async/t9548";

cljs.core.async.t9548.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4326__auto__,writer__4327__auto__,opt__4328__auto__){
return cljs.core._write.call(null,writer__4327__auto__,"cljs.core.async/t9548");
});})(flag))
;

cljs.core.async.__GT_t9548 = ((function (flag){
return (function __GT_t9548(flag__$1,alt_flag__$1,meta9549){
return (new cljs.core.async.t9548(flag__$1,alt_flag__$1,meta9549));
});})(flag))
;

}

return (new cljs.core.async.t9548(flag,alt_flag,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),15,new cljs.core.Keyword(null,"end-line","end-line",1837326455),146,new cljs.core.Keyword(null,"column","column",2078222095),5,new cljs.core.Keyword(null,"line","line",212345235),141,new cljs.core.Keyword(null,"file","file",-1269645878),"/home/jwaag/dev/clj/bingo/out/cljs/core/async.cljs"], null)));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){
if(typeof cljs.core.async.t9554 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t9554 = (function (cb,flag,alt_handler,meta9555){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta9555 = meta9555;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t9554.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t9554.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t9554.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t9554.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_9556){
var self__ = this;
var _9556__$1 = this;
return self__.meta9555;
});

cljs.core.async.t9554.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_9556,meta9555__$1){
var self__ = this;
var _9556__$1 = this;
return (new cljs.core.async.t9554(self__.cb,self__.flag,self__.alt_handler,meta9555__$1));
});

cljs.core.async.t9554.cljs$lang$type = true;

cljs.core.async.t9554.cljs$lang$ctorStr = "cljs.core.async/t9554";

cljs.core.async.t9554.cljs$lang$ctorPrWriter = (function (this__4326__auto__,writer__4327__auto__,opt__4328__auto__){
return cljs.core._write.call(null,writer__4327__auto__,"cljs.core.async/t9554");
});

cljs.core.async.__GT_t9554 = (function __GT_t9554(cb__$1,flag__$1,alt_handler__$1,meta9555){
return (new cljs.core.async.t9554(cb__$1,flag__$1,alt_handler__$1,meta9555));
});

}

return (new cljs.core.async.t9554(cb,flag,alt_handler,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),11,new cljs.core.Keyword(null,"end-line","end-line",1837326455),154,new cljs.core.Keyword(null,"column","column",2078222095),3,new cljs.core.Keyword(null,"line","line",212345235),149,new cljs.core.Keyword(null,"file","file",-1269645878),"/home/jwaag/dev/clj/bingo/out/cljs/core/async.cljs"], null)));
});
/**
* returns derefable [val port] if immediate, nil if enqueued
*/
cljs.core.async.do_alts = (function do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag.call(null);
var n = cljs.core.count.call(null,ports);
var idxs = cljs.core.async.random_array.call(null,n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.call(null,ports,idx);
var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));
return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__9557_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__9557_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__9558_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__9558_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__3739__auto__ = wport;
if(cljs.core.truth_(or__3739__auto__)){
return or__3739__auto__;
} else {
return port;
}
})()], null));
} else {
var G__9559 = (i + (1));
i = G__9559;
continue;
}
} else {
return null;
}
break;
}
})();
var or__3739__auto__ = ret;
if(cljs.core.truth_(or__3739__auto__)){
return or__3739__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__4126__auto__ = (function (){var and__3727__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__3727__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__3727__auto__;
}
})();
if(cljs.core.truth_(temp__4126__auto__)){
var got = temp__4126__auto__;
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
* Completes at most one of several channel operations. Must be called
* inside a (go ...) block. ports is a vector of channel endpoints,
* which can be either a channel to take from or a vector of
* [channel-to-put-to val-to-put], in any combination. Takes will be
* made as if by <!, and puts will be made as if by >!. Unless
* the :priority option is true, if more than one port operation is
* ready a non-deterministic choice will be made. If no operation is
* ready and a :default value is supplied, [default-val :default] will
* be returned, otherwise alts! will park until the first operation to
* become ready completes. Returns [val port] of the completed
* operation, where val is the value taken for takes, and a
* boolean (true unless already closed, as per put!) for puts.
* 
* opts are passed as :key val ... Supported options:
* 
* :default val - the value to use if none of the operations are immediately ready
* :priority true - (default nil) when true, the operations will be tried in order.
* 
* Note: there is no guarantee that the port exps or val exprs will be
* used, nor in what order should they be, so they should not be
* depended upon for side effects.
* @param {...*} var_args
*/
cljs.core.async.alts_BANG_ = (function() { 
var alts_BANG___delegate = function (ports,p__9560){
var map__9562 = p__9560;
var map__9562__$1 = ((cljs.core.seq_QMARK_.call(null,map__9562))?cljs.core.apply.call(null,cljs.core.hash_map,map__9562):map__9562);
var opts = map__9562__$1;
throw (new Error("alts! used not in (go ...) block"));
};
var alts_BANG_ = function (ports,var_args){
var p__9560 = null;
if (arguments.length > 1) {
  p__9560 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return alts_BANG___delegate.call(this,ports,p__9560);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__9563){
var ports = cljs.core.first(arglist__9563);
var p__9560 = cljs.core.rest(arglist__9563);
return alts_BANG___delegate(ports,p__9560);
});
alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = alts_BANG___delegate;
return alts_BANG_;
})()
;
/**
* Takes elements from the from channel and supplies them to the to
* channel. By default, the to channel will be closed when the from
* channel closes, but can be determined by the close?  parameter. Will
* stop consuming the from channel if the to channel closes
*/
cljs.core.async.pipe = (function() {
var pipe = null;
var pipe__2 = (function (from,to){
return pipe.call(null,from,to,true);
});
var pipe__3 = (function (from,to,close_QMARK_){
var c__6769__auto___9658 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6769__auto___9658){
return (function (){
var f__6770__auto__ = (function (){var switch__6713__auto__ = ((function (c__6769__auto___9658){
return (function (state_9634){
var state_val_9635 = (state_9634[(1)]);
if((state_val_9635 === (7))){
var inst_9630 = (state_9634[(2)]);
var state_9634__$1 = state_9634;
var statearr_9636_9659 = state_9634__$1;
(statearr_9636_9659[(2)] = inst_9630);

(statearr_9636_9659[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9635 === (1))){
var state_9634__$1 = state_9634;
var statearr_9637_9660 = state_9634__$1;
(statearr_9637_9660[(2)] = null);

(statearr_9637_9660[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9635 === (4))){
var inst_9613 = (state_9634[(7)]);
var inst_9613__$1 = (state_9634[(2)]);
var inst_9614 = (inst_9613__$1 == null);
var state_9634__$1 = (function (){var statearr_9638 = state_9634;
(statearr_9638[(7)] = inst_9613__$1);

return statearr_9638;
})();
if(cljs.core.truth_(inst_9614)){
var statearr_9639_9661 = state_9634__$1;
(statearr_9639_9661[(1)] = (5));

} else {
var statearr_9640_9662 = state_9634__$1;
(statearr_9640_9662[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9635 === (13))){
var state_9634__$1 = state_9634;
var statearr_9641_9663 = state_9634__$1;
(statearr_9641_9663[(2)] = null);

(statearr_9641_9663[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9635 === (6))){
var inst_9613 = (state_9634[(7)]);
var state_9634__$1 = state_9634;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_9634__$1,(11),to,inst_9613);
} else {
if((state_val_9635 === (3))){
var inst_9632 = (state_9634[(2)]);
var state_9634__$1 = state_9634;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9634__$1,inst_9632);
} else {
if((state_val_9635 === (12))){
var state_9634__$1 = state_9634;
var statearr_9642_9664 = state_9634__$1;
(statearr_9642_9664[(2)] = null);

(statearr_9642_9664[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9635 === (2))){
var state_9634__$1 = state_9634;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_9634__$1,(4),from);
} else {
if((state_val_9635 === (11))){
var inst_9623 = (state_9634[(2)]);
var state_9634__$1 = state_9634;
if(cljs.core.truth_(inst_9623)){
var statearr_9643_9665 = state_9634__$1;
(statearr_9643_9665[(1)] = (12));

} else {
var statearr_9644_9666 = state_9634__$1;
(statearr_9644_9666[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9635 === (9))){
var state_9634__$1 = state_9634;
var statearr_9645_9667 = state_9634__$1;
(statearr_9645_9667[(2)] = null);

(statearr_9645_9667[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9635 === (5))){
var state_9634__$1 = state_9634;
if(cljs.core.truth_(close_QMARK_)){
var statearr_9646_9668 = state_9634__$1;
(statearr_9646_9668[(1)] = (8));

} else {
var statearr_9647_9669 = state_9634__$1;
(statearr_9647_9669[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9635 === (14))){
var inst_9628 = (state_9634[(2)]);
var state_9634__$1 = state_9634;
var statearr_9648_9670 = state_9634__$1;
(statearr_9648_9670[(2)] = inst_9628);

(statearr_9648_9670[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9635 === (10))){
var inst_9620 = (state_9634[(2)]);
var state_9634__$1 = state_9634;
var statearr_9649_9671 = state_9634__$1;
(statearr_9649_9671[(2)] = inst_9620);

(statearr_9649_9671[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9635 === (8))){
var inst_9617 = cljs.core.async.close_BANG_.call(null,to);
var state_9634__$1 = state_9634;
var statearr_9650_9672 = state_9634__$1;
(statearr_9650_9672[(2)] = inst_9617);

(statearr_9650_9672[(1)] = (10));


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
}
});})(c__6769__auto___9658))
;
return ((function (switch__6713__auto__,c__6769__auto___9658){
return (function() {
var state_machine__6714__auto__ = null;
var state_machine__6714__auto____0 = (function (){
var statearr_9654 = [null,null,null,null,null,null,null,null];
(statearr_9654[(0)] = state_machine__6714__auto__);

(statearr_9654[(1)] = (1));

return statearr_9654;
});
var state_machine__6714__auto____1 = (function (state_9634){
while(true){
var ret_value__6715__auto__ = (function (){try{while(true){
var result__6716__auto__ = switch__6713__auto__.call(null,state_9634);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6716__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6716__auto__;
}
break;
}
}catch (e9655){if((e9655 instanceof Object)){
var ex__6717__auto__ = e9655;
var statearr_9656_9673 = state_9634;
(statearr_9656_9673[(5)] = ex__6717__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9634);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e9655;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6715__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__9674 = state_9634;
state_9634 = G__9674;
continue;
} else {
return ret_value__6715__auto__;
}
break;
}
});
state_machine__6714__auto__ = function(state_9634){
switch(arguments.length){
case 0:
return state_machine__6714__auto____0.call(this);
case 1:
return state_machine__6714__auto____1.call(this,state_9634);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6714__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6714__auto____0;
state_machine__6714__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6714__auto____1;
return state_machine__6714__auto__;
})()
;})(switch__6713__auto__,c__6769__auto___9658))
})();
var state__6771__auto__ = (function (){var statearr_9657 = f__6770__auto__.call(null);
(statearr_9657[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6769__auto___9658);

return statearr_9657;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6771__auto__);
});})(c__6769__auto___9658))
);


return to;
});
pipe = function(from,to,close_QMARK_){
switch(arguments.length){
case 2:
return pipe__2.call(this,from,to);
case 3:
return pipe__3.call(this,from,to,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
pipe.cljs$core$IFn$_invoke$arity$2 = pipe__2;
pipe.cljs$core$IFn$_invoke$arity$3 = pipe__3;
return pipe;
})()
;
cljs.core.async.pipeline_STAR_ = (function pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"pos?","pos?",-244377722,null),new cljs.core.Symbol(null,"n","n",-2092305744,null))))].join('')));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = ((function (jobs,results){
return (function (p__9858){
var vec__9859 = p__9858;
var v = cljs.core.nth.call(null,vec__9859,(0),null);
var p = cljs.core.nth.call(null,vec__9859,(1),null);
var job = vec__9859;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__6769__auto___10041 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6769__auto___10041,res,vec__9859,v,p,job,jobs,results){
return (function (){
var f__6770__auto__ = (function (){var switch__6713__auto__ = ((function (c__6769__auto___10041,res,vec__9859,v,p,job,jobs,results){
return (function (state_9864){
var state_val_9865 = (state_9864[(1)]);
if((state_val_9865 === (2))){
var inst_9861 = (state_9864[(2)]);
var inst_9862 = cljs.core.async.close_BANG_.call(null,res);
var state_9864__$1 = (function (){var statearr_9866 = state_9864;
(statearr_9866[(7)] = inst_9861);

return statearr_9866;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9864__$1,inst_9862);
} else {
if((state_val_9865 === (1))){
var state_9864__$1 = state_9864;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_9864__$1,(2),res,v);
} else {
return null;
}
}
});})(c__6769__auto___10041,res,vec__9859,v,p,job,jobs,results))
;
return ((function (switch__6713__auto__,c__6769__auto___10041,res,vec__9859,v,p,job,jobs,results){
return (function() {
var state_machine__6714__auto__ = null;
var state_machine__6714__auto____0 = (function (){
var statearr_9870 = [null,null,null,null,null,null,null,null];
(statearr_9870[(0)] = state_machine__6714__auto__);

(statearr_9870[(1)] = (1));

return statearr_9870;
});
var state_machine__6714__auto____1 = (function (state_9864){
while(true){
var ret_value__6715__auto__ = (function (){try{while(true){
var result__6716__auto__ = switch__6713__auto__.call(null,state_9864);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6716__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6716__auto__;
}
break;
}
}catch (e9871){if((e9871 instanceof Object)){
var ex__6717__auto__ = e9871;
var statearr_9872_10042 = state_9864;
(statearr_9872_10042[(5)] = ex__6717__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9864);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e9871;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6715__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__10043 = state_9864;
state_9864 = G__10043;
continue;
} else {
return ret_value__6715__auto__;
}
break;
}
});
state_machine__6714__auto__ = function(state_9864){
switch(arguments.length){
case 0:
return state_machine__6714__auto____0.call(this);
case 1:
return state_machine__6714__auto____1.call(this,state_9864);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6714__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6714__auto____0;
state_machine__6714__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6714__auto____1;
return state_machine__6714__auto__;
})()
;})(switch__6713__auto__,c__6769__auto___10041,res,vec__9859,v,p,job,jobs,results))
})();
var state__6771__auto__ = (function (){var statearr_9873 = f__6770__auto__.call(null);
(statearr_9873[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6769__auto___10041);

return statearr_9873;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6771__auto__);
});})(c__6769__auto___10041,res,vec__9859,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__9874){
var vec__9875 = p__9874;
var v = cljs.core.nth.call(null,vec__9875,(0),null);
var p = cljs.core.nth.call(null,vec__9875,(1),null);
var job = vec__9875;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1));
xf.call(null,v,res);

cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results,process))
;
var n__4626__auto___10044 = n;
var __10045 = (0);
while(true){
if((__10045 < n__4626__auto___10044)){
var G__9876_10046 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__9876_10046) {
case "async":
var c__6769__auto___10048 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__10045,c__6769__auto___10048,G__9876_10046,n__4626__auto___10044,jobs,results,process,async){
return (function (){
var f__6770__auto__ = (function (){var switch__6713__auto__ = ((function (__10045,c__6769__auto___10048,G__9876_10046,n__4626__auto___10044,jobs,results,process,async){
return (function (state_9889){
var state_val_9890 = (state_9889[(1)]);
if((state_val_9890 === (7))){
var inst_9885 = (state_9889[(2)]);
var state_9889__$1 = state_9889;
var statearr_9891_10049 = state_9889__$1;
(statearr_9891_10049[(2)] = inst_9885);

(statearr_9891_10049[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9890 === (6))){
var state_9889__$1 = state_9889;
var statearr_9892_10050 = state_9889__$1;
(statearr_9892_10050[(2)] = null);

(statearr_9892_10050[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9890 === (5))){
var state_9889__$1 = state_9889;
var statearr_9893_10051 = state_9889__$1;
(statearr_9893_10051[(2)] = null);

(statearr_9893_10051[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9890 === (4))){
var inst_9879 = (state_9889[(2)]);
var inst_9880 = async.call(null,inst_9879);
var state_9889__$1 = state_9889;
if(cljs.core.truth_(inst_9880)){
var statearr_9894_10052 = state_9889__$1;
(statearr_9894_10052[(1)] = (5));

} else {
var statearr_9895_10053 = state_9889__$1;
(statearr_9895_10053[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9890 === (3))){
var inst_9887 = (state_9889[(2)]);
var state_9889__$1 = state_9889;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9889__$1,inst_9887);
} else {
if((state_val_9890 === (2))){
var state_9889__$1 = state_9889;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_9889__$1,(4),jobs);
} else {
if((state_val_9890 === (1))){
var state_9889__$1 = state_9889;
var statearr_9896_10054 = state_9889__$1;
(statearr_9896_10054[(2)] = null);

(statearr_9896_10054[(1)] = (2));


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
});})(__10045,c__6769__auto___10048,G__9876_10046,n__4626__auto___10044,jobs,results,process,async))
;
return ((function (__10045,switch__6713__auto__,c__6769__auto___10048,G__9876_10046,n__4626__auto___10044,jobs,results,process,async){
return (function() {
var state_machine__6714__auto__ = null;
var state_machine__6714__auto____0 = (function (){
var statearr_9900 = [null,null,null,null,null,null,null];
(statearr_9900[(0)] = state_machine__6714__auto__);

(statearr_9900[(1)] = (1));

return statearr_9900;
});
var state_machine__6714__auto____1 = (function (state_9889){
while(true){
var ret_value__6715__auto__ = (function (){try{while(true){
var result__6716__auto__ = switch__6713__auto__.call(null,state_9889);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6716__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6716__auto__;
}
break;
}
}catch (e9901){if((e9901 instanceof Object)){
var ex__6717__auto__ = e9901;
var statearr_9902_10055 = state_9889;
(statearr_9902_10055[(5)] = ex__6717__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9889);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e9901;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6715__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__10056 = state_9889;
state_9889 = G__10056;
continue;
} else {
return ret_value__6715__auto__;
}
break;
}
});
state_machine__6714__auto__ = function(state_9889){
switch(arguments.length){
case 0:
return state_machine__6714__auto____0.call(this);
case 1:
return state_machine__6714__auto____1.call(this,state_9889);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6714__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6714__auto____0;
state_machine__6714__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6714__auto____1;
return state_machine__6714__auto__;
})()
;})(__10045,switch__6713__auto__,c__6769__auto___10048,G__9876_10046,n__4626__auto___10044,jobs,results,process,async))
})();
var state__6771__auto__ = (function (){var statearr_9903 = f__6770__auto__.call(null);
(statearr_9903[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6769__auto___10048);

return statearr_9903;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6771__auto__);
});})(__10045,c__6769__auto___10048,G__9876_10046,n__4626__auto___10044,jobs,results,process,async))
);


break;
case "compute":
var c__6769__auto___10057 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__10045,c__6769__auto___10057,G__9876_10046,n__4626__auto___10044,jobs,results,process,async){
return (function (){
var f__6770__auto__ = (function (){var switch__6713__auto__ = ((function (__10045,c__6769__auto___10057,G__9876_10046,n__4626__auto___10044,jobs,results,process,async){
return (function (state_9916){
var state_val_9917 = (state_9916[(1)]);
if((state_val_9917 === (7))){
var inst_9912 = (state_9916[(2)]);
var state_9916__$1 = state_9916;
var statearr_9918_10058 = state_9916__$1;
(statearr_9918_10058[(2)] = inst_9912);

(statearr_9918_10058[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9917 === (6))){
var state_9916__$1 = state_9916;
var statearr_9919_10059 = state_9916__$1;
(statearr_9919_10059[(2)] = null);

(statearr_9919_10059[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9917 === (5))){
var state_9916__$1 = state_9916;
var statearr_9920_10060 = state_9916__$1;
(statearr_9920_10060[(2)] = null);

(statearr_9920_10060[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9917 === (4))){
var inst_9906 = (state_9916[(2)]);
var inst_9907 = process.call(null,inst_9906);
var state_9916__$1 = state_9916;
if(cljs.core.truth_(inst_9907)){
var statearr_9921_10061 = state_9916__$1;
(statearr_9921_10061[(1)] = (5));

} else {
var statearr_9922_10062 = state_9916__$1;
(statearr_9922_10062[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9917 === (3))){
var inst_9914 = (state_9916[(2)]);
var state_9916__$1 = state_9916;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9916__$1,inst_9914);
} else {
if((state_val_9917 === (2))){
var state_9916__$1 = state_9916;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_9916__$1,(4),jobs);
} else {
if((state_val_9917 === (1))){
var state_9916__$1 = state_9916;
var statearr_9923_10063 = state_9916__$1;
(statearr_9923_10063[(2)] = null);

(statearr_9923_10063[(1)] = (2));


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
});})(__10045,c__6769__auto___10057,G__9876_10046,n__4626__auto___10044,jobs,results,process,async))
;
return ((function (__10045,switch__6713__auto__,c__6769__auto___10057,G__9876_10046,n__4626__auto___10044,jobs,results,process,async){
return (function() {
var state_machine__6714__auto__ = null;
var state_machine__6714__auto____0 = (function (){
var statearr_9927 = [null,null,null,null,null,null,null];
(statearr_9927[(0)] = state_machine__6714__auto__);

(statearr_9927[(1)] = (1));

return statearr_9927;
});
var state_machine__6714__auto____1 = (function (state_9916){
while(true){
var ret_value__6715__auto__ = (function (){try{while(true){
var result__6716__auto__ = switch__6713__auto__.call(null,state_9916);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6716__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6716__auto__;
}
break;
}
}catch (e9928){if((e9928 instanceof Object)){
var ex__6717__auto__ = e9928;
var statearr_9929_10064 = state_9916;
(statearr_9929_10064[(5)] = ex__6717__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9916);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e9928;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6715__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__10065 = state_9916;
state_9916 = G__10065;
continue;
} else {
return ret_value__6715__auto__;
}
break;
}
});
state_machine__6714__auto__ = function(state_9916){
switch(arguments.length){
case 0:
return state_machine__6714__auto____0.call(this);
case 1:
return state_machine__6714__auto____1.call(this,state_9916);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6714__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6714__auto____0;
state_machine__6714__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6714__auto____1;
return state_machine__6714__auto__;
})()
;})(__10045,switch__6713__auto__,c__6769__auto___10057,G__9876_10046,n__4626__auto___10044,jobs,results,process,async))
})();
var state__6771__auto__ = (function (){var statearr_9930 = f__6770__auto__.call(null);
(statearr_9930[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6769__auto___10057);

return statearr_9930;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6771__auto__);
});})(__10045,c__6769__auto___10057,G__9876_10046,n__4626__auto___10044,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__10066 = (__10045 + (1));
__10045 = G__10066;
continue;
} else {
}
break;
}

var c__6769__auto___10067 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6769__auto___10067,jobs,results,process,async){
return (function (){
var f__6770__auto__ = (function (){var switch__6713__auto__ = ((function (c__6769__auto___10067,jobs,results,process,async){
return (function (state_9952){
var state_val_9953 = (state_9952[(1)]);
if((state_val_9953 === (9))){
var inst_9945 = (state_9952[(2)]);
var state_9952__$1 = (function (){var statearr_9954 = state_9952;
(statearr_9954[(7)] = inst_9945);

return statearr_9954;
})();
var statearr_9955_10068 = state_9952__$1;
(statearr_9955_10068[(2)] = null);

(statearr_9955_10068[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9953 === (8))){
var inst_9938 = (state_9952[(8)]);
var inst_9943 = (state_9952[(2)]);
var state_9952__$1 = (function (){var statearr_9956 = state_9952;
(statearr_9956[(9)] = inst_9943);

return statearr_9956;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_9952__$1,(9),results,inst_9938);
} else {
if((state_val_9953 === (7))){
var inst_9948 = (state_9952[(2)]);
var state_9952__$1 = state_9952;
var statearr_9957_10069 = state_9952__$1;
(statearr_9957_10069[(2)] = inst_9948);

(statearr_9957_10069[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9953 === (6))){
var inst_9933 = (state_9952[(10)]);
var inst_9938 = (state_9952[(8)]);
var inst_9938__$1 = cljs.core.async.chan.call(null,(1));
var inst_9939 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_9940 = [inst_9933,inst_9938__$1];
var inst_9941 = (new cljs.core.PersistentVector(null,2,(5),inst_9939,inst_9940,null));
var state_9952__$1 = (function (){var statearr_9958 = state_9952;
(statearr_9958[(8)] = inst_9938__$1);

return statearr_9958;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_9952__$1,(8),jobs,inst_9941);
} else {
if((state_val_9953 === (5))){
var inst_9936 = cljs.core.async.close_BANG_.call(null,jobs);
var state_9952__$1 = state_9952;
var statearr_9959_10070 = state_9952__$1;
(statearr_9959_10070[(2)] = inst_9936);

(statearr_9959_10070[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9953 === (4))){
var inst_9933 = (state_9952[(10)]);
var inst_9933__$1 = (state_9952[(2)]);
var inst_9934 = (inst_9933__$1 == null);
var state_9952__$1 = (function (){var statearr_9960 = state_9952;
(statearr_9960[(10)] = inst_9933__$1);

return statearr_9960;
})();
if(cljs.core.truth_(inst_9934)){
var statearr_9961_10071 = state_9952__$1;
(statearr_9961_10071[(1)] = (5));

} else {
var statearr_9962_10072 = state_9952__$1;
(statearr_9962_10072[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9953 === (3))){
var inst_9950 = (state_9952[(2)]);
var state_9952__$1 = state_9952;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9952__$1,inst_9950);
} else {
if((state_val_9953 === (2))){
var state_9952__$1 = state_9952;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_9952__$1,(4),from);
} else {
if((state_val_9953 === (1))){
var state_9952__$1 = state_9952;
var statearr_9963_10073 = state_9952__$1;
(statearr_9963_10073[(2)] = null);

(statearr_9963_10073[(1)] = (2));


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
});})(c__6769__auto___10067,jobs,results,process,async))
;
return ((function (switch__6713__auto__,c__6769__auto___10067,jobs,results,process,async){
return (function() {
var state_machine__6714__auto__ = null;
var state_machine__6714__auto____0 = (function (){
var statearr_9967 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_9967[(0)] = state_machine__6714__auto__);

(statearr_9967[(1)] = (1));

return statearr_9967;
});
var state_machine__6714__auto____1 = (function (state_9952){
while(true){
var ret_value__6715__auto__ = (function (){try{while(true){
var result__6716__auto__ = switch__6713__auto__.call(null,state_9952);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6716__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6716__auto__;
}
break;
}
}catch (e9968){if((e9968 instanceof Object)){
var ex__6717__auto__ = e9968;
var statearr_9969_10074 = state_9952;
(statearr_9969_10074[(5)] = ex__6717__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9952);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e9968;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6715__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__10075 = state_9952;
state_9952 = G__10075;
continue;
} else {
return ret_value__6715__auto__;
}
break;
}
});
state_machine__6714__auto__ = function(state_9952){
switch(arguments.length){
case 0:
return state_machine__6714__auto____0.call(this);
case 1:
return state_machine__6714__auto____1.call(this,state_9952);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6714__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6714__auto____0;
state_machine__6714__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6714__auto____1;
return state_machine__6714__auto__;
})()
;})(switch__6713__auto__,c__6769__auto___10067,jobs,results,process,async))
})();
var state__6771__auto__ = (function (){var statearr_9970 = f__6770__auto__.call(null);
(statearr_9970[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6769__auto___10067);

return statearr_9970;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6771__auto__);
});})(c__6769__auto___10067,jobs,results,process,async))
);


var c__6769__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6769__auto__,jobs,results,process,async){
return (function (){
var f__6770__auto__ = (function (){var switch__6713__auto__ = ((function (c__6769__auto__,jobs,results,process,async){
return (function (state_10008){
var state_val_10009 = (state_10008[(1)]);
if((state_val_10009 === (7))){
var inst_10004 = (state_10008[(2)]);
var state_10008__$1 = state_10008;
var statearr_10010_10076 = state_10008__$1;
(statearr_10010_10076[(2)] = inst_10004);

(statearr_10010_10076[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10009 === (20))){
var state_10008__$1 = state_10008;
var statearr_10011_10077 = state_10008__$1;
(statearr_10011_10077[(2)] = null);

(statearr_10011_10077[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10009 === (1))){
var state_10008__$1 = state_10008;
var statearr_10012_10078 = state_10008__$1;
(statearr_10012_10078[(2)] = null);

(statearr_10012_10078[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10009 === (4))){
var inst_9973 = (state_10008[(7)]);
var inst_9973__$1 = (state_10008[(2)]);
var inst_9974 = (inst_9973__$1 == null);
var state_10008__$1 = (function (){var statearr_10013 = state_10008;
(statearr_10013[(7)] = inst_9973__$1);

return statearr_10013;
})();
if(cljs.core.truth_(inst_9974)){
var statearr_10014_10079 = state_10008__$1;
(statearr_10014_10079[(1)] = (5));

} else {
var statearr_10015_10080 = state_10008__$1;
(statearr_10015_10080[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10009 === (15))){
var inst_9986 = (state_10008[(8)]);
var state_10008__$1 = state_10008;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_10008__$1,(18),to,inst_9986);
} else {
if((state_val_10009 === (21))){
var inst_9999 = (state_10008[(2)]);
var state_10008__$1 = state_10008;
var statearr_10016_10081 = state_10008__$1;
(statearr_10016_10081[(2)] = inst_9999);

(statearr_10016_10081[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10009 === (13))){
var inst_10001 = (state_10008[(2)]);
var state_10008__$1 = (function (){var statearr_10017 = state_10008;
(statearr_10017[(9)] = inst_10001);

return statearr_10017;
})();
var statearr_10018_10082 = state_10008__$1;
(statearr_10018_10082[(2)] = null);

(statearr_10018_10082[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10009 === (6))){
var inst_9973 = (state_10008[(7)]);
var state_10008__$1 = state_10008;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10008__$1,(11),inst_9973);
} else {
if((state_val_10009 === (17))){
var inst_9994 = (state_10008[(2)]);
var state_10008__$1 = state_10008;
if(cljs.core.truth_(inst_9994)){
var statearr_10019_10083 = state_10008__$1;
(statearr_10019_10083[(1)] = (19));

} else {
var statearr_10020_10084 = state_10008__$1;
(statearr_10020_10084[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10009 === (3))){
var inst_10006 = (state_10008[(2)]);
var state_10008__$1 = state_10008;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10008__$1,inst_10006);
} else {
if((state_val_10009 === (12))){
var inst_9983 = (state_10008[(10)]);
var state_10008__$1 = state_10008;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10008__$1,(14),inst_9983);
} else {
if((state_val_10009 === (2))){
var state_10008__$1 = state_10008;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10008__$1,(4),results);
} else {
if((state_val_10009 === (19))){
var state_10008__$1 = state_10008;
var statearr_10021_10085 = state_10008__$1;
(statearr_10021_10085[(2)] = null);

(statearr_10021_10085[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10009 === (11))){
var inst_9983 = (state_10008[(2)]);
var state_10008__$1 = (function (){var statearr_10022 = state_10008;
(statearr_10022[(10)] = inst_9983);

return statearr_10022;
})();
var statearr_10023_10086 = state_10008__$1;
(statearr_10023_10086[(2)] = null);

(statearr_10023_10086[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10009 === (9))){
var state_10008__$1 = state_10008;
var statearr_10024_10087 = state_10008__$1;
(statearr_10024_10087[(2)] = null);

(statearr_10024_10087[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10009 === (5))){
var state_10008__$1 = state_10008;
if(cljs.core.truth_(close_QMARK_)){
var statearr_10025_10088 = state_10008__$1;
(statearr_10025_10088[(1)] = (8));

} else {
var statearr_10026_10089 = state_10008__$1;
(statearr_10026_10089[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10009 === (14))){
var inst_9988 = (state_10008[(11)]);
var inst_9986 = (state_10008[(8)]);
var inst_9986__$1 = (state_10008[(2)]);
var inst_9987 = (inst_9986__$1 == null);
var inst_9988__$1 = cljs.core.not.call(null,inst_9987);
var state_10008__$1 = (function (){var statearr_10027 = state_10008;
(statearr_10027[(11)] = inst_9988__$1);

(statearr_10027[(8)] = inst_9986__$1);

return statearr_10027;
})();
if(inst_9988__$1){
var statearr_10028_10090 = state_10008__$1;
(statearr_10028_10090[(1)] = (15));

} else {
var statearr_10029_10091 = state_10008__$1;
(statearr_10029_10091[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10009 === (16))){
var inst_9988 = (state_10008[(11)]);
var state_10008__$1 = state_10008;
var statearr_10030_10092 = state_10008__$1;
(statearr_10030_10092[(2)] = inst_9988);

(statearr_10030_10092[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10009 === (10))){
var inst_9980 = (state_10008[(2)]);
var state_10008__$1 = state_10008;
var statearr_10031_10093 = state_10008__$1;
(statearr_10031_10093[(2)] = inst_9980);

(statearr_10031_10093[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10009 === (18))){
var inst_9991 = (state_10008[(2)]);
var state_10008__$1 = state_10008;
var statearr_10032_10094 = state_10008__$1;
(statearr_10032_10094[(2)] = inst_9991);

(statearr_10032_10094[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10009 === (8))){
var inst_9977 = cljs.core.async.close_BANG_.call(null,to);
var state_10008__$1 = state_10008;
var statearr_10033_10095 = state_10008__$1;
(statearr_10033_10095[(2)] = inst_9977);

(statearr_10033_10095[(1)] = (10));


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
}
}
}
}
}
}
}
}
});})(c__6769__auto__,jobs,results,process,async))
;
return ((function (switch__6713__auto__,c__6769__auto__,jobs,results,process,async){
return (function() {
var state_machine__6714__auto__ = null;
var state_machine__6714__auto____0 = (function (){
var statearr_10037 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_10037[(0)] = state_machine__6714__auto__);

(statearr_10037[(1)] = (1));

return statearr_10037;
});
var state_machine__6714__auto____1 = (function (state_10008){
while(true){
var ret_value__6715__auto__ = (function (){try{while(true){
var result__6716__auto__ = switch__6713__auto__.call(null,state_10008);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6716__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6716__auto__;
}
break;
}
}catch (e10038){if((e10038 instanceof Object)){
var ex__6717__auto__ = e10038;
var statearr_10039_10096 = state_10008;
(statearr_10039_10096[(5)] = ex__6717__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10008);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e10038;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6715__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__10097 = state_10008;
state_10008 = G__10097;
continue;
} else {
return ret_value__6715__auto__;
}
break;
}
});
state_machine__6714__auto__ = function(state_10008){
switch(arguments.length){
case 0:
return state_machine__6714__auto____0.call(this);
case 1:
return state_machine__6714__auto____1.call(this,state_10008);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6714__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6714__auto____0;
state_machine__6714__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6714__auto____1;
return state_machine__6714__auto__;
})()
;})(switch__6713__auto__,c__6769__auto__,jobs,results,process,async))
})();
var state__6771__auto__ = (function (){var statearr_10040 = f__6770__auto__.call(null);
(statearr_10040[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6769__auto__);

return statearr_10040;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6771__auto__);
});})(c__6769__auto__,jobs,results,process,async))
);

return c__6769__auto__;
});
/**
* Takes elements from the from channel and supplies them to the to
* channel, subject to the async function af, with parallelism n. af
* must be a function of two arguments, the first an input value and
* the second a channel on which to place the result(s). af must close!
* the channel before returning.  The presumption is that af will
* return immediately, having launched some asynchronous operation
* whose completion/callback will manipulate the result channel. Outputs
* will be returned in order relative to  the inputs. By default, the to
* channel will be closed when the from channel closes, but can be
* determined by the close?  parameter. Will stop consuming the from
* channel if the to channel closes.
*/
cljs.core.async.pipeline_async = (function() {
var pipeline_async = null;
var pipeline_async__4 = (function (n,to,af,from){
return pipeline_async.call(null,n,to,af,from,true);
});
var pipeline_async__5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
});
pipeline_async = function(n,to,af,from,close_QMARK_){
switch(arguments.length){
case 4:
return pipeline_async__4.call(this,n,to,af,from);
case 5:
return pipeline_async__5.call(this,n,to,af,from,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
pipeline_async.cljs$core$IFn$_invoke$arity$4 = pipeline_async__4;
pipeline_async.cljs$core$IFn$_invoke$arity$5 = pipeline_async__5;
return pipeline_async;
})()
;
/**
* Takes elements from the from channel and supplies them to the to
* channel, subject to the transducer xf, with parallelism n. Because
* it is parallel, the transducer will be applied independently to each
* element, not across elements, and may produce zero or more outputs
* per input.  Outputs will be returned in order relative to the
* inputs. By default, the to channel will be closed when the from
* channel closes, but can be determined by the close?  parameter. Will
* stop consuming the from channel if the to channel closes.
* 
* Note this is supplied for API compatibility with the Clojure version.
* Values of N > 1 will not result in actual concurrency in a
* single-threaded runtime.
*/
cljs.core.async.pipeline = (function() {
var pipeline = null;
var pipeline__4 = (function (n,to,xf,from){
return pipeline.call(null,n,to,xf,from,true);
});
var pipeline__5 = (function (n,to,xf,from,close_QMARK_){
return pipeline.call(null,n,to,xf,from,close_QMARK_,null);
});
var pipeline__6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
});
pipeline = function(n,to,xf,from,close_QMARK_,ex_handler){
switch(arguments.length){
case 4:
return pipeline__4.call(this,n,to,xf,from);
case 5:
return pipeline__5.call(this,n,to,xf,from,close_QMARK_);
case 6:
return pipeline__6.call(this,n,to,xf,from,close_QMARK_,ex_handler);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
pipeline.cljs$core$IFn$_invoke$arity$4 = pipeline__4;
pipeline.cljs$core$IFn$_invoke$arity$5 = pipeline__5;
pipeline.cljs$core$IFn$_invoke$arity$6 = pipeline__6;
return pipeline;
})()
;
/**
* Takes a predicate and a source channel and returns a vector of two
* channels, the first of which will contain the values for which the
* predicate returned true, the second those for which it returned
* false.
* 
* The out channels will be unbuffered by default, or two buf-or-ns can
* be supplied. The channels will close after the source channel has
* closed.
*/
cljs.core.async.split = (function() {
var split = null;
var split__2 = (function (p,ch){
return split.call(null,p,ch,null,null);
});
var split__4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__6769__auto___10198 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6769__auto___10198,tc,fc){
return (function (){
var f__6770__auto__ = (function (){var switch__6713__auto__ = ((function (c__6769__auto___10198,tc,fc){
return (function (state_10173){
var state_val_10174 = (state_10173[(1)]);
if((state_val_10174 === (7))){
var inst_10169 = (state_10173[(2)]);
var state_10173__$1 = state_10173;
var statearr_10175_10199 = state_10173__$1;
(statearr_10175_10199[(2)] = inst_10169);

(statearr_10175_10199[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10174 === (1))){
var state_10173__$1 = state_10173;
var statearr_10176_10200 = state_10173__$1;
(statearr_10176_10200[(2)] = null);

(statearr_10176_10200[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10174 === (4))){
var inst_10150 = (state_10173[(7)]);
var inst_10150__$1 = (state_10173[(2)]);
var inst_10151 = (inst_10150__$1 == null);
var state_10173__$1 = (function (){var statearr_10177 = state_10173;
(statearr_10177[(7)] = inst_10150__$1);

return statearr_10177;
})();
if(cljs.core.truth_(inst_10151)){
var statearr_10178_10201 = state_10173__$1;
(statearr_10178_10201[(1)] = (5));

} else {
var statearr_10179_10202 = state_10173__$1;
(statearr_10179_10202[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10174 === (13))){
var state_10173__$1 = state_10173;
var statearr_10180_10203 = state_10173__$1;
(statearr_10180_10203[(2)] = null);

(statearr_10180_10203[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10174 === (6))){
var inst_10150 = (state_10173[(7)]);
var inst_10156 = p.call(null,inst_10150);
var state_10173__$1 = state_10173;
if(cljs.core.truth_(inst_10156)){
var statearr_10181_10204 = state_10173__$1;
(statearr_10181_10204[(1)] = (9));

} else {
var statearr_10182_10205 = state_10173__$1;
(statearr_10182_10205[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10174 === (3))){
var inst_10171 = (state_10173[(2)]);
var state_10173__$1 = state_10173;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10173__$1,inst_10171);
} else {
if((state_val_10174 === (12))){
var state_10173__$1 = state_10173;
var statearr_10183_10206 = state_10173__$1;
(statearr_10183_10206[(2)] = null);

(statearr_10183_10206[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10174 === (2))){
var state_10173__$1 = state_10173;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10173__$1,(4),ch);
} else {
if((state_val_10174 === (11))){
var inst_10150 = (state_10173[(7)]);
var inst_10160 = (state_10173[(2)]);
var state_10173__$1 = state_10173;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_10173__$1,(8),inst_10160,inst_10150);
} else {
if((state_val_10174 === (9))){
var state_10173__$1 = state_10173;
var statearr_10184_10207 = state_10173__$1;
(statearr_10184_10207[(2)] = tc);

(statearr_10184_10207[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10174 === (5))){
var inst_10153 = cljs.core.async.close_BANG_.call(null,tc);
var inst_10154 = cljs.core.async.close_BANG_.call(null,fc);
var state_10173__$1 = (function (){var statearr_10185 = state_10173;
(statearr_10185[(8)] = inst_10153);

return statearr_10185;
})();
var statearr_10186_10208 = state_10173__$1;
(statearr_10186_10208[(2)] = inst_10154);

(statearr_10186_10208[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10174 === (14))){
var inst_10167 = (state_10173[(2)]);
var state_10173__$1 = state_10173;
var statearr_10187_10209 = state_10173__$1;
(statearr_10187_10209[(2)] = inst_10167);

(statearr_10187_10209[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10174 === (10))){
var state_10173__$1 = state_10173;
var statearr_10188_10210 = state_10173__$1;
(statearr_10188_10210[(2)] = fc);

(statearr_10188_10210[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10174 === (8))){
var inst_10162 = (state_10173[(2)]);
var state_10173__$1 = state_10173;
if(cljs.core.truth_(inst_10162)){
var statearr_10189_10211 = state_10173__$1;
(statearr_10189_10211[(1)] = (12));

} else {
var statearr_10190_10212 = state_10173__$1;
(statearr_10190_10212[(1)] = (13));

}

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
}
});})(c__6769__auto___10198,tc,fc))
;
return ((function (switch__6713__auto__,c__6769__auto___10198,tc,fc){
return (function() {
var state_machine__6714__auto__ = null;
var state_machine__6714__auto____0 = (function (){
var statearr_10194 = [null,null,null,null,null,null,null,null,null];
(statearr_10194[(0)] = state_machine__6714__auto__);

(statearr_10194[(1)] = (1));

return statearr_10194;
});
var state_machine__6714__auto____1 = (function (state_10173){
while(true){
var ret_value__6715__auto__ = (function (){try{while(true){
var result__6716__auto__ = switch__6713__auto__.call(null,state_10173);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6716__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6716__auto__;
}
break;
}
}catch (e10195){if((e10195 instanceof Object)){
var ex__6717__auto__ = e10195;
var statearr_10196_10213 = state_10173;
(statearr_10196_10213[(5)] = ex__6717__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10173);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e10195;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6715__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__10214 = state_10173;
state_10173 = G__10214;
continue;
} else {
return ret_value__6715__auto__;
}
break;
}
});
state_machine__6714__auto__ = function(state_10173){
switch(arguments.length){
case 0:
return state_machine__6714__auto____0.call(this);
case 1:
return state_machine__6714__auto____1.call(this,state_10173);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6714__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6714__auto____0;
state_machine__6714__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6714__auto____1;
return state_machine__6714__auto__;
})()
;})(switch__6713__auto__,c__6769__auto___10198,tc,fc))
})();
var state__6771__auto__ = (function (){var statearr_10197 = f__6770__auto__.call(null);
(statearr_10197[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6769__auto___10198);

return statearr_10197;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6771__auto__);
});})(c__6769__auto___10198,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});
split = function(p,ch,t_buf_or_n,f_buf_or_n){
switch(arguments.length){
case 2:
return split__2.call(this,p,ch);
case 4:
return split__4.call(this,p,ch,t_buf_or_n,f_buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
split.cljs$core$IFn$_invoke$arity$2 = split__2;
split.cljs$core$IFn$_invoke$arity$4 = split__4;
return split;
})()
;
/**
* f should be a function of 2 arguments. Returns a channel containing
* the single result of applying f to init and the first item from the
* channel, then applying f to that result and the 2nd item, etc. If
* the channel closes without yielding items, returns init and f is not
* called. ch must close before reduce produces a result.
*/
cljs.core.async.reduce = (function reduce(f,init,ch){
var c__6769__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6769__auto__){
return (function (){
var f__6770__auto__ = (function (){var switch__6713__auto__ = ((function (c__6769__auto__){
return (function (state_10261){
var state_val_10262 = (state_10261[(1)]);
if((state_val_10262 === (7))){
var inst_10257 = (state_10261[(2)]);
var state_10261__$1 = state_10261;
var statearr_10263_10279 = state_10261__$1;
(statearr_10263_10279[(2)] = inst_10257);

(statearr_10263_10279[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10262 === (6))){
var inst_10247 = (state_10261[(7)]);
var inst_10250 = (state_10261[(8)]);
var inst_10254 = f.call(null,inst_10247,inst_10250);
var inst_10247__$1 = inst_10254;
var state_10261__$1 = (function (){var statearr_10264 = state_10261;
(statearr_10264[(7)] = inst_10247__$1);

return statearr_10264;
})();
var statearr_10265_10280 = state_10261__$1;
(statearr_10265_10280[(2)] = null);

(statearr_10265_10280[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10262 === (5))){
var inst_10247 = (state_10261[(7)]);
var state_10261__$1 = state_10261;
var statearr_10266_10281 = state_10261__$1;
(statearr_10266_10281[(2)] = inst_10247);

(statearr_10266_10281[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10262 === (4))){
var inst_10250 = (state_10261[(8)]);
var inst_10250__$1 = (state_10261[(2)]);
var inst_10251 = (inst_10250__$1 == null);
var state_10261__$1 = (function (){var statearr_10267 = state_10261;
(statearr_10267[(8)] = inst_10250__$1);

return statearr_10267;
})();
if(cljs.core.truth_(inst_10251)){
var statearr_10268_10282 = state_10261__$1;
(statearr_10268_10282[(1)] = (5));

} else {
var statearr_10269_10283 = state_10261__$1;
(statearr_10269_10283[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10262 === (3))){
var inst_10259 = (state_10261[(2)]);
var state_10261__$1 = state_10261;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10261__$1,inst_10259);
} else {
if((state_val_10262 === (2))){
var state_10261__$1 = state_10261;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10261__$1,(4),ch);
} else {
if((state_val_10262 === (1))){
var inst_10247 = init;
var state_10261__$1 = (function (){var statearr_10270 = state_10261;
(statearr_10270[(7)] = inst_10247);

return statearr_10270;
})();
var statearr_10271_10284 = state_10261__$1;
(statearr_10271_10284[(2)] = null);

(statearr_10271_10284[(1)] = (2));


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
});})(c__6769__auto__))
;
return ((function (switch__6713__auto__,c__6769__auto__){
return (function() {
var state_machine__6714__auto__ = null;
var state_machine__6714__auto____0 = (function (){
var statearr_10275 = [null,null,null,null,null,null,null,null,null];
(statearr_10275[(0)] = state_machine__6714__auto__);

(statearr_10275[(1)] = (1));

return statearr_10275;
});
var state_machine__6714__auto____1 = (function (state_10261){
while(true){
var ret_value__6715__auto__ = (function (){try{while(true){
var result__6716__auto__ = switch__6713__auto__.call(null,state_10261);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6716__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6716__auto__;
}
break;
}
}catch (e10276){if((e10276 instanceof Object)){
var ex__6717__auto__ = e10276;
var statearr_10277_10285 = state_10261;
(statearr_10277_10285[(5)] = ex__6717__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10261);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e10276;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6715__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__10286 = state_10261;
state_10261 = G__10286;
continue;
} else {
return ret_value__6715__auto__;
}
break;
}
});
state_machine__6714__auto__ = function(state_10261){
switch(arguments.length){
case 0:
return state_machine__6714__auto____0.call(this);
case 1:
return state_machine__6714__auto____1.call(this,state_10261);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6714__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6714__auto____0;
state_machine__6714__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6714__auto____1;
return state_machine__6714__auto__;
})()
;})(switch__6713__auto__,c__6769__auto__))
})();
var state__6771__auto__ = (function (){var statearr_10278 = f__6770__auto__.call(null);
(statearr_10278[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6769__auto__);

return statearr_10278;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6771__auto__);
});})(c__6769__auto__))
);

return c__6769__auto__;
});
/**
* Puts the contents of coll into the supplied channel.
* 
* By default the channel will be closed after the items are copied,
* but can be determined by the close? parameter.
* 
* Returns a channel which will close after the items are copied.
*/
cljs.core.async.onto_chan = (function() {
var onto_chan = null;
var onto_chan__2 = (function (ch,coll){
return onto_chan.call(null,ch,coll,true);
});
var onto_chan__3 = (function (ch,coll,close_QMARK_){
var c__6769__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6769__auto__){
return (function (){
var f__6770__auto__ = (function (){var switch__6713__auto__ = ((function (c__6769__auto__){
return (function (state_10360){
var state_val_10361 = (state_10360[(1)]);
if((state_val_10361 === (7))){
var inst_10342 = (state_10360[(2)]);
var state_10360__$1 = state_10360;
var statearr_10362_10385 = state_10360__$1;
(statearr_10362_10385[(2)] = inst_10342);

(statearr_10362_10385[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10361 === (1))){
var inst_10336 = cljs.core.seq.call(null,coll);
var inst_10337 = inst_10336;
var state_10360__$1 = (function (){var statearr_10363 = state_10360;
(statearr_10363[(7)] = inst_10337);

return statearr_10363;
})();
var statearr_10364_10386 = state_10360__$1;
(statearr_10364_10386[(2)] = null);

(statearr_10364_10386[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10361 === (4))){
var inst_10337 = (state_10360[(7)]);
var inst_10340 = cljs.core.first.call(null,inst_10337);
var state_10360__$1 = state_10360;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_10360__$1,(7),ch,inst_10340);
} else {
if((state_val_10361 === (13))){
var inst_10354 = (state_10360[(2)]);
var state_10360__$1 = state_10360;
var statearr_10365_10387 = state_10360__$1;
(statearr_10365_10387[(2)] = inst_10354);

(statearr_10365_10387[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10361 === (6))){
var inst_10345 = (state_10360[(2)]);
var state_10360__$1 = state_10360;
if(cljs.core.truth_(inst_10345)){
var statearr_10366_10388 = state_10360__$1;
(statearr_10366_10388[(1)] = (8));

} else {
var statearr_10367_10389 = state_10360__$1;
(statearr_10367_10389[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10361 === (3))){
var inst_10358 = (state_10360[(2)]);
var state_10360__$1 = state_10360;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10360__$1,inst_10358);
} else {
if((state_val_10361 === (12))){
var state_10360__$1 = state_10360;
var statearr_10368_10390 = state_10360__$1;
(statearr_10368_10390[(2)] = null);

(statearr_10368_10390[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10361 === (2))){
var inst_10337 = (state_10360[(7)]);
var state_10360__$1 = state_10360;
if(cljs.core.truth_(inst_10337)){
var statearr_10369_10391 = state_10360__$1;
(statearr_10369_10391[(1)] = (4));

} else {
var statearr_10370_10392 = state_10360__$1;
(statearr_10370_10392[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10361 === (11))){
var inst_10351 = cljs.core.async.close_BANG_.call(null,ch);
var state_10360__$1 = state_10360;
var statearr_10371_10393 = state_10360__$1;
(statearr_10371_10393[(2)] = inst_10351);

(statearr_10371_10393[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10361 === (9))){
var state_10360__$1 = state_10360;
if(cljs.core.truth_(close_QMARK_)){
var statearr_10372_10394 = state_10360__$1;
(statearr_10372_10394[(1)] = (11));

} else {
var statearr_10373_10395 = state_10360__$1;
(statearr_10373_10395[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10361 === (5))){
var inst_10337 = (state_10360[(7)]);
var state_10360__$1 = state_10360;
var statearr_10374_10396 = state_10360__$1;
(statearr_10374_10396[(2)] = inst_10337);

(statearr_10374_10396[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10361 === (10))){
var inst_10356 = (state_10360[(2)]);
var state_10360__$1 = state_10360;
var statearr_10375_10397 = state_10360__$1;
(statearr_10375_10397[(2)] = inst_10356);

(statearr_10375_10397[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10361 === (8))){
var inst_10337 = (state_10360[(7)]);
var inst_10347 = cljs.core.next.call(null,inst_10337);
var inst_10337__$1 = inst_10347;
var state_10360__$1 = (function (){var statearr_10376 = state_10360;
(statearr_10376[(7)] = inst_10337__$1);

return statearr_10376;
})();
var statearr_10377_10398 = state_10360__$1;
(statearr_10377_10398[(2)] = null);

(statearr_10377_10398[(1)] = (2));


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
});})(c__6769__auto__))
;
return ((function (switch__6713__auto__,c__6769__auto__){
return (function() {
var state_machine__6714__auto__ = null;
var state_machine__6714__auto____0 = (function (){
var statearr_10381 = [null,null,null,null,null,null,null,null];
(statearr_10381[(0)] = state_machine__6714__auto__);

(statearr_10381[(1)] = (1));

return statearr_10381;
});
var state_machine__6714__auto____1 = (function (state_10360){
while(true){
var ret_value__6715__auto__ = (function (){try{while(true){
var result__6716__auto__ = switch__6713__auto__.call(null,state_10360);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6716__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6716__auto__;
}
break;
}
}catch (e10382){if((e10382 instanceof Object)){
var ex__6717__auto__ = e10382;
var statearr_10383_10399 = state_10360;
(statearr_10383_10399[(5)] = ex__6717__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10360);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e10382;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6715__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__10400 = state_10360;
state_10360 = G__10400;
continue;
} else {
return ret_value__6715__auto__;
}
break;
}
});
state_machine__6714__auto__ = function(state_10360){
switch(arguments.length){
case 0:
return state_machine__6714__auto____0.call(this);
case 1:
return state_machine__6714__auto____1.call(this,state_10360);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6714__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6714__auto____0;
state_machine__6714__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6714__auto____1;
return state_machine__6714__auto__;
})()
;})(switch__6713__auto__,c__6769__auto__))
})();
var state__6771__auto__ = (function (){var statearr_10384 = f__6770__auto__.call(null);
(statearr_10384[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6769__auto__);

return statearr_10384;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6771__auto__);
});})(c__6769__auto__))
);

return c__6769__auto__;
});
onto_chan = function(ch,coll,close_QMARK_){
switch(arguments.length){
case 2:
return onto_chan__2.call(this,ch,coll);
case 3:
return onto_chan__3.call(this,ch,coll,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
onto_chan.cljs$core$IFn$_invoke$arity$2 = onto_chan__2;
onto_chan.cljs$core$IFn$_invoke$arity$3 = onto_chan__3;
return onto_chan;
})()
;
/**
* Creates and returns a channel which contains the contents of coll,
* closing when exhausted.
*/
cljs.core.async.to_chan = (function to_chan(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan.call(null,ch,coll);

return ch;
});

cljs.core.async.Mux = (function (){var obj10402 = {};
return obj10402;
})();

cljs.core.async.muxch_STAR_ = (function muxch_STAR_(_){
if((function (){var and__3727__auto__ = _;
if(and__3727__auto__){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1;
} else {
return and__3727__auto__;
}
})()){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__4383__auto__ = (((_ == null))?null:_);
return (function (){var or__3739__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4383__auto__)]);
if(or__3739__auto__){
return or__3739__auto__;
} else {
var or__3739__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(or__3739__auto____$1){
return or__3739__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
})().call(null,_);
}
});


cljs.core.async.Mult = (function (){var obj10404 = {};
return obj10404;
})();

cljs.core.async.tap_STAR_ = (function tap_STAR_(m,ch,close_QMARK_){
if((function (){var and__3727__auto__ = m;
if(and__3727__auto__){
return m.cljs$core$async$Mult$tap_STAR_$arity$3;
} else {
return and__3727__auto__;
}
})()){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__4383__auto__ = (((m == null))?null:m);
return (function (){var or__3739__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4383__auto__)]);
if(or__3739__auto__){
return or__3739__auto__;
} else {
var or__3739__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(or__3739__auto____$1){
return or__3739__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
})().call(null,m,ch,close_QMARK_);
}
});

cljs.core.async.untap_STAR_ = (function untap_STAR_(m,ch){
if((function (){var and__3727__auto__ = m;
if(and__3727__auto__){
return m.cljs$core$async$Mult$untap_STAR_$arity$2;
} else {
return and__3727__auto__;
}
})()){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__4383__auto__ = (((m == null))?null:m);
return (function (){var or__3739__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4383__auto__)]);
if(or__3739__auto__){
return or__3739__auto__;
} else {
var or__3739__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(or__3739__auto____$1){
return or__3739__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
})().call(null,m,ch);
}
});

cljs.core.async.untap_all_STAR_ = (function untap_all_STAR_(m){
if((function (){var and__3727__auto__ = m;
if(and__3727__auto__){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1;
} else {
return and__3727__auto__;
}
})()){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__4383__auto__ = (((m == null))?null:m);
return (function (){var or__3739__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4383__auto__)]);
if(or__3739__auto__){
return or__3739__auto__;
} else {
var or__3739__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(or__3739__auto____$1){
return or__3739__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
})().call(null,m);
}
});

/**
* Creates and returns a mult(iple) of the supplied channel. Channels
* containing copies of the channel can be created with 'tap', and
* detached with 'untap'.
* 
* Each item is distributed to all taps in parallel and synchronously,
* i.e. each tap must accept before the next item is distributed. Use
* buffering/windowing to prevent slow taps from holding up the mult.
* 
* Items received when there are no taps get dropped.
* 
* If a tap puts to a closed channel, it will be removed from the mult.
*/
cljs.core.async.mult = (function mult(ch){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if(typeof cljs.core.async.t10626 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t10626 = (function (cs,ch,mult,meta10627){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta10627 = meta10627;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t10626.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t10626.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t10626.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t10626.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t10626.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t10626.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t10626.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_10628){
var self__ = this;
var _10628__$1 = this;
return self__.meta10627;
});})(cs))
;

cljs.core.async.t10626.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_10628,meta10627__$1){
var self__ = this;
var _10628__$1 = this;
return (new cljs.core.async.t10626(self__.cs,self__.ch,self__.mult,meta10627__$1));
});})(cs))
;

cljs.core.async.t10626.cljs$lang$type = true;

cljs.core.async.t10626.cljs$lang$ctorStr = "cljs.core.async/t10626";

cljs.core.async.t10626.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4326__auto__,writer__4327__auto__,opt__4328__auto__){
return cljs.core._write.call(null,writer__4327__auto__,"cljs.core.async/t10626");
});})(cs))
;

cljs.core.async.__GT_t10626 = ((function (cs){
return (function __GT_t10626(cs__$1,ch__$1,mult__$1,meta10627){
return (new cljs.core.async.t10626(cs__$1,ch__$1,mult__$1,meta10627));
});})(cs))
;

}

return (new cljs.core.async.t10626(cs,ch,mult,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),48,new cljs.core.Keyword(null,"end-line","end-line",1837326455),397,new cljs.core.Keyword(null,"column","column",2078222095),11,new cljs.core.Keyword(null,"line","line",212345235),390,new cljs.core.Keyword(null,"file","file",-1269645878),"/home/jwaag/dev/clj/bingo/out/cljs/core/async.cljs"], null)));
})()
;
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__6769__auto___10847 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6769__auto___10847,cs,m,dchan,dctr,done){
return (function (){
var f__6770__auto__ = (function (){var switch__6713__auto__ = ((function (c__6769__auto___10847,cs,m,dchan,dctr,done){
return (function (state_10759){
var state_val_10760 = (state_10759[(1)]);
if((state_val_10760 === (7))){
var inst_10755 = (state_10759[(2)]);
var state_10759__$1 = state_10759;
var statearr_10761_10848 = state_10759__$1;
(statearr_10761_10848[(2)] = inst_10755);

(statearr_10761_10848[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10760 === (20))){
var inst_10660 = (state_10759[(7)]);
var inst_10670 = cljs.core.first.call(null,inst_10660);
var inst_10671 = cljs.core.nth.call(null,inst_10670,(0),null);
var inst_10672 = cljs.core.nth.call(null,inst_10670,(1),null);
var state_10759__$1 = (function (){var statearr_10762 = state_10759;
(statearr_10762[(8)] = inst_10671);

return statearr_10762;
})();
if(cljs.core.truth_(inst_10672)){
var statearr_10763_10849 = state_10759__$1;
(statearr_10763_10849[(1)] = (22));

} else {
var statearr_10764_10850 = state_10759__$1;
(statearr_10764_10850[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10760 === (27))){
var inst_10707 = (state_10759[(9)]);
var inst_10631 = (state_10759[(10)]);
var inst_10702 = (state_10759[(11)]);
var inst_10700 = (state_10759[(12)]);
var inst_10707__$1 = cljs.core._nth.call(null,inst_10700,inst_10702);
var inst_10708 = cljs.core.async.put_BANG_.call(null,inst_10707__$1,inst_10631,done);
var state_10759__$1 = (function (){var statearr_10765 = state_10759;
(statearr_10765[(9)] = inst_10707__$1);

return statearr_10765;
})();
if(cljs.core.truth_(inst_10708)){
var statearr_10766_10851 = state_10759__$1;
(statearr_10766_10851[(1)] = (30));

} else {
var statearr_10767_10852 = state_10759__$1;
(statearr_10767_10852[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10760 === (1))){
var state_10759__$1 = state_10759;
var statearr_10768_10853 = state_10759__$1;
(statearr_10768_10853[(2)] = null);

(statearr_10768_10853[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10760 === (24))){
var inst_10660 = (state_10759[(7)]);
var inst_10677 = (state_10759[(2)]);
var inst_10678 = cljs.core.next.call(null,inst_10660);
var inst_10640 = inst_10678;
var inst_10641 = null;
var inst_10642 = (0);
var inst_10643 = (0);
var state_10759__$1 = (function (){var statearr_10769 = state_10759;
(statearr_10769[(13)] = inst_10643);

(statearr_10769[(14)] = inst_10641);

(statearr_10769[(15)] = inst_10677);

(statearr_10769[(16)] = inst_10642);

(statearr_10769[(17)] = inst_10640);

return statearr_10769;
})();
var statearr_10770_10854 = state_10759__$1;
(statearr_10770_10854[(2)] = null);

(statearr_10770_10854[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10760 === (39))){
var state_10759__$1 = state_10759;
var statearr_10774_10855 = state_10759__$1;
(statearr_10774_10855[(2)] = null);

(statearr_10774_10855[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10760 === (4))){
var inst_10631 = (state_10759[(10)]);
var inst_10631__$1 = (state_10759[(2)]);
var inst_10632 = (inst_10631__$1 == null);
var state_10759__$1 = (function (){var statearr_10775 = state_10759;
(statearr_10775[(10)] = inst_10631__$1);

return statearr_10775;
})();
if(cljs.core.truth_(inst_10632)){
var statearr_10776_10856 = state_10759__$1;
(statearr_10776_10856[(1)] = (5));

} else {
var statearr_10777_10857 = state_10759__$1;
(statearr_10777_10857[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10760 === (15))){
var inst_10643 = (state_10759[(13)]);
var inst_10641 = (state_10759[(14)]);
var inst_10642 = (state_10759[(16)]);
var inst_10640 = (state_10759[(17)]);
var inst_10656 = (state_10759[(2)]);
var inst_10657 = (inst_10643 + (1));
var tmp10771 = inst_10641;
var tmp10772 = inst_10642;
var tmp10773 = inst_10640;
var inst_10640__$1 = tmp10773;
var inst_10641__$1 = tmp10771;
var inst_10642__$1 = tmp10772;
var inst_10643__$1 = inst_10657;
var state_10759__$1 = (function (){var statearr_10778 = state_10759;
(statearr_10778[(13)] = inst_10643__$1);

(statearr_10778[(14)] = inst_10641__$1);

(statearr_10778[(18)] = inst_10656);

(statearr_10778[(16)] = inst_10642__$1);

(statearr_10778[(17)] = inst_10640__$1);

return statearr_10778;
})();
var statearr_10779_10858 = state_10759__$1;
(statearr_10779_10858[(2)] = null);

(statearr_10779_10858[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10760 === (21))){
var inst_10681 = (state_10759[(2)]);
var state_10759__$1 = state_10759;
var statearr_10783_10859 = state_10759__$1;
(statearr_10783_10859[(2)] = inst_10681);

(statearr_10783_10859[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10760 === (31))){
var inst_10707 = (state_10759[(9)]);
var inst_10711 = done.call(null,null);
var inst_10712 = cljs.core.async.untap_STAR_.call(null,m,inst_10707);
var state_10759__$1 = (function (){var statearr_10784 = state_10759;
(statearr_10784[(19)] = inst_10711);

return statearr_10784;
})();
var statearr_10785_10860 = state_10759__$1;
(statearr_10785_10860[(2)] = inst_10712);

(statearr_10785_10860[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10760 === (32))){
var inst_10701 = (state_10759[(20)]);
var inst_10699 = (state_10759[(21)]);
var inst_10702 = (state_10759[(11)]);
var inst_10700 = (state_10759[(12)]);
var inst_10714 = (state_10759[(2)]);
var inst_10715 = (inst_10702 + (1));
var tmp10780 = inst_10701;
var tmp10781 = inst_10699;
var tmp10782 = inst_10700;
var inst_10699__$1 = tmp10781;
var inst_10700__$1 = tmp10782;
var inst_10701__$1 = tmp10780;
var inst_10702__$1 = inst_10715;
var state_10759__$1 = (function (){var statearr_10786 = state_10759;
(statearr_10786[(20)] = inst_10701__$1);

(statearr_10786[(21)] = inst_10699__$1);

(statearr_10786[(22)] = inst_10714);

(statearr_10786[(11)] = inst_10702__$1);

(statearr_10786[(12)] = inst_10700__$1);

return statearr_10786;
})();
var statearr_10787_10861 = state_10759__$1;
(statearr_10787_10861[(2)] = null);

(statearr_10787_10861[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10760 === (40))){
var inst_10727 = (state_10759[(23)]);
var inst_10731 = done.call(null,null);
var inst_10732 = cljs.core.async.untap_STAR_.call(null,m,inst_10727);
var state_10759__$1 = (function (){var statearr_10788 = state_10759;
(statearr_10788[(24)] = inst_10731);

return statearr_10788;
})();
var statearr_10789_10862 = state_10759__$1;
(statearr_10789_10862[(2)] = inst_10732);

(statearr_10789_10862[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10760 === (33))){
var inst_10718 = (state_10759[(25)]);
var inst_10720 = cljs.core.chunked_seq_QMARK_.call(null,inst_10718);
var state_10759__$1 = state_10759;
if(inst_10720){
var statearr_10790_10863 = state_10759__$1;
(statearr_10790_10863[(1)] = (36));

} else {
var statearr_10791_10864 = state_10759__$1;
(statearr_10791_10864[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10760 === (13))){
var inst_10650 = (state_10759[(26)]);
var inst_10653 = cljs.core.async.close_BANG_.call(null,inst_10650);
var state_10759__$1 = state_10759;
var statearr_10792_10865 = state_10759__$1;
(statearr_10792_10865[(2)] = inst_10653);

(statearr_10792_10865[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10760 === (22))){
var inst_10671 = (state_10759[(8)]);
var inst_10674 = cljs.core.async.close_BANG_.call(null,inst_10671);
var state_10759__$1 = state_10759;
var statearr_10793_10866 = state_10759__$1;
(statearr_10793_10866[(2)] = inst_10674);

(statearr_10793_10866[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10760 === (36))){
var inst_10718 = (state_10759[(25)]);
var inst_10722 = cljs.core.chunk_first.call(null,inst_10718);
var inst_10723 = cljs.core.chunk_rest.call(null,inst_10718);
var inst_10724 = cljs.core.count.call(null,inst_10722);
var inst_10699 = inst_10723;
var inst_10700 = inst_10722;
var inst_10701 = inst_10724;
var inst_10702 = (0);
var state_10759__$1 = (function (){var statearr_10794 = state_10759;
(statearr_10794[(20)] = inst_10701);

(statearr_10794[(21)] = inst_10699);

(statearr_10794[(11)] = inst_10702);

(statearr_10794[(12)] = inst_10700);

return statearr_10794;
})();
var statearr_10795_10867 = state_10759__$1;
(statearr_10795_10867[(2)] = null);

(statearr_10795_10867[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10760 === (41))){
var inst_10718 = (state_10759[(25)]);
var inst_10734 = (state_10759[(2)]);
var inst_10735 = cljs.core.next.call(null,inst_10718);
var inst_10699 = inst_10735;
var inst_10700 = null;
var inst_10701 = (0);
var inst_10702 = (0);
var state_10759__$1 = (function (){var statearr_10796 = state_10759;
(statearr_10796[(20)] = inst_10701);

(statearr_10796[(21)] = inst_10699);

(statearr_10796[(27)] = inst_10734);

(statearr_10796[(11)] = inst_10702);

(statearr_10796[(12)] = inst_10700);

return statearr_10796;
})();
var statearr_10797_10868 = state_10759__$1;
(statearr_10797_10868[(2)] = null);

(statearr_10797_10868[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10760 === (43))){
var state_10759__$1 = state_10759;
var statearr_10798_10869 = state_10759__$1;
(statearr_10798_10869[(2)] = null);

(statearr_10798_10869[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10760 === (29))){
var inst_10743 = (state_10759[(2)]);
var state_10759__$1 = state_10759;
var statearr_10799_10870 = state_10759__$1;
(statearr_10799_10870[(2)] = inst_10743);

(statearr_10799_10870[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10760 === (44))){
var inst_10752 = (state_10759[(2)]);
var state_10759__$1 = (function (){var statearr_10800 = state_10759;
(statearr_10800[(28)] = inst_10752);

return statearr_10800;
})();
var statearr_10801_10871 = state_10759__$1;
(statearr_10801_10871[(2)] = null);

(statearr_10801_10871[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10760 === (6))){
var inst_10691 = (state_10759[(29)]);
var inst_10690 = cljs.core.deref.call(null,cs);
var inst_10691__$1 = cljs.core.keys.call(null,inst_10690);
var inst_10692 = cljs.core.count.call(null,inst_10691__$1);
var inst_10693 = cljs.core.reset_BANG_.call(null,dctr,inst_10692);
var inst_10698 = cljs.core.seq.call(null,inst_10691__$1);
var inst_10699 = inst_10698;
var inst_10700 = null;
var inst_10701 = (0);
var inst_10702 = (0);
var state_10759__$1 = (function (){var statearr_10802 = state_10759;
(statearr_10802[(20)] = inst_10701);

(statearr_10802[(21)] = inst_10699);

(statearr_10802[(30)] = inst_10693);

(statearr_10802[(29)] = inst_10691__$1);

(statearr_10802[(11)] = inst_10702);

(statearr_10802[(12)] = inst_10700);

return statearr_10802;
})();
var statearr_10803_10872 = state_10759__$1;
(statearr_10803_10872[(2)] = null);

(statearr_10803_10872[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10760 === (28))){
var inst_10699 = (state_10759[(21)]);
var inst_10718 = (state_10759[(25)]);
var inst_10718__$1 = cljs.core.seq.call(null,inst_10699);
var state_10759__$1 = (function (){var statearr_10804 = state_10759;
(statearr_10804[(25)] = inst_10718__$1);

return statearr_10804;
})();
if(inst_10718__$1){
var statearr_10805_10873 = state_10759__$1;
(statearr_10805_10873[(1)] = (33));

} else {
var statearr_10806_10874 = state_10759__$1;
(statearr_10806_10874[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10760 === (25))){
var inst_10701 = (state_10759[(20)]);
var inst_10702 = (state_10759[(11)]);
var inst_10704 = (inst_10702 < inst_10701);
var inst_10705 = inst_10704;
var state_10759__$1 = state_10759;
if(cljs.core.truth_(inst_10705)){
var statearr_10807_10875 = state_10759__$1;
(statearr_10807_10875[(1)] = (27));

} else {
var statearr_10808_10876 = state_10759__$1;
(statearr_10808_10876[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10760 === (34))){
var state_10759__$1 = state_10759;
var statearr_10809_10877 = state_10759__$1;
(statearr_10809_10877[(2)] = null);

(statearr_10809_10877[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10760 === (17))){
var state_10759__$1 = state_10759;
var statearr_10810_10878 = state_10759__$1;
(statearr_10810_10878[(2)] = null);

(statearr_10810_10878[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10760 === (3))){
var inst_10757 = (state_10759[(2)]);
var state_10759__$1 = state_10759;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10759__$1,inst_10757);
} else {
if((state_val_10760 === (12))){
var inst_10686 = (state_10759[(2)]);
var state_10759__$1 = state_10759;
var statearr_10811_10879 = state_10759__$1;
(statearr_10811_10879[(2)] = inst_10686);

(statearr_10811_10879[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10760 === (2))){
var state_10759__$1 = state_10759;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10759__$1,(4),ch);
} else {
if((state_val_10760 === (23))){
var state_10759__$1 = state_10759;
var statearr_10812_10880 = state_10759__$1;
(statearr_10812_10880[(2)] = null);

(statearr_10812_10880[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10760 === (35))){
var inst_10741 = (state_10759[(2)]);
var state_10759__$1 = state_10759;
var statearr_10813_10881 = state_10759__$1;
(statearr_10813_10881[(2)] = inst_10741);

(statearr_10813_10881[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10760 === (19))){
var inst_10660 = (state_10759[(7)]);
var inst_10664 = cljs.core.chunk_first.call(null,inst_10660);
var inst_10665 = cljs.core.chunk_rest.call(null,inst_10660);
var inst_10666 = cljs.core.count.call(null,inst_10664);
var inst_10640 = inst_10665;
var inst_10641 = inst_10664;
var inst_10642 = inst_10666;
var inst_10643 = (0);
var state_10759__$1 = (function (){var statearr_10814 = state_10759;
(statearr_10814[(13)] = inst_10643);

(statearr_10814[(14)] = inst_10641);

(statearr_10814[(16)] = inst_10642);

(statearr_10814[(17)] = inst_10640);

return statearr_10814;
})();
var statearr_10815_10882 = state_10759__$1;
(statearr_10815_10882[(2)] = null);

(statearr_10815_10882[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10760 === (11))){
var inst_10660 = (state_10759[(7)]);
var inst_10640 = (state_10759[(17)]);
var inst_10660__$1 = cljs.core.seq.call(null,inst_10640);
var state_10759__$1 = (function (){var statearr_10816 = state_10759;
(statearr_10816[(7)] = inst_10660__$1);

return statearr_10816;
})();
if(inst_10660__$1){
var statearr_10817_10883 = state_10759__$1;
(statearr_10817_10883[(1)] = (16));

} else {
var statearr_10818_10884 = state_10759__$1;
(statearr_10818_10884[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10760 === (9))){
var inst_10688 = (state_10759[(2)]);
var state_10759__$1 = state_10759;
var statearr_10819_10885 = state_10759__$1;
(statearr_10819_10885[(2)] = inst_10688);

(statearr_10819_10885[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10760 === (5))){
var inst_10638 = cljs.core.deref.call(null,cs);
var inst_10639 = cljs.core.seq.call(null,inst_10638);
var inst_10640 = inst_10639;
var inst_10641 = null;
var inst_10642 = (0);
var inst_10643 = (0);
var state_10759__$1 = (function (){var statearr_10820 = state_10759;
(statearr_10820[(13)] = inst_10643);

(statearr_10820[(14)] = inst_10641);

(statearr_10820[(16)] = inst_10642);

(statearr_10820[(17)] = inst_10640);

return statearr_10820;
})();
var statearr_10821_10886 = state_10759__$1;
(statearr_10821_10886[(2)] = null);

(statearr_10821_10886[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10760 === (14))){
var state_10759__$1 = state_10759;
var statearr_10822_10887 = state_10759__$1;
(statearr_10822_10887[(2)] = null);

(statearr_10822_10887[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10760 === (45))){
var inst_10749 = (state_10759[(2)]);
var state_10759__$1 = state_10759;
var statearr_10823_10888 = state_10759__$1;
(statearr_10823_10888[(2)] = inst_10749);

(statearr_10823_10888[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10760 === (26))){
var inst_10691 = (state_10759[(29)]);
var inst_10745 = (state_10759[(2)]);
var inst_10746 = cljs.core.seq.call(null,inst_10691);
var state_10759__$1 = (function (){var statearr_10824 = state_10759;
(statearr_10824[(31)] = inst_10745);

return statearr_10824;
})();
if(inst_10746){
var statearr_10825_10889 = state_10759__$1;
(statearr_10825_10889[(1)] = (42));

} else {
var statearr_10826_10890 = state_10759__$1;
(statearr_10826_10890[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10760 === (16))){
var inst_10660 = (state_10759[(7)]);
var inst_10662 = cljs.core.chunked_seq_QMARK_.call(null,inst_10660);
var state_10759__$1 = state_10759;
if(inst_10662){
var statearr_10827_10891 = state_10759__$1;
(statearr_10827_10891[(1)] = (19));

} else {
var statearr_10828_10892 = state_10759__$1;
(statearr_10828_10892[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10760 === (38))){
var inst_10738 = (state_10759[(2)]);
var state_10759__$1 = state_10759;
var statearr_10829_10893 = state_10759__$1;
(statearr_10829_10893[(2)] = inst_10738);

(statearr_10829_10893[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10760 === (30))){
var state_10759__$1 = state_10759;
var statearr_10830_10894 = state_10759__$1;
(statearr_10830_10894[(2)] = null);

(statearr_10830_10894[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10760 === (10))){
var inst_10643 = (state_10759[(13)]);
var inst_10641 = (state_10759[(14)]);
var inst_10649 = cljs.core._nth.call(null,inst_10641,inst_10643);
var inst_10650 = cljs.core.nth.call(null,inst_10649,(0),null);
var inst_10651 = cljs.core.nth.call(null,inst_10649,(1),null);
var state_10759__$1 = (function (){var statearr_10831 = state_10759;
(statearr_10831[(26)] = inst_10650);

return statearr_10831;
})();
if(cljs.core.truth_(inst_10651)){
var statearr_10832_10895 = state_10759__$1;
(statearr_10832_10895[(1)] = (13));

} else {
var statearr_10833_10896 = state_10759__$1;
(statearr_10833_10896[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10760 === (18))){
var inst_10684 = (state_10759[(2)]);
var state_10759__$1 = state_10759;
var statearr_10834_10897 = state_10759__$1;
(statearr_10834_10897[(2)] = inst_10684);

(statearr_10834_10897[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10760 === (42))){
var state_10759__$1 = state_10759;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10759__$1,(45),dchan);
} else {
if((state_val_10760 === (37))){
var inst_10631 = (state_10759[(10)]);
var inst_10727 = (state_10759[(23)]);
var inst_10718 = (state_10759[(25)]);
var inst_10727__$1 = cljs.core.first.call(null,inst_10718);
var inst_10728 = cljs.core.async.put_BANG_.call(null,inst_10727__$1,inst_10631,done);
var state_10759__$1 = (function (){var statearr_10835 = state_10759;
(statearr_10835[(23)] = inst_10727__$1);

return statearr_10835;
})();
if(cljs.core.truth_(inst_10728)){
var statearr_10836_10898 = state_10759__$1;
(statearr_10836_10898[(1)] = (39));

} else {
var statearr_10837_10899 = state_10759__$1;
(statearr_10837_10899[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10760 === (8))){
var inst_10643 = (state_10759[(13)]);
var inst_10642 = (state_10759[(16)]);
var inst_10645 = (inst_10643 < inst_10642);
var inst_10646 = inst_10645;
var state_10759__$1 = state_10759;
if(cljs.core.truth_(inst_10646)){
var statearr_10838_10900 = state_10759__$1;
(statearr_10838_10900[(1)] = (10));

} else {
var statearr_10839_10901 = state_10759__$1;
(statearr_10839_10901[(1)] = (11));

}

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
}
}
}
}
}
}
});})(c__6769__auto___10847,cs,m,dchan,dctr,done))
;
return ((function (switch__6713__auto__,c__6769__auto___10847,cs,m,dchan,dctr,done){
return (function() {
var state_machine__6714__auto__ = null;
var state_machine__6714__auto____0 = (function (){
var statearr_10843 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_10843[(0)] = state_machine__6714__auto__);

(statearr_10843[(1)] = (1));

return statearr_10843;
});
var state_machine__6714__auto____1 = (function (state_10759){
while(true){
var ret_value__6715__auto__ = (function (){try{while(true){
var result__6716__auto__ = switch__6713__auto__.call(null,state_10759);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6716__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6716__auto__;
}
break;
}
}catch (e10844){if((e10844 instanceof Object)){
var ex__6717__auto__ = e10844;
var statearr_10845_10902 = state_10759;
(statearr_10845_10902[(5)] = ex__6717__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10759);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e10844;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6715__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__10903 = state_10759;
state_10759 = G__10903;
continue;
} else {
return ret_value__6715__auto__;
}
break;
}
});
state_machine__6714__auto__ = function(state_10759){
switch(arguments.length){
case 0:
return state_machine__6714__auto____0.call(this);
case 1:
return state_machine__6714__auto____1.call(this,state_10759);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6714__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6714__auto____0;
state_machine__6714__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6714__auto____1;
return state_machine__6714__auto__;
})()
;})(switch__6713__auto__,c__6769__auto___10847,cs,m,dchan,dctr,done))
})();
var state__6771__auto__ = (function (){var statearr_10846 = f__6770__auto__.call(null);
(statearr_10846[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6769__auto___10847);

return statearr_10846;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6771__auto__);
});})(c__6769__auto___10847,cs,m,dchan,dctr,done))
);


return m;
});
/**
* Copies the mult source onto the supplied channel.
* 
* By default the channel will be closed when the source closes,
* but can be determined by the close? parameter.
*/
cljs.core.async.tap = (function() {
var tap = null;
var tap__2 = (function (mult,ch){
return tap.call(null,mult,ch,true);
});
var tap__3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
});
tap = function(mult,ch,close_QMARK_){
switch(arguments.length){
case 2:
return tap__2.call(this,mult,ch);
case 3:
return tap__3.call(this,mult,ch,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
tap.cljs$core$IFn$_invoke$arity$2 = tap__2;
tap.cljs$core$IFn$_invoke$arity$3 = tap__3;
return tap;
})()
;
/**
* Disconnects a target channel from a mult
*/
cljs.core.async.untap = (function untap(mult,ch){
return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
* Disconnects all target channels from a mult
*/
cljs.core.async.untap_all = (function untap_all(mult){
return cljs.core.async.untap_all_STAR_.call(null,mult);
});

cljs.core.async.Mix = (function (){var obj10905 = {};
return obj10905;
})();

cljs.core.async.admix_STAR_ = (function admix_STAR_(m,ch){
if((function (){var and__3727__auto__ = m;
if(and__3727__auto__){
return m.cljs$core$async$Mix$admix_STAR_$arity$2;
} else {
return and__3727__auto__;
}
})()){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__4383__auto__ = (((m == null))?null:m);
return (function (){var or__3739__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4383__auto__)]);
if(or__3739__auto__){
return or__3739__auto__;
} else {
var or__3739__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(or__3739__auto____$1){
return or__3739__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
})().call(null,m,ch);
}
});

cljs.core.async.unmix_STAR_ = (function unmix_STAR_(m,ch){
if((function (){var and__3727__auto__ = m;
if(and__3727__auto__){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2;
} else {
return and__3727__auto__;
}
})()){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__4383__auto__ = (((m == null))?null:m);
return (function (){var or__3739__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4383__auto__)]);
if(or__3739__auto__){
return or__3739__auto__;
} else {
var or__3739__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(or__3739__auto____$1){
return or__3739__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
})().call(null,m,ch);
}
});

cljs.core.async.unmix_all_STAR_ = (function unmix_all_STAR_(m){
if((function (){var and__3727__auto__ = m;
if(and__3727__auto__){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1;
} else {
return and__3727__auto__;
}
})()){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__4383__auto__ = (((m == null))?null:m);
return (function (){var or__3739__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4383__auto__)]);
if(or__3739__auto__){
return or__3739__auto__;
} else {
var or__3739__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(or__3739__auto____$1){
return or__3739__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
})().call(null,m);
}
});

cljs.core.async.toggle_STAR_ = (function toggle_STAR_(m,state_map){
if((function (){var and__3727__auto__ = m;
if(and__3727__auto__){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2;
} else {
return and__3727__auto__;
}
})()){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__4383__auto__ = (((m == null))?null:m);
return (function (){var or__3739__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4383__auto__)]);
if(or__3739__auto__){
return or__3739__auto__;
} else {
var or__3739__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(or__3739__auto____$1){
return or__3739__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
})().call(null,m,state_map);
}
});

cljs.core.async.solo_mode_STAR_ = (function solo_mode_STAR_(m,mode){
if((function (){var and__3727__auto__ = m;
if(and__3727__auto__){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2;
} else {
return and__3727__auto__;
}
})()){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__4383__auto__ = (((m == null))?null:m);
return (function (){var or__3739__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4383__auto__)]);
if(or__3739__auto__){
return or__3739__auto__;
} else {
var or__3739__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(or__3739__auto____$1){
return or__3739__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
})().call(null,m,mode);
}
});

/**
* @param {...*} var_args
*/
cljs.core.async.ioc_alts_BANG_ = (function() { 
var ioc_alts_BANG___delegate = function (state,cont_block,ports,p__10906){
var map__10911 = p__10906;
var map__10911__$1 = ((cljs.core.seq_QMARK_.call(null,map__10911))?cljs.core.apply.call(null,cljs.core.hash_map,map__10911):map__10911);
var opts = map__10911__$1;
var statearr_10912_10915 = state;
(statearr_10912_10915[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4126__auto__ = cljs.core.async.do_alts.call(null,((function (map__10911,map__10911__$1,opts){
return (function (val){
var statearr_10913_10916 = state;
(statearr_10913_10916[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__10911,map__10911__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4126__auto__)){
var cb = temp__4126__auto__;
var statearr_10914_10917 = state;
(statearr_10914_10917[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
};
var ioc_alts_BANG_ = function (state,cont_block,ports,var_args){
var p__10906 = null;
if (arguments.length > 3) {
  p__10906 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return ioc_alts_BANG___delegate.call(this,state,cont_block,ports,p__10906);};
ioc_alts_BANG_.cljs$lang$maxFixedArity = 3;
ioc_alts_BANG_.cljs$lang$applyTo = (function (arglist__10918){
var state = cljs.core.first(arglist__10918);
arglist__10918 = cljs.core.next(arglist__10918);
var cont_block = cljs.core.first(arglist__10918);
arglist__10918 = cljs.core.next(arglist__10918);
var ports = cljs.core.first(arglist__10918);
var p__10906 = cljs.core.rest(arglist__10918);
return ioc_alts_BANG___delegate(state,cont_block,ports,p__10906);
});
ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = ioc_alts_BANG___delegate;
return ioc_alts_BANG_;
})()
;
/**
* Creates and returns a mix of one or more input channels which will
* be put on the supplied out channel. Input sources can be added to
* the mix with 'admix', and removed with 'unmix'. A mix supports
* soloing, muting and pausing multiple inputs atomically using
* 'toggle', and can solo using either muting or pausing as determined
* by 'solo-mode'.
* 
* Each channel can have zero or more boolean modes set via 'toggle':
* 
* :solo - when true, only this (ond other soloed) channel(s) will appear
* in the mix output channel. :mute and :pause states of soloed
* channels are ignored. If solo-mode is :mute, non-soloed
* channels are muted, if :pause, non-soloed channels are
* paused.
* 
* :mute - muted channels will have their contents consumed but not included in the mix
* :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
*/
cljs.core.async.mix = (function mix(out){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.call(null);
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_(attr.call(null,v))){
return cljs.core.conj.call(null,ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref.call(null,cs);
var mode = cljs.core.deref.call(null,solo_mode);
var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,(((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (!(cljs.core.empty_QMARK_.call(null,solos))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if(typeof cljs.core.async.t11038 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t11038 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta11039){
this.change = change;
this.mix = mix;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta11039 = meta11039;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t11038.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t11038.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t11038.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t11038.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t11038.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t11038.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"mode","mode",-2000032078,null))))].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t11038.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t11038.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t11038.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_11040){
var self__ = this;
var _11040__$1 = this;
return self__.meta11039;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t11038.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_11040,meta11039__$1){
var self__ = this;
var _11040__$1 = this;
return (new cljs.core.async.t11038(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta11039__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t11038.cljs$lang$type = true;

cljs.core.async.t11038.cljs$lang$ctorStr = "cljs.core.async/t11038";

cljs.core.async.t11038.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4326__auto__,writer__4327__auto__,opt__4328__auto__){
return cljs.core._write.call(null,writer__4327__auto__,"cljs.core.async/t11038");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t11038 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t11038(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta11039){
return (new cljs.core.async.t11038(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta11039));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t11038(change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),25,new cljs.core.Keyword(null,"end-line","end-line",1837326455),510,new cljs.core.Keyword(null,"column","column",2078222095),11,new cljs.core.Keyword(null,"line","line",212345235),499,new cljs.core.Keyword(null,"file","file",-1269645878),"/home/jwaag/dev/clj/bingo/out/cljs/core/async.cljs"], null)));
})()
;
var c__6769__auto___11157 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6769__auto___11157,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__6770__auto__ = (function (){var switch__6713__auto__ = ((function (c__6769__auto___11157,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_11110){
var state_val_11111 = (state_11110[(1)]);
if((state_val_11111 === (7))){
var inst_11054 = (state_11110[(7)]);
var inst_11059 = cljs.core.apply.call(null,cljs.core.hash_map,inst_11054);
var state_11110__$1 = state_11110;
var statearr_11112_11158 = state_11110__$1;
(statearr_11112_11158[(2)] = inst_11059);

(statearr_11112_11158[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11111 === (20))){
var inst_11069 = (state_11110[(8)]);
var state_11110__$1 = state_11110;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11110__$1,(23),out,inst_11069);
} else {
if((state_val_11111 === (1))){
var inst_11044 = (state_11110[(9)]);
var inst_11044__$1 = calc_state.call(null);
var inst_11045 = cljs.core.seq_QMARK_.call(null,inst_11044__$1);
var state_11110__$1 = (function (){var statearr_11113 = state_11110;
(statearr_11113[(9)] = inst_11044__$1);

return statearr_11113;
})();
if(inst_11045){
var statearr_11114_11159 = state_11110__$1;
(statearr_11114_11159[(1)] = (2));

} else {
var statearr_11115_11160 = state_11110__$1;
(statearr_11115_11160[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11111 === (24))){
var inst_11062 = (state_11110[(10)]);
var inst_11054 = inst_11062;
var state_11110__$1 = (function (){var statearr_11116 = state_11110;
(statearr_11116[(7)] = inst_11054);

return statearr_11116;
})();
var statearr_11117_11161 = state_11110__$1;
(statearr_11117_11161[(2)] = null);

(statearr_11117_11161[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11111 === (4))){
var inst_11044 = (state_11110[(9)]);
var inst_11050 = (state_11110[(2)]);
var inst_11051 = cljs.core.get.call(null,inst_11050,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_11052 = cljs.core.get.call(null,inst_11050,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_11053 = cljs.core.get.call(null,inst_11050,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_11054 = inst_11044;
var state_11110__$1 = (function (){var statearr_11118 = state_11110;
(statearr_11118[(11)] = inst_11053);

(statearr_11118[(12)] = inst_11052);

(statearr_11118[(13)] = inst_11051);

(statearr_11118[(7)] = inst_11054);

return statearr_11118;
})();
var statearr_11119_11162 = state_11110__$1;
(statearr_11119_11162[(2)] = null);

(statearr_11119_11162[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11111 === (15))){
var state_11110__$1 = state_11110;
var statearr_11120_11163 = state_11110__$1;
(statearr_11120_11163[(2)] = null);

(statearr_11120_11163[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11111 === (21))){
var inst_11062 = (state_11110[(10)]);
var inst_11054 = inst_11062;
var state_11110__$1 = (function (){var statearr_11121 = state_11110;
(statearr_11121[(7)] = inst_11054);

return statearr_11121;
})();
var statearr_11122_11164 = state_11110__$1;
(statearr_11122_11164[(2)] = null);

(statearr_11122_11164[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11111 === (13))){
var inst_11106 = (state_11110[(2)]);
var state_11110__$1 = state_11110;
var statearr_11123_11165 = state_11110__$1;
(statearr_11123_11165[(2)] = inst_11106);

(statearr_11123_11165[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11111 === (22))){
var inst_11104 = (state_11110[(2)]);
var state_11110__$1 = state_11110;
var statearr_11124_11166 = state_11110__$1;
(statearr_11124_11166[(2)] = inst_11104);

(statearr_11124_11166[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11111 === (6))){
var inst_11108 = (state_11110[(2)]);
var state_11110__$1 = state_11110;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11110__$1,inst_11108);
} else {
if((state_val_11111 === (25))){
var state_11110__$1 = state_11110;
var statearr_11125_11167 = state_11110__$1;
(statearr_11125_11167[(2)] = null);

(statearr_11125_11167[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11111 === (17))){
var inst_11084 = (state_11110[(14)]);
var state_11110__$1 = state_11110;
var statearr_11126_11168 = state_11110__$1;
(statearr_11126_11168[(2)] = inst_11084);

(statearr_11126_11168[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11111 === (3))){
var inst_11044 = (state_11110[(9)]);
var state_11110__$1 = state_11110;
var statearr_11127_11169 = state_11110__$1;
(statearr_11127_11169[(2)] = inst_11044);

(statearr_11127_11169[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11111 === (12))){
var inst_11070 = (state_11110[(15)]);
var inst_11084 = (state_11110[(14)]);
var inst_11065 = (state_11110[(16)]);
var inst_11084__$1 = inst_11065.call(null,inst_11070);
var state_11110__$1 = (function (){var statearr_11128 = state_11110;
(statearr_11128[(14)] = inst_11084__$1);

return statearr_11128;
})();
if(cljs.core.truth_(inst_11084__$1)){
var statearr_11129_11170 = state_11110__$1;
(statearr_11129_11170[(1)] = (17));

} else {
var statearr_11130_11171 = state_11110__$1;
(statearr_11130_11171[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11111 === (2))){
var inst_11044 = (state_11110[(9)]);
var inst_11047 = cljs.core.apply.call(null,cljs.core.hash_map,inst_11044);
var state_11110__$1 = state_11110;
var statearr_11131_11172 = state_11110__$1;
(statearr_11131_11172[(2)] = inst_11047);

(statearr_11131_11172[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11111 === (23))){
var inst_11095 = (state_11110[(2)]);
var state_11110__$1 = state_11110;
if(cljs.core.truth_(inst_11095)){
var statearr_11132_11173 = state_11110__$1;
(statearr_11132_11173[(1)] = (24));

} else {
var statearr_11133_11174 = state_11110__$1;
(statearr_11133_11174[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11111 === (19))){
var inst_11092 = (state_11110[(2)]);
var state_11110__$1 = state_11110;
if(cljs.core.truth_(inst_11092)){
var statearr_11134_11175 = state_11110__$1;
(statearr_11134_11175[(1)] = (20));

} else {
var statearr_11135_11176 = state_11110__$1;
(statearr_11135_11176[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11111 === (11))){
var inst_11069 = (state_11110[(8)]);
var inst_11075 = (inst_11069 == null);
var state_11110__$1 = state_11110;
if(cljs.core.truth_(inst_11075)){
var statearr_11136_11177 = state_11110__$1;
(statearr_11136_11177[(1)] = (14));

} else {
var statearr_11137_11178 = state_11110__$1;
(statearr_11137_11178[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11111 === (9))){
var inst_11062 = (state_11110[(10)]);
var inst_11062__$1 = (state_11110[(2)]);
var inst_11063 = cljs.core.get.call(null,inst_11062__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_11064 = cljs.core.get.call(null,inst_11062__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_11065 = cljs.core.get.call(null,inst_11062__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var state_11110__$1 = (function (){var statearr_11138 = state_11110;
(statearr_11138[(17)] = inst_11064);

(statearr_11138[(16)] = inst_11065);

(statearr_11138[(10)] = inst_11062__$1);

return statearr_11138;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_11110__$1,(10),inst_11063);
} else {
if((state_val_11111 === (5))){
var inst_11054 = (state_11110[(7)]);
var inst_11057 = cljs.core.seq_QMARK_.call(null,inst_11054);
var state_11110__$1 = state_11110;
if(inst_11057){
var statearr_11139_11179 = state_11110__$1;
(statearr_11139_11179[(1)] = (7));

} else {
var statearr_11140_11180 = state_11110__$1;
(statearr_11140_11180[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11111 === (14))){
var inst_11070 = (state_11110[(15)]);
var inst_11077 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_11070);
var state_11110__$1 = state_11110;
var statearr_11141_11181 = state_11110__$1;
(statearr_11141_11181[(2)] = inst_11077);

(statearr_11141_11181[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11111 === (26))){
var inst_11100 = (state_11110[(2)]);
var state_11110__$1 = state_11110;
var statearr_11142_11182 = state_11110__$1;
(statearr_11142_11182[(2)] = inst_11100);

(statearr_11142_11182[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11111 === (16))){
var inst_11080 = (state_11110[(2)]);
var inst_11081 = calc_state.call(null);
var inst_11054 = inst_11081;
var state_11110__$1 = (function (){var statearr_11143 = state_11110;
(statearr_11143[(18)] = inst_11080);

(statearr_11143[(7)] = inst_11054);

return statearr_11143;
})();
var statearr_11144_11183 = state_11110__$1;
(statearr_11144_11183[(2)] = null);

(statearr_11144_11183[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11111 === (10))){
var inst_11070 = (state_11110[(15)]);
var inst_11069 = (state_11110[(8)]);
var inst_11068 = (state_11110[(2)]);
var inst_11069__$1 = cljs.core.nth.call(null,inst_11068,(0),null);
var inst_11070__$1 = cljs.core.nth.call(null,inst_11068,(1),null);
var inst_11071 = (inst_11069__$1 == null);
var inst_11072 = cljs.core._EQ_.call(null,inst_11070__$1,change);
var inst_11073 = (inst_11071) || (inst_11072);
var state_11110__$1 = (function (){var statearr_11145 = state_11110;
(statearr_11145[(15)] = inst_11070__$1);

(statearr_11145[(8)] = inst_11069__$1);

return statearr_11145;
})();
if(cljs.core.truth_(inst_11073)){
var statearr_11146_11184 = state_11110__$1;
(statearr_11146_11184[(1)] = (11));

} else {
var statearr_11147_11185 = state_11110__$1;
(statearr_11147_11185[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11111 === (18))){
var inst_11070 = (state_11110[(15)]);
var inst_11064 = (state_11110[(17)]);
var inst_11065 = (state_11110[(16)]);
var inst_11087 = cljs.core.empty_QMARK_.call(null,inst_11065);
var inst_11088 = inst_11064.call(null,inst_11070);
var inst_11089 = cljs.core.not.call(null,inst_11088);
var inst_11090 = (inst_11087) && (inst_11089);
var state_11110__$1 = state_11110;
var statearr_11148_11186 = state_11110__$1;
(statearr_11148_11186[(2)] = inst_11090);

(statearr_11148_11186[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11111 === (8))){
var inst_11054 = (state_11110[(7)]);
var state_11110__$1 = state_11110;
var statearr_11149_11187 = state_11110__$1;
(statearr_11149_11187[(2)] = inst_11054);

(statearr_11149_11187[(1)] = (9));


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
});})(c__6769__auto___11157,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__6713__auto__,c__6769__auto___11157,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var state_machine__6714__auto__ = null;
var state_machine__6714__auto____0 = (function (){
var statearr_11153 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_11153[(0)] = state_machine__6714__auto__);

(statearr_11153[(1)] = (1));

return statearr_11153;
});
var state_machine__6714__auto____1 = (function (state_11110){
while(true){
var ret_value__6715__auto__ = (function (){try{while(true){
var result__6716__auto__ = switch__6713__auto__.call(null,state_11110);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6716__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6716__auto__;
}
break;
}
}catch (e11154){if((e11154 instanceof Object)){
var ex__6717__auto__ = e11154;
var statearr_11155_11188 = state_11110;
(statearr_11155_11188[(5)] = ex__6717__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11110);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e11154;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6715__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__11189 = state_11110;
state_11110 = G__11189;
continue;
} else {
return ret_value__6715__auto__;
}
break;
}
});
state_machine__6714__auto__ = function(state_11110){
switch(arguments.length){
case 0:
return state_machine__6714__auto____0.call(this);
case 1:
return state_machine__6714__auto____1.call(this,state_11110);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6714__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6714__auto____0;
state_machine__6714__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6714__auto____1;
return state_machine__6714__auto__;
})()
;})(switch__6713__auto__,c__6769__auto___11157,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__6771__auto__ = (function (){var statearr_11156 = f__6770__auto__.call(null);
(statearr_11156[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6769__auto___11157);

return statearr_11156;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6771__auto__);
});})(c__6769__auto___11157,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
* Adds ch as an input to the mix
*/
cljs.core.async.admix = (function admix(mix,ch){
return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
* Removes ch as an input to the mix
*/
cljs.core.async.unmix = (function unmix(mix,ch){
return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
* removes all inputs from the mix
*/
cljs.core.async.unmix_all = (function unmix_all(mix){
return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
* Atomically sets the state(s) of one or more channels in a mix. The
* state map is a map of channels -> channel-state-map. A
* channel-state-map is a map of attrs -> boolean, where attr is one or
* more of :mute, :pause or :solo. Any states supplied are merged with
* the current state.
* 
* Note that channels can be added to a mix via toggle, which can be
* used to add channels in a particular (e.g. paused) state.
*/
cljs.core.async.toggle = (function toggle(mix,state_map){
return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
* Sets the solo mode of the mix. mode must be one of :mute or :pause
*/
cljs.core.async.solo_mode = (function solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});

cljs.core.async.Pub = (function (){var obj11191 = {};
return obj11191;
})();

cljs.core.async.sub_STAR_ = (function sub_STAR_(p,v,ch,close_QMARK_){
if((function (){var and__3727__auto__ = p;
if(and__3727__auto__){
return p.cljs$core$async$Pub$sub_STAR_$arity$4;
} else {
return and__3727__auto__;
}
})()){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__4383__auto__ = (((p == null))?null:p);
return (function (){var or__3739__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4383__auto__)]);
if(or__3739__auto__){
return or__3739__auto__;
} else {
var or__3739__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(or__3739__auto____$1){
return or__3739__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
})().call(null,p,v,ch,close_QMARK_);
}
});

cljs.core.async.unsub_STAR_ = (function unsub_STAR_(p,v,ch){
if((function (){var and__3727__auto__ = p;
if(and__3727__auto__){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3;
} else {
return and__3727__auto__;
}
})()){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__4383__auto__ = (((p == null))?null:p);
return (function (){var or__3739__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4383__auto__)]);
if(or__3739__auto__){
return or__3739__auto__;
} else {
var or__3739__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(or__3739__auto____$1){
return or__3739__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
})().call(null,p,v,ch);
}
});

cljs.core.async.unsub_all_STAR_ = (function() {
var unsub_all_STAR_ = null;
var unsub_all_STAR___1 = (function (p){
if((function (){var and__3727__auto__ = p;
if(and__3727__auto__){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1;
} else {
return and__3727__auto__;
}
})()){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__4383__auto__ = (((p == null))?null:p);
return (function (){var or__3739__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4383__auto__)]);
if(or__3739__auto__){
return or__3739__auto__;
} else {
var or__3739__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(or__3739__auto____$1){
return or__3739__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p);
}
});
var unsub_all_STAR___2 = (function (p,v){
if((function (){var and__3727__auto__ = p;
if(and__3727__auto__){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2;
} else {
return and__3727__auto__;
}
})()){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__4383__auto__ = (((p == null))?null:p);
return (function (){var or__3739__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4383__auto__)]);
if(or__3739__auto__){
return or__3739__auto__;
} else {
var or__3739__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(or__3739__auto____$1){
return or__3739__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p,v);
}
});
unsub_all_STAR_ = function(p,v){
switch(arguments.length){
case 1:
return unsub_all_STAR___1.call(this,p);
case 2:
return unsub_all_STAR___2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = unsub_all_STAR___1;
unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = unsub_all_STAR___2;
return unsub_all_STAR_;
})()
;

/**
* Creates and returns a pub(lication) of the supplied channel,
* partitioned into topics by the topic-fn. topic-fn will be applied to
* each value on the channel and the result will determine the 'topic'
* on which that value will be put. Channels can be subscribed to
* receive copies of topics using 'sub', and unsubscribed using
* 'unsub'. Each topic will be handled by an internal mult on a
* dedicated channel. By default these internal channels are
* unbuffered, but a buf-fn can be supplied which, given a topic,
* creates a buffer with desired properties.
* 
* Each item is distributed to all subs in parallel and synchronously,
* i.e. each sub must accept before the next item is distributed. Use
* buffering/windowing to prevent slow subs from holding up the pub.
* 
* Items received when there are no matching subs get dropped.
* 
* Note that if buf-fns are used then each topic is handled
* asynchronously, i.e. if a channel is subscribed to more than one
* topic it should not expect them to be interleaved identically with
* the source.
*/
cljs.core.async.pub = (function() {
var pub = null;
var pub__2 = (function (ch,topic_fn){
return pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});
var pub__3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__3739__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__3739__auto__)){
return or__3739__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__3739__auto__,mults){
return (function (p1__11192_SHARP_){
if(cljs.core.truth_(p1__11192_SHARP_.call(null,topic))){
return p1__11192_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__11192_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__3739__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t11315 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t11315 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta11316){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta11316 = meta11316;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t11315.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t11315.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t11315.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__4126__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__4126__auto__)){
var m = temp__4126__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t11315.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t11315.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t11315.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t11315.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t11315.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_11317){
var self__ = this;
var _11317__$1 = this;
return self__.meta11316;
});})(mults,ensure_mult))
;

cljs.core.async.t11315.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_11317,meta11316__$1){
var self__ = this;
var _11317__$1 = this;
return (new cljs.core.async.t11315(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta11316__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t11315.cljs$lang$type = true;

cljs.core.async.t11315.cljs$lang$ctorStr = "cljs.core.async/t11315";

cljs.core.async.t11315.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4326__auto__,writer__4327__auto__,opt__4328__auto__){
return cljs.core._write.call(null,writer__4327__auto__,"cljs.core.async/t11315");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t11315 = ((function (mults,ensure_mult){
return (function __GT_t11315(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta11316){
return (new cljs.core.async.t11315(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta11316));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t11315(ensure_mult,mults,buf_fn,topic_fn,ch,pub,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),65,new cljs.core.Keyword(null,"end-line","end-line",1837326455),603,new cljs.core.Keyword(null,"column","column",2078222095),14,new cljs.core.Keyword(null,"line","line",212345235),591,new cljs.core.Keyword(null,"file","file",-1269645878),"/home/jwaag/dev/clj/bingo/out/cljs/core/async.cljs"], null)));
})()
;
var c__6769__auto___11437 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6769__auto___11437,mults,ensure_mult,p){
return (function (){
var f__6770__auto__ = (function (){var switch__6713__auto__ = ((function (c__6769__auto___11437,mults,ensure_mult,p){
return (function (state_11389){
var state_val_11390 = (state_11389[(1)]);
if((state_val_11390 === (7))){
var inst_11385 = (state_11389[(2)]);
var state_11389__$1 = state_11389;
var statearr_11391_11438 = state_11389__$1;
(statearr_11391_11438[(2)] = inst_11385);

(statearr_11391_11438[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11390 === (20))){
var state_11389__$1 = state_11389;
var statearr_11392_11439 = state_11389__$1;
(statearr_11392_11439[(2)] = null);

(statearr_11392_11439[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11390 === (1))){
var state_11389__$1 = state_11389;
var statearr_11393_11440 = state_11389__$1;
(statearr_11393_11440[(2)] = null);

(statearr_11393_11440[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11390 === (24))){
var inst_11368 = (state_11389[(7)]);
var inst_11377 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_11368);
var state_11389__$1 = state_11389;
var statearr_11394_11441 = state_11389__$1;
(statearr_11394_11441[(2)] = inst_11377);

(statearr_11394_11441[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11390 === (4))){
var inst_11320 = (state_11389[(8)]);
var inst_11320__$1 = (state_11389[(2)]);
var inst_11321 = (inst_11320__$1 == null);
var state_11389__$1 = (function (){var statearr_11395 = state_11389;
(statearr_11395[(8)] = inst_11320__$1);

return statearr_11395;
})();
if(cljs.core.truth_(inst_11321)){
var statearr_11396_11442 = state_11389__$1;
(statearr_11396_11442[(1)] = (5));

} else {
var statearr_11397_11443 = state_11389__$1;
(statearr_11397_11443[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11390 === (15))){
var inst_11362 = (state_11389[(2)]);
var state_11389__$1 = state_11389;
var statearr_11398_11444 = state_11389__$1;
(statearr_11398_11444[(2)] = inst_11362);

(statearr_11398_11444[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11390 === (21))){
var inst_11382 = (state_11389[(2)]);
var state_11389__$1 = (function (){var statearr_11399 = state_11389;
(statearr_11399[(9)] = inst_11382);

return statearr_11399;
})();
var statearr_11400_11445 = state_11389__$1;
(statearr_11400_11445[(2)] = null);

(statearr_11400_11445[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11390 === (13))){
var inst_11344 = (state_11389[(10)]);
var inst_11346 = cljs.core.chunked_seq_QMARK_.call(null,inst_11344);
var state_11389__$1 = state_11389;
if(inst_11346){
var statearr_11401_11446 = state_11389__$1;
(statearr_11401_11446[(1)] = (16));

} else {
var statearr_11402_11447 = state_11389__$1;
(statearr_11402_11447[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11390 === (22))){
var inst_11374 = (state_11389[(2)]);
var state_11389__$1 = state_11389;
if(cljs.core.truth_(inst_11374)){
var statearr_11403_11448 = state_11389__$1;
(statearr_11403_11448[(1)] = (23));

} else {
var statearr_11404_11449 = state_11389__$1;
(statearr_11404_11449[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11390 === (6))){
var inst_11368 = (state_11389[(7)]);
var inst_11370 = (state_11389[(11)]);
var inst_11320 = (state_11389[(8)]);
var inst_11368__$1 = topic_fn.call(null,inst_11320);
var inst_11369 = cljs.core.deref.call(null,mults);
var inst_11370__$1 = cljs.core.get.call(null,inst_11369,inst_11368__$1);
var state_11389__$1 = (function (){var statearr_11405 = state_11389;
(statearr_11405[(7)] = inst_11368__$1);

(statearr_11405[(11)] = inst_11370__$1);

return statearr_11405;
})();
if(cljs.core.truth_(inst_11370__$1)){
var statearr_11406_11450 = state_11389__$1;
(statearr_11406_11450[(1)] = (19));

} else {
var statearr_11407_11451 = state_11389__$1;
(statearr_11407_11451[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11390 === (25))){
var inst_11379 = (state_11389[(2)]);
var state_11389__$1 = state_11389;
var statearr_11408_11452 = state_11389__$1;
(statearr_11408_11452[(2)] = inst_11379);

(statearr_11408_11452[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11390 === (17))){
var inst_11344 = (state_11389[(10)]);
var inst_11353 = cljs.core.first.call(null,inst_11344);
var inst_11354 = cljs.core.async.muxch_STAR_.call(null,inst_11353);
var inst_11355 = cljs.core.async.close_BANG_.call(null,inst_11354);
var inst_11356 = cljs.core.next.call(null,inst_11344);
var inst_11330 = inst_11356;
var inst_11331 = null;
var inst_11332 = (0);
var inst_11333 = (0);
var state_11389__$1 = (function (){var statearr_11409 = state_11389;
(statearr_11409[(12)] = inst_11331);

(statearr_11409[(13)] = inst_11355);

(statearr_11409[(14)] = inst_11332);

(statearr_11409[(15)] = inst_11333);

(statearr_11409[(16)] = inst_11330);

return statearr_11409;
})();
var statearr_11410_11453 = state_11389__$1;
(statearr_11410_11453[(2)] = null);

(statearr_11410_11453[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11390 === (3))){
var inst_11387 = (state_11389[(2)]);
var state_11389__$1 = state_11389;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11389__$1,inst_11387);
} else {
if((state_val_11390 === (12))){
var inst_11364 = (state_11389[(2)]);
var state_11389__$1 = state_11389;
var statearr_11411_11454 = state_11389__$1;
(statearr_11411_11454[(2)] = inst_11364);

(statearr_11411_11454[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11390 === (2))){
var state_11389__$1 = state_11389;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11389__$1,(4),ch);
} else {
if((state_val_11390 === (23))){
var state_11389__$1 = state_11389;
var statearr_11412_11455 = state_11389__$1;
(statearr_11412_11455[(2)] = null);

(statearr_11412_11455[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11390 === (19))){
var inst_11370 = (state_11389[(11)]);
var inst_11320 = (state_11389[(8)]);
var inst_11372 = cljs.core.async.muxch_STAR_.call(null,inst_11370);
var state_11389__$1 = state_11389;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11389__$1,(22),inst_11372,inst_11320);
} else {
if((state_val_11390 === (11))){
var inst_11344 = (state_11389[(10)]);
var inst_11330 = (state_11389[(16)]);
var inst_11344__$1 = cljs.core.seq.call(null,inst_11330);
var state_11389__$1 = (function (){var statearr_11413 = state_11389;
(statearr_11413[(10)] = inst_11344__$1);

return statearr_11413;
})();
if(inst_11344__$1){
var statearr_11414_11456 = state_11389__$1;
(statearr_11414_11456[(1)] = (13));

} else {
var statearr_11415_11457 = state_11389__$1;
(statearr_11415_11457[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11390 === (9))){
var inst_11366 = (state_11389[(2)]);
var state_11389__$1 = state_11389;
var statearr_11416_11458 = state_11389__$1;
(statearr_11416_11458[(2)] = inst_11366);

(statearr_11416_11458[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11390 === (5))){
var inst_11327 = cljs.core.deref.call(null,mults);
var inst_11328 = cljs.core.vals.call(null,inst_11327);
var inst_11329 = cljs.core.seq.call(null,inst_11328);
var inst_11330 = inst_11329;
var inst_11331 = null;
var inst_11332 = (0);
var inst_11333 = (0);
var state_11389__$1 = (function (){var statearr_11417 = state_11389;
(statearr_11417[(12)] = inst_11331);

(statearr_11417[(14)] = inst_11332);

(statearr_11417[(15)] = inst_11333);

(statearr_11417[(16)] = inst_11330);

return statearr_11417;
})();
var statearr_11418_11459 = state_11389__$1;
(statearr_11418_11459[(2)] = null);

(statearr_11418_11459[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11390 === (14))){
var state_11389__$1 = state_11389;
var statearr_11422_11460 = state_11389__$1;
(statearr_11422_11460[(2)] = null);

(statearr_11422_11460[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11390 === (16))){
var inst_11344 = (state_11389[(10)]);
var inst_11348 = cljs.core.chunk_first.call(null,inst_11344);
var inst_11349 = cljs.core.chunk_rest.call(null,inst_11344);
var inst_11350 = cljs.core.count.call(null,inst_11348);
var inst_11330 = inst_11349;
var inst_11331 = inst_11348;
var inst_11332 = inst_11350;
var inst_11333 = (0);
var state_11389__$1 = (function (){var statearr_11423 = state_11389;
(statearr_11423[(12)] = inst_11331);

(statearr_11423[(14)] = inst_11332);

(statearr_11423[(15)] = inst_11333);

(statearr_11423[(16)] = inst_11330);

return statearr_11423;
})();
var statearr_11424_11461 = state_11389__$1;
(statearr_11424_11461[(2)] = null);

(statearr_11424_11461[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11390 === (10))){
var inst_11331 = (state_11389[(12)]);
var inst_11332 = (state_11389[(14)]);
var inst_11333 = (state_11389[(15)]);
var inst_11330 = (state_11389[(16)]);
var inst_11338 = cljs.core._nth.call(null,inst_11331,inst_11333);
var inst_11339 = cljs.core.async.muxch_STAR_.call(null,inst_11338);
var inst_11340 = cljs.core.async.close_BANG_.call(null,inst_11339);
var inst_11341 = (inst_11333 + (1));
var tmp11419 = inst_11331;
var tmp11420 = inst_11332;
var tmp11421 = inst_11330;
var inst_11330__$1 = tmp11421;
var inst_11331__$1 = tmp11419;
var inst_11332__$1 = tmp11420;
var inst_11333__$1 = inst_11341;
var state_11389__$1 = (function (){var statearr_11425 = state_11389;
(statearr_11425[(12)] = inst_11331__$1);

(statearr_11425[(17)] = inst_11340);

(statearr_11425[(14)] = inst_11332__$1);

(statearr_11425[(15)] = inst_11333__$1);

(statearr_11425[(16)] = inst_11330__$1);

return statearr_11425;
})();
var statearr_11426_11462 = state_11389__$1;
(statearr_11426_11462[(2)] = null);

(statearr_11426_11462[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11390 === (18))){
var inst_11359 = (state_11389[(2)]);
var state_11389__$1 = state_11389;
var statearr_11427_11463 = state_11389__$1;
(statearr_11427_11463[(2)] = inst_11359);

(statearr_11427_11463[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11390 === (8))){
var inst_11332 = (state_11389[(14)]);
var inst_11333 = (state_11389[(15)]);
var inst_11335 = (inst_11333 < inst_11332);
var inst_11336 = inst_11335;
var state_11389__$1 = state_11389;
if(cljs.core.truth_(inst_11336)){
var statearr_11428_11464 = state_11389__$1;
(statearr_11428_11464[(1)] = (10));

} else {
var statearr_11429_11465 = state_11389__$1;
(statearr_11429_11465[(1)] = (11));

}

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
});})(c__6769__auto___11437,mults,ensure_mult,p))
;
return ((function (switch__6713__auto__,c__6769__auto___11437,mults,ensure_mult,p){
return (function() {
var state_machine__6714__auto__ = null;
var state_machine__6714__auto____0 = (function (){
var statearr_11433 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_11433[(0)] = state_machine__6714__auto__);

(statearr_11433[(1)] = (1));

return statearr_11433;
});
var state_machine__6714__auto____1 = (function (state_11389){
while(true){
var ret_value__6715__auto__ = (function (){try{while(true){
var result__6716__auto__ = switch__6713__auto__.call(null,state_11389);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6716__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6716__auto__;
}
break;
}
}catch (e11434){if((e11434 instanceof Object)){
var ex__6717__auto__ = e11434;
var statearr_11435_11466 = state_11389;
(statearr_11435_11466[(5)] = ex__6717__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11389);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e11434;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6715__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__11467 = state_11389;
state_11389 = G__11467;
continue;
} else {
return ret_value__6715__auto__;
}
break;
}
});
state_machine__6714__auto__ = function(state_11389){
switch(arguments.length){
case 0:
return state_machine__6714__auto____0.call(this);
case 1:
return state_machine__6714__auto____1.call(this,state_11389);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6714__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6714__auto____0;
state_machine__6714__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6714__auto____1;
return state_machine__6714__auto__;
})()
;})(switch__6713__auto__,c__6769__auto___11437,mults,ensure_mult,p))
})();
var state__6771__auto__ = (function (){var statearr_11436 = f__6770__auto__.call(null);
(statearr_11436[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6769__auto___11437);

return statearr_11436;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6771__auto__);
});})(c__6769__auto___11437,mults,ensure_mult,p))
);


return p;
});
pub = function(ch,topic_fn,buf_fn){
switch(arguments.length){
case 2:
return pub__2.call(this,ch,topic_fn);
case 3:
return pub__3.call(this,ch,topic_fn,buf_fn);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
pub.cljs$core$IFn$_invoke$arity$2 = pub__2;
pub.cljs$core$IFn$_invoke$arity$3 = pub__3;
return pub;
})()
;
/**
* Subscribes a channel to a topic of a pub.
* 
* By default the channel will be closed when the source closes,
* but can be determined by the close? parameter.
*/
cljs.core.async.sub = (function() {
var sub = null;
var sub__3 = (function (p,topic,ch){
return sub.call(null,p,topic,ch,true);
});
var sub__4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});
sub = function(p,topic,ch,close_QMARK_){
switch(arguments.length){
case 3:
return sub__3.call(this,p,topic,ch);
case 4:
return sub__4.call(this,p,topic,ch,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
sub.cljs$core$IFn$_invoke$arity$3 = sub__3;
sub.cljs$core$IFn$_invoke$arity$4 = sub__4;
return sub;
})()
;
/**
* Unsubscribes a channel from a topic of a pub
*/
cljs.core.async.unsub = (function unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
* Unsubscribes all channels from a pub, or a topic of a pub
*/
cljs.core.async.unsub_all = (function() {
var unsub_all = null;
var unsub_all__1 = (function (p){
return cljs.core.async.unsub_all_STAR_.call(null,p);
});
var unsub_all__2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});
unsub_all = function(p,topic){
switch(arguments.length){
case 1:
return unsub_all__1.call(this,p);
case 2:
return unsub_all__2.call(this,p,topic);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unsub_all.cljs$core$IFn$_invoke$arity$1 = unsub_all__1;
unsub_all.cljs$core$IFn$_invoke$arity$2 = unsub_all__2;
return unsub_all;
})()
;
/**
* Takes a function and a collection of source channels, and returns a
* channel which contains the values produced by applying f to the set
* of first items taken from each source channel, followed by applying
* f to the set of second items from each channel, until any one of the
* channels is closed, at which point the output channel will be
* closed. The returned channel will be unbuffered by default, or a
* buf-or-n can be supplied
*/
cljs.core.async.map = (function() {
var map = null;
var map__2 = (function (f,chs){
return map.call(null,f,chs,null);
});
var map__3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec.call(null,chs);
var out = cljs.core.async.chan.call(null,buf_or_n);
var cnt = cljs.core.count.call(null,chs__$1);
var rets = cljs.core.object_array.call(null,cnt);
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));
var c__6769__auto___11604 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6769__auto___11604,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__6770__auto__ = (function (){var switch__6713__auto__ = ((function (c__6769__auto___11604,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_11574){
var state_val_11575 = (state_11574[(1)]);
if((state_val_11575 === (7))){
var state_11574__$1 = state_11574;
var statearr_11576_11605 = state_11574__$1;
(statearr_11576_11605[(2)] = null);

(statearr_11576_11605[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11575 === (1))){
var state_11574__$1 = state_11574;
var statearr_11577_11606 = state_11574__$1;
(statearr_11577_11606[(2)] = null);

(statearr_11577_11606[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11575 === (4))){
var inst_11538 = (state_11574[(7)]);
var inst_11540 = (inst_11538 < cnt);
var state_11574__$1 = state_11574;
if(cljs.core.truth_(inst_11540)){
var statearr_11578_11607 = state_11574__$1;
(statearr_11578_11607[(1)] = (6));

} else {
var statearr_11579_11608 = state_11574__$1;
(statearr_11579_11608[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11575 === (15))){
var inst_11570 = (state_11574[(2)]);
var state_11574__$1 = state_11574;
var statearr_11580_11609 = state_11574__$1;
(statearr_11580_11609[(2)] = inst_11570);

(statearr_11580_11609[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11575 === (13))){
var inst_11563 = cljs.core.async.close_BANG_.call(null,out);
var state_11574__$1 = state_11574;
var statearr_11581_11610 = state_11574__$1;
(statearr_11581_11610[(2)] = inst_11563);

(statearr_11581_11610[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11575 === (6))){
var state_11574__$1 = state_11574;
var statearr_11582_11611 = state_11574__$1;
(statearr_11582_11611[(2)] = null);

(statearr_11582_11611[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11575 === (3))){
var inst_11572 = (state_11574[(2)]);
var state_11574__$1 = state_11574;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11574__$1,inst_11572);
} else {
if((state_val_11575 === (12))){
var inst_11560 = (state_11574[(8)]);
var inst_11560__$1 = (state_11574[(2)]);
var inst_11561 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_11560__$1);
var state_11574__$1 = (function (){var statearr_11583 = state_11574;
(statearr_11583[(8)] = inst_11560__$1);

return statearr_11583;
})();
if(cljs.core.truth_(inst_11561)){
var statearr_11584_11612 = state_11574__$1;
(statearr_11584_11612[(1)] = (13));

} else {
var statearr_11585_11613 = state_11574__$1;
(statearr_11585_11613[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11575 === (2))){
var inst_11537 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_11538 = (0);
var state_11574__$1 = (function (){var statearr_11586 = state_11574;
(statearr_11586[(7)] = inst_11538);

(statearr_11586[(9)] = inst_11537);

return statearr_11586;
})();
var statearr_11587_11614 = state_11574__$1;
(statearr_11587_11614[(2)] = null);

(statearr_11587_11614[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11575 === (11))){
var inst_11538 = (state_11574[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_11574,(10),Object,null,(9));
var inst_11547 = chs__$1.call(null,inst_11538);
var inst_11548 = done.call(null,inst_11538);
var inst_11549 = cljs.core.async.take_BANG_.call(null,inst_11547,inst_11548);
var state_11574__$1 = state_11574;
var statearr_11588_11615 = state_11574__$1;
(statearr_11588_11615[(2)] = inst_11549);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11574__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11575 === (9))){
var inst_11538 = (state_11574[(7)]);
var inst_11551 = (state_11574[(2)]);
var inst_11552 = (inst_11538 + (1));
var inst_11538__$1 = inst_11552;
var state_11574__$1 = (function (){var statearr_11589 = state_11574;
(statearr_11589[(10)] = inst_11551);

(statearr_11589[(7)] = inst_11538__$1);

return statearr_11589;
})();
var statearr_11590_11616 = state_11574__$1;
(statearr_11590_11616[(2)] = null);

(statearr_11590_11616[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11575 === (5))){
var inst_11558 = (state_11574[(2)]);
var state_11574__$1 = (function (){var statearr_11591 = state_11574;
(statearr_11591[(11)] = inst_11558);

return statearr_11591;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11574__$1,(12),dchan);
} else {
if((state_val_11575 === (14))){
var inst_11560 = (state_11574[(8)]);
var inst_11565 = cljs.core.apply.call(null,f,inst_11560);
var state_11574__$1 = state_11574;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11574__$1,(16),out,inst_11565);
} else {
if((state_val_11575 === (16))){
var inst_11567 = (state_11574[(2)]);
var state_11574__$1 = (function (){var statearr_11592 = state_11574;
(statearr_11592[(12)] = inst_11567);

return statearr_11592;
})();
var statearr_11593_11617 = state_11574__$1;
(statearr_11593_11617[(2)] = null);

(statearr_11593_11617[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11575 === (10))){
var inst_11542 = (state_11574[(2)]);
var inst_11543 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_11574__$1 = (function (){var statearr_11594 = state_11574;
(statearr_11594[(13)] = inst_11542);

return statearr_11594;
})();
var statearr_11595_11618 = state_11574__$1;
(statearr_11595_11618[(2)] = inst_11543);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11574__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11575 === (8))){
var inst_11556 = (state_11574[(2)]);
var state_11574__$1 = state_11574;
var statearr_11596_11619 = state_11574__$1;
(statearr_11596_11619[(2)] = inst_11556);

(statearr_11596_11619[(1)] = (5));


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
}
}
}
});})(c__6769__auto___11604,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__6713__auto__,c__6769__auto___11604,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var state_machine__6714__auto__ = null;
var state_machine__6714__auto____0 = (function (){
var statearr_11600 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_11600[(0)] = state_machine__6714__auto__);

(statearr_11600[(1)] = (1));

return statearr_11600;
});
var state_machine__6714__auto____1 = (function (state_11574){
while(true){
var ret_value__6715__auto__ = (function (){try{while(true){
var result__6716__auto__ = switch__6713__auto__.call(null,state_11574);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6716__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6716__auto__;
}
break;
}
}catch (e11601){if((e11601 instanceof Object)){
var ex__6717__auto__ = e11601;
var statearr_11602_11620 = state_11574;
(statearr_11602_11620[(5)] = ex__6717__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11574);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e11601;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6715__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__11621 = state_11574;
state_11574 = G__11621;
continue;
} else {
return ret_value__6715__auto__;
}
break;
}
});
state_machine__6714__auto__ = function(state_11574){
switch(arguments.length){
case 0:
return state_machine__6714__auto____0.call(this);
case 1:
return state_machine__6714__auto____1.call(this,state_11574);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6714__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6714__auto____0;
state_machine__6714__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6714__auto____1;
return state_machine__6714__auto__;
})()
;})(switch__6713__auto__,c__6769__auto___11604,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__6771__auto__ = (function (){var statearr_11603 = f__6770__auto__.call(null);
(statearr_11603[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6769__auto___11604);

return statearr_11603;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6771__auto__);
});})(c__6769__auto___11604,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});
map = function(f,chs,buf_or_n){
switch(arguments.length){
case 2:
return map__2.call(this,f,chs);
case 3:
return map__3.call(this,f,chs,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
map.cljs$core$IFn$_invoke$arity$2 = map__2;
map.cljs$core$IFn$_invoke$arity$3 = map__3;
return map;
})()
;
/**
* Takes a collection of source channels and returns a channel which
* contains all values taken from them. The returned channel will be
* unbuffered by default, or a buf-or-n can be supplied. The channel
* will close after all the source channels have closed.
*/
cljs.core.async.merge = (function() {
var merge = null;
var merge__1 = (function (chs){
return merge.call(null,chs,null);
});
var merge__2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__6769__auto___11729 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6769__auto___11729,out){
return (function (){
var f__6770__auto__ = (function (){var switch__6713__auto__ = ((function (c__6769__auto___11729,out){
return (function (state_11705){
var state_val_11706 = (state_11705[(1)]);
if((state_val_11706 === (7))){
var inst_11684 = (state_11705[(7)]);
var inst_11685 = (state_11705[(8)]);
var inst_11684__$1 = (state_11705[(2)]);
var inst_11685__$1 = cljs.core.nth.call(null,inst_11684__$1,(0),null);
var inst_11686 = cljs.core.nth.call(null,inst_11684__$1,(1),null);
var inst_11687 = (inst_11685__$1 == null);
var state_11705__$1 = (function (){var statearr_11707 = state_11705;
(statearr_11707[(7)] = inst_11684__$1);

(statearr_11707[(8)] = inst_11685__$1);

(statearr_11707[(9)] = inst_11686);

return statearr_11707;
})();
if(cljs.core.truth_(inst_11687)){
var statearr_11708_11730 = state_11705__$1;
(statearr_11708_11730[(1)] = (8));

} else {
var statearr_11709_11731 = state_11705__$1;
(statearr_11709_11731[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11706 === (1))){
var inst_11676 = cljs.core.vec.call(null,chs);
var inst_11677 = inst_11676;
var state_11705__$1 = (function (){var statearr_11710 = state_11705;
(statearr_11710[(10)] = inst_11677);

return statearr_11710;
})();
var statearr_11711_11732 = state_11705__$1;
(statearr_11711_11732[(2)] = null);

(statearr_11711_11732[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11706 === (4))){
var inst_11677 = (state_11705[(10)]);
var state_11705__$1 = state_11705;
return cljs.core.async.ioc_alts_BANG_.call(null,state_11705__$1,(7),inst_11677);
} else {
if((state_val_11706 === (6))){
var inst_11701 = (state_11705[(2)]);
var state_11705__$1 = state_11705;
var statearr_11712_11733 = state_11705__$1;
(statearr_11712_11733[(2)] = inst_11701);

(statearr_11712_11733[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11706 === (3))){
var inst_11703 = (state_11705[(2)]);
var state_11705__$1 = state_11705;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11705__$1,inst_11703);
} else {
if((state_val_11706 === (2))){
var inst_11677 = (state_11705[(10)]);
var inst_11679 = cljs.core.count.call(null,inst_11677);
var inst_11680 = (inst_11679 > (0));
var state_11705__$1 = state_11705;
if(cljs.core.truth_(inst_11680)){
var statearr_11714_11734 = state_11705__$1;
(statearr_11714_11734[(1)] = (4));

} else {
var statearr_11715_11735 = state_11705__$1;
(statearr_11715_11735[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11706 === (11))){
var inst_11677 = (state_11705[(10)]);
var inst_11694 = (state_11705[(2)]);
var tmp11713 = inst_11677;
var inst_11677__$1 = tmp11713;
var state_11705__$1 = (function (){var statearr_11716 = state_11705;
(statearr_11716[(11)] = inst_11694);

(statearr_11716[(10)] = inst_11677__$1);

return statearr_11716;
})();
var statearr_11717_11736 = state_11705__$1;
(statearr_11717_11736[(2)] = null);

(statearr_11717_11736[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11706 === (9))){
var inst_11685 = (state_11705[(8)]);
var state_11705__$1 = state_11705;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11705__$1,(11),out,inst_11685);
} else {
if((state_val_11706 === (5))){
var inst_11699 = cljs.core.async.close_BANG_.call(null,out);
var state_11705__$1 = state_11705;
var statearr_11718_11737 = state_11705__$1;
(statearr_11718_11737[(2)] = inst_11699);

(statearr_11718_11737[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11706 === (10))){
var inst_11697 = (state_11705[(2)]);
var state_11705__$1 = state_11705;
var statearr_11719_11738 = state_11705__$1;
(statearr_11719_11738[(2)] = inst_11697);

(statearr_11719_11738[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11706 === (8))){
var inst_11677 = (state_11705[(10)]);
var inst_11684 = (state_11705[(7)]);
var inst_11685 = (state_11705[(8)]);
var inst_11686 = (state_11705[(9)]);
var inst_11689 = (function (){var c = inst_11686;
var v = inst_11685;
var vec__11682 = inst_11684;
var cs = inst_11677;
return ((function (c,v,vec__11682,cs,inst_11677,inst_11684,inst_11685,inst_11686,state_val_11706,c__6769__auto___11729,out){
return (function (p1__11622_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__11622_SHARP_);
});
;})(c,v,vec__11682,cs,inst_11677,inst_11684,inst_11685,inst_11686,state_val_11706,c__6769__auto___11729,out))
})();
var inst_11690 = cljs.core.filterv.call(null,inst_11689,inst_11677);
var inst_11677__$1 = inst_11690;
var state_11705__$1 = (function (){var statearr_11720 = state_11705;
(statearr_11720[(10)] = inst_11677__$1);

return statearr_11720;
})();
var statearr_11721_11739 = state_11705__$1;
(statearr_11721_11739[(2)] = null);

(statearr_11721_11739[(1)] = (2));


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
});})(c__6769__auto___11729,out))
;
return ((function (switch__6713__auto__,c__6769__auto___11729,out){
return (function() {
var state_machine__6714__auto__ = null;
var state_machine__6714__auto____0 = (function (){
var statearr_11725 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_11725[(0)] = state_machine__6714__auto__);

(statearr_11725[(1)] = (1));

return statearr_11725;
});
var state_machine__6714__auto____1 = (function (state_11705){
while(true){
var ret_value__6715__auto__ = (function (){try{while(true){
var result__6716__auto__ = switch__6713__auto__.call(null,state_11705);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6716__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6716__auto__;
}
break;
}
}catch (e11726){if((e11726 instanceof Object)){
var ex__6717__auto__ = e11726;
var statearr_11727_11740 = state_11705;
(statearr_11727_11740[(5)] = ex__6717__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11705);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e11726;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6715__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__11741 = state_11705;
state_11705 = G__11741;
continue;
} else {
return ret_value__6715__auto__;
}
break;
}
});
state_machine__6714__auto__ = function(state_11705){
switch(arguments.length){
case 0:
return state_machine__6714__auto____0.call(this);
case 1:
return state_machine__6714__auto____1.call(this,state_11705);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6714__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6714__auto____0;
state_machine__6714__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6714__auto____1;
return state_machine__6714__auto__;
})()
;})(switch__6713__auto__,c__6769__auto___11729,out))
})();
var state__6771__auto__ = (function (){var statearr_11728 = f__6770__auto__.call(null);
(statearr_11728[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6769__auto___11729);

return statearr_11728;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6771__auto__);
});})(c__6769__auto___11729,out))
);


return out;
});
merge = function(chs,buf_or_n){
switch(arguments.length){
case 1:
return merge__1.call(this,chs);
case 2:
return merge__2.call(this,chs,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
merge.cljs$core$IFn$_invoke$arity$1 = merge__1;
merge.cljs$core$IFn$_invoke$arity$2 = merge__2;
return merge;
})()
;
/**
* Returns a channel containing the single (collection) result of the
* items taken from the channel conjoined to the supplied
* collection. ch must close before into produces a result.
*/
cljs.core.async.into = (function into(coll,ch){
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
* Returns a channel that will return, at most, n items from ch. After n items
* have been returned, or ch has been closed, the return chanel will close.
* 
* The output channel is unbuffered by default, unless buf-or-n is given.
*/
cljs.core.async.take = (function() {
var take = null;
var take__2 = (function (n,ch){
return take.call(null,n,ch,null);
});
var take__3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__6769__auto___11834 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6769__auto___11834,out){
return (function (){
var f__6770__auto__ = (function (){var switch__6713__auto__ = ((function (c__6769__auto___11834,out){
return (function (state_11811){
var state_val_11812 = (state_11811[(1)]);
if((state_val_11812 === (7))){
var inst_11793 = (state_11811[(7)]);
var inst_11793__$1 = (state_11811[(2)]);
var inst_11794 = (inst_11793__$1 == null);
var inst_11795 = cljs.core.not.call(null,inst_11794);
var state_11811__$1 = (function (){var statearr_11813 = state_11811;
(statearr_11813[(7)] = inst_11793__$1);

return statearr_11813;
})();
if(inst_11795){
var statearr_11814_11835 = state_11811__$1;
(statearr_11814_11835[(1)] = (8));

} else {
var statearr_11815_11836 = state_11811__$1;
(statearr_11815_11836[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11812 === (1))){
var inst_11788 = (0);
var state_11811__$1 = (function (){var statearr_11816 = state_11811;
(statearr_11816[(8)] = inst_11788);

return statearr_11816;
})();
var statearr_11817_11837 = state_11811__$1;
(statearr_11817_11837[(2)] = null);

(statearr_11817_11837[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11812 === (4))){
var state_11811__$1 = state_11811;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11811__$1,(7),ch);
} else {
if((state_val_11812 === (6))){
var inst_11806 = (state_11811[(2)]);
var state_11811__$1 = state_11811;
var statearr_11818_11838 = state_11811__$1;
(statearr_11818_11838[(2)] = inst_11806);

(statearr_11818_11838[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11812 === (3))){
var inst_11808 = (state_11811[(2)]);
var inst_11809 = cljs.core.async.close_BANG_.call(null,out);
var state_11811__$1 = (function (){var statearr_11819 = state_11811;
(statearr_11819[(9)] = inst_11808);

return statearr_11819;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11811__$1,inst_11809);
} else {
if((state_val_11812 === (2))){
var inst_11788 = (state_11811[(8)]);
var inst_11790 = (inst_11788 < n);
var state_11811__$1 = state_11811;
if(cljs.core.truth_(inst_11790)){
var statearr_11820_11839 = state_11811__$1;
(statearr_11820_11839[(1)] = (4));

} else {
var statearr_11821_11840 = state_11811__$1;
(statearr_11821_11840[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11812 === (11))){
var inst_11788 = (state_11811[(8)]);
var inst_11798 = (state_11811[(2)]);
var inst_11799 = (inst_11788 + (1));
var inst_11788__$1 = inst_11799;
var state_11811__$1 = (function (){var statearr_11822 = state_11811;
(statearr_11822[(8)] = inst_11788__$1);

(statearr_11822[(10)] = inst_11798);

return statearr_11822;
})();
var statearr_11823_11841 = state_11811__$1;
(statearr_11823_11841[(2)] = null);

(statearr_11823_11841[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11812 === (9))){
var state_11811__$1 = state_11811;
var statearr_11824_11842 = state_11811__$1;
(statearr_11824_11842[(2)] = null);

(statearr_11824_11842[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11812 === (5))){
var state_11811__$1 = state_11811;
var statearr_11825_11843 = state_11811__$1;
(statearr_11825_11843[(2)] = null);

(statearr_11825_11843[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11812 === (10))){
var inst_11803 = (state_11811[(2)]);
var state_11811__$1 = state_11811;
var statearr_11826_11844 = state_11811__$1;
(statearr_11826_11844[(2)] = inst_11803);

(statearr_11826_11844[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11812 === (8))){
var inst_11793 = (state_11811[(7)]);
var state_11811__$1 = state_11811;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11811__$1,(11),out,inst_11793);
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
});})(c__6769__auto___11834,out))
;
return ((function (switch__6713__auto__,c__6769__auto___11834,out){
return (function() {
var state_machine__6714__auto__ = null;
var state_machine__6714__auto____0 = (function (){
var statearr_11830 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_11830[(0)] = state_machine__6714__auto__);

(statearr_11830[(1)] = (1));

return statearr_11830;
});
var state_machine__6714__auto____1 = (function (state_11811){
while(true){
var ret_value__6715__auto__ = (function (){try{while(true){
var result__6716__auto__ = switch__6713__auto__.call(null,state_11811);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6716__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6716__auto__;
}
break;
}
}catch (e11831){if((e11831 instanceof Object)){
var ex__6717__auto__ = e11831;
var statearr_11832_11845 = state_11811;
(statearr_11832_11845[(5)] = ex__6717__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11811);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e11831;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6715__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__11846 = state_11811;
state_11811 = G__11846;
continue;
} else {
return ret_value__6715__auto__;
}
break;
}
});
state_machine__6714__auto__ = function(state_11811){
switch(arguments.length){
case 0:
return state_machine__6714__auto____0.call(this);
case 1:
return state_machine__6714__auto____1.call(this,state_11811);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6714__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6714__auto____0;
state_machine__6714__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6714__auto____1;
return state_machine__6714__auto__;
})()
;})(switch__6713__auto__,c__6769__auto___11834,out))
})();
var state__6771__auto__ = (function (){var statearr_11833 = f__6770__auto__.call(null);
(statearr_11833[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6769__auto___11834);

return statearr_11833;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6771__auto__);
});})(c__6769__auto___11834,out))
);


return out;
});
take = function(n,ch,buf_or_n){
switch(arguments.length){
case 2:
return take__2.call(this,n,ch);
case 3:
return take__3.call(this,n,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
take.cljs$core$IFn$_invoke$arity$2 = take__2;
take.cljs$core$IFn$_invoke$arity$3 = take__3;
return take;
})()
;
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.map_LT_ = (function map_LT_(f,ch){
if(typeof cljs.core.async.t11854 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t11854 = (function (ch,f,map_LT_,meta11855){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta11855 = meta11855;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t11854.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t11854.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t11854.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t11854.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t11857 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t11857 = (function (fn1,_,meta11855,map_LT_,f,ch,meta11858){
this.fn1 = fn1;
this._ = _;
this.meta11855 = meta11855;
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta11858 = meta11858;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t11857.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t11857.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t11857.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__11847_SHARP_){
return f1.call(null,(((p1__11847_SHARP_ == null))?null:self__.f.call(null,p1__11847_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t11857.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_11859){
var self__ = this;
var _11859__$1 = this;
return self__.meta11858;
});})(___$1))
;

cljs.core.async.t11857.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_11859,meta11858__$1){
var self__ = this;
var _11859__$1 = this;
return (new cljs.core.async.t11857(self__.fn1,self__._,self__.meta11855,self__.map_LT_,self__.f,self__.ch,meta11858__$1));
});})(___$1))
;

cljs.core.async.t11857.cljs$lang$type = true;

cljs.core.async.t11857.cljs$lang$ctorStr = "cljs.core.async/t11857";

cljs.core.async.t11857.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4326__auto__,writer__4327__auto__,opt__4328__auto__){
return cljs.core._write.call(null,writer__4327__auto__,"cljs.core.async/t11857");
});})(___$1))
;

cljs.core.async.__GT_t11857 = ((function (___$1){
return (function __GT_t11857(fn1__$1,___$2,meta11855__$1,map_LT___$1,f__$1,ch__$1,meta11858){
return (new cljs.core.async.t11857(fn1__$1,___$2,meta11855__$1,map_LT___$1,f__$1,ch__$1,meta11858));
});})(___$1))
;

}

return (new cljs.core.async.t11857(fn1,___$1,self__.meta11855,self__.map_LT_,self__.f,self__.ch,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),46,new cljs.core.Keyword(null,"end-line","end-line",1837326455),737,new cljs.core.Keyword(null,"column","column",2078222095),10,new cljs.core.Keyword(null,"line","line",212345235),731,new cljs.core.Keyword(null,"file","file",-1269645878),"/home/jwaag/dev/clj/bingo/out/cljs/core/async.cljs"], null)));
})()
);
if(cljs.core.truth_((function (){var and__3727__auto__ = ret;
if(cljs.core.truth_(and__3727__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__3727__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t11854.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t11854.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t11854.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t11854.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11856){
var self__ = this;
var _11856__$1 = this;
return self__.meta11855;
});

cljs.core.async.t11854.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11856,meta11855__$1){
var self__ = this;
var _11856__$1 = this;
return (new cljs.core.async.t11854(self__.ch,self__.f,self__.map_LT_,meta11855__$1));
});

cljs.core.async.t11854.cljs$lang$type = true;

cljs.core.async.t11854.cljs$lang$ctorStr = "cljs.core.async/t11854";

cljs.core.async.t11854.cljs$lang$ctorPrWriter = (function (this__4326__auto__,writer__4327__auto__,opt__4328__auto__){
return cljs.core._write.call(null,writer__4327__auto__,"cljs.core.async/t11854");
});

cljs.core.async.__GT_t11854 = (function __GT_t11854(ch__$1,f__$1,map_LT___$1,meta11855){
return (new cljs.core.async.t11854(ch__$1,f__$1,map_LT___$1,meta11855));
});

}

return (new cljs.core.async.t11854(ch,f,map_LT_,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),46,new cljs.core.Keyword(null,"end-line","end-line",1837326455),743,new cljs.core.Keyword(null,"column","column",2078222095),3,new cljs.core.Keyword(null,"line","line",212345235),722,new cljs.core.Keyword(null,"file","file",-1269645878),"/home/jwaag/dev/clj/bingo/out/cljs/core/async.cljs"], null)));
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){
if(typeof cljs.core.async.t11863 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t11863 = (function (ch,f,map_GT_,meta11864){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta11864 = meta11864;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t11863.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t11863.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t11863.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t11863.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t11863.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t11863.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t11863.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11865){
var self__ = this;
var _11865__$1 = this;
return self__.meta11864;
});

cljs.core.async.t11863.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11865,meta11864__$1){
var self__ = this;
var _11865__$1 = this;
return (new cljs.core.async.t11863(self__.ch,self__.f,self__.map_GT_,meta11864__$1));
});

cljs.core.async.t11863.cljs$lang$type = true;

cljs.core.async.t11863.cljs$lang$ctorStr = "cljs.core.async/t11863";

cljs.core.async.t11863.cljs$lang$ctorPrWriter = (function (this__4326__auto__,writer__4327__auto__,opt__4328__auto__){
return cljs.core._write.call(null,writer__4327__auto__,"cljs.core.async/t11863");
});

cljs.core.async.__GT_t11863 = (function __GT_t11863(ch__$1,f__$1,map_GT___$1,meta11864){
return (new cljs.core.async.t11863(ch__$1,f__$1,map_GT___$1,meta11864));
});

}

return (new cljs.core.async.t11863(ch,f,map_GT_,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),34,new cljs.core.Keyword(null,"end-line","end-line",1837326455),757,new cljs.core.Keyword(null,"column","column",2078222095),3,new cljs.core.Keyword(null,"line","line",212345235),748,new cljs.core.Keyword(null,"file","file",-1269645878),"/home/jwaag/dev/clj/bingo/out/cljs/core/async.cljs"], null)));
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){
if(typeof cljs.core.async.t11869 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t11869 = (function (ch,p,filter_GT_,meta11870){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta11870 = meta11870;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t11869.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t11869.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t11869.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t11869.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t11869.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t11869.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t11869.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t11869.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11871){
var self__ = this;
var _11871__$1 = this;
return self__.meta11870;
});

cljs.core.async.t11869.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11871,meta11870__$1){
var self__ = this;
var _11871__$1 = this;
return (new cljs.core.async.t11869(self__.ch,self__.p,self__.filter_GT_,meta11870__$1));
});

cljs.core.async.t11869.cljs$lang$type = true;

cljs.core.async.t11869.cljs$lang$ctorStr = "cljs.core.async/t11869";

cljs.core.async.t11869.cljs$lang$ctorPrWriter = (function (this__4326__auto__,writer__4327__auto__,opt__4328__auto__){
return cljs.core._write.call(null,writer__4327__auto__,"cljs.core.async/t11869");
});

cljs.core.async.__GT_t11869 = (function __GT_t11869(ch__$1,p__$1,filter_GT___$1,meta11870){
return (new cljs.core.async.t11869(ch__$1,p__$1,filter_GT___$1,meta11870));
});

}

return (new cljs.core.async.t11869(ch,p,filter_GT_,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),48,new cljs.core.Keyword(null,"end-line","end-line",1837326455),774,new cljs.core.Keyword(null,"column","column",2078222095),3,new cljs.core.Keyword(null,"line","line",212345235),762,new cljs.core.Keyword(null,"file","file",-1269645878),"/home/jwaag/dev/clj/bingo/out/cljs/core/async.cljs"], null)));
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.remove_GT_ = (function remove_GT_(p,ch){
return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.filter_LT_ = (function() {
var filter_LT_ = null;
var filter_LT___2 = (function (p,ch){
return filter_LT_.call(null,p,ch,null);
});
var filter_LT___3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__6769__auto___11954 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6769__auto___11954,out){
return (function (){
var f__6770__auto__ = (function (){var switch__6713__auto__ = ((function (c__6769__auto___11954,out){
return (function (state_11933){
var state_val_11934 = (state_11933[(1)]);
if((state_val_11934 === (7))){
var inst_11929 = (state_11933[(2)]);
var state_11933__$1 = state_11933;
var statearr_11935_11955 = state_11933__$1;
(statearr_11935_11955[(2)] = inst_11929);

(statearr_11935_11955[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11934 === (1))){
var state_11933__$1 = state_11933;
var statearr_11936_11956 = state_11933__$1;
(statearr_11936_11956[(2)] = null);

(statearr_11936_11956[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11934 === (4))){
var inst_11915 = (state_11933[(7)]);
var inst_11915__$1 = (state_11933[(2)]);
var inst_11916 = (inst_11915__$1 == null);
var state_11933__$1 = (function (){var statearr_11937 = state_11933;
(statearr_11937[(7)] = inst_11915__$1);

return statearr_11937;
})();
if(cljs.core.truth_(inst_11916)){
var statearr_11938_11957 = state_11933__$1;
(statearr_11938_11957[(1)] = (5));

} else {
var statearr_11939_11958 = state_11933__$1;
(statearr_11939_11958[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11934 === (6))){
var inst_11915 = (state_11933[(7)]);
var inst_11920 = p.call(null,inst_11915);
var state_11933__$1 = state_11933;
if(cljs.core.truth_(inst_11920)){
var statearr_11940_11959 = state_11933__$1;
(statearr_11940_11959[(1)] = (8));

} else {
var statearr_11941_11960 = state_11933__$1;
(statearr_11941_11960[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11934 === (3))){
var inst_11931 = (state_11933[(2)]);
var state_11933__$1 = state_11933;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11933__$1,inst_11931);
} else {
if((state_val_11934 === (2))){
var state_11933__$1 = state_11933;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11933__$1,(4),ch);
} else {
if((state_val_11934 === (11))){
var inst_11923 = (state_11933[(2)]);
var state_11933__$1 = state_11933;
var statearr_11942_11961 = state_11933__$1;
(statearr_11942_11961[(2)] = inst_11923);

(statearr_11942_11961[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11934 === (9))){
var state_11933__$1 = state_11933;
var statearr_11943_11962 = state_11933__$1;
(statearr_11943_11962[(2)] = null);

(statearr_11943_11962[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11934 === (5))){
var inst_11918 = cljs.core.async.close_BANG_.call(null,out);
var state_11933__$1 = state_11933;
var statearr_11944_11963 = state_11933__$1;
(statearr_11944_11963[(2)] = inst_11918);

(statearr_11944_11963[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11934 === (10))){
var inst_11926 = (state_11933[(2)]);
var state_11933__$1 = (function (){var statearr_11945 = state_11933;
(statearr_11945[(8)] = inst_11926);

return statearr_11945;
})();
var statearr_11946_11964 = state_11933__$1;
(statearr_11946_11964[(2)] = null);

(statearr_11946_11964[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11934 === (8))){
var inst_11915 = (state_11933[(7)]);
var state_11933__$1 = state_11933;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11933__$1,(11),out,inst_11915);
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
});})(c__6769__auto___11954,out))
;
return ((function (switch__6713__auto__,c__6769__auto___11954,out){
return (function() {
var state_machine__6714__auto__ = null;
var state_machine__6714__auto____0 = (function (){
var statearr_11950 = [null,null,null,null,null,null,null,null,null];
(statearr_11950[(0)] = state_machine__6714__auto__);

(statearr_11950[(1)] = (1));

return statearr_11950;
});
var state_machine__6714__auto____1 = (function (state_11933){
while(true){
var ret_value__6715__auto__ = (function (){try{while(true){
var result__6716__auto__ = switch__6713__auto__.call(null,state_11933);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6716__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6716__auto__;
}
break;
}
}catch (e11951){if((e11951 instanceof Object)){
var ex__6717__auto__ = e11951;
var statearr_11952_11965 = state_11933;
(statearr_11952_11965[(5)] = ex__6717__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11933);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e11951;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6715__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__11966 = state_11933;
state_11933 = G__11966;
continue;
} else {
return ret_value__6715__auto__;
}
break;
}
});
state_machine__6714__auto__ = function(state_11933){
switch(arguments.length){
case 0:
return state_machine__6714__auto____0.call(this);
case 1:
return state_machine__6714__auto____1.call(this,state_11933);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6714__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6714__auto____0;
state_machine__6714__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6714__auto____1;
return state_machine__6714__auto__;
})()
;})(switch__6713__auto__,c__6769__auto___11954,out))
})();
var state__6771__auto__ = (function (){var statearr_11953 = f__6770__auto__.call(null);
(statearr_11953[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6769__auto___11954);

return statearr_11953;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6771__auto__);
});})(c__6769__auto___11954,out))
);


return out;
});
filter_LT_ = function(p,ch,buf_or_n){
switch(arguments.length){
case 2:
return filter_LT___2.call(this,p,ch);
case 3:
return filter_LT___3.call(this,p,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
filter_LT_.cljs$core$IFn$_invoke$arity$2 = filter_LT___2;
filter_LT_.cljs$core$IFn$_invoke$arity$3 = filter_LT___3;
return filter_LT_;
})()
;
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.remove_LT_ = (function() {
var remove_LT_ = null;
var remove_LT___2 = (function (p,ch){
return remove_LT_.call(null,p,ch,null);
});
var remove_LT___3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});
remove_LT_ = function(p,ch,buf_or_n){
switch(arguments.length){
case 2:
return remove_LT___2.call(this,p,ch);
case 3:
return remove_LT___3.call(this,p,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
remove_LT_.cljs$core$IFn$_invoke$arity$2 = remove_LT___2;
remove_LT_.cljs$core$IFn$_invoke$arity$3 = remove_LT___3;
return remove_LT_;
})()
;
cljs.core.async.mapcat_STAR_ = (function mapcat_STAR_(f,in$,out){
var c__6769__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6769__auto__){
return (function (){
var f__6770__auto__ = (function (){var switch__6713__auto__ = ((function (c__6769__auto__){
return (function (state_12132){
var state_val_12133 = (state_12132[(1)]);
if((state_val_12133 === (7))){
var inst_12128 = (state_12132[(2)]);
var state_12132__$1 = state_12132;
var statearr_12134_12175 = state_12132__$1;
(statearr_12134_12175[(2)] = inst_12128);

(statearr_12134_12175[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12133 === (20))){
var inst_12098 = (state_12132[(7)]);
var inst_12109 = (state_12132[(2)]);
var inst_12110 = cljs.core.next.call(null,inst_12098);
var inst_12084 = inst_12110;
var inst_12085 = null;
var inst_12086 = (0);
var inst_12087 = (0);
var state_12132__$1 = (function (){var statearr_12135 = state_12132;
(statearr_12135[(8)] = inst_12087);

(statearr_12135[(9)] = inst_12084);

(statearr_12135[(10)] = inst_12109);

(statearr_12135[(11)] = inst_12086);

(statearr_12135[(12)] = inst_12085);

return statearr_12135;
})();
var statearr_12136_12176 = state_12132__$1;
(statearr_12136_12176[(2)] = null);

(statearr_12136_12176[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12133 === (1))){
var state_12132__$1 = state_12132;
var statearr_12137_12177 = state_12132__$1;
(statearr_12137_12177[(2)] = null);

(statearr_12137_12177[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12133 === (4))){
var inst_12073 = (state_12132[(13)]);
var inst_12073__$1 = (state_12132[(2)]);
var inst_12074 = (inst_12073__$1 == null);
var state_12132__$1 = (function (){var statearr_12138 = state_12132;
(statearr_12138[(13)] = inst_12073__$1);

return statearr_12138;
})();
if(cljs.core.truth_(inst_12074)){
var statearr_12139_12178 = state_12132__$1;
(statearr_12139_12178[(1)] = (5));

} else {
var statearr_12140_12179 = state_12132__$1;
(statearr_12140_12179[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12133 === (15))){
var state_12132__$1 = state_12132;
var statearr_12144_12180 = state_12132__$1;
(statearr_12144_12180[(2)] = null);

(statearr_12144_12180[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12133 === (21))){
var state_12132__$1 = state_12132;
var statearr_12145_12181 = state_12132__$1;
(statearr_12145_12181[(2)] = null);

(statearr_12145_12181[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12133 === (13))){
var inst_12087 = (state_12132[(8)]);
var inst_12084 = (state_12132[(9)]);
var inst_12086 = (state_12132[(11)]);
var inst_12085 = (state_12132[(12)]);
var inst_12094 = (state_12132[(2)]);
var inst_12095 = (inst_12087 + (1));
var tmp12141 = inst_12084;
var tmp12142 = inst_12086;
var tmp12143 = inst_12085;
var inst_12084__$1 = tmp12141;
var inst_12085__$1 = tmp12143;
var inst_12086__$1 = tmp12142;
var inst_12087__$1 = inst_12095;
var state_12132__$1 = (function (){var statearr_12146 = state_12132;
(statearr_12146[(8)] = inst_12087__$1);

(statearr_12146[(9)] = inst_12084__$1);

(statearr_12146[(11)] = inst_12086__$1);

(statearr_12146[(14)] = inst_12094);

(statearr_12146[(12)] = inst_12085__$1);

return statearr_12146;
})();
var statearr_12147_12182 = state_12132__$1;
(statearr_12147_12182[(2)] = null);

(statearr_12147_12182[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12133 === (22))){
var state_12132__$1 = state_12132;
var statearr_12148_12183 = state_12132__$1;
(statearr_12148_12183[(2)] = null);

(statearr_12148_12183[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12133 === (6))){
var inst_12073 = (state_12132[(13)]);
var inst_12082 = f.call(null,inst_12073);
var inst_12083 = cljs.core.seq.call(null,inst_12082);
var inst_12084 = inst_12083;
var inst_12085 = null;
var inst_12086 = (0);
var inst_12087 = (0);
var state_12132__$1 = (function (){var statearr_12149 = state_12132;
(statearr_12149[(8)] = inst_12087);

(statearr_12149[(9)] = inst_12084);

(statearr_12149[(11)] = inst_12086);

(statearr_12149[(12)] = inst_12085);

return statearr_12149;
})();
var statearr_12150_12184 = state_12132__$1;
(statearr_12150_12184[(2)] = null);

(statearr_12150_12184[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12133 === (17))){
var inst_12098 = (state_12132[(7)]);
var inst_12102 = cljs.core.chunk_first.call(null,inst_12098);
var inst_12103 = cljs.core.chunk_rest.call(null,inst_12098);
var inst_12104 = cljs.core.count.call(null,inst_12102);
var inst_12084 = inst_12103;
var inst_12085 = inst_12102;
var inst_12086 = inst_12104;
var inst_12087 = (0);
var state_12132__$1 = (function (){var statearr_12151 = state_12132;
(statearr_12151[(8)] = inst_12087);

(statearr_12151[(9)] = inst_12084);

(statearr_12151[(11)] = inst_12086);

(statearr_12151[(12)] = inst_12085);

return statearr_12151;
})();
var statearr_12152_12185 = state_12132__$1;
(statearr_12152_12185[(2)] = null);

(statearr_12152_12185[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12133 === (3))){
var inst_12130 = (state_12132[(2)]);
var state_12132__$1 = state_12132;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12132__$1,inst_12130);
} else {
if((state_val_12133 === (12))){
var inst_12118 = (state_12132[(2)]);
var state_12132__$1 = state_12132;
var statearr_12153_12186 = state_12132__$1;
(statearr_12153_12186[(2)] = inst_12118);

(statearr_12153_12186[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12133 === (2))){
var state_12132__$1 = state_12132;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12132__$1,(4),in$);
} else {
if((state_val_12133 === (23))){
var inst_12126 = (state_12132[(2)]);
var state_12132__$1 = state_12132;
var statearr_12154_12187 = state_12132__$1;
(statearr_12154_12187[(2)] = inst_12126);

(statearr_12154_12187[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12133 === (19))){
var inst_12113 = (state_12132[(2)]);
var state_12132__$1 = state_12132;
var statearr_12155_12188 = state_12132__$1;
(statearr_12155_12188[(2)] = inst_12113);

(statearr_12155_12188[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12133 === (11))){
var inst_12098 = (state_12132[(7)]);
var inst_12084 = (state_12132[(9)]);
var inst_12098__$1 = cljs.core.seq.call(null,inst_12084);
var state_12132__$1 = (function (){var statearr_12156 = state_12132;
(statearr_12156[(7)] = inst_12098__$1);

return statearr_12156;
})();
if(inst_12098__$1){
var statearr_12157_12189 = state_12132__$1;
(statearr_12157_12189[(1)] = (14));

} else {
var statearr_12158_12190 = state_12132__$1;
(statearr_12158_12190[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12133 === (9))){
var inst_12120 = (state_12132[(2)]);
var inst_12121 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_12132__$1 = (function (){var statearr_12159 = state_12132;
(statearr_12159[(15)] = inst_12120);

return statearr_12159;
})();
if(cljs.core.truth_(inst_12121)){
var statearr_12160_12191 = state_12132__$1;
(statearr_12160_12191[(1)] = (21));

} else {
var statearr_12161_12192 = state_12132__$1;
(statearr_12161_12192[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12133 === (5))){
var inst_12076 = cljs.core.async.close_BANG_.call(null,out);
var state_12132__$1 = state_12132;
var statearr_12162_12193 = state_12132__$1;
(statearr_12162_12193[(2)] = inst_12076);

(statearr_12162_12193[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12133 === (14))){
var inst_12098 = (state_12132[(7)]);
var inst_12100 = cljs.core.chunked_seq_QMARK_.call(null,inst_12098);
var state_12132__$1 = state_12132;
if(inst_12100){
var statearr_12163_12194 = state_12132__$1;
(statearr_12163_12194[(1)] = (17));

} else {
var statearr_12164_12195 = state_12132__$1;
(statearr_12164_12195[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12133 === (16))){
var inst_12116 = (state_12132[(2)]);
var state_12132__$1 = state_12132;
var statearr_12165_12196 = state_12132__$1;
(statearr_12165_12196[(2)] = inst_12116);

(statearr_12165_12196[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12133 === (10))){
var inst_12087 = (state_12132[(8)]);
var inst_12085 = (state_12132[(12)]);
var inst_12092 = cljs.core._nth.call(null,inst_12085,inst_12087);
var state_12132__$1 = state_12132;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12132__$1,(13),out,inst_12092);
} else {
if((state_val_12133 === (18))){
var inst_12098 = (state_12132[(7)]);
var inst_12107 = cljs.core.first.call(null,inst_12098);
var state_12132__$1 = state_12132;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12132__$1,(20),out,inst_12107);
} else {
if((state_val_12133 === (8))){
var inst_12087 = (state_12132[(8)]);
var inst_12086 = (state_12132[(11)]);
var inst_12089 = (inst_12087 < inst_12086);
var inst_12090 = inst_12089;
var state_12132__$1 = state_12132;
if(cljs.core.truth_(inst_12090)){
var statearr_12166_12197 = state_12132__$1;
(statearr_12166_12197[(1)] = (10));

} else {
var statearr_12167_12198 = state_12132__$1;
(statearr_12167_12198[(1)] = (11));

}

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
});})(c__6769__auto__))
;
return ((function (switch__6713__auto__,c__6769__auto__){
return (function() {
var state_machine__6714__auto__ = null;
var state_machine__6714__auto____0 = (function (){
var statearr_12171 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_12171[(0)] = state_machine__6714__auto__);

(statearr_12171[(1)] = (1));

return statearr_12171;
});
var state_machine__6714__auto____1 = (function (state_12132){
while(true){
var ret_value__6715__auto__ = (function (){try{while(true){
var result__6716__auto__ = switch__6713__auto__.call(null,state_12132);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6716__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6716__auto__;
}
break;
}
}catch (e12172){if((e12172 instanceof Object)){
var ex__6717__auto__ = e12172;
var statearr_12173_12199 = state_12132;
(statearr_12173_12199[(5)] = ex__6717__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12132);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e12172;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6715__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12200 = state_12132;
state_12132 = G__12200;
continue;
} else {
return ret_value__6715__auto__;
}
break;
}
});
state_machine__6714__auto__ = function(state_12132){
switch(arguments.length){
case 0:
return state_machine__6714__auto____0.call(this);
case 1:
return state_machine__6714__auto____1.call(this,state_12132);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6714__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6714__auto____0;
state_machine__6714__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6714__auto____1;
return state_machine__6714__auto__;
})()
;})(switch__6713__auto__,c__6769__auto__))
})();
var state__6771__auto__ = (function (){var statearr_12174 = f__6770__auto__.call(null);
(statearr_12174[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6769__auto__);

return statearr_12174;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6771__auto__);
});})(c__6769__auto__))
);

return c__6769__auto__;
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.mapcat_LT_ = (function() {
var mapcat_LT_ = null;
var mapcat_LT___2 = (function (f,in$){
return mapcat_LT_.call(null,f,in$,null);
});
var mapcat_LT___3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
});
mapcat_LT_ = function(f,in$,buf_or_n){
switch(arguments.length){
case 2:
return mapcat_LT___2.call(this,f,in$);
case 3:
return mapcat_LT___3.call(this,f,in$,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = mapcat_LT___2;
mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = mapcat_LT___3;
return mapcat_LT_;
})()
;
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.mapcat_GT_ = (function() {
var mapcat_GT_ = null;
var mapcat_GT___2 = (function (f,out){
return mapcat_GT_.call(null,f,out,null);
});
var mapcat_GT___3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
});
mapcat_GT_ = function(f,out,buf_or_n){
switch(arguments.length){
case 2:
return mapcat_GT___2.call(this,f,out);
case 3:
return mapcat_GT___3.call(this,f,out,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = mapcat_GT___2;
mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = mapcat_GT___3;
return mapcat_GT_;
})()
;
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.unique = (function() {
var unique = null;
var unique__1 = (function (ch){
return unique.call(null,ch,null);
});
var unique__2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__6769__auto___12297 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6769__auto___12297,out){
return (function (){
var f__6770__auto__ = (function (){var switch__6713__auto__ = ((function (c__6769__auto___12297,out){
return (function (state_12272){
var state_val_12273 = (state_12272[(1)]);
if((state_val_12273 === (7))){
var inst_12267 = (state_12272[(2)]);
var state_12272__$1 = state_12272;
var statearr_12274_12298 = state_12272__$1;
(statearr_12274_12298[(2)] = inst_12267);

(statearr_12274_12298[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12273 === (1))){
var inst_12249 = null;
var state_12272__$1 = (function (){var statearr_12275 = state_12272;
(statearr_12275[(7)] = inst_12249);

return statearr_12275;
})();
var statearr_12276_12299 = state_12272__$1;
(statearr_12276_12299[(2)] = null);

(statearr_12276_12299[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12273 === (4))){
var inst_12252 = (state_12272[(8)]);
var inst_12252__$1 = (state_12272[(2)]);
var inst_12253 = (inst_12252__$1 == null);
var inst_12254 = cljs.core.not.call(null,inst_12253);
var state_12272__$1 = (function (){var statearr_12277 = state_12272;
(statearr_12277[(8)] = inst_12252__$1);

return statearr_12277;
})();
if(inst_12254){
var statearr_12278_12300 = state_12272__$1;
(statearr_12278_12300[(1)] = (5));

} else {
var statearr_12279_12301 = state_12272__$1;
(statearr_12279_12301[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12273 === (6))){
var state_12272__$1 = state_12272;
var statearr_12280_12302 = state_12272__$1;
(statearr_12280_12302[(2)] = null);

(statearr_12280_12302[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12273 === (3))){
var inst_12269 = (state_12272[(2)]);
var inst_12270 = cljs.core.async.close_BANG_.call(null,out);
var state_12272__$1 = (function (){var statearr_12281 = state_12272;
(statearr_12281[(9)] = inst_12269);

return statearr_12281;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12272__$1,inst_12270);
} else {
if((state_val_12273 === (2))){
var state_12272__$1 = state_12272;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12272__$1,(4),ch);
} else {
if((state_val_12273 === (11))){
var inst_12252 = (state_12272[(8)]);
var inst_12261 = (state_12272[(2)]);
var inst_12249 = inst_12252;
var state_12272__$1 = (function (){var statearr_12282 = state_12272;
(statearr_12282[(10)] = inst_12261);

(statearr_12282[(7)] = inst_12249);

return statearr_12282;
})();
var statearr_12283_12303 = state_12272__$1;
(statearr_12283_12303[(2)] = null);

(statearr_12283_12303[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12273 === (9))){
var inst_12252 = (state_12272[(8)]);
var state_12272__$1 = state_12272;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12272__$1,(11),out,inst_12252);
} else {
if((state_val_12273 === (5))){
var inst_12249 = (state_12272[(7)]);
var inst_12252 = (state_12272[(8)]);
var inst_12256 = cljs.core._EQ_.call(null,inst_12252,inst_12249);
var state_12272__$1 = state_12272;
if(inst_12256){
var statearr_12285_12304 = state_12272__$1;
(statearr_12285_12304[(1)] = (8));

} else {
var statearr_12286_12305 = state_12272__$1;
(statearr_12286_12305[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12273 === (10))){
var inst_12264 = (state_12272[(2)]);
var state_12272__$1 = state_12272;
var statearr_12287_12306 = state_12272__$1;
(statearr_12287_12306[(2)] = inst_12264);

(statearr_12287_12306[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12273 === (8))){
var inst_12249 = (state_12272[(7)]);
var tmp12284 = inst_12249;
var inst_12249__$1 = tmp12284;
var state_12272__$1 = (function (){var statearr_12288 = state_12272;
(statearr_12288[(7)] = inst_12249__$1);

return statearr_12288;
})();
var statearr_12289_12307 = state_12272__$1;
(statearr_12289_12307[(2)] = null);

(statearr_12289_12307[(1)] = (2));


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
});})(c__6769__auto___12297,out))
;
return ((function (switch__6713__auto__,c__6769__auto___12297,out){
return (function() {
var state_machine__6714__auto__ = null;
var state_machine__6714__auto____0 = (function (){
var statearr_12293 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_12293[(0)] = state_machine__6714__auto__);

(statearr_12293[(1)] = (1));

return statearr_12293;
});
var state_machine__6714__auto____1 = (function (state_12272){
while(true){
var ret_value__6715__auto__ = (function (){try{while(true){
var result__6716__auto__ = switch__6713__auto__.call(null,state_12272);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6716__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6716__auto__;
}
break;
}
}catch (e12294){if((e12294 instanceof Object)){
var ex__6717__auto__ = e12294;
var statearr_12295_12308 = state_12272;
(statearr_12295_12308[(5)] = ex__6717__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12272);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e12294;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6715__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12309 = state_12272;
state_12272 = G__12309;
continue;
} else {
return ret_value__6715__auto__;
}
break;
}
});
state_machine__6714__auto__ = function(state_12272){
switch(arguments.length){
case 0:
return state_machine__6714__auto____0.call(this);
case 1:
return state_machine__6714__auto____1.call(this,state_12272);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6714__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6714__auto____0;
state_machine__6714__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6714__auto____1;
return state_machine__6714__auto__;
})()
;})(switch__6713__auto__,c__6769__auto___12297,out))
})();
var state__6771__auto__ = (function (){var statearr_12296 = f__6770__auto__.call(null);
(statearr_12296[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6769__auto___12297);

return statearr_12296;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6771__auto__);
});})(c__6769__auto___12297,out))
);


return out;
});
unique = function(ch,buf_or_n){
switch(arguments.length){
case 1:
return unique__1.call(this,ch);
case 2:
return unique__2.call(this,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unique.cljs$core$IFn$_invoke$arity$1 = unique__1;
unique.cljs$core$IFn$_invoke$arity$2 = unique__2;
return unique;
})()
;
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.partition = (function() {
var partition = null;
var partition__2 = (function (n,ch){
return partition.call(null,n,ch,null);
});
var partition__3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__6769__auto___12444 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6769__auto___12444,out){
return (function (){
var f__6770__auto__ = (function (){var switch__6713__auto__ = ((function (c__6769__auto___12444,out){
return (function (state_12414){
var state_val_12415 = (state_12414[(1)]);
if((state_val_12415 === (7))){
var inst_12410 = (state_12414[(2)]);
var state_12414__$1 = state_12414;
var statearr_12416_12445 = state_12414__$1;
(statearr_12416_12445[(2)] = inst_12410);

(statearr_12416_12445[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12415 === (1))){
var inst_12377 = (new Array(n));
var inst_12378 = inst_12377;
var inst_12379 = (0);
var state_12414__$1 = (function (){var statearr_12417 = state_12414;
(statearr_12417[(7)] = inst_12379);

(statearr_12417[(8)] = inst_12378);

return statearr_12417;
})();
var statearr_12418_12446 = state_12414__$1;
(statearr_12418_12446[(2)] = null);

(statearr_12418_12446[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12415 === (4))){
var inst_12382 = (state_12414[(9)]);
var inst_12382__$1 = (state_12414[(2)]);
var inst_12383 = (inst_12382__$1 == null);
var inst_12384 = cljs.core.not.call(null,inst_12383);
var state_12414__$1 = (function (){var statearr_12419 = state_12414;
(statearr_12419[(9)] = inst_12382__$1);

return statearr_12419;
})();
if(inst_12384){
var statearr_12420_12447 = state_12414__$1;
(statearr_12420_12447[(1)] = (5));

} else {
var statearr_12421_12448 = state_12414__$1;
(statearr_12421_12448[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12415 === (15))){
var inst_12404 = (state_12414[(2)]);
var state_12414__$1 = state_12414;
var statearr_12422_12449 = state_12414__$1;
(statearr_12422_12449[(2)] = inst_12404);

(statearr_12422_12449[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12415 === (13))){
var state_12414__$1 = state_12414;
var statearr_12423_12450 = state_12414__$1;
(statearr_12423_12450[(2)] = null);

(statearr_12423_12450[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12415 === (6))){
var inst_12379 = (state_12414[(7)]);
var inst_12400 = (inst_12379 > (0));
var state_12414__$1 = state_12414;
if(cljs.core.truth_(inst_12400)){
var statearr_12424_12451 = state_12414__$1;
(statearr_12424_12451[(1)] = (12));

} else {
var statearr_12425_12452 = state_12414__$1;
(statearr_12425_12452[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12415 === (3))){
var inst_12412 = (state_12414[(2)]);
var state_12414__$1 = state_12414;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12414__$1,inst_12412);
} else {
if((state_val_12415 === (12))){
var inst_12378 = (state_12414[(8)]);
var inst_12402 = cljs.core.vec.call(null,inst_12378);
var state_12414__$1 = state_12414;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12414__$1,(15),out,inst_12402);
} else {
if((state_val_12415 === (2))){
var state_12414__$1 = state_12414;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12414__$1,(4),ch);
} else {
if((state_val_12415 === (11))){
var inst_12394 = (state_12414[(2)]);
var inst_12395 = (new Array(n));
var inst_12378 = inst_12395;
var inst_12379 = (0);
var state_12414__$1 = (function (){var statearr_12426 = state_12414;
(statearr_12426[(7)] = inst_12379);

(statearr_12426[(10)] = inst_12394);

(statearr_12426[(8)] = inst_12378);

return statearr_12426;
})();
var statearr_12427_12453 = state_12414__$1;
(statearr_12427_12453[(2)] = null);

(statearr_12427_12453[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12415 === (9))){
var inst_12378 = (state_12414[(8)]);
var inst_12392 = cljs.core.vec.call(null,inst_12378);
var state_12414__$1 = state_12414;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12414__$1,(11),out,inst_12392);
} else {
if((state_val_12415 === (5))){
var inst_12379 = (state_12414[(7)]);
var inst_12382 = (state_12414[(9)]);
var inst_12387 = (state_12414[(11)]);
var inst_12378 = (state_12414[(8)]);
var inst_12386 = (inst_12378[inst_12379] = inst_12382);
var inst_12387__$1 = (inst_12379 + (1));
var inst_12388 = (inst_12387__$1 < n);
var state_12414__$1 = (function (){var statearr_12428 = state_12414;
(statearr_12428[(12)] = inst_12386);

(statearr_12428[(11)] = inst_12387__$1);

return statearr_12428;
})();
if(cljs.core.truth_(inst_12388)){
var statearr_12429_12454 = state_12414__$1;
(statearr_12429_12454[(1)] = (8));

} else {
var statearr_12430_12455 = state_12414__$1;
(statearr_12430_12455[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12415 === (14))){
var inst_12407 = (state_12414[(2)]);
var inst_12408 = cljs.core.async.close_BANG_.call(null,out);
var state_12414__$1 = (function (){var statearr_12432 = state_12414;
(statearr_12432[(13)] = inst_12407);

return statearr_12432;
})();
var statearr_12433_12456 = state_12414__$1;
(statearr_12433_12456[(2)] = inst_12408);

(statearr_12433_12456[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12415 === (10))){
var inst_12398 = (state_12414[(2)]);
var state_12414__$1 = state_12414;
var statearr_12434_12457 = state_12414__$1;
(statearr_12434_12457[(2)] = inst_12398);

(statearr_12434_12457[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12415 === (8))){
var inst_12387 = (state_12414[(11)]);
var inst_12378 = (state_12414[(8)]);
var tmp12431 = inst_12378;
var inst_12378__$1 = tmp12431;
var inst_12379 = inst_12387;
var state_12414__$1 = (function (){var statearr_12435 = state_12414;
(statearr_12435[(7)] = inst_12379);

(statearr_12435[(8)] = inst_12378__$1);

return statearr_12435;
})();
var statearr_12436_12458 = state_12414__$1;
(statearr_12436_12458[(2)] = null);

(statearr_12436_12458[(1)] = (2));


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
}
}
});})(c__6769__auto___12444,out))
;
return ((function (switch__6713__auto__,c__6769__auto___12444,out){
return (function() {
var state_machine__6714__auto__ = null;
var state_machine__6714__auto____0 = (function (){
var statearr_12440 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_12440[(0)] = state_machine__6714__auto__);

(statearr_12440[(1)] = (1));

return statearr_12440;
});
var state_machine__6714__auto____1 = (function (state_12414){
while(true){
var ret_value__6715__auto__ = (function (){try{while(true){
var result__6716__auto__ = switch__6713__auto__.call(null,state_12414);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6716__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6716__auto__;
}
break;
}
}catch (e12441){if((e12441 instanceof Object)){
var ex__6717__auto__ = e12441;
var statearr_12442_12459 = state_12414;
(statearr_12442_12459[(5)] = ex__6717__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12414);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e12441;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6715__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12460 = state_12414;
state_12414 = G__12460;
continue;
} else {
return ret_value__6715__auto__;
}
break;
}
});
state_machine__6714__auto__ = function(state_12414){
switch(arguments.length){
case 0:
return state_machine__6714__auto____0.call(this);
case 1:
return state_machine__6714__auto____1.call(this,state_12414);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6714__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6714__auto____0;
state_machine__6714__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6714__auto____1;
return state_machine__6714__auto__;
})()
;})(switch__6713__auto__,c__6769__auto___12444,out))
})();
var state__6771__auto__ = (function (){var statearr_12443 = f__6770__auto__.call(null);
(statearr_12443[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6769__auto___12444);

return statearr_12443;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6771__auto__);
});})(c__6769__auto___12444,out))
);


return out;
});
partition = function(n,ch,buf_or_n){
switch(arguments.length){
case 2:
return partition__2.call(this,n,ch);
case 3:
return partition__3.call(this,n,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
partition.cljs$core$IFn$_invoke$arity$2 = partition__2;
partition.cljs$core$IFn$_invoke$arity$3 = partition__3;
return partition;
})()
;
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.partition_by = (function() {
var partition_by = null;
var partition_by__2 = (function (f,ch){
return partition_by.call(null,f,ch,null);
});
var partition_by__3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__6769__auto___12603 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6769__auto___12603,out){
return (function (){
var f__6770__auto__ = (function (){var switch__6713__auto__ = ((function (c__6769__auto___12603,out){
return (function (state_12573){
var state_val_12574 = (state_12573[(1)]);
if((state_val_12574 === (7))){
var inst_12569 = (state_12573[(2)]);
var state_12573__$1 = state_12573;
var statearr_12575_12604 = state_12573__$1;
(statearr_12575_12604[(2)] = inst_12569);

(statearr_12575_12604[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12574 === (1))){
var inst_12532 = [];
var inst_12533 = inst_12532;
var inst_12534 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_12573__$1 = (function (){var statearr_12576 = state_12573;
(statearr_12576[(7)] = inst_12534);

(statearr_12576[(8)] = inst_12533);

return statearr_12576;
})();
var statearr_12577_12605 = state_12573__$1;
(statearr_12577_12605[(2)] = null);

(statearr_12577_12605[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12574 === (4))){
var inst_12537 = (state_12573[(9)]);
var inst_12537__$1 = (state_12573[(2)]);
var inst_12538 = (inst_12537__$1 == null);
var inst_12539 = cljs.core.not.call(null,inst_12538);
var state_12573__$1 = (function (){var statearr_12578 = state_12573;
(statearr_12578[(9)] = inst_12537__$1);

return statearr_12578;
})();
if(inst_12539){
var statearr_12579_12606 = state_12573__$1;
(statearr_12579_12606[(1)] = (5));

} else {
var statearr_12580_12607 = state_12573__$1;
(statearr_12580_12607[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12574 === (15))){
var inst_12563 = (state_12573[(2)]);
var state_12573__$1 = state_12573;
var statearr_12581_12608 = state_12573__$1;
(statearr_12581_12608[(2)] = inst_12563);

(statearr_12581_12608[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12574 === (13))){
var state_12573__$1 = state_12573;
var statearr_12582_12609 = state_12573__$1;
(statearr_12582_12609[(2)] = null);

(statearr_12582_12609[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12574 === (6))){
var inst_12533 = (state_12573[(8)]);
var inst_12558 = inst_12533.length;
var inst_12559 = (inst_12558 > (0));
var state_12573__$1 = state_12573;
if(cljs.core.truth_(inst_12559)){
var statearr_12583_12610 = state_12573__$1;
(statearr_12583_12610[(1)] = (12));

} else {
var statearr_12584_12611 = state_12573__$1;
(statearr_12584_12611[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12574 === (3))){
var inst_12571 = (state_12573[(2)]);
var state_12573__$1 = state_12573;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12573__$1,inst_12571);
} else {
if((state_val_12574 === (12))){
var inst_12533 = (state_12573[(8)]);
var inst_12561 = cljs.core.vec.call(null,inst_12533);
var state_12573__$1 = state_12573;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12573__$1,(15),out,inst_12561);
} else {
if((state_val_12574 === (2))){
var state_12573__$1 = state_12573;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12573__$1,(4),ch);
} else {
if((state_val_12574 === (11))){
var inst_12541 = (state_12573[(10)]);
var inst_12537 = (state_12573[(9)]);
var inst_12551 = (state_12573[(2)]);
var inst_12552 = [];
var inst_12553 = inst_12552.push(inst_12537);
var inst_12533 = inst_12552;
var inst_12534 = inst_12541;
var state_12573__$1 = (function (){var statearr_12585 = state_12573;
(statearr_12585[(11)] = inst_12551);

(statearr_12585[(7)] = inst_12534);

(statearr_12585[(8)] = inst_12533);

(statearr_12585[(12)] = inst_12553);

return statearr_12585;
})();
var statearr_12586_12612 = state_12573__$1;
(statearr_12586_12612[(2)] = null);

(statearr_12586_12612[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12574 === (9))){
var inst_12533 = (state_12573[(8)]);
var inst_12549 = cljs.core.vec.call(null,inst_12533);
var state_12573__$1 = state_12573;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12573__$1,(11),out,inst_12549);
} else {
if((state_val_12574 === (5))){
var inst_12541 = (state_12573[(10)]);
var inst_12534 = (state_12573[(7)]);
var inst_12537 = (state_12573[(9)]);
var inst_12541__$1 = f.call(null,inst_12537);
var inst_12542 = cljs.core._EQ_.call(null,inst_12541__$1,inst_12534);
var inst_12543 = cljs.core.keyword_identical_QMARK_.call(null,inst_12534,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_12544 = (inst_12542) || (inst_12543);
var state_12573__$1 = (function (){var statearr_12587 = state_12573;
(statearr_12587[(10)] = inst_12541__$1);

return statearr_12587;
})();
if(cljs.core.truth_(inst_12544)){
var statearr_12588_12613 = state_12573__$1;
(statearr_12588_12613[(1)] = (8));

} else {
var statearr_12589_12614 = state_12573__$1;
(statearr_12589_12614[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12574 === (14))){
var inst_12566 = (state_12573[(2)]);
var inst_12567 = cljs.core.async.close_BANG_.call(null,out);
var state_12573__$1 = (function (){var statearr_12591 = state_12573;
(statearr_12591[(13)] = inst_12566);

return statearr_12591;
})();
var statearr_12592_12615 = state_12573__$1;
(statearr_12592_12615[(2)] = inst_12567);

(statearr_12592_12615[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12574 === (10))){
var inst_12556 = (state_12573[(2)]);
var state_12573__$1 = state_12573;
var statearr_12593_12616 = state_12573__$1;
(statearr_12593_12616[(2)] = inst_12556);

(statearr_12593_12616[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12574 === (8))){
var inst_12541 = (state_12573[(10)]);
var inst_12537 = (state_12573[(9)]);
var inst_12533 = (state_12573[(8)]);
var inst_12546 = inst_12533.push(inst_12537);
var tmp12590 = inst_12533;
var inst_12533__$1 = tmp12590;
var inst_12534 = inst_12541;
var state_12573__$1 = (function (){var statearr_12594 = state_12573;
(statearr_12594[(14)] = inst_12546);

(statearr_12594[(7)] = inst_12534);

(statearr_12594[(8)] = inst_12533__$1);

return statearr_12594;
})();
var statearr_12595_12617 = state_12573__$1;
(statearr_12595_12617[(2)] = null);

(statearr_12595_12617[(1)] = (2));


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
}
}
});})(c__6769__auto___12603,out))
;
return ((function (switch__6713__auto__,c__6769__auto___12603,out){
return (function() {
var state_machine__6714__auto__ = null;
var state_machine__6714__auto____0 = (function (){
var statearr_12599 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_12599[(0)] = state_machine__6714__auto__);

(statearr_12599[(1)] = (1));

return statearr_12599;
});
var state_machine__6714__auto____1 = (function (state_12573){
while(true){
var ret_value__6715__auto__ = (function (){try{while(true){
var result__6716__auto__ = switch__6713__auto__.call(null,state_12573);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6716__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6716__auto__;
}
break;
}
}catch (e12600){if((e12600 instanceof Object)){
var ex__6717__auto__ = e12600;
var statearr_12601_12618 = state_12573;
(statearr_12601_12618[(5)] = ex__6717__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12573);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e12600;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6715__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12619 = state_12573;
state_12573 = G__12619;
continue;
} else {
return ret_value__6715__auto__;
}
break;
}
});
state_machine__6714__auto__ = function(state_12573){
switch(arguments.length){
case 0:
return state_machine__6714__auto____0.call(this);
case 1:
return state_machine__6714__auto____1.call(this,state_12573);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6714__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6714__auto____0;
state_machine__6714__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6714__auto____1;
return state_machine__6714__auto__;
})()
;})(switch__6713__auto__,c__6769__auto___12603,out))
})();
var state__6771__auto__ = (function (){var statearr_12602 = f__6770__auto__.call(null);
(statearr_12602[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6769__auto___12603);

return statearr_12602;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6771__auto__);
});})(c__6769__auto___12603,out))
);


return out;
});
partition_by = function(f,ch,buf_or_n){
switch(arguments.length){
case 2:
return partition_by__2.call(this,f,ch);
case 3:
return partition_by__3.call(this,f,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
partition_by.cljs$core$IFn$_invoke$arity$2 = partition_by__2;
partition_by.cljs$core$IFn$_invoke$arity$3 = partition_by__3;
return partition_by;
})()
;

//# sourceMappingURL=async.js.map