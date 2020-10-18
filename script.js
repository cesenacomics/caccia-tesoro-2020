function myFunction() {
    let psw = document.getElementById("pwd").value;
    let color = document.getElementById("color").value;

    if (color === 'verde' && psw === 'libro') {
        window.open("parte01.html");
    } else if (color === 'rosso' && psw === 'avanti') {
        window.open("parte02.html");
    } else if (color === 'blu' && psw === 'vivace') {
        window.open("parte03.html");
    } else if (color === 'giallo' && psw === 'ispettore') {
        window.open("parte04.html");
    } else if (color === 'viola' && psw === 'tesoro') {
        window.open("parte05.html");
    } else if (color === 'marrone' && psw === 'trambusto') {
        window.open("parte06.html");
    } else if (color === 'azzurro' && psw === 'occhio') {
        window.open("parte07.html");
    } else if (color === 'fucsia' && psw === 'risolvere') {
        window.open("parte08.html");
    } else if (color === 'arancione' && psw === 'interrogatorio') {
        window.open("parte09.html");
    } else if (color === 'rosa' && psw === 'avventura') {
        window.open("parte10.html");
    }  else {
        alert('Colore o password sbagliati, riprova.')
    }
}
