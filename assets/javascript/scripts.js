// const btn = document.getElementById("bouton")
// const title = document.getElementsByClassName("title")
// const list =document.getElementsByTagName("ul")
// const listitems = document.getElementsByTagName("li")
// filteredFruits= listItems.filter(fruit => fruit.)
// const listitems = document.querySelector("listitems")
// const listitems= document.querySelector("listitems")
// const link =document.getElementById("link")

// console.log(btn)
// console.log(title)
// console.log(list)
// console.log(listitems[0])
// console.log(link.setAttribute('href'))
// console.log(link.textContent)

// listitems[0].style.color="red"
// btn.addEventListener("click",sayhello)

// const userInput = document.getElementById('userInput');
// const message = document.getElementById('message');
// const btn = document.getElementById('btn');

// btn.addEventListener('click', function() {
//     const inputText = userInput.value.trim();

//     if (inputText === "Bonjour") {
//         message.textContent = "Bonne journée !";
//         message.style.color = "green"; // Couleur verte
//     } else if (inputText === "Au revoir") {
//         message.textContent = "À la prochaine !";
//         message.style.color = "black"; // Couleur par défaut
//     } else {
//         message.textContent = "Je ne comprends pas";
//         message.style.color = "red"; // Couleur rouge
//     }

//     // Réinitialiser le champ de saisie
//     userInput.value = '';
// });

const number1=document.getElementById("number1");
const number2=document.getElementById("number2");
const calculate=document.getElementById("calculate");
const result=document.getElementById("result");

calculate.addEventListener("click", () => {
      const total= Number(number1.value) + Number(number2.value);
      result.textContent= total;
})


