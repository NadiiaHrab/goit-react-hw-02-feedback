import Container from "./Container/Container";
import Feedback from "./feedback/feedback";


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
