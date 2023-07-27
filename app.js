const express = require('express');
const app = express();
const port = 4000;

// Serve the static files (HTML, CSS, JS) from the public directory
app.use(express.static('public'));

// Serve the JSON data from a file (replace 'data.json' with your JSON file path)
app.get('/data', (req, res) => {
    const data = require('./data.json');
    res.json(data);
});

app.listen(port, () => console.log(`Server is running on http://localhost:${port}`));
