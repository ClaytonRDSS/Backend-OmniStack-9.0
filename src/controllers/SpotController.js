const Spot = require('../models/Spot');
const User = require('../models/User');

module.exports = {

    async index(req, res) {
        const { tech } = req.query;

        const spots = await Spot.find({ techs: tech });

        return res.json(spots);
    },

    async store(req, res) {

        const { filename } = req.file;
        const { company, techs, price } = req.body;
        const { user_id } = req.headers;

        const user = await User.findById();

        // if(!user) {
        //     return res.status(400).json({error: 'User does not exists'});
        // }

        const spot = await Spot.create({
            user: user_id,
            thumbnail: filename,
            company,
            //criar em forma de array no banco
            techs: techs.split(',').map(tech => tech.trim()),// separar por virgula e tirar os espacos
            price
        })

        return res.json(spot);
    }
}