import { Card, Col, Row } from 'antd';

interface AniProps {
    title: string;
    description: string;
    imageUrl: string;
}

const Ani = () => {
    const aniData: AniProps[] = [
        {
            title: 'Супра',
            description: 'Красотка',
            imageUrl: 'https://motor.ru/thumb/1816x0/filters:quality(75):no_upscale()/imgs/2021/06/20/19/4726009/7285df8059d211af3a9fc441ff7e8377ad50016d.jpg',
        },
        {
            title: 'Япония',
            description: 'Луна',
            imageUrl: 'https://gamerwall.pro/uploads/posts/2022-02/1645572331_2-gamerwall-pro-p-luna-v-yaponii-krasivie-oboi-4.jpg',
        },
        {
            title: 'Тянка',
            description: 'Да',
            imageUrl: 'https://abrakadabra.fun/uploads/posts/2022-01/1641307541_1-abrakadabra-fun-p-sidyashchie-anime-tyan-3.jpg',
        },
    ];

    return (
        <div style={{ padding: '30px',margin:"auto",display:"flex"}}>
            <Row gutter={[16, 16]}>
                {aniData.map((ani: AniProps, index: number) => (
                    <Col span={8} key={index}>
                        <Card
                            hoverable
                            cover={<img alt={ani.title} src={ani.imageUrl} />}
                        >
                            <Card.Meta title={ani.title} description={ani.description} />
                        </Card>
                    </Col>
                ))}
            </Row>
        </div>
    );
};

export default Ani;
