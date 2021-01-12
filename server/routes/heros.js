const express = require("express");
const { get, first } = require("lodash");
const router = express.Router();
const apiClient = require("../services/apiClient");
const herosBase = require("../services/herosBase");

router.get("/history", (req, res) => {
  const { limit } = req.query;
  const data = limit ? herosBase.slice(0, limit) : herosBase;
  res.send({ success: true, data, totalCount: herosBase.length });
});

// practices prefer doing the fetchs with promises and not async/await on express
router.get("/search/:name", (req, res, next) => {
  const { name } = req.params || "";
  apiClient
    .get(`/search/${name}`)
    .then((response) => {
      const error = get(response, "data.error");
      if (error) {
        // Since api not supplied us with proper status code errors and indicative error, i assume that if we got an error on the response.data,
        // that means that no hero was found, errors of type 500 will go on catch
        // no error code supplied, im not getting into implementing the whole error handling solution here.
        return next({ error, status: 500, code: 0 });
      }
      const firstHero = get(response, "data.results[0]") || []; // null considered as a valid value for get, so im using || instead of _.get third argument.
      // validations here, return first hero matching the search, store on redis for fast cache
      res.send({ status: 200, data: firstHero }); // will be more fault tolerant soon

      // this is just a array singleton sharing the pervious searches, very simple
      herosBase.push(firstHero);
    })
    .catch((error) => {
      return next({ error, status: 500, code: 0 });
    });
});

module.exports = router;
