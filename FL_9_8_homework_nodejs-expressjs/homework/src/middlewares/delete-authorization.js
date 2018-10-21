let del = function (req, res, next) {
    if (req.headers.authorization !== 'X-Password qwerty') {
        res.status(401).send('Unauthorized');
    }
    next();
};

module.exports = del;