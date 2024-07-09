import Insight from "../models/Insight.js";

const getInsights = async (req, res) => {
  try {
    const insights = await Insight.find();
    return res.status(200).json(insights);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export { getInsights };
