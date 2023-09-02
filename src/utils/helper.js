// converts user data which is in array to object where key is user's id and value is user's name.
export const userDataKeyValueMapping = (userArray = []) => {
  const userObj = {};
  for (let i = 0; i < userArray.length; i++) {
    const user = userArray[i];
    userObj[user.id] = user.name;
  }
  return userObj;
};

export const dataMapping = (campaignArray, userArray) => {
  const userObj = userDataKeyValueMapping(userArray);
  for (let i = 0; i < campaignArray.length; i++) {
    const campaign = campaignArray[i];
    campaign["userName"] = userObj[campaign.userId] ?? "Unknown User";
  }
  return campaignArray;
};

export default function formatNumber(num, precision = 2) {
  const map = [
    { suffix: "B", threshold: 1e9 },
    { suffix: "M", threshold: 1e6 },
    { suffix: "K", threshold: 1e3 },
    { suffix: "", threshold: 1 },
  ];

  const found = map.find((x) => Math.abs(num) >= x.threshold);
  if (found) {
    const formatted = (num / found.threshold).toFixed(precision) + found.suffix;
    return formatted + " USD";
  }

  return num + " USD";
}
