const express = require('express');
const router = express.Router();
const mailing = require('./send_mail');

const Record = require('../models/Record');

router.get('/', async (req, res) => {
    res.json(await Record.find());
});

router.get('/:id', async (req, res) => {
    res.json(await Record.findOne({ index: req.params.id }));
});

router.post('/', async (req, res) => {
    let index = await Record.find();
    index = index[index.length - 1].index + 1 || 1;
    let data = {...req.body, index };
    const record = new Record(data);
    await record.save();
    if (require('../config').mailTarget.length !== 0) {
      mailing(req);
    }
    res.json({state: 'success'});
});

router.put('/:id', async (req, res) => {
    await Record.findByIdAndUpdate(req.params.id, req.body);
    res.json({state: 'updated'});
});

router.delete('/:id', async (req, res) => {
    await Record.findByIdAndRemove(req.params.id);
    res.json({state: 'deleted'});
});

module.exports = router;
