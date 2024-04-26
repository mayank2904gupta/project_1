import React from "react";
import PlaceList from "../components/PlaceList";
import { useParams } from "react-router-dom";
const DUMMY_PLACES =[
    {
        id:'p1',
        title: 'empire state building',
        description: "one of the most skyscrapper",
        imageUrl: '/images/homein.png',
        address: '20W 43 th sth ', 
        location: {
            lat: 40.23454,
            lng: -72.23421
        } ,
        creator: 'u1'
    },
    {
        id:'p2',
        title: 'empire state building',
        description: "one of the most skyscrapper",
        imageUrl: '/images/homein.png',
        address: '2W 43 th sth ', 
        location: {
            lat: 40.23454,
            lng: -72.23421
        } ,
        creator: 'u2' 
    },

];



const UserPlaces = () =>{
    const userId=useParams().userId;
    const loadedPlaces =DUMMY_PLACES.filter(place=>place.creator===userId);
    return <PlaceList items={loadedPlaces} />;
};

export default UserPlaces;