//선형 검색을 통해 주어진 배역(array)에 주어진 값(target)이 요소로 존재하는지 확인하여 존재하는 경우 해당 인덱스를 반환하고 존재하지 않는 경우 -1을 반환하는 함수를 구현하여라. 단, 어떠한 빌트이니 함수도 사용하지 않고 for문을 사용하여 구현하여야 한다.

function linearSearch(array, target){
  for(var i = 0; i < array.length; i++){
    if(array[i] === target) return i;
  }
  return -1
}


//이진 검색을 통해 주어진 배열(array)에 주어진 값(target)이 요소로 존재하는지 확인하여 존재하는 경우 해당 인덱스를 반환하고 존재하지 않는 경우 -1을 반환하는 함수를 구현하라. 단, 아래의 빌트인 함수 이외에는 어떤 빌트인 함수도 사용하지 않아야 하며, while 문을 사용하여 구현하여야 한다.

function binarySearch(array, target){
  var first = 0;
  var last = array.length - 1;
  while(first <= last){
    var mid = Math.floor((first + last)/2);
    if(array[mid]<target) first = mid + 1;
    else if(array[mid] > target) last = mid - 1;
    else return mid;
  }
  return -1;
}