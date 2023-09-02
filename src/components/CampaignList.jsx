import React, { Fragment, useMemo } from "react";
import { useSelector } from "react-redux";
import { styled } from "styled-components";
import { Box } from "../styling/Reusables";
import { formatNumber } from "../utils/helper";
import { Tag } from "antd";
import NoDataFound from "./NoDataFound";

const headerList = [
  "Name",
  "User Name",
  "Start Date",
  "End Date",
  "Active",
  "Budget",
];

function CampaignList() {
  let {
    searchReducer: {
      searchQuery: { name, range },
    },
    campaignsReducer: { campaignsList, isError, isLoading },
  } = useSelector(({ searchReducer, campaignsReducer }) => ({
    searchReducer,
    campaignsReducer,
  }));

  // TODO:Review and Refactor below code
  const filteredList = useMemo(() => {
    let data = campaignsList.filter((item) => {
      return (
        item.name.toLowerCase().includes(name.toLowerCase()) &&
        (range[0] && range[1]
          ? new Date(range[0]) < new Date(item.startDate) &&
            new Date(range[1]) > new Date(item.endDate)
          : true)
      );
    });

    if ((!range.length || !range[1]) && !name) data = campaignsList;

    return data;
  }, [name, JSON.stringify(range), campaignsList]);

  return (
    <GridWrapper>
      {headerList.map((data, i) => (
        <div className="grid-item header" key={i}>
          {data}
        </div>
      ))}
      {filteredList.length > 0 ? (
        filteredList.map((campaign) => (
          <Fragment key={campaign.id}>
            <div className="grid-item cell-name">{campaign.name}</div>
            <div className="grid-item">{campaign.userName}</div>
            <div className="grid-item">{campaign.startDate}</div>
            <div className="grid-item">{campaign.endDate}</div>
            <div className="grid-item">
              <Tag
                color={campaign.status === "ACTIVE" ? "#228B22" : "#C41E3A"}
                style={{ letterSpacing: ".5px" }}
              >
                {campaign.status}
              </Tag>
            </div>
            <div className="grid-item">{formatNumber(campaign.Budget)}</div>
            <div className="line"></div>
          </Fragment>
        ))
      ) : (
        <NoDataFound />
      )}
    </GridWrapper>
  );
}

const GridWrapper = styled.div`
  display: grid;
  grid-template-columns: 250px repeat(5, 1fr);
  overflow-x: auto;
  ${Box}

  > .grid-item {
    text-align: center;
    padding: 1rem;
    color: var(--textColor);

    &.header {
      background-color: #f9faff;
      padding: 1rem;
      color: var(--textColor);
      font-weight: 500;
    }
    &.cell-name {
      word-wrap: break-word;
    }
  }
  > .line {
    grid-column: 1/7;
    height: 2px;
    border-bottom: 1px solid var(--borderColor);
  }
`;

export default CampaignList;
