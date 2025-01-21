async function callAPI (method, base_slice, uri, body) {
    var baseURL = window.location.href.slice(0, window.location.href.indexOf(base_slice));
    var jsonMimeType = {
        'Content-type': 'application/json'
    };


    try {
        console.log(baseURL + uri);
        var result = await fetch(baseURL + uri, {
            method: method,
            ...(method == 'POST' ? {headers: jsonMimeType, body: JSON.stringify(body)} : {}),
            ...(method == 'PUT' ? {headers: jsonMimeType, body: JSON.stringify(body)} : {})
        })
        return result.json();
    }
    catch(err) {
        console.error(err);
        return "{'status':'error'}";
    }
};

export {callAPI}

