
class CoffeMachine {
    constructor(power) {
        Machine.call(this, power); // наследуемый класс
        let waterAmount = 0; //приватная переменная
        const CAPACITY = 1000; // константа для определения постоянной велечины объема кофе машины
        // сеттер
        this.setWaterAmount = function (amount) {
            if (waterAmount < 0) {
                throw new Error('Вода должна быть больше чем 0'); // throw вызывает сообщение о ошибке
            }
            if (CAPACITY > 1000) {
                throw new Error('Water is greater that machine capacity');
            }
            waterAmount = amount;
        };
        // гетер
        this.getWaterAmount = function () {
            return waterAmount / 1000; // возвращаем колличество воды в литрах
        };
        let self = this; // присваеваем контекст класса  переменной для использования в нутриних облостях методов
        // публичный метод класса для вычисления времени закипания воды в зависимости от колличества воды заданных пользователем
        function getBoilTime() {
            return 4200 * waterAmount * 80 / self._power;
        }
        this.run = function () {
            if (this._enabled) {
                console.log('coffee will be ready ' + getBoilTime / 1000 / 100 + ' seconds');
                setTimeout(function () {
                    console.log('Кофе готов');
                    self.disable();
                }, getBoilTime());
            }
            else {
                throw new Error('Machine is not enabled');
            }
        };
        let parentEnable = this.enable;
        this.enable = function () {
            parentEnable.call(this);
            this.run();
        };
    }
}
;