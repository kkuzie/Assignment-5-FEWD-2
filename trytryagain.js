// The Product Inventory Management System (30 points)
// In this part of the assignment you will use multi-dimensional arrays to build a small inventory management system. Here are the specifics:
// The primary array will be “inventory”.
// The nested arrays (products) will each contain elements that represent sku (number), product (string), quantity (number), and cost (floating point number).
// You should have at least 5 products in your inventory.
// Similar to lab 9, your application should display a title in the console window along with a command menu that features commands to view all products, update stock, and exit the program. 
// When the user select view, rather than displaying each product in a numeric list like you did in lab 9, you should display the details for each product, ordered by sku number. Here’s an example of what the user should see if they choose the view command:2233 Hat (12) $14.993223 Socks (36) $9.994824 Shirt (10) $15.996343 Jeans (22) $39.999382 Jacket (5) $49.99
// If the user selects the update command, a prompt should appear that allows the user to enter a sku number. Once the user enters a correct sku number a second prompt should appear that allows the user to enter a new stock quantity. The quantity should then update the product of the sku number entered.
// If the user selects the exit command, the program should be terminated.
// All data should be persisted using Web Storage. If the user closes the browser and then reopens it, all of the data should be retained from the previous session.
// Make sure to validate all inputs. If the user enters a command that’s not valid, the application should be able to handle that. Similarly, if the user enters a bad sku number, or text instead of a number when updating stock, the application should be able to handle that too.


// Similar to lab 9, your application should display a title in the console window along with a command menu that features commands to view all products, update stock, and exit the program. 
function displayMenu() 
{
window.console.log("Kuzi Zoo Critter Store");
window.console.log('');
window.console.log('MENU');
window.console.log('view - show all products');
window.console.log('update - update stock');
window.console.log('exit - leave the store');
window.console.log('');
}


let product;
let products;
function view(products) { //products is array inventory
    for (product of products) {
        console.log(product[0] + " " + product[1] + " (" + product[2] + ") $" + product[3]);
    }
}


function update(inventory)
{
    let i;
    let index = -1;

    let sku = parseInt(window.prompt('enter sku number of product you would like to update'));
    for (i = 0; i < inventory.length; i++) 
    {
        if (inventory[i][0] == sku)
            index = i;
    }
        if (index > -1) 
        { 
            let qty = parseInt(window.prompt('new inventory amount?'));
            //to verify input is a number:
            if (isNaN(qty)) 
            {
                window.prompt('that ain\'t a number, thickie!')
            }
            else
            {
                inventory[index][2] = qty;
                localStorage.invList = inventory.join('|'); //this converts inventory array to a string
                // console.log(localStorage.invList);//shows the new inventory as a string
                view(inventory);
            }
        }
}
// let qty = parseInt(window.prompt('new inventory amount?'));
// // TODO: validate input: no text, no negatives
// inventory[index][2] = qty;
// view(inventory);
// }
// }
function getInventory()
{
    let storage;
    let inventory;
    storage = localStorage.getItem('invList') || ''; 
        if (storage.length > 0)
        {
            inventory = storage.split('|');//looks for | and reverses the join so makes it back to array
            for (i in inventory) 
            {
                inventory[i] = inventory[i].split(',');//converted the nested strings back into 5 arrays
            }
            for (i in inventory)
            {
                inventory[i][0] = Number(inventory[i][0]);//converts strings with numbers into Number not a String
                inventory[i][2] = Number(inventory[i][2]);
                inventory[i][3] = Number(inventory[i][3]);
            }
            console.log(inventory);
        } 
        else
        {
            inventory = [
            [123, 'collar', 1, 5.99],
            [456, 'leash', 2, 6.99], 
            [789, 'bowl', 4, 3.99], 
            [321, 'toy', 6, 1.99],
            [654, 'bone', 8, 2.99]
            ];
        }
    return inventory;
}

function main () 
{
    let inventory = getInventory();
    let command;

    displayMenu();

    while (true) 
    {
        command = window.prompt("enter valid command");
        if (command !== null) 
        {
            if (command === 'view') 
            {
                view(inventory);
            } 
            else if (command === 'update') 
            {
                update(inventory);
            }
            else if (command === 'exit')
            {
                break;
            }
            else
            {
                window.alert('that is not a valid command');
            }
        } 
        else
        {
            break;
        }
    }
}
main();

//localstorage

// localStorage.setItem('invList', inventory);
// localStorage.setItem('inventoryList', JSON.stringify(inventory));
// const qtyValue = localStorage.getItem('inventoryList');
// if (qtyValue == JSON.parse(qtyValue)) {
//     console.log(qtyValue);
// }

// window.onLoad = function() {
//     const localStorage = window.localStorage;

//     for (let s = 0; s < localStorage.length; s++) {
//         const key = localStorage.key(i);
//         const value = localStorage.getItem(key);
//     }
// }

// function localStore() {
//     window.localStorage.setItem('dataStore', JSON.stringify(inventory));
// }

// function localGet() 
// {
//     return JSON.parse(window.localStorage.getItem('dataStore'));
// }
// let run = true;

// window.addEventListener('load', () => 
// {
//     let storage, command;

//     displayMenu();
//     storage = localGet();

//     if (storage.length === 0) 
//     {
//         localStore();
//     } else 
//     {
//         console.log("heere you are")
//     }
// })
