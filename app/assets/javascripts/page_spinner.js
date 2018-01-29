$(function() {
  $(document).ajaxStart(function() {
    //console.log('AjaxStart .....');
    $("#loading").addClass("fa fa-spinner fa-spin show");
    return false;
  });
  $(document).ajaxSuccess(function(e, data, xhr) {
    //return console.log("AjaxSuccess - xhr.url : " + xhr.url);
  });
  $(document).ajaxStop(function(e) {
    //console.log('AjaxStop ....');
    $("#loading").removeClass("fa fa-spinner fa-spin show");
    return false;
  });
  return true;
});