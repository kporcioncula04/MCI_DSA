//write a function to find th longest common prefix sting amongst an array of strings.

//input: [ 'flower' , 'flow' , 'flight']
//ouput: 'fl'

function longestCommonPrefix(array){
  let longest = '';

  if(array.length === 0) return '';

  for(let i = 0; i < array[0].length; i++){
    for(let j = 1; j < array.length; j++){
      if(array[0][i] !== array[j][i]) return longest
    }
    longest += array[0][i]
  }
  return longest;
}

longestCommonPrefix(['flower', 'flow', 'flight'])

---

function longestCommonPrefix(array){
  let prefix = '';
  if(array === null || array.length === 0) return prefix;

  for(let i = 0; i < array[0].length; i++){
    let currChar = array[0][i]

    for(let j = 1; j < array.length; j++){
      if(array[j][i] !== currChar) return prefix
    }
    prefix = prefix + currChar
  }
  return prefix
}
