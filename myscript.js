// Get the modal
var modal = document.getElementById("myModal");

// Get the image and insert it inside the modal - use its "alt" text as a caption
let imageEls = document.getElementsByTagName("img");
for (let i=1; i<imageEls.length; i++)
{
  imageEls[i].title="Lahore, Paksitan";
  var img = document.getElementById([i].toString());
  var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");
img.onclick = function(){
  modal.style.display = "block";
  modalImg.src = this.src;
  captionText.innerHTML = this.alt;
}
//var img = document.getElementById();


// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}
}
