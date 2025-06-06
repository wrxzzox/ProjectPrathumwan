const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const cookieParser = require("cookie-parser");
const cors = require("cors");

// Route files
// const hotels = require("./routes/hotels");

const app = express();
app.use(express.json());

//Load env vars
dotenv.config({path:"./config/config.env"});

//Connect to database
connectDB();

//Cookie Parser
app.use(cookieParser());

app.use(cors({
    origin: "*",
    credentials : false
}));

// app.use("/api/v1/hotels", hotels);

app.get("/", (req, res) => {
    res.status(200).json({success: true, data:{id:1}});
});

const PORT = process.env.PORT || 5000;

const server = app.listen(PORT, () => {
    console.log(`Server running in ${process.env.NODE_ENV} mode on port ${process.env.HOST}:${PORT}`);
});

process.on("unhandledRejection", (err, promise) => {
    console.log(`Error: ${err.message}`);
    server.close(()=>process.exit(1));
});
