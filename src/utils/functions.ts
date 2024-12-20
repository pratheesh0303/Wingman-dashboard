function formatDateTime(input: string, type: string) {
  const splitTime = input.split('T');
  const dateObj = new Date(splitTime[0]);
  const time = splitTime[1]?.split('Z')?.[0];
  if (type === 'date') {

    return dateObj.toLocaleDateString('en-GB', {
      day: '2-digit',
      month: 'short',
      year: 'numeric'
    });
  } else if (type === 'time') {
    const splitTime = time.split(':');
    const hour = parseInt(splitTime[0]);
    if (hour > 12) {
      return `${hour - 12}:${splitTime[1]} PM`;
    } else if (hour === 12) {
      return `${hour}:${splitTime[1]} PM`;
    } else if (hour === 0) {
      return `12:${splitTime[1]} AM`;
    } else {
      return `${hour}:${splitTime[1]} AM`;
    }
  }
}

function convertSecondsToHHMM(input: number) {
  const hours = Math.floor(input / 3600);
  const minutes = Math.floor((input % 3600) / 60);
  return `
   ${hours}h ${minutes}m`;
}

function formatCurrency(input: number, currency: string) {
  if (currency === 'inr') {
    return `₹${input}`;
  } else if (currency === 'usd') {
    return `$${input}`;
  } else if (currency === 'eur') {
    return `€${input}`;
  } else if (currency === 'gbp') {
    return `£${input}`;
  } else if (currency === 'yen') {
    return `¥${input}`;
  } else if (currency === 'mxn') {
    return `₱${input}`;
  } else if (currency === 'ruble') {
    return `₽${input}`;
  } else if (currency === 'krw') {
    return `₩${input}`;
  } else if (currency === 'thb') {
    return `฿${input}`;
  }
  return `${input}`;
}

export { formatDateTime, convertSecondsToHHMM, formatCurrency };
