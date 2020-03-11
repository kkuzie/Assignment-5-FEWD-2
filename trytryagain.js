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

let inventory = [
    [123, 'collar', 1, 5.99],
    [456, 'leash', 2, 6.99], 
    [789, 'bowl', 4, 3.99], 
    [321, 'toy', 6, 1.99],
    [654, 'bone', 8, 2.99]
];

   
let product;
let products;

function view(products) { //products is array inventory
    for (product of products) {
        console.log(product[0] + " " + product[1] + " (" + product[2] + ") $" + product[3]);
    }
}
let i;
let index;

function update(inventory, sku)
{
    sku = parseInt(window.prompt('enter sku number of product you would like to update'));
    for (i = 0; i < inventory.length; i++) 
    {
    //i < inventory.length - which refers to 5 (indexes 0,1,2,3,4)
                // console.log(inventory[i]);
                //returns nested array lists

                // console.log(sku);
                //returns 123

        index = inventory[i].indexOf(sku); 
                // console.log(inventory[i]);
                //returns nested array lists

                // console.log(index); 
                //returns -1

                // console.log(sku);
                //returns 123

                // console.log(inventory[i].indexOf(sku));
                //returns -1

        if (index > -1) 
        { 
            products = i; 
            product = index; 
        }
    }
    let qty = parseInt(window.prompt('how many would you like?'));
    inventory[products][product + 2] = qty;
}




function main () 
{
    let inventory = [['123', 'collar', 1, 5.99],['456', 'leash', 2, 6.99], ['789', 'bowl', 4, 3.99], ['321', 'toy', 6, 1.99],['654', 'bone', 8, 2.99]];

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



//****************************** */

