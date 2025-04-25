import React from 'react';
import { LineChart, Line } from 'recharts';
import { FaArrowUp, FaArrowDown } from 'react-icons/fa'; // install react-icons if not yet

const CryptoRow = ({ asset, index }) => {
    const formatNumber = (num) => {
        if (!num) return "N/A";
        return typeof num === "number" ? num.toLocaleString() : num;
    };

    const sparklineData = asset.sparkline_in_7d?.price?.map((price, idx) => ({
        index: idx,
        price: price,
    })) || [];

    // Helper for change fields (1h, 24h, 7d)
    const renderChange = (value) => {
        const isPositive = value >= 0;
        return (
            <span style={{ color: isPositive ? 'green' : 'red', display: "flex", alignItems: "center", gap: "4px" }}>
                {isPositive ? <FaArrowUp size={10} /> : <FaArrowDown size={10} />}
                {value}%
            </span>
        );
    };

    return (
        <tr>
            <td>{index}</td>

            {/* Logo + Name + Symbol */}
            <td style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                <img src={asset.logo || asset.image} alt={asset.name} width="24" />
                <div>
                    <div>{asset.name}</div>
                    <small style={{ color: "gray" }}>{asset.symbol?.toUpperCase()}</small>
                </div>
            </td>

            <td>${formatNumber(asset.price)}</td>

            <td>{renderChange(asset.change1h)}</td>
            <td>{renderChange(asset.change24h)}</td>
            <td>{renderChange(asset.change7d)}</td>

            <td>${formatNumber(asset.marketCap)}</td>

            {/* Volume + Supply */}
            <td>
                ${formatNumber(asset.volume24h)}
                <br />
                <small style={{ color: "gray" }}>{asset.maxSupply}</small>
            </td>

            {/* Circulating Supply */}
            <td>{asset.circulatingSupply}</td>

            {/* Last 7 Days Sparkline */}
            <td>
                {sparklineData.length > 0 ? (
                    <LineChart width={100} height={50} data={sparklineData}>
                        <Line type="monotone" dataKey="price" stroke="#00c853" strokeWidth={2} dot={false} />
                    </LineChart>
                ) : (
                    "N/A"
                )}
            </td>
        </tr>
    );
};

export default CryptoRow;
