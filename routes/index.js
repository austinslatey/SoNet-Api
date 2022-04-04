const router = require('express').Router();

const apiRoutes = require('./api');

// add prefix `/api` to all api routes imported from `api` directory
router.use('/api', apiRoutes);


router.use((req, res) => {
  res.status(404).send('<h1>Check Your Routes!!!!</h1>');
});

module.exports = router;