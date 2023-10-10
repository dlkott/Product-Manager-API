"use strict";

var allProducts = [];
document.addEventListener('DOMContentLoaded', function () {
  document.getElementById('add').addEventListener('click', doAdd);
  document.getElementById('sort').addEventListener('click', function () {
    allProducts.sort();
    displayProducts(allProducts);
  });
  document.getElementById('reverse').addEventListener('click', function () {
    allProducts.reverse();
    displayProducts(allProducts);
  });
  document.getElementById('search').addEventListener('click', doSearch);
});

function doAdd() {
  // Получаем предложение по товару (текст).
  var description = document.getElementById('description').value;

  var email = document.getElementById('email').value; // Получаем e-mail.

  var priceStr = document.getElementById('price').value;
  var price = parseFloat(priceStr).toFixed(2); // Получаем рекомендуем цену товара.

  var salesStr = document.getElementById('sales').value;
  var sales = parseInt(salesStr); // Ежегодный объем продаж.

  var product = description.toUpperCase().big().bold().fontcolor('orange') + "<br/>\n                                Предложение ".concat(email, "<br/>\n                                \u20bd").concat(price, " [прогнозируемый объем ").concat(sales, "]<br/>"); // Добавляем текущую дату/время в строку предмета.

  var ts = new Date();
  var tsStr = "".concat(ts.getDate(), "/").concat(ts.getMonth() + 1, "/").concat(ts.getFullYear(), ",    \n                   ").concat(pad(ts.getHours()), ":").concat(pad(ts.getMinutes()), ":").concat(pad(ts.getSeconds()));
  product += tsStr.fontcolor('blue'); // Добавляем этот продукт в Массив всех продуктов.

  allProducts.push(product); // Повторное отображение всех продуктов.

  displayProducts(allProducts);
}

function displayProducts(products) {
  var targetElement = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'allProductsList';
  var str = '<ul>';

  for (var i in products) {
    str += "<li>".concat(products[i], "</li>");
  }

  str += '</ul>';
  document.getElementById(targetElement).innerHTML = str;
}

function doSearch() {
  // Создаем объект RegExp на основе строки поиска, введенной пользователем.
  var searchString = document.getElementById('searchString').value;
  var re = new RegExp(searchString, 'i'); // Создаем массив, содержащий все продукты, соответствующие строке поиска.

  var matchingProducts = [];

for (var i in allProducts) {
  // Получаем следующий продукт из общего массива.
  var curr = allProducts[i]; // Если он совпадает со строкой поиска, добавляем его в массив совпадений.

  if (re.test(curr)) {
    matchingProducts.push(curr);
  }
} // Отображаем массив подходящих предложений по продукту.


  displayProducts(matchingProducts, 'matchingProductsList');
}

function pad(n) {
  return n < 10 ? "0".concat(n) : n;
}
//# sourceMappingURL=script.js.map
