class FormatError extends SyntaxError {
    constructor(message) {
      super(message);
      this.name = "FormatError";
    }
}