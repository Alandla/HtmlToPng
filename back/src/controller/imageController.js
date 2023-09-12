const puppeteer = require('puppeteer');
const fs = require('fs');

exports.generateImage = async (req, res) => {
    try {
        const html = req.body.html;
        console.log(html);

        const browser = await puppeteer.launch({ headless: 'new' });
        const page = await browser.newPage();
        
        await page.setContent(html);
        const content = await page.$("body");
        const imageBuffer = await content.screenshot({ omitBackground: true });

        await browser.close();
        res.status(200).set("Content-Type", "image/png").send(imageBuffer);
    } catch (error) {
        res.status(500).send({ message: "Erreur lors de la génération de l'image" });
    }
};