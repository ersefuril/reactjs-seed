var React = require("react/addons");
var fluo = require('fluo');
var { ListenableStore } = require('./flux');
var DefaultLoadingContent = require("./DefaultLoader");

var ReactCSSTransitionGroup = React.addons.CSSTransitionGroup;

var OnReadyActions = {
    updateStatus: fluo.createAction()
};

class OnReadyStore extends ListenableStore {
    init() {
        this.isReady = false;
        this.listenTo( OnReadyActions.updateStatus, this.updateStatus );
    }

    get value() {
        return this.isReady;
    }

    updateStatus( isReady ) {
        this.isReady = isReady;

        if( isReady ) {
            setTimeout( () => this.trigger(), 500 );
        }
        else {
            this.trigger(this.isReady);
        }
    }
};


module.exports = {
    OnReadyActions: OnReadyActions,
    OnReadyStore  : new OnReadyStore()
};
