export class InputCell {
  constructor(value) {
    this.value = value;
  }

  setValue(value) {
    this.value = value;
  }
}

export class ComputeCell {
  constructor(dependencies, compute) {
    this.dependencies = dependencies;
    this.compute = compute;
    this.callbacks = [];
  }

  addCallback(cb) {
    this.callbacks.push(cb);
  }

  removeCallback(cb) {
    this.callbacks.splice(this.callbacks.findIndex(cb), 1);
  }

  get value() {
    var result = this.compute(this.dependencies);
    this.callbacks.forEach(cb => cb.callback(result));
    return result;
  }
}

export class CallbackCell {
  constructor(compute) {
    this.values = [];
    this.callback = arg => {
      this.values.push(compute(arg));
    }
  }
}
