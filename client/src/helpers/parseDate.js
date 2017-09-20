module.exports.parseDateAbrv = (date) => {
  var splitDate = date.split(' '); // 0 = Day, 1 = Month, 2 = day (number), 3 = year
  return `${splitDate[0]}, ${splitDate[1]} ${splitDate[2]}, ${splitDate[3]}`;
};

module.exports.parseDateFull = (date) => {
  var splitDate = date.split(' ');
  var affixReference = splitDate[2].split('')[1];
  var affix = affixes[affixReference] || 'th';
  return `${days[splitDate[0].toLowerCase()]}, ${months[splitDate[1].toLowerCase()]} ${splitDate[2]}${affix}, ${splitDate[3]}`;
};

const affixes = {
  '1': 'st',
  '2': 'nd',
  '3': 'rd',
};

const days = {
  'sun': 'Sunday',
  'mon': 'Monday',
  'tue': 'Tuesday',
  'wed': 'Wednesday',
  'thu': 'Thursday',
  'fri': 'Friday',
  'sat': 'Saturday'
};

module.exports.days = days;

const months = {
  'jan': 'January',
  'feb': 'February',
  'mar': 'March',
  'apr': 'April',
  'may': 'May',
  'jun': 'June',
  'jul': 'July',
  'aug': 'August',
  'sep': 'September',
  'oct': 'October',
  'nov': 'November',
  'dec': 'December'
};