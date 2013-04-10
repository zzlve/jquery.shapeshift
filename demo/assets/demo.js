// Generated by CoffeeScript 1.4.0
(function() {

  $(function() {
    var $containers, child_count, filter_options, getRandomColor, renderChildren, renderPlaceholders;
    $containers = $(".ss-container");
    child_count = 30;
    (renderChildren = function() {
      var weighted_colspans;
      weighted_colspans = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3];
      return $containers.each(function() {
        var colspan, elements, height, i, _i;
        elements = [];
        for (i = _i = 0; 0 <= child_count ? _i < child_count : _i > child_count; i = 0 <= child_count ? ++_i : --_i) {
          colspan = weighted_colspans[Math.floor(Math.random() * weighted_colspans.length)];
          height = colspan * 80 + ((colspan - 1) * 12);
          elements.push("<li data-ss-colspan=" + colspan + " style='height: " + height + "'><div class='position'><div>" + i + "</div></div></li>");
        }
        return $(this).append(elements.join(""));
      });
    })();
    getRandomColor = function() {
      var color, i, letters, _i, _ref;
      letters = 'ABCDEF'.split('');
      color = '';
      for (i = _i = 0, _ref = letters.length; 0 <= _ref ? _i < _ref : _i > _ref; i = 0 <= _ref ? ++_i : --_i) {
        color += letters[Math.round(Math.random() * 5)];
      }
      return color;
    };
    (renderPlaceholders = function(type) {
      return $containers.each(function() {
        var $child, $children, background, height, i, width, _i, _results;
        $children = $(this).children().not(".credits");
        child_count = $children.length;
        if (type === "index") {
          return $(this).find(".position").show();
        } else {
          _results = [];
          for (i = _i = 0; 0 <= child_count ? _i < child_count : _i > child_count; i = 0 <= child_count ? ++_i : --_i) {
            $child = $($children[i]);
            height = $child.height();
            width = $child.width();
            switch (type) {
              case "fpoimg":
                background = 'url("http://fpoimg.com/' + width + 'x' + height + '?bg_color=' + getRandomColor() + '&text_color=444444")';
                break;
              case "placekittens":
                background = 'url("http://www.placekitten.com/' + width + '/' + height + '")';
            }
            background = '';
            _results.push($child.css({
              backgroundImage: background,
              height: height
            }));
          }
          return _results;
        }
      });
    })("fpoimg");
    filter_options = {};
    $containers.shapeshift(filter_options);
    $(".options ul.animation li").on("click", function() {
      switch ($(this).data("option")) {
        case "enable":
          filter_options.animated = true;
          break;
        default:
          filter_options.animated = false;
      }
      return $containers.shapeshift(filter_options);
    });
    $(".options ul.dragndrop li").on("click", function() {
      switch ($(this).data("option")) {
        case "enable":
          filter_options.animated = true;
          break;
        default:
          filter_options.animated = false;
      }
      return $containers.shapeshift(filter_options);
    });
    $(".options ul.filtering li").on("click", function() {
      switch ($(this).data("option")) {
        case "hide":
          $containers.children(":visible").sort(function() {
            return Math.round(Math.random()) - 0.5;
          }).first().hide();
          break;
        default:
          $containers.children(":hidden").sort(function() {
            return Math.round(Math.random()) - 0.5;
          }).first().hide();
      }
      return $containers.trigger("ss-arrange");
    });
    $(".options ul.placeholders li").on("click", function() {
      renderPlaceholders($(this).data("option"));
      return $containers.shapeshift(filter_options);
    });
    $containers.on("ss-arranged", function(e, selected) {
      var modifier;
      modifier = $(this).find(".ss-dragging")[0] ? 1 : 0;
      return $(this).children().each(function() {
        return $(this).find(".position").text($(this).index() - modifier);
      });
    });
    $containers.on("ss-event-dropped", function(e, selected) {
      var $objects, $selected;
      $selected = $(selected);
      $objects = $(this).children();
      return $objects.each(function(i) {});
    });
    return $containers.on("ss-event-dragged", function(e, selected) {
      var $selected;
      return $selected = $(selected);
    });
  });

}).call(this);
