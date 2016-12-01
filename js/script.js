var socket = io();
function enviar() {
    var campo = document.getElementById('usr');
    socket.emit('chat message', campo.value);
}
$( "div.table-overflow" ).scrollTop( 300 );
socket.on('chat message', function (msg) {
    var elemento = document.createElement("p");
    var text = document.createTextNode("Usuario");
    elemento.appendChild(text);

    var sp = document.createElement("span");
    sp.setAttribute("class", "label label-success");
    sp.appendChild(text);


    document.getElementById("messages").appendChild(elemento);
    document.getElementById("messages").appendChild(sp);

    var x = document.createElement("span");
    x.setAttribute("class", "badge");
    x.setAttribute("style","font-size: 20px");
    var t = document.createTextNode(msg);
    x.appendChild(t);

    document.getElementById("messages").appendChild(x);
    document.getElementById("usr").value = "";
    document.getElementById("usr").focus();
});