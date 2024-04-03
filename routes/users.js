const express = require('express');
const router = express.Router();
const scrapeTitles = require('../handlers/webScrapper'); // Import the exported function

/* GET users listing with scraping functionality. */
router.get('/scrapper', async (req, res, next) => {
  try {
    const titles = await scrapeTitles(); // Call the scrapeTitles function
    res.json({ titles }); // Send the scraped titles as JSON response
  } catch (error) {
    console.error(error); // Log any errors during scraping
    res.status(500).send('Error scraping titles.'); // Send error response
  }
}); 

module.exports = router;