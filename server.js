const express = require("express");
const mongoose = require("mongoose");
const session = require("express-session");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const cors = require("cors");
const passport = require("passport");
const Strategy = require("passport-facebook").Strategy;
const { readdirSync } = require("fs");
const router = express.Router();
require("dotenv").config();

//import routes
// const authRoutes = require("./routes/auth");

//app
const app = express();

// import dotenv
const dotenv = require("dotenv");
dotenv.config();

// database connection
mongoose
  .connect(process.env.MONGODB_CONNECTON_URI, {
    useNewUrlParser: true,
  })
  .then(() => console.log("DB Connected"))
  .catch((err) => console.log(err));

mongoose.connection.on("error", (err) => {
  console.log(`DB CONNETION ERROR: ${err.message}`);
});

//middlewares

// morgan is a Node. js and Express middleware to log HTTP requests and errors, and simplifies
// the process. In Node. js and Express, middleware is a function that has access to the request
//  and response lifecycle methods, and the next() method to continue logic in your Express server
app.use(morgan("dev"));
app.use(bodyParser.json({ limit: "50mb" }));
app.use(cors());

app.use(
  session({
    secret: "your-secret-key",
    resave: false,
    saveUninitialized: false,
  })
);

// Configure Passport authenticated session persistence.
passport.serializeUser(function (user, cb) {
  cb(null, user);
});

passport.deserializeUser(function (obj, cb) {
  cb(null, obj);
});

passport.use(
  new Strategy(
    {
      clientID: process.env.FB_APP_ID,
      clientSecret: process.env.FB_KEY,
      callbackURL:
        "https://celebs-backend-1x4a.onrender.com/api/facebook/callback",
    },
    function (accessToken, refreshToken, profile, cb) {
      console.log("accessToken", accessToken);
      return cb(null, profile);
    }
  )
);

// Initialize Passport and restore authentication state, if any, from the
// session.
router.use(passport.initialize());
router.use(passport.session());

// routes middleware
readdirSync("./routes").map((r) => app.use("/api", require("./routes/" + r)));

// app.use("/api", authRoutes);

//port
const port = process.env.port || 8000;
app.listen(port, () => console.log(`Server is running on port ${port}`));
