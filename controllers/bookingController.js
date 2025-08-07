const Booking=require("../models/Booking.js");
const Event=require("../models/Event.js");

exports.getBookings = async (req, res) => {
  try {
    const bookings = await Booking.find({ user: req.user.id })
      .populate("event")
      .sort({ createdAt: -1 });

    res.json(bookings);
  } catch (error) {
    console.error(error)
    res.status(500).json({ message: "Failed to fetch bookings" });
  }
};

exports.bookEvent=async(req,res)=>{
    const event=await Event.findById(req.params.eventId);
    if(!event){
        return res.status(404).json({message:"Event not found"});
    }

    if(event.bookings>=event.capacity){
        return res.status(400).json({message:"Event full"});
    }
    const existing=await Booking.findOne({user:req.user.id,event:event._id});
    if(existing){
        return res.status(400).json({message:"Already Booked"});
    }

    await Booking.create({user:req.user.id,event:event._id});
    event.bookings++;
    await event.save();
    res.json({message:"Booking successful"});
};

exports.cancelBooking=async (req,res)=>{
    const booking=await Booking.findOneAndDelete({user:req.user.id,event:req.params.eventId});
    if(!booking){ 
        return res.status(404).json({message:"Booking not found"}); 
    }

    const event=await Event.findById(req.params.eventId);
    if(event && event.bookings>0){
        event.bookings--;
        await event.save();
    }
    res.json({message:"Booking cancelled"});
};