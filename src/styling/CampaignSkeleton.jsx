import React from "react";
import ContentLoader from "react-content-loader";

const CampaignSkeleton = () => (
  <div
    style={{
      height: "100%",
      width: "100%",
      padding: "1rem",
      boxSizing: "border-box",
    }}
  >
    <ContentLoader
      speed={2}
      width="100%"
      height="100%"
      backgroundColor="#f3f3f3"
      foregroundColor="#ecebeb"
    >
      <rect x="7" y="10" rx="5" ry="5" width="100%" height="92" />
      <rect x="7" y="110" rx="5" ry="5" width="100%" height="92" />
      <rect x="7" y="220" rx="5" ry="5" width="100%" height="608" />
    </ContentLoader>
  </div>
);

export default CampaignSkeleton;
