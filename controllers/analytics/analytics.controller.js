var sequelize = require('../../config/db');
const Click = require('../../models/Click');

exports.trackClicks = async function (req, res) {
    try {
        const { ip, org, city, region, country } = req.body;
        const newClick = await Click.create({
            ip_address: ip,
            isp: org,
            city: city,
            state: region,
            country: country,
            create_date: new Date()
        });
        res.status(201).json(newClick);
    } catch (error) {
        console.error('Error inserting data:', error);
        res.status(500).json({ error: error.message });
    }
}