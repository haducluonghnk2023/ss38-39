document.addEventListener("DOMContentLoaded", function () {
    var overlay = document.getElementById('overlay');
    var text = document.getElementById('text');

    // Hiển thị ảnh và số 0% ban đầu
    overlay.style.opacity = 1;
    overlay.style.filter = 'blur(0px)';
    text.style.opacity = 1;

    // Đặt thời gian mờ → rõ và 0% - 100% (tùy chỉnh theo ý muốn)
    var fadeInDuration = 2000; // Thời gian mờ → rõ: 2s
    var fadeOutDuration = 2000; // Thời gian 0% → 100%: 2s
    var totalDuration = fadeInDuration + fadeOutDuration;

    setTimeout(function () {
        var startTime = new Date().getTime();

        function update() {
            var currentTime = new Date().getTime();
            var elapsed = currentTime - startTime;
            var progress = Math.min(1, elapsed / totalDuration);

            text.innerHTML = Math.round(progress * 100) + '%';

            overlay.style.filter = 'blur(' + (10 - 10 * progress) + 'px)'; // Điều chỉnh độ mờ

            if (progress < 1) {
                requestAnimationFrame(update);
            }
            else {
                // Ẩn phần tử sau khi hoàn thành hiệu ứng
                overlay.style.display = 'none';
                text.style.display = 'none';
            }
        }

        update();
    }, fadeInDuration);
});