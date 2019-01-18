function fEach (arr, callback){

    for (var i = 0; i < arr.length; i++){
    var num = arr[i];
    var index = i;
    if (callback){
    callback(num, index, arr);}
    }    
}

fEach ([1,2,3,4], function (num,index,arr){console.log( num, index, arr);});