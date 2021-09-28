
$(document).ready(function() {
    $('.form-control').hide();
    $('.form-label').hide();
    $('.form-text').hide();
    $('button').attr('disabled', true);
  });
  
  $(document).ready(function() {
    $("input[class='form-check-input']").click(function() {
      $('input').show(1000);
      $('label').show(1000);
    });
  });
  
  $(document).ready(function() {
    $('#exampleInputEmail1').click(function() {
      $('.form-text').show(1000);
    });
  });

function isInput() {
  if (
    ($('#exampleInputEmail1').val() && $('#exampleInputPassword1').val()) !== ''
  ) {
    $(document).ready(function() {
      $('button').attr('disabled', false);
    });
  }
} 