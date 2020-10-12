function myFunction() {
    let psw = document.getElementById("pwd").value;
    let color = document.getElementById("color").value;

    if (color === 'verde' && psw === 'partenza') {
        window.open("parte01.html");
    } else if (color === 'rosso' && psw === 'avventura') {
        window.open("parte02.html");
    } else if (color === 'blu' && psw === 'investigare') {
        window.open("parte03.html");
    } else if (color === 'giallo' && psw === 'ricerca') {
        window.open("parte04.html");
    } else if (color === 'viola' && psw === 'intuito') {
        window.open("parte05.html");
    } else if (color === 'marrone' && psw === 'amicizia') {
        window.open("parte06.html");
    } else if (color === 'azzurro' && psw === 'perseveranza') {
        window.open("parte07.html");
    } else if (color === 'fucsia' && psw === 'divertimento') {
        window.open("parte08.html");
    } else if (color === 'arancione' && psw === 'allegria') {
        window.open("parte09.html");
    } else if (color === 'rosa' && psw === 'vittoria') {
        window.open("parte10.html");
    } else if (color === 'bianco' && psw === 'natura') {
        window.open("parte01.html");
    } else {
        alert('Colore o password sbagliati, riprova.')
    }
}
