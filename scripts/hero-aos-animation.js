// Requiring AOS JS
$(() => {
    AOS.init();
    // TimeOut Delay based on .progress-illustration__ data-aos-delay
    setTimeout("$('.progress-item__.flutter .bar').css('width', '50%')", 3600);
    setTimeout("$('.progress-item__.figma .bar').css('width', '90%')", 3600);
});
document.addEventListener("DOMContentLoaded", () => {
    //Animate progress percentage
    function animateValue(obj, start, end, duration) {
        let startTimestamp = null;
        const step = (timestamp) => {
            if (!startTimestamp) startTimestamp = timestamp;
            const progress = Math.min(
                (timestamp - startTimestamp) / duration,
                1
            );
            obj.innerHTML = `${Math.floor(progress * (end - start) + start)}%`;
            if (progress < 1) {
                window.requestAnimationFrame(step);
            }
        };
        window.requestAnimationFrame(step);
    }
    const flutter = document.querySelector(
        ".progress-item__.flutter .status span"
    );
    const figmaCC = document.querySelector(
        ".progress-item__.figma .status span"
    );
    setTimeout(() => {
        // These duration the same as .bar duration from CSS
        animateValue(flutter, 0, 50, 1500);
        animateValue(figmaCC, 0, 90, 1500);
    }, 3600); // TimeOut Delay based on .progress-illustration__ data-aos-delay
});
