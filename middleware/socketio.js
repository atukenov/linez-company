module.exports = (io, socket) => {
  console.log("User connected");
  socket.on("set nickname", (user) => {
    socket.nickname = user;
    console.log(socket.nickname);
  });
  console.log(io.engine.clientsCount);

  socket.on("newMessage", (message) => {
    console.log(message);
    socket.emit("receiveMessage", message);
  });

  socket.on("disconnect", () => {
    console.log("User disconnected");
  });
};
