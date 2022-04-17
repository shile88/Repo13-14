var modal = document.getElementById("myModal");

var span = document.getElementsByClassName("close")[0];

var elements = document.getElementsByClassName("img-text");

for (var i = 0; i < elements.length; i++) {
    elements[i].addEventListener('click', function(event) {
        modal.style.display = "block";
        document.getElementById('loaded-content').innerHTML = '<iframe src="'+this.getAttribute('id')+'.html" ></iframe>';
    }, false);
}

span.onclick = function() {
  modal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}



