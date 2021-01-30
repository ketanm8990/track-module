
import { Dimensions } from 'react-native';
const { height, width } = Dimensions.get('window');
const aspectRatio = height / width;

export const isNotEmpty = (str) => {
  return (str && str.length > 0) ? true : false
}

export const strReplace = (str) => {
  return (str && str.replace(/["']/g, ""))
}

export const isTabletBasedOnRatio = () => {
  if (aspectRatio > 1.6) {
    return false;
  } else {
    return true;
  }
}

export const getMonthName = (month) => {
  let monthName = "";
  switch (month) {
    case "01":
      monthName = "Jan";
      break;
    case "02":
      monthName = "Feb";
      break;
    case "03":
      monthName = "Mar";
      break;
    case "04":
      monthName = "Apr";
      break;
    case "05":
      monthName = "May";
      break;
    case "06":
      monthName = "Jun";
      break;
    case "07":
      monthName = "Jul";
      break;
    case "08":
      monthName = "Aug";
      break;
    case "09":
      monthName = "Sep";
      break;
    case "10":
      monthName = "Oct";
      break;
    case "11":
      monthName = "Nov";
      break;
    case "12":
      monthName = "Dec";
      break;
    default:
      monthName = "Jan";
  }
  return monthName;
};



