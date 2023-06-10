import React, { useEffect, useState } from 'react';
import { Layout } from 'antd';
import Ani from './Footer/Ani';
import '../App.css';
import Card from './Card/Card';

const { Content } = Layout;

interface FilmData {
    name: string;
    img: string;
    year: number;
    rate: number;
}

const AppHeader: React.FC = () => {
    const [data, setData] = useState<FilmData[]>([]);
    const bgContainerColor = 'none';

    useEffect(() => {
        const storedFilm = localStorage.getItem('film');
        if (storedFilm) {
            const filmData: FilmData[] = JSON.parse(storedFilm);
            setData(filmData);
        }
    }, []);

    return (
        <Layout>
            <Content style={{ padding: '0 0px' }}>
                <Layout style={{ padding: '0px 0', background: bgContainerColor }}>
                    <div className="home-header">Welcome</div>
                    <Ani />
                    <hr />
                    <h1 style={{ textAlign: 'center', marginTop: '20px', fontSize: '40px' }}>
                        <span className="blinking-word">Аниме</span>
                    </h1>
                    <div className="cards-home">
                        {data.map((el) => (
                            <Card key={el.name} img={el.img} year={el.year} rate={el.rate} name={el.name} />
                        ))}
                    </div>
                </Layout>
            </Content>
        </Layout>
    );
};

export default AppHeader;
