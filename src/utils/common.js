import moment from "moment/moment";

export const formatTimestampToDate = (timestamp) => {
var momentDate = moment(timestamp);

return momentDate.format("DD-MM-YYYY");
// return momentDate.format("YYYY-MM-DD hh:mm:ss A Z");

};
