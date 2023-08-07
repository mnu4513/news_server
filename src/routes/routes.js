const express = require('express');
const router = express.Router();

const { getAllNews } = require('../controllers/newsController');
router.get('/get-all-news/:newsType/:language/:search/:sortBy/:page', getAllNews);

router.all('/*', function (req, res) {
    res.status(404).send({status: false, message: 'Page not found'});
});

module.exports = router;