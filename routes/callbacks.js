exports.error = function(res, err, msg) {
    res.status(500).json({
        error: msg + "::\t" + err,
    });
}