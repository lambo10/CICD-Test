const app = require('./app');
const port = 3312;

app.listen(port, () => {
  console.log(`Webpage Hashtag Checker Microservice listening at http://localhost:${port}`);
});
