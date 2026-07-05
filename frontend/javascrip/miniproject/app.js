/*
list=to show all todos 
add=to add a todo
delete=to delete a task
quit=to exit the todo
*/
console.log("list ready");
msg="go";
let list = [];
while (true) {

    // let list = ["Wake up 6.0 AM", "Drink Water", "Go Fo walk/gym", "fresh", "Start Coding", "Lunch", "Playgames"];

    let a = prompt("Todo enter promt 1) list = to show add=to add a todo 3)delete=to delete a task 4)quit=to exit the todo").trim();
    if (a == "list") {
        let j = 1;
        console.log("---------------");
        for (i of list) {
            console.log(`${j}) = ${i} `);
            j++;
        }
        console.log("---------------");

    }
    else if (a == "add") {
        let add = prompt("Enter To add task");
        list.push(add);
        console.log("Task added");
        // let j = 1;
        // for (i of list) {
        //     console.log(`${j}) = ${i} `);
        //     j++;
        // }


    }
    else if (a == "delete") {
        let num =Number(prompt ("Enter task number to delete"));
        list.splice(num-1, 1);
        console.log("Task deletedd");



    }
    else if (a == "quit") {
        break;

    }
    else {
        console.log("Incoorect");
    }
}