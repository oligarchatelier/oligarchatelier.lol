document.addEventListener("DOMContentLoaded", () => {
    // Custom Cursor Logic
    const cursorDot = document.querySelector(".cursor-dot");
    const cursorOutline = document.querySelector(".cursor-outline");

    // Check if device has a mouse/pointer
    const isTouchDevice = window.matchMedia("(pointer: coarse)").matches;

    if (!isTouchDevice) {
        window.addEventListener("mousemove", (e) => {
            const posX = e.clientX;
            const posY = e.clientY;

            // Dot follows instantly
            cursorDot.style.left = `${posX}px`;
            cursorDot.style.top = `${posY}px`;

            // Outline follows with slight delay/animation via CSS transition or WAAPI
            cursorOutline.animate({
                left: `${posX}px`,
                top: `${posY}px`
            }, { duration: 500, fill: "forwards" });
        });

        // Interactive Elements Hover Effect
        const interactiveElements = document.querySelectorAll("a, button, .main-logo");

        interactiveElements.forEach(el => {
            el.addEventListener("mouseenter", () => {
                cursorOutline.style.width = "50px";
                cursorOutline.style.height = "50px";
                cursorOutline.style.backgroundColor = "rgba(51, 255, 51, 0.2)"; // Subtle green tint
                cursorOutline.style.borderColor = "transparent";
            });

            el.addEventListener("mouseleave", () => {
                cursorOutline.style.width = "20px";
                cursorOutline.style.height = "20px";
                cursorOutline.style.backgroundColor = "transparent";
                cursorOutline.style.borderColor = "var(--text-color)";
            });
        });
    } else {
        // Hide custom cursor on touch devices and restore default
        cursorDot.style.display = "none";
        cursorOutline.style.display = "none";
        document.body.style.cursor = "auto";
        document.querySelectorAll("*").forEach(el => el.style.cursor = "auto");
    }

    // Entrance Animation (Simple Stagger)
    const elements = [
        document.querySelector(".main-logo"),
        document.querySelector(".banner-section"),
        ...document.querySelectorAll(".link-item"),
        document.querySelector(".footer")
    ];

    elements.forEach((el, index) => {
        if (el) {
            el.style.opacity = "0";
            el.style.transform = "translateY(20px)";
            el.style.transition = "opacity 0.8s ease, transform 0.8s ease";

            setTimeout(() => {
                el.style.opacity = "1";
                el.style.transform = "translateY(0)";
            }, 100 + (index * 150));
        }
    });
});
