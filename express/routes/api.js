const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send([
        {name: "Jhon Doe"},
        {name: "Pedro Perez"},
        {name: "Emma Watson"},
        {name: "Emma Stone"}
    ]);
});

module.exports = router;
