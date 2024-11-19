import emailValidator from "email-validator"; //https://www.npmjs.com/package/email-validator
import passwordValidator from "password-validator"; //https://www.npmjs.com/package/password-validator

export function checkMail(email) {
  return emailValidator.validate(email);
}

export function checkPassword(password) {
  const schema = new passwordValidator();
  schema
    .is()
    .min(6)
    .is()
    .max(100)
    .has()
    .upperCase()
    .has()
    .lowercase()
    .has()
    .digit(1)
    .has()
    .not()
    .spaces();
  return schema.validate(password);
}
