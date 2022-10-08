var data = [];
function show() {
  var id = Number(document.getElementById("txt1").value);
  var n = document.getElementById("txt2").value;
  var r = Number(document.getElementById("txt3").value);
  var q = Number(document.getElementById("txt4").value);
  var stock = Number(document.getElementById("txt5").value);

  var t = r * q;

  var result = "";
  if (stock > 5000) {
    result = "Not Available";
  } else {
    result = "Available";
  }

  var store = {
    Prdouct_Id: id,
    Product_Name: n,
    Product_Rate: r,
    Product_Quality: q,
    Total_Amount: t,
    stock: result,
  };
  data.push(store);

  display();
  cleardata();
}

function display() {
  var data1 = "";
  for (i = 0; i < data.length; i++) {
    data1 +=
      "<tr><td>" +
      data[i].Prdouct_Id +
      "</td><td>" +
      data[i].Product_Name +
      "</td><td>" +
      data[i].Product_Rate +
      "</td><td>" +
      data[i].Product_Quality +
      "</td><td>" +
      data[i].Total_Amount +
      "</td><td>" +
      data[i].stock +
      "</td></tr>";
  }
  document.getElementById("tbldata").innerHTML = data1;
}

function cleardata() {
  document.getElementById("txt1").value = "";
  document.getElementById("txt2").value = "";
  document.getElementById("txt3").value = "";
  document.getElementById("txt4").value = "";
}
