
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
  $entryList.prepend(renderEntry(entryData));
  $photoPreview.setAttribute('src', 'images/placeholder-image-square.jpg');
  $entryForm.reset();
  viewSwap('entries');
  toggleNoEntries();
}

function renderEntry(entry) {
  var li = document.createElement('li');
  var imgDiv = document.createElement('div');
  var entryImg = document.createElement('img');
  var textDiv = document.createElement('div');
  var titleDiv = document.createElement('div');
  var titleH2 = document.createElement('h2');
  var iconDiv = document.createElement('div');
  var icon = document.createElement('i');
  var pDiv = document.createElement('div');
  var noteP = document.createElement('p');

  imgDiv.setAttribute('class', 'column-half only-pad-bottom');
  textDiv.setAttribute('class', 'column-half flex-title');
  entryImg.setAttribute('class', 'main-image');
  titleDiv.setAttribute('class', 'column-half-always only-pad-bottom');
  iconDiv.setAttribute('class', 'column-half-always align-icon only-pad-bottom');
  icon.setAttribute('class', 'fa-solid fa-pencil purple fa-xl');
  pDiv.setAttribute('class', 'column-full only-pad-bottom');

  entryImg.setAttribute('src', entry.photourl);
  titleH2.textContent = entry.title;
  titleH2.setAttribute('class', 'pad-left-1');
  noteP.textContent = entry.note;
  noteP.setAttribute('class', 'pad-left-1');

  imgDiv.appendChild(entryImg);
  titleDiv.appendChild(titleH2);
  iconDiv.appendChild(icon);
  pDiv.appendChild(noteP);

  textDiv.appendChild(titleDiv);
  textDiv.appendChild(iconDiv);
  textDiv.appendChild(pDiv);

  li.appendChild(imgDiv);
  li.appendChild(textDiv);
  li.setAttribute('data-entry-id', entry.entryId);

  return li;
}

var $entryList = document.querySelector('#entry-list');
document.addEventListener('DOMContentLoaded', createPreviousDOMTree);

function createPreviousDOMTree(event) {
  for (var i = data.entries.length - 1; i > 0; i--) {
    var storedEntry = renderEntry(data.entries[i]);
    $entryList.appendChild(storedEntry);
  }
  viewSwap(data.view);
  toggleNoEntries();
}

var $noEntryLi = document.querySelector('#noEntries');

function toggleNoEntries() {
  if (data.entries.length === 0) {
    $noEntryLi.setAttribute('class', '');
  } else if (data.entries.length > 0) {
    $noEntryLi.setAttribute('class', 'hidden');
  }
}

var $entryFormView = document.querySelector('#entry-form');
var $entriesView = document.querySelector('#entries');

function viewSwap(string) {
  if (string === 'entries') {
    $entryFormView.setAttribute('class', 'hidden');
    $entriesView.setAttribute('class', '');
    data.view = 'entries';
  } else if (string === 'entry-form') {
    $entryFormView.setAttribute('class', '');
    $entriesView.setAttribute('class', 'hidden');
    data.view = 'entry-form';
  }
}

var $entriesMenu = document.querySelector('#entries-menu');
$entriesMenu.addEventListener('click', changeToEntriesView);

function changeToEntriesView(event) {
  viewSwap('entries');
}

var $newBtn = document.querySelector('#new-btn');
$newBtn.addEventListener('click', changeToEntryFormView);

function changeToEntryFormView(event) {
  viewSwap('entry-form');
}
