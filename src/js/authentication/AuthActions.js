var fluo        = require( 'fluo' );
var AuthApi     = require( './AuthApi' );


var AuthActions = {
    /**
     * Login action
     *
     * @async
     * @param  {String} username
     * @param  {String} password
     */
    login         : fluo.createAction( { asyncResult: true } ),

    /**
     * Logout
     * @async
     */
    logout        : fluo.createAction( { asyncResult: true } ),

    /**
     * Returns the user to the login screen
     * @async
     */
    requiresLogin : fluo.createAction()
};


module.exports = AuthActions;
