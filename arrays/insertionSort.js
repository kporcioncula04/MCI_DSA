//Write a function that takes in an array of integers and returns a sorted version of that array. Use the insertion sort algorithm to sort the array.

function insertionSort(array){
  //iteration starts at the second index
  for(let i = 1; i < array.length; i++){
    //firstElem in the unsorted subarray
    let currElem = array[i];
    //last elem of sorted subarray
    let j = i - 1;
    while((j > -1) && (currElem < array[j])){
      //we want to swap it if both are true
      array[j+1] = array[j];
      j--;
    }
    array[j+1] = currElem
  }
  return array
}

insertionSort([3,7,5])

// time - o(n^2) ||  space - o(1)

//inputs --> we all integers can be positive or negative --> if there is only one then return that
//outputs --> return a sorted array using insertion sort

//i want to have a sorted array and an unsorted array list
//once i have that set up we can iterate and shift elements and open up a space for curr elem to be inserted.

//we start with 1 because we want to have a tentative list of array and from there we are going to insert or shift elements


// https://stackabuse.com/insertion-sort-in-javascript/
