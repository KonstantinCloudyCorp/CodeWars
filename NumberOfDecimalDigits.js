function digits(n) {
    let arr = String(n).split('');
    let amount = 0;
    for(i=0; i< arr.length; i++){
        amount+=1
    }
    return amount
}