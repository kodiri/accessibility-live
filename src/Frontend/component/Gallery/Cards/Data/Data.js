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
        "description": "The London Underground is a system of electric trains that are in London.",
        "tag": "Public",
        "pageLink": "/Underground"
    },
    {
        "_id": "2",
        "index": 1,
        "picture": overground,
        "title": "Overground",
        "description": "London Overground is a suburban rail network serving London and its environs. ",
        "tag": "Public",
        "pageLink": "/Overground"
    },
    {
        "_id": "3",
        "index": 2,
        "picture": bus,
        "title": "Bus",
        "description": "London Buses is the subsidiary of Transport for London (TfL) that manages bus services within Greater London.",
        "tag": "Public",
        "pageLink": "/Bus"
    },
	{
        "_id": "4",
        "index": 3,
        "picture": coach,
        "title": "Coach",
        "description": "London possess different bus companies of transport from the city to destinations around the Uk.",
        "tag": "Public",
        "pageLink": "/Coaches"
    },
	{
        "_id": "5",
        "index": 4,
        "picture": dlr,
        "title": "DLR",
        "description": "The Docklands Light Railway is an automated light metro system to serve the redeveloped Docklands area of East London.",
        "tag": "Public",
        "pageLink": "/Docklands"
    },
	{
        "_id": "6",
        "index": 5,
        "picture": nationalrail,
        "title": "National Rail",
        "description": "National Rails is the brand to promote the rail network services, which commutes specially in Southern London.",
        "tag": "Public",
        "pageLink": "/NationalRail"
    },
	{
        "_id": "7",
        "index": 6,
        "picture":  tramlink,
        "title": "Tramlink",
        "description": "Tramlink is a light rail tram system serving Croydon and surrounding areas in South London.",
        "tag": "Public",
        "pageLink": "/Tramlink"
    },
	{
        "_id": "8",
        "index": 7,
        "picture": emirates,
        "title": "The Emirate Air Line",
        "description": "The Emirates Air Line is a cable car link across the River Thames in London.",
        "tag": "Public",
        "pageLink": "/EmiratesAirLine"
    },
	{
        "_id": "9",
        "index": 8,
        "picture": eurostar,
        "title": "Eurostar",
        "description": "Eurostar is a high-speed railway service connecting London with Netherlands and France.",
        "tag": "Public",
        "pageLink": "/Eurostar"
    },
	{
        "_id": "10",
        "index": 9,
        "picture": dial,
        "title": "Dial-a-Ride",
        "description": "Dial-a-Ride is bus which alters its route based on particular demand rather than using a fixed route or timetable.",
        "tag": "Door-to-door",
        "pageLink": "/DialARide"
    },
	{
        "_id": "11",
        "index": 10,
        "picture": taxicard,
        "title": "Taxicard",
        "description": "The Taxicard scheme is subsidised by the London boroughs and the Mayor of London, which means you pay considerably reduced fares.",
        "tag": "Door-to-door",
        "pageLink": "/Taxicard"
    },
	{
        "_id": "12",
        "index": 11,
        "picture":  capital,
        "title": "Capital Call",
        "description": "The Capital Call scheme operated by TfL is closed to new members. However the scheme continues to operate for its existing members.",
        "tag": "Door-to-door",
        "pageLink": "/CapitalCall"
    },
	{
        "_id": "13",
        "index": 12,
        "picture": nhs,
        "title": "Patient Transport",
        "description": "The patient transport services are responsible for transporting people to and from hospital appointment.",
        "tag": "Door-to-door",
        "pageLink": "/Nhs"
    },
	{
        "_id": "14",
        "index": 13,
        "picture": community,
        "title": "Community Transport",
        "description": "Community Transport schemes are voluntary sector organisations that vary between boroughs.",
        "tag": "Door-to-door",
        "pageLink": "/Community"
    },
	{
        "_id": "15",
        "index": 14,
        "picture": redbridge,
        "title": "Redbridge Mobility Card",
        "description": "Redbridge Mobility Card scheme it’s a door to door service which provides accessible transport to disabled people residents in Gants Hill ",
        "tag": "Door-to-door",
        "pageLink": "/Redbridge"
    },
	{
        "_id": "16",
        "index": 15,
        "picture": blue,
        "title": "Blue badge",
        "description": "The Blue Badge scheme is a Europe-wide scheme that entitles disabled people to additional parking rights.",
        "tag": "Concessionary",
        "pageLink": "/Bluebadge"
    },
	{
        "_id": "17",
        "index": 16,
        "picture": free,
        "title": "Freedom Pass",
        "description": "A Freedom Pass entitles the holder to 24-hour free travel across Transport for London’s networks.",
        "tag": "Concessionary",
        "pageLink": "/Freedompass"
    },
	{
        "_id": "18",
        "index": 17,
        "picture":  disabledrailcard,
        "title": "Disabled Railcard",
        "description": "The Railcard will entitle both you and an adult companion to one third off most rail fares throughout the UK.",
        "tag": "Concessionary",
        "pageLink": "/DisabledRailcard"
    },
	{
        "_id": "19",
        "index": 18,
        "picture": nationalcoach,
        "title": "National Express Coachcard",
        "description": "National Express counts with two discount cards entitling disabled and older passengers to a discount of one third of the ticket price.",
        "tag": "Concessionary",
        "pageLink": "/Natinalcoach"
    },
	{
        "_id": "20",
        "index": 19,
        "picture": oyster,
        "title": "60+ Oystercard",
        "description": "Free travel on Transport for London (TfL) services for all Londoners when they reach 60 years old.",
        "tag": "Concessionary",
        "pageLink": "/60Oystercard"
    },
	{
        "_id": "21",
        "index": 20,
        "picture": scooter,
        "title": "Mobility Scooters",
        "description": "Electric mobility are a way of not having to rely on family, friends or door-to-door services and can be a significant boost to your independence.",
        "tag": "Personal",
        "pageLink": "/Scooter"
    },
	{
        "_id": "22",
        "index": 21,
        "picture": cycling,
        "title": "Cycling",
        "description": "There are many organisations offering cycling opportunities to disabled people.",
        "tag": "Personal",
        "pageLink": "/Cycling"
    },
	{
        "_id": "23",
        "index": 22,
        "picture": shop,
        "title": "Shopmobility",
        "description": "Shopmobility is a nationwide scheme that lends wheelchairs and scooters to people with limited mobility, thus allowing them to shop within a town.",
        "tag": "Personal",
        "pageLink": "/Shopmobility"
    }
    ]
}

export default data;