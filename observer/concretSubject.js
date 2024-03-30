import Subject from "./subject.js";

class ConcreteSubject extends Subject {
  constructor() {
    super();
  }
  setNew(status) {
    console.log("setNew")
    this.notify(status);
  }
}

export default ConcreteSubject;