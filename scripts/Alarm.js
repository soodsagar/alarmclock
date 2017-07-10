/**
 *
 * alarms are saved in the allAlarms list as { 'time': 'enabled' },
 * where time is HH:MM A/PM and enabled is a boolean (true: alarm is enabled)
**/
function Alarm() {
  this.allAlarms = {}
  this.alarmAlert = document.getElementById( "alert" );
}

Alarm.prototype.setNewAlarm = function( hour, min, period ) {
  // alarm format HH:MM {AM\PM} ex. 12:50 PM
  var alarmTime = hour + ":" + min + " " + period
  if ( alarmTime in this.allAlarms ) {
    Alarm.showAlert( "Alarm for " + alarmTime + " already exists." );
  } else {
    Alarm.appendAlarm( alarmTime );
  }
  this.allAlarms[ alarmTime ] = true;
}

Alarm.prototype.appendAlarm = function( time ) {
  var tileList = document.getElementById( "alarm-list" );
  var tile = document.createElement( "div" );
  tile.setAttribute( "id", "alarm-tile" );
  tile.setAttribute( "class", "alarm-tile" );
  tile.setAttribute( "data-time", time );

  var timeSpan = document.createElement( "span" );
  timeSpan.setAttribute( "class", "alarm-time" );
  timeSpan.innerHTML = time;

  var deleteSpan = document.createElement( "span" );
  deleteSpan.setAttribute( "class", "alarm-delete" );
  deleteSpan.innerHTML = '<i class="fa fa-trash-o"></i>';

  tile.appendChild( timeSpan );
  tile.appendChild( deleteSpan );
  tileList.appendChild( tile );

}

Alarm.prototype.monitorAlarms = function( currentTime ) {
  // if an alarm is equal to current time and is enabled
  if ( this.allAlarms.hasOwnProperty( currentTime ) ) {
    if ( this.allAlarms[ currentTime ] == true ) {
      return true;
    }
  }
  return false;
}

Alarm.prototype.showAlert = function( alertMessage ) {
  this.alarmAlert.innerHTML = alertMessage;
  this.alarmAlert.style.visibility = "visible";
  setTimeout( function() {
    this.alarmAlert.style.display = "hidden";
  }, 4000 );
}

Alarm.prototype.deleteAlarm = function( time ) {
  if ( allAlarms.hasOwnProperty( time ) ) {
    delete allAlarms[ time ];
  }
}

Alarm.prototype.updateAlarmList = function( time, status ) {
  if ( this.allAlarms.hasOwnProperty( time ) ) {
    this.allAlarms[ time ] = status;
  }
}

var Alarm = new Alarm();
