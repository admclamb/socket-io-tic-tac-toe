import { io } from "socket.io-client";

const URL = import.meta.env.VITE_SOCKET_URL;
if (!URL) {
  throw new Error("No url has been provided for socket");
}

export const socket = io(URL);
