AngularJS Color Contrast Directive
======================

Automatically set the text color based on the background.

Helps you display things like colored labels.

## Demo

http://evert0n.github.io/angular-color-contrast/

## Usage

Install with Bower

```bash
$bower install angular-color-contrast
```

Include this component into your app

```html
<script src="color-contrast.js"></script>
```

Inject colorContrast as a module dependency to your app.

```javascript
var myApp = angular.module('myApp', ['colorContrast']);
```

Pass the background color of element to get the right color contrast for the text.

```html
<div ng-show="labels" class="labels">
  <a ng-repeat="label in labels" href="#" target="_blank">
    <span class="label" color-contrast="{{label.color}}">{{label.name}}</span>
  </a>
</div>
```

By default, light and dark colors are specified as `#ffffff` and `#000000` respectively. You can also pass your own color values as HEX colors for custom control over the light and dark colors that are applied.

```javascript
...
$scope.myDarkColor = '#444';
...
```
```html
<div ng-show="labels" class="labels">
  <a ng-repeat="label in labels" href="#" target="_blank">
    <span class="label" color-contrast="{{label.color}}" light-color="'#eee'" dark-color="myDarkColor">{{label.name}}</span>
  </a>
</div>
```

## License

[MIT License](http://www.opensource.org/licenses/mit-license.php)
