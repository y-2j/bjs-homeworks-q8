// Создание функции для вывода сообщения будильника
function setDailyRhythm(wakeUpTime, bedTime) {

    const goodMorning = () => alert('Доброе утро, Вася!');
    const goodNight = () => alert('Спокойной ночи, Вася!');

    const checkTimewakeUp = setAlarm(wakeUpTime, goodMorning);
    const checkTimetoSleep = setAlarm(bedTime, goodNight);

    setInterval(checkTimewakeUp, 10000);
    setInterval(checkTimetoSleep, 10000);
}

// Создание функции которая возвращает в качестве результата другую функцию, в которую передаётся системное время

function setAlarm(time, callback) {
    return function () {
        const timeNow = new Date();
        const hours = timeNow.getHours().toString();
        const minutes = timeNow.getMinutes().toString();
        let resultTime = "";
//  Добавление нуля к минутам если минут в текущем времени меньше 10
      if (minutes.length < 2) {
           resultTime = hours + ":" + 0 + minutes;
        }  else if (minutes.length >= 2) {
           resultTime = hours + ":" + minutes;
        } 
//       Проверка на совпадение времени
        if (resultTime === time) {
            callback();
        }
    }
}
        

setDailyRhythm('7:30','19:07');