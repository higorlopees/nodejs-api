const app = require('./config/server');
const port = 3001;

app.listen(port, () => {
    console.log(`Listening on port ${port}`)
});