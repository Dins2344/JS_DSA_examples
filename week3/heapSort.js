function heaping(arr, length, parentInd) {
  let largest = parentInd;
  let left = parentInd * 2 + 1;
  let right = left + 1;

  if (left < length && arr[left] > arr[largest]) {
    largest = left;
  }
  if (right < length && arr[right] > arr[largest]) {
    largest = right;
  }

  if (largest !== parentInd) {
    [arr[largest], arr[parentInd]] = [arr[parentInd], arr[largest]];
    heaping(arr, length, largest);
  }
  return arr;
}

function heapSort(arr) {
  let length = arr.length;
  let lastParent = Math.floor(length/2-1);
  let lastChild = length - 1;

  while (lastParent >= 0) {
    heaping(arr, length, lastParent);
    lastParent--;
  }
  while(lastChild >= 0){
      [arr[0],arr[lastChild]] = [arr[lastChild],arr[0]]
      heaping(arr,lastChild,0)
      lastChild --
  }
  return arr;
}
let arr = [2, 4, 2, 6, 7, 9, 5, 6];
console.log(arr);
heapSort(arr);
console.log(arr);

function heapDown(arr,length,parentInd){
    let lowest = parentInd
    let left = parentInd *2 +1
    let right = left + 1

    if(left<length && arr[left]< arr[lowest]){
        lowest = left
    }
    if(right < length && arr[right] < arr[lowest]){
        lowest = right
    }
    if(lowest !== parentInd){
        [arr[lowest],arr[parentInd]] = [arr[parentInd],arr[lowest]]
        heapDown(arr,length,lowest)
    }
    return arr
}

function heapSortOne(arr){
    let length = arr.length
    let lastParent = Math.floor(length/2-1)
    let lastChild = length -1

    while(lastParent >= 0){
        heapDown(arr,length,lastParent)
        lastParent--
    }
    while(lastChild >= 0){
        [arr[0],arr[lastChild]] = [arr[lastChild],arr[0]]
        heapDown(arr,lastChild,0)
        lastChild --
    }
    return arr
}



