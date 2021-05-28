import React from "react";
import { Row } from "react-bootstrap";
import EventCol from "./EventCol";

const eventData = [
  {
    text: "24 November, 2020",
    time: "9th JUN",
  },
  {
    text: "24 November, 2020",
    time: "9th JUN",
  },
  {
    text: "24 November, 2020",
    time: "9th JUN",
  },
];
const Events = () => {
  return (
    <div>
      <Row className="mt-5 mb-5">
        <h1>Upcoming events</h1>
      </Row>
      <Row>
        {eventData.map((data) => (
          <EventCol data={data} />
        ))}
      </Row>
    </div>
  );
};

export default Events;
