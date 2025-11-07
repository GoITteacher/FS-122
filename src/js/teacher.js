export class Teacher {
  constructor(name, age, city, country) {
    this.name = name;
    this.age = age;
    this.city = city;
    this.country = country;
  }

  showName() {
    console.log(this.name);
  }
  showAge() {
    console.log(this.age);
  }
  showCity() {
    console.log(this.city);
  }
  showCountry() {
    console.log(this.country);
  }
}
