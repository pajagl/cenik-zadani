// 3 Ceník

const selectPlan = (planNumber) => {
    let plan1 = document.querySelector("#plan1");

    if(planNumber === 1) {
        plan1.classList.add("plan--selected");
        plan2.classList.remove("plan--selected");
        plan3.classList.remove("plan--selected");
    }

    let plan2 = document.querySelector("#plan2");
    if(planNumber === 2) {
        plan2.classList.add("plan--selected");
        plan1.classList.remove("plan--selected");
        plan3.classList.remove("plan--selected");
    }  

    let plan3 = document.querySelector("#plan3");
    if(planNumber === 3) {
        plan3.classList.add("plan--selected");
        plan1.classList.remove("plan--selected");
        plan2.classList.remove("plan--selected");
    }
}
