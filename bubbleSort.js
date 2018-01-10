function bubbleSort(arr){
  var temp;
  
  for(var j = 0; j < arr.length; j++){   
    for(var i = 0; i < arr.length - 1;i++){
      if(arr[i] > arr[i+1]){
         temp = arr[i];
         arr[i] = arr[i + 1];
         arr[i+1] = temp
                 
      }    
    }
  }
  
  console.log(arr)
}

