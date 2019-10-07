const express = require('express');

const app = express();

app.get('/random/:min/:max', function(req,res) {
    const min = req.params.min;
    const max = req.params.max;
    console.log(`MIN ${min} and MAX ${max}`);
    
    if (isNaN(min) || isNaN(max)){
        res.status(400);
        res.json({
            error: 'Bad Request'
        });
        return;
    }

    const random = Math.random()*(max-min) + min;

    res.status(200).json({
        number: random
    });
});

app.get("/", function(req,res) {
    res.status(400).json({
        error: 'Bad Request'
    });
});

app.listen(3000, function() {
    console.log('Server started');
});