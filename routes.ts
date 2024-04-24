import express from 'express';
const router = express.Router();

router.get('/', function(req, res) {
  res.status(200).send('Hello World!');
});

router.get('/about', function(req, res) {
  res.send('About Us');
}); 

export default router;  