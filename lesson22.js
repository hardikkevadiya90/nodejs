var event = require('events');
var em = new event.EventEmitter();
 const on = 'switchOn';
 const off = 'switchOff';

//1st way to create event
em.on(on,function(data){
    console.log(data + "is on");

});
em.addListener(off,(data)=>{
    console.log(data + 'is off');

});

em.emit(on,'light');
em.emit(off,'fan');
em.emit(on,'tv');