import express from 'express';
import Link from '../models/Link';
import {Links} from '../types';

const linkRouter = express.Router();

linkRouter.get('/:shortUrl', async (req, res, next) => {
  try {
    const result = await Link.findOne({shortUrl: req.params.shortUrl});

    if (!result) {
      return res.status(404).send({error: 'No link found.'});
    }

    res.status(301).redirect(result.link);
  } catch (e) {
    return next(e);
  }
});

linkRouter.post('/', async (req, res, next) => {
  try {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';

    let id = "";

    for (let i = 0; i < characters.length; i++) {
      id += characters.charAt(Math.floor(Math.random() * characters.length));
    }

    const linkData: Links = {
      link: req.body.link,
      shortUrl: `${id}`
    }

    const link = new Link(linkData);
    await link.save();

    res.send(link);
  } catch (e) {
    return next(e);
  }
})

export default linkRouter