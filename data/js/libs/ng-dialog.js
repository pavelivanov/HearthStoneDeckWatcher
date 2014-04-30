/*! ngDialog - v0.1.6 (https://github.com/likeastore/ngDialog) */
!function(a,b){"use strict";var c=b.module("ngDialog",[]),d=b.element,e=b.isDefined,f=(document.body||document.documentElement).style,g=e(f.animation)||e(f.WebkitAnimation)||e(f.MozAnimation)||e(f.MsAnimation)||e(f.OAnimation),h="animationend webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend";c.provider("ngDialog",function(){var a,c=this.defaults={className:"ngdialog-theme-default",plain:!1,showClose:!0,closeByDocument:!0,closeByEscape:!0},e=0,f=0;this.$get=["$document","$templateCache","$compile","$q","$http","$rootScope","$timeout",function(i,j,k,l,m,n,o){var p=i.find("body"),q={onDocumentKeyup:function(a){27===a.keyCode&&r.close()},closeDialog:function(b){"undefined"!=typeof Hammer?Hammer(b[0]).off("tap",a):b.unbind("click"),1===f&&p.unbind("keyup").removeClass("ngdialog-open"),f-=1,g?b.unbind(h).bind(h,function(){b.scope().$destroy(),b.remove()}).addClass("ngdialog-closing"):(b.scope().$destroy(),b.remove()),n.$broadcast("ngDialog.closed",b)}},r={open:function(g){function h(a){return a?b.isString(a)&&s.plain?a:j.get(a)||m.get(a,{cache:!0}):"Empty template"}var i=this,s=b.copy(c);g=g||{},b.extend(s,g),e+=1,i.latestID="ngdialog"+e;var t,u=b.isObject(s.scope)?s.scope.$new():n.$new();l.when(h(s.template)).then(function(c){return c=b.isString(c)?c:c.data&&b.isString(c.data)?c.data:"",j.put(s.template,c),s.showClose&&(c+='<div class="ngdialog-close"></div>'),i.$result=t=d('<div id="ngdialog'+e+'" class="ngdialog"></div>'),t.html('<div class="ngdialog-overlay"></div><div class="ngdialog-content">'+c+"</div>"),s.controller&&b.isString(s.controller)&&t.attr("ng-controller",s.controller),s.className&&t.addClass(s.className),s.data&&b.isString(s.data)&&(u.ngDialogData="{"===s.data.replace(/^\s*/,"")[0]?b.fromJson(s.data):s.data),u.closeThisDialog=function(){q.closeDialog(t)},o(function(){k(t)(u)}),p.addClass("ngdialog-open").append(t),s.closeByEscape&&p.bind("keyup",q.onDocumentKeyup),s.closeByDocument&&(a=function(a){var b=d(a.target).hasClass("ngdialog-overlay"),c=d(a.target).hasClass("ngdialog-close");(b||c)&&r.close(t.attr("id"))},"undefined"!=typeof Hammer?Hammer(t[0]).on("tap",a):t.bind("click",a)),f+=1,n.$broadcast("ngDialog.opened",t),r})},close:function(a){var b=d(document.getElementById(a));return b.length?q.closeDialog(b):r.closeAll(),r},closeAll:function(){var a=document.querySelectorAll(".ngdialog");b.forEach(a,function(a){q.closeDialog(d(a))})}};return r}]}),c.directive("ngDialog",["ngDialog",function(a){return{restrict:"A",link:function(c,d,e){d.on("click",function(c){c.preventDefault(),b.isDefined(e.ngDialogClosePrevious)&&a.close(e.ngDialogClosePrevious),a.open({template:e.ngDialog,className:e.ngDialogClass,controller:e.ngDialogController,scope:e.ngDialogScope,data:e.ngDialogData,showClose:"false"===e.ngDialogShowClose?!1:!0,closeByDocument:"false"===e.ngDialogCloseByDocument?!1:!0,closeByEscape:"false"===e.ngDialogCloseByKeyup?!1:!0})})}}}])}(window,window.angular);