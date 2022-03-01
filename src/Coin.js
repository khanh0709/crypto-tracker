import React from 'react'
import './Coin.css'
const Coin = ({image, name, symbol, price, volume, priceChange, mktCap}) => {
  return (
    <div className="coin-container">
        <div className="coin-row">
            <div className='coin-info'>
                <div className='coin-image-wrap'>
                    <img className='coin-image' src ={image}/>
                </div>
                <p className='coin-name'>{name}</p>
                <p className='coin-symbol'>{symbol.toUpperCase()}</p>
            </div>
            <div className='coin-data'>
                <p className='coin-price'>
                    {'$' + price.toLocaleString()}
                </p>
                <p className='coin-volume'>
                    {'$' + volume.toLocaleString()}
                </p>
                {priceChange < 0 ? 
                    <p className='coin-price-change red'>{priceChange.toFixed(2) + '%'}</p> :
                    <p className='coin-price-change green'>{priceChange.toFixed(2) + '%'}</p>
                }
                <p className='coin-mkt-cap'>
                    {'$' + mktCap.toLocaleString()}
                </p>
            </div>
        </div>
    </div>
  )
}

export default Coin