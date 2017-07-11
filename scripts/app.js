const weekDays = [ "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday",
  "Friday", "Saturday"
];

const monthNames = [ "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];

const hoursInDay = 24;
const minsInHour = 60;
const secInMin = 60;

window.onload = function() {
  var mainClock = new Clock();
  var secondsBar = document.getElementById( "seconds-progress" );

  mainClock.setUpHoursMins();

  setInterval( function() {
    var clock = new Clock();
    var currentTime = clock.hour + ":" + clock.min + " " + clock.period;

    document.getElementById( "time-hour" ).innerHTML = clock.hour;
    document.getElementById( "time-min" ).innerHTML = clock.min;
    document.getElementById( "time-period" ).innerHTML = clock.period;

    document.getElementById( "weekday" ).innerHTML = clock.day;
    document.getElementById( "date" ).innerHTML = clock.month + " " + clock.date + ", " + clock.year;

    // Seconds progress bar changes width every second
    secondsBar.style.width = ( ( clock.sec / secInMin ) * 100 ) + "%";

    if ( Alarm.monitorAlarms( currentTime ) ) {
      Alarm.showAlert( "Alarm is going off!", secInMin );
    }
  }, 1000 );

  document.getElementById( "set-alarm-button" ).style.display = "block";
  document.getElementById( "set-alarm-options" ).style.display = "none";

}
var Alarm = new Alarm();

// Click event for "Add/Hide Alarm" button
var setAlarmBtn = document.getElementById( "set-alarm-button" );
setAlarmBtn.onclick = function() {
  var options = document.getElementById( "set-alarm-options" );
  if ( options.style.display == "none" ) {
    options.style.display = "block";
    this.innerHTML = "HIDE ALARM";
  } else {
    options.style.display = "none";
    this.innerHTML = "ADD ALARM";
  }
}

// Click event for check button to confirm setting a new alarm
var setAlarmConfirmBtn = document.getElementById( "set-alarm-confirm" );
setAlarmConfirmBtn.onclick = function() {
  var selectHour = document.getElementById( "set-alarm-hour" );
  hour = selectHour.options[ selectHour.selectedIndex ].value;

  var selectMin = document.getElementById( "set-alarm-min" );
  min = selectMin.options[ selectMin.selectedIndex ].value;

  var selectPeriod = document.getElementById( "set-alarm-period" );
  period = selectPeriod.options[ selectPeriod.selectedIndex ].value;

  Alarm.setNewAlarm( hour, min, period );
}
