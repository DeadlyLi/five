var app = angular.module('myApp', ['ui.router', 'ionic'])
	.run(function($ionicPlatform) {
		$ionicPlatform.ready(function() {
			//隐藏附件栏默认(删除此显示键盘上面的附件栏表单输入)

			if(window.cordova && window.cordova.plugins.Keyboard) {
				cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
			}
			if(window.StatusBar) {
				StatusBar.styleDefault();
			}
		});
	})
	
