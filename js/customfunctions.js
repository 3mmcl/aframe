AFRAME.registerComponent("trigger-poster1-click", {
  init: function () {
    var el = this.el; // The source object
    el.addEventListener("click", function () {
      var targetEl = document.querySelector("#fishposter"); // The target object
      if (targetEl) {
        targetEl.emit("runP1Animation"); // Emit the custom event
      }
    });
  },
});

AFRAME.registerComponent("trigger-poster2-click", {
  init: function () {
    var el = this.el; // The source object
    el.addEventListener("click", function () {
      var targetEl = document.querySelector("#beaverposter"); // The target object
      if (targetEl) {
        targetEl.emit("runP2Animation"); // Emit the custom event
      }
    });
  },
});

AFRAME.registerComponent("trigger-poster3-click", {
  init: function () {
    var el = this.el; // The source object
    el.addEventListener("click", function () {
      var targetEl = document.querySelector("#birdposter"); // The target object
      if (targetEl) {
        targetEl.emit("runP3Animation"); // Emit the custom event
      }
    });
  },
});

AFRAME.registerComponent("trigger-poster4-click", {
  init: function () {
    var el = this.el; // The source object
    el.addEventListener("click", function () {
      var targetEl = document.querySelector("#bisonposter"); // The target object
      if (targetEl) {
        targetEl.emit("runP4Animation"); // Emit the custom event
      }
    });
  },
});

AFRAME.registerComponent("trigger-poster5-click", {
  init: function () {
    var el = this.el; // The source object
    el.addEventListener("click", function () {
      var targetEl = document.querySelector("#wolfposter"); // The target object
      if (targetEl) {
        targetEl.emit("runP5Animation"); // Emit the custom event
      }
    });
  },
});

AFRAME.registerComponent("trigger-poster6-click", {
  init: function () {
    var el = this.el; // The source object
    el.addEventListener("click", function () {
      var targetEl = document.querySelector("#beeposter"); // The target object
      if (targetEl) {
        targetEl.emit("runP6Animation"); // Emit the custom event
      }
    });
  },
});

AFRAME.registerComponent("trigger-poster7-click", {
  init: function () {
    var el = this.el; // The source object
    el.addEventListener("click", function () {
      var targetEl = document.querySelector("#dflyposter"); // The target object
      if (targetEl) {
        targetEl.emit("runP7Animation"); // Emit the custom event
      }
    });
  },
});
