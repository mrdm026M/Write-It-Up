let addBtn = document.getElementById("addBtn");
let cancel = document.querySelector(".closeBtn");

let noteDeleteBtn;
let noteList = [];

// showNotes(noteList);

addBtn.addEventListener("click", function (e) {
  addNote(e);
});

function addNote(e) {
  e.preventDefault();
  let newNote = [];
  let title = document.querySelector(".note-title");
  let note = document.querySelector(".note-content");

  if (title.value == "" || note.value == "") {
    return alert("Please enter the title and note");
  } else {
    newNote.title = title.value;
    newNote.note = note.value;
  }
  title.value = "";
  note.value = "";

  noteList.push(newNote);
  showNotes(noteList);
  cancel.click();
}

function showNotes(noteList) {
  let notes = Array.from(noteList);
  console.log(notes);
  // let note = notes;
  // console.log(note);
  if (notes == null) {
    notes.remove();
  }

  // if (note.length == 0) {
  //   note.remove();
  // }

  let html = "";
  notes.forEach(function (note) {
    html += `
              <div class="note-1">
                  <span>${note.title}</span>
                  <p>${note.note}</p>
                  <button class="deleteBtn">Delete</button>
              </div>`;
  });
  let notesElm = document.getElementById("notes-area");
  if (notes.length != 0) {
    notesElm.innerHTML = html;
  }

  getDelete();
  // localStorage.setItem("notes", JSON.stringify(noteList));
}

function getDelete() {
  noteDeleteBtn = Array.from(document.querySelectorAll(".deleteBtn"));
  noteDeleteBtn.forEach((button) => {
    let noteTitle = button.previousSibling.previousSibling.innerText;
    button.addEventListener("click", () => {
      deleteNote(noteTitle);
    });
  });
}

function deleteNote(noteTitle) {
  for (let i = 0; i < noteList.length; i++) {
    if (noteList[i].title == noteTitle) {
      noteList.splice(i, 1);
    }
    // console.log(noteList);
    // if (noteList.length == 0) {
    //   console.log("true");
    // }
  }
  showNotes(noteList);
}
