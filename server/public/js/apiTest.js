import {callAPI} from "./callAPI.js";

document.addEventListener('DOMContentLoaded', function() {
    // var ID = document.querySelector('#constant_id');
    var but_get_all = document.querySelector('#but_get_all');
    var but_get = document.querySelector('#but_get');
    var but_put = document.querySelector('#but_put');
    var but_post = document.querySelector('#but_post');
    var but_delete = document.querySelector('#but_delete');
    var p_data = document.querySelector('#data');

    function getData () {
        var constant_id = document.querySelector('#constant_id').value;
        var symbol = document.querySelector('#symbol').value;
        var name = document.querySelector('#name').value;
        var value = document.querySelector('#value').value;
        var data = {
            "symbol": symbol,
            "name": name,
            "value": value
        }
        return {
            "constant_id": constant_id,
            "data": data
        }
    }

    but_get_all.onclick = () => {
        var uri = 'api/constants';
        console.log(uri);

        callAPI('GET', 'api', uri, null)
            .then((result) => {
                console.log(result);
                p_data.innerHTML = JSON.stringify(result);
            })
    }

    but_get.onclick = () => {
        var constant_id = getData().constant_id;
        var uri = 'api/constants' + "/" + constant_id;
        console.log(uri);

        callAPI('GET', 'api', uri, null)
            .then((result) => {
                console.log(result);
                p_data.innerHTML = JSON.stringify(result);
            })
    }

    but_put.onclick = () => {
        var constant_id = getData().constant_id;
        var uri = 'api/constants' + "/" + constant_id;
        console.log(uri);
        var data = getData().data;
        console.log(data);

        callAPI('PUT', 'api', uri, data)
            .then((result) => {
                console.log(result);
                p_data.innerHTML = JSON.stringify(result);
            })
    }

    but_post.onclick = () => {
        var uri = 'api/constants';
        console.log(uri);
        var data = getData().data;
        console.log(data);

        callAPI('POST', 'api', uri, data)
            .then((result) => {
                console.log(result);
                p_data.innerHTML = JSON.stringify(result);
            })
    }

    but_delete.onclick = () => {
        var constant_id = getData().constant_id;
        var uri = 'api/constants' + '/' + constant_id;
        console.log(uri);

        callAPI('DELETE', 'api', uri, null)
            .then((result) => {
                console.log(result);
                p_data.innerHTML = JSON.stringify(result)
            }) 
    }
});