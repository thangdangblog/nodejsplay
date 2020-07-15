const express =  require('express');
const User =  require('../model/User');
const mongoose = require('mongoose');

const app = express();

app.use(express.json());

app.post('/createuser',(req,res) => {
  const newUser = new User(req.body);

  newUser.save().then(result => {
    console.log(result);
    return res.send(result);
  }).catch(e => {
    console.log(e);
    return res.send(e.errors);
  });
});

app.post("/updateOne/:id", async (req, res) => {
    try {
      const user = await User.findOne({
          _id: new mongoose.Types.ObjectId(req.params.id),
      });
      res.send(user);
    } catch (error) {
      res.send(error);
    }
    
    
});

app.get('/play', async (req,res) => {
  const user = await User.findOne({
    email: 'thangdangblog@gmail.com'
  });
  
})


app.listen(3000, () => {
  console.log("Running on port: 3000");
});