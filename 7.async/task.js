class AlarmClock {
  constructor() {
    this.alarmCollection = [];
    this.intervalId = null;
  }

  addClock(time, callback) {
    if (!time || !callback) {
      throw new Error('Отсутствуют обязательные аргументы');
    }

    this.time = time;
    this.callback = callback;
    this.canCall = true;

    for (let i = 0; i < this.alarmCollection.length ; i++) {
      if (this.time === time) {
        console.warn('Уже присутствует звонок на это же время');
      }
    }

    this.alarmCollection.push({callback, time, canCall: true})
  }

  removeClock(time) {
    let deletedTime = time;
    let newCollection = this.alarmCollection.filter(function(item) {
      return item.time !== deletedTime;
    });
    this.alarmCollection = newCollection;
  }

  getCurrentFormattedTime() {
    const currentTime = new Date();
    let currentHours = currentTime.getHours();
    let currentMinutes = currentTime.getMinutes();

    let formattedTime = currentHours + ':' + currentMinutes;
    console.log(formattedTime);
    return formattedTime;
  }

  start() {
    if (this.intervalId > 0) {
      return;
    }
    this.intervalId = setInterval(this.alarmCollection.forEach((clock) => {
      if (this.getCurrentFormattedTime() === this.time && this.canCall === true) {
        this.canCall = false;
        this.callback();
      }
    }), 1000)
  }

  stop() {
    clearInterval();
    this.intervalId = null;
  }

  resetAllCalls() {
    this.alarmCollection.forEach((clock) => {
      this.canCall = true;
    })
  }

  clearAlarms() {
    this.stop();
    this.alarmCollection = [];
  }

}

let clockFirst = new AlarmClock();
console.log(clockFirst);
clockFirst.addClock('22:00' , this.start);
clockFirst.addClock('20:00' , this.start);
clockFirst.addClock('02:00' , this.start);
console.log(clockFirst.alarmCollection);
clockFirst.removeClock('20:00');
console.log(clockFirst.alarmCollection);
clockFirst.getCurrentFormattedTime();
console.log(clockFirst.alarmCollection);
clockFirst.resetAllCalls();
// clockFirst.clearAlarms();
console.log(clockFirst.alarmCollection);