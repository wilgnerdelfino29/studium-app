class Patterns {
  static email = /\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/;
  static username = /^([A-Za-z0-9]|[@.+-_]){4,25}$/;
}

export default class Validators {
  static isEmail = (str) => Patterns.email.test(str);
  static isUsername = (str) => Patterns.username.test(str);
  static isPassword = (str) => str.length >= 6 && str.length <= 30;
}
