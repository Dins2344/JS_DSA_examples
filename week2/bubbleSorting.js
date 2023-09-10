function bubbleSort(array) {
  let swapped;
  do {
    swapped = false;
    for (let i = 0; i < array.length; i++) {
      if (array[i] > array[i + 1]) {
        temp = array[i];
        array[i] = array[i + 1];
        array[i + 1] = temp;
        swapped = true;
      }
    }
  } while (swapped);
}


function reverseSorting(array) {
  let swapped;
  do {
    swapped = false;
    for (let i = 0; i < array.length; i++) {
      if (array[i] < array[i + 1]) {
        temp = array[i];
        array[i] = array[i + 1];
        array[i + 1] = temp;
        swapped = true;
      }
    }
  } while (swapped);
}

function bubbleSorting(array) {
  let swapped;
  do {
    swapped = false;

    for (let i = 0; i < array.length; i++) {
      if (array[i] > array[i + 1]) {
        [array[i], array[i + 1]] = [array[i + 1], array[i]];
        swapped = true;
      }
    }
  } while (swapped);
}




function bubblesortOne(array){
    let swapped
    do{
        swapped = false
        for(let i=0;i<array.length;i++){
            if(array[i]>array[i+1]){
                [array[i],array[i+1]]=[array[i+1],array[i]]
                swapped = true

            }
        }
    }while(swapped)
}


function bubbleOne(arr){
  let swapped
  do{
    swapped = false
    for(let i=0;i<arr.length;i++){
      if(arr[i]>arr[i+1]){
        [arr[i],arr[i+1]]=[arr[i+1],arr[i]]
        swapped = true
      }
    }

  }while(swapped)
}

function bubbleTwo(arr){
  let swapped
  do{
    swapped = false
    for(let i=0;i<arr.length;i++){
      if(arr[i]<arr[i+1]){
        [arr[i],arr[i+1]]=[arr[i+1],arr[i]]
        swapped = true
      }
    }
  }while(swapped)
}

function bubbleSortReview(array){
  let swapped 
  do{
    swapped = false
    for(let i =0;i<array.length;i++){
      if(array[i]>array[i+1]){
        let temp =array[i]
        array[i]=array[i+1]
        array[i+1]=temp
        swapped = true
      }
    }
  }while(swapped)
}

function bubbleSortReviewOne(arr){
  let swapped
  do{
    swapped = false
    for(let i=0;i<arr.length;i++){
      if(arr[i]>arr[i+1]){
        [arr[i],arr[i+1]]=[arr[i+1],arr[i]]
        swapped = true
      }
    }
  }while(swapped)
}

let arrayOne = [2, 3, 1, 4, 6, 5];
console.log(arrayOne);
bubbleSortReviewOne(arrayOne)
console.log(arrayOne);


