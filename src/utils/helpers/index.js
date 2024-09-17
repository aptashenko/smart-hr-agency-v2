export const formatValue = (value) => {
  return value < 10 ? value.toString().padStart(2, '0') : value;
  // возвращает значения меньше 10 с нулем впереди, например 1 = 01, 11 = 11,
};
export const formattedCountdown = (hours, minutes, seconds) => {
  const padHours = formatValue(hours);
  const padMinutes = formatValue(minutes);
  const padSeconds = formatValue(seconds);
  if (minutes) {
    return hours ? `${padHours}:${padMinutes}:${padSeconds}` : `${padMinutes}:${padSeconds}`;
  } else {
    return `${padMinutes}:${padSeconds}`;
  }
};

export const normalizeTime = (count) => {
  const hours = parseInt(count / 60 / 60);
  const minutes = parseInt(count / 60);
  const seconds = parseInt(count % 60);
  return formattedCountdown(hours, minutes, seconds);
  // возвращает время (таймер) в формате 01:59
};



export function debounce(func, wait) {
  // важно вызывать эту функцию как iffe - debounce(()=>{}, 1000)()
  let timeout;

  return (...args) => {
    const later = () => {
      clearTimeout(timeout);
      func.apply(this, args);
    };

    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

export function getRandomId() {
  return 'id-' + Math.random().toString(36).substring(2, 16);
}

export const noDigits = (event) => {
  if ("1234567890".indexOf(event.key) != -1)
    event.preventDefault();
}

export const phoneValidation = (event) => {
  if ("+1234567890".indexOf(event.key) === -1 && event.key !== 'Backspace')
    event.preventDefault();
}
