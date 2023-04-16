const httpStatus = require('http-status');
const catchAsync = require('../utils/catchAsync');
const { cardService } = require('../services');

const createCard = catchAsync(async (req, res) => {
    const card = await cardService.createCard(req.body);
    res.status(httpStatus.CREATED).send({ card });
});

const listCards = catchAsync(async (req, res) => {
    const cards = await cardService.listCards();
    res.send({ cards });
});

module.exports = {
    createCard,
    listCards
};
