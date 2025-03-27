class LocalData<Type> {
  readonly key: string

  constructor(key: string) {
    this.key = key
  }

  set(value: Array<Type>) {
    localStorage.setItem(this.key, JSON.stringify(value));
  }

  get(): Array<Type> {
    const stored = localStorage.getItem(this.key);
    return stored === null ? [] : JSON.parse(stored);
  }
}

export default LocalData