import io from "socket.io-client";
const PORT = 5050;
const SERVER = "linez.kz";
const socket = io("http://localhost:5050");
export default socket;
