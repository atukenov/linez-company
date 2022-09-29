import io from "socket.io-client";
const PORT = 5050;
const SERVER = "http://linez.kz";
const socket = io(SERVER + ":5050");
export default socket;
