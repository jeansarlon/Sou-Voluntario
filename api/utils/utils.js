module.exports = {
    toJson:parseToJson,
    sendJSON:sendJsonFunction,
    getKeyError:getKeyError
}



// return a object ready to use with mongoose;
function parseToJson(props, object) {
    for (var i = 0; i < props.length; i++) {
        object[props[i]] = JSON.parse(object[props[i]]);
    }
    return object;
}



//Send JSON and status code to response;
function sendJsonFunction(res, status, content){
    res.status(status);
    res.json(content);
};



// Get key of a Unique property mongoose error
function getKeyError(err){
    var regex = /index\:\ (?:.*\.)?\$?(?:([_a-z0-9]*)(?:_\d*)|([_a-z0-9]*))\s*dup key/i,
        match =  err.match(regex);
        return match[1] || match[2];  
}