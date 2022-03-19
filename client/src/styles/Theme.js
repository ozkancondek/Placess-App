import styled from "styled-components";
export const BackgroundThemeContainer = styled.div`
  background-color: ${(props) => props.theme.body};
  color: ${(props) => props.theme.text};
`;
