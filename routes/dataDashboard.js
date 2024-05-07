const express = require('express');
const router = express.Router();
const scraperDashboard = require('../handlers/webScrapper');

router.get('/dataDashboard', async (req, res, next) => {
  try {
    const sales_summary = await scraperDashboard();
    res.json({ sales_summary }); 
  } catch (error) {
    console.error(error); 
    res.status(500).json({"Error":"Nos se pudieron obtener los valores , Intente en otro momento"});
  }
}); 

module.exports = router;