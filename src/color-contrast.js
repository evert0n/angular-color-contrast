'use strict';

angular.module('colorContrast', [])
  .directive('colorContrast', function () {

    // 24 WAYS - http://24ways.org/2010/calculating-color-contrast/
    function getContrastYIQ(hexcolor, darkColor, lightColor){
    	var r = parseInt(hexcolor.substr(0,2),16);
    	var g = parseInt(hexcolor.substr(2,2),16);
    	var b = parseInt(hexcolor.substr(4,2),16);
    	var yiq = ((r*299)+(g*587)+(b*114))/1000;
    	return (yiq >= 128) ? darkColor : lightColor;
    };

    function stripNumberSign(color){
        if(color[0] === "#") {
            color = color.substring(1, color.length);
        }
        return color;
    };

    return {
      restrict: 'A',
      scope: {
        darkColor: '=?',
        lightColor: '=?'
      },
      link: function postLink(scope, element, attrs) {
        if(!attrs.darkColor){
          scope.darkColor = '000000';
        }
        if(!attrs.lightColor){
          scope.lightColor = '000000';
        }
        attrs.$observe('colorContrast', function(color) {
          if (color) {
            color = stripNumberSign(color);
            element.css("background-color", "#" + color);
            element.css("color", "#" + getContrastYIQ(color, scope.darkColor, scope.lightColor));
          }
        });
      }
    };

  });
