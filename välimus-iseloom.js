/* https://www.w3schools.com/howto/howto_js_slideshow_gallery.asp */

/* Lehte avades avab slaidišou esimese pildi. */
var slaidIndeks = 1
näitaSlaide(slaidIndeks);

/* Edasi-tagasi nuppude funktsioon. */
function slaidPlus(n) {
    näitaSlaide(slaidIndeks += n)
}

/* Eelvaate piltidelt slaidi valimise funktsioon. */
function praeguneSlaid(n) {
    näitaSlaide(slaidIndeks = n)
}

/* Slaidide näitamise funktsioon. */
function näitaSlaide(n) {
    var i;
    var muSlaidid = document.getElementsByClassName("slaidid");
    var eelvaade = document.getElementsByClassName("läbipaistev");
    var tekst = document.getElementById("pildiTekst");
    if (n > 5) {slaidIndeks = 1}
    else if (n < 1) {slaidIndeks = 5}
    for (i = 0; i < 5; i++) {
        muSlaidid[i].style.display = "none";
    }
    for (i = 0; i < 5; i++) {
        eelvaade[i].className = eelvaade[i].className.replace(" aktiivne", "");
    }
    muSlaidid[slaidIndeks-1].style.display = "block";
    eelvaade[slaidIndeks-1].className += " aktiivne";
    tekst.innerHTML = eelvaade[slaidIndeks-1].alt;
}