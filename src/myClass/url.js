export default class url {
  #api = null
  #method = null
  #options = {}
  #headers = {
    'Access-Control-Allow-Origin': '*',
    'Content-Type': 'application/json; charset=utf-8'
  }
  #mode = "cors"
  #body = {}

  constructor(api) {
    this.#api = api
  }
  noCors() {
    this.#mode = "no-cors"
    return this
  }
  delete() {
    this.#method = "DELETE"
    return this;
  }
  put(object) {
    this.#method = "PUT";
    this.#body = object;
    return this;
  }
  post(object) {
    this.#method = "POST"
    this.#body = object;
    return this
  }
  get() {
    this.#method = "GET"
    return this
  }
  async build() {
    this.#options = {
      method: this.#method,
      mode: this.#mode,
      headers: this.#headers
    }
    if (this.#method === "POST" || this.#method === "PUT") {
      this.#options.body = JSON.stringify(this.#body)
    }
    const response = await fetch(this.#api, this.#options);
    return await response
  }
}