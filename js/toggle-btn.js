document.getElementById("primary-btn1").addEventListener("click", function () {
    alert("Board Updated Seccessfully");
    // task assign count
    const assignCount = document.getElementById("task-assign").innerText;
    const convertAssignCount = parseInt(assignCount);
   
        let sum = convertAssignCount - 1;
        document.getElementById("task-assign").innerText = sum;
     
    // activity log history
    let history = getElementById("activity-log-history");
    let newHistory = document.createElement("p");
    newHistory.className = "bg-slate-200 p-2 font-medium";
    newHistory.innerText = `You Complated a Task Add ${new Date(). toLocaleTimeString()}`;
    history.appendChild(newHistory);



    
    // task complated count
    let taskComplated = getElementById("task-complate-count").innerText;
    let convertTaskComplated = parseInt(taskComplated);

    let total = convertTaskComplated + 1;
    document.getElementById("task-complate-count").innerText = total;



})


// document.getElementById("primary-btn1").addEventListener("click", function () {
  
//     // task complated count
//     for{}
// })