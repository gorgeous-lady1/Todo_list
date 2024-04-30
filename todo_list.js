import inquirer from "inquirer";
let todo_list = [];
let while_condition = true;
while (while_condition === true) {
    //.............................options....................
    let option = await inquirer.prompt([{
            type: 'list',
            name: "user_options",
            message: 'select an option',
            choices: ["Add", "remove"]
        }]);
    //.............................Add....................
    if (option.user_options === "Add") {
        let ans = await inquirer.prompt([{
                type: 'input',
                name: 'usr_ans',
                message: 'write something to add in the task list.'
            }]);
        if (ans.usr_ans !== '') {
            todo_list.push(ans.usr_ans);
            console.log(todo_list);
        }
        else {
            console.log('please write somthing to add in the todo_list');
        }
    }
    //............... Remove............
    else if (option.user_options === "remove") {
        let removechoice = await inquirer.prompt([{
                type: 'list',
                name: 'remove_item',
                message: 'select item to remove',
                choices: todo_list
            }]);
        let index_to_remove = todo_list.indexOf(removechoice.remove_item);
        if (index_to_remove >= 0) {
            todo_list.splice(index_to_remove, 1);
            console.log('you removed : ', removechoice.remove_item);
            console.log(todo_list);
        }
    }
    //............... confirmation............
    let usr_ans = await inquirer.prompt([{
            type: 'confirm',
            name: 'selection',
            message: 'Do you want to continue?',
            default: true
        }]);
    if (usr_ans.selection === false) {
        while_condition = false;
    }
}
console.log('Thankyou for using To do list');
