$('#query').keyup(function(e){
  if(e.keyCode == 13) {
    const query = $(this).val();
    if (query) {
      window.location.href = 'search/' + encodeURIComponent(query);
    }
  }
});
