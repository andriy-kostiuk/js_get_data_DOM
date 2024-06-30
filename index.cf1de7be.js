var t=document.querySelectorAll(".population"),e=document.querySelector(".total-population"),o=document.querySelector(".average-population"),n=0;t.forEach(function(t){n+=+t.textContent.split(",").join("")}),e.textContent=n.toLocaleString("en-US"),o.textContent=(n/t.length).toLocaleString("en-US");
//# sourceMappingURL=index.cf1de7be.js.map
