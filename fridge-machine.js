function FrigeMachine(power) { // класс наследник от Machine
        Machine.call(this, power); // наследуемся из класса родителя

        let self = this;
        let foodList = [];

        this.addFood = function(food) { // добавлет еду
            if(this._enabled){
                if(food){
                    if(foodList.length < power/100) {
                        foodList.push(food);
                        return this.getFoodList();
                    } else {
                        throw new Error('ошибка! вы привысили макс количество подуктов в холодильнике');
                    }
                } else {
                    throw new Error('Добавьте продукт');
                }
            } else {
                throw new Error('ошибка! нельзя ложиль еду в отключенный холодильник');
            }
        };

        this.getFoodList = function() { // список еды
            if(this._enabled){
                return foodList.slice();
            } else {
                throw new Error('ошибка! нельзя получать список еды из отключенного холодильника')
            }
        };

        this.takeFood = function(food){ // забераем еду
            if(this._enabled){
                let indexFood = foodList.indexOf(food);
                if(foodList[indexFood] === food) {
                    foodList.splice(indexFood, 1);
                    return this.getFoodList();
                } else {
                    throw new Error('ошибка! такого продукта в холодильника нет');
                }
            } else {
                throw new Error('ошибка! нельзя забирать еду из отключенного холодильника');
            }
        };
};