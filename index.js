// Cursor effect
const cursor = document.querySelector("#cursor");
const cursorBlur = document.querySelector("#cursor-blur");
const hamburger = document.querySelector(".hamburger");
const mobileMenu = document.querySelector(".mobile-menu");

// Only enable cursor effect on desktop
if (window.innerWidth >= 1024) {
    document.addEventListener("mousemove", function(e) {
        cursor.style.left = e.clientX + "px";
        cursor.style.top = e.clientY + "px";
        
        gsap.to(cursorBlur, {
            left: e.clientX - 150 + "px",
            top: e.clientY - 150 + "px",
            duration: 1,
            ease: "power1.out"
        });
    });
}

// Mobile menu toggle
hamburger.addEventListener("click", function() {
    mobileMenu.classList.toggle("active");
    
    // Animate hamburger to X
    const bars = document.querySelectorAll(".bar");
    bars.forEach(bar => {
        bar.classList.toggle("change");
    });
    
    if (mobileMenu.classList.contains("active")) {
        gsap.to(bars[0], {rotation: 45, y: 9, duration: 0.3});
        gsap.to(bars[1], {opacity: 0, duration: 0.3});
        gsap.to(bars[2], {rotation: -45, y: -9, duration: 0.3});
    } else {
        gsap.to(bars[0], {rotation: 0, y: 0, duration: 0.3});
        gsap.to(bars[1], {opacity: 1, duration: 0.3});
        gsap.to(bars[2], {rotation: 0, y: 0, duration: 0.3});
    }
});

// Close mobile menu when clicking on a menu item
const mobileMenuItems = document.querySelectorAll(".mobile-menu .top");
mobileMenuItems.forEach(item => {
    item.addEventListener("click", function() {
        mobileMenu.classList.remove("active");
        
        // Reset hamburger icon
        const bars = document.querySelectorAll(".bar");
        gsap.to(bars[0], {rotation: 0, y: 0, duration: 0.3});
        gsap.to(bars[1], {opacity: 1, duration: 0.3});
        gsap.to(bars[2], {rotation: 0, y: 0, duration: 0.3});
    });
});

// Responsive text animation
const text3 = document.getElementById("text3");
if (window.innerWidth <= 1023) {
    text3.style.animation = "none";
    text3.style.borderRight = "none";
    text3.style.whiteSpace = "normal";
} else {
    text3.style.animation = "typing 4s steps(54), cursor .4s step-end infinite alternate";
    text3.style.borderRight = "5px solid";
    text3.style.whiteSpace = "nowrap";
}

// Update on window resize
window.addEventListener("resize", function() {
    if (window.innerWidth <= 1023) {
        text3.style.animation = "none";
        text3.style.borderRight = "none";
        text3.style.whiteSpace = "normal";
    } else {
        text3.style.animation = "typing 4s steps(54), cursor .4s step-end infinite alternate";
        text3.style.borderRight = "5px solid";
        text3.style.whiteSpace = "nowrap";
    }
    
    // Enable/disable cursor effect based on screen size
    if (window.innerWidth >= 1024) {
        cursor.style.display = "block";
        cursorBlur.style.display = "block";
    } else {
        cursor.style.display = "none";
        cursorBlur.style.display = "none";
    }
});

// Add some animations with GSAP
gsap.from(".text-container", {
    y: 50,
    opacity: 0,
    duration: 1,
    ease: "power3.out"
});

gsap.from(".photo", {
    scale: 0.8,
    opacity: 0,
    duration: 1,
    delay: 0.3,
    ease: "back.out(1.7)"
});

gsap.from("#nav .top", {
    opacity: 0,
    duration: 0.5,
    stagger: 0.1,
    ease: "power1.out"
});

// Button hover effects
const buttons = document.querySelectorAll("#b1, #b2");
buttons.forEach(button => {
    button.addEventListener("mouseenter", function() {
        gsap.to(this, {
            y: -3,
            boxShadow: "0 10px 20px rgba(0, 0, 0, 0.2)",
            duration: 0.3
        });
    });
    
    button.addEventListener("mouseleave", function() {
        gsap.to(this, {
            y: 0,
            boxShadow: "none",
            duration: 0.3
        });
    });
});