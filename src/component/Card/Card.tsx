import React from 'react';
import { Card } from 'antd';

interface Props {
    img: string;
    name: string;
    year: number;
    rate: number;
}

const { Meta } = Card;

const Cards: React.FC<Props> = (props) => (
    <Card
        hoverable
        style={{ width: 240 }}
        cover={<img alt="example" src={props.img} />}
    >
        <Meta title={props.name} description={`${props.year} Rating: ${props.rate}`} />
    </Card>
);

export default Cards;
