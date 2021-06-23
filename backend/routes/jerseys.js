const mongoose = require("mongoose")
const express = require("express")
const router = express.Router()

// routes
// get all jerseys 
router.get("/", (req, res) =>{
    res.send("list of jerseys")
})
router.get("/list", (req, res) =>{
    res.send("list of jerseys")
})

module.exports = router