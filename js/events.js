//define functions here
function getIt(){
  $("p").click(function(){
    alert("Hey!")
  })
}
function frameIt(){
  $('img').on('load', function(){
    $(this).addClass('tasty')
  })
}
$(document).ready(function(){

// call functions here
  getIt()
  frameIt()
  submitIt()
});
