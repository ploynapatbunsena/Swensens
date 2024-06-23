const port = 4000;
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const multer = require("multer");
const path = require("path");
const cors = require("cors");
const { type } = require("os");
const { error } = require("console");

app.use(express.json());
app.use(cors());

// Database Connection With MongoDB
mongoose.connect("mongodb+srv://dev:1234@cluster1.kengwlb.mongodb.net/swensens")

// API Creation
app.get("/", (req, res) => {
  res.send("Express App is Running")
})

// Image Storage Engine
const storage = multer.diskStorage ({
  destination: './upload/images',
  filename: (req, file ,cb)=> {
    return cb(null, `${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`);
  }
})

const upload = multer({storage:storage})

// Create Upload Endpoint for Images
app.use("/images", express.static("upload/images"))
app.post("/upload", upload.single("product"), (req, res) => {
  res.json({
    success: 1,
    image_url: `http://localhost:${port}/images/${req.file.filename}`
  })
})

// Schema for Creating Products
const Product = mongoose.model("Product", {
  id:{
    type: Number,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
  avilable: {
    type: Boolean,
    default: true,
  },
})

app.post("/addproduct", async (req, res) => {
  let products = await Product.find({});
  let id;
  if(products.length > 0 ){
    let last_product_array = products.slice(-1);
    let last_product = last_product_array[0];
    id = last_product.id + 1;
  }
  else {
    id = 1;
  }

  const product = new Product({
    id: id,
    name: req.body.name,
    image: req.body.image,
    category: req.body.category,
    description: req.body.description,
    price: req.body.price
  });
  console.log(product);
  await product.save();
  console.log("Saved");
  res.json({
    success: true,
    name: req.body.name
  })
})

// Creation API For deleting Product
app.post("/removeproduct", async (req, res) => {
  await Product.findOneAndDelete({id:req.body.id});
  console.log("Removed")
  res.json({
    success: true,
    name: req.body.name
  })
})

// Creating API for getting all products
app.get("/allproducts", async(req, res) => {
  let products = await Product.find({});
  console.log("All Product Fetched");
  res.send(products);
})

//Schema creating for User model
const Users = mongoose.model("Users", {
  name: {
    type: String,
  },
  surname: {
    type: String,
  },
  phoneNumber: {
    type: String,
  },
  email: {
    type: String,
    unique: true,
  },
  password: {
    type: String,
  },
  gender: {
    type: String,
  },
  birthday: {
    type: String,
  },
  agreement: {
    type: Boolean,
  },
  consent: {
    type: Boolean,
  },
  date: {
    type: Date,
    default: Date.now,
  }
})

//Creating enpoint for registering the user
app.post("/register", async (req, res) => {

  let check = await Users.findOne({email:req.body.email});
  if(check){
    return res.status(400).json({success:false, error:"Existing user found with same email address"});
  }

  const user = new Users({
    name: req.body.name,
    surname: req.body.surname,
    phoneNumber: req.body.phoneNumber,
    email: req.body.email,
    password: req.body.password,
    gender: req.body.gender,
    birthday: req.body.birthday,
    consent: req.body.consent,
    agreement: req.body.agreement
  })
  
  await user.save();

  const data = {
    user: {
      id: user.id
    }
  }

  const token = jwt.sign(data, "secret_swensens")
  res.json({ success:true, token })
})

//Creating enpoint for user login
app.post("/login", async (req, res) => {
  let user =await Users.findOne({email:req.body.email});
  if (user) {
    const pwCompare = req.body.password === user.password;
    if (pwCompare) {
      const data = {
        user: {
          id: user.id
        }
      }
      const token = jwt.sign(data, "secret_swensens");
      res.json({success:true, token});
    } 
    else {
      res.json({success:false, error: "Wrong Password"})
    } 
  }
  else {
    res.json({success:false, error: "Wrong Email"})
  }
})

// Creating enpoint for new product
app.get("/delivery", async (req, res) => {
  let products = await Product.find({});
  let newProduct = products.slice(1).slice(-8);
  console.log("New Product Fetched");
  res.send(newProduct);
})

app.listen(port, (error) => {
  if (!error) {
    console.log(`Server is Running on Port ${port}`);
  }
  else
  {
    console.log("Error : " + error)
  }
})