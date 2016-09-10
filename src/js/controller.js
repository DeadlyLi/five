app.controller('indexCtrl', ['$scope', '$http', function($scope, $http) {

}])

app.controller('toutiaoCtrl', ['$scope', '$http','$rootScope','swiper', function($scope, $http,$rootScope,swiper) {
	//左右滑动
//	$scope.touch = function(){
//		console.log("触发了滑动事件")
//	}

	/*参数：tuijian(推荐，默认),shehui(社会),gaoxiao(搞笑),qiwen(奇闻),lizhi(励志),yangsheng(养生),yulue(娱乐),keji(科技),baike(百科),caijing(财经)
	 	qiche(汽车),qinggan(情感),xingzuo(星座),meishi(美食),shishang(时尚),luyou(旅游),yuer(育儿),tiyu(体育),junshi(军事)

	*/
	$rootScope.arr = ['#/toutiao/tuijian', '#/toutiao/shehui', '#/toutiao/gaoxiao', '#/toutiao/qiwen', '#/toutiao/lizhi', '#/toutiao/yangsheng', '#/toutiao/yulue', '#/toutiao/keji', '#/toutiao/baike', '#/toutiao/caijing',
					'#/toutiao/qiche', '#/toutiao/qinggan', '#/toutiao/xingzuo', '#/toutiao/meishi', '#/toutiao/shishang', '#/toutiao/luyou', '#/toutiao/yuer', '#/toutiao/tiyu', '#/toutiao/junshi'];
	$rootScope.page = 0;
	$rootScope.i=0;
//	点击改变className
//	$rootScope.dianji=(function(){
//		angular.element('ion-scroll a').eq($scope.i).addClass('hongse');
//		angular.element('ion-scroll a').on('click',function(){
//			$rootScope.i=$(this).index();
//			angular.element('ion-scroll a').removeClass('active');
//			$(this).addClass('active');
//		})
//	})();
	
	
	
	
	
	
	$rootScope.loadNews = function(page) {
//			$http.jsonp('news.php', {
//				params: {
//					q: $rootScope.arr[page],
//					callback: 'JSON_CALLBACK'
//				}
//			}).success(function(data) {
//				console.log(data);
//				$rootScope.news = data.result.data;
//			})
		}	
		//下拉刷新完成动画
//	$rootScope.doRefresh = function() {
//		if($rootScope.page == 9) {
//			$rootScope.page = 0;
//		}
//		$rootScope.page++;
//		$http.jsonp('news.php', {
//				params: {
//					q: $rootScope.arr[$rootScope.page],
//					callback: 'JSON_CALLBACK'
//				}
//			}).success(function(data) {
//				$rootScope.news = data.result.data.concat($rootScope.news);
//				console.log($rootScope.news.length);
//			})
//			.finally(function() {
//				$rootScope.$broadcast('scroll.refreshComplete');
//			});
//	};
	
	$rootScope.doLeft =function(){
			swiper.method('left', function() {
		$rootScope.i++;
		if($rootScope.i>=$rootScope.arr.length){
			$rootScope.i=$rootScope.arr.length;
		}
		window.location.href = $rootScope.arr[$rootScope.i];
//		angular.element('ion-scroll a').removeClass('active');
//		angular.element('ion-scroll a').eq($rootScope.i).addClass('active');
		})
	}

	
	
	$rootScope.doRight = function(){
		swiper.method('right',function(){
		$rootScope.i--;
		if($rootScope.i<=0){
			$rootScope.i=0;
		}
		window.location.href = $rootScope.arr[$rootScope.i];
		angular.element('ion-scroll a').removeClass('active');
		angular.element('ion-scroll a').eq($rootScope.i).addClass('active');
	})
	}
	
	
	$rootScope.doTop = function(){
		swiper.method('top', function() {
	if(angular.element(window).scrollTop() >= angular.element('#xuanran').outerHeight(true) - angular.element(window).innerHeight()) {
		console.log('sss');
		//				$scope.load = false;
		//				$scope.num += 10;
		//				qingqiu()
	}
})
	}
	
//	var qingqiu=function(){$http.get('tuijian.php', {
//		params: {
//			num: $scope.num,
//			page: '1'
//		}
//	}).success(function(data) {
//		console.log(data);
//		$scope.load = true;
//		$scope.news = data.newslist;
//
//		})
//	}
//	qingqiu()
		
	
}])
	//推荐                     
app.controller('tuijianCtrl', ['$rootScope', '$scope', '$http', function($rootScope, $scope, $http) {
	$rootScope.page = 0;
	$rootScope.loadNews($rootScope.page);
	console.log($rootScope.doLeft);
	//调用滑动
	$rootScope.doLeft();
	$rootScope.doRight();
}]);
	//社会
app.controller('shehuiCtrl', ['$rootScope', '$scope', '$http', function($rootScope, $scope, $http) {
	$rootScope.page = 1;
	$rootScope.loadNews($rootScope.page);
	$rootScope.doLeft();
	$rootScope.doRight();
}]);
	//搞笑
app.controller('gaoxiaoCtrl', ['$rootScope', '$scope', '$http', function($rootScope, $scope, $http) {
	$rootScope.page = 2;
	$rootScope.loadNews($rootScope.page);
		$rootScope.doLeft();
	$rootScope.doRight();
}]);
	//奇闻
app.controller('qiwenCtrl', ['$rootScope', '$scope', '$http', function($rootScope, $scope, $http) {
	$rootScope.page = 3;
	$rootScope.loadNews($rootScope.page);
	$rootScope.doLeft();
	$rootScope.doRight();
}]);
	//励志
app.controller('lizhiCtrl', ['$rootScope', '$scope', '$http', function($rootScope, $scope, $http) {
	$rootScope.page = 4;
	$rootScope.loadNews($rootScope.page);
	$rootScope.doLeft();
	$rootScope.doRight();
}]);
	//养生
app.controller('yangshengCtrl', ['$rootScope', '$scope', '$http', function($rootScope, $scope, $http) {
	$rootScope.page = 5;
	$rootScope.loadNews($rootScope.page);
	$rootScope.doLeft();
	$rootScope.doRight();
}]);
	//娱乐
app.controller('yulueCtrl', ['$rootScope', '$scope', '$http', function($rootScope, $scope, $http) {
	$rootScope.page = 6;
	$rootScope.loadNews($rootScope.page);
	$rootScope.doLeft();
	$rootScope.doRight();
}]);
	//科技
app.controller('kejiCtrl', ['$rootScope', '$scope', '$http', function($rootScope, $scope, $http) {
	$rootScope.page = 7;
	$rootScope.loadNews($rootScope.page);
	$rootScope.doLeft();
	$rootScope.doRight();
}]);
	//百科
app.controller('baikeCtrl', ['$rootScope', '$scope', '$http', function($rootScope, $scope, $http) {
	$rootScope.page = 8;
	$rootScope.loadNews($rootScope.page);
	$rootScope.doLeft();
	$rootScope.doRight();
}]);
	//财经
app.controller('caijingCtrl', ['$rootScope', '$scope', '$http', function($rootScope, $scope, $http) {
	$rootScope.page = 9;
	$rootScope.loadNews($rootScope.page);
	$rootScope.doLeft();
	$rootScope.doRight();
}]);
	//汽车
app.controller('qicheCtrl', ['$rootScope', '$scope', '$http', function($rootScope, $scope, $http) {
	$rootScope.page = 10;
	$rootScope.loadNews($rootScope.page);
	$rootScope.doLeft();
	$rootScope.doRight();
}]);
	//情感
app.controller('qingganCtrl', ['$rootScope', '$scope', '$http', function($rootScope, $scope, $http) {
	$rootScope.page = 11;
	$rootScope.loadNews($rootScope.page);
	$rootScope.doLeft();
	$rootScope.doRight();
}]);
	//星座
app.controller('xingzuoCtrl', ['$rootScope', '$scope', '$http', function($rootScope, $scope, $http) {
	$rootScope.page = 12;
	$rootScope.loadNews($rootScope.page);
	$rootScope.doLeft();
	$rootScope.doRight();
}]);
	//美食
app.controller('meishiCtrl', ['$rootScope', '$scope', '$http', function($rootScope, $scope, $http) {
	$rootScope.page = 13;
	$rootScope.loadNews($rootScope.page);
	$rootScope.doLeft();
	$rootScope.doRight();
}]);
	//时尚
app.controller('shishangCtrl', ['$rootScope', '$scope', '$http', function($rootScope, $scope, $http) {
	$rootScope.page = 14;
	$rootScope.loadNews($rootScope.page);
	$rootScope.doLeft();
	$rootScope.doRight();
}]);
	//旅游
app.controller('luyouCtrl', ['$rootScope', '$scope', '$http', function($rootScope, $scope, $http) {
	$rootScope.page = 15;
	$rootScope.loadNews($rootScope.page);
	$rootScope.doLeft();
	$rootScope.doRight();
}]);
	//育儿
app.controller('yuerCtrl', ['$rootScope', '$scope', '$http', function($rootScope, $scope, $http) {
	$rootScope.page = 16;
	$rootScope.loadNews($rootScope.page);
	$rootScope.doLeft();
	$rootScope.doRight();
}]);
	//体育
app.controller('toiyuCtrl', ['$rootScope', '$scope', '$http', function($rootScope, $scope, $http) {
	$rootScope.page = 17;
	$rootScope.loadNews($rootScope.page);
	$rootScope.doLeft();
	$rootScope.doRight();
}]);
	//军事
app.controller('junshiCtrl', ['$rootScope', '$scope', '$http', function($rootScope, $scope, $http) {
	$rootScope.page = 18;
	$rootScope.loadNews($rootScope.page);
	$rootScope.doLeft();
	$rootScope.doRight();
}]);



//视频
app.controller('shipinAppCtrl', ['$scope', '$http','$rootScope', function($scope, $http,$rootScope) {
	$rootScope.arr = ['dazahuiCtrl', 'xiaofantianCtrl', 'qipashiCtrl', 'yuluequanCtrl', 'youximiCtrl'];
	$rootScope.num = 0;
	$rootScope.loadNews = function(num) {
//			$http.jsonp('news.php', {
//				params: {
//					q: $rootScope.arr[page],
//					callback: 'JSON_CALLBACK'
//				}
//			}).success(function(data) {
//				console.log(data);
//				$rootScope.news = data.result.data;
//			})
		}
}])

	//大杂烩
app.controller('dazahuiCtrl', ['$rootScope', '$scope', '$http', function($rootScope, $scope, $http) {
	$rootScope.num = 0;
	$rootScope.loadNews($rootScope.num);
}]);
	//笑翻天
app.controller('xiaofantianCtrl', ['$rootScope', '$scope', '$http', function($rootScope, $scope, $http) {
	$rootScope.num = 1;
	$rootScope.loadNews($rootScope.num);
}]);
	//奇葩事
app.controller('qipashiCtrl', ['$rootScope', '$scope', '$http', function($rootScope, $scope, $http) {
	$rootScope.num = 2;
	$rootScope.loadNews($rootScope.num);
}]);
	//娱乐圈
app.controller('yuluequanCtrl', ['$rootScope', '$scope', '$http', function($rootScope, $scope, $http) {
	$rootScope.num = 3;
	$rootScope.loadNews($rootScope.num);
}]);
	//游戏迷
app.controller('youximiCtrl', ['$rootScope', '$scope', '$http', function($rootScope, $scope, $http) {
	$rootScope.num = 4;
	$rootScope.loadNews($rootScope.num);
}]);








app.controller('mineAppCtrl', ['$scope', '$http', function($scope, $http) {

}])



//左右滑动
app.directive('ngWs', function() {
	return {
		link: function(scope, ele, attr) {
			var xStart, xEnd, yStart, yEnd;

			function direction(xStart, xEnd, yStart, yEnd) {
				console.log("xStart:" + xStart + "xEnd:" + xEnd + "yStart:" + yStart + "yEnd:" + yEnd);
				if(Math.abs(xStart - xEnd) >= Math.abs(yStart - yEnd)) {
					if(xStart >= xEnd) {
						console.log("left")
						scope.$apply(scope.touch())
						alert("left")
					} else {
						console.log("right")
						scope.$apply(scope.touch())
					}
				} else {
					if(yStart >= yEnd) {
						console.log("up")
						scope.$apply(scope.touch())
					} else {
						console.log("down")
						scope.$apply(scope.touch())
					}
				}
			}
			ele.bind('touchstart', function(e) {
				xStart = e.targetTouches[0].pageX;
				yStart = e.targetTouches[0].pageY;
			})
			ele.bind('touchend', function(e) {
				xEnd = e.changedTouches[0].pageX;
				yEnd = e.changedTouches[0].pageY;
				direction(xStart, xEnd, yStart, yEnd)
			})

		}
	}
})