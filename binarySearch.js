function binarySearch(arr,value){
  
  var start = arr[0]
  var stop = arr.length - 1
  var middle = Math.floor((start + stop) /2)
    
  while(arr[middle] !== value && start < stop){
  
    if(value < arr[middle] ){
      stop = middle - 1      
    }
    
    else {
      start = middle + 1     
    }
    
    middle = Math.floor((start + stop) /2)        
  }
  
  return (arr[middle] !== value) ? -1:middle
  
}
