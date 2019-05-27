class Person {
  private id: number;
  private name: string;
  constructor(id: number, name: string) {
    this.id = id;
    this.name = name;
  }

  getId() {
    return this.id;
  }
  getName() {
    return this.name;
  }
}
export class Student extends Person {
  private score: number;
  buildScore(score: number = 0) {
    this.score = score;
    return this;
  }
  toString() {
    return `Student[id: ${super.getId()}, name: ${super.getName()}, score: ${
      this.score
    }]`;
  }
}
