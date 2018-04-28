const router = require('express').Router();
const Gig = require('../models/gigs');
const User = require('../models/user');

const fee = 3;
const saldo = 0;

router.get('/checkout/single_package/:id', (req, res, next) => {
	Gig.findOne({ _id: req.params.id }, function(err,gig) {
		var totalPrice = gig.price + fee;
		var desconto = saldo - totalPrice;
		req.session.gig = gig;
		req.session.price = totalPrice;
		req.session.desconto = desconto;
		req.session.fee = fee;
		res.render('checkout/single_package', { gig: gig, totalPrice: totalPrice, desconto: desconto, fee: fee });
	});
});



module.exports =  router;