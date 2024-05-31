const e = require('cors');
var sequelize = require('../../config/db');
const Click = require('../../models/Click');

exports.trackClicks = async function (req, res) {
    try {
        const { ip, org, city, region, country, fullscreen, action } = req.body;
        // check same ip if exists increase click counter else create new click
        const existingClick = await Click.findOne({ where: { ip_address: ip } });
        if (existingClick) {
            existingClick.clicks++;
            existingClick.fullscreen = fullscreen ? 1 : 0;
            existingClick.action = action;
            await existingClick.save();
            return res.status(200).json(existingClick);
        } else {
            console.log("new click");
            const newClick = await Click.create({
                ip_address: ip,
                isp: org,
                city: city,
                state: region,
                country: country,
                clicks: 1,
                fullscreen: fullscreen ? 1 : 0,
                action: action || "NA",
                create_date: new Date()
            });
            res.status(201).json(newClick);
        }

    } catch (error) {
        console.error('Error inserting data:', error);
        res.status(500).json({ error: error.message });
    }
}

exports.getClicks = function (req, res) {
    Click.findAll().then(clicks => {
        res.status(200).json(clicks);
    }).catch(err => {
        res.status(500).json({ error: err.message });
    })
}

exports.getProxy = async function (req, res) {
    const ip = req.params.ip;
    try {
        const response = await fetch(`http://ip-api.com/json/${ip}`);
        const data = await response.json();
        console.log(data);
        data.ip = data.query;
        data.org = data.isp;
        data.region = data.regionName;
        data.country = data.countryCode;
        res.json(data);
    } catch (error) {
        res.status(500).send('Error fetching data');
    }
}