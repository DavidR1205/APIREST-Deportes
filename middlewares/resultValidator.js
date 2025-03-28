const { body, validationResult } = require('express-validator');

const validResult = [
    body('score')
        .isFloat(),

    body('ranking')
        .isString(),

    (req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(422).json({ errors: errors.array() });
        }
        next();
    }
]
module.exports = validResult;