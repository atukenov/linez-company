import io from "socket.io-client";
const PORT = 5050;
const SERVER = "http://linez.kz";
const local = "http://localhost:5050";
const socket = io(local);
export default socket;
