import mongoose from "mongoose";
import Flight from "../Models/flight.schema.js";
import userBookingModel from "../Models/userbooking.schema.js";

export const fligthSearch = async (req, res) => {
  try {
    const {
      departureAirportCode,
      departureAirport,
      departureCity,
      arrivalAirportCode,
      departureDate,
      returnDate,
      arrivalAirport,
      arrivalCity,
      passengercount,
      cabinClass,
    } = req.body;

    console.log(returnDate);

    const setflight = await Flight.updateMany(
      {},
      {
        $set: {
          departureAirportCode: departureAirportCode,
          departureAirport: departureAirport,
          departureCity: departureCity,
          arrivalAirportCode: arrivalAirportCode,
          arrivalAirport: arrivalAirport,
          departureDate: departureDate,
          returnDate: returnDate,
          arrivalCity: arrivalCity,
          passengercount: passengercount,
          cabinClass: cabinClass,
        },
      }
    );
    if (setflight) {
      const flightList = await Flight.find();
      return res
        .status(200)
        .json({ message: "Flight updated", data: flightList });
    }
  } catch (error) {
    return res.status(500).json({ message: "internal error", error });
  }
};

export const createFlight = async (req, res) => {
  try {
    const {
      airline,
      flightNumber,
      departureTime,
      arrivalTime,
      flightDuration,
      price,
      availableSeats,
      logo_url,
    } = req.body;

    const setflight = await Flight.create({
      airline: airline,
      flightNumber: flightNumber,
      departureTime: departureTime,
      arrivalTime: arrivalTime,
      flightDuration: flightDuration,
      price: price,
      availableSeats: availableSeats,
      logo_url: logo_url,
    });

    return res.status(200).json({ message: "Flight Created", data: setflight });
  } catch (error) {
    console.log(error);

    return res.status(500).json({ message: "Internal Error", error });
  }
};

export const flightlist = async (req, res) => {
  try {
    const flights = await Flight.find();

    res.status(200).json({ message: "Flight List Found", data: flights });
  } catch (error) {
    res.status(500).json({ message: "Error in Finding Flights" });
  }
};

export const userBooking = async (req, res) => {
  try {
    const updateUserBooking = await userBookingModel.create(req.body);

    await updateUserBooking.save();

    if (!updateUserBooking)
      return res
        .status(200)
        .json({ message: "User Booking Details Not Inserted" });
    else
      return await res.status(200).json({
        message: "User Booking Details Inserted",
        data: updateUserBooking,
      });
  } catch (error) {
    return res.status(500).json({
      message: "User Booking Details Not Inserted ---- Error in Server Side",
      error,
    });
  }
};

export const getBooking = async (req, res) => {
  try {
    const { username } = req.body;

    const BookingDetails = await userBookingModel.find({ username: username });

    if (BookingDetails)
      return res.status(200).json({
        message: "Booked Details --Success-- Server Side",
        data: BookingDetails,
      });
  } catch (error) {
    console.log(console.error());

    return res
      .status(500)
      .json({ message: "Server Error --- Getting Booking Details" });
  }
};
