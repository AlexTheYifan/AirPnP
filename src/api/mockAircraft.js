import delay from './delay';

const aircrafts = [
    {
        aircraftName : "SUPERMARINE AIRCRAFTĀ MK 26B",
        engineTime : "145 SNEW",
        id : "0",
        img : "http://3.bp.blogspot.com/-ul6EtwAmMpU/VV7ps9LNLsI/AAAAAAAAKDg/tQJmIMbtTYc/s1600/IMG_3407.JPG",
        price : "$350,000",
        propTime : "145 SNEW",
        seats : "2",
        sellerFrom : "Garland, TX",
        sellerName : "Shawn Kelly",
        totalTime : "45",
        year : "2012",
        wishlist: false,
        compare: false
    },
    {
        aircraftName : "2012 MAULE M-7-235C",
        engineTime : "170 SNEW",
        id : "1",
        img : "https://abpic.co.uk/pictures/full_size_0346/1518884-large.jpg",
        price : "$242,000",
        propTime : "170 SNEW",
        seats : "4",
        sellerFrom : "Garland, TX",
        sellerName : "Charlie Miller",
        totalTime : "70",
        year : "2012",
        wishlist: false,
        compare: false
    },
    {
        aircraftName : "2008 MAULE M-7-235C",
        engineTime : "329 SNEW",
        id : "2",
        img : "https://abpic.co.uk/pictures/full_size_0355/1531682-large.jpg",
        price : "$199,000",
        propTime : "329 SNEW",
        seats : "2",
        sellerFrom : "Garland, TX",
        sellerName : "Deshawn Jackson",
        totalTime : "329",
        year : "2008",
        wishlist: false,
        compare: false
    },
    {
        aircraftName : "2005 CIRRUS SR20-G2",
        engineTime : "367 SFRM",
        id : "3",
        img : "http://www.airport-data.com/images/aircraft/small/000/817/817684.jpg",
        price : "$159,900",
        propTime : "392 SPOH",
        seats : "4",
        sellerFrom : "Markham, ON",
        sellerName : "Apex Aircraft Sales Ltd.",
        totalTime : "2359",
        year : "2005",
        wishlist: false,
        compare: false
    },
    {
        aircraftName : "1978 CESSNA T210M",
        engineTime : "980 HOUR",
        id : "4",
        img : "https://static1.squarespace.com/static/57d01f21893fc05a86d7f4bc/t/59133039a5790a3f09954473/1494429763432/1978+Cessna+T210M",
        price : "$157,000",
        propTime : "200 HOUR",
        seats : "6",
        sellerFrom : "Boise, ID",
        sellerName : "James Sparling",
        totalTime : "3165",
        year : "1978",
        wishlist: false,
        compare: false
    },
    {
        aircraftName : "2006 MOONEY M20M BRAVO",
        engineTime : "943 SNEW",
        id : "5",
        img : "https://c1.staticflickr.com/6/5513/18883821112_888d01ff14_b.jpg",
        price : "$219,000",
        propTime : "199 SPOH",
        seats : "4",
        sellerFrom : "Markham, ON",
        sellerName : "Dennis Morgan",
        totalTime : "1043",
        year : "2006",
        wishlist: false,
        compare: false
    }
];

class AircraftApi{
    static getAllAircrafts(){
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(Object.assign([], aircrafts));
            }, delay);
        });
    }

    static updateWishlist(aircraft){
        var aircraftId = aircraft.id;
        return new Promise((resolve, reject) => {
            setTimeout(() => {

                const indexOfAircraft = aircrafts.findIndex(aircraft => {
                    return aircraft.id == aircraftId;
                });
                var newAircraft = Object.assign([], aircrafts[indexOfAircraft]);
                newAircraft['wishlist'] = !newAircraft['wishlist'];
                aircrafts.splice(indexOfAircraft, 1, newAircraft);
                resolve(Object.assign([],aircrafts));
            }, delay);
        });
    }

    static updateCompare(aircraft){
        var aircraftId = aircraft.id;
        return new Promise((resolve, reject) => {
            setTimeout(() => {

                const indexOfAircraft = aircrafts.findIndex(aircraft => {
                    return aircraft.id == aircraftId;
                });
                var newAircraft = Object.assign([], aircrafts[indexOfAircraft]);
                newAircraft['compare'] = !newAircraft['compare'];
                aircrafts.splice(indexOfAircraft, 1, newAircraft);
                resolve(Object.assign([],aircrafts));
            }, delay);
        });
    }
}

export default AircraftApi;