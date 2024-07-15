let title = document.getElementById("title");
let description = document.getElementById("description");
let form = document.querySelector("form");
let container = document.querySelector(".container");

   
const tasks =  localStorage.getItem("task")
    ? JSON.parse(localStorage.getItem("task"))
    : [];
    showALLTasks();

function showALLTasks() {
    tasks.forEach((value,index) => {
        let div = document.createElement("div")
        div.setAttribute("class", "task")
        let innerDiv = document.createElement("div");
        div.append(innerDiv)
        let p = document.createElement("p");
        p.innerText = value.title;
        innerDiv.append(p);
        let span= document.createElement("span");
        span.innerText = value.description;
        innerDiv.append(span);

        let btn= document.createElement("button");
        btn.setAttribute("class", "deleteBtn");
                btn.innerText = "-";

                //to remove the written words
                btn.addEventListener("click", () => {
                    removeTasks();  
                    tasks.splice(index, 1);
    localStorage.setItem("task",JSON.stringify(tasks))

                    showALLTasks();
                });

                div.append(btn);
                container.append(div);
    })
}
function removeTasks() {
    tasks.forEach((value)=> {
        let div = document.querySelector(".task");
        div.remove();
    });
}
form.addEventListener("submit",(e) => {
    e.preventDefault();             // prevent data loss
    removeTasks();
    tasks.push({
        //this title.value help to write the words in console
        title: title.value,
        description: description.value,
    });
    localStorage.setItem("task",JSON.stringify(tasks))
    showALLTasks();
    // console.log(tasks);
});
