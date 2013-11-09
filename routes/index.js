
/*
 * GET home page.
 */

var Signature = require('../signature');

exports.index = function(req, res){
  Signature.count(function(err, count){
    Signature.find({}).sort('created').limit(10).exec(function(err, results){
      res.send({
        signed: false,
        signers: results,
        count: count
      });
    });
  });
};

exports.more = function(req, res){

  Signature.find().sort('created').skip(parseInt(req.query.skip || 0)).limit(20).exec(function(err, results){
    res.send({
      signers: results
    })
  });

};