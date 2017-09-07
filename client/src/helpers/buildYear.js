var buildYear = function(startIndex) {

  var months = [
    {
      days: 31,
      name: 'january'
    },
    {
      days: 28,
      name: 'february',
      special: 'leap year'
    },
    {
      days: 31,
      name: 'march'
    },
    {
      days: 30,
      name: 'april'
    },
    {
      days: 31,
      name: 'may'
    },
    {
      days: 30,
      name: 'june'
    },
    {
      days: 31,
      name: 'july'
    },
    {
      days: 31,
      name: 'august'
    },
    {
      days: 30,
      name: 'september'
    },
    {
      days: 31,
      name: 'october'
    },
    {
      days: 30,
      name: 'november'
    },
    {
      days: 31,
      name: 'december'
    }
  ];

  var buildMonth = function(days, startIndex) {

    var day = function(index) {
      return {number: index};
    };

    var week = function() {
      return [null, null, null, null, null, null, null];
    };

    var month = {};
    var currentWeek = new week;
    var weekCounter = 1;
    var dayCounter = startIndex || 0;

    for (var i = 1; i <= days; i++) {
      if (dayCounter === 6) {
        currentWeek[dayCounter] = new day(i);
        month['w' + weekCounter] = currentWeek;
        currentWeek = new week;
        dayCounter = 0;
        weekCounter++;
      } else {
        currentWeek[dayCounter] = new day(i);
        dayCounter++;
        if (i === days) {
          month['w' + weekCounter] = currentWeek;
        }
      }
    }

    var result = {
      month: month,
      startIndex: dayCounter
    };

    return result;
  };

  var monthProto = function(name, calendar) {
    let newMonth = {name: name, calendar: calendar};
    return newMonth;
  };

  var year = [];
  var startIndex = startIndex || 0;
  for (var i = 0; i < months.length; i++) {
    let calendar =  buildMonth(months[i].days, startIndex);
    startIndex = calendar.startIndex;
    let newMonth = new monthProto(months[i].name, calendar.month);
    year.push(newMonth);
  }

  return year;
};

module.exports.buildYear = buildYear;


























