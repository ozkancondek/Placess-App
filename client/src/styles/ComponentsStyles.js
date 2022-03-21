import styled from "styled-components";

export const AddNewplaceContainer = styled.div`
  width: 60%;
  margin: auto;
  boxshadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  padding: 10px;
`;

/* body height */
export const RoutesContainer = styled.div`
  min-height: 90vh;
`;

/* Cards styles */
export const TextPhotoContainer = styled.div`
  display: flex;
  flex-direction: row;
 
  justify-content: center;
  width: auto
  border: 2px solid black;
  margin: auto;
  margin-top: 50px;
  
   
`;

export const ImageContainer = styled.div`
  background-image: url(${(props) => props.img});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  width: 600px;
  box-shadow: 3px 3px 5px rgba(0, 0, 0, 0.7);

  -webkit-transform: scale(1);
  transform: scale(1);
  -webkit-transition: 0.6s ease-in-out;
  transition: 0.6s ease-in-out;
  &:hover {
    filter: grayscale(100%);
    -webkit-transform: scale(1.2);
    transform: scale(1.2);
  }
`;

export const TextContainer = styled.div`
  & > p {
    color: white;
    margin-top: 10px;
    font-family: "Playfair Display", serif;
    font-size: 1.3rem;
    line-height: 2;
    text-align: center;
    @media (max-width: 600px) {
      font-size: 1rem;
    }
  }
  & > h2 {
    text-decoration: underline;
    color: white;
    margin-top: 10px;
    font-family: "Playfair Display", serif;
    font-size: 1.6rem;

    text-align: center;
    @media (max-width: 600px) {
      font-size: 1.2rem;
    }
  }
  background-color: #6082fe;
  overflow: auto;
  width: 300px;
  height: 450px;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 3px 3px 5px rgba(0, 0, 0, 0.7);
  -webkit-transform: scale(1);
  transform: scale(1);
  -webkit-transition: 0.6s ease-in-out;
  transition: 0.6s ease-in-out;
  &:hover {
    -webkit-transform: scale(1.2);
    transform: scale(1.2);
  }
`;

export const AddNewPlaceButton = styled.div`
  border-bottom: 4px solid rgba(121, 119, 119, 0.8);
  width: 20%;
  margin: auto;
  margin-top: 50px;
  padding: 10px;
  transition: width 1s;
`;

//ChooseCity component
export const ChooseCityContainer = styled.div`
  height: 90vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-image: url("https://cdn.pixabay.com/photo/2015/10/30/20/13/sunrise-1014712_960_720.jpg");
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  & > p {
    font-size: 2rem;
    margin-right: 50px;
    font-family: Roboto Condensed;
  }
`;
//error component
export const ErrorContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-end;

  height: 95vh;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  background-image: url("https://cdn.pixabay.com/photo/2017/01/09/12/56/mistake-1966460_960_720.jpg");
`;
export const ErrorText = styled.div`
  text-align: center;
  margin-bottom: 50px;
`;
//pagination bar
export const PaginationBar = styled.div`
  display: inline-block;
  & > a {
    color: black;
    float: left;
    padding: 8px 16px;
    text-decoration: none;
    transition: background-color 0.3s;
    border: 1px solid #ddd;
    margin: 0 4px;
    &:hover {
      background-color: rgb(146, 146, 146);
    }
    &:active {
      color: white;
      border: 1px solid #4caf50;
    }
    &:focus {
      color: white;
      border: 1px solid #4caf50;
      background-color: rgb(146, 146, 146);
    }
  }
`;

//home page styles

export const BackgroundContainer1 = styled.div`
  background-image: url(${(props) => props.img});

  min-height: 95vh;
  color: black;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;
  opacity: 0.9;
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;
  flex-direction: column;
  padding: 40px;
  flex-wrap: wrap;
`;

export const TextContainer1 = styled.div`
  display: flex;
  flex-direction: column;
  line-height: 0.8;
  align-items: flex-end;
  border-right: 4px solid;
  border-bottom: 4px solid;
  padding: 10px;
  opacity: 0.9;
  > * {
    font-size: 3rem;
    @media (max-width: 560px) {
      font-size: 1.5rem;
    }
    font-family: "Playfair Display", serif;
  }
`;
export const TextContainer2 = styled.div`
  display: flex;
  flex-direction: column;
  line-height: 1;
  text-align: center;
  border: 2px solid grey;
  padding: 10px;
  width: 80%;
  margin: auto;
  margin-top: 20px;
  margin-bottom: 20px;
  > * {
    font-size: 1.5rem;
    font-family: "Roboto Condensed", sans-serif;
  }
`;
export const GridContainer = styled.div`
  margin: auto;
  margin-top: 20px;
  width: 80%;
  padding: 20px;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  flex-wrap: wrap;
`;
export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  & > img {
    height: 360px;
    width: 330px;
    box-shadow: 10px 10px 5px #ccc;
  }
  & > p {
    margin-top: 10px;
    font-family: "Playfair Display", serif;
    font-size: 1.2rem;
  }
`;

//ClickCity component
export const Comment = styled.div`
  border-bottom: 3px solid grey;
  font-family: "Playfair Display", serif;

  & > h4 {
    fonst-size: 1.3rem;
  }
  & > h4 {
    fonst-size: 1.2rem;
  }
`;

export const CommentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: left;
  justify-content: center;
  border: 5px solid grey;
  border-radius: 5px;
  padding: 20px;

  width: 80%;
  margin: auto;
  margin-bottom: 20px;
`;
export const DetailsBar = styled.div`
  border-bottom: 4px solid #777777;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;

  width: 900px;
  margin: auto;
  padding: 10px;
  margin-bottom: 20px;
  @media (max-width: 900px) {
    width: 600px;
  }
  @media (max-width: 600px) {
    width: 500px;
  }
`;

export const IconContainer = styled.div`
  -webkit-transform: scale(1);
  transform: scale(1);
  -webkit-transition: 0.3s ease-in-out;
  transition: 0.3s ease-in-out;
  &:hover {
    -webkit-transform: scale(1.5);
    transform: scale(1.5);
  }
`;
