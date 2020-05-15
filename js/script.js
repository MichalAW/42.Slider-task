function slider(picture) {
  this.picture = document.querySelector(picture);
  this.init();
}

slider.prototype = {

  init: function() {
    this.links = this.picture.querySelectorAll("#slider-nav a");
    this.wrapper = this.picture.querySelector("#slider-wrapper");
    this.navigation();
  },

  navigation: function() {
    for (var i = 0; i < this.links.length; ++i) {
      var link = this.links[i];
      this.slide(link);
    }
  },

  slide: function(picture) {
    var self = this;

    picture.addEventListener("click", function(e) {
      e.preventDefault();
      var a = this;
      self.setCurrentLink(a);

      var index = parseInt(a.getAttribute("data-slide"), 10) + 1;
      var currentSlide = self.picture.querySelector(".slide:nth-child(" + index + ")"); //for each class self.el keep a reference to this 

      self.wrapper.style.left = "-" + currentSlide.offsetLeft + "px";
    }, false);
  },
  
  setCurrentLink: function(linkToEach) {
    var parent = linkToEach.parentNode; //return parent to element
    var a = parent.querySelectorAll("a");

    linkToEach.className = "current";

    for (var j = 0; j < a.length; ++j) {
      var cur = a[j];

      if (cur !== linkToEach) {
        cur.className = "";
      }
    }
  }
};

document.addEventListener("DOMContentLoaded", function () {
  var newSlider = new slider("#slider");
});