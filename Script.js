var a = 1; // Змінна для чергування натискань мишкою
var Save; // Зиінна для збереженя клону блоку
$(document).on("click", ".custom-video-overlay", function() {
	if (a == 1) {
		$("video")[0].play();
		Save = $(".custom-video-overlay").clone();
		$(".custom-video-overlay").remove();
		a += 1;
	}
});

$("video").click(function() {
	if (a != 1) {
		$("video")[0].pause();
		$(".custom-video").append(Save);
		a = 1;
	}
});