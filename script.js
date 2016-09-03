// Make these objects/functions global so it can be grabbed in any context
var interval = null
var pomtime = 25
var timerRunning = false

function getTimeRemaining (targetTime) {
  // Get the total time difference between the expected and current time
  var time = Date.parse(targetTime) - Date.parse(new Date())
  // Partition result into finer units like minutes and seconds (no need to
  // track hours, etc)
  // Result is in milliseconds so we'll need to convert up from that...
  // Use Math.floor to round down to whole seconds/minutes
  var seconds = Math.floor((time / 1000) % 60)
  var minutes = Math.floor((time / 1000 / 60) % 60)

  // Since there are multiple parts to be returned, lets return an object
  return {
    'seconds': seconds,
    'minutes': minutes,
    'total': time
  }
}

function startClock (targetTime, type) {
  // var timer = $('#timerValue')
  // Create the timer, re-evaluate every second
  interval = setInterval(function () {
    var t = getTimeRemaining(targetTime)
    // Add leading zero to keep digits at least two per type (mins/secs)
    // Use slice(-2) to prevent this from making the result longer than two :)
    $('#timerValue').html(('0' + t.minutes).slice(-2) + ':' + ('0' + t.seconds).slice(-2))
    console.log(t)

    // If no more time left, use clearInterval to terminate the timer, alert the user, and start
    // the next break or work session as appropriate
    if (t.total <= 0) {
      clearInterval(interval)
      if (type === 'break') {
        alert('Your break is over, let\'s get started on the next ' + pomtime + ' minute(s) of awesome work!')
        startPomodoro()
      } else {
        alert('Great job! Time to take a well-earned break!')
        startBreak()
      }
    }
  }, 1000)
}

// Begins countdown from 25 minutes by default, or new user-defined value
function startPomodoro () {
  // Stop any existing interval function
  clearInterval(interval)
  // Reset the timer text
  $('#timerValue').html(('0' + pomtime).slice(-2) + ':00')
  // Create a new timer for current time + 25 minutes in ms (25 min * 60 sec/min * 1000 sec/ms)
  // This can be edited by the user clicking the +/- buttons
  var newPomodoro = new Date(Date.parse(new Date()) + pomtime * 60 * 1000)
  timerRunning = true
  startClock(newPomodoro, 'pomodoro')
}

// Begins break countdown from 5 minutes.
function startBreak () {
  // Stop the interval function
  clearInterval(interval)
  // Reset the timer text
  $('#timerValue').html('05:00')
  // Create a new break timer for current time + 5 minutes in ms (5 min * 60 sec/min * 1000 sec/ms)
  var newBreakTimer = new Date(Date.parse(new Date()) + 5 * 60 * 1000)
  timerRunning = true
  startClock(newBreakTimer, 'break')
}

$(document).ready(function () {
  // Start a new pomodoro timer
  $('#startTimer').click(function () {
    console.log("Beginning new timer...")
    startPomodoro()
  })

  // Start a break
  $('#breakStart').click(function () {
    console.log('Taking a break...')
    startBreak()
  })

  // Reset timer to whatever the default pomodoro has been set to
  $('#resetTimer').click(function () {
    // Stop the interval function
    clearInterval(interval)
    console.log('Resetting')
    // Reset the timer text
    $('#timerValue').html(('0' + pomtime).slice(-2) + ':00')
    timerRunning = false
  })

  // Increase default pomodoro time by 1 minute
  $('#addMin').click(function () {
    pomtime++
    console.log('Incrementing pomodoro length to: ' + pomtime)
    // Remember to also update the display!
    if (!timerRunning) {
      $('#timerValue').html(('0' + pomtime).slice(-2) + ':00')
    }
  })

  // Reduce default pomodoro time by 1 minute if reasonable
  $('#subMin').click(function () {
    if (pomtime <= 1) {
      alert('Minimum timer length is 1 minute, smart move to try working in 0 minute incremements, though!')
    } else {
      pomtime--
      console.log('Decrementing pomodoro length to: ' + pomtime)
      // Remember to also update the display!
      if (!timerRunning) {
        $('#timerValue').html(('0' + pomtime).slice(-2) + ':00')
      }
    }
  })
})
