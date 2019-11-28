
function Machine(power) { // родительский класс
    this._power = power; // приватный метод класса
    this._enabled = false;
};
    Machine.prototype.enable = function () { // публичный метод
        console.log('Machine enabled');
        this._enabled = true;
    };

    Machine.prototype.disable = function () {
        console.log('Machine disabled');
        this._enabled = false;
    };
