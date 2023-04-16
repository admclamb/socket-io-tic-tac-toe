const { PORT = 5000 } = process.env;
const app = require("./app");
const http = require("http");
const { Server } = require("socket.io");
const server = http.createServer(app);
const io = new Server(server);

io.on("connection", (socket) => {
  console.log("a user connected");
});

server.listen(PORT, linstener);
function linstener() {
  console.log(`🚀Listening on Port ${PORT}🚀`);
}
