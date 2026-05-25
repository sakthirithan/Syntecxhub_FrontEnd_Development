const accordionContent = document.querySelectorAll(".accordion-content");

const styles = [
    {
        backgroundColor: "#fff7f0",
        borderColor: "#ffd6b3"
    },
    {
        backgroundColor: "#f0faff",
        borderColor: "#cceeff"
    },
    {
        backgroundColor: "#fff0f3",
        borderColor: "#ffccd6"
    },
    {
        backgroundColor: "#f0f0ff",
        borderColor: "#ccccff"
    }
];

accordionContent.forEach((item, index) => {
    let header = item.querySelector("header");

    item.style.backgroundColor = styles[index].backgroundColor;
    item.style.borderColor = styles[index].borderColor;

    header.addEventListener("click", () =>{
        item.classList.toggle("open");

        let description = item.querySelector(".description");

        if(item.classList.contains("open")) {
            description.style.height = `${description.scrollHeight}px`;
            item.querySelector("i").classList.replace("fa-plus", "fa-minus");
        } else {
            description.style.height = "0px";
            item.querySelector("i").classList.replace("fa-minus", "fa-plus");
        };

        removeOpen(index);
    });
});

function removeOpen(index1) {
    accordionContent.forEach((item2, i) => {
        if(index1 != i){
            item2.classList.remove("open");

            let des = item2.querySelector(".description");
            des.style.height = "0px";
            item2.querySelector("i").classList.replace("fa-minus", "fa-plus");
        };
    });
};
