$(document).ready(function() {
	$('.nav-menu li a').on("click",function() {
		// event.preventDefault();
		$(this).addClass('checked').parent().siblings().find('a').removeClass('checked');
	});
	// 問題：
	// 如果由「商店」、「登入」、「註冊」頁面直接點選「特色」、「主廚」、「訂位」，
	// 因為 index.html 會重新載入，所以 checked 的效果還是會停留在「首頁」的選項上，
	// 而不是直接顯示在點選的項目上。


	// 頁面向下捲動超過 400px 之後，出現 Back to Top 按鈕
	$(window).scroll(function() {
		if ($(this).scrollTop() > 400) {
			$('.b2t').fadeIn('500');
		} else {
			$('.b2t').fadeOut('500');
		}
	});

	$('.b2t').on('click', function() {
		$('html, body').animate({scrollTop: 0}, 800);
	});


	// 頁面平滑滾動效果
	$('.nav-menu li a[href="index.html#top"]').click(function(){
		$('html,body').animate({scrollTop: 0}, 800);
	});
	$('.nav-menu li a[href="index.html#feature"]').click(function(){
		$('html,body').animate({scrollTop:$('#feature').offset().top}, 800);
	});
	$('.nav-menu li a[href="index.html#chef"]').click(function(){
		$('html,body').animate({scrollTop:$('#chef').offset().top}, 800);
	});
	$('.nav-menu li a[href="index.html#reservation"]').click(function(){
		$('html,body').animate({scrollTop:$('#reservation').offset().top}, 800);
	});


	// 下拉式漢堡選單
	$('.nav-h-icon').on("click", function(event) {
		$(this).toggleClass('open');
		$('.nav-menu').toggleClass('open');
		event.stopPropagation();

		// 點擊選單之外的其他範圍-->隱藏選單
		$(document).one('click', function() {
			$('.nav-h-icon').removeClass('open');
			$('.nav-menu').removeClass('open');
		});
		// Reference:
		// jQuery 怎么实现点击页面其他地方隐藏菜单？ - 知乎
		// www.zhihu.com/question/26391484
	});

	// $(document).mouseup(function(e){
	//   	var _con = $('.nav-menu');
	//   	if(!_con.is(e.target) && _con.has(e.target).length === 1){
	//     	$('.nav-menu').removeClass('open');
	//     	$('.nav-h-icon').removeClass('open');
	//   	}
	// });


	// 點選登入頁面中的註冊按鈕，連結到註冊頁面
	$('.login .btn-group .btn.btn-g').click(function(){
		window.location = 'register.html';
	});


	// 驗證使用者註冊時輸入的兩次密碼是否相符
	$('.btn-register').click(function() {
		var password = $('.password').val();
		var confirmPassword = $('.confirm-password').val();
		if (password != confirmPassword) {
			alert("Passwords do not match. Please check again.");
			return false;
		}
		return true;
	});


	// 點選到的商品類別加上背景色
	$('.category-list li a').click(function(event) {
		event.preventDefault();
		$(this).addClass('checked').parent().siblings().find('a').removeClass('checked');
	});


	// 商品列表中的愛心可以在兩個 class 之間切換，就可以變換空心和實心的愛心
	$('.product-list li i.heart').click(function(event) {
		$(this).toggleClass('fa-heart-o fa-heart');
	});


	// 點選商品分類，就可以出現該類別的商品列表
	$('a[data-category="all"]').click(function(event) {
		event.preventDefault();
		$('.product-list li').show();
	});

	$('a[data-category="fries"]').click(function(event) {
		event.preventDefault();
		$('.product-list li[data-product-type="fries"]').show().siblings('li:not([data-product-type="fries"])').hide();
	});

	$('a[data-category="microwave"]').click(function(event) {
		event.preventDefault();
		$('.product-list li[data-product-type="microwave"]').show().siblings('li:not([data-product-type="microwave"])').hide();
	});

	$('a[data-category="hamburger"]').click(function(event) {
		event.preventDefault();
		$('.product-list li[data-product-type="hamburger"]').show().siblings('li:not([data-product-type="hamburger"])').hide();
	});


	// 使用 html5 的 data-* 屬性，計算每個類別的商品數量，並顯示在商品類別之後
	var a = $('.product-list li').length;
	$('.category-list a[data-category="all"] span').text('(' + a + ')');

	var f = $('.product-list li[data-product-type="fries"]').length;
	$('.category-list a[data-category="fries"] span').text('(' + f + ')');

	var m = $('.product-list li[data-product-type="microwave"]').length;
	$('.category-list a[data-category="microwave"] span').text('(' + m + ')');

	var h = $('.product-list li[data-product-type="hamburger"]').length;
	$('.category-list a[data-category="hamburger"] span').text('(' + h + ')');

});