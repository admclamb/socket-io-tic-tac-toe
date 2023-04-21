const { PORT = 5000 } = process.env;
const app = require("./app");
const http = require("http");
const server = http.createServer(app);
const io = require("socket.io")(server, { cors: { origin: "*" } });

io.on("connection", (socket) => {
  console.log("a user connected");
  socket.on("disconnect", () => {
    console.log("User disconnected");
  });
});

server.listen(PORT, linstener);
function linstener() {
  console.log(`🚀Listening on Port ${PORT}🚀`);
}
