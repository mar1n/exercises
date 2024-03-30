import ConcreteSubject from "./concretSubject.js";
import ConcreteObserver from "./concreteObservers.js"
import { userListener, warehouseListener, courierListener } from "./listeners.js";

const test = new ConcreteSubject(userListener);
console.log('test', test);
const observer1 = new ConcreteObserver(userListener);
const observer2 = new ConcreteObserver(warehouseListener);
const observer3 = new ConcreteObserver(courierListener);
test.addObserver(observer1);
test.addObserver(observer2);
test.addObserver(observer3);
test.setNew('NEW');
console.log('test addObserver', test);

