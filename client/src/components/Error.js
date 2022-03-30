import { Alert, Card } from "react-bootstrap";
import { ErrorContainer } from "../styles/ComponentsStyles";

export const Error = (props) => {
  const onReset = () => {
    props.resetErrorBoundary();
  };
  setTimeout(() => {
    onReset();
  }, 3000);
  return (
    <ErrorContainer>
      <Card
        style={{
          width: "20rem",

          boxShadow:
            " rgba(6, 24, 44, 0.4) 0px 0px 0px 2px, rgba(6, 24, 44, 0.65) 0px 4px 6px -1px, rgba(255, 255, 255, 0.08) 0px 1px 0px inset",
        }}
      >
        <Card.Img
          variant="top"
          src="https://www.wpbeginner.com/wp-content/uploads/2015/08/error.jpg"
        />
        <Card.Body>
          <Card.Title>Something happened</Card.Title>
          <Card.Text>Check the message below</Card.Text>
          <Alert variant="danger">
            {props?.error?.response?.data?.errors?.[0]?.message}
          </Alert>
        </Card.Body>
      </Card>
    </ErrorContainer>
  );
};
