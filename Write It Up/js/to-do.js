const input = document.getElementById("input-item");
const list = document.getElementById("list-items");

let LIST = [];
let id = 0;

const CHECK = "fa-check-circle";
const UNCHECK = "fa-circle-thin";
const LINE_THROUGH = "lineThrough";

function addTask(task, id, done, trash) {
  if (trash) {
    return;
  }
  const DONE = done ? CHECK : UNCHECK;
  // console.log(DONE);
  const LINE = done ? LINE_THROUGH : "";
  // console.log(LINE);
  const text = `<li class="items">
                    <div class="item-text">
                      <i class="fa co ${DONE}" job="complete" id="${id}"></i>
                      <p class="text ${LINE}">${task}</p>
                    </div>
                    <i class="fa fa-trash-o de" job="delete" id="${id}"></i>
                </li>`;
  const position = "beforeend";
  list.insertAdjacentHTML(position, text);
}

function completeTask(e) {
  e.classList.toggle(CHECK);
  e.classList.toggle(UNCHECK);
  e.parentNode.querySelector(".text").classList.toggle(LINE_THROUGH);
  LIST[e.id].done = LIST[e.id].done ? false : true;
  console.log("print-", LIST[e.id].done);
}

function removeTask(e) {
  e.parentNode.parentNode.removeChild(e.parentNode);
  LIST[e.id].trash = true;
}

list.addEventListener("click", function (e) {
  const element = e.target;
  // console.log("target - ", element);
  const elementJob = element.attributes.job.value;
  // console.log(elementJob);

  if (elementJob == "complete") {
    completeTask(element);
  } else if (elementJob == "delete") {
    removeTask(element);
  }
});

document.addEventListener("keyup", function (event) {
  var code = event.keyCode;
  if (code == 13) {
    const task = input.value;
    if (task) {
      addTask(task, id, false, false);

      LIST.push({
        name: task,
        id: id,
        done: false,
        trash: false,
      });
      id++;
    }
    input.value = "";
  }
});
