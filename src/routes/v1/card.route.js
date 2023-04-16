const express = require('express');
const validate = require('../../middlewares/validate');
const authValidation = require('../../validations/auth.validation');
const cardController = require('../../controllers/card.controller');

const router = express.Router();

router.post('/create', validate(authValidation.register), cardController.createCard);
router.get('/list', validate(authValidation.register), cardController.listCards);

module.exports = router;