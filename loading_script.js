AOS.init();
let intro = document.getElementById("intro");
let body = document.getElementsByTagName("body")[0];
let intro_wrapper = document.getElementById("intro_wrapper");
let blink_content = document.getElementById("blink_content");
let starting_icons = Array.from(document.getElementsByClassName("starting-icons"));
window.addEventListener("load", async(e) => {
    await setTimeout(() => {
        intro.className = "intro intro-animate-class";
        setTimeout(() => {
            intro.style.transition = "all 1s linear";
            intro.className = "intro intro-ending";
            setTimeout(() => {
                let span_position = blink_content.getBoundingClientRect()
                console.log(span_position);
                intro_wrapper.style.left = `${span_position.left}px`;
                intro_wrapper.style.top = `${span_position.top + 20}px`;
                let cover_website = document.getElementById("cover-website");
                cover_website.className = "uncover";
                starting_icons.forEach(icon => {
                    icon.style.opacity = "1";
                });
                setTimeout(() => {cover_website.style.display = "none";
            body.style.overflow="scroll";}, 280);
            }, 1200);
        }, 1800);
    }, 800);
}) ;