class MonolithError extends Error {
  public errors: Array<object>;
  public query: string;

  constructor(message: string, errors: Array<object>, query: string) {
    super(message);
    this.name = 'MonolithError';
    this.errors = errors;
    this.query = query;
  }
}

export default MonolithError;
