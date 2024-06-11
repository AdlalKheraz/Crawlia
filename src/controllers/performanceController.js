const axios = require('axios');
const cheerio = require('cheerio');
const sslChecker = require('ssl-checker');

const testPerformance = async (req, res) => {
  const { url } = req.body;
  const urlObj = new URL(url);
  const hostname = urlObj.hostname;

  try {
    const start = Date.now();
    const response = await axios.get(url); 
    const ttfb = Date.now() - start; 

    const $ = cheerio.load(response.data); 
    const seoAttributes = {
      metaDescription: $('meta[name="description"]').attr('content') || 'pas de description', 
      h1: $('h1').length, 
      h2: $('h2').length, 
      imagesWithoutAlt: $('img:not([alt])').length, 
      div: $('div').length, 
      p: $('p').length, 
    };

    const deadLinks = [];
    const links = $('a[href]');
    for (let i = 0; i < links.length; i++) {
      const link = links[i];
      try {
        await axios.get($(link).attr('href')); 
      } catch (error) {
        if (error.response && error.response.status === 404) {
          deadLinks.push($(link).attr('href')); 
        }
      }
    }
    const sslInfo = await sslChecker(hostname);

    res.render('report', { ttfb, seoAttributes, deadLinks, sslInfo }); 
  } catch (error) {
    res.status(500).render('error'); 
  }
};

module.exports = { testPerformance };
