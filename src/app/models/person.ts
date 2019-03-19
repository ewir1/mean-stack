export class Person {
  _id: string;
  firstName: string;
  lastName: string;
  age: string;
  phone: string;
  position: string;
  facebook?: string;
  twitter?: string;
  linkedin?: string;

  constructor(
    _id = '',
    firstName = '',
    lastName = '',
    age = '',
    phone = '',
    position = '',
    facebook = '',
    twitter = '',
    linkedin = '',
  ) {
      this._id = _id;
      this.firstName = firstName;
      this.lastName = lastName;
      this.age = age;
      this.phone = phone;
      this.position = position;
      this.facebook = facebook;
      this.twitter = twitter;
      this.linkedin = linkedin;
  }
}
