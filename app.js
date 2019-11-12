window.onload = function() {
    var anchors = document.getElementsByClassName("searchButton");
    for(var i = 0; i < anchors.length; i++) {
        var anchor = anchors[i];
        url = "/superheroes.php";
        anchor.onclick = function() {
            var route = (document.getElementById('textbox_id').value == "") ? url : url+"?query="+document.getElementById('textbox_id').value;
            console.log(route);
            fetch(route)
            .then(response => response.text())
            .then(data => {
                setDiv(data) // Prints result from `response.json()` in getRequest
            })
            .catch(error => console.error(error))
            
        }
    }
}


function setDiv(p1) {
	var result = document.getElementById("result");
	result.innerHTML = p1;
  
}
