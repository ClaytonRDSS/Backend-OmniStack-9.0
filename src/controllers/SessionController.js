// metodos {
//index = listar todos
//show = lista um especifico
//store = criar uma Sessão
//update = Atualizar uma Sessão
//destroy = Deletar uma Sessão
//}

const User = require('../models/User');

module.exports = {
    async store(req, res) {
        const { email } = req.body;

        //se exitir um usuario informado só retorna. senão cria.
        let user = await User.findOne({ email });

        if(!user) {
            user = await User.create({ email });
        }
         //const user = await User.create({ email })

         return res.json(user);
    }
};