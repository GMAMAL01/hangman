let lettersBOx = document.querySelector(".littersBox")
let chosenWord = document.querySelector(".chosenWord")
let parts = document.querySelectorAll(".portrait div")
let bar = document.querySelector(".game-bar div span")
let text = document.querySelector(".game-bar p")

///
let checkedCheckboxes = document.querySelectorAll("input[type='checkbox']")

let donebutton = document.querySelector(".done")

donebutton.addEventListener("click",function() {

})
///
const letters = "abcdefghijklmnopqrstuvwxyz";
let arrayLiters = letters.split("")
let wordFromSpace = document.querySelector(".gameInfo div span")
for(i = 0; i < arrayLiters.length; i++){
    let letter = document.createElement("span")
    letter.innerHTML = arrayLiters[i]
    letter.classList.add("letter-box")
    lettersBOx.appendChild(letter)
}
//obj
let hangmanWords = {
    programming: ["javascript", "python", "java", "csharp", "ruby", "php", "swift"],
    country: ["china", "russia", "poland", "switzerland", "hungary", "japan", "france"],
    "Ai-Tools": ["symantec", "outmatch", "tableau", "salesforce", "googleai"],
    brands: ["amazon", "netflix", "paypal", "lenovo", "hellofresh", "reicoop"]
  };
  // random word
  let randomWord = Math.floor(Math.random() * Object.keys(hangmanWords).length)
  wordFromSpace.innerHTML = Object.keys(hangmanWords)[randomWord]
  let sector = Object.keys(hangmanWords)[randomWord]
  //random number
  let randomWordSector = Math.floor(Math.random() * hangmanWords[sector].length)
  // random word
  let finalWord = hangmanWords[sector][randomWordSector]
  let ArrrayFromWord = Array.from(finalWord)
  ArrrayFromWord.forEach(e=>{
    let span = document.createElement("span")
    span.classList.add("litter")
    chosenWord.appendChild(span)
  })

  let spans = document.querySelectorAll(`.chosenWord span`)
  let conter = 0
  let correctA = []
  const uniqueSet = new Set(ArrrayFromWord);
  const uniqueList = Array.from(uniqueSet);
  let number = 300 / uniqueList.length
  let barNumber = 0
  document.addEventListener("click", (e)=>{
    if(e.target.className === "letter-box"){
      e.target.classList.add("clicked")
       let state = false

       ArrrayFromWord.forEach((i, index)=>{
         if(i == e.target.innerHTML){
           spans[index].innerHTML = i
           state = true
           correctA.push(e.target.innerHTML)
         }
        
        
        })
        if(state !== true){
          conter++
        }else{
          barNumber++
          bar.style.width = `${number * barNumber}px`
        }
        if(correctA.length === ArrrayFromWord.length){
          
          let win = document.createElement("div")
          let dialog = document.createElement("p")
          dialog.innerHTML = `I'm starting to think you're cheating. <br>you made ${conter} wrong answers <br>🎖️<br>Just click away.`
          win.classList.add("congrat")
          win.appendChild(dialog)
          document.body.appendChild(win)
          document.addEventListener("click", (e)=>{
            win.remove()
            location.reload()
          })
        }

      }
    
    if(conter === 1){
      parts[0].style.display = "block"
      parts[1].style.display = "block"
    }
    if(conter === 2){
      parts[2].style.display = "block"
      parts[3].style.display = "block"
    }
    if(conter === 3){
      parts[4].style.display = "block"
      parts[5].style.display = "block"
    }
    if(conter === 4){
      parts[6].style.display = "block"
      parts[7].style.display = "block"
    }
    if(conter === 5){
      parts[8].style.display = "block"
      parts[9].style.display = "block"
      
      let win = document.createElement("div")
      let dialog = document.createElement("p")
      dialog.innerHTML = `you're going to need to start using your brain next time. <br>you made ${conter} wrong answers <br>💡<br>the word is <span>${finalWord}</span> <br>Just click away.`
      win.classList.add("congrat")
      win.appendChild(dialog)
      document.body.appendChild(win)
      document.addEventListener("click", (e)=>{
        win.remove()
        location.reload()
      })
    }
  })
  

if(ArrrayFromWord.length < 5){
  text.innerHTML = "Nap Mode"
}else if(ArrrayFromWord.length < 8){
  text.innerHTML = "Mildly Challenging"
}else {
  text.innerHTML = "Dark Souls Difficulty"

}