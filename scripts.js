// window.onload = function () {
//     window.location.href = '#about';
// };

// document.addEventListener("DOMContentLoaded", function () {
//     const navLinks = document.querySelectorAll('nav a');
//     navLinks.forEach(link => {
//         link.addEventListener('click', function (e) {
//             e.preventDefault();
//             const targetId = this.getAttribute('href');
//             document.querySelector(targetId).scrollIntoView({
//                 behavior: 'smooth'
//             });
//             // 移除所有链接的 active 状态
//             navLinks.forEach(nav => nav.classList.remove('active'));
//             // 给当前点击的链接添加 active 状态
//             this.classList.add('active');
//         });
//     });
// });


document.addEventListener("DOMContentLoaded", function () {
    fetch("header-nav.html")
        .then(response => response.text())
        .then(data => {
            document.getElementById("header-nav").innerHTML = data;
        })
        .catch(error => console.error("Error loading header-nav:", error));
});

document.addEventListener("DOMContentLoaded", function () {
    fetch("footer.html")
        .then(response => response.text())
        .then(data => {
            document.getElementById("footer").innerHTML = data;
        })
        .catch(error => console.error("Error loading header-nav:", error));
});