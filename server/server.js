const express = require('express');
const path = require('path');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.static(path.join(__dirname, 'assets')));
app.use('/product', (req, res) => {
    return res.sendFile(path.join(__dirname, './product.json'));
});

app.listen(3009, () => console.log('Product app is listening on port 3009...'));