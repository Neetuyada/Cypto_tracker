import { LineChart, Line } from 'recharts';

const Sparkline = ({ data }) => {
    const formattedData = data.map((price, index) => ({ index, price }));

    return (
        <LineChart width={100} height={50} data={formattedData}>
            <Line type="monotone" dataKey="price" stroke="#00c853" strokeWidth={2} dot={false} />
        </LineChart>
    );
};

export default Sparkline;
