import React, { useEffect, useState } from 'react';
import '../App.css';
import { Card, Spin } from 'antd';

const { Meta } = Card;

interface Product {
    id: number;
    image: string;
    title: string;
    description: string;
}

const Products: React.FC = () => {
    const [products, setProducts] = useState<Product[]>([]);
    const [loading, setLoading] = useState<boolean>(true);

    const getData = async () => {
        try {
            setLoading(true);
            const response = await fetch('https://fakestoreapi.com/products/category/electronics');
            const json = await response.json();
            setProducts(json);
            setLoading(false);
            console.log(products);
        } catch (error: unknown) {
            setLoading(false);
            console.log((error as Error).message);
        }
    };

    useEffect(() => {
        setTimeout(() => {
            getData();
        }, 1500);
    }, []);

    if (loading) {
        return <Spin size="large" />;
    }

    return (
        <div className="products">
            {products.map((el) => (
                <Card
                    key={el.id}
                    hoverable
                    style={{ width: 240, padding: 20 }}
                    cover={<img height="250px" alt="example" src={el.image} />}
                >
                    <Meta title={el.title} description={``} />
                    <span>{el.description.slice(0, 60)}</span>
                </Card>
            ))}
        </div>
    );
};

export default Products;
