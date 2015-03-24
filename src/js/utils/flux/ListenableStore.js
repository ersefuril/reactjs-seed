var fluo                = require('fluo');


class ListenableStore extends fluo.Store {
	get value() { return void 0; }
	
	trigger() {
		super.trigger( this.value );
	}
}

module.exports = ListenableStore;
