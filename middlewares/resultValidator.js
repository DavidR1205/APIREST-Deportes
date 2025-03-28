const { body, validationResult } = require('express-validator');

const validResult = [
    body('score')
        .isInt()
        .withMessage('Solo se permiten valores enteros'),

    body('ranking')
        .isFloat({ min: 0 }),

    body('statistic')
        .isFloat({ min: 0 }),


    (req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(422).json({ errors: errors.array() });
        }
        next();
    }
]
module.exports = validResult;