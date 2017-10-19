const express = require('express'),
  { json } = require('body-parser'),
  port = 3000,
  app = express(),
  ctrl = require(`${__dirname}/controller`);

app.use(json());

app.post('/api/mentors', ctrl.create);
app.get('/api/mentors', ctrl.read);
app.put('/api/mentor/:name', ctrl.update);

app.listen(port, () => {
  console.log(`This is Dr Crane... I'm Listening @ port ${port}`);
});
