$(document).ready(function(){
  $("#aggiungi").click(function(){
    var todoTitle = $("#title").val();
    $("#title").val("");

    var template = $("#template li").clone();
    template.children("span.title").text(todoTitle);

    template.children("span.elimina").click(function(){
      $(this).parent().remove();
    });

    template.children("span.modifica").click(function(){
      var titleDOM = $(this).siblings("span.title");
      var title = titleDOM.text();
      titleDOM.hide();

      $(this).siblings("input").val(title).show();
    });

    template.children("input").keyup(function(e){
      if (e.which == 13) {
        var title = $(this).val();
        $(this).hide();
        $(this).siblings("span.title").text(title).show();
      }
    });

    $("#todo").append(template);
  });
})
