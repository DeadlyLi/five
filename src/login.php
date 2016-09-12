<?php
	$_GET['callback'];
	$_GET['user'];
	$_GET['password'];
	
	//echo "你的用户名为：".$_GET['user'].'<br>'."你的密码为：".$_GET['password'].'<br>'."回调函数为：".$_GET['callback']
	$arr = array('token'=>'123456','state'=>'success');
	$arr2 = array('state'=>'登录失败');
	//json_decode字符串转对象
	//json_encode对象转字符串
	if($_GET['user']=='abc' && $_GET['password']=='123'){
		$data = json_encode($arr);
		echo $_GET['callback']."(".$data.")";
	}else{
		$data2 = json_encode($arr2);
		echo $_GET['callback']."(".$data2.")";
	}
	
	?>