const timeContainer = document.getElementById("time-container");
const startDate = "07-01-2022";
const startDate_DATE = new Date(startDate);
const intlNumberFormatter = new Intl.NumberFormat("en-US");

setInterval(() => {
  const now = new Date();
  const difference = Math.floor(
    (now.getTime() - startDate_DATE.getTime()) / 1000
  );

  timeContainer.innerText = intlNumberFormatter.format(difference);
}, 1000);
