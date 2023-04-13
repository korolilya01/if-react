const daysInMonth = 30;
const daysInWeek = 7;
let firstDayInMonth = 7; //first day position

const checkFirstDayOfWeek = function () {
  if (firstDayInMonth >= daysInWeek || firstDayInMonth < 0) {
    firstDayInMonth = daysInWeek - 1;
  }
  return firstDayInMonth;
};
checkFirstDayOfWeek();

let firstDayOfWeek = daysInMonth - checkFirstDayOfWeek() + 1;

const daysOfWeek = function (
  firstDayOfWeek,
  daysInMonth,
  daysInWeek,
  firstWeek,
) {
  const week = [];

  for (let day = firstDayOfWeek; day < firstDayOfWeek + daysInWeek; day++) {
    if (day > daysInMonth) {
      week.push({
        dayOfMonth: day - daysInMonth,
        notCurrentMonth: !firstWeek,
      });
    } else {
      week.push({
        dayOfMonth: day,
        notCurrentMonth: firstWeek,
      });
    }
  }
  return week;
};

const getCalendarMonth = function (
  daysInMonth,
  daysInWeek,
  firstDayInMonth,
  period,
) {
  const month = [];
  const [checkInDay, checkOutDay] = period;
  const countDays = Math.ceil(daysInMonth + firstDayInMonth) / daysInWeek;

  for (let i = 0; i < countDays; i++) {
    const firstWeek = i === 0;
    const days = daysOfWeek(firstDayOfWeek, daysInMonth, daysInWeek, firstWeek);
    month.push(days);
    firstDayOfWeek = days[days.length - 1].dayOfMonth + 1;
  }

  for (let i = 0; i < month.length; i++) {
    for (let j = 0; j < month[i].length; j++) {
      const currentDayOfWeek = month[i][j];
      const { dayOfMonth, notCurrentMonth } = currentDayOfWeek;

      if (
        (dayOfMonth === checkInDay.dayOfMonth &&
          notCurrentMonth === checkInDay.notCurrentMonth) ||
        (dayOfMonth === checkOutDay.dayOfMonth &&
          notCurrentMonth === checkOutDay.notCurrentMonth)
      ) {
        currentDayOfWeek.selectedDay = true;
      } else {
        currentDayOfWeek.selectedDay = false;
      }
    }
  }

  const flatCalendarMonth = [];
  for (let i = 0; i < month.length; i++) {
    for (let j = 0; j < month[i].length; j++) {
      flatCalendarMonth.push(month[i][j]);
    }
  }
  for (let i = 1; i < flatCalendarMonth.length; i++) {
    const prevDay = flatCalendarMonth[i - 1];
    const currDay = flatCalendarMonth[i];
    const nextDay = flatCalendarMonth[i + 1];
    if (prevDay.selectedDay) {
      currDay.selectedDay = true;
    }
    if (
      nextDay.dayOfMonth === checkOutDay.dayOfMonth &&
      nextDay.notCurrentMonth === checkOutDay.notCurrentMonth
    ) {
      break;
    }
  }

  return month;
};

console.log(
  getCalendarMonth(daysInMonth, daysInWeek, firstDayInMonth, [
    { dayOfMonth: 29, notCurrentMonth: true },
    { dayOfMonth: 2, notCurrentMonth: false },
  ]),
);
