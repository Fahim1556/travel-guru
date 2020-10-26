import React from 'react';
import {Col, Row} from 'react-bootstrap';
import './Rooms.css';
import StartIcon from '../../FakeData/icon/star_1_.png'


const Rooms = (props) => {
    const {
        name,
        bed,
        kitchen,
        flexibility,
        image,
        rating,
        price
    } = props.dataFake;
    return (
        <div>
            <Row>
                <Col >
                    <img className="ImageSizing" fluid="fluid" src={image} alt=""/>
                </Col>
                <Col>
                    <div className="RoomDetailsInfo">
                        <h5>{name}</h5>
                        <p>{bed}</p>
                        <p>{kitchen}</p>
                        <p>{flexibility}</p>
                        <img className="IconSizing" src={StartIcon} alt=""/>
                        <span className="ratingSize">{rating}</span>
                        <span className="ratingSize">{price}/night</span>
                    </div>
                </Col>
            </Row>
        </div>
    );
};

export default Rooms;