var allButtons = $('div > button');

for (let i = 0; i < allButtons.length; i++) {
  $(allButtons[i]).on('click', function (x) {
    colorChange($(allButtons[i]));
    var index = ($(x.currentTarget).index());
    var distance = index * -350;
    // console.log(distance);
    $('#images').css({
      transform: 'translateX(' + distance + 'px)'
    })
  })
}

let counter = 1;
var timeId = setTimer();
// console.log($('.window'))
$('.window').on('mouseenter', function () {
  clearInterval(timeId);
})
$('.window').on('mouseleave', function () {
  timeId = setTimer();
})

function setTimer() {
  return setInterval(() => {
    // console.log(counter)
    colorChange(allButtons.eq(counter % 3).trigger('click'));
    counter += 1;
  }, 1000)
}
function colorChange($button) {
  $button.addClass('cyan').siblings('.cyan').removeClass('cyan')
}
