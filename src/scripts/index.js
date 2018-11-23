var Imba = require('imba'), _1 = Imba.createElement;
// ---------------------
// hack against tag duplication
// try to remove it and do several updates
if (module.hot) {
	if (document.body) {
		document.body.innerHTML = '';
	};
	module.hot.accept();
	// ---------------------
};

console.log('running');

var App = Imba.defineTag('App', function(tag){
	tag.prototype.__x = {'default': Math.floor(Math.random() * 300),name: 'x'};
	tag.prototype.x = function(v){ return this._x; }
	tag.prototype.setX = function(v){ this._x = v; return this; }
	tag.prototype._x = Math.floor(Math.random() * 300);
	tag.prototype.__y = {'default': Math.floor(Math.random() * 300),name: 'y'};
	tag.prototype.y = function(v){ return this._y; }
	tag.prototype.setY = function(v){ this._y = v; return this; }
	tag.prototype._y = Math.floor(Math.random() * 300);
	
	tag.prototype.testDynamicImport = function (){
		return window.alert('hello imba!');
	};
	
	tag.prototype.render = function (){
		var $ = this.$;
		return this.$open(0).css('top',("" + (this._y) + "px")).css('left',("" + (this._x) + "px")).setChildren($.$ = $.$ || [
			_1('div',$,0,this).setId('cube').setText('Hello world'),
			_1('button',$,1,this).on$(0,['tap','testDynamicImport'],this).setText("Test Dynamic Import")
		],2).synced();
	};
});

Imba.mount((_1(App)).end());
