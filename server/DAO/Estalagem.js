// const { v4: uuidv4 } = require('uuid');

module.exports =
    {
        newEstalagem
    };


function newEstalagem(uuid, locatario, descricao, precoDiaria){
    return {
        uuid: uuid,
        desc: descricao,
        locatario: locatario,
        precoDiaria: precoDiaria,
        timestamp: new Date().getTime()
    };
}