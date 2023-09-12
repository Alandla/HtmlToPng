const express = require('express');
const cors = require('cors');
const imageService = require('./src/service/imageService');

const app = express();
const PORT = 3001;

app.use(cors());
app.use(express.json());
app.use('/', imageService);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
