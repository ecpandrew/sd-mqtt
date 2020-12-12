const estalagem = require("./Estalagem.js");

module.exports =
    {
        cadastrarEstalagem,
        alugarEstalagem,
        reservarEstalagem,
        listarEstalagens,
        listarEstalagensDispiniveis,
        populate,
        listarIndisponiveis,
        verificaDisponibilidade
    };


const estalagens = [];
const indisponiveis = [];

function populate(){
    estalagens.push(estalagem.newEstalagem("3512026a-358c-4b56-bf9f-493f69d69571","Daniela", "Um quarto no endereço X com 1 banheiro", "80 RS"));
    estalagens.push(estalagem.newEstalagem("18ebc536-b1b3-4e55-9a8d-874d474c5f14", "Robertinho", "Uma casa no endereço T com 2 banheiros", "180 RS"));
    estalagens.push(estalagem.newEstalagem("29c1f09e-c58d-473e-b88a-66d148e6e307", "James", "Um AP no endereço W com 3 banheiros", "180 RS"));
}


function cadastrarEstalagem(uuid, locatario, descricao, precoDiaria) {
    estalagens.push(estalagem.newEstalagem(uuid, locatario, descricao, precoDiaria));
}

function alugarEstalagem(uuid, locador, data1, data2){
    var teste = verificaDisponibilidade(uuid, data1, data2);

    if(teste === false || teste === null){
        if(teste === null){
            return "Estalagem não encontrada!"
        }
        return "Estalagem Indisponível para alugar!"
    }

    var quarto = null;
    estalagens.forEach((item) => {
        if(uuid.includes(item.uuid)){
            quarto = Object.assign({}, item);
        }
        return "Estalagem não existe!";
    });

    indisponiveis.push({estalagem: quarto, locador: locador, inicio: data1, fim: data2});
    return "Response: Alugado com sucesso!";
}



function reservarEstalagem(uuid, locador, data1, data2) {
    var quarto;
    var teste = verificaDisponibilidade(uuid, data1, data2);
    // console.log("teste "+ teste);

    if(teste === false || teste === null){
        if(teste === null){
            return "Estalagem não encontrada!"
        }
        return "Estalagem Indisponível para reservar!"
    }
    estalagens.forEach((item)=> {
       if(uuid.includes(item.uuid)){
           quarto = Object.assign({}, item);
       }
    });

    indisponiveis.push({estalagem: quarto, locador: locador, inicio: data1, fim: data2});
    return "Response: Reservado com sucesso!";

}

function listarEstalagens() {
    return JSON.stringify(estalagens);
}
function listarIndisponiveis() {
    return JSON.stringify(indisponiveis);
}

function listaDatas() {
    var lista = [];

    indisponiveis.forEach((obj) =>{

        lista.push(obj.estalagem.uuid);

    });
    const lista2 = [];
     console.log('lista: ', lista)
    estalagens.filter((item) => {
        if (!lista.includes(item.uuid)) {
            lista2.push(item);
        }
    });

}

function listarEstalagensDispiniveis(data1, data2) {

    var lista = [];

    indisponiveis.forEach((obj) =>{

        lista.push(obj.estalagem.uuid);

    });
    const lista2 = [];
    estalagens.filter((item) => {
        if (!lista.includes(item.uuid)) {
            lista2.push(item);
        }
    });

    console.log('lista 2: ', lista2)

    return JSON.stringify(lista2);

}


function verificaDisponibilidade(uuid, date1, date2) {
    var quarto;

    estalagens.forEach((item)=> {
        // console.log(uuid.includes(item.uuid));

        if(uuid.includes(item.uuid)){
            // console.log('item: ', item);
            quarto = Object.assign({}, item);
        }
    });

    // console.log("quarto "+ JSON.stringify(quarto));

    if(quarto === null){
        return null;
    }

    indisponiveis.forEach((item) => {
        if(item.estalagem.uuid === uuid){
            if(dateRangeOverlaps(item.inicio, item.fim, date1, date2)){
                return false
            }
        }
    });


    return true;
}



function dateRangeOverlaps(a_start, a_end, b_start, b_end) {
    if (a_start < b_start && b_start < a_end) return true; // b starts in a
    if (a_start < b_end   && b_end   < a_end) return true; // b ends in a
    if (b_start <  a_start && a_end   <  b_end) return true; // a in b
    return false;
}
