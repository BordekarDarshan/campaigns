import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchUsers } from "./features/campaigns/campaignSlice";
import { styled } from "styled-components";
import Campaigns from "./features/campaigns";
import CampaignSkeleton from "./styling/CampaignSkeleton";
import Maintenance from "./components/Maintenance";

function App() {
  const dispatch = useDispatch();
  let {
    campaignsReducer: { isError, isLoading },
  } = useSelector(({ campaignsReducer }) => ({
    campaignsReducer,
  }));
  useEffect(() => {
    dispatch(fetchUsers());
  }, []);
  return (
    <AppWrapper>
      {isLoading ? (
        <CampaignSkeleton />
      ) : isError ? (
        <Maintenance />
      ) : (
        <Campaigns />
      )}
    </AppWrapper>
  );
}

const AppWrapper = styled.div`
  --background: #f8f8ff;
  --buttonBackground: #3b49e8;
  --buttonColor: #fff;
  --cardBackground: #fefffe;
  --textColor: #747475;
  --borderColor: #ebeceb;
  --headerColor: #0b020b;
  padding: 1rem;
  background-color: var(--background);
  height: 100vh;
  box-sizing: border-box;
`;

export default App;
