const express = require('express');
const app = express();

// port
const PORT = 3000;

// route ya homepage
app.get('/', (req, res) => {
    res.send('Muraho! Server iri gukora neza 🚀');
});

// tangiza server
app.listen(PORT, () => {
    console.log(`Server iri kuri http://localhost:${PORT}`);
});