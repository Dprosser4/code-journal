
var $photourl = document.querySelector('#photourl');
var $photoPreview = document.querySelector('.main-image');

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

function renderEntry(entry) {
  var li = document.createElement('li');
  var imgDiv = document.createElement('div');
  var entryImg = document.createElement('img');
  var textDiv = document.createElement('div');
  var titleH2 = document.createElement('h2');
  var noteP = document.createElement('p');

  imgDiv.setAttribute('class', 'column-half');
  textDiv.setAttribute('class', 'column-half');
  entryImg.setAttribute('class', 'main-image');

  entryImg.setAttribute('src', entry.photourl);
  titleH2.textContent = entry.title;
  noteP.textContent = entry.note;

  imgDiv.appendChild(entryImg);
  textDiv.appendChild(titleH2);
  textDiv.appendChild(noteP);
  li.appendChild(imgDiv);
  li.appendChild(textDiv);

  return li;
}

var $entryList = document.querySelector('#entry-list');

for (var i = 0; i < data.entries.length; i++) {
  var storedEntry = renderEntry(data.entries[i]);
  $entryList.appendChild(storedEntry);
}
