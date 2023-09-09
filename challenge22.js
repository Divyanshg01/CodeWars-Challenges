function formatDuration(seconds) {
  // Complete this function
  if (seconds === 0) {
    return "now";
  }
  const sec = seconds % 60;

  const minutes = Math.floor(seconds / 60);

  const min = minutes % 60;

  const hours = Math.floor(minutes / 60);

  const hrs = hours % 24;

  const Daysss = Math.floor(hours / 24);

  const days = Daysss % 365;

  const years = Math.floor(Daysss / 365);

  res = [];
  let count = 0;
  if (years > 0) {
    if (years > 1) {
      res[count] = `${years} years`;
    } else {
      res[count] = `${years} year`;
    }
    count++;
  }
  //   count;
  if (days > 0) {
    if (days > 1) {
      res[count] = `${days} days`;
    } else {
      res[count] = `${days} day`;
    }
    count++;
  }
  if (hrs > 0) {
    if (hrs > 1) {
      res[count] = `${hrs} hours`;
    } else {
      res[count] = `${hrs} hour`;
    }
    count++;
  }
  if (min > 0) {
    if (min > 1) {
      res[count] = `${min} minutes`;
    } else {
      res[count] = `${min} minute`;
    }
    count++;
  }
  if (sec > 0) {
    if (sec > 1) {
      res[count] = `${sec} seconds`;
    } else {
      res[count] = `${sec} second`;
    }
  }

  let result = res.join(", ");

  const index = result.lastIndexOf(",");
  if (index !== -1) {
    result = result.substring(0, index) + " and" + result.substring(index + 1);
  }

  return result;
  //   const hrs = ;
}

const ress = formatDuration(0);
ress;
