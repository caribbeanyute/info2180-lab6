window.onload = function() {
    var anchors = document.getElementsByClassName("searchButton");
    for(var i = 0; i < anchors.length; i++) {
        var anchor = anchors[i];
        url = "http://34.82.184.97:56869/superheroes.php";
        anchor.onclick = function() {
            fetch(url)
            .then(response => response.text())
            .then(data => {
                setDiv(data) // Prints result from `response.json()` in getRequest
            })
            .catch(error => console.error(error))
            
        }
    }
}


function setDiv(p1) {
	var result = document.getElementById("container2");
	result.innerHTML = p1;
  
}