const express = require('express');
const routes = express.Router();
const crypto = require('crypto');
const connection = require('./database/connection');

routes.post('/ongs', async(request, response) => {
    try {
        const { name, email, whatsapp, city, uf } = request.body;

        const id = crypto.randomBytes(4).toString('HEX');

        console.log(id, name, email, whatsapp, city, uf);

        await connection('ongs').insert({
            id,
            name,
            email,
            whatsapp,
            city,
            uf
        });

        return response.json({ id });
    } catch (err) {
        console.log(err)
    }
});

module.exports = routes;