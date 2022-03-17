const City = require("../models/CityModel");

exports.getCityList = async (req, res) => {
  const pageNum = req.query.page;
  if (pageNum) {
    const pageInt = +pageNum;

    try {
      const cityList = await City.find();
      const sliced = cityList.slice(pageInt * 20 - 20, pageInt * 20);
      res.status(200).json({ sliced });
    } catch (err) {
      console.error(err.message);
      res.status(500).send("Server Error");
    }
  } else {
    try {
      const cityList = await City.find();

      res.status(200).json({ cityList });
    } catch (err) {
      console.error(err.message);
      res.status(500).send("Server Error");
    }
  }
};

exports.getCityDetails = async (req, res) => {
  try {
    const CityDetails = await City.findOne({
      _id: req.params.id,
    });

    if (!CityDetails) {
      return res.status(400).json({ msg: "City not found" });
    }
    res.status(200).json({ CityDetails });
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
};
