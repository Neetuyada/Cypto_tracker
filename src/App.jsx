import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateAssets } from './features/cryptoSlice';
import CryptoTable from './components/CryptoTable';
import './styles.css';

const App = () => {
    const dispatch = useDispatch();
    const assets = useSelector((state) => state.crypto.assets);

    useEffect(() => {
        const interval = setInterval(() => {
            const updatedAssets = assets.map(asset => ({
                ...asset,
                price: parseFloat((asset.price * (1 + (Math.random() - 0.5) / 100)).toFixed(2)),
                change1h: parseFloat((Math.random() * 2 - 1).toFixed(2)),
                change24h: parseFloat((Math.random() * 5 - 2.5).toFixed(2)),
                volume24h: Math.floor(asset.volume24h * (1 + (Math.random() - 0.5) / 10)),
            }));

            dispatch(updateAssets(updatedAssets));
        }, 1500);

        return () => clearInterval(interval);
    }, [assets, dispatch]);

    return (
        <div className="App">
            <h1>Real-Time Crypto Tracker</h1>
            <CryptoTable />
        </div>
    );
};

export default App;
