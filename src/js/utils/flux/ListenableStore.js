var fluo                = require('fluo');


/**
 * A store that can be listened to.
 * The store can return a value through the value property.
 * Every call to trigger will dispatch the value throughout the listeners.
 */
class ListenableStore extends fluo.Store {
	/**
	 * should be overriden
	 */
	get value() { return void 0; }
	
	/**
	 * Publishes the value to all subscribers
	 */
	trigger() {
		super.trigger( this.value );
	}
}

module.exports = ListenableStore;
