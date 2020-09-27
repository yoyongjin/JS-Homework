function isSorted(array){
  var result;
  for(let i = 0; i < array.length-2; i++){
    if(array[i] < array[i+1]){
      isSorted(array[i+1]);
      result = true;
    }
    else{
      result = false;
    }    
  }
  console.log(result); 
}
console.log(isSorted([1, 2, 3, 4, 5]));
console.log(isSorted([2, 3, 4, 1, 5]));

//이렇게 하면 결과값은 나오긴하는데 재귀함수를 써서그런지 출력이 필요이상으로 여러번 되어서 undifined값이 여러번 포함된다.
//차후에 문제를 해결해 보겠다.