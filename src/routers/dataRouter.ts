import express from "express";
import * as utils from "../utils";

const dataRouter = express.Router();

interface EventData {
  title: string;
  description: string;
  location: string;
  time: string;
  currCap: number;
  capacity: number;
  id: number;
  lat: number;
  lng: number;
}

dataRouter.post("/add-event", (req, res) => {
  const eventData: EventData = req.body;

  utils.addEvent(eventData)
    .then(() => res.status(201).send({ message: "Event added successfully" })) 
    .catch((error: any) => {
      console.error("Error adding event:", error); 
      res.status(500).send({ error: "Failed to add event" }); 
    });
});

dataRouter.delete("/remove-event", (req, res) => {
  const eventId: number = req.body.id;

  utils.removeEvent(eventId)
    .then(() => res.status(200).send({ message: "Event removed successfully" }))
    .catch((error: any) => {
      console.error("Error removing event:", error);
      res.status(500).send({ error: "Failed to remove event" });
    });
});


dataRouter.get("/get-events", (req, res) => {
  utils.getEvents()
    .then((events) => {
      res.status(200).json(events); 
    })
    .catch((error: any) => {
      console.error("Error getting events:", error);
      res.status(500).send({ error: "Failed to get events" });
    });
});

export { dataRouter };