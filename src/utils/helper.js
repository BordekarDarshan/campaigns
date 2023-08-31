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
