/* exported data */

var data = {
  view: 'entry-form',
  entries: [],
  editing: null,
  nextEntryId: 1
};
window.addEventListener('beforeunload', saveData);

function saveData(event) {
  var entriesData = JSON.stringify(data);
  localStorage.setItem('entryData', entriesData);
}

var previousData = localStorage.getItem('entryData');
if (previousData !== null) {
  data = JSON.parse(previousData);
}
