window.onload = function() {
    var anchors = document.getElementsByClassName("searchButton");
    for(var i = 0; i < anchors.length; i++) {
        var anchor = anchors[i];
        url = "http://localhost:8080/superheroes.php"
        anchor.onclick = function() {
            let response = await fetch(url);
            if (response.ok) { // if HTTP-status is 200-299
                // get the response body (the method explained below)
                let json = await response.json();
                alert(json);
            } else {
                alert("HTTP-Error: " + response.status);
            }
            
        }
    }
}