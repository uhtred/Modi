;(function(){

    "use strict";

    var Modi = {

        rules: [],
        defaultInitName: 'init',

        addRule: function( options ) {
            this.rules.push( options );
        },

        _passRules: function( options ) {

            var pass = 0;

            if( options.matchSelector ) {
                pass +=  +!$( options.matchSelector ).length;
            }

            if( options.matchUrl ) {

                var rMatchUrl = options.matchUrl;

                if( typeof rMatchUrl === 'string' ) {
                    rMatchUrl = new RegExp( rMatchUrl , "g");
                }

                if( !rMatchUrl.test( window.location.href ) ) {
                    pass++;
                }

            }

            if( typeof options.rule === 'function' ) {
                pass += +!options.rule();
            }

            return !pass;
        },

        _hasModule: function( rule ) {
            return !!window[ rule.moduleName ];
        },

        execute: function(){

            var rule = {};

            for( var idxRule in this.rules ) {

                if ( this.rules.hasOwnProperty( idxRule ) ) {

                    rule = this.rules[idxRule];

                    if( this._passRules( rule ) ) {

                        if( typeof rule.callback === "function" ) {
                            rule.callback();
                        } else if( this._hasModule( rule ) ) {
                            window[ rule.moduleName ][ this.defaultInitName ]();
                        }

                    }
                }

            }
        }
    };

    window.Modi = Modi;

})();
