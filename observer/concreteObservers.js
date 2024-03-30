import Observer from "./observer.js";

class ConcreteObserver extends Observer {
  constructor(element) {
    console.log("ConcreteObject Element", element);
    super();
    this.element = element;
  }

  update(value) {
    console.log('value', value);
    console.log('this.element', this.element(value));
    this.element(value);
  }
}

export default ConcreteObserver;