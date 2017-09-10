module.exports.parseTime = (date) => {
  var splitDate = date.split(' ');
  var time = splitDate[4].split(':');
  if (Number(time[0]) > 12) {
    var hour = (Number(time[0]) - 12).toString();
    return `${hour}:${time[1]} PM`;
  } else if (time[0] === '12') {
    return `${time[0]}:${time[1]} PM`;
  } else if (time[0] === '00') {
    return `${12}:${time[1]} AM`;
  } else {
    return `${time[0]}:${time[1]} AM`;
  }
};