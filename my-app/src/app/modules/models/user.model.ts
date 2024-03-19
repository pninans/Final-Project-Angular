export class User {
    code: number;
    name: string;
    address: string;
    mail: string;
    password: string;
    isInstructor: boolean;
    constructor(code: number, name: string, address: string, mail: string, password: string, isInstructor: boolean) {
      this.code = code;
      this.name = name;
      this.address = address;
      this.mail = mail;
      this.password = password;
      this.isInstructor = isInstructor;
    }
  }
  