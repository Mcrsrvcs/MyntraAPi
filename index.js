const express = require("express");
const PORT = process.env.PORT || 1000;
const app = express();

app.use((req, res, next) => {
  res.append("Access-Control-Allow-Origin", ["*"]);
  res.append("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE");
  res.append("Access-Control-Allow-Headers", "Content-Type");
  next();
});

data = [
  {
    imgsrc:
      "https://assets.myntassets.com/w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2022/6/1/3d0ac179-044c-4060-a28a-89bbf63a112f1654099355774-Premium-Watches_DK--1-.jpg",
  },
  {
    title: "",
    imgsrc:
      "https://assets.myntassets.com/w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2022/6/1/553384ff-be1f-4272-81d6-6f9e43fe5fe51654097949853-Dresses_Desk.jpg",
  },
  {
    title: "",
    imgsrc:
      "https://assets.myntassets.com/w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2022/6/1/16e52ae5-d21b-4f1f-9c4a-8392c3a9592d1654099056613-Workwear_Desk.jpg",
  },
  {
    title: "",
    imgsrc:
      "https://assets.myntassets.com/w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2022/6/1/9041bdba-b48a-4ed9-8fcb-e1eeb23a74e31654099110315-Sports---Casual-Shoes_Desk.jpg",
  },
  {
    title: "",
    imgsrc:
      "https://assets.myntassets.com/w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2022/5/31/4031994d-9092-4aa7-aea1-f52f2ae5194f1654006594976-Activewear_DK.jpg",
  },
  {
    title: "",
    imgsrc:
      "https://assets.myntassets.com/w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2022/5/31/04ba6fb3-569d-480e-aaec-13c3d74525d41654006667684-Innerwear_Desk--1-.jpg",
  },
  {
    title: "",
    imgsrc:
      "https://assets.myntassets.com/w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2022/5/31/a1a2d3b7-f227-4ee9-9026-4f0754e219851654006760962-Smartwatches_DK.jpg",
  },
];

app.get("/", (req, res) => {
  res.send(data);
});

app.listen(PORT, () => {
  console.log(PORT);
});
