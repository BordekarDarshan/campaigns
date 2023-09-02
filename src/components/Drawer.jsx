import { Drawer } from "antd";
import React from "react";

function DrawerComp({ children, onClose, open }) {
  return (
    <Drawer
      title="Create Campaign"
      placement="right"
      onClose={onClose}
      open={open}
    >
      {children}
    </Drawer>
  );
}

export default DrawerComp;
