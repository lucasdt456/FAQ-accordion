const allDetails = document.querySelectorAll("details");

allDetails[0].open = true;
allDetails[0].querySelector("summary img").src = "./assets/images/icon-minus.svg";

allDetails.forEach((detail) => {
    
    const summary = detail.querySelector("summary");
  
    summary.addEventListener("click", (e) => {
        e.preventDefault();
        
        allDetails.forEach((d) =>  {
            if (d !== detail) {
                d.open = false;
                d.querySelector("summary img").src = "./assets/images/icon-plus.svg"; 
            }
        })

        if (!detail.open) {
            detail.open = true;
            detail.querySelector("summary img").src = "./assets/images/icon-minus.svg";
        } else {
            detail.open = false;
            detail.querySelector("summary img").src = "./assets/images/icon-plus.svg";
        }
    });
});

