const disabledKeys = ["u", "I"];

// const showAlert = (e) => {
//   e.preventDefault();
//   return alert("Sorry, you can't view or copy source codes this way!");
// };

// document.addEventListener("contextmenu", (e) => {
//   showAlert(e);
// });

// document.addEventListener("keydown", (e) => {
//   if ((e.ctrlKey && disabledKeys.includes(e.key)) || e.key === "F12") {
//     showAlert(e);
//   }
// });

// const executeCodes = () => {
//     const stickyBtmAd = document.querySelector(".sticky-bottom-ad");
//     if (!stickyBtmAd) return;

//     const arrowDown = stickyBtmAd.querySelector(".arrow-icon");
//     const googleAdsTag = document.querySelector("ins.adsbygoogle");

//     setTimeout(() => {
//         const adStatus = googleAdsTag?.getAttribute("data-ad-status");
//         if (!stickyBtmAd.classList.contains("hide") && adStatus !== "unfilled") {
//             stickyBtmAd.classList.add("show");
//         }
//     }, 1500);

//     arrowDown.addEventListener("click", () => {
//         stickyBtmAd.classList.toggle("hide");
//         const arrowIcon = stickyBtmAd.querySelector(".arrow-icon img");
//         setTimeout(() => {
//             if (stickyBtmAd.classList.contains("hide")) {
//                 return arrowIcon.src = "icons/arrow-up.svg";
//             }
//             return arrowIcon.src = "icons/arrow-down.svg";
//         }, 300);
//     });
// }

// window.addEventListener("load", executeCodes);
