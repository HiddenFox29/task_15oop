
function Machine(power) { // родительский класс
    this.__power = power; // приватный метод класса
    this.__enabled = false;
}
    Machine.prototype.enable = function () { // публичный метод
        console.log('Machine enabled');
        this.__enabled = true;
    };

    Machine.prototype.disable = function () {
        console.log('Machine disabled');
        this.__enabled = false;
    };
