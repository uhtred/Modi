Modi
====

Controlador de inicialização de módulos e disparo de funções no carregamento da página.

Baseado na idéia da biblioteca Crossroads.js de Miller Medeiros.

Como usar
---------

```
var AppHome = (function(){

    Modi.addRule({ moduleName: 'AppHome', matchUrl: 'site.com/index.html' });
    
    Modi.addRule({ matchUrl: 'site.com/index.html', matchSelector: '#foo', callback: foo });

    function init(){

        console.log('AppHome');

    }
    
    function foo(){

        console.log('AppHome.foo');

    }

    return { init: init };

})();


$(function(){

     Modi.execute();

});
```

###Dependências

jQuery
