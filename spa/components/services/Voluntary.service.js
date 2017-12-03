;
(function() {

'use strict';
/**
* $http service abstraction to make API calls with any HTTP method,
* custom url and data object to be sent as request.
* Every REST API call is measured, you can see how much it took
* in the console.
*
* @category  Service
* @author    Jean Sarlôn
* @example   Inject VoluntaryService as the dependency and then use it this way:
*
* VoluntaryService.post()
.then(function(data) {
console.log(data);
}, function(error) {
console.log(error);
});
*
* @return {Promise} Promise to handle dat afrom API
* @version   1.0
*
*/
app.service('VoluntaryService', ['QueryService', VoluntaryService]);

//////////////// factory
function VoluntaryService(QueryService) {
    var service = {
        create: create,
        get: get,
        getOpportunities: getOpportunities,
        update: update,
        updatePhoto:updatePhoto
    };
    return service;
    
    //////////////// definition
    function create(data) {
        var fd = new FormData();
        var obj = data;
        
        for (var prop in obj) {
            if (typeof obj[prop] == "object" && prop != "image") {
                console.log("prop: ",prop);
                fd.append(prop, JSON.stringify(obj[prop]) );
            } else {
                fd.append(prop, obj[prop]);
            }
        }
        return QueryService.file('POST', '/voluntary/', null, fd)
    }
    
    function get(data) {
        return QueryService.query('GET', '/voluntary/', null, null)
    }
    
    function getOpportunities(id) {
        return QueryService.query('GET', '/voluntary/'+ id +'/opportunities', null,null)
    }
    function update(data, id) {
        return QueryService.query('PUT', '/voluntary/'+ id, null, data)
    }
    function updatePhoto(photo, id) {
        var fd = new FormData();
        fd.append("image", photo);
        return QueryService.file('PUT', '/voluntary/' + id + '/photo', null, fd)
    }
}
})();
