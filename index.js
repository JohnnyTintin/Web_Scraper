const PORT = 8000;
const axios = require("axios");
const cheerio = require("cheerio");
const { response } = require("express");
const express = require("express");

const app = express();

const url = "https://www.sabi.co.za/approved_designers.html";

axios(url)
	.then((response) => {
		const html = response.data;
		const $ = cheerio.load(html);
		const articles = [];
		$("tr", html).each(function () {
			const title = $(this).text();
			// const url = $(this).find("td").attr("href");
			articles.push({ title });
		});
		console.log(articles);
	})
	.catch((err) => console.log(err));

app.listen(PORT, () => console.log(`server running on PORT ${PORT}`));
