// moment declaration for day and time
moment(Date);
$('#currentDay').text(moment().format('ddd MMM Do YYY, h:mm a'));
// moment current time
let currentTime = moment();
// returning nearest hour for current time
currentTime = currentTime.startOf("hour");
// setting start of the day at 9am
let beforeTime = moment().startOf('day').add(9, 'hours');

// Time blocks
// 9 AM
let time1 = beforeTime.add(0, 'h');

