import React, { useState } from "react";
import CampaignList from "../../components/CampaignList";
import Search from "../../components/Search";
import Header from "../../components/Header";
import DrawerComp from "../../components/Drawer";
import CreateCampaign from "../../components/CreateCampaign";

function Campaigns() {
  const [open, setOpen] = useState(false);

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Header showDrawer={showDrawer} />
      <Search />
      <CampaignList />
      <DrawerComp open={open} onClose={onClose}>
        <CreateCampaign />
      </DrawerComp>
    </div>
  );
}

export default Campaigns;
