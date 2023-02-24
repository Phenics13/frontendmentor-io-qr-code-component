import {
  AppContainer,
  CardContainer,
  Title,
  Description,
  Image,
} from "./App.styles";
import qr from "./assets/images/image-qr-code.png";

function App() {
  return (
    <AppContainer>
      <CardContainer>
        <Image className="img" src={qr} alt="qr-code" />
        <Title>Improve your front-end skills by building projects</Title>
        <Description>
          Scan the QR code to visit Frontend Mentor and take your coding skills
          to the next level
        </Description>
      </CardContainer>
    </AppContainer>
  );
}

export default App;
