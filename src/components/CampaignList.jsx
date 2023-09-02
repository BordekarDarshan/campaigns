import React, { Fragment, useMemo } from "react";
import { useSelector } from "react-redux";
import { styled } from "styled-components";
import { Box } from "../styling/Reusables";

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
        item.name.toLocaleLowerCase().includes(name) &&
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
      {filteredList.map((campaign) => (
        <Fragment key={campaign.id}>
          <div className="grid-item">{campaign.name}</div>
          <div className="grid-item">{campaign.userName}</div>
          <div className="grid-item">{campaign.startDate}</div>
          <div className="grid-item">{campaign.endDate}</div>
          <div className="grid-item">{campaign.Active}</div>
          <div className="grid-item">{campaign.Budget}</div>
          <div class="line"></div>
        </Fragment>
      ))}
    </GridWrapper>
  );
}

const GridWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  ${Box}

  > .grid-item {
    word-break: break-word;
    text-align: center;
    padding: 1rem;
    &.header {
      background-color: #f9faff;
      padding: 1rem;
      color: var(--textColor);
    }
  }
  > .line {
    grid-column: 1/7;
    height: 2px;
    border-bottom: 1px solid var(--borderColor);
  }
`;

export default CampaignList;
