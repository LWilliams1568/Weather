(this["webpackJsonpweather-app"]=this["webpackJsonpweather-app"]||[]).push([[0],[,,,function(e,a,t){},,function(e,a,t){e.exports=t(12)},,,,,function(e,a,t){},function(e,a,t){},function(e,a,t){"use strict";t.r(a);var n=t(0),c=t.n(n),r=t(4),l=t.n(r),i=(t(10),t(1));t(3);var o=function(e){var a=e.data,t=a.temp,n=a.humidity,r=a.desc,l=a.city;return c.a.createElement(c.a.Fragment,null,c.a.createElement("h3",null,r),c.a.createElement("section",{className:"weather-data-flex"},c.a.createElement("div",{className:"header-description"},c.a.createElement("h4",null,"City"),c.a.createElement("p",null,l)),c.a.createElement("div",{className:"header-description"},c.a.createElement("h4",null,"Temperature"),c.a.createElement("p",null,t,c.a.createElement("span",{className:"degree-symbol"})," F")),c.a.createElement("div",{className:"header-description"},c.a.createElement("h4",null,"Humidity"),c.a.createElement("p",null,n,"%"))))};var m=function(){var e=Object(n.useState)(""),a=Object(i.a)(e,2),t=a[0],r=a[1],l=Object(n.useState)({temp:null,humidity:null,desc:null,city:null}),m=Object(i.a)(l,2),s=m[0],u=m[1],h=Object(n.useState)(!0),d=Object(i.a)(h,2),p=d[0],E=d[1];return c.a.createElement("section",{className:"weather-container"},c.a.createElement("header",{className:"weather-header"},c.a.createElement("h3",null,"Weather"),c.a.createElement("div",null,c.a.createElement("input",{placeholder:"Enter a Zip Code",className:"search-input",onChange:function(e){var a=e.target.value,t=/[0-9]{5}/.test(a);r(a),t||""===a||5===t.length?E(!0):E(!1)},maxLength:"5"}),c.a.createElement("button",{onClick:function(){p&&""!==t?fetch("https://api.openweathermap.org/data/2.5/weather?zip=".concat(t,",us&appid=").concat("c7c3ad8358cc48b3b530be00380a9763")).then((function(e){return e.json()})).then((function(e){return u({temp:(a=e.main.temp,(1.8*(a-273.15)+32).toFixed(0)),humidity:e.main.humidity,desc:e.weather[0].main,city:e.name});var a})):E(!1)},className:"material-icons"},"search"))),c.a.createElement("p",{className:"error"},p?"":"Invalid Zip Code"),c.a.createElement("section",{className:"weather-info"},null===s.temp?c.a.createElement("p",null,"No Weather to Display",c.a.createElement("i",{className:"material-icons"},"wb_sunny")):c.a.createElement(o,{data:s})))};t(11);var s=function(){return c.a.createElement("section",{className:"app-container"},c.a.createElement(m,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(s,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[5,1,2]]]);
//# sourceMappingURL=main.5ecaf8ba.chunk.js.map