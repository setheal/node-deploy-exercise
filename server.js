const express = require('express');
const repositoriesRoutes = require('./routes/repositoriesRoutes');

const app = express();

const port = process.env.PORT || 8000;

app.use('/repositories', repositoriesRoutes);

app.listen(port, () => console.log(`Server started on port ${port}`));

module.exports = app;
