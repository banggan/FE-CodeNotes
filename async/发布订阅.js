class EventEmiter {
	constructor() {
		this.eventHandlers = {};
	}
	on(event, handler) {//注册事件
	if (!this.eventHandlers[event]) this.eventHandlers[event] = [];

	this.eventHandlers[event].push(handler);
	}
	emit() {//触发事件
	let e = Array.prototype.shift.call(arguments);
	if(!this.eventHandlers[e]) return;
		let arg = arguments;
		let context = this;
		this.eventHandlers[e].forEach(function(handler) {
			handler.apply(context, arg);
		})
	}
	off(event,handler){//解除事件
		if(this.eventHandlers[event]){
			if(this.eventHandlers[event]=handler){
				this.eventHandlers[event].filter(function(v){
				v!==handler;
			})
		}else{
			this.eventHandlers[event]=[];
		}
	}
	

}

let eventEmiter = new EventEmiter();

eventEmiter.on('biu', function(arg) {
	console.log('biubiubiu', arg);
})
eventEmiter.on('bar', function(a,b) {
	console.log(a+''+b);
})
eventEmiter.emit('biu', 2);


