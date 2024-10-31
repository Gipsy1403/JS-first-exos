// const now =new Date()
// const date=new Date(2020,06,11)
// const date=new Date("2024-06-11 05:30:00")
// const year = date.getFullYear()
// const month= date.getMonth()
// const day=date.getDate()
// const hours =date.getHours()
// const minutes =date.getMinutes()
// const seconds =date.getSeconds()
// date.getFullYear(2020)

// const time = date.getTime()


// const formateDate = date. toLocaleDateString("fr-FR",{
//       year : "nomber"
//       month: "long"
//       day: "numéric"
//       weekday : "short"
// })
// const formateTime = date. toLocaleTimeString()
// const formateDate2 = date. toLocaleString()

// console.log(formateDate)
// console.log(formateTime)
// console.log(formateDate2)
// console.log(now)
// console.log(date)
// console.log(year)
// console.log(month)
// console.log(day)
// console.log(hours)
// console.log(minutes)
// console.log(seconds)
// console.log(time)


// ***************************************************************

// exercice 1 - CALCUL DE L AGE

function calculateAge(birthDate) {
      const today = new Date(); // appel de la date d'aujourd'hui
      const birth = new Date(birthDate); // appel de la date de naissance de la personne
      let age = today.getFullYear() - birth.getFullYear(); // la variable let nommée age demande à ce que la date d'aujourd'hui soit déduite de celle de la date d'anniversaire
      const monthDifference = today.getMonth() - birth.getMonth(); // La variable monthDifference calcule la différence entre le mois actuel et le mois de naissance.
      
      // Vérifie si l'anniversaire n'est pas encore passé cette année
      if (monthDifference < 0 || (monthDifference === 0 && today.getDate() < birth.getDate())) {
          age--;
      } 
//Explication de la condition
/* monthDifference < 0 :

Cette condition vérifie si la différence en mois entre la date actuelle (today) et la date de naissance (birth) est négative.
Si monthDifference est négatif, cela signifie que le mois actuel est avant le mois de naissance. Par exemple, si la date actuelle est en janvier et que la date de naissance est en mai, alors monthDifference sera -4.

|| (OU logique) :

Cette opération logique signifie que si l'une des deux conditions est vraie, alors l'ensemble de la condition est considéré comme vrai.

(monthDifference === 0 && today.getDate() < birth.getDate()) :

Cette partie de la condition vérifie si monthDifference est égal à 0, ce qui signifie que nous sommes dans le même mois.
Ensuite, elle vérifie si le jour actuel (today.getDate()) est inférieur au jour de naissance (birth.getDate()).
Par exemple, si la date actuelle est le 5 mai et que la date de naissance est le 15 mai, alors cette condition sera vraie, car nous sommes encore avant le jour d'anniversaire.

Que fait cette condition ?

Si l'une de ces deux conditions est vraie (c'est-à-dire que l'anniversaire n'est pas encore arrivé cette année), la ligne suivante age-- est exécutée.
age-- : Cela décrémente l'âge d'une unité. Cela signifie que la personne n'a pas encore eu son anniversaire cette année, donc son âge doit être ajusté.*/
      
      return age;
  }
  
  const age = calculateAge('1990-05-15');
  console.log(age); 
// ****************************************************************************

// exercice 2 - VERIFICATION DE LA VALIDITE D UNE DATE

function isValidDate(dateString) {
      const date = new Date(dateString);
      
      // Vérifie si la date est valide
      if (isNaN(date)) {
          return false;
      }
      
      // Extraire l'année
      const year = date.getFullYear();
  
      // Vérifie si l'année est bissextile
      const isLeapYear = (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
      
      return isLeapYear;
  }
  
  console.log(isValidDate('2024-09-29'));

// **********************************************************************

// exercice 3 - PROCHAINE DATE DANS UNE SEMAINE

function addOneWeek(date) {
      // Créer une nouvelle date à partir de la date donnée
      const newDate = new Date(date);
      
      // Ajouter 7 jours (1 semaine) en millisecondes
      newDate.setDate(newDate.getDate() + 7);
      
      return newDate;
  }
  
  // Exemple d'utilisation
  const currentDate = new Date(); // Date actuelle
  const nextWeekDate = addOneWeek(currentDate);
  console.log(nextWeekDate); // Affiche la date exacte une semaine plus tard

/*Explication :
new Date(date) : 
Crée une nouvelle instance de Date à partir de la date fournie. Cela permet de ne pas modifier la date d'origine.

newDate.setDate(newDate.getDate() + 7) : 
Cette ligne ajoute 7 jours à la date. getDate() renvoie le jour du mois, et setDate() met à jour la date avec le nouveau jour. Cela gère également le passage au mois suivant si nécessaire.

Retourner newDate : 
La fonction retourne la nouvelle date, qui est exactement une semaine plus tard.*/

// **************************************************************************************

// exercie 4 - NOMBRE DE JOURS RESTANTS JUSQU A UNE DATE SPECIFIQUE
function daysUntil(targetDate) {
      const today = new Date(); // appel de la date d'aujourd'hui
      const target = new Date(targetDate); 
      
      // Calculer la différence en millisecondes
      const differenceInMillis = target - today;
      
      // Convertir la différence en jours
      const daysUntil = Math.ceil(differenceInMillis / (1000 * 60 * 60 * 24)); //Math.ceil est utilisé pour s'assurer que même si la différence est inférieure à un jour, elle est arrondie vers le haut.
      
      return daysUntil;
  }
  
  // Exemple d'utilisation pour le Nouvel An
  const newYear = new Date(today.getFullYear() + 1, 0, 1); // 1er janvier de l'année suivante
  const daysRemaining = daysUntil(newYear);
  console.log(daysRemaining); // Affiche le nombre de jours restants jusqu'au Nouvel An

/*Cette fonction crée un objet Date pour la date cible (le Nouvel An) et la date actuelle, puis calcule la différence en jours.*/

// *************************************************************************

// exercice 5 - FORMATAGE PERSONNALISE D UNE DATE
function formatCustomDate(date) {
      return date.toLocaleDateString('fr-FR', { // toLocaleDateString formate la date
          weekday: 'long', // Jour de la semaine en long (ex: lundi)
          year: 'numeric',  // Année numérique (ex: 2024)
          month: 'long',    // Mois en long (ex: octobre)
          day: 'numeric'    // Jour numérique (ex: 28)
      });
  }
  
  // Exemple d'utilisation
  const date = new Date(); // Date actuelle
  const formattedDate = formatCustomDate(date);
  console.log(formattedDate); // Affiche la date au format souhaité
