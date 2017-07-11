Alarm Clock in JavaScript
===================


A simple Alarm Clock written in plain JavaScript. Built by Sagar Sood.

----------


Build
-------------

The build process is straightforward. If you already have `node-sass` and `http-server` installed on your machine, simply type this command in the project root directory:
```
npm run start
```

If you don't have the dependencies installed, just run `npm install` first. This will download and install the two required dependencies. After that's done, then run the above command `npm run start`.

Once that's running, the project is available on `http://localhost:3000`

Potential Next Steps
-------------
There are a few thing I'd like to improve and/or add as features:
* Delete an alarm from the list
* Disable/Enable an alarm, the data structure for it is already there. Alarms are saved with a boolean `enabled`. Setting it to false would disable the alarm.
* Snooze an alarm or dismiss an alarm: Currently alarms are displayed for a full minute. The user should be able to dismiss the alarm or snooze it (alert again after 9 minutes)
* Local storage: Alarms should be stored in local storage so if the user closes the tab, the alarms don't get deleted
* MVC structure: Potentially the code can be implemented as an MVC structure, where the Alarm has a controller that displays and updates the model into the front-end view.
