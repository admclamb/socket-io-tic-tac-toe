const asyncErrorBoundary = require("../errors/asyncErrorBoundary");
const { Server } = require("socket.io");
const service = require("./game.service");

function create(req, res, next) {
  res.status(200).json({ data: "HELLO" });
}

module.exports = {
  create: [create],
};
