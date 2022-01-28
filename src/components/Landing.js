import React , { useEffect , useState } from 'react';
import { getCoin } from "../services/api";

const Landing = () => {
    const [ coins , setCoins ] = useState ( [] );
    useEffect ( () => {
        const fetchAPI = async () => {
            const data = await getCoin ();
            console.log ( data )
            setCoins ( data );
        }
        fetchAPI ();
    } , [] )
    return (
        <>
           <input type="te"/>
        </>
    );
};

export default Landing;