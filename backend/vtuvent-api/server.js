const express = require('express');

const app = express();


//routes
app.get('/', (req, res) => {
    res.send('Hello World');
    })

s

















app.listen(3000, () => {
  console.log('Server is running on port 3000');
});