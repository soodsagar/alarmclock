
window.onload = function() {
  var mainClock = new Clock();

  mainClock.setUpHoursMins();

  setInterval( function() {
    var clock = new Clock();
    var currentTime = clock.hour + ":" + clock.min + " " + clock.period;

    document.getElementById( "time-hour" ).innerHTML = clock.hour;
    document.getElementById( "time-min" ).innerHTML = clock.min;
    document.getElementById( "time-period" ).innerHTML = clock.period;

    document.getElementById( "weekday" ).innerHTML = clock.day;
    document.getElementById( "date" ).innerHTML = clock.month + " " + clock.date + ", " + clock.year;

    if ( Alarm.monitorAlarms( currentTime ) ) {
      Alarm.showAlert( "Alarm is going off!" );
      // TODO - play audio;
    }
  }, 1000 );

}

// Set a New Alarm Action
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

// Set a New Alarm Action
var setAlarmBtn = document.getElementById( "set-alarm-button" );
setAlarmBtn.onclick = function() {
  var options = document.getElementById( "set-alarm-options" );
  if ( options.style.display === 'none' ) {
    this.style.display = "none";
    options.style.display = 'block';
  } else {
    this.style.display = "block";
    options.style.display = "none";
  }

}
