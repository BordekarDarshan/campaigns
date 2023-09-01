import React from "react";
import CampaignList from "../../components/CampaignList";
import Search from "../../components/Search";
import CreateCampaign from "../../components/createCampaign";

function Campaigns() {
  return (
    <div>
      <CreateCampaign />
      <Search />
      <CampaignList />
    </div>
  );
}

export default Campaigns;
