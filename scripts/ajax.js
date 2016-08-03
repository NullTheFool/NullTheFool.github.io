var xhttp = new XMLHttpRequest();

function replace(elid, file){
    xhttp.open("GET", file, false);
    xhttp.send();

    document.getElementById(elid).innerHTML = xhttp.responseText;
}
