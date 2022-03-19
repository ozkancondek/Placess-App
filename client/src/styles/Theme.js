import styled from "styled-components";
export const BackgroundThemeContainer = styled.div`
  background-color:${(props) => props.body},
  color:${(props) => props.text}
`;
