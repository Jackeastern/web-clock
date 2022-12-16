var clock_element_id = "clock_element"
function updateClock() {
    var now = new Date();
    var hours = now.getHours();
    var minutes = now.getMinutes();
    var seconds = now.getSeconds();
    document.getElementById(clock_element_id).innerHTML = hours + ':' + minutes + ':' + seconds;
  }

  function clockUpdater(clock_element_from_html){
    clock_element_id = clock_element_from_html
    return updateClock
  }