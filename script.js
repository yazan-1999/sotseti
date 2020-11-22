


let ero = ""
let t = null
// setTimeout(ero , 1000);
// function ero() {

//   if (error == 0) {
//     error += 1
//     alert(`Error!/n Cannot load sam element`)
//   }
//   else {
//     alert(`Error!/n Cannot load all elements`)
//   }

function loadComponent(name) {
  let link = document.createElement("link")
  link.rel = "stylesheet"
  link.href = `/${name}/${name}.css`
  link.addEventListener(`error`, function () {
    ero += `ERROR\n Cannot load ${name}.css\n`
    clearTimeout(t)
    t = setTimeout(showError, 1000)
      
  })
  console.log(link)
  document.head.appendChild(link)

  let script = document.createElement("script")
  console.log(script)
  script.addEventListener(`error`, function () {
    ero += `ERROR\n Cannot load ${name}.js\n`
    clearTimeout(t)
    t = setTimeout(showError, 1000)
  }
  )
  function ucFirst(name) {

    return name[0].toUpperCase() + name.slice(1);
  }
  
  
    script.src = `/${name}/${ucFirst(name)}.js`
    console.log(script)
  document.body.appendChild(script)
}
  
function showError() {
  alert( ero)
}

// setTimeout(showError,2000)


loadComponent("user")

window.onload = function () {
  console.log("ok")

  let user1 = new User("Jeck", "images/foto.jpg", "M", "UK", "1999.05.22")
user1.render(document.body)//юзер отрендариться в документе 
}




