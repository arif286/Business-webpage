import React from "react";
import { Container, Row } from "react-bootstrap";
import eventImage from '../../Images/event-1.png';
import './Event.css';
import EventCol from "./EventCol";
const eventData = [
  {
    text: "24 November, 2020",
        time: "9th JUN",
    eventImage,
  },
  {
    text: "24 November, 2020",
      time: "9th JUN",
    eventImage,
  },
  {
    text: "24 November, 2020",
      time: "9th JUN",
    eventImage,
  },
];
const Events = () => {
  return (
    <div className="new-area">
      <Container>
        <Row className="mt-5 mb-5">
          <h1 style={{fontWeight:900}} className="text-center">Upcoming events</h1>
        </Row>
        <Row>
          {eventData.map((data) => (
            <EventCol data={data} />
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default Events;
