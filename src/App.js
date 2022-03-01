import { useState, useEffect } from 'react'
import axios from 'axios'
import Coin from './Coin.js'
import './App.css'
function App() {
  const [coins, setCoins] = useState([]);
  const [search, setSearch] = useState('');
  useEffect(() => {
    axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=vnd&order=market_cap_desc&per_page=100&page=1&sparkline=false')
      .then(res => {
        setCoins(res.data)
        console.log(res.data)
      })
  }, [])
  const filteredCoins = coins.filter(coin => {
    return coin.name.toLowerCase().includes(search.toLowerCase());
  })
  return (
    <div className='coin-tracker-app'>
      <div className='coin-search'>
        <h1 className='search-heading'>Search a currency</h1>
        <form>
          <input
            className='search-input'
            placeholder='search'
            value={search}
            onChange={e => { setSearch(e.target.value) }}
          ></input>
        </form>
      </div>
      {filteredCoins.map(coin => {
        return (
          <Coin
            key={coin.id}
            image={coin.image}
            name={coin.name}
            symbol={coin.symbol}
            price={coin.current_price}
            volume={coin.total_volume}
            priceChange={coin.price_change_percentage_24h}
            mktCap={coin.market_cap}
          />
        );
      })}
    </div>

  );
}

export default App;
