import {callAPI} from "./callAPI.js";

document.addEventListener('DOMContentLoaded', function() {
    var Symbol = document.querySelector("#symbol");
    var put_submit = document.querySelector("#put_submit");
    var but_delete = document.querySelector("#but_delete");

    put_submit.disabled = true;

    Symbol.addEventListener('input', function() {
         if (Symbol.value.trim() === '') {
             put_submit.disabled = true;
         }
         else {
             put_submit.disabled = false;
         }
     });
    
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
    
    //Update the constant via PUT 
    put_submit.onclick = () => {
        var constant_id = getData().constant_id;
        var uri = 'api/constants/' + constant_id;
        var data = getData().data;
        console.log(data);

        callAPI('PUT', 'constants', uri, data)
            .then((result) => {
                location.href = window.location.href;
            });
    }

    //Delete the constant via "DELETE"
    but_delete.onclick = () => {
        var constant_id = getData().constant_id;
        var uri = 'api/constants/' + constant_id;
        console.log(constant_id);

        callAPI('DELETE', 'constants', uri, null)
            .then((result) => {
                console.log(result);
                console.log(window.location.href.slice(0, window.location.href.indexOf('constants')) + "constants/");
                location.href = window.location.href.slice(0, window.location.href.indexOf('constants')) + "constants";
            });
    }
});
