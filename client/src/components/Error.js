import { Link } from "react-router-dom";
import { ErrorContainer, ErrorText } from "../styles/ComponentsStyles";

export const Error = () => {
  return (
    <ErrorContainer>
      <ErrorText>
        <h1>Hmmm...</h1>
        <p>Something went wrong</p>
        <p>
          You can return back to <Link to="/">main page.</Link>
        </p>
      </ErrorText>
    </ErrorContainer>
  );
};
