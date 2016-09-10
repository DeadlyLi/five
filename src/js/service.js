//左右上下滑动
app.service('swiper', [function() {
	return {
		method: function(direct, callback) {
			var callbackTop, callbackdown, callbackLeft, callbackRight;
			//判断方向，执行回调
			switch(direct) {
				case 'top':
					callbackTop = callback;
					break;
				case 'bottom':
					callbackBottom = callback;
					break;
				case 'left':
					callbackLeft = callback;
					break;
				case 'right':
					callbackRight = callback;
					break;
			}
			var touch = {}
			document.getElementById('hdxr').addEventListener('touchstart', function(e) {
				console.log("点击滑动前");
				touch.x1 = e.targetTouches[0].pageX;
				touch.y1 = e.targetTouches[0].pageY;
				console.log('X:' + e.targetTouches[0].pageX + ' Y:' + e.targetTouches[0].pageY);
				//$scope.$apply();
			})
			var ab = function(e) {
				console.log("点击滑动后");
				touch.x2 = e.changedTouches[0].pageX;
				touch.y2 = e.changedTouches[0].pageY;
				console.log('X:' + e.changedTouches[0].pageX + ' Y:' + e.changedTouches[0].pageY)
				console.log(direction(touch.x1, touch.x2, touch.y1, touch.y2));
				var swiDirection = direction(touch.x1, touch.x2, touch.y1, touch.y2)
				console.log(swiDirection)
				if(swiDirection == 'bottom') {
					//手动刷新
					typeof callbackBottom==='function' && callbackBottom();
					//$scope.$apply();
				} else if(swiDirection == 'top') {
					//手动刷新
					typeof callbackTop==='function' && callbackTop();
					//$scope.$apply();
				} else if(swiDirection == 'left') {
					//手动刷新
					typeof callbackLeft==='function' && callbackLeft();
//					$scope.$apply();
				}else if(swiDirection == 'right'){
					//手动刷新
					typeof callbackRight==='function' && callbackRight();
//					$scope.$apply();
				}//
			}
			
			function direction(xStart, xEnd, yStart, yEnd) {
				return Math.abs(xStart - xEnd) >= Math.abs(yStart - yEnd) ? (xStart >= xEnd ? "left" : "right") : (yStart >= yEnd ? "top" : "bottom");
			}
			document.getElementById('hdxr').addEventListener('touchend', ab);
		}
	}
}])


