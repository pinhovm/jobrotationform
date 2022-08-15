//2 QUESTÃO

function sequenciaFibonacci(number) {
    var arr = [];
    arr[0] = 0;
    arr[1] = 1;
    count = 3;
    for (var i = 2; i < count; i++) {
        arr[i] = arr[i - 2] + arr[i - 1];
        if(arr[i]<number){
            count++;
        }else if(arr[i]===number){
            return console.log("O numero " +  number + " está contido na sequencia fibonnaci")
        }else{
            return console.log("O numero não está contido na sequencia Fibonnaci")
        }
    }
}
sequenciaFibonacci(144);