export default class ErrorRepository {
    constructor() {
      this.errors = new Map([
        [403, '403 Access denied'],
        [404, '404 File not found'],
        [500, '500 Internal server error'],
        [502, '502 Bad Gataway'],
        [503, '503 Service temporarily unavailable'],
      ]);
    }
  
    translate(code) {
      if (this.errors.has(code)) {
        return this.errors.get(code);
      }
      return 'Unknown error';
    }
  }