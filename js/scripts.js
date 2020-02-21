$(document).ready(function() {
  $("#formOne").submit(function(event) {
    event.preventDefault();
    var winter = $("select#winter").val();
    var dragon = $("select#dragon").val();
    var debts = $("select#debts").val();
    console.log(winter, dragon, debts)
    var JS = "<p>You know nothing Jon Snow!</p>"


    if (winter === "JS") {
      $("#output").empty();
      $("#output").append("You know nothing Jon Snow!", "<img src='img/JS.jpg'>");  
    } else if (winter === "JL" && dragon === "JL") { 
      $("#output").empty();
      $("#output").append("You know nothing Jon Snow!", "<img src='img/JL.jpg'>");
    } else if (winter === "OB") {
      $("#output p, img").hide();
      $("#OB").show();
    }  
  });
});