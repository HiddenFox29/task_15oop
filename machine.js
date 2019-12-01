
class Machine {
    constructor(power) {
        this._power = power; // приватный метод класса
        this._enabled = false;
    }
    enable() {
        console.log('Machine enabled');
        this._enabled = true;
    }
    disable() {
        console.log('Machine disabled');
        this._enabled = false;
    }
};


