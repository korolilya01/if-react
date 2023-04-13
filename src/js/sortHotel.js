export const bubbleSortHotels = (data) => {
  for (let i = 0; i < data.length; i++) {
    for (let n = 0; n < data.length - 1 - i; n++) {
      if (data[n].name > data[n + 1].name) {
        const buff = data[n].name;
        data[n].name = data[n + 1].name;
        data[n + 1].name = buff;
      }
    }
  }
};
