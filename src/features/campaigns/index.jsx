import React, { useState } from "react";
import CampaignList from "../../components/CampaignList";
import Search from "../../components/Search";
import Header from "../../components/Header";
import DrawerComp from "../../components/Drawer";
import CreateCampaign from "../../components/CreateCampaign";
import ErrorBoundary from "../../components/ErrorBoundary";

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
      <ErrorBoundary>
        <Header showDrawer={showDrawer} />
      </ErrorBoundary>
      <ErrorBoundary>
        <Search />
      </ErrorBoundary>
      <ErrorBoundary>
        <CampaignList />
      </ErrorBoundary>
      <DrawerComp open={open} onClose={onClose}>
        <CreateCampaign onClose={onClose} />
      </DrawerComp>
    </div>
  );
}

export default Campaigns;
