function is_url(str) {
    regexp = /^(?:(?:https?|ftp):\/\/)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:\/\S*)?$/;
    if (regexp.test(str)) {
        return true;
    } else {
        return false;
    }
}

function SHORTENREQUESTER() {
    var UTS = document.getElementById("url").value;
    var returnedVal;
    //console.log(UTS);
    if(is_url(UTS) !== true) {
        alert("make sure it is a valid url. and it has http:// or https:// otherwise it wont work.");
        return;
    }
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        returnedVal = this.responseText;
        callbk();
      }
    };
    xhttp.open("GET", "http://localhost:3000/" + UTS, true);
    xhttp.send();
    function callbk() {
        document.getElementById("shortCode").innerHTML = "THE SHORTNED LINK IS: " + returnedVal + ". Just go to http://localhost:8080/" + returnedVal;
        document.getElementById("ankor").innerHTML = "http://localhost:8080/" + returnedVal;
        document.getElementById("ankor").setAttribute("href", "http://localhost:8080/" + returnedVal);
    }
}
