//  1. Modifier tous les éléments d'un tableau
// let nbre=[1,2,3,4];
// let double = nbre.map(x=>x*2);

// console.log(double);

// 2. corriger l'erreur
// let fruits =["apple","banana","cherry"];
// console.log(fruits[2]);

//3. Optimiser le code
// let fruits =["apple","banana","cherry"];
// console.log(fruits);

// 4. Créer une fonction : inverser un tableau
// let fruits =["apple","banana","cherry"];
// let reverse = fruits.reverse();
// console.log(fruits);

// 5. Compter les occurences d'un éléments dans un tableau
// function countOccurences(arr,value){
// return nbre.reduce((acc,val) => acc + val,0)
// }
// let nbre=[1,2,3,4,1,3,1,5,2];
// console.log(countOccurences);

// 6. Trouver l'élements le plus fréquent dans un tableau
// function mostFrequent (arr){
//       let countMax=0;
//       let elementMax = "";
//       for (let item of arr){
//             let countElement=countOccurences(arr,item)
//             if(countElement>countMax){
//                   countMax= countElement
//                   elementMax=item
//       }
// }
// return elementMax

// let nbre=[1,2,3,4,1,3,1,5,2];
// let mostFrequent =nbre.mostFrequent((arr) => arr,0);
// console.log(mostFrequent);

// 7.inverser les mots dans une phrase

// function reversewords(sentence){
//      return sentence.split(" ").reverse().join(" "); 
// }
// let sentence ="I love programming";

// console.log(reversewords(sentence));

// 8. Filtrer les éléments pairs
// function pairs(nbre){
// return nbre.filter(x=>x%2===0);
// }
// let nbre=[1,2,3,4,1,3,1,5,2,12,9,8,14];
// console.log(pairs(nbre));

// 9.Créer une fonction : fusionner deux tableaux

// let nbre=[1,2,3,4,1,3,1,5,2];
// let fruits =["apple","banana","cherry"];
// let fusion= nbre.push(...fruits);
// console.log(fusion);
// console.log(nbre);
// console.log(fruits);

// 10. Créer une fonction : Supprimer les doublons
// function removeDuplicates(nbre) {
//       return [...new Set(nbre)];
//   }
//   let nbre = [1, 2, 3, 4, 1, 3, 1, 5, 2];
//   console.log(removeDuplicates(nbre));

// 11.vérifier si un tableau est trié
