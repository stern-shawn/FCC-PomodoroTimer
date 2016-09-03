# Pomodoro Timer - FreeCodeCamp Project
---
## 1. What This Project Does
The purpose of this app is to provide the user with a simple Pomodoro Timer, a productivity tool with the intent of working for 25 minutes at a time, broken up by 5 minute breaks before the next Pomodoro begins. Through building this app I got exposure to the JavaScript built-in Date and Math objects, and how to create and control timed actions using setInterval() and callbacks.

The user stories for this project are:

* The user can start a 25 minute pomodoro, and the timer will go off once 25 minutes has elapsed.
* The user can reset the clock for their next pomodoro.
* The user can customize the length of each pomodoro.
* Use any libraries or APIs needed, and give it your own personal style.

Since style and functionality other than the base user stories is up to me, I decided to add the following functionality:

* At the end of a Pomodoro, after the user closes the alert, their break will begin. Once the break alert has been closed, the next Pomodoro will begin, and so on.

The originally submitted version of the app fulfilled all user stories, and the various iterations since then have been improvements either in styling or in making the code more succinct.

## 2. How To Set This Up
If you want to clone this project for yourself, the process is very simple due to the structure of the project.

1. Either manually download and unzip files to a location, or clone this repo through Git.
2. Open the index.html file in your browser. This project is built on HTML5/CSS3/JavaScript/jQuery and the necessary resources from Bootstrap and FontAwesome are linked through the HTML file, so there is no need to install any packages through NPM.

## 3. Project Goals
As one of my early web development projects, this was a chance for me to:

* Continue working with HTML/CSS and using Bootstrap for styling and creating a crisp, visually appealing user experience.
* Practice using jQuery to monitor divs and buttons for clicks and apply appropriate responses to the DOM.
* Get experience using JavaScript built-in objects such as the Math and Date objects.
* Learn to create delayed/timed effects using the setInterval function.
* Look for opportunities to use special JavaScript functions like .map, .every, etc to make code more pure and declarative vs imperative.
* Continue producing well-documented code with repetitive functionality factored out into specific functions that minimize redundancy, keep code short, and increase readability/maintainability.

Now that I'm coming back and reviewing past projects (such as this one), my new goals in addition to supporting the previous ones are:

* Redesign the app to fit into my growing design language/styling through color, layout, animations, and reduction of unnecessary elements
* Refactor any redundancies in my JavaScript and make old code compliant with current linters (such as AirBnB's standards)

## 4. Link to Live Site
The latest version of the site can be viewed [here](https://stern-shawn.github.io/FCC-PomodoroTimer/) thanks to gh-pages hosting.

## 5. Roadmap
TODO:

* ~~Establish initial template in plain HTML/CSS, including a location for the timer text, buttons for start/break/reset, and buttons to increment/decrement the Pomodor length~~
* ~~Apply Bootstrap styling to make the app more responsive on mobile devices and when the desktop window is resized~~
* ~~Use Date object to get current time, Math object to correctly convert values (using floor function) to intervals of seconds, minutes, hours, etc. Use this and add the pomodoro to the time to find out the exected end times of pomodoros/breaks~~
* ~~Figure out how to use the setInterval function to determine how much time is left between right now and the expected end of whatever pomodoro/break we are in once every second~~
* ~~Allow the user to adjust the length of the Pomorodo using the +/- buttons. This can be done at any time and should update the display if a timer isn't currently running~~
* Restyle app (Currently when unstacked, the +/- buttons are in a funny location maybe? Maybe it's just me)
* Add animations
