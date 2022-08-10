// Simple POS System -JQ task
// Submitted by ROBIN @ m6

// Next id for adding a new Product
var nextId = 1;
// ID of Product currently editing
var activeId = 0;
let tot = 0;
function productDisplay(ctl) {
  var row = $(ctl).parents("tr");
  var cols = row.children("td");

  activeId = $($(cols[0]).children("button")[0]).data("id");
  $("#productname").val($(cols[1]).text());
  $("#quantity").val($(cols[2]).text());
  $("#price").val($(cols[3]).text());

  // Change Update Button Text
  $("#updateButton").text("Update");
}

function productUpdate() {
  if ($("#updateButton").text() == "Update") {
    productUpdateInTable(activeId);
  } else {
    productAddToTable();
  }

  // Clear form fields
  formClear();

  // Focus to product name field
  $("#productname").focus();
}
var invprice = {};
// Add product to <table>
function productAddToTable() {
  // First check if a <tbody> tag exists, add one if not
  if ($("#productTable tbody").length == 0) {
    $("#productTable").append("<tbody></tbody>");
  }

  // Append product to table
  $("#productTable tbody").append(productBuildTableRow(nextId));
  //append products to invoice
  var option = new Option($("#productname").val(), $("#price").val());
  $(option).attr("name", $("#productname").val());
  $("#products").append(option);
  // var p = $(cols[3]).text();
  // console.log(p);
  // Increment next ID to use
  nextId += 1;
}

// Update product in <table>
function productUpdateInTable(id) {
  // Find Product in <table>
  var row = $("#productTable button[data-id='" + id + "']").parents("tr")[0];

  // Add changed product to table
  $(row).after(productBuildTableRow(id));
  // Remove original product
  $(row).remove();

  // Clear form fields
  formClear();

  // Change Update Button Text
  $("#updateButton").text("Add");
}

// Build a <table> row of Product data
function productBuildTableRow(id) {
  // console.log($("product entered", "#products").val());
  // console.log($("price entered", "#price").val());
  var list = [];
  var dict = {};

  //   if("list".length!=0) {
  // list.push($("#productname").val());
  //   }
  //   else {
  //     "list".append($("#productname").val());
  //   }

  //   console.log(list);
  var dict = {};
  // for(var i = 0; i < 5; i++)
  // {
  dict[$("#productname").val()] = $("#price").val();
  // }

  //   if(i !=0){
  //     dict[$("#productname").val()] = $("#price").val();}

  // }

  console.log(dict);

  var ret =
    "<tr>" +
    "<td>" +
    "<button type='button' " +
    "onclick='productDisplay(this);' " +
    "class='btn btn-default' " +
    "data-id='" +
    id +
    "'>" +
    "<span class='glyphicon glyphicon-edit' />" +
    "</button>" +
    "</td>" +
    "<td>" +
    $("#productname").val() +
    "</td>" +
    "<td>" +
    $("#quantity").val() +
    "</td>" +
    "<td>" +
    $("#price").val() +
    "</td>" +
    "<td>" +
    "<button type='button' " +
    "onclick='productDelete(this);' " +
    "class='btn btn-default' " +
    "data-id='" +
    id +
    "'>" +
    "<span class='glyphicon glyphicon-remove' />" +
    "</button>" +
    "</td>" +
    "</tr>";

  return ret;
}

// Delete product from <table>
function productDelete(ctl) {
  $(ctl).parents("tr").remove();
}

// Clear form fields
function formClear() {
  $("#productname").val("getprice();");
  $("#quantity").val("");
  $("#price").val("");
}

//   customer
// Next id for adding a new Customer
var nextCid = 1;
// ID of Customer currently editing
var activeCId = 0;

function customerDisplay(ctl) {
  var row = $(ctl).parents("tr");
  var cols = row.children("td");

  activeCId = $($(cols[0]).children("button")[0]).data("id");
  $("#customername").val($(cols[1]).text());
  $("#email").val($(cols[2]).text());
  $("#phone").val($(cols[3]).text());

  // Change Update Button Text
  $("#updateCButton").text("Update");
}

function customerUpdate() {
  if ($("#updateCButton").text() == "Update") {
    customerUpdateInTable(activeCId);
  } else {
    customerAddToTable();
  }

  // Clear form fields
  formClear();

  // Focus to customer name field
  $("#customername").focus();
}

// Add customer to <table>
function customerAddToTable() {
  // First check if a <tbody> tag exists, add one if not
  if ($("#customerTable tbody").length == 0) {
    $("#customerTable").append("<tbody></tbody>");
  }

  // Append customer to table
  $("#customerTable tbody").append(customerBuildTableRow(nextCid));

  $("#names").append(new Option($("#customername").val()));
  // Increment next ID to use
  nextCid += 1;
}

// Update customer in <table>
function customerUpdateInTable(id) {
  // Find Customer in <table>
  var row = $("#customerTable button[data-id='" + id + "']").parents("tr")[0];

  // Add changed customer to table
  $(row).after(customerBuildTableRow(id));
  // Remove original customer
  $(row).remove();

  // Clear form fields
  formClear();

  // Change Update Button Text
  $("#updateCButton").text("Add");
}

// Build a <table> row of Customer data
function customerBuildTableRow(id) {
  var ret =
    "<tr>" +
    "<td>" +
    "<button type='button' " +
    "onclick='customerDisplay(this);' " +
    "class='btn btn-default' " +
    "data-id='" +
    id +
    "'>" +
    "<span class='glyphicon glyphicon-edit' />" +
    "</button>" +
    "</td>" +
    "<td>" +
    $("#customername").val() +
    "</td>" +
    "<td>" +
    $("#email").val() +
    " nos." +
    "</td>" +
    "<td>" +
    $("#phone").val() +
    "</td>" +
    "<td>" +
    "<button type='button' " +
    "onclick='customerDelete(this);' " +
    "class='btn btn-default' " +
    "data-id='" +
    id +
    "'>" +
    "<span class='glyphicon glyphicon-remove' />" +
    "</button>" +
    "</td>" +
    "</tr>";

  return ret;
}

// function getprice(id) {
//   var row = $("#productTable button[data-id='" + id + "']").parents("tr")[0];
//   console.log(row);
// }
// getprice();

// Delete customer from <table>
function customerDelete(ctl) {
  $(ctl).parents("tr").remove();
}

// Clear form fields
function formClear() {
  $("#customername").val("");
  $("#email").val("");
  $("#phone").val("");
}

// $("#invQ").onchange(function (pr) {
//   console.log("set");
//   $("#invT").val(tot);

//   alert(tot);
// });

// getprice(id);
// function getprice(id) {
//    var row = $("#productTable button[data-id='" + id + "']").parents("tr")[0];
//    console.log(row);

//  Invoice
// Next id for adding a new Invoice
var nextIid = 1;
// ID of Invoice currently editing
var activeIid = 0;

function invoiceDisplay(ctl) {
  var row = $(ctl).parents("tr");
  var cols = row.children("td");

  activeIid = $($(cols[0]).children("button")[0]).data("id");
  $("#customername").val($(cols[1]).text());
  console.log("#customername");
  $("#email").val($(cols[2]).text());
  $("#phone").val($(cols[3]).text());

  // Change Update Button Text
  $("#updateIButton").text("Update");
}

function invoiceUpdate() {
  if ($("#updateIButton").text() == "Update") {
    invoiceUpdateInTable(activeIid);
  } else {
    invoiceAddToTable();
  }

  // Clear form fields
  formClear();

  // Focus to customer name field
  $("#customername").focus();
}

// Add customer to <table>
function invoiceAddToTable() {
  // First check if a <tbody> tag exists, add one if not
  if ($("#invoiceTable tbody").length == 0) {
    $("#invoiceTable").append("<tbody></tbody>");
  }

  // Append customer to table
  $("#invoiceTable tbody").append(invoiceBuildTableRow(nextIid));
  $("#products").text("");
  // $("#names").append(new Option($("#customername").val()));
  // Increment next ID to use
  nextIid += 1;
  var totb = $("#invoiceTable tr td:nth-child(4)");
  var totc = 0;
  for (var i = 0; i < totb.length; i++) {
    totc += parseInt(totb[i].innerHTML);
  }

  $("#totBox").val(totc);
}

// Update customer in <table>
function invoiceUpdateInTable(id) {
  // Find Customer in <table>
  var row = $("#invoiceTable button[data-id='" + id + "']").parents("tr")[0];

  // Add changed customer to table
  $(row).after(invoiceBuildTableRow(id));
  // Remove original customer
  $(row).remove();

  // Clear form fields
  formClear();

  // Change Update Button Text
  $("#updateIButton").text("Add");
}

function getval(sel) {
  console.log("getval");
  pdt = $("#products").find(":selected").text();
  // $("#invQ").val("");
  pr = sel.value;
  console.log(pdt);

  console.log("product value", pr);
  // console.log("quantity", qty);

  getq(pr);
  // return(pdt,pr);
}

function getq(q) {
  // console.log(q.parent().parent().attr('id'));
  // console.log($(q).parent().parent().attr('id'));
  var opt = $("option[name='" + $(q).parent().parent().attr("id") + "']");
  // console.log(,"tctyrfcyc");
  let qty = q.value;
  tot = parseInt(opt.val()) * parseInt(qty);
  // $("#invT").val(tot);
  console.log($("#products").val());

  // $(".id tr td:nth-child(4)").html(tot);
  $(
    "#invoiceTable tr#" + $(q).parent().parent().attr("id") + " td:nth-child(4)"
  ).html(tot);
  var totb = $("#invoiceTable tr td:nth-child(4)");
  var totc = 0;
  for (var i = 0; i < totb.length; i++) {
    console.log(totb[i]);
    totc += parseInt(totb[i].innerHTML);
  }

  $("#totBox").val(totc);
  // $("#invT").val()
  // return tot;
}
// console.log(tot, "is now");

// Build a <table> row of Customer data
function invoiceBuildTableRow(id) {
  // console.log($("#invoiceTable tr#"+$("#products").find(":selected").text() +"").length);
  // let int a = $("#products").val() * qty;
  if (
    $("#invoiceTable tr#" + $("#products").find(":selected").text()).length > 0
  )
    return;
  var ret =
    "<tr id=" +
    $("#products").find(":selected").text() +
    ">" +
    "<td>" +
    $("#products").find(":selected").text() +
    "</td>" +
    "<td>" +
    "<input type='number' id='invQ' value='1' min='1' onclick='getq(this);'>" +
    "</td>" +
    "<td>" +
    $("#products").val() +
    "</td>" +
    "<td>" +
    $("#products").val() +
    "</td>" +
    "<td>" +
    "<center><button type='button' " +
    "onclick='invoiceDelete(this);' " +
    "class='btn btn-default' " +
    "data-id='" +
    id +
    "'>" +
    "<span class='glyphicon glyphicon-remove' />" +
    "</button></center>";
  +"</td>" + "</tr>";

  return ret;
}

// function getprice(id) {
//   var row = $("#productTable button[data-id='" + id + "']").parents("tr")[0];
//   console.log(row);
// }
// getprice();

// Delete customer from <table>
function invoiceDelete(ctl) {
  $(ctl).parents("tr").remove();
}

// Clear form fields
function formClear() {
  $("#productname").val("");
  $("#email").val("");
  $("#phone").val("");
}

let pr = 0;

// function getval(sel) {
//   console.log("getval");
//   pdt = $("#products").find(":selected").text();
//   // $("#invQ").val("");
//   pr = sel.value;
//   console.log(pdt);

//   console.log("product value", pr);
//   // console.log("quantity", qty);

//   getq(pr);
//   // return(pdt,pr);
// }

function total(pdt) {
  console.log("yes", pr);
  console.log("yes", pdt);
}

// function getq(q) {
//   console.log("Quantity on");
//   let qty = q.value;
//   // let qty = $("#invQ").find(":selected").value();
//   console.log("product :", $("#products").val());
//   console.log("quantity:", qty);
//   let tot = $("#products").val() * qty;
//   // $("#invT").val(tot);
//   alert(qty);
//   return qty;
//   // console.log(pr);
// }

function addInvoice() {
  if ($("#invoiceTable tbody").length == 0) {
    $("#invoiceTable").append("<tbody></tbody>");
  }

  // Append customer to table
  $("#invoiceTable tbody").append(invoiceBuildTableRow(nextIid));
  var totb = $("#invoiceTable tr td:nth-child(4)");
  var totc = 0;
  for (var i = 0; i < totb.length; i++) {
    console.log(totb[i]);
    totc += parseInt(totb[i].innerHTML);
  }

  $("#totBox").val(totc);
}
