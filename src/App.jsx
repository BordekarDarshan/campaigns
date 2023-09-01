// import { useDispatch } from "react-redux";
import Campaigns from "./features/campaigns";
// import { useEffect } from "react";
// import { fetchUsers } from "./features/campaigns/campaignSlice";

function App() {
  // const dispatch = useDispatch();
  // useEffect(() => {
  //   dispatch(fetchUsers());
  // }, []);
  return (
    <div className="App">
      <Campaigns />
    </div>
  );
}

export default App;
