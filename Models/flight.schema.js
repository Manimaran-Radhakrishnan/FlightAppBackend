import mongoose from "mongoose";

const flightSchema = mongoose.Schema({
  airline: String,

  logo_url: String,

  flightNumber: String,

  departureAirportCode: String,

  departureAirport: String,

  departureCity: String,

  departureTime: String,

  departureDate: String,

  returnDate: String,

  arrivalAirportCode: String,

  arrivalAirport: String,

  arrivalCity: String,

  arrivalTime: String,

  flightDuration: String,

  aircraftType: String,

  distance: String,

  price: String,

  availableSeats: Number,

  flightStatus: String,

  totalPrice: Number,

  passengercount: Number,

  cabinClass: String,

  passengers: [
    {
      name: String,
      age: Number,
      seatNumber: String,
    },
  ],
});

const Flight = await mongoose.model("Flight", flightSchema);

export default Flight;
