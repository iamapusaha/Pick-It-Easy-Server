const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
app.get('/', (req, res) => {
    res.send('Pick It Easy is running now!')
})
app.listen(port, () => {
    console.log(`Pick It Easy listing on port ${port}`);
})