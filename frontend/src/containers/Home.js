import { Form, Container, Row, Col, Button, Figure } from "react-bootstrap";
import { useNavigate, Navigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Theme from "../assets/ghorkuno theme.png";

const Home = ({ isAuthenticated }) => {
  const navigate = useNavigate();
  const notify = () => {
    toast.success("successful", { autoClose: 3000 });
  };

  if (!isAuthenticated) {
    navigate("/login", { replace: true });
  }
  return (
    <Container fluid>
      <Row>
        <Figure className="text-center p-2">
          <Figure.Image alt="none" src={Theme} />
        </Figure>
      </Row>
    </Container>
  );
};

export default Home;
