var API_URL = "http://192.168.2.38:2015/api/account/profile";

function callAPI() {
    fetch(API_URL)
      .then((response) => response.json())
      .then((data) => {
        var table = document.getElementById("apiResponse");
  
        // Xóa các hàng hiện tại
        while (table.rows.length > 1) {
          table.deleteRow(1);
        }
  
        // Thêm hàng mới
        data.forEach((item) => {
          var row = table.insertRow(-1);
          var cell1 = row.insertCell(0);
          var cell2 = row.insertCell(1);
          cell1.innerHTML = item.id;
          cell2.innerHTML = item.name;
        });
      })
      .catch((error) => {
        document.getElementById("apiResponse").innerHTML = error.toString();
      });
  }
  