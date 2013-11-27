/*
    Classes 00. Product Inventory Project - Create an application which manages an inventory of products. Create a product class which has a price, id, and quantity on hand.
    Then create an inventory class which keeps track of various products and can sum up the inventory value. 
*/

(function () {
    "use strict";
}());

function Product(id, name, price, quantity) {
    this.id = id;
    this.name = name;
    this.price = price;
    this.quantity = quantity;
}

Product.prototype = {
    add : function (count) {
        this.quantity = !count ? this.quantity++ : this.quantity + count;
    },

    remove : function (count) {
        this.quantity = !count ? this.quantity-- : this.quantity - count >= 0 ? this.quantity - count : 0;
    },

    setPrice : function (value) {
        this.price = value;
    },

    toString : function () {
        return this.name;
    }
};

function Inventary() {
    this.items = arguments !== undefined ? Array.prototype.slice.call(arguments) : [];
}

Inventary.prototype = {
    add : function (item) {
        this.items.push(item);
    },

    remove : function (item) {
        var index = this.items.indexOf(item);

        if (index > -1) {
            this.items.splice(index, 1);
        }
    },

    getTotalPrice : function () {
        var totalPrice = 0;

        return (function (items) {
            items.map(function (item) {
                totalPrice += item.price;
            });

            return totalPrice;
        }(this.items));
    }
};

var peaches = new Product(0, "peaches", 5, 5000);
var carrots = new Product(1, "carrots", 2, 10000);
var bananas = new Product(2, "bananas", 6, 3000);

var inventary = new Inventary(peaches, carrots, bananas);
inventary.getTotalPrice();