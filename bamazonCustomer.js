var mysql = require('mysql');
var inquirer = require('inquirer');


var connection = mysql.createConnection({
    host: "localhost",

    // Your port; if not 3306
    port: 3306,

    // Your username
    user: "root",

    // Your password
    password: "",
    database: "bamazon"
});

connection.connect(function (err) {
    if (err) throw err;
    console.log("connected as id " + connection.threadId);
    showItems();
});

function showItems() {

    connection.query("SELECT * FROM products", function (err, results) {
        if (err) throw err;


        inquirer.prompt([
            {
                name: "choice",
                type: "list",
                choices: function () {
                    var header=("|             Item             |                    Department                  |       Price       |       Quantity");
                    var itemsForSale = [];
                    var display =[];
                    for (var i = 0; i < results.length; i++) {
                        itemsForSale.push(`${results[i].product_name}`);
                        display.push("  "+`${results[i].item_id}`+" "+ `${results[i].product_name}`+"                   "+`${results[i].department_name}`+"                   "+`${results[i].price}`+"                   "+ `${results[i].stock_quantity}`);
                    }
                    console.log(header)
                    console.log(display)
                    return itemsForSale;
                },
                message: "Which items would you like to purchase?"
            },
            {
                name: "quantity",
                type: "input",
                message: "How many would you like to purchase?"
            }
        ]).then(function (answer) {
            var chosenItem;
            for (var i = 0; i < results.length; i++) {
                if (results[i].product_name === answer.choice) {
                    
                    chosenItem = results[i];
                    console.log(chosenItem.stock_quantity)
                }
            }
            // determine if there are enough in stock 
            if (chosenItem.stock_quantity > parseInt(answer.quantity)) {
                // there were enough in stock, so update db
                connection.query(
                    "UPDATE products SET ? WHERE ?",
                    [
                        {
                            stock_quantity: chosenItem.stock_quantity - answer.quantity
                        },
                        {
                            item_id: chosenItem.item_id
                        }
                    ],
                    function (error) {
                        if (error) throw err;
                        console.log("Purchase placed successfully!");
                        showItems();
                    }
                );
            }
            else {
                // not enough in stock
                console.log("Unfortunately we don't have enough of that item in stock at the moment...");
                showItems();
            }
        });
    });
};