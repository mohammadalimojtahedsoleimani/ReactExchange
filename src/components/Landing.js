import React , { useEffect , useState } from 'react';
import { getCoin } from "../services/api";
import Load from "./Load";

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
            <input type="text" placeholder="Search"/>
            {
                coins.length ?
                    <div>
                        {
                            coins.map ( coin => <p key={ coin.id }>{ coin.name }</p> )
                        }
                    </div>
                    :
                    <Load/>
            }

        </>
    );
};

export default Landing;