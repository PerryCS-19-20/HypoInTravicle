function start(){
	var arr = [1, 2, 3, 4, 5, 6];
	var evens = onlyEvens(arr);
	println(evens);
}

function onlyEvens(arr){
    var newA = [];
    for(var i = 0; i < arr.length; i++){
        var cur = arr[i];
        if(i % 2 == 1){
            newA.push(cur);
        }
    }
     return newA;
}
