import DescriptionForm from "./DescriptionForm";
import ToolTipForm from "./TooltipForm";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";



function Form(props){

  return(
    <Container>
      <Row>
        <Col className="w-75" style={{backgroundColor: "lightblue"}}>
        <DescriptionForm />
        </Col>
        <Col className="w-25" style={{backgroundColor: "lightgreen"}}>
        <ToolTipForm />
        </Col>
      </Row>
    </Container>
  )
}

export default Form;