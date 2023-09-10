function findingElement(array) {
  let largest = array[0];
  let smallest = array[0];

  for (let i = 0; i < array.length; i++) {
    if (array[i] < smallest) {
      smallest = array[i];
    }
    else if(array[i]>largest){
        largest = array[i]
    }
}
  console.log("largest is " + largest);
  console.log("smallest is " + smallest);
}
findingElement([0,5, 9, 6, 7, 9, 7, 8, 5, 3, 4, 2,7, 10,]);
