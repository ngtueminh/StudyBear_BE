import * as dbManager from "../database";
import { IEvent, eventModel } from "../database"; // Import eventModel
import { Types } from "mongoose";

function addEvent(event: IEvent) {
  return dbManager.addEvent(event);
}
async function removeEvent(eventId: string): Promise<void> {
	try {
	  const deletedEvent = await eventModel.findOneAndDelete({ id: parseInt(eventId) });  
  
	  if (!deletedEvent) {
		throw new Error(`Event with ID ${eventId} not found`);
	  }
	} catch (error) {
	  console.error("Error removing event:", error);
	  throw error;
	}
  }
function getEvents() {
  return dbManager.getEvents();
}

export { addEvent, removeEvent, getEvents };