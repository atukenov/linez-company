module.exports = (io, socket) => {
  console.log("User connected");
  socket.on("set nickname", (user) => {
    socket.nickname = user;
    console.log(socket.nickname);
  });
  console.log(io.engine.clientsCount);

  socket.on("newMessage", (message) => {
    socket.broadcast.emit("receiveMessage", message);
  });
  socket.on("typing", (hidden) => {
    console.log("here");
    socket.broadcast.emit("isTyping", hidden);
  });

  socket.on("disconnect", () => {
    console.log("User disconnected");
  });
};
