import React from "react";
import CustomButton from "./Button";
import Card from "./Card";

function Header() {
  return (
    <Card>
      <h3>Campaigns</h3>
      <CustomButton>Create New Campaign</CustomButton>
    </Card>
  );
}

export default Header;
