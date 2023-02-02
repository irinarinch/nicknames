export default class Validator {
  constructor(name) {
    this.name = name;
    if (this.name === '') {
      throw new Error('invalid name');
    }
  }

  validateUsername() {
    return /^(?![\d_-]+)([a-z_-]\d{0,3})*(?<![\d_-]+$)$/.test(this.name);
  }
}
