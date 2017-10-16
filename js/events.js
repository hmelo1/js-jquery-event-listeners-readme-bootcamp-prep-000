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
function submitIt(){
  $("form").on("submit", function(){
    if ($( "input:first").val() === "correct"){
      alert('Your form is going to be submitted now.')
      return
    }
  })
}
$(document).ready(function(){

// call functions here
  getIt()
  frameIt()
  submitIt()
});
