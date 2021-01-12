require("dotenv").config({ debug: process.env.DEBUG });
const axios = require("axios");
const { HERO_API_BASE_URL, HERO_API_TOKEN } = process.env;

const instance = axios.create({
  baseURL: `${HERO_API_BASE_URL}/${HERO_API_TOKEN}/`,
  timeout: 6000,
});

module.exports = instance;
