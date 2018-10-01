class StoreCustomer {

    constructor(private firstname:string, private lastName:string) {
    }

    public visits:number = 0;
    private ourName: string;

    public showName() {
        alert(this.firstname + " " + this.lastName);
    }

    set name(val) {
        this.ourName = val;
    }

    get name() {
        return this.ourName;
    }


}
