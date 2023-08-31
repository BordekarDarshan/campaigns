import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchUsers } from "./features/campaigns/campaignSlice";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchUsers());
  }, []);
  return <div className="App"></div>;
}

export default App;
