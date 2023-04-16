const httpStatus = require('http-status');
const { Card } = require('../models');
const ApiError = require('../utils/ApiError');

/**
 * Create a card
 * @param {Object} cardBody
 * @returns {Promise<Card>}
 */
const createCard = async (cardBody) => {
    if (await Card.DoesCardExist(cardBody.id)) {
        throw new ApiError(httpStatus.BAD_REQUEST, 'Card already exists');
    }
    return Card.create(cardBody);
};

/**
 * Query for users
 * @param {Object} options - Query options
 * @param {number} [options.limit] - Maximum number of results per page (default = 10)
 * @param {number} [options.page] - Current page (default = 1)
 * @returns {Promise<QueryResult>}
 */
const listCards = async (req) => {
    let { query } = req;
    const cards = await Card.find().skip(query.page).limit(query.limit);
    return cards;
};


module.exports = {
    createCard,
    listCards,
};