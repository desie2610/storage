// localStorage.setItem('key', 'i love  JS')

// const user = {
//     name: "tima",
//     age:  "14"
//     }
//      localStorage.setItem('userInf',  JSON.stringify(user))


// const boxEl = document.querySelector(".box")
// const checkEl = document.querySelector(".check")
// const bodyEl = document.querySelector("body")


// const savedTheme = localStorage.getItem("isActive") || ""

// if (savedTheme === "dark") {
//     checkEl.classList.toggle("active");
//     bodyEl.classList.add("dark")
// } else {
//     bodyEl.classList.remove("dark")
//     localStorage.setItem("isActive", "light")
// }

// boxEl.addEventListener("click", () => {
//     checkEl.classList.toggle("active");
//     if (checkEl.classList.contains("active")) {
//         localStorage.setItem("isActive", "dark")
//         bodyEl.classList.add("dark")
//     } else {
//         bodyEl.classList.remove("dark")
//         localStorage.setItem("isActive", "light")
//     }
// });


// При натисканні зберегти значення інпуту в localStorage.
// Додати кнопку "Очистити", яка видалить значення з localStorage.

// const input = document.querySelector('#nameInput')
// const btn = document.querySelector('#saveBtn')
// const btnClear = document.getElementById("clearBtn");
// const saveName = localStorage.getItem('userName') || ''
// input.value = saveName
// const comm = document.querySelector('textArea')


// btn.addEventListener('click', ()=> {
//     localStorage.setItem('userName', input.value)
    
// })

// btnClear.addEventListener('click', () => {
//     localStorage.removeItem('userName')
//     localStorage.removeItem('coments')
// })

// const saveCom = localStorage.getItem("coments") || ''

// comm.value = saveCom

// comm.addEventListener('input', () => {
// localStorage.setItem('coments', comm.value)

// })

const form = document.querySelector(".form-js");

const STORAGE_KEY = 'formData';

function savedForm() {
  const data = {
    name: form.elements.name.value,
    email: form.elements.email.value,
    tel: form.elements.tel.value,
    comment: form.elements.comment.value
  };
  localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
}

function loadForm() {
  const parseData = JSON.parse(localStorage.getItem(STORAGE_KEY));

  if (!parseData) return;

  const { name, email, tel, comment } = parseData;

  form.elements.name.value = name || "";
  form.elements.email.value = email || "";
  form.elements.tel.value = tel || "";
  form.elements.comment.value = comment || "";
}

form.addEventListener("input", savedForm);

form.addEventListener("submit", (event) => {
  event.preventDefault();
  form.reset();
  localStorage.removeItem(STORAGE_KEY);
});

loadForm();