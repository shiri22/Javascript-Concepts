class ATM{
    constructor(withdraw){
        this.balance=1000;
        this.withdraw = withdraw;
    }
    getAmount(){
        let minimum=500;
        if((this.balance-this.withdraw)>= minimum){
            console.log("Transaction Successfull")
        }
        else {
            console.log("Transaction failed")
        }
    }
}
const amount = new ATM(500);
amount.getAmount();