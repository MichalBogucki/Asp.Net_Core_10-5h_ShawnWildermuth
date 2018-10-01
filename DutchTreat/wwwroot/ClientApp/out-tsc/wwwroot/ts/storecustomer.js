var StoreCustomer = /** @class */ (function () {
    function StoreCustomer(firstname, lastName) {
        this.firstname = firstname;
        this.lastName = lastName;
        this.visits = 0;
    }
    StoreCustomer.prototype.showName = function () {
        alert(this.firstname + " " + this.lastName);
    };
    Object.defineProperty(StoreCustomer.prototype, "name", {
        get: function () {
            return this.ourName;
        },
        set: function (val) {
            this.ourName = val;
        },
        enumerable: true,
        configurable: true
    });
    return StoreCustomer;
}());
//# sourceMappingURL=storecustomer.js.map