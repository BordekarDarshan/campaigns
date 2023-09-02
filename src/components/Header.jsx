import React from "react";
import CustomButton from "./Button";
import Card from "./Card";

function Header({ showDrawer }) {
  return (
    <Card>
      <h3 className="header">Campaigns</h3>
      <CustomButton onClickHandler={showDrawer}>
        Create New Campaign
      </CustomButton>
    </Card>
  );
}

export default Header;
