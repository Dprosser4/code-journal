
var $photourl = document.querySelector('#photourl');
var $photoPreview = document.querySelector('.mainimage');

function changePhoto(event) {
  var newPhotoUrl = event.target.value;
  $photoPreview.setAttribute('src', newPhotoUrl);
}
$photourl.addEventListener('input', changePhoto);
