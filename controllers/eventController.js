const Event = require("../models/Event.js");

exports.getEvents = async (req, res) => {
    const events=await Event.find();
    res.json(events);
};

exports.addEvents=async (req,res)=>{
    const {name,date,location,capacity}=req.body;
    const event=await Event.create({name,date,location,capacity});
    res.status(201).json(event);
};

exports.updateEvents=async (req,res)=>{
    const event=await Event.findByIdAndUpdate(req.params.id,req.body,{new:true});
    res.json(event);
};

exports.deleteEvents=async (req,res)=>{
    const event=await Event.findByIdAndDelete(req.params.id);
    res.json({message:"Event deleted"});
};