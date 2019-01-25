const multiplier = {
    numbers: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    multiplyBy: 7,
    multiplyNumbers(){
        return this.numbers.map((number) => this.multiplyBy * number)
    }
};
console.log(multiplier.multiplyNumbers());