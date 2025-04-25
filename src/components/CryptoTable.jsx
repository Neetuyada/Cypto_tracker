import React from 'react';
import { useSelector } from 'react-redux';
import CryptoRow from './CryptoRow';
import { FaInfoCircle } from 'react-icons/fa'; // Import Info icon

const CryptoTable = () => {
    const assets = useSelector((state) => state.crypto.assets);

    return (
        <div className="table-container" style={{ width: '100%', overflowX: 'auto', padding: '20px' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Price</th>
                        <th>1h %</th>
                        <th>24h %</th>
                        <th>7d %</th>

                        {/* Market Cap with info icon */}
                        <th style={{ alignItems: "center", gap: "4px" }}>
                            Market Cap
                            <FaInfoCircle size={12} color="gray" />
                        </th>

                        {/* Volume(24h) with info icon */}
                        <th style={{ alignItems: "center", gap: "4px" }}>
                            24h Volume
                            <FaInfoCircle size={12} color="gray" />
                        </th>

                        {/* Circulating Supply with info icon */}
                        <th style={{ alignItems: "center", gap: "4px" }}>
                            Circulating Supply
                            <FaInfoCircle size={12} color="gray" />
                        </th>

                        <th>Last 7 Days</th>
                    </tr>
                </thead>

                <tbody>
                    {assets.map((asset, index) => (
                        <CryptoRow key={asset.id} asset={asset} index={index + 1} />
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default CryptoTable;
