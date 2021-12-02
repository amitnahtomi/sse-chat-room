const express = require('express');
const port = process.env.PORT || 8080;
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

const users = [];
const massages = [];

app.post('/connect', (req, res, next)=>{
    users.push(req.body.user);
    res.redirect('http://localhost:8080/users');
})

app.put('/massage', (req, res, nexr)=>{
    massages.push(req.body.massage);
    res.redirect('http://localhost:8080/massages');
})

app.get('/massage', (req, res, next)=>{
    res.writeHead(200, {
        "Content-Type": "text/event-stream",
      });
      res.write(`data: ${JSON.stringify(massages)}`);
      res.end();
})

app.use('/users', (req, res, next)=>{
    res.writeHead(200, {
        "Content-Type": "text/event-stream",
    });
    res.write(`data: ${JSON.stringify(users)}`);
    res.end();
})

app.listen(port, () => {
    console.log(`app listening at http://localhost:${port}`)
  });