 // JavaScript to handle the slide bar functionality
 $(document).ready(function() {
    // Show/hide slide bar on icon click
    $('#toggleIcon').on('click', function() {
      $('#sidebar').toggleClass('show');
    });

    // Hide the slide bar when clicking outside of it on smaller screens
    $(document).on('click', function(event) {
      if (!$(event.target).closest('#toggleIcon, #sidebar').length && $('#sidebar').hasClass('show')) {
        $('#sidebar').removeClass('show');
      }
    });
  });

  
  function load(){
    document.querySelector("#container").classList.add("load");
}