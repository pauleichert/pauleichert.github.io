// rotates .rand items by a small, random amount

$('.wi').each(function() {
	var a = Math.random() * 1.25 - 1;
	$(this).css('transform', 'rotate(' + a + 'deg) scale(1)');
}, 
	function() {
		$(this).css('transform', 'none');
});