import React , { useEffect , useState } from 'react';
import { getCoin } from "../services/api";
import Load from "./Load";
import Coin from "./Coin";
import styles from "./Landing.module.css"

const Landing = () => {
    const [ coins , setCoins ] = useState ( [] );
    const [ search , setSearch ] = useState ( "" );
    const searchHandler = ( event ) => {
        setSearch ( event.target.value );
    }
    const searchedCoins = coins.filter ( coin => coin.name.toLowerCase ().includes ( search.toLowerCase () ) )
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
            <input className={styles.input} type="text" placeholder="Search" value={search} onChange={searchHandler} />
            {
                coins.length ?
                    <div className={styles.coinContainer}>
                        {
                            searchedCoins.map(coin => <Coin
                                key={coin.id}
                                name={coin.name}
                                image={coin.image}
                                symbol={coin.symbol}
                                price={coin.current_price}
                                marketCap={coin.market_cap}
                                priceChange={coin.price_change_percentage_24h}
                            />)
                        }
                    </div> :

                    <Load />
            }

        </>
    );
};

export default Landing;