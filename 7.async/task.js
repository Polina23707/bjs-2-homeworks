class AlarmClock {
  constructor() {
    this.alarmCollection = [];
    this.intervalId = null;
  }

  addClock(time, callback) {
    if (!time || !callback) {
      throw new Error('Отсутствуют обязательные аргументы');
    }

    if (this.alarmCollection.some(alarm => alarm.time === time)) {
      console.warn('Уже присутствует звонок на это же время');
    }

    this.alarmCollection.push({callback, time, canCall: true})
  }

  removeClock(time) {
    this.alarmCollection = this.alarmCollection.filter(item => item.time !== time);
  }

  getCurrentFormattedTime() {

    return new Date().toLocaleTimeString("ru-Ru", {
      hour: "2-digit",
      minute: "2-digit",
    });
  }

  start() {
    if (this.intervalId) {
      return;
    }
    
    this.intervalId = setInterval(() => {
      // console.log(this);
      if (this.alarmCollection.length > 0) {
        this.alarmCollection.forEach((clock) => {
          if (clock.time === this.getCurrentFormattedTime() && clock.canCall === true) {
            clock.canCall = false;
            clock.callback();
          }
        })
      }
    }, 1000)

  }

  stop() {
    clearInterval(this.intervalId);
    this.intervalId = null;
  }

  resetAllCalls() {
    this.alarmCollection.forEach((alarm) => alarm.canCall = true)
  }

  clearAlarms() {
    this.stop();
    this.alarmCollection = [];
  }

}


// let clockFirst = new AlarmClock();
// console.log(clockFirst);
// clockFirst.addClock('22:00' , clockFirst.start);
// clockFirst.addClock('20:00' , clockFirst.start);
// clockFirst.addClock('00:00' , clockFirst.start);
// clockFirst.addClock('19:25' , clockFirst.start);
// clockFirst.addClock('19:57' , clockFirst.start);
// clockFirst.addClock('00:00' , clockFirst.start);
// clockFirst.start();
// console.log(clockFirst.alarmCollection);
