
var $photourl = document.querySelector('#photourl');
var $photoPreview = document.querySelector('.mainimage');

function changePhoto(event) {
  var newPhotoUrl = event.target.value;
  $photoPreview.setAttribute('src', newPhotoUrl);
}
$photourl.addEventListener('input', changePhoto);

var $entryForm = document.querySelector('#new-entry');
$entryForm.addEventListener('submit', getInputs);

function getInputs(event) {
  event.preventDefault();
  var entryData = {};
  entryData[$entryForm.elements.note.name] = $entryForm.elements.note.value;
  entryData[$entryForm.elements.title.name] = $entryForm.elements.title.value;
  entryData[$entryForm.elements.photourl.name] = $entryForm.elements.photourl.value;
  entryData.entryId = data.nextEntryId;
  data.nextEntryId++;
  data.entries.push(entryData);
  $photoPreview.setAttribute('src', 'images/placeholder-image-square.jpg');
  $entryForm.reset();
}
