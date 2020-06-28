const express = require("express");
const router = express.Router();

router.get("/product", (req,res)=>{
  res.json([
      {
        _id: "5abd69902ded8b1b1a6f7d73",
        id: 11,
        image: "product_23.jpg",
        name: "Arduino Nano 3.0 Mini USB รุ่นใหม่ใช้ชิฟ CH340G แถมสาย Mini USB",
        price: 11,
        stock: 130,
        created: "2018-03-30T00:11:45.109Z",
        __v: 0
      },
      {
        _id: "5abd69902ded8b1b1a6f7d72",
        id: 10,
        image: "product_22.jpg",
        name: "NodeMCU Development Kit V2 แถมสาย USB (Node MCU)",
        stock: 280,
        price: 11,
        created: "2018-03-30T00:11:45.109Z",
        __v: 0
      },
      {
        _id: "5abd69902ded8b1b1a6f7d71",
        image: "product_21.jpg",
        id: 9,
        name: "WeMos D1 R2 WiFi ESP8266 Development Board Compatible Arduino UNO",
        stock: 100,
        price: 370,
        created: "2018-03-30T00:11:45.109Z",
        __v: 0
      },
      {
        _id: "5abd69902ded8b1b1a6f7d70",
        id: 8,
        image: "product_20.jpg",
        name: "ESP8266 web Sever serial WiFi Expansion board - shield ESP-12E for arduino R3",
        stock: 100,
        price: 290,
        created: "2018-03-30T00:11:45.109Z",
        __v: 0
      },
      {
        _id: "5abd69902ded8b1b1a6f7d69",
        id: 7,
        image: "product_19.jpg",
        name: "IR Flame Detector Module (ตรวจจับเปลวไฟด้วย Infrared)",
        price: 60,
        stock: 100,
        created: "2018-03-30T00:11:45.109Z",
        __v: 0
      },
      {
        _id: "5abd69902ded8b1b1a6f7d59",
        id: 6,
        image: "product_12.jpg",
        name: "Arduino ProtoShield Mini UNO Prototype Shield พร้อม Mini Breadboard",
        stock: 100,
        price: 603,
        created: "2018-03-30T00:11:45.109Z",
        __v: 0
      },
      {
        _id: "5abd69902ded8b1b1a6f7d58",
        id: 5,
        image: "product_11.jpg",
        stock: 100,
        name: "Arduino Sensor Shield V5.0",
        price: 150,
        created: "2018-03-30T00:11:45.109Z",
        __v: 0
      },
      {
        _id: "5abd69902ded8b1b1a6f7d57",
        id: 4,
        image: "product_10.jpg",
        name: "Arduino Sensor Kit V5.0",
        stock: 13,
        price: 150,
        created: "2018-03-30T00:11:45.109Z",
        __v: 0
      },
      {
        _id: "5abd69902ded8b1b1a6f7d50",
        id: 3,
        name: "4-Channel 5VDC Relay Module Relay Active High / LOW",
        image: "product_07.jpg",
        stock: 1,
        price: 185,
        created: "2018-03-30T00:11:45.109Z",
        __v: 0
      },
      {
        _id: "5b5ecf26581ff42b3c819aef",
        id: 1,
        name: "4-Channel 5VDC Relay Module Relay Active High / LOW",
        image: "product_01.jpg",
        stock: 1,
        price: 185,
        created: "2018-03-30T00:11:45.109Z",
        __v: 0
      },
      {
        _id: "5b5ecf3d581ff42b3c819af9",
        id: 2,
        name: "4-Channel 5VDC Relay Module Relay Active High / LOW",
        image: "product_02.jpg",
        stock: 1,
        price: 185,
        created: "2018-03-30T00:11:45.109Z",
        __v: 0
      },
      {
        _id: "5b5ed233581ff42b3c819c37",
        id: 14,
        name: "DotMatrix LED Display",
        image: "product_14.jpg",
        stock: 1000,
        price: 300,
        created: "2018-03-30T00:11:45.109Z",
        __v: 0
      },
      {
        _id: "5b5ed240581ff42b3c819c3e",
        id: 15,
        name: "DHT 22 - Temp. Sensor",
        image: "product_15.jpg",
        stock: 1000,
        price: 300,
        created: "2018-03-30T00:11:45.109Z",
        __v: 0
      },
      {
        _id: "5b5ed24c581ff42b3c819c44",
        id: 16,
        name: "Raining Sensor",
        image: "product_16.jpg",
        stock: 1000,
        price: 300,
        created: "2018-03-30T00:11:45.109Z",
        __v: 0
      },
      {
        _id: "5b5ed25e581ff42b3c819c4a",
        id: 17,
        name: "NodeMCU32",
        image: "product_17.jpg",
        stock: 1000,
        price: 300,
        created: "2018-03-30T00:11:45.109Z",
        __v: 0
      }
    ])
})


module.exports = router;
