/**

author:webxiaoma
sites:http://webxiaoma.com/blogs/2017/09/19/node-events

练习主要包括:
	on() 和 emit()
	注册事件的内部 this
	once()

**/

var events = require('events');
var eventEmitter  = new events.EventEmitter();

// **************on() 和 emit()*****************

eventEmitter.on("myEvent1",()=>{
	console.log("我注册了一个事件，并触发")
});

eventEmitter.emit('myEvent1');


// ************** 注册事件的内部 this **************

// 非箭头函数中的this
eventEmitter.on("myEvent2",function (args){
  
    console.log(args); // emit传过来的参数

    console.log(this);
    //this结果 指向的是EventEmitter对象
    // EventEmitter {
    //     domain: null,
    //     _events: { event: [Function] },
    //     _eventsCount: 1,
    //     _maxListeners: undefined 
    // }
    
});

eventEmitter.emit('myEvent2','我是非箭头函数');


//  ES6中箭头函数的this
eventEmitter.on("myEvent3",(args)=>{
   
    console.log(args); // emit传过来的参数

    console.log(this);//this结果 指向的是{}空对象
    
});

eventEmitter.emit('myEvent3','我是箭头函数');







// ************** once() *****************


let count = 0;

eventEmitter.once('oneEvent',()=>{
	console.log(++count);
});

eventEmitter.emit('oneEvent'); // 1
eventEmitter.emit('oneEvent'); //  忽略






