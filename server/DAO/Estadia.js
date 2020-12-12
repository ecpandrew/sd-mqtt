//
// module.exports =
//     {
//         cadastrarEstalagem,
//         listarEstalagens,
//         buscarEstalagemPorLocatario,
//         alugarEstalagem
//         // ...
//     };
//
// const situacao = [
//     {
//         id: 1,
//         label: 'Reservado',
//     },
//     {
//         id: 2,
//         label: 'Alugado',
//     }
// ];
//
// var listaEstalagem = [];
//
// var listaAluguel = [
//
//     // {situacao: 2, locador: locador, datai: datai, dataf: dataf},
//
//
// ];
//
//
// function criarEntradaHistorico(idSituacao, dataInicio, dataFim, locador){
//     return entradaHistorico = {
//         status: idSituacao,
//         dataInicio: dataInicio,
//         dataFim: dataFim,
//         locador: locador
//     };
// }
//
//
// function cadastrarEstalagem(locatario, descricao, precoDiaria){
//     const resEstalagem = {
//         id: listaEstalagem.length + 1,
//         desc: descricao,
//         locatario: locatario,
//         historico: [],
//         precoDiaria: precoDiaria,
//         timestamp: new Date().getTime()
//     };
//     listaEstalagem.push(resEstalagem);
//     return resEstalagem;
// }
//
// function listarEstalagens() {
//      return listaEstalagem;
// }
//
// function buscarEstalagemPorLocatario(email) {
//     return listaEstalagem.map((item) => {
//         if (item.locatario.email === email) {
//             return item;
//         }
//     }).filter((item) => item);
// }
//
// function buscarEstalagemPorId(id) {
//     return listaEstalagem.map((item) => {
//         if (item.id === id) {
//             return item;
//         }
//     }).filter((item) => item);
// }
//
// function alugarEstalagem(id, locador, dataInicio, dataFim){
//     if (verificaDisponibilidade(id, dataInicio, dataFim)) {
//         listaEstalagem.map((item) => {
//             if (item.id === id) {
//                 item.historico.push(criarEntradaHistorico(1, dataInicio, dataFim, locador));
//             }
//         });
//         return true;
//     }
//     return false;
// }
//
// function reservarEstalagem(id, locador, dataInicio, dataFim){
//     if (verificaDisponibilidade(id, dataInicio, dataFim)) {
//         listaEstalagem.map((item) => {
//             if (item.id === id) {
//                 item.historico.push(criarEntradaHistorico(2, dataInicio, dataFim, locador));
//             }
//         });
//         return true;
//     }
//     return false;
// }
//
//
// function verificaDisponibilidade(id, dataInicio, dataFim){
//     const estalagem = buscarEstalagemPorId(id);
//
//     estalagem.historico.map((item) => {
//         if (dateRangeOverlaps(objeto.dataInicio, objeto.dataFim, dataInicio, dataFim)) {
//             return false;
//         }
//     });
//     return true;
//
// }
//
// function dateRangeOverlaps(a_start, a_end, b_start, b_end) {
//     if (a_start < b_start && b_start < a_end) return true; // b starts in a
//     if (a_start < b_end   && b_end   < a_end) return true; // b ends in a
//     if (b_start <  a_start && a_end   <  b_end) return true; // a in b
//     return false;
// }
//
//
//
//
//
