app.controller('indexCtrl', ['$scope', '$http', function($scope, $http) {

}])

app.controller('toutiaoCtrl', ['$scope', '$http', '$rootScope', 'swiper', function($scope, $http, $rootScope, swiper) {

		/*参数：tuijian(推荐，默认),shehui(社会),gaoxiao(搞笑),qiwen(奇闻),lizhi(励志),yangsheng(养生),yulue(娱乐),keji(科技),baike(百科),caijing(财经),qiche(汽车),qinggan(情感),xingzuo(星座),meishi(美食),shishang(时尚),luyou(旅游),yuer(育儿),tiyu(体育),junshi(军事)*/
		$rootScope.arr = ['#/toutiao/tuijian', '#/toutiao/shehui', '#/toutiao/gaoxiao', '#/toutiao/qiwen', '#/toutiao/lizhi', '#/toutiao/yangsheng', '#/toutiao/yulue', '#/toutiao/keji', '#/toutiao/baike', '#/toutiao/caijing', '#/toutiao/qiche', '#/toutiao/qinggan', '#/toutiao/xingzuo', '#/toutiao/meishi', '#/toutiao/shishang', '#/toutiao/luyou', '#/toutiao/yuer', '#/toutiao/tiyu', '#/toutiao/junshi'];

		//点击获取索引值
		$rootScope.fnClick = (function() {
			var index = 0;
			//获取节点
			//var par = document.getElementsByTagName('ion-scroll');
			var par = $('ion-scroll a');
			angular.element(par).on('click', function() {
					index = $(this).index();
					$(this).addClass('active').siblings().removeClass('active');
				})
				//向左滑动
			swiper.method('left', function() {
				index++;
				if(index >= $rootScope.arr.length) {
					index = $rootScope.arr.length - 1;
				}
				//console.log(index)
				window.location.href = $rootScope.arr[index];

				par.eq(index).addClass('active').siblings().removeClass('active');
			})
			swiper.method('right', function() {
				index--;
				if(index < 0) {
					index = 0;
				}
				//console.log($rootScope.arr[0])
				window.location.href = $rootScope.arr[index];
				par.eq(index).addClass('active').siblings().removeClass('active');
			})

		})();

	}])
	//推荐                     
app.controller('tuijianCtrl', ['$rootScope', '$scope', '$http', 'swiper', function($rootScope, $scope, $http, swiper) {
	
}]);
//社会
app.controller('shehuiCtrl', ['$rootScope', '$scope', '$http', 'swiper', function($rootScope, $scope, $http, swiper) {

}]);
//搞笑
app.controller('gaoxiaoCtrl', ['$rootScope', '$scope', '$http', 'swiper', function($rootScope, $scope, $http, swiper) {

}]);
//奇闻
app.controller('qiwenCtrl', ['$rootScope', '$scope', '$http', 'swiper', function($rootScope, $scope, $http, swiper) {

}]);
//励志
app.controller('lizhiCtrl', ['$rootScope', '$scope', '$http', 'swiper', function($rootScope, $scope, $http, swiper) {

}]);
//养生
app.controller('yangshengCtrl', ['$rootScope', '$scope', '$http', 'swiper', function($rootScope, $scope, $http, swiper) {

}]);
//娱乐
app.controller('yulueCtrl', ['$rootScope', '$scope', '$http', 'swiper', function($rootScope, $scope, $http, swiper) {

}]);
//科技
app.controller('kejiCtrl', ['$rootScope', '$scope', '$http', 'swiper', function($rootScope, $scope, $http, swiper) {

}]);
//百科
app.controller('baikeCtrl', ['$rootScope', '$scope', '$http', 'swiper', function($rootScope, $scope, $http, swiper) {

}]);
//财经
app.controller('caijingCtrl', ['$rootScope', '$scope', '$http', 'swiper', function($rootScope, $scope, $http, swiper) {

}]);
//汽车
app.controller('qicheCtrl', ['$rootScope', '$scope', '$http', 'swiper', function($rootScope, $scope, $http, swiper) {

}]);
//情感
app.controller('qingganCtrl', ['$rootScope', '$scope', '$http', 'swiper', function($rootScope, $scope, $http, swiper) {

}]);
//星座
app.controller('xingzuoCtrl', ['$rootScope', '$scope', '$http', 'swiper', function($rootScope, $scope, $http, swiper) {

}]);
//美食
app.controller('meishiCtrl', ['$rootScope', '$scope', '$http', 'swiper', function($rootScope, $scope, $http, swiper) {

}]);
//时尚
app.controller('shishangCtrl', ['$rootScope', '$scope', '$http', 'swiper', function($rootScope, $scope, $http, swiper) {

}]);
//旅游
app.controller('luyouCtrl', ['$rootScope', '$scope', '$http', 'swiper', function($rootScope, $scope, $http, swiper) {

}]);
//育儿
app.controller('yuerCtrl', ['$rootScope', '$scope', '$http', 'swiper', function($rootScope, $scope, $http, swiper) {

}]);
//体育
app.controller('tiyuCtrl', ['$rootScope', '$scope', '$http', 'swiper', function($rootScope, $scope, $http, swiper) {

}]);
//军事
app.controller('junshiCtrl', ['$rootScope', '$scope', '$http', 'swiper', function($rootScope, $scope, $http, swiper) {

}]);

//视频
app.controller('shipinAppCtrl', ['$scope', '$http', '$rootScope','swiper', function($scope, $http, $rootScope,swiper) {
	$rootScope.arr = ['#/shipin/dazahui', '#/shipin/xiaofantian', '#/shipin/qipashi', '#/shipin/yuluequan', '#/shipin/youximi'];
	//点击获取索引值
		$rootScope.fnClick01 = (function() {
			var index = 0;
			//获取节点
			var par = $('ion-scroll a');
			angular.element(par).on('click', function() {
					index = $(this).index();
					$(this).addClass('active').siblings().removeClass('active');
				})
				//向左滑动
			swiper.method('left', function() {
				index++;
				if(index >= $rootScope.arr.length) {
					index = $rootScope.arr.length - 1;
				}
			
				console.log(index)
				window.location.href = $rootScope.arr[index];

				par.eq(index).addClass('active').siblings().removeClass('active');
			})
			swiper.method('right', function() {
				index--;
				if(index < 0) {
					index = 0;
				}
				
				window.location.href = $rootScope.arr[index];
				par.eq(index).addClass('active').siblings().removeClass('active');
			})

		})();
}])

//大杂烩
app.controller('dazahuiCtrl', ['$rootScope', '$scope', '$http', 'swiper', function($rootScope, $scope, $http, swiper) {
	
}]);
//笑翻天
app.controller('xiaofantianCtrl', ['$rootScope', '$scope', '$http', 'swiper', function($rootScope, $scope, $http, swiper) {
	
}]);
//奇葩事
app.controller('qipashiCtrl', ['$rootScope', '$scope', '$http', 'swiper', function($rootScope, $scope, $http, swiper) {
	
}]);
//娱乐圈
app.controller('yuluequanCtrl', ['$rootScope', '$scope', '$http', 'swiper', function($rootScope, $scope, $http, swiper) {
	
}]);
//游戏迷
app.controller('youximiCtrl', ['$rootScope', '$scope', '$http', 'swiper', function($rootScope, $scope, $http, swiper) {
	
}]);


//我的登录注册
app.controller('mineAppCtrl', ['$scope', '$http', function($scope, $http) {

}])

app.controller('RootCtrl', function($scope) {
        $scope.onControllerChanged = function(oldController, oldIndex, newController, newIndex) {
          console.log('Controller changed', oldController, oldIndex, newController, newIndex);
          console.log(arguments);
        };
      })


     app.controller('HomeCtrl', function($scope, $timeout, $ionicModal, $ionicActionSheet) {
        $scope.items = [];

        $ionicModal.fromTemplateUrl('newTask.html', function(modal) {
          $scope.settingsModal = modal;
        });

        var removeItem = function(item, button) {
          $ionicActionSheet.show({
            buttons: [],
            destructiveText: 'Delete Task',
            cancelText: 'Cancel',
            cancel: function() {
              return true;
            },
            destructiveButtonClicked: function() {
              $scope.items.splice($scope.items.indexOf(item), 1);
              return true;
            }
          });
        };

        var completeItem = function(item, button) {
          item.isCompleted = true;
        };

        $scope.onReorder = function(el, start, end) {
          ionic.Utils.arrayMove($scope.items, start, end);
        };

        $scope.onRefresh = function() {
          console.log('ON REFRESH');

          $timeout(function() {
            $scope.$broadcast('scroll.refreshComplete');
          }, 1000);
        }


        $scope.removeItem = function(item) {
          removeItem(item);
        };

        $scope.newTask = function() {
          $scope.settingsModal.show();
        };

        // Create the items
        for(var i = 0; i < 25; i++) {
          $scope.items.push({
            title: 'Task ' + (i + 1),
            buttons: [{
              text: 'Done',
              type: 'button-success',
              onButtonClicked: completeItem,
            }, {
              text: 'Delete',
              type: 'button-danger',
              onButtonClicked: removeItem,
            }]
          });
        }

      })

      app.controller('TaskCtrl', function($scope) {
        $scope.close = function() {
          $scope.modal.hide();
        }
      });

