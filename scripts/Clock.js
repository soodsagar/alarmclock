const weekDays = [ "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday",
  "Friday", "Saturday"
];

const monthNames = [ "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];

const hoursInDay = 24;
const minsInHour = 60;

function Clock() {
  this.fullDate = new Date();
  var hour = this.fullDate.getHours();
  var min = this.fullDate.getMinutes();

  this.period = "AM";
  if ( hour >= 12 ) {
    hour = hour - 12;
    this.period = "PM";
  } else if ( hour == 0 ) {
    hour = 12 // midnight
  }

  // prefix '0' to format time eg. 4:17 -> 04:17
  this.hour = hour < 10 ? "0" + hour : hour;
  this.min = min < 10 ? "0" + min : min;

  this.sec = this.fullDate.getSeconds();
  this.day = weekDays[ this.fullDate.getDay() ];
  this.date = this.fullDate.getDate();
  this.month = monthNames[ this.fullDate.getMonth() ]
  this.year = this.fullDate.getFullYear();

}

Clock.prototype.setUpHoursMins = function() {
  var hourSelect = document.getElementById( "set-alarm-hour" );
  var minSelect = document.getElementById( "set-alarm-min" );
  var hourOption, hourVal, minOption, minVal;

  for ( h = 1; h <= hoursInDay / 2; h++ ) {
    hourOption = document.createElement( "option" );
    hourVal = ( h < 10 ? "0" + h : h );
    hourOption.text = hourVal;
    hourOption.value = hourVal;
    hourSelect.appendChild( hourOption );
  }

  for ( m = 0; m < minsInHour; m++ ) {
    minOption = document.createElement( "option" );
    minVal = ( m < 10 ? "0" + m : m );
    minOption.text = minVal;
    minOption.value = minVal;
    minSelect.appendChild( minOption );
  }
}
