// import { useDispatch } from "react-redux";
import { styled } from "styled-components";
import Campaigns from "./features/campaigns";
// import { useEffect } from "react";
// import { fetchUsers } from "./features/campaigns/campaignSlice";

function App() {
  // const dispatch = useDispatch();
  // useEffect(() => {
  //   dispatch(fetchUsers());
  // }, []);
  return (
    <AppWrapper>
      <Campaigns />
    </AppWrapper>
  );
}

const AppWrapper = styled.div`
  --background: #f8f8ff;
  --buttonBackground: #3b49e8;
  --buttonColor: #fff;
  --cardBackground: #fefffe;
  --textColor: #747475;
  --borderColor: #d2d3d2;
  --headerColor: #0b020b;
  padding: 1rem;
  background-color: var(--background);
  height: 100vh;
`;

export default App;
