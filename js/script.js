function openCity(topicName) {
  var i;
  var x = document.getElementsByClassName("topic");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  document.getElementById(topicName).style.display = "block";
}
