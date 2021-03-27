let addBtn = document.getElementById("addBtn");
let cancelBtn = document.querySelector(".closeBtn");
addBtn.addEventListener("click", function (e) {
  e.preventDefault();
  let addTxt = document.getElementById("addTxt");
  let notes = localStorage.getItem("notes");
  if (notes == null) {
    notesObj = [];
  } else {
    notesObj = JSON.parse(notes);
  }
  notesObj.push(addTxt.value);
  localStorage.setItem("notes", JSON.stringify(notesObj));
  addTxt.value = "";
  console.log(notesObj);

  showNotes();
});

function showNotes() {
  let notes = localStorage.getItem("notes");
  if (notes == null) {
    notesObj = [];
  } else {
    notesObj = JSON.parse(notes);
  }
  let html = "";
  notesObj.forEach(function (element, index) {
    html += `
            <div class="note-1">
                <span>Note ${index + 1}</span>
                <p>${element}</p>
                <button>Delete</button>
            </div>`;
  });
  let notesElm = document.getElementById("notes-area");
  if (notes.length != 0) {
    notesElm.innerHTML = html;
  }
  cancelBtn.click();
}
