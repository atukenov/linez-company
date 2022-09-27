module.exports = (io, socket) => {
  socket.on("set nickname", (nickname) => {
    socket.nickname = nickname;
    console.log("User connected: ", nickname);
  });
  socket.on("disconnect", (reason) => {
    console.log(reason);
  });
  socket.on("example_message", function (msg) {
    console.log("Message: " + msg);
  });
};
