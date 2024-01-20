module.exports = {
  methods: {
    generateId: () => {
      const cDate = new Date();
      const cYear = cDate.getFullYear();

      let vMonth = (cDate.getMonth() + 1).toString();

      if (vMonth.length === 1) {
        vMonth = `0${vMonth}`;
      }

      let vDay = cDate.getDate().toString();

      if (vDay.length === 1) {
        vDay = `0${vDay}`;
      }

      let vHour = cDate.getHours().toString();

      if (vHour.length === 1) {
        vHour = `0${vHour}`;
      }

      let vMinute = cDate.getMinutes().toString();

      if (vMinute.length === 1) {
        vMinute = `0${vMinute}`;
      }

      let vSecond = cDate.getSeconds().toString();

      if (vSecond.length === 1) {
        vSecond = `0${vSecond}`;
      }

      let vMiliSecond = cDate.getMilliseconds().toString();

      if (vMiliSecond.length === 1) {
        vMiliSecond = `0${vMiliSecond}`;
      } else if (vMiliSecond.length === 2) {
        vMiliSecond = `00${vMiliSecond}`;
      }

      const cRandomNumber = Math.floor(Math.random() * (999 - 100 + 1)) + 100;
      const cCurrentDate = `${cYear}${vMonth}${vDay}${vHour}${vMinute}${vSecond}${vMiliSecond}${cRandomNumber}`;

      return cCurrentDate;
    },
  },
};
