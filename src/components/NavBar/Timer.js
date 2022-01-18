const Timer = () => {
  const days = [
    "",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const d = new Date();
  const time =
    days[d.getDay()] +
    " " +
    d.getDate() +
    " " +
    months[d.getMonth()] +
    " " +
    d.getFullYear();
  return <div> {time} </div>;
};

export default Timer;
