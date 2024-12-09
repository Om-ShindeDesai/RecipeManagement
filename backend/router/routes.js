const express = require('express');
const myroute = express.Router();
const connection = require('../db/dbConnection');

// get all Recipes
myroute.get("/recipes", (req,res)=>{
    connection.query("Select * from Recipes", (err,data) => {
        if(!err){
            return res.status(200).json(data);
        }
        res.status(500).json(err);
    })
})

//to add recipes
myroute.post("/recipes", (req,res)=>{
    const {Title, Ingredients, Category} = req.body;
    connection.query("insert into Recipes values (default, ?, ?, ?)", [Title, Ingredients, Category], (err,data) => {
        if(!err){
            return res.status(200).json({message: "Recipe added successfully"});
        }
        res.status(500).json(err);
    });
})

//update the recipes
myroute.put("/recipes/:id", (req,res)=>{
    const {Title, Ingredients, Category} = req.body;
    connection.query("update Recipes set Title = ?, Ingredients = ?, Category =? where Id = ?", [Title, Ingredients, Category, req.params.id], (err,data) => {
        if(!err){
            return res.status(200).json({message: "Recipe updated successfully"});
        }
        res.status(500).json(err);
    });
})

//delete the recipes
myroute.delete("/recipes/:id", (req,res)=>{
    connection.query("delete from Recipes where id = ? ", [req.params.id], (err,data) => {
        if(!err){
            return res.status(200).json({message: "Recipe deleted successfully"});
        }
        res.status(500).json(err);
    });
});

module.exports = myroute;