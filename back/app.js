const express = require('express');
const port = process.env.PORT || 8080;
const cors = require('cors');
const app = express();

app.use(express.json());
app.use(cors());

const users = [];
const massages = [];

app.post('/connect', (req, res, next)=>{
    if(req.body){
    users.push(req.body.user);
    }
    res.send('connected');
})

app.put('/connect', (req, res, next)=>{
    if(req.body){
    users.splice(users.indexOf(req.body.user), 1);
    }
    res.send('disconnected');
})

app.put('/massage', (req, res, nexr)=>{
    if(req.body){
    massages.push(req.body);
    }
    res.send('sent');
})

app.get('/messages', (req, res, next)=>{
    res.set({
        "Content-Type": "text/event-stream",
        "Cache-Control": "no-cache",
        Connection: "keep-alive",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Headers":
          "Origin, X-Requested-With, Content-Type, Accept",
      })
    
      setInterval(() => {
        res.write(`data: ${JSON.stringify(massages)}\n\n`)
      }, 2000)
})

app.get('/users', (req, res, next)=>{
    res.set({
        "Content-Type": "text/event-stream",
        "Cache-Control": "no-cache",
        Connection: "keep-alive",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Headers":
          "Origin, X-Requested-With, Content-Type, Accept",
      })
      req.on('close', ()=>{users.splice(users.indexOf(req.header('username')), 1)})
      setInterval(() => {
        res.write(`data: ${JSON.stringify(users)}\n\n`)
      }, 2000)
})

app.listen(port, () => {
    console.log(`app listening at http://localhost:${port}`)
  });