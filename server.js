const express = require('express');
const app = express();
const http = require('http').createServer(app);
// var io = require('socket.io')(http);
const io = require('socket.io')(http, {
      cors: {
            origin: "https://whiteboard-for-inno.herokuapp.com/",
            allowedHeaders: ["*"],
            credentials: true,
      }
    });

io.on('connection', (socket)=> {
      console.log('User Online');
      socket.on('join-room',room=>{
            console.log(`room joined ${room}`)
            socket.join(room);
      })
      socket.on('canvas-data', (data,room)=> {
            console.log(`${room}`)
            // socket.join(room);
            if(room != ""){
                  console.log("room executed")
                  io.to(room).emit('canvas-data', data);
            }else{
                  console.log("room don't executed")
                  socket.broadcast.emit('canvas-data', data);
            }   
      })
})

const server_port =  process.env.PORT || 5000;
if (process.env.NODE_ENV == "production") {
      app.use(express.static("client/build"));
    }
http.listen(server_port, () => {
    console.log("Started on : "+ server_port);
})