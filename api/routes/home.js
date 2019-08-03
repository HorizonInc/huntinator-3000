
module.exports = (app) => {
    app.get('/', (req, res) => {
        res.status(200).json({
            version: 1.0,
            message: "Ayyy the first route works!!"
        });
    });
}