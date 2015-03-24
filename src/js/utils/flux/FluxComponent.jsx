var _       = require( 'lodash' );
var React   = require( 'react/addons' );


/**
 * A component that is wired on Fluo or Reflux stores.
 * 
 */
class FluxComponent extends React.Component {
    constructor( props, stores ) {
        super( props );
        this.state = {};
        this.stores = stores;
        this.subscriptions = [];

        for( var key in this.stores ) {
            let store = this.stores[key];
            this.state[key] = store.value;
        }
    }

    /**
     * Checks whether every stores have returned a value
     * @private
     * @return {Boolean}
     */
    _storesConnected() {
        var res = true;
        for( var key in this.stores ) {
            res = res && this.state[ key ];
        }
        return res;
    }

    /**
     * Listen to all stores
     */
    componentDidMount() {
        for( var key in this.stores ) {
            let store = this.stores[key];
            this.subscriptions.push( store.listen( ( value ) => this.setState( { [key]: value } ) ) );
        }
    }


    /**
     * Unregister from the stores 
     */
    componentWillUnmount() {
        this.subscriptions.forEach( ( unsubscribe ) => unsubscribe() );
    }
}

module.exports = FluxComponent;
