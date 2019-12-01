class FrigeMachine {
    constructor(power) {
        Machine.call(this, power); // наследуемся из класса родителя
        this.__foodList = []; // приватная переменная стиль prototype ('__')
    }
    // создание методов класса с помощью протоатипов
    addFood(food) {
        if (this.__enabled) {
            if (food) {
                if (this.__foodList.length < this._power / 100) {
                    this.__foodList.push(food);
                    return this.getFoodList();
                }
                else {
                    throw new Error('ошибка! вы привысили макс количество подуктов в холодильнике');
                }
            }
            else {
                throw new Error('Добавьте продукт');
            }
        }
        else {
            throw new Error('ошибка! нельзя ложиль еду в отключенный холодильник');
        }
    }
    getFoodList() {
        if (this._enabled) {
            return this.__foodList.slice();
        }
        else {
            throw new Error('ошибка! нельзя получать список еды из отключенного холодильника');
        }
    }
    takeFood(food) {
        if (this._enabled) {
            let indexFood = this.__foodList.indexOf(food);
            if (this.__foodList[indexFood] === food) {
                this.__foodList.splice(indexFood, 1);
                return this.getFoodList();
            }
            else {
                throw new Error('ошибка! такого продукта в холодильника нет');
            }
        }
        else {
            throw new Error('ошибка! нельзя забирать еду из отключенного холодильника');
        }
    }
}
;

FrigeMachine.prototype = Object.create(Machine.prototype); // наследование родителя через протатип




