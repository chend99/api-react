const rp = require("request-promise");

function obtenerDato(animal){
    var options ={
        uri:"https://cat-fact.herokuapp.com/facts/random",
        qs: { animal_type: animal}, 
        json:true
    }
    return rp(options);
}

module.exports = obtenerDato;
