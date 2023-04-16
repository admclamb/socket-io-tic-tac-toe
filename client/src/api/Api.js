import axios from "axios";

export class Api {
  instance;
  constructor() {
    const baseURL = import.meta.env.VITE_BASE_URL;
    const headers = new Headers();
    headers.append("Content-Type", "application/json");
    if (!baseURL) {
      throw new Error("A base url is required");
    }
    this.instance = axios.create({
      baseURL,
      timeout: 1000,
      headers,
    });
  }

  createRoom(user) {
    console.log(user);
    return this.instance.post("/games");
  }
}
