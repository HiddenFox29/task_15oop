class FrigeMachine extends Machine { // наследуемся из класса родителя с помощью ключевого слова extends
    constructor(power) { // конструктор принемае параметр родительского класса
        // ключевой метод super() для наследования конструктора родительсеого класса
        super (power); // принемает параметр родительского класса
        this.__foodList = []; // приватная переменная стиль prototype ('__')
    }
    // создание методов класса с помощью протоатипов
    addFood(food) {
        if (this._enabled) {
            if (food) {
                if (this.__foodList.length < this._power / 100) {
                    this.__foodList.push(food);
                    // геттер вызывается как свойство, а не как метод класса, поэтому указывается без скобок this.foodList()
                    return this.foodList;
                }
                else {
                    // метод throw вызывает исключения, выводя, сообщение об ошибке
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

    get foodList() {  // приставка get/set указывает на создание геттера и сеттера
        if (this._enabled) {
            return this.__foodList.slice(); // метод  копирования массива
        }
        else {
            throw new Error('ошибка! нельзя получать список еды из отключенного холодильника');
        }
    }

    takeFood(food) {
        if (this._enabled) {
            let indexFood = this.__foodList.indexOf(food);
            if (this.__foodList[indexFood] === food) {
                this.__foodList.splice(indexFood, 1); // метод удаления элементов из массива по индексу(начало, конец) среза
                return this.foodList;
            }
            else {
                throw new Error('ошибка! такого продукта в холодильника нет');
            }
        }
        else {
            throw new Error('ошибка! нельзя забирать еду из отключенного холодильника');
        }
    }
};