const axios = require("axios");
const newsApi = process.env.NEWS_API;
const apiKey = process.env.API_KEY;

const getAllNews = async function (req, res) {
  try {
    let { search, sortBy, newsType, page, language } = req.params;

    console.log("invoked", search, sortBy, newsType, page, language);

    if (!sortBy) {
      sortBy = "publishedAt";
    }
    if (!newsType) {
      newsType = "everything";
    }
    if (!page) {
      page = 1;
    }
    if (!language) {
      language = "en";
    }

    const allNews = await axios.get(
      `${newsApi}/${newsType}?language=${language}&serchIn=title&q=${search}&sortBy=${sortBy}&page=${page}&apiKey=${apiKey}`
    );
    if (allNews.length < 1)
      return res.stauts(404).send({ status: false, message: "No news found" });

    res.status(200).send({ stauts: true, data: allNews.data });
  } catch (error) {
    res.status(500).send({ status: false, message: error.message });
  }
};

module.exports = { getAllNews };