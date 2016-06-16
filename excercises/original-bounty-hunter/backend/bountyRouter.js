var express = require("express");
var bountyRouter = express.Router();
var Bounty = require("./model/bounty.js");

var bountyList = [
    {
        "firstName": "Darth",
        "lastName": "Revan",
        "living": true,
        "bounty": 1000000,
        "type": "Sith"
    }
];

bountyRouter.get('/bounty', function (req, res) {
    Bounty.find(function (err, BountyList) {
        if (err) throw err;
        res.send(BountyList);
    });
});

bountyRouter.post('/bounty', function (req, res) {
    console.log(req.body);
    var newBounty = new Bounty(req.body);
    newBounty.save(function (err, bounty) {
        if (err) throw err;
        res.send(bounty);
    });
});

bountyRouter.put('/bounty/:bountyId', function (req, res) {
    Bounty.findByIdAndUpdate(req.params.bountyId, req.body, {new: true}, function (err, bounty) {
        if (err) throw err;
        res.send(bounty);
    });
});

bountyRouter.delete('/bounty/:bountyId', function (req, res) {
    Bounty.findByIdAndRemove(req.params.bountyId, function (err, bounty) {
        if (err) throw err;
        Bounty.find(function (err, BountyList) {
            if (err) throw err;
            res.send(BountyList);
        });
    });
})
module.exports = bountyRouter;