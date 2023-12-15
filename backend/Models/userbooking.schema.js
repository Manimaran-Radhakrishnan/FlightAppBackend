import mongoose from "mongoose";

const passengerSchema = mongoose.Schema({
  age: Number,
  email: String,
  gender: String,
  mobile: String,
  name: String,
  seatNumber: String,
});

const userBookingSchema = mongoose.Schema({
  username: String,
  emailid: String,
  passengerDetails: [passengerSchema],

  airline: String,
  arrivalAirport: String,
  arrivalAirportCode: String,
  arrivalCity: String,
  arrivalTime: String,
  availableSeats: String,
  cabinClass: String,
  dapartureDate: String,
  departureAirport: String,
  departureAirportCode: String,
  departureCity: String,
  departureDate: String,
  departureTime: String,
  flightDuration: String,
  flightNumber: String,
  logo_url: String,
  passengercount: String,
  passengers: String,
  price: String,
  returnDate: String,
  cabinClass: String,
  totalCost: String,
  bookedDate: String,
  ticketNumber: String,
});

const userBookingModel = mongoose.model("userBookingModel", userBookingSchema);

export default userBookingModel;
