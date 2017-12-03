;
(function() {

'use strict';
/**
* $http service abstraction to make API calls with any HTTP method,
* custom url and data object to be sent as request.
* Every REST API call is measured, you can see how much it took
* in the console.
*
* @Organization  Service
* @author    Jean Sarlôn
* @example   Inject OrganizationService as the dependency and then use it this way:
*
* OrganizationService.post()
.then(function(data) {
console.log(data);
}, function(error) {
console.log(error);
});
*
* @return    {Promise} Promise to handle data from API
* @version   1.0
*
*/
app.service('OrganizationService', ['QueryService', OrganizationService]);

//////////////// factory
function OrganizationService(QueryService) {
    var service = {
        create: create,
        get: get,
        getOpportunities:getOpportunities,
        update: update,
        getAll: getAll,
        search: search,
        updatePhoto: updatePhoto
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
        return QueryService.file('POST', '/organization/', null, fd)
    }
    
    function get(id) {
        return QueryService.query('GET', '/organization/'+ id, null, null)
    }
    function getAll(page = 1) {
        return QueryService.query('GET', '/organization/page/'+page, null, null)
    }
    
    function getOpportunities(id) {
        return QueryService.query('GET', '/organization/' + id + '/opportunities', null, null)
    }
    
    function update(data, id) {
        return QueryService.query('PUT', '/organization/'+ id, null, data)
    }
    function search(arg,page) {
        return QueryService.query('GET', '/search/organization/', {arg: arg, page: page}, null)
    }
    function updatePhoto(photo, id) {
        var fd = new FormData();
        fd.append("image", photo);
        return QueryService.file('PUT', '/organization/' + id + '/photo', null, fd)
    }
}
})();
