import React from "react";
import CampaignList from "../../components/CampaignList";
import Search from "../../components/Search";
import Header from "../../components/Header";

function Campaigns() {
  return (
    <div>
      <Header />
      <Search />
      <CampaignList />
    </div>
  );
}

export default Campaigns;
