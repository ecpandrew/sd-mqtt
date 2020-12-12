const service = require('./DAO/Service.js');
service.populate();

const comandos = [
    {id: 1, comando: "Listar Todas Estalagens", exemplo: "1"},
    {id: 2, comando: "Listar Estalagens Disponíveis", exemplo: "2;2020-12-02T03:24:00;2020-12-05T03:24:00"},
    {id: 3, comando: "Cadastrar Estalagem", exemplo: "3;André Cardoso;Um belo quarto;80RS"},
    {id: 4, comando: "Reservar Estalagem", exemplo: "4;uuid;Locador;2020-12-02T03:24:00;2020-12-05T03:24:00"},
    {id: 5, comando: "Alugar Estalagem", exemplo: " 5;uuid;Locador;2020-12-02T03:24:00;2020-12-05T03:24:00"}

];


var mqtt = require('mqtt');
var client  = mqtt.connect('mqtt://test.mosquitto.org');

client.on('connect', function () {
    client.subscribe('server-init', function (err) {
        if (!err) {
            client.publish('presence', 'Server is Running')
        }
    });
    client.subscribe('sistemas-distribuidos/listar-todas-estalagens', function (err) {
    });
    client.subscribe('sistemas-distribuidos/listar-disponiveis', function (err) {
    });
    client.subscribe('sistemas-distribuidos/cadastrar-estalagem', function (err) {
    });
    client.subscribe('sistemas-distribuidos/reservar-estalagem', function (err) {
    });
    client.subscribe('sistemas-distribuidos/alugar-estalagem', function (err) {
    });


});




client.on('message', function (topic, message) {
    if(topic==="server-init"){
        // message is Buffer

        console.log(message.toString());
    }
    // client.end()

    if(topic==="sistemas-distribuidos/listar-todas-estalagens"){
        // message is Buffer
        var usuario = message.toString();
        client.publish("sistemas-distribuidos/response/"+usuario, service.listarEstalagens());
    }

    if(topic==="sistemas-distribuidos/cadastrar-estalagem"){
        // message is Buffer
        const command = message.toString().split(";");
        service.cadastrarEstalagem("8c2733e3-e6f5-4ccf-8b42-dcd11f6a101a",command[1],command[2],command[3]);
        client.publish("sistemas-distribuidos/response/"+command[0], "Estalagem Cadastrada!" );

    }
    if(topic==="sistemas-distribuidos/reservar-estalagem"){
        // message is Buffer
        const command = message.toString().split(";");
        service.reservarEstalagem(command[1],command[2],command[3],command[4]);
        client.publish("sistemas-distribuidos/response/"+command[0], "Estalagem Reservada!" );

    }
    if(topic==="sistemas-distribuidos/alugar-estalagem"){
        // message is Buffer
        const command = message.toString().split(";");
        service.alugarEstalagem(command[1],command[2],command[3],command[4]);
        client.publish("sistemas-distribuidos/response/"+command[0], "Estalagem Alugada!" );

    }


    if(topic==="sistemas-distribuidos/listar-disponiveis"){
        // message is Buffer
        const command = message.toString().split(";");

        client.publish("sistemas-distribuidos/response/"+command[0], service.listarEstalagensDispiniveis(command[1], command[2]) );

    }
});




















// var person = user.newPerson("andre","andre@gmail.com");
// var person2 = user.newPerson("daniela","daniela@gmail.com");
//
// // console.log(person);
//
// estalagem.cadastrarEstalagem(person, 'Quarto 2 camas solteiro 1 banheiro', '100');
// estalagem.cadastrarEstalagem(person, 'Quarto 1 cama casal 1 banheiro', '150');
// estalagem.cadastrarEstalagem(person, 'Quarto 1 cama solteiro', '60');
//
//
// estalagem.alugarEstalagem(1, person2);
//
// console.log(estalagem.listarEstalagens())
//
