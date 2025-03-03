document.getElementById("primary-btn1").addEventListener("click", function () {
    alert("Board Updated Successfully");
    // task assign count
    const assignCount = document.getElementById("task-assign").innerText;
    const convertAssignCount = parseInt(assignCount);
   
        let sum = convertAssignCount - 1;
        document.getElementById("task-assign").innerText = sum;
     
    // activity log history
    let history = document.getElementById("activity-log-history");
    let newHistory = document.createElement("p");
    newHistory.className = "bg-slate-200 p-2 font-medium rounded-lg mt-3";
    newHistory.innerText = `You Complated a Task Add Fix Mobile Button Issue ${new Date().toLocaleTimeString()}`;
    history.appendChild(newHistory);



    
    // task complated count
    let taskComplated = document.getElementById("task-complate-count").innerText;
    let convertTaskComplated = parseInt(taskComplated);

    let total = convertTaskComplated + 1;
    document.getElementById("task-complate-count").innerText = total;

     // Disable btn
     this.textContent = "Completed";
     this.classList.add("bg-gray-300", "text-gray-700");
     this.disabled = true;



})


document.getElementById("primary-btn2").addEventListener("click", function () {
    alert("Board Updated Successfully");
    // task assign count
    const assignCount = document.getElementById("task-assign").innerText;
    const convertAssignCount = parseInt(assignCount);
   
        let sum = convertAssignCount - 1;
        document.getElementById("task-assign").innerText = sum;
     
    // activity log history
    let history = document.getElementById("activity-log-history");
    let newHistory = document.createElement("p");
    newHistory.className = "bg-slate-200 p-2 font-medium rounded-lg mt-3";
    newHistory.innerText = `You Complated a Task Add Dark Mode ${new Date().toLocaleTimeString()}`;
    history.appendChild(newHistory);



    
    // task complated count
    let taskComplated = document.getElementById("task-complate-count").innerText;
    let convertTaskComplated = parseInt(taskComplated);

    let total = convertTaskComplated + 1;
    document.getElementById("task-complate-count").innerText = total;


    
     // Disable btn
     this.textContent = "Completed";
     this.classList.add("bg-gray-300", "text-gray-700");
     this.disabled = true;

})


document.getElementById("primary-btn3").addEventListener("click", function () {
    alert("Board Updated Successfully");
    // task assign count
    const assignCount = document.getElementById("task-assign").innerText;
    const convertAssignCount = parseInt(assignCount);
   
        let sum = convertAssignCount - 1;
        document.getElementById("task-assign").innerText = sum;
     
    // activity log history
    let history = document.getElementById("activity-log-history");
    let newHistory = document.createElement("p");
    newHistory.className = "bg-slate-200 p-2 font-medium rounded-lg mt-3";
    newHistory.innerText = `You Complated a Task Add Optimize Home page  ${new Date().toLocaleTimeString()}`;
    history.appendChild(newHistory);



    
    // task complated count
    let taskComplated = document.getElementById("task-complate-count").innerText;
    let convertTaskComplated = parseInt(taskComplated);

    let total = convertTaskComplated + 1;
    document.getElementById("task-complate-count").innerText = total;



    
     // Disable btn
     this.textContent = "Completed";
     this.classList.add("bg-gray-300", "text-gray-700");
     this.disabled = true;

})


document.getElementById("primary-btn4").addEventListener("click", function () {
    alert("Board Updated Successfully");
    // task assign count
    const assignCount = document.getElementById("task-assign").innerText;
    const convertAssignCount = parseInt(assignCount);
   
        let sum = convertAssignCount - 1;
        document.getElementById("task-assign").innerText = sum;
     
    // activity log history
    let history = document.getElementById("activity-log-history");
    let newHistory = document.createElement("p");
    newHistory.className = "bg-slate-200 p-2 font-medium rounded-lg mt-3";
    newHistory.innerText = `You Complated a Task Add Add new emoji ${new Date().toLocaleTimeString()}`;
    history.appendChild(newHistory);



    
    // task complated count
    let taskComplated = document.getElementById("task-complate-count").innerText;
    let convertTaskComplated = parseInt(taskComplated);

    let total = convertTaskComplated + 1;
    document.getElementById("task-complate-count").innerText = total;



    
     // Disable btn
     this.textContent = "Completed";
     this.classList.add("bg-gray-300", "text-gray-700");
     this.disabled = true;

})


document.getElementById("primary-btn5").addEventListener("click", function () {
    alert("Board Updated Successfully");
    // task assign count
    const assignCount = document.getElementById("task-assign").innerText;
    const convertAssignCount = parseInt(assignCount);
   
        let sum = convertAssignCount - 1;
        document.getElementById("task-assign").innerText = sum;
     
    // activity log history
    let history = document.getElementById("activity-log-history");
    let newHistory = document.createElement("p");
    newHistory.className = "bg-slate-200 p-2 font-medium rounded-lg mt-3";
    newHistory.innerText = `You Complated a Task Add Integrate OpenAI API  ${new Date().toLocaleTimeString()}`;
    history.appendChild(newHistory);



    
    // task complated count
    let taskComplated = document.getElementById("task-complate-count").innerText;
    let convertTaskComplated = parseInt(taskComplated);

    let total = convertTaskComplated + 1;
    document.getElementById("task-complate-count").innerText = total;



    
     // Disable btn
     this.textContent = "Completed";
     this.classList.add("bg-gray-300", "text-gray-700");
     this.disabled = true;

})


document.getElementById("primary-btn6").addEventListener("click", function () {
    alert("Board Updated Successfully");
    // task assign count
    const assignCount = document.getElementById("task-assign").innerText;
    const convertAssignCount = parseInt(assignCount);
   
        let sum = convertAssignCount - 1;
        document.getElementById("task-assign").innerText = sum;
     
    // activity log history
    let history = document.getElementById("activity-log-history");
    let newHistory = document.createElement("p");
    newHistory.className = "bg-slate-200 p-2 font-medium rounded-lg mt-3";
    newHistory.innerText = `You Complated a Task Add Improve Job searching  ${new Date().toLocaleTimeString()}`;
    history.appendChild(newHistory);



    
    // task complated count
    let taskComplated = document.getElementById("task-complate-count").innerText;
    let convertTaskComplated = parseInt(taskComplated);

    let total = convertTaskComplated + 1;
    document.getElementById("task-complate-count").innerText = total;




    
     // Disable btn
     this.textContent = "Completed";
     this.classList.add("bg-gray-300", "text-gray-700");
     this.disabled = true;


     alert("You Have Complated All Task Successfully ")

})



document.getElementById("clear-history-btn").addEventListener("click", function () {
    document.getElementById("activity-log-history").innerHTML = "";
  });
