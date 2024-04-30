const sub = "sub"

export class Test {
  constructor({
    name
  }) {
    this.name = name
  }

  name() {
    console.log(this.name)
  }

}