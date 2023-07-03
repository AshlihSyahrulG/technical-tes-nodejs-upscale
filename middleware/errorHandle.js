const error = async (err, req, res, next) => {
    console.error(err)
    if(err.name == 'SequelizeValidationError' || err.name == "SequelizeUniqueConstraintError"){
        const msg = err.errors[0].message
        res.status(400).json({
            msg
        })
    } else {
        console.log(err)
        res.status(500).json({
            msg : "Internal server error"
        })
    }
}

module.exports = error