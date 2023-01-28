import Container from "./Container";
import Feedback from "./feedback";


export const App = () => {
  return (
  <Container>
    <Feedback
      initialGoodValue={0}
      initialNeutralValue={0}
      initialBadValue={0}
      />
  </Container>   
  );
};
