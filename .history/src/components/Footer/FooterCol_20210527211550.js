import React from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";

const FooterCol = (props) => {
  return (
    <div className="col-md-3 col-sm-6 side-column">
      <Card.Body>
        {props.menuTitle && <h6>{props.menuTitle}</h6>}

        <ul className="list-unstyled side-column mt-4">
          {props.menuItems.map((item, index) => (
            <li key={index}>
              <Link to={item.link} className="list-item">
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
        {props.children && props.children}
      </Card.Body>
    </div>
  );
};

export default FooterCol;
