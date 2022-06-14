const express = require("express");
const PORT = process.env.PORT || 1000;
const app = express();

app.use((req, res, next) => {
  res.append("Access-Control-Allow-Origin", ["*"]);
  res.append("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE");
  res.append("Access-Control-Allow-Headers", "Content-Type");
  next();
});
array=[
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
],
budgetguys=[{
    imgsrc:
      "https://assets.myntassets.com/w_140,c_limit,fl_progressive,dpr_2.0/assets/images/2022/5/24/bb521f63-8314-4585-b02d-9d0aa5ec495c1653371609392-BudgetBuys_Footwear.jpg",
  },
  {
    imgsrc:
      "https://assets.myntassets.com/w_140,c_limit,fl_progressive,dpr_2.0/assets/images/2022/5/24/c7606e59-4b4b-4082-a2a8-c82b68a12c691653371609361-BudgetBuys_Dresseskids.jpg",
  },
  {
    imgsrc:
      "https://assets.myntassets.com/w_140,c_limit,fl_progressive,dpr_2.0/assets/images/2022/5/24/59ea5670-6090-4066-b2e3-2a5a6f58a21c1653371609339-BudgetBuys_CasualShoes.jpg",
  },
  {
    imgsrc:
      "https://assets.myntassets.com/w_140,c_limit,fl_progressive,dpr_2.0/assets/images/2022/5/24/948ec926-6bcc-478d-8f7a-7929afc920b21653371609400-BudgetBuys_FormalShoes_.jpg",
  },
  {
    imgsrc:
      "https://assets.myntassets.com/w_140,c_limit,fl_progressive,dpr_2.0/assets/images/2022/5/24/1df8d223-ae15-4e80-a02d-d97ea33ffb0b1653371609384-BudgetBuys_Flip-Flops.jpg",
  },
  {
    imgsrc:
      "https://assets.myntassets.com/w_140,c_limit,fl_progressive,dpr_2.0/assets/images/2022/5/24/3b2a6d4e-3acf-4b83-b02a-7e36b880de331653371609674-BudgetBuys_TrackPantsMen.jpg",
  },
  {
    imgsrc:
      "https://assets.myntassets.com/w_140,c_limit,fl_progressive,dpr_2.0/assets/images/2022/5/24/4d53ec50-e5a7-4cf1-9956-14482f352bd81653371609704-BudgetBuys_TrousersMEns.jpg",
  },
  {
    imgsrc:
      "https://assets.myntassets.com/w_140,c_limit,fl_progressive,dpr_2.0/assets/images/2022/5/24/48737c0c-ded1-4601-9753-e0eed457a0511653371609619-BudgetBuys_Suits_Blazers.jpg",
  },
  {
    imgsrc:
      "https://assets.myntassets.com/w_140,c_limit,fl_progressive,dpr_2.0/assets/images/2022/5/24/903a3032-186b-4b8c-9332-85db52ea0ec21653371609295-BudgetBuys_Backpacks.jpg",
  },
  {
    imgsrc:
      "https://assets.myntassets.com/w_140,c_limit,fl_progressive,dpr_2.0/assets/images/2022/5/24/0febe5a5-3d6a-49e1-985f-8618fb4aae6e1653371609315-BudgetBuys_Belts_Wallets.jpg",
  },
  {
    imgsrc:
      "https://assets.myntassets.com/w_140,c_limit,fl_progressive,dpr_2.0/assets/images/2022/5/24/019082dd-64a0-4c1b-a442-a1e74667e0851653371609308-BudgetBuys_Bedsheets_BedCovers_.jpg",
  },
  {
    imgsrc:
      "https://assets.myntassets.com/w_140,c_limit,fl_progressive,dpr_2.0/assets/images/2022/5/24/f54d3d79-4d55-4353-8dda-61be55def9371653371609475-BudgetBuys_Kurtas_Sets.jpg",
  },
  {
    imgsrc:
      "https://assets.myntassets.com/w_140,c_limit,fl_progressive,dpr_2.0/assets/images/2022/5/24/8972e6d6-fa51-477c-9191-80bcb98abc571653371609423-BudgetBuys_Innerwear.jpg",
  },
  {
      imgsrc:"https://assets.myntassets.com/f_webp,w_140,c_limit,fl_progressive,dpr_2.0/assets/images/2022/5/24/f29a9430-96b1-4af5-9831-d1a3ffc5c1dc1653371609609-BudgetBuys_SportsShoes.jpg"
  },
  {
      imgsrc:"https://assets.myntassets.com/f_webp,w_140,c_limit,fl_progressive,dpr_2.0/assets/images/2022/5/24/522b583f-9a4e-4a70-b690-f5ba2df48bb61653371609715-BudgetBuys_T-Shirts.jpg"
  },
  {
    imgsrc:
      "https://assets.myntassets.com/w_140,c_limit,fl_progressive,dpr_2.0/assets/images/2022/5/24/3b2a6d4e-3acf-4b83-b02a-7e36b880de331653371609674-BudgetBuys_TrackPantsMen.jpg",
  },



]
, Deals = [   {
imgsrc:
  "https://assets.myntassets.com/w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2022/5/26/a78e46df-4c45-444b-8114-0c8f57ef6c0c1653558125724-ADIDAS.jpg",
},
{
imgsrc:
  "https://assets.myntassets.com/w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2022/6/7/0cffb244-be07-45bf-8315-52a03aa7cb561654590572540-image_jpeg_249898260.jpg",
},
{
imgsrc:
  "https://assets.myntassets.com/w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2022/5/26/04a8b52d-5f80-430e-aefa-30062c64899b1653558125938-Reebok.jpg",
},
 {
imgsrc:
  "https://assets.myntassets.com/w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2022/6/7/5cfd196a-dac0-478d-9196-3baf050723521654590572550-image_jpeg_133112402.jpg",
},
{
imgsrc:
  "https://assets.myntassets.com/w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2022/5/26/7a0f4236-d3ec-49a1-a3a5-d8a284f2d3b01653558125990-USPA_Footwear.jpg",
},
{
imgsrc:
  "https://assets.myntassets.com/w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2022/5/26/701b5cdf-f97d-41e3-9838-7158067139881653558125982-UCB_Footwear.jpg",
},
{
imgsrc:
  "https://assets.myntassets.com/w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2022/6/7/86abc893-1816-4935-9b13-74decad489291654590572513-image_jpeg1789996407.jpg",
},
{
imgsrc:
  "https://assets.myntassets.com/w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2022/5/26/c13c0807-4455-4eb8-b875-982aef0458e91653558125967-U.S._Polo_Assn..jpg",
},
{
imgsrc:
  "https://assets.myntassets.com/w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2022/6/7/5e454140-a48b-4e3f-ac6f-1100814e47101654590572521-image_jpeg362347943.jpg",
},  {
imgsrc:
  "https://assets.myntassets.com/w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2022/5/26/47d0705f-ed7e-4877-aa2e-db6d8f3262331653558125924-Puma.jpg",
},
{
imgsrc:
  "https://assets.myntassets.com/w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2022/5/26/a78e46df-4c45-444b-8114-0c8f57ef6c0c1653558125724-ADIDAS.jpg",
},
{
imgsrc:
  "https://assets.myntassets.com/w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2022/6/7/0cffb244-be07-45bf-8315-52a03aa7cb561654590572540-image_jpeg_249898260.jpg",
},
{
imgsrc:
  "https://assets.myntassets.com/w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2022/5/26/04a8b52d-5f80-430e-aefa-30062c64899b1653558125938-Reebok.jpg",
},
{
imgsrc:
  "https://assets.myntassets.com/w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2022/6/7/5cfd196a-dac0-478d-9196-3baf050723521654590572550-image_jpeg_133112402.jpg",
},
{
imgsrc:
  "https://assets.myntassets.com/w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2022/5/26/7a0f4236-d3ec-49a1-a3a5-d8a284f2d3b01653558125990-USPA_Footwear.jpg",
},
{
imgsrc:
  "https://assets.myntassets.com/w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2022/5/26/701b5cdf-f97d-41e3-9838-7158067139881653558125982-UCB_Footwear.jpg",
},
{
imgsrc:
  "https://assets.myntassets.com/w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2022/6/7/86abc893-1816-4935-9b13-74decad489291654590572513-image_jpeg1789996407.jpg",
},
{
imgsrc:
  "https://assets.myntassets.com/w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2022/5/26/c13c0807-4455-4eb8-b875-982aef0458e91653558125967-U.S._Polo_Assn..jpg",
},
{
imgsrc:
  "https://assets.myntassets.com/w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2022/6/7/5e454140-a48b-4e3f-ac6f-1100814e47101654590572521-image_jpeg362347943.jpg",
},
{
imgsrc:
  "https://assets.myntassets.com/w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2022/6/7/ae122896-b817-4c6b-9ebf-da82530bee571654590572531-image_jpeg_1608302704.jpg",
},]
,cetegorious = [
{
  imgsrc:
    "https://assets.myntassets.com/w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2022/6/9/06d44453-7735-4ea2-a146-1fbd8a5bc48e1654766637157-Shop-By-Category_HP_02.jpg",
},
{
  imgsrc:
    "https://assets.myntassets.com/w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2022/6/9/1de91390-00d9-4de3-8640-a47686a60d9c1654766637166-Shop-By-Category_HP_03.jpg",
},
{
  imgsrc:
    "https://assets.myntassets.com/w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2022/6/9/8f307ca0-ae6b-4bc9-944e-c8447ab871f81654766637174-Shop-By-Category_HP_04.jpg",
},
{
  imgsrc:
    "https://assets.myntassets.com/w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2022/6/9/cbca4163-4855-485a-93be-3cbb8d62f5821654766637181-Shop-By-Category_HP_05.jpg",
},
{
  imgsrc:
    "https://assets.myntassets.com/w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2022/6/9/aa25955f-dbe0-41ee-9e75-af7ee9966c2d1654766637188-Shop-By-Category_HP_06.jpg",
},
{
  imgsrc:
    "https://assets.myntassets.com/w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2022/6/9/6b5c6054-aadb-4ac8-8bb5-5f7e54bc6ca51654766637195-Shop-By-Category_HP_07.jpg",
},
{
  imgsrc:
    "https://assets.myntassets.com/w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2022/6/9/64bd7936-8f81-416f-9f60-5ba6a749671f1654766637202-Shop-By-Category_HP_08.jpg",
},
{
  imgsrc:
    "https://assets.myntassets.com/w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2022/6/9/2a5ae5ad-12bb-4c79-823f-0ce08fffb14d1654766637209-Shop-By-Category_HP_09.jpg",
},
{
  imgsrc:
    "https://assets.myntassets.com/w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2022/6/9/f2af2965-6263-4c30-a5db-ec743fc82edd1654766637216-Shop-By-Category_HP_10.jpg",
},
{
  imgsrc:
    "https://assets.myntassets.com/w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2022/6/9/b279d44f-46d5-486f-9d22-c4f8d1122da61654766637223-Shop-By-Category_HP_11.jpg",
},
{
  imgsrc:
    "https://assets.myntassets.com/w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2022/6/9/f70c9363-588f-4682-b5e9-3676e433ce391654766637232-Shop-By-Category_HP_12.jpg",
},
{
  imgsrc:
    "https://assets.myntassets.com/w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2022/6/9/233ad199-63f5-4862-8c1a-8b203b4c8ebb1654766637239-Shop-By-Category_HP_13.jpg",
},
{
  imgsrc:
    "https://assets.myntassets.com/w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2022/6/9/2bb4c8b0-b961-4be2-8d92-8d20d15bfa0c1654766637247-Shop-By-Category_HP_14.jpg",
},
{
  imgsrc:
    "https://assets.myntassets.com/w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2022/6/9/d59e40c7-a8a4-4746-90c1-35545b37433e1654766637253-Shop-By-Category_HP_15.jpg",
},
{
  imgsrc:
    "https://assets.myntassets.com/w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2022/6/9/1e94196a-3a49-404f-9dbe-0f7b1d5566a21654766637259-Shop-By-Category_HP_16.jpg",
},
{
  imgsrc:
    "https://assets.myntassets.com/w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2022/6/9/57b3a627-7fa8-4093-91dd-7ed0e45256401654766637267-Shop-By-Category_HP_17.jpg",
},
{
  imgsrc:
    "https://assets.myntassets.com/w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2022/6/9/fdcc31ee-4b24-411a-84b5-d4f0c4a5c0e51654766637274-Shop-By-Category_HP_18.jpg",
},
{
  imgsrc:
    "https://assets.myntassets.com/w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2022/6/9/0e54ce81-5cfd-4ba0-a0ac-a230effd47211654766637282-Shop-By-Category_HP_19.jpg",
},
{
  imgsrc:
    "https://assets.myntassets.com/w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2022/6/9/6da88c6c-a7ce-4143-9304-a9ee122fafcb1654766637290-Shop-By-Category_HP_20.jpg",
},
{
  imgsrc:
    "https://assets.myntassets.com/w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2022/6/9/0630521f-d004-4e7b-97ee-d0f11f48c1451654766637301-Shop-By-Category_HP_21.jpg",
},
{
  imgsrc:
    "https://assets.myntassets.com/w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2022/6/9/6dfd6306-9021-4932-ba20-6a6380014c631654766637311-Shop-By-Category_HP_22.jpg",
},
{
  imgsrc:
    "https://assets.myntassets.com/w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2022/6/9/e0821297-389f-4bdc-a63a-cfaca163c0841654766637319-Shop-By-Category_HP_23.jpg",
},
{
  imgsrc:
    "https://assets.myntassets.com/w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2022/6/9/5c13a7f7-a78c-4edd-be35-6bd8265857901654766637330-Shop-By-Category_HP_24.jpg",
},
{
  imgsrc:
    "https://assets.myntassets.com/w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2022/6/9/ea30b785-5f7e-4f39-9f7d-62377e6736e71654766637339-Shop-By-Category_HP_25.jpg",
},
{
  imgsrc:
    "https://assets.myntassets.com/w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2022/6/9/4d4044e0-40a0-4791-a132-0df5b05044ef1654766637346-Shop-By-Category_HP_26.jpg",
},
{
  imgsrc:
    "https://assets.myntassets.com/w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2022/6/9/cd2fc2f5-e75e-4326-9786-3043e236769c1654766637353-Shop-By-Category_HP_27.jpg",
},
{
  imgsrc:
    "https://assets.myntassets.com/w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2022/6/9/de47d0a5-d37b-479b-bb23-fd850a5eab401654766637360-Shop-By-Category_HP_28.jpg",
},
{
  imgsrc:
    "https://assets.myntassets.com/w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2022/6/9/40c04f89-9244-4322-8a91-f4c9cc5e11981654766637370-Shop-By-Category_HP_29.jpg",
},
{
  imgsrc:
    "https://assets.myntassets.com/w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2022/6/9/8c4e96a6-3e40-461d-a3c0-4b397416ffba1654766637378-Shop-By-Category_HP_30.jpg",
},
{
  imgsrc:
    "https://assets.myntassets.com/w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2022/6/9/838227c6-8e05-4ff0-a6ee-6c32902015591654766637386-Shop-By-Category_HP_31.jpg",
},
{
  imgsrc:
    "https://assets.myntassets.com/w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2022/6/9/d4632204-f345-414c-9b45-2d91f80b4b211654766637394-Shop-By-Category_HP_32.jpg",
},
{
  imgsrc:
    "https://assets.myntassets.com/w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2022/6/9/2bb43414-3f6a-4c77-9264-afab658b0a481654766637403-Shop-By-Category_HP_33.jpg",
},
{
  imgsrc:
    "https://assets.myntassets.com/w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2022/6/9/df646a25-73f7-4cbf-8c88-7093fed43a4b1654766637412-Shop-By-Category_HP_34.jpg",
},
{
  imgsrc:
    "https://assets.myntassets.com/w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2022/6/9/a1a85c11-4eae-4068-aa4b-d05cc2e5844a1654766637421-Shop-By-Category_HP_35.jpg",
},
{
  imgsrc:
    "https://assets.myntassets.com/w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2022/6/9/1d3545fd-cd4a-4493-99d5-0d7750561d961654766637430-Shop-By-Category_HP_36.jpg",
},

],
topBrand = [
{
  imgsrc:
    "https://assets.myntassets.com/w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/6/5/88c205c0-2349-4669-9d5b-6405e992b06e1654411440468-image_jpeg8576396.jpg",
},
{
  imgsrc:
    "https://assets.myntassets.com/w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/5/19/ac58b269-49f0-4df6-8e6c-594ff77ee4fd1652964575134-Bed_Linen_and_Furnishing_Min_60_-Story-home_-_Cortina-.jpg",
},
{
  imgsrc:
    "https://assets.myntassets.com/w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/6/5/42f7a82e-e84a-4fb9-9cca-55264b28807c1654411495335-image_png_71119225.png",
},
{
  imgsrc:
    "https://assets.myntassets.com/w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/6/5/a92b7453-33c0-4647-acf1-b3f714f5b7a51654411511670-image_png_1947551086.png",
},
{
  imgsrc:
    "https://assets.myntassets.com/w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/6/5/db7f6d21-887c-4b73-951a-9c2c6e0f72361654411580266-image_png518016767.png",
},
{
  imgsrc:
    "https://assets.myntassets.com/w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/6/5/6cba5e10-9064-48a3-a7f3-44f868eb953b1654411595064-image_png1749342016.png",
},
{
  imgsrc:
    "https://assets.myntassets.com/w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/6/5/3293d206-5c8e-46fd-941c-645afabe0fa81654411618745-image_png_1639462581.png",
},
{
  imgsrc:
    "https://assets.myntassets.com/w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/6/5/49d6e51c-6bf7-4bb8-a7ef-86616f750b2d1654411638152-image_png_79518292.png",
},
],
mostloved = [
{
  imgsrc:
    "https://assets.myntassets.com/w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2022/6/2/b6d26497-2402-4efe-a00f-18ea1b3353501654176560655-3.jpeg",
},
{
  imgsrc:
    "https://assets.myntassets.com/w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2022/6/8/a08e5481-8f25-41b9-9295-b0b976b375391654674031707-image_jpeg_1634646832.jpg",
},
{
  imgsrc:
    "https://assets.myntassets.com/w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2022/6/3/83fd1fc2-bb9e-43d0-ab0c-1fbfa61496f51654265811389-image_jpeg789262003.jpeg",
},
{
  imgsrc:
    "https://assets.myntassets.com/w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2022/6/2/8cf3d9aa-2253-48f6-b138-e5c3818591cd1654184450989-Allensolly.jpeg",
},
{
  imgsrc:
    "https://assets.myntassets.com/w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2022/6/8/0dcb4d19-d5aa-4dd9-a4da-a7cef102a0c81654684617587-The-Man-Company-MP-Tile-EA-Revised.jpg",
},
{
  imgsrc:
    "https://assets.myntassets.com/w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2022/6/5/c38bc151-2d45-49a3-b736-ec1fa6dd518c1654403209149-10th-men-tile.jpg",
},
{
  imgsrc:
    "https://assets.myntassets.com/w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2022/6/4/f4381f5c-e224-4cb8-af05-53de243b04e71654339150066-image_jpeg188007996.jpg",
},
{
  imgsrc:
    "https://assets.myntassets.com/w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2022/6/7/5b6abd22-c04a-48a5-9891-37da3cf81b6b1654599562287-z-fire-tiles-men.jpg",
},
{
  imgsrc:
    "https://assets.myntassets.com/w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2022/6/2/e880d013-cc34-4c10-b267-1078217a54bb1654184450996-allensolly1.jpeg",
},
{
  imgsrc:
    "https://assets.myntassets.com/w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2022/6/7/09e40f47-acf6-4a4a-b693-f5f42ab044861654596189524-boult-audio-tiles.jpg",
},
{
  imgsrc:
    "https://assets.myntassets.com/w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2022/6/3/f50e9833-26c0-4779-8841-58ea7f8be0101654262384456-image_jpeg1455326867.jpg",
},
{
  imgsrc:
    "https://assets.myntassets.com/w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2022/6/6/e969df22-e1f5-4522-90ce-d5d1bb208e1b1654489829701-tiles-men.jpg",
},
]
,wardrobe = [
{
  imgsrc:
    "https://assets.myntassets.com/w_140,c_limit,fl_progressive,dpr_2.0/assets/images/2022/5/27/e1bef9bd-12d8-45a8-8880-d3ac59e317401653643909614-QL_-Innerwear.jpg",
},
{
  imgsrc:
    "https://assets.myntassets.com/w_140,c_limit,fl_progressive,dpr_2.0/assets/images/2022/5/27/020297da-a13c-4262-b71d-addd60ef2bfc1653643909704-QL_Loungewear.jpg",
},
{
  imgsrc:
    "https://assets.myntassets.com/w_140,c_limit,fl_progressive,dpr_2.0/assets/images/2022/5/27/9755584f-52cb-49f8-8910-3225459ad79b1653643909793-QL_TrousersMENs.jpg",
},
{
  imgsrc:
    "https://assets.myntassets.com/w_140,c_limit,fl_progressive,dpr_2.0/assets/images/2022/5/27/e6ca1a65-1edf-410d-9fb8-5b582b1f9e9c1653643909697-QL_Kurtas_Sets.jpg",
},
{
  imgsrc:
    "https://assets.myntassets.com/w_140,c_limit,fl_progressive,dpr_2.0/assets/images/2022/5/27/7fe15202-bc12-4c0f-aec0-54de3f50197f1653643909724-QL_PlusSizeStyles.jpg",
},
{
  imgsrc:
    "https://assets.myntassets.com/w_140,c_limit,fl_progressive,dpr_2.0/assets/images/2022/5/27/553c298c-d770-4cf4-af86-9e5319fe045b1653643909691-QL_JeansMens.jpg",
},
{
  imgsrc:
    "https://assets.myntassets.com/w_140,c_limit,fl_progressive,dpr_2.0/assets/images/2022/5/27/21f624ef-63d8-45a2-acb1-774bb90363bd1653643909710-QL_NehruJackets_Sherwanis.jpg",
},
{
  imgsrc:
    "https://assets.myntassets.com/w_140,c_limit,fl_progressive,dpr_2.0/assets/images/2022/5/27/2c0f7d6d-e346-43ef-a048-35854bf6c4211653643909764-QL_Suits_blazers_.jpg",
},
{
  imgsrc:
    "https://assets.myntassets.com/w_140,c_limit,fl_progressive,dpr_2.0/assets/images/2022/5/27/3f6815ba-d56a-4ff8-b075-734e8ded21a31653643909653-QL_Flip-Flops.jpg",
},
{
  imgsrc:
    "https://assets.myntassets.com/w_140,c_limit,fl_progressive,dpr_2.0/assets/images/2022/5/27/34a4b31d-65a2-4983-b664-6fcfcb258f461653643909758-QL_SportsShoes.jpg",
},
{
  imgsrc:
    "https://assets.myntassets.com/w_140,c_limit,fl_progressive,dpr_2.0/assets/images/2022/5/27/25d91f26-c15a-4dfc-8f4c-147ab16729f51653643909647-QL_CasualShoes.jpg",
},
{
  imgsrc:
    "https://assets.myntassets.com/w_140,c_limit,fl_progressive,dpr_2.0/assets/images/2022/5/27/d8d72379-2e75-46fc-89a7-650207320de21653643909731-QL_Sandals.jpg",
},
{
  imgsrc:
    "https://assets.myntassets.com/w_140,c_limit,fl_progressive,dpr_2.0/assets/images/2022/5/27/2611e43c-d52d-4379-9c32-dde81894a6ff1653643909751-QL_Smartwatches.jpg",
},
{
  imgsrc:
    "https://assets.myntassets.com/w_140,c_limit,fl_progressive,dpr_2.0/assets/images/2022/5/27/1f3a89f0-b2c6-4745-8ae6-59fbaf9d47261653643909641-QL_Belts_Wallets_.jpg",
},
{
  imgsrc:
    "https://assets.myntassets.com/w_140,c_limit,fl_progressive,dpr_2.0/assets/images/2022/5/27/7d55f616-71ae-4842-94ca-06cf32b70c001653643909785-QL_TrolleyBags.jpg",
},
{
  imgsrc:
    "https://assets.myntassets.com/w_140,c_limit,fl_progressive,dpr_2.0/assets/images/2022/5/27/c85252a6-fc53-47c2-918a-deb666168def1653643909608-QL_-Backpacks.jpg",
},
],
]
app.get("/", (req, res) => {
  res.send(array);
});

app.listen(PORT, () => {
  console.log(PORT);
});
