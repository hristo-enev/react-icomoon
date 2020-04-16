"use strict";var _react=require("react");Object.defineProperty(exports,"__esModule",{value:!0}),exports["default"]=void 0;function ownKeys(a,b){var c=Object.keys(a);if(Object.getOwnPropertySymbols){var d=Object.getOwnPropertySymbols(a);b&&(d=d.filter(function(b){return Object.getOwnPropertyDescriptor(a,b).enumerable})),c.push.apply(c,d)}return c}function _objectSpread(a){for(var b,c=1;c<arguments.length;c++)b=null==arguments[c]?{}:arguments[c],c%2?ownKeys(Object(b),!0).forEach(function(c){_defineProperty(a,c,b[c])}):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(b)):ownKeys(Object(b)).forEach(function(c){Object.defineProperty(a,c,Object.getOwnPropertyDescriptor(b,c))});return a}function _defineProperty(a,b,c){return b in a?Object.defineProperty(a,b,{value:c,enumerable:!0,configurable:!0,writable:!0}):a[b]=c,a}function _objectWithoutProperties(a,b){if(null==a)return{};var c,d,e=_objectWithoutPropertiesLoose(a,b);if(Object.getOwnPropertySymbols){var f=Object.getOwnPropertySymbols(a);for(d=0;d<f.length;d++)c=f[d],!(0<=b.indexOf(c))&&Object.prototype.propertyIsEnumerable.call(a,c)&&(e[c]=a[c])}return e}function _objectWithoutPropertiesLoose(a,b){if(null==a)return{};var c,d,e={},f=Object.keys(a);for(d=0;d<f.length;d++)c=f[d],0<=b.indexOf(c)||(e[c]=a[c]);return e}var style={display:"inline-block",stroke:"currentColor",fill:"currentColor"},IcoMoon=function(a){var b=a.iconSet,c=a.icon,d=a.size,e=a.disableFill,f=a.removeInlineStyle,g=_objectWithoutProperties(a,["iconSet","icon","size","disableFill","removeInlineStyle"]);if(!b||!c)return console.warn("The \"iconSet\" and \"icon\" props are required."),null;var h=b.icons.find(function(a){return a.properties.name===c});if(!h)return console.warn("\"".concat(c,"\" icon not found.")),null;d&&(style.width=d,style.height=d),g.style=_objectSpread({},f?{}:style,{},g.style||{});var i=h.icon.width,j=void 0===i?"1024":i;g.viewBox="0 0 ".concat(j," 1024");var k=h.icon.paths.map(function(a,b){return(0,_react.createElement)("path",_objectSpread({d:a,key:c+b},e?{}:h.icon.attrs[b]))});return(0,_react.createElement)("svg",g,k)},_default=IcoMoon;exports["default"]=_default;