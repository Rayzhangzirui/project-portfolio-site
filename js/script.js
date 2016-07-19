window.onload = function () { 
  $('#modal-item').on('show.bs.modal', function (event) {
    var button = $(event.relatedTarget); // Button that triggered the modal
    var itemNum = button.data('num');      
    var modal = $(this)
      switch (itemNum){
        case 1:
          modal.find(".modal-image").attr("src","images/street-360x240.jpg");
          modal.find(".modal-title").text("Applify");
          modal.find("p").text("Lorem ipsum dolor sit amet, consectetur adipiscing elit");
          break;
        case 2:
          modal.find(".modal-image").attr("src","images/building-360x240.jpg");
          modal.find(".modal-title").text("Sunflower");
          modal.find("p").text("Lorem ipsum dolor sit amet, consectetur adipiscing elit");
          break;
        case 3:
          modal.find(".modal-image").attr("src","images/forest-360x240.jpg");
          modal.find(".modal-title").text("Bokeh");
          modal.find("p").text("Lorem ipsum dolor sit amet, consectetur adipiscing elit");
          break;
      }
  })
}
