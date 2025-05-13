// my-main-app/index.js
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// serve your HTML on /
app.get('/', (req, res) => {
  res.send('<p>Hello !!!!!!!!!!!!! 🙂🙂🙂🙂🙂🙂🙂🙂🙂</p>');
});

app.listen(port, () =>
  console.log(`Listening on port ${port}`)
);
