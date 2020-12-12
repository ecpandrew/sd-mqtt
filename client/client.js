
var mqtt = require('mqtt');
var client  = mqtt.connect('mqtt://test.mosquitto.org');
const usuario = "andre-cardoso";

client.on('connect', function () {
    client.subscribe('sistemas-distribuidos/response/andre-cardoso', function (err) {

    });


});




client.on('message', function (topic, message) {


    console.log(message.toString());


});


setTimeout(function () { // LIstar todas
    client.publish("sistemas-distribuidos/listar-todas-estalagens", "andre-cardoso");
}, 1000);


setTimeout(function () { // Cadastrart um quarto
    client.publish("sistemas-distribuidos/cadastrar-estalagem", "andre-cardoso;Rafael Fernandes; Quarto de casal;280US");
}, 2000);


setTimeout(function () { // LIstar todas
    client.publish("sistemas-distribuidos/listar-todas-estalagens", "andre-cardoso");
}, 3000);


setTimeout(function () { // reservar o quarto adicionado em uma data
    client.publish("sistemas-distribuidos/reservar-estalagem",'andre-cardoso;"8c2733e3-e6f5-4ccf-8b42-dcd11f6a101a";Paulo Rogerio;2020-12-02T03:24:00;2020-12-07T03:24:00')
}, 4000);


setTimeout(function () { // alugar um quarto qualquer na mesma data
    client.publish("sistemas-distribuidos/alugar-estalagem",`andre-cardoso;29c1f09e-c58d-473e-b88a-66d148e6e307;Paulo Rogerio;2020-12-02T03:24:00;2020-12-07T03:24:00`)
}, 5000);

setTimeout(function () {  // listar disponiveis, deve aparecer todos menos esses 2
    client.publish(`andre-cardoso;2020-12-02T03:24:00;2020-12-07T03:24:00`)
}, 6000);


setTimeout(function () { // listar tudo
    client.publish("sistemas-distribuidos/listar-todas-estalagens", "andre-cardoso");
}, 7000);




//
//
//
//
//
//
//
//
// client.connect(port, host, function() {
//     console.log('Connected');
//     client.write('Hello, server! Love, Client.');
//
// });
//
// client.on("data", (data) => {
//     console.log(`\n\nData received: ${data.toString()}`);
// });
//
//




// var obj = createUserProtocolMessage("listar_estalagem", {}, usuario);
// socket.sendMessage(obj);





//
// function cadastrarEstalagem(sockett, descricao, diaria) {
//     var obj = {descricao: descricao, diaria: diaria};
//     sockett.sendMessage(createUserProtocolMessage("cadastrar_estalagem", obj, usuario ));
// }
//
// function listarEstalagens(sockett) {
//     sockett.sendMessage(createUserProtocolMessage("listar_estalagem", {}, usuario ));
// }

// cadastrarEstalagem(socket,"Lindo quarto no bairro X um banheiro e frigobar", "80 RS");
// listarEstalagens(socket);