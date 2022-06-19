const express = require("express");
const PORT = process.env.PORT || 1000;
const app = express();

app.use((req, res, next) => {
  res.append("Access-Control-Allow-Origin", ["*"]);
  res.append("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE");
  res.append("Access-Control-Allow-Headers", "Content-Type");
  next();
});
home = [
  data = [  
    {
      title: "",
      imgsrc:
        "https://assets.myntassets.com/w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2022/5/31/a1a2d3b7-f227-4ee9-9026-4f0754e219851654006760962-Smartwatches_DK.jpg",
    },
    {
      title: "",
      imgsrc:
        "https://assets.myntassets.com/w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2022/5/31/4031994d-9092-4aa7-aea1-f52f2ae5194f1654006594976-Activewear_DK.jpg",
    },
    {title:"",imgsrc :"https://assets.myntassets.com/w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2022/5/31/1ae72dae-ffbd-465d-81e2-4751fd06fbbe1654012895525-EORS-Desktop-Banner.jpg"},
      
  {
    title: "",
    imgsrc:
      "https://assets.myntassets.com/w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2022/6/1/9041bdba-b48a-4ed9-8fcb-e1eeb23a74e31654099110315-Sports---Casual-Shoes_Desk.jpg",
  },
  {title:"",imgsrc :"https://assets.myntassets.com/w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2022/6/1/735e64d7-b478-4c04-9a2d-0c93ae257cfc1654097850282-Kurtas-Sets_Desktop.jpg"},

],
  budgetbuys=[   
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
{imgsrc :"https://assets.myntassets.com/w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2022/5/24/9d8c3449-a426-4e55-845e-8d4289cf66441653371609484-BudgetBuys_KurtaSets.jpg"},
{
  imgsrc:
    "https://assets.myntassets.com/w_140,c_limit,fl_progressive,dpr_2.0/assets/images/2022/5/24/8972e6d6-fa51-477c-9191-80bcb98abc571653371609423-BudgetBuys_Innerwear.jpg",
},
{imgsrc :"https://assets.myntassets.com/w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2022/5/24/948ec926-6bcc-478d-8f7a-7929afc920b21653371609400-BudgetBuys_FormalShoes_.jpg"},
{
    imgsrc:"https://assets.myntassets.com/f_webp,w_140,c_limit,fl_progressive,dpr_2.0/assets/images/2022/5/24/f29a9430-96b1-4af5-9831-d1a3ffc5c1dc1653371609609-BudgetBuys_SportsShoes.jpg"
},
{
    imgsrc:"https://assets.myntassets.com/f_webp,w_140,c_limit,fl_progressive,dpr_2.0/assets/images/2022/5/24/522b583f-9a4e-4a70-b690-f5ba2df48bb61653371609715-BudgetBuys_T-Shirts.jpg"
},
{imgsrc :"https://assets.myntassets.com/w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2022/5/24/f29a9430-96b1-4af5-9831-d1a3ffc5c1dc1653371609609-BudgetBuys_SportsShoes.jpg"},
{
  imgsrc:
    "https://assets.myntassets.com/w_140,c_limit,fl_progressive,dpr_2.0/assets/images/2022/5/24/3b2a6d4e-3acf-4b83-b02a-7e36b880de331653371609674-BudgetBuys_TrackPantsMen.jpg",
}, {imgsrc :"https://assets.myntassets.com/w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2022/5/24/1df8d223-ae15-4e80-a02d-d97ea33ffb0b1653371609384-BudgetBuys_Flip-Flops.jpg"},
{imgsrc :"https://assets.myntassets.com/w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2022/5/24/89e6a612-b66f-49c5-af03-5594dca816dc1653371609549-BudgetBuys_Sarees.jpg"},
],
unblivabledeals = [{
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
},],
  Deals = [
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
  },{imgsrc: "https://assets.myntassets.com/w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2022/5/26/a78e46df-4c45-444b-8114-0c8f57ef6c0c1653558125724-ADIDAS.jpg",
  },
  {
  imgsrc:
    "https://assets.myntassets.com/w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2022/6/7/0cffb244-be07-45bf-8315-52a03aa7cb561654590572540-image_jpeg_249898260.jpg",
  },
  {
  imgsrc:
    "https://assets.myntassets.com/w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2022/5/26/04a8b52d-5f80-430e-aefa-30062c64899b1653558125938-Reebok.jpg",
  },
  ],
  toppicks = [ 
    {imgsrc :"https://assets.myntassets.com/w_89,c_limit,fl_progressive,dpr_2.0/assets/images/2022/4/12/00a95486-20dc-42e4-95d9-91242ba7f83b1649781648667-Kids-wear.jpg"},
    {imgsrc :"https://assets.myntassets.com/w_89,c_limit,fl_progressive,dpr_2.0/assets/images/2022/4/12/54794130-d358-421b-a73f-1ea5f98330641649781648655-Indian-Wear.jpg"},
    {imgsrc :"https://assets.myntassets.com/w_89,c_limit,fl_progressive,dpr_2.0/assets/images/2022/4/12/2d7c5cdb-1859-4883-8ba6-8fa2bc8ace841649781648661-Jeans-_-Trousers.jpg"},
    {imgsrc :"https://assets.myntassets.com/w_89,c_limit,fl_progressive,dpr_2.0/assets/images/2022/4/12/d535f930-b28d-4aaa-a3a1-e6cbf43ac18f1649781648685-Redtape.jpg"},
    {imgsrc :"https://assets.myntassets.com/w_89,c_limit,fl_progressive,dpr_2.0/assets/images/2022/4/12/603cd248-fa30-43be-b649-55b5ec70e5431649781648679-Max.jpg"},
    {imgsrc :"https://assets.myntassets.com/w_89,c_limit,fl_progressive,dpr_2.0/assets/images/2022/4/12/c97dcb69-4b36-4f4a-adde-d473b2e5ae9d1649781648698-Top-Brands.jpg"},
    {imgsrc :"https://assets.myntassets.com/w_89,c_limit,fl_progressive,dpr_2.0/assets/images/2022/4/12/46e55402-2a6b-4397-8332-4a786cf6fd801649781648704-Tops-_-Tees.jpg"},{imgsrc :"https://assets.myntassets.com/w_89,c_limit,fl_progressive,dpr_2.0/assets/images/2022/4/12/489b294a-84f4-4858-8f8e-ca485a36c5811649781648673-Kids-Wear-1.jpg"},]
,comeon=[
      {imgsrc :"https://assets.myntassets.com/w_350,c_limit,fl_progressive,dpr_2.0/assets/images/banners/2018/2/2/11517563660020-bed.jpg"},
    {imgsrc :"https://assets.myntassets.com/w_350,c_limit,fl_progressive,dpr_2.0/assets/images/banners/2018/2/2/11517563782565-furnishings.jpg"},
    ],
cetegorious = [
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
]

array=[
data = [
  {
    title: "",
    imgsrc:
      "https://assets.myntassets.com/w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2022/6/1/16e52ae5-d21b-4f1f-9c4a-8392c3a9592d1654099056613-Workwear_Desk.jpg",
  },
  {
    imgsrc:
      "https://assets.myntassets.com/w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2022/6/1/3d0ac179-044c-4060-a28a-89bbf63a112f1654099355774-Premium-Watches_DK--1-.jpg",
  },
  {
    title: "",
    imgsrc:
      "https://assets.myntassets.com/w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2022/5/31/04ba6fb3-569d-480e-aaec-13c3d74525d41654006667684-Innerwear_Desk--1-.jpg",
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

Women=[





    data = [  {
      title: "",
      imgsrc:
        "https://assets.myntassets.com/w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2022/6/1/553384ff-be1f-4272-81d6-6f9e43fe5fe51654097949853-Dresses_Desk.jpg",
    },
      {title:"",imgsrc :"https://assets.myntassets.com/w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2022/5/31/ad85684f-9dda-47e2-bdfe-c6d2ea3bb7271654007028955-Handbags-Wallets_DK.jpg"},
      {title:"",imgsrc :"https://assets.myntassets.com/w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2022/5/31/1ae72dae-ffbd-465d-81e2-4751fd06fbbe1654012895525-EORS-Desktop-Banner.jpg"},
      {title:"",imgsrc :"https://assets.myntassets.com/w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2022/6/1/735e64d7-b478-4c04-9a2d-0c93ae257cfc1654097850282-Kurtas-Sets_Desktop.jpg"},
      {title:"",imgsrc :"https://assets.myntassets.com/w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2022/6/1/7b1da839-34a4-4e78-b5b5-e18af304e3bd1654099311017-Top-Kurta-Sets_Desk.jpg"},
      {title:"",imgsrc :"https://assets.myntassets.com/w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2022/5/31/1768e5bd-41a3-4373-b583-eafb68c41f401654006978408-Indian-Wear_DK.jpg"},
      ],
      budgetguys=[
        {imgsrc :"https://assets.myntassets.com/w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2022/5/24/de38e78d-c748-4a0e-9762-1e5616767f931653371609376-BudgetBuys_Flats_Heels.jpg"},
        {imgsrc :"https://assets.myntassets.com/w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2022/5/24/1df8d223-ae15-4e80-a02d-d97ea33ffb0b1653371609384-BudgetBuys_Flip-Flops.jpg"},
        {imgsrc :"https://assets.myntassets.com/w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2022/5/24/f29a9430-96b1-4af5-9831-d1a3ffc5c1dc1653371609609-BudgetBuys_SportsShoes.jpg"},
        {imgsrc :"https://assets.myntassets.com/w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2022/5/24/948ec926-6bcc-478d-8f7a-7929afc920b21653371609400-BudgetBuys_FormalShoes_.jpg"},
        {imgsrc :"https://assets.myntassets.com/w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2022/5/24/9d8c3449-a426-4e55-845e-8d4289cf66441653371609484-BudgetBuys_KurtaSets.jpg"},
        {imgsrc :"https://assets.myntassets.com/w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2022/5/24/89e6a612-b66f-49c5-af03-5594dca816dc1653371609549-BudgetBuys_Sarees.jpg"},
      
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
        {imgsrc :"https://assets.myntassets.com/w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2022/6/9/ffdd3805-ab00-4bf4-a244-5d5a0bfae15b1654766778241-Shop-By-Category_WP_02.jpg"},
        {imgsrc :"https://assets.myntassets.com/w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2022/6/9/351998c5-8e9e-442e-9ecf-0d82b9bc92a81654766778250-Shop-By-Category_WP_03.jpg"},
        {imgsrc :"https://assets.myntassets.com/w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2022/6/9/450edb8e-e114-4897-a5d2-c84d967db2911654766778256-Shop-By-Category_WP_04.jpg"},
        {imgsrc :"https://assets.myntassets.com/w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2022/6/9/ccc66101-3ee2-46d7-8340-f4899132e16a1654766778263-Shop-By-Category_WP_05.jpg"},
        {imgsrc :"https://assets.myntassets.com/w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2022/6/9/37b3edaa-219b-4dcb-ac0d-b88721e75f421654766778270-Shop-By-Category_WP_06.jpg"},
        {imgsrc :"https://assets.myntassets.com/w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2022/6/9/1b743192-f9ac-402a-be26-2cf8fe208aa91654766778277-Shop-By-Category_WP_07.jpg"},
        {imgsrc :"https://assets.myntassets.com/w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2022/6/9/b3b3a92b-7d26-4104-a254-60ec6b7c88c81654766778283-Shop-By-Category_WP_08.jpg"},
        {imgsrc :"https://assets.myntassets.com/w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2022/6/9/7baab315-ae7b-4e31-889b-aaebc0ca29fc1654766778289-Shop-By-Category_WP_09.jpg"},
        {imgsrc :"https://assets.myntassets.com/w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2022/6/9/28db6d4d-d9e2-4021-b98d-06aa1d47b00b1654766778296-Shop-By-Category_WP_10.jpg"},
        {imgsrc :"https://assets.myntassets.com/w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2022/6/9/2e6e3041-4143-47a4-ab47-bd139d8ae3501654766778305-Shop-By-Category_WP_11.jpg"},
        {imgsrc :"https://assets.myntassets.com/w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2022/6/9/4c479aad-e165-423e-958c-3b87be074a461654766778312-Shop-By-Category_WP_12.jpg"},
        {imgsrc :"https://assets.myntassets.com/w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2022/6/9/eef74748-2ef9-4edb-a79b-48bef6c60ebf1654766778320-Shop-By-Category_WP_13.jpg"},
        {imgsrc :"https://assets.myntassets.com/w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2022/6/9/82678ee4-85b3-4916-8e74-256d7a42c4eb1654766778328-Shop-By-Category_WP_14.jpg"},
        {imgsrc :"https://assets.myntassets.com/w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2022/6/9/17cd6489-a708-48ae-bf38-a4daba67586b1654766778335-Shop-By-Category_WP_15.jpg"},
        {imgsrc :"https://assets.myntassets.com/w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2022/6/9/0380b2cd-db48-443a-8de5-90cf8c9531b21654766778343-Shop-By-Category_WP_16.jpg"},
        {imgsrc :"https://assets.myntassets.com/w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2022/6/9/c96429ef-a2c8-4b77-b643-516a904509431654766778351-Shop-By-Category_WP_17.jpg"},
        {imgsrc :"https://assets.myntassets.com/w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2022/6/9/17e7de71-84a8-46d5-9b7e-b838c004f3191654766778358-Shop-By-Category_WP_18.jpg"},
        {imgsrc :"https://assets.myntassets.com/w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2022/6/9/b668f32d-de4c-45e2-9488-52f29fbc873e1654766778367-Shop-By-Category_WP_19.jpg"},
      ],
      topBrand = [
        {imgsrc :"https://assets.myntassets.com/w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2022/6/5/c7ffff7c-cef3-499a-9821-8d51723d35571654412064102-image_png1907501810.png"},
        {imgsrc :"https://assets.myntassets.com/w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2022/5/19/43262ac2-1974-4cfb-85d2-a86022dc0fb31652964575095-Backpacks_-_Trolleys.jpg"},
        {imgsrc :"https://assets.myntassets.com/w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2022/6/5/bca493f2-9832-42bb-82be-347f0523ca631654412097889-image_png_2006245873.png"},
        {imgsrc :"https://assets.myntassets.com/w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2022/5/19/b05d42e8-569e-4801-9881-b2c3e4c773b91652964577645-Your_Favourite_Brands.jpg"},
        {imgsrc :"https://assets.myntassets.com/w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2022/6/5/699b24b5-f8a9-405f-9048-2b84a44f1ba21654412115199-image_png27866226.png"},
        {imgsrc :"https://assets.myntassets.com/w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2022/5/29/143c300e-11ed-4582-a6b6-c844efde77821653838994798-image_jpeg1588575303.jpg"}
      ],
      mostloved = [
        {imgsrc :"https://assets.myntassets.com/w_140,c_limit,fl_progressive,dpr_2.0/assets/images/2022/6/3/cf0e3d59-bc76-448c-9c16-68f73795d1df1654235569151-Varanga_WP-Top-Tile.jpg"},
        {imgsrc :"https://assets.myntassets.com/w_140,c_limit,fl_progressive,dpr_2.0/assets/images/2022/6/3/33ca2ea2-9480-4dab-a0d4-6703b2dc966e1654235569138-Inddus_WP-Top-Tile.jpg"},
        {imgsrc :"https://assets.myntassets.com/w_140,c_limit,fl_progressive,dpr_2.0/assets/images/2022/6/3/d1190d75-2303-4832-82cc-6babeda94a271654250143512-TT-Top-Tile.jpg"},
        {imgsrc :"https://assets.myntassets.com/w_140,c_limit,fl_progressive,dpr_2.0/assets/images/2022/6/4/a3ed7ed4-ef6a-4396-9270-1c13e239f70d1654329782046-image_jpeg_1190150594.jpg"},
        {imgsrc :"https://assets.myntassets.com/w_140,c_limit,fl_progressive,dpr_2.0/assets/images/2022/6/4/ba97aa7c-d190-4681-ada1-b093cb9538901654329912892-image_jpeg876253083.jpg"},
        {imgsrc :"https://assets.myntassets.com/w_140,c_limit,fl_progressive,dpr_2.0/assets/images/2022/6/7/48219d4e-c0ff-470c-aef6-f0fa5426b41e1654588332694-image_jpeg1112065362.jpg"},
      ]
      ,wardrobe = [
        {imgsrc :"https://assets.myntassets.com/w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2022/5/27/f456a053-a1ab-4fa3-9205-5cc85e17bece1653643972003-QL_KurtaSets.jpg"},
        {imgsrc :"https://assets.myntassets.com/w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2022/5/27/b486d907-2449-47e3-a17e-0b1ec4199df71653643972076-QL_WatchesW.jpg"},
        {imgsrc :"https://assets.myntassets.com/w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2022/5/27/fa430943-92b8-4c50-9684-a3a884f1f82f1653643972036-QL_Sarees.jpg"},
        {imgsrc :"https://assets.myntassets.com/w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2022/5/27/86537a02-d573-4dfd-acbd-bebdc33a39031653643971883-QL_ActivewearW.jpg"},
        {imgsrc :"https://assets.myntassets.com/w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2022/5/27/b3c19c24-9298-42f0-a159-3e2f61b8eb071653643971895-QL_Bras_Briefs.jpg"},
        {imgsrc :"https://assets.myntassets.com/w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2022/5/27/7ccbe07a-23df-4621-bb89-ac739ffb72a71653643972030-QL_NightSuits.jpg"},
        {imgsrc :"https://assets.myntassets.com/w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2022/5/27/9738a8c8-9ddb-46f5-9fb7-6ca6bef364b81653643971913-QL_Dresses.jpg"},
        {imgsrc :"https://assets.myntassets.com/w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2022/5/27/a321a94c-12c9-4f6c-aa3c-5b9e1ad734dc1653643971968-QL_JeansW.jpg"},
        {imgsrc :"https://assets.myntassets.com/w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2022/5/27/6c18ae37-68f7-455b-9f13-19adaa7ce8611653643972063-QL_Tops_Tees.jpg"},
        {imgsrc :"https://assets.myntassets.com/w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2022/5/27/a0032064-2a34-4876-ba3b-16cfd27a6f4a1653643971889-QL_Bedsheets.jpg"},
        {imgsrc :"https://assets.myntassets.com/w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2022/5/27/78f45c27-f1d2-4de3-a0b8-fd82b30e8f2a1653643971870-QL_-Jewellery.jpg"},
        {imgsrc :"https://assets.myntassets.com/w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2022/5/27/eb71b7cf-a820-4cd8-8d1f-9e5684802e701653643971955-QL_Heels.jpg"},
        {imgsrc :"https://assets.myntassets.com/w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2022/5/27/9ebe3bf9-9bb7-4c73-b026-6754652ae4511653643971919-QL_Flats.jpg"},
        {imgsrc :"https://assets.myntassets.com/w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2022/5/27/f0471c89-1a8f-4bf5-a573-d74acadcf6d21653643971925-QL_Flip-Flops.jpg"},
        {imgsrc :"https://assets.myntassets.com/w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2022/5/27/d65019ab-4566-4e18-8b03-598d96bd0df21653643971901-QL_CasualShoes_.jpg"},
        {imgsrc :"https://assets.myntassets.com/w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2022/5/27/d5943c16-ec7c-499a-bce9-947f03cb61ce1653643971943-QL_Handbags.jpg"},
        {imgsrc :"https://assets.myntassets.com/w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2022/5/27/58983331-a3eb-4944-8796-16f7a56f986e1653643971907-QL_Clutches.jpg"},
        {imgsrc :"https://assets.myntassets.com/w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2022/5/27/c2484606-cb68-45cb-85f8-dc29cc6bc41c1653643971961-QL_HomeDecor.jpg"},
      ],







]

KidsCloths=[
 


  data = [
    {imgsrc :"https://assets.myntassets.com/w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2022/4/12/a606c305-a23f-4fe3-a630-343ced4a10261649782019470-Kids-Wear_Desk_Banner.jpg?v1"},
    {imgsrc :"https://assets.myntassets.com/w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2022/4/12/09f0df54-6f8f-4bb0-a4b9-3b374d4538561649782019495-Top-Brands-2_Desk_Banner.jpg"},
    {imgsrc :"https://assets.myntassets.com/w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2022/4/12/b97efc90-2359-48ea-bf74-9c72d552fdef1649782019503-T-Shirts-_-Shorts_Desk_Banner.jpg"},
    {imgsrc :"https://assets.myntassets.com/w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2022/4/12/7f5e46bd-da64-489b-bbab-ebf67b12f8091649782019457-Innerwear_Desk_Banner.jpg"},
    {imgsrc :"https://assets.myntassets.com/w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2022/4/12/0e977afc-87e2-4798-a0d6-bfb05ba796911649782019489-Super-Bottoms_Desk_Banner.jpg"},
  ],
  favbrands=[
    {imgsrc :"https://assets.myntassets.com/w_108,c_limit,fl_progressive,dpr_2.0/assets/images/2020/11/9/ab69d015-a975-4bda-990c-49e68938f6b31604926460802-19-FavBrands-AllenSollyJuniors.jpg"},
    {imgsrc :"https://assets.myntassets.com/w_108,c_limit,fl_progressive,dpr_2.0/assets/images/2020/11/9/fee6018d-c5dd-44b7-b1d1-9b994c1ae1e21604926460545-13-FavBrands-UCB.jpg"},
    {imgsrc :"https://assets.myntassets.com/w_108,c_limit,fl_progressive,dpr_2.0/assets/images/2020/11/9/4d3f0e9d-1b7a-458e-b05b-75d1f51db0411604926460628-15-FavBrands-NautiNati.jpg"},
    {imgsrc :"https://assets.myntassets.com/w_108,c_limit,fl_progressive,dpr_2.0/assets/images/2020/11/9/a505cf6b-beab-4bea-ba8d-06d7302486761604926460589-14-FavBrands-USPA.jpg"},
    {imgsrc :"https://assets.myntassets.com/w_108,c_limit,fl_progressive,dpr_2.0/assets/images/2020/11/10/5843d479-8331-4c70-9e44-796b984a258e1604993081657-17-FavBrands-MiniKlub--1-.jpg"},
    {imgsrc :"https://assets.myntassets.com/w_108,c_limit,fl_progressive,dpr_2.0/assets/images/2020/11/20/dc3e538c-bdbe-4df6-b38d-e628f1b18e211605856135445-ShopBybrands-lilpicks.jpg"},
    {imgsrc :"https://assets.myntassets.com/w_108,c_limit,fl_progressive,dpr_2.0/assets/images/2020/11/9/0bb2a638-7a84-4e75-bbbb-152140d32fd51604926460667-16-FavBrands-Peppermint.jpg"},
    {imgsrc :"https://assets.myntassets.com/w_108,c_limit,fl_progressive,dpr_2.0/assets/images/2020/11/9/7a43b5cc-7b14-465a-9043-153fe35fb4d91604926460506-12-FavBrands-Gini_Jony.jpg"},
    {imgsrc :"https://assets.myntassets.com/w_108,c_limit,fl_progressive,dpr_2.0/assets/images/2020/11/9/4f79cccf-f8af-4a41-b531-a02ffc8bb1151604926460459-11-FavBrands-YK.jpg"},
  ]
  , toppicks = [ 
    {imgsrc :"https://assets.myntassets.com/w_89,c_limit,fl_progressive,dpr_2.0/assets/images/2022/4/12/00a95486-20dc-42e4-95d9-91242ba7f83b1649781648667-Kids-wear.jpg"},
    {imgsrc :"https://assets.myntassets.com/w_89,c_limit,fl_progressive,dpr_2.0/assets/images/2022/4/12/54794130-d358-421b-a73f-1ea5f98330641649781648655-Indian-Wear.jpg"},
    {imgsrc :"https://assets.myntassets.com/w_89,c_limit,fl_progressive,dpr_2.0/assets/images/2022/4/12/2d7c5cdb-1859-4883-8ba6-8fa2bc8ace841649781648661-Jeans-_-Trousers.jpg"},
    {imgsrc :"https://assets.myntassets.com/w_89,c_limit,fl_progressive,dpr_2.0/assets/images/2022/4/12/d535f930-b28d-4aaa-a3a1-e6cbf43ac18f1649781648685-Redtape.jpg"},
    {imgsrc :"https://assets.myntassets.com/w_89,c_limit,fl_progressive,dpr_2.0/assets/images/2022/4/12/603cd248-fa30-43be-b649-55b5ec70e5431649781648679-Max.jpg"},
    {imgsrc :"https://assets.myntassets.com/w_89,c_limit,fl_progressive,dpr_2.0/assets/images/2022/4/12/c97dcb69-4b36-4f4a-adde-d473b2e5ae9d1649781648698-Top-Brands.jpg"},
    {imgsrc :"https://assets.myntassets.com/w_89,c_limit,fl_progressive,dpr_2.0/assets/images/2022/4/12/46e55402-2a6b-4397-8332-4a786cf6fd801649781648704-Tops-_-Tees.jpg"},
    {imgsrc :"https://assets.myntassets.com/w_89,c_limit,fl_progressive,dpr_2.0/assets/images/2022/4/12/489b294a-84f4-4858-8f8e-ca485a36c5811649781648673-Kids-Wear-1.jpg"},]

  
  ,ionicbrands = [
    {imgsrc :"https://assets.myntassets.com/w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2020/11/9/f79446fb-46b9-455a-a6c0-4ffe3f58dd071604906586106-23-IconicBrands-H_M.jpg"},
{imgsrc :"https://assets.myntassets.com/w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2020/11/9/2ba882da-667c-4f6e-a27e-292d0ffe477a1604906586228-26-IconicBrands-MangoKids.jpg"},
{imgsrc :"https://assets.myntassets.com/w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2020/11/9/37147834-2bc5-4cdb-8eb9-68bf0fd48ca01604906586191-25-IconicBrands-Chicco.jpg"},
{imgsrc :"https://assets.myntassets.com/w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2020/11/9/f23d49ee-a598-4039-a6cd-33dab8a7e2011604906586056-22-IconicBrands-M_S.jpg"},
{imgsrc :"https://assets.myntassets.com/w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2020/11/9/0f9ec937-304a-433a-9433-5409c556831c1604906586152-24-IconicBrands-TommyHilfiger.jpg"},
  ],fasions = [
    {imgsrc :"https://assets.myntassets.com/w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2020/11/9/f20838ab-108c-4fe6-bd74-0dc7551a2bbd1604906586589-34-Essentials-Masks.jpg"},
    {imgsrc :"https://assets.myntassets.com/w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2020/11/9/3df8a117-4db8-4cb6-ac0e-e60291d957241604906586646-35-Essentials-BabyCare.jpg"},
    {imgsrc :"https://assets.myntassets.com/w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2020/11/9/29baf945-9e5b-4f0e-bb05-0ce65c57f9c91604906586502-32-Essentials-Shorts.jpg"},
    {imgsrc :"https://assets.myntassets.com/w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2020/11/9/353fd453-6a17-45b9-b3da-a3dfd88121a31604906586547-33-Essentials-Valuepacks.jpg"},
    {imgsrc :"https://assets.myntassets.com/w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2020/11/9/c22c8c4b-753a-4f90-8def-511d2ed6caf31604906586731-37-Essentials-EthnicWear.jpg"},
    {imgsrc :"https://assets.myntassets.com/w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2020/11/9/efc4b19d-179f-4437-961c-839df50299a51604906586690-36-Essentials-Night_innerwear.jpg"},
    {imgsrc :"https://assets.myntassets.com/w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2020/11/9/4e6eefd3-3355-4c1c-851e-48a49c97d5b31604906586407-30-Essentials-Onesies.jpg"},
    {imgsrc :"https://assets.myntassets.com/w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2020/11/9/33368b8b-8702-4108-96a9-b8fa5b7ed36f1604906586455-31-Essentials-FlipFlop_sandals.jpg"},
    {imgsrc :"https://assets.myntassets.com/w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2020/11/9/2ab2f5b3-441a-430c-a605-2ac9d06007c01604906586315-28-Essentials-Dresses.jpg"},
    {imgsrc :"https://assets.myntassets.com/w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2020/11/9/c75a2039-4199-4174-b1b9-fecd30f7d3f91604906586359-29-Essentials-Tshirts_Tops.jpg"},
  ],
  Brand = [
    {imgsrc :"https://assets.myntassets.com/w_490,c_limit,fl_progressive,dpr_2.0/assets/images/2020/11/9/630c5d84-b4fa-4ba8-aa92-c91cd134b9201604906586823-39-Banner-LogoMania.jpg"},
{imgsrc :"https://assets.myntassets.com/w_490,c_limit,fl_progressive,dpr_2.0/assets/images/2020/11/9/7e5d76b3-afd1-4e82-8eee-179269cbab1c1604906586871-40-Banner-CharacterStore.jpg"},
{imgsrc :"https://assets.myntassets.com/w_490,c_limit,fl_progressive,dpr_2.0/assets/images/2020/11/9/cd843509-16fe-4437-a814-90f3eea6bb4b1604906586922-41-Banner-AllOrganic.jpg"},
{imgsrc :"https://assets.myntassets.com/w_490,c_limit,fl_progressive,dpr_2.0/assets/images/2020/11/9/d878e27a-f64d-45c9-bd9b-ee257b49894f1604906586980-42-Banner-EssentialStore.jpg"},
{imgsrc :"https://assets.myntassets.com/w_490,c_limit,fl_progressive,dpr_2.0/assets/images/2020/11/9/bb420f64-fea8-4d66-87b7-03c7f7fb6e621604906587041-43-Banner-Uniquely-Myntra.jpg"},
{imgsrc :"https://assets.myntassets.com/w_490,c_limit,fl_progressive,dpr_2.0/assets/images/2020/11/9/1ac6219d-54b8-484e-813b-c239bb9880141604906587091-44-Banner-ActiveWearStore.jpg"},
],
  kidsspace = [
    {imgsrc :"https://assets.myntassets.com/w_490,c_limit,fl_progressive,dpr_2.0/assets/images/2020/11/9/817ada39-86d3-4162-b10f-443c7d658f541604906587912-59b-Banner-KidsSpace.jpg"},
    {imgsrc :"https://assets.myntassets.com/w_490,c_limit,fl_progressive,dpr_2.0/assets/images/2020/11/9/9906ea02-f0e5-40b8-b6db-ce3c5fd5fcf31604906587854-59a-Banner-KidsSpace.jpg"},
  ]
  ,budgetbuys = [
    {imgsrc :"https://assets.myntassets.com/w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2020/11/9/df528847-96b6-48cc-9104-064ad788804c1604906588040-61-BudgetBuys-TshirtsUnder499.jpg"},
{imgsrc :"https://assets.myntassets.com/w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2020/11/9/e42fbdcd-31cd-43de-b1eb-0f3f4351e08d1604906588093-62-BudgetBuys-DressesUnder799.jpg"},
{imgsrc :"https://assets.myntassets.com/w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2020/11/9/1abffc52-836d-4778-a034-a851b45e43c31604906588162-63-BudgetBuys-EthnicWearUnder999.jpg"},
{imgsrc :"https://assets.myntassets.com/w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2020/11/9/bb9520c5-20c6-496c-811e-4693bc2828b31604906588221-64-BudgetBuys-ShortsUnder599.jpg"},
{imgsrc :"https://assets.myntassets.com/w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2020/11/9/8430d7ff-a2f4-496a-bf90-b1c3a8cc7d231604906588272-65-BudgetBuys-ValuePacksUnder799.jpg"},
{imgsrc :"https://assets.myntassets.com/w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2020/11/9/af518c66-a610-4ab7-91bf-b343b9c1b8501604906588337-66-BudgetBuys-FootwearUnder699.jpg"},
],




]

let living = [
  comeon=[
    {imgsrc :"https://assets.myntassets.com/w_350,c_limit,fl_progressive,dpr_2.0/assets/images/banners/2018/2/2/11517563660020-bed.jpg"},
  {imgsrc :"https://assets.myntassets.com/w_350,c_limit,fl_progressive,dpr_2.0/assets/images/banners/2018/2/2/11517563782565-furnishings.jpg"},
  {imgsrc :"https://assets.myntassets.com/w_350,c_limit,fl_progressive,dpr_2.0/assets/images/banners/2018/2/2/11517563810789-art-n-decor.jpg"},
  {imgsrc :"https://assets.myntassets.com/w_350,c_limit,fl_progressive,dpr_2.0/assets/images/banners/2018/2/2/11517563866590-lamps.jpg"},
  {imgsrc :"https://assets.myntassets.com/f_webp,w_350,c_limit,fl_progressive,dpr_2.0/assets/images/banners/2018/2/2/11517563925069-kitchen.jpg"},
  {imgsrc :"https://assets.myntassets.com/f_webp,w_350,c_limit,fl_progressive,dpr_2.0/assets/images/banners/2018/2/2/11517563958962-bath.jpg"},
  ],
  inspired=[
     {imgsrc:"https://assets.myntassets.com/f_webp,w_326,c_limit,fl_progressive,dpr_2.0/assets/images/banners/2018/2/1/11517485441956-Wedding-checklist.jpg"},
    {imgsrc:"https://assets.myntassets.com/f_webp,w_326,c_limit,fl_progressive,dpr_2.0/assets/images/banners/2018/2/1/11517478592904-Home-page-Desktop_14.jpg"}
    ,{imgsrc:"https://assets.myntassets.com/f_webp,w_326,c_limit,fl_progressive,dpr_2.0/assets/images/banners/2018/2/1/11517478592892-Home-page-Desktop_15.jpg"}

  ],
  inspired=[
     {imgsrc:"https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2022/4/26/13606c4a-14e9-48e4-a56a-a9c3979e7db21650971940091-swayam_logo_new_1980_x_1280.jpg"},
    {imgsrc:"https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2022/3/17/ff6b8a0b-83fa-4f9f-bbb3-0fc51fd9454a1647517771374-updated-logo.jpg"}
    ,{imgsrc:"https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2022/3/17/9830dff5-9056-402f-9bf0-ba3ead0abcaf1647499996169-SPACES---LOGO-01--BEDBATHRUGS-.jpg"}
    ,{imgsrc:"https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2022/3/17/06f9e39d-a4d4-4ba4-b4cb-960c87ff5d511647499996189-M-S-Logo.jpg"}
    ,{imgsrc:"https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/banners/2019/3/1/a38e440e-1ff7-4092-acbe-46d74b38384a1551443106457-Home-page-Desktop-Brands_13.jpg"}

  ]

]
app.get("/", (req, res) => {
  res.send(array);
});

app.get('/home',(req,res)=>{
  res.send(home);
})

app.get("/women", (req, res) => {
    res.send(Women);
  });

app.get("/Kids", (req, res) => {
    res.send(KidsCloths);
  });
  
app.get("/Living", (req, res) => {
    res.send(living);
  });

app.listen(PORT, () => {
  console.log(PORT);
});
