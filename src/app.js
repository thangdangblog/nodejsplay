const express =  require('express');
const User =  require('../model/User');

const app = express();

app.use(express.json());

app.post('/createuser',(req,res) => {
  const newUser = new User(req.body);

  newUser.save().then(result => {
    console.log(result);
    return res.send(result);
  }).catch(e => {
    console.log(e);
    return res.send(e);
  });
});


app.listen(3000, () => {
  console.log("Running on port: 3000");
});