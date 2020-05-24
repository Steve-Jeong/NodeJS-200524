const express = require("express"); 
const app = express(); 
 
app.get("/", (req, res) => res.send('Hello NODEJS World!\nMy name is Steve Jeong\nGod help me make daily bread program\n')); 

app.listen(3000, () => { 
  console.log('Example app listening on port 3000!'); 
}); 

