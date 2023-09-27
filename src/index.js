document.addEventListener("DOMContentLoaded" ,() => {
let form = document.querySelector("form")
form.addEventListener("submit", (e) => {
  e.preventDefault()
  let value = e.target.name.value;
  let namesDiv = document.querySelector("#names-container")
  let p = document.createElement("p")
  p.textContent = `${value}`
  p.style.textAlign = "center"
  let button = document.createElement("button")
  button.textContent = `Remove Student`
  button.addEventListener("click",(e) => {
    e.target.parentNode.remove()
  })
  p.appendChild(button)
  namesDiv.appendChild(p)
  form.reset()  
  })
})




//document.addEventListener("DOMContentLoaded", () => {
//let form = document.querySelector('form')
//form.addEventListener('submit', (e) => {
  //  e.preventDefault()
    //buildToDo(e.target.my-todos.value)
    //form.reset()
  //})
//})
//function buildToDoTodos(todos){
  //let p = document.createElement('p')
  //let btn = document.createElement('button')
  //btn.addEventListener('click', handleDelete)
  //btn.textContent = 'x'
  //p.textContent = `${todos}`
  //p.appendChild(btn)
  //console.log(p)
  //document.querySelector('#My-todos').appendchild(p)
//}

//function handleDelete(e){
//  e.target.parentNode.remove()
//}