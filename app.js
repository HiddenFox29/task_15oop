document.addEventListener('DOMContentLoaded', function(){
let coffeeMachine = new CoffeMachine(100);

if(coffeeMachine.getWaterAmount() <= 0) {
    coffeeMachine.setWaterAmount(1000);
}

coffeeMachine.enable();
});