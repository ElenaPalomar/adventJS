function countHours(year, holidays) {
  let count = 0;
  const weekDay = holidays.map(item => {
    const date = new Date(`${year}-${item.replace('/', '-')}`);
    const weekDayIndex = date.getDay();
    if (date.toISOString().slice(0, 10) === `${year}-${item.slice(0, 2)}-${item.slice(3)}`) {
      weekDayIndex !== 0 && weekDayIndex !== 6 ? count += 2 : false;
    }
  })
  return count;
}