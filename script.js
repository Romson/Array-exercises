//printReverse()
function printReverse(arr) {
for(i = arr.length; i >= 0; i--) {
    console.log(arr[i]);
    }
} printReverse([1,2,3,4]);

//isUniform()
function isUniform(arr) {
    var first = arr[0];
    for( i = 1; i < arr.length; i++ ) {
        if(arr[i] !== first) {
            return false;
        }
    } return true;
} isUniform([1,1,1,1]);

//sumArray() for loop
function sumArray(arr) {
    var result = 0;
    for(i = 0; i < arr.length; i++) {
        result += parseInt(arr[i]);
    } return result;
} sumArray([1,5,9]);

//sumArray forEach
function sumArray(arr) {
    var result = 0;
    arr.forEach(function(element){
        result += element;
    }); return result;
} sumArray([1,5,9]);

//max() for
function max(arr) {
    var max = arr[0];
    for(i = 1; i < arr.length; i++) {
        if(arr[i] > max) {
            max = arr[i];
        } 
    } return max;
} max([10,20,385,67,93]);

//max() forEach
function max(arr) {
    var max = arr[0];
    arr.forEach(function(element) {
        if(element > max) {
            max = element;
        }
    }); return max;
} max([10,20,385,67,93]);