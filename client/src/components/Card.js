import PropTypes from "prop-types";
import "../styles/Card.css";
import { useNavigate } from "react-router-dom";
import { Button, Col } from "react-bootstrap";

export const Card = ({ card, id }) => {
  const navigate = useNavigate();

  return (
    <Col className="mb-3 d-flex justify-content-center" xs={12} md={6} lg={4}>
      <div className="cards">
        <img src={card.image} alt={card.title}></img>

        <div className="card-over">
          <p>{card.description}</p>
        </div>
        <div className="title">{card.title}</div>
        <Button
          onClick={() => {
            navigate("/clickcity/" + id);
          }}
          variant="outline-secondary"
        >
          Discover
        </Button>
      </div>
    </Col>
  );
};

Card.propTypes = {
  card: PropTypes.object.isRequired,
  id: PropTypes.number.isRequired,
};
