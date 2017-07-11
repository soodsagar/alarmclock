/**
 * The main Alarm class. Alarms are saved in the allAlarms list as { 'time': 'enabled' },
 * where time is {string} HH:MM A/PM and enabled is a {boolean} (true: alarm is enabled)
**/
function Alarm() {
  this.allAlarms = {}
  this.alarmAlert = document.getElementById( "alert" );
}

/**
 * Sets a new alarm by adding it to allAlarms and appending an entry to DOM
 * @param {string|number} hour The hour of the time
 * @param {string|number} min The minute of the time
 * @param {string} period AM/PM
**/
Alarm.prototype.setNewAlarm = function( hour, min, period ) {
  // alarm format HH:MM {AM\PM} ex. 12:50 PM
  var alarmTime = hour + ":" + min + " " + period
  if ( alarmTime in this.allAlarms ) {
    Alarm.showAlert( "Alarm for " + alarmTime + " already exists.", 4 );
  } else {
    Alarm.appendAlarm( alarmTime );
  }
  this.allAlarms[ alarmTime ] = true;
}

/**
 * Sets a new alarm by adding it to allAlarms and appending an entry to DOM
 * @param {string} time The time string added to allAlarms (format: HH:MM AM)
**/
Alarm.prototype.appendAlarm = function( time ) {
  var tileList = document.getElementById( "alarm-list" );
  var tile = document.createElement( "div" );
  tile.setAttribute( "id", "alarm-tile" );
  tile.setAttribute( "class", "alarm-tile" );
  tile.setAttribute( "data-time", time );

  var timeSpan = document.createElement( "span" );
  timeSpan.setAttribute( "class", "alarm-time" );
  timeSpan.innerHTML = time;

  tile.appendChild( timeSpan );
  tileList.appendChild( tile );
}

/**
 * Checks current time against any alarms in allAlarms
 * @param {string} currentTime The current time string
 * @return {boolean} True if alarm should go off,
 *                   False if there is no alarm matching current time
**/
Alarm.prototype.monitorAlarms = function( currentTime ) {
  // if an alarm is equal to current time and is enabled
  if ( this.allAlarms.hasOwnProperty( currentTime ) ) {
    if ( this.allAlarms[ currentTime ] == true ) {
      return true;
    }
  }
  return false;
}

/**
 * Show an alert on the DOM with a message
 * @param {string} alertMessage Message to be shown
 * @param {number} alertTimeout How long message should be shown in seconds
**/
Alarm.prototype.showAlert = function( alertMessage, alertTimeout ) {
  var alarmAlert = this.alarmAlert;
  alarmAlert.innerHTML = alertMessage;
  alarmAlert.style.visibility = "visible";
  setTimeout( function() {
    alarmAlert.style.visibility = "hidden";
  }, alertTimeout * 1000 );
}
