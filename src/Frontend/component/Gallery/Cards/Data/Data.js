/* Public */

import bus from "../Images/bus.jpg";
import coach from "../Images/coaches.jpg";
import dlr from "../Images/dlr.jpg";
import emirates from "../Images/emirates.jpg";
import eurostar from "../Images/eurostar.jpg";
import nationalrail from "../Images/nationalrail.jpg";
import overground from "../Images/overground.jpg";
import underground from "../Images/underground.jpg";
import tramlink from "../Images/tramlink.jpg";

/* Door to door */

import dial from "../Images/diala.jpg";
import taxicard from "../Images/taxicard.jpg";
import capital from "../Images/capitalcall.jpg";
import community from "../Images/community.jpg";
import nhs from "../Images/nhs.jpg";
import redbridge from "../Images/redbridge.jpg";


/* Concesionary */

import blue from "../Images/bluebadge.png";
import free from "../Images/free.jpg";
import nationalcoach from "../Images/disabledcoach.jpg";
import disabledrailcard from "../Images/disabledrail.jpg";
import oyster from "../Images/60oyster.jpg";

/* Personal */

import scooter from "../Images/scooter.jpg";
import cycling from "../Images/cycling.jpg";
import shop from "../Images/shop.jpg";

const data = {
    "services": [
    {
        "_id": "1",
        "index": 0,
        "picture": underground,
        "title": "Underground",
        "description": "Short Description",
        "tag": "Public"

    },
    {
        "_id": "2",
        "index": 1,
        "picture":  overground,
        "title": "Overground",
        "description": "Short Description",
        "tag": "Public"
    },
    {
        "_id": "3",
        "index": 2,
        "picture":  bus,
        "title": "Bus",
        "description": "Short Description",
        "tag": "Public"
    },
	{
        "_id": "4",
        "index": 3,
        "picture": coach,
        "title": "Coach",
        "description": "Short Description",
        "tag": "Public"
    },
	{
        "_id": "5",
        "index": 4,
        "picture":  dlr,
        "title": "DLR",
        "description": "Short Description",
        "tag": "Public"
    },
	{
        "_id": "6",
        "index": 5,
        "picture": nationalrail,
        "title": "National Rail",
        "description": "Short Description",
        "tag": "Public"
    },
	{
        "_id": "7",
        "index": 6,
        "picture":  tramlink,
        "title": "Tramlink",
        "description": "Short Description",
        "tag": "Public"
    },
	{
        "_id": "8",
        "index": 7,
        "picture": emirates,
        "title": "The Emirate Air Line",
        "description": "Short Description",
        "tag": "Public"
    },
	{
        "_id": "9",
        "index": 8,
        "picture":  eurostar,
        "title": "Eurostar",
        "description": "Short Description",
        "tag": "Public Transport"
    },
	{
        "_id": "10",
        "index": 9,
        "picture":  dial,
        "title": "Dial-a-Ride",
        "description": "Short Description",
        "tag": "Door to Door"
    },
	{
        "_id": "11",
        "index": 10,
        "picture": taxicard,
        "title": "Taxicard",
<<<<<<< HEAD
        "description": "Short Description"
    },
    {
        "_id": "3",
        "index": 2,
        "picture":  taxicard,
        "title": "Testcard",
        "description": "Short Description"
=======
        "description": "Short Description",
        "tag": "Door to Door"
    },
	{
        "_id": "12",
        "index": 11,
        "picture":  capital,
        "title": "Capital Call",
        "description": "Short Description",
        "tag": "Door to Door"
    },
	{
        "_id": "13",
        "index": 12,
        "picture": nhs,
        "title": "Patient Transport",
        "description": "Short Description",
        "tag": "Door to Door"
    },
	{
        "_id": "14",
        "index": 13,
        "picture":  community,
        "title": "Community Transport",
        "description": "Short Description",
        "tag": "Door to Door"
    },
	{
        "_id": "15",
        "index": 14,
        "picture": redbridge,
        "title": "Redbridge Mobility Card",
        "description": "Short Description",
        "tag": "Door to Door"
    },
	{
        "_id": "16",
        "index": 15,
        "picture": blue,
        "title": "Blue badge",
        "description": "Short Description",
        "tag": "Door to Door"
    },
	{
        "_id": "17",
        "index": 16,
        "picture": free,
        "title": "Freedom Pass",
        "description": "Short Description",
        "tag": "Concessionary"
    },
	{
        "_id": "18",
        "index": 17,
        "picture":  disabledrailcard,
        "title": "Disabled Railcard",
        "description": "Short Description",
        "tag": "Door to Door",
        "tag": "Concessionary"
    },
	{
        "_id": "19",
        "index": 18,
        "picture": nationalcoach,
        "title": "National Express Coachcard",
        "description": "Short Description",
        "tag": "Concessionary"
    },
	{
        "_id": "20",
        "index": 19,
        "picture": oyster,
        "title": "60+ Oystercard",
        "description": "Short Description",
        "tag": "Concessionary Travel"
    },
	{
        "_id": "21",
        "index": 20,
        "picture": scooter,
        "title": "Mobility Scooters",
        "description": "Short Description",
        "tag": "Personal"
    },
	{
        "_id": "22",
        "index": 21,
        "picture": cycling,
        "title": "Cycling",
        "description": "Short Description",
        "tag": "Personal"
    },
	{
        "_id": "23",
        "index": 22,
        "picture":  shop,
        "title": "Shopmobility",
        "description": "Short Description",
        "tag": "Personal"
>>>>>>> master
    }
    ]
}

export default data;