/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
function cargaMenu() {
    $('#menuIzq').load('contenidos.xhtml div#menuIzqO');
}
function cargaMisPublicaciones() {
    $('#contPrincipal').load('contenidos.xhtml div#contMisPublicaciones');
}
function cargaMisCitas() {
    $('#contPrincipal').load('contenidos.xhtml div#contCitas');
}
function cargaLogin() {
    $('#menuIzq').load('index.xhtml div#menuIzq');
    $('#contPrincipal').load('index.xhtml div#buscadorPublic');
}
function cargaNuevaPublicacion() {
    $('#contPrincipal').load('contenidos.xhtml div#contNuevaPublicacion');
}
function cargaPublicacion() {
    $('#contPrincipal').load('index.xhtml div#buscadorPublic');
}

