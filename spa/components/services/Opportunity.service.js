;
(function() {

'use strict';
/**
* $http service abstraction to make API calls with any HTTP method,
*
* @Opportunity  Service
* @author    Jean Sarlôn
* @example   Inject OpportunityService as the dependency and then use it this way:
*
* OportunityService.create()
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
app.service('OpportunityService', ['QueryService', OpportunityService]);

//////////////// factory
function OpportunityService(QueryService) {
    var service = {
        create: create,
        get: get,
        getAll: getAll,
        update: update,
        destroy: destroy,
        insertVoluntary:insertVoluntary,
        evaluate:evaluate,
        quit: quit,
        search:search
    };
    return service;
    
    //////////////// definition
    function create(data) {
        return QueryService.file('POST', '/opportunity/', null, data)
    }
    function get(id) {
        return QueryService.query('GET', '/opportunity/'+ id, null, null)
    }
    function getAll(page = 1) {
        console.log(page);
        return QueryService.query('GET', '/opportunity/page/' + page, null, null)
    }
    function update(data, id) {
        return QueryService.query('PUT', '/opportunity/'+ id, null, data)
    }
    function insertVoluntary(data, id) {
        return QueryService.query('POST', '/opportunity/'+ id +'/volunteers', null, data)
    }
    function destroy(id) {
        return QueryService.query('DELETE', '/opportunity/'+ id, null, null)
    }
    function evaluate(data, id) {
        return QueryService.query('POST', '/opportunity/'+ id +'/evaluations', null, data)
    }
    function quit(id, VoluntaryId) {
        return QueryService.query('DELETE', '/opportunity/'+id+'/volunteers/'+ VoluntaryId, null, null)
    }
    function search(arg,page) {
        return QueryService.query('GET', '/search/opportunity/', {arg: arg, page: page}, null)
    }
}
})();
