var countDownDate = new Date("Dec 22, 2021 17:00:25").getTime();

// Update the count down every 1 second
var x = setInterval(function () {

 // Get today's date and time
 var now = new Date().getTime();

 // Find the distance between now and the count down date
 var distance = countDownDate - now;

 // Time calculations for days, hours, minutes and seconds
 // var month = Math.floor(distance / (1000 * 60 * 60 * 24 * 30));
 var days = Math.floor(distance / (1000 * 60 * 60 * 24));
 var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
 var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
 var seconds = Math.floor((distance % (1000 * 60)) / 1000);
 // console.log(days, hours, minutes, seconds);
 // Output the result in an element with class= "dealine-format"
 // console.log(month);
 document.querySelector(".days").innerHTML = days
 document.querySelector(".hours").innerHTML = hours
 document.querySelector(".minutes").innerHTML = minutes
 document.querySelector(".seconds").innerHTML = seconds


 // console.log(time);
 // If the count down is over, write some text 
 if (distance < 0) {
  clearInterval(x);
  document.querySelector('.expire').innerHTML = "EXPIRED";
  document.querySelector('.deadline').classList.add('hide')
 }
 else {
  document.querySelector('.expire').classList.add('hide')
 }
}, 1000);