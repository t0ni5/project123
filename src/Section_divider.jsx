import policeLine from "./assets/Police_Line.png";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";

function Section_divider() {
  return (
    <Col lg={12} md={12} sm={12}>
      <Image
        src={policeLine}
        alt="police line"
        className="police_line img-fluid"
      ></Image>
    </Col>
  );
}

export default Section_divider;
