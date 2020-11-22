class User {
  constructor(nickname,avatar,gender,location,dob) {
    this.nickname = nickname
    this.avatar = avatar
    this.gender = gender
    this.location = location
    this.dob = dob
    this.online = null
  }

  render(rootElement, mode = `sm`) {// mode = `smol`,`md`,`lg`
    let div = document.createElement(`div`) //создай тег див
        div.className = "user-" + mode//приской диву класс юзер +стиль его

        div.appendChild(document.createElement(`img`))//добавь тег картинки
        div.children[0].src = this.avatar //в src картинки поставь аватар с канструктора потому что мы рендерим канструктор 
  }




}