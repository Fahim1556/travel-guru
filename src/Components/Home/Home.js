import React, {useState} from 'react';
import { Col, Row } from 'react-bootstrap';
import fakeFile from '../../FakeData/FakeData'
import Place from '../Place/Place';

const Home = () => {
    const style = {
        display: 'flex',
        paddingRight: '20px',
        justifyContent: 'space-between'
    }
    const [fakeData, setFakeData] = useState(fakeFile)
    return (
        <div style={style}>
            <Row>
                <Col style={style}>{fakeData.map(data => <Place data={data}/>)}</Col>
            </Row>
            
        </div>
    );
};

export default Home;