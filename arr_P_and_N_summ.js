function countPositivesSumNegatives(input) {
    let amount = 0;
    let sum = 0;
    let arr = [];
    if(input == null || input.length ==0 ){
        return [];
    } else {
        for(i=0; i < input.length; i++){
            if (input[i] > 0){
                amount +=1
            } else{
            sum += input[i]
            }
        }
        arr.push(amount, sum)
        return arr
    }    
}