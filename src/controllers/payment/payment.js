const PaypackJs = require("paypack-js").default;
const paypack = PaypackJs.config({
  client_id: process.env.CLIENT_ID,
  client_secret: process.env.CLIENT_SECRETE,
});

export const payment = async (req, res) => {
  let datas = req.body;
  await paypack
    .cashin({
      number: datas.number,
      amount: datas.amount,
      environment: "production",
    })
    .then((response) => {
      console.log(response.data);
      res.status(201).json({ data: response.data });
    })
    .catch((err) => {
      console.log("error", err);
      return res.status(500).json({ message: err });
    });
};
export const cashout = (req, res) => {
  let datas = req.body;
  paypack
    .cashout({
      number: datas.number,
      amount: datas.amount,
      environment: "production",
    })
    .then((response) => {
      console.log(response.data);
      res.status(201).json({ data: response.data });
    })
    .catch((err) => {
      console.log("error", err);
      return res.status(500).json({ message: err });
    });
};
export const transaction = (req, res) => {
  paypack
    .transactions({ offset: 0, limit: 100 })
    .then((response) => {
      console.log(response.data);
      res.status(201).json({ data: response.data });
    })
    .catch((err) => {
      console.log("error", err);
      return res.status(500).json({ message: err });
    });
};
