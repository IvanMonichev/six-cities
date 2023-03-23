export default class ApiToken {
  private static _name = 'six-cities-auth-token';

  static get() {
    const token = localStorage.getItem(this._name);
    return token ?? '';
  }

  static save(token: string) {
    localStorage.setItem(this._name, token);
  }

  static drop() {
    localStorage.removeItem(this._name);
  }
}
