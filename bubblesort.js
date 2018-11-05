

function bubbleSort (arr) {
    debugger;
    let swapCount = 0;
    let compareCount = 0;
    let movingEnd = arr.length;
    for( let i = 0; i < movingEnd; i++){
        
        let firstNum = arr[i];
        let secondNum = arr[i+1];
        if(firstNum>secondNum){
            swapCount++;
            arr[i]=secondNum;
            arr[i+1]=firstNum;
        }
    }
    if(swapCount !==0){
        bubbleSort(arr);
    }
    return arr;
}


// function bubbleSort(){

//     swapCount++;
//             arr[i]=secondNum;
//             arr[i+1]=firstNum;
    
// }


bubbleSort.prototype.compareTracker = function (){
    compareCount++;
}


console.log(bubbleSort([1,2,3,6,5,31,21,11,15]));