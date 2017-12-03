;
(function() {

'use strict';
/**
* 
* 
* 
* 
*
* @Tag  Service
* @author    Jean Sarlôn
* @example  This service provide methods to use chips plugin from Materialize
*
* Tag.init(); // init '.chips' class to mount tags
* Tag.getTags(); // get values from tags input
*
* @version   1.0
*
*/
app.service('TagService', [TagService]);

//////////////// factory
function TagService() {
    var service = {
        getTags: getTags,
        init: init,
    };
    return service;
    
    //////////////// definition
    function getTags() {
        return $('.chips').material_chip('data');
    };
    
    function init(data) {
        
        if (data) {
            data = data.map(function(el, i) {
                return {tag: el}
            })
        }else {
            data = [{
                tag: 'Saúde',
            }, {
                tag: 'Animais',
            }, {
                tag: 'Crianças',
            },{
                tag: 'Idosos',
            }];
        }
        $('.chips').material_chip({
            data: data,
            placeholder: 'Adicione uma tag',
            secondaryPlaceholder: '+Tag',
        });
    }
}
})();
