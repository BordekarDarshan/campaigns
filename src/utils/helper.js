// converts user data which is in array to object where key is user's id and value is user's name.
export const userDataKeyValueMapping = (userArray = []) => {
  try {
    const userObj = {};
    for (let i = 0; i < userArray.length; i++) {
      const user = userArray[i];
      userObj[user.id] = user?.name;
    }
    return userObj;
  } catch (error) {
    return {};
  }
};

// modifies campaign data by adding username and status properties in each object.
export const dataMapping = (campaignArray, userArray) => {
  try {
    const userObj = userDataKeyValueMapping(userArray);
    let cloneArray = JSON.parse(JSON.stringify(campaignArray));
    for (let i = 0; i < cloneArray.length; i++) {
      const campaign = cloneArray[i];
      campaign["userName"] = userObj[campaign.userId] ?? "Unknown User";
      campaign["status"] = flag(campaign.startDate, campaign.endDate);
    }
    return cloneArray;
  } catch (error) {
    return campaignArray;
  }
};

// formats number to K, M, B
export function formatNumber(num, precision = 2) {
  try {
    const map = [
      { suffix: "B", threshold: 1e9 },
      { suffix: "M", threshold: 1e6 },
      { suffix: "K", threshold: 1e3 },
      { suffix: "", threshold: 1 },
    ];

    const found = map.find((x) => Math.abs(num) >= x.threshold);
    if (found) {
      const formatted =
        (num / found.threshold).toFixed(precision) + found.suffix;
      return formatted + " USD";
    }

    return num + " USD";
  } catch (error) {
    return num;
  }
}

// set status of the campaign by comparing current date with start and end date
const currentDate = new Date();
export const flag = (startDate, endDate) => {
  if (startDate && endDate) {
    if (currentDate > new Date(startDate) && currentDate < new Date(endDate)) {
      return "ACTIVE";
    }
    return "INACTIVE";
  }
  return "INACTIVE";
};

// returns payload which is required to store data in redux store.
export const addCampaignHandler = (values, userList) => {
  try {
    let [startDate, endDate] = values.range;
    let payload = {
      endDate,
      startDate,
      ...values,
      userName: userList[values.userId],
      status: flag(startDate, endDate),
    };
    return payload;
  } catch (error) {
    console.log("A_C_H_I_O", error);
    return null;
  }
};
