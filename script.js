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
time1 = time1.format('hh:mm A');
// print time into html
$('.block1').text(time1);
// 10 AM
let time2 = beforeTime.add(1, 'h');
time2 = time2.format('hh:mm A');
$('.block2').text(time2);
// 11 AM
let time3 = beforeTime.add(1, 'h');
time3 = time3.format('hh:mm A');
$('.block3').text(time3);
// 12 PM
let time4 = beforeTime.add(1, 'h');
time4 = time4.format('hh:mm A');
$('.block4').text(time4);
// 1 PM
let time5 = beforeTime.add(1, 'h');
time5 = time5.format('hh:mm A');
$('.block5').text(time5);
// 2 PM
let time6 = beforeTime.add(1, 'h');
time6 = time6.format('hh:mm A');
$('.block6').text(time6);
// 3 PM
let time7 = beforeTime.add(1, 'h');
time7 = time7.format('hh:mm A');
$('.block7').text(time7);
// 4 PM
let time8 = beforeTime.add(1, 'h');
time8 = time8.format('hh:mm A');
$('.block8').text(time8);
// 5 PM
let time9 = beforeTime.add(1, 'h');
time9 = time9.format('hh:mm A');
$('.block9').text(time9);
