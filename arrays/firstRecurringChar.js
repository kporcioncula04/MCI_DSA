//given an array = [2,5,1,2,3,5,1,2,4]
//it should return 2

// function firstRecurringCharacter(input){
//   //     let lastPair = undefined;
// //     let lastDistance = undefined;
//   for(let i = 0; i < input.length;i++){
//     let firstElem = input[i]
//     for(let j = i + 1; j < input.length;j++){
//       let nextElem = input[j]
//       if(firstElem === nextElem && (lastDistance>j-i || lastDistance==undefined)){
//         lastPair=array[i];
//         lastDistance= j-i;
//          break;
//       }
//     }
//   }
//   return lastPair
// }

// const FirstRecurringChar = (array) => {
//   for (let i=1;i<array.length;i++)
//   {
//     for (let j=i-1;j>=0;j--)
//     {
//       if (array[i] === array[j])
//         return array[i]
//     }
//   }
//   return undefined
// }


//o(n^2) || o(1)

firstRecurringCharacter([2,5,5,2,3,5,1,2,4])
---
// function firstRecurringCharacter(input) {
//   let map = {} // store natin ung mga key-value pair dito

//   for(let i = 0; i < input.length; i++){
//     let nums = input[i]
//     //if there is no map[nums] then add it to the map nums
//     if(map[nums] !== undefined){
//       return nums
//     } else {
//       map[nums] = i
//     }
//     //else if there is already a map[nums] we want to add something in there and then return it
//   }
//   return undefined
// }

// firstRecurringCharacter([2,1,5,2,3,5,1,2,4])

//o(n) || o(n)

---


// function firstRecurringCharacter(input){
//   let map ={}

//   for(let i = 0; i < input.length; i++){
//     let currItem = input[i]

//     if(!map[currItem]){
//       map[currItem] = 1
//     } else {
//       map[currItem] += 1
//     }

//     if(map[currItem] === 2){
//       return currItem
//     }
//   }
//   return undefined
// }

// firstRecurringCharacter([2,5,5,2,3,5,1,2,4])
