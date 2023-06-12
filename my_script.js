var str1 = "Нийт хийх ажлын тоо = ";
var str2 = "Хийсэн ажлын тоо = ";
const table_arr = [
    {
        "name": "Ажил",
        "description": "Тайлбар",
        "time": "Дуусах хугацаа",
        
    }
]
function check(str) {
    if(str == "time") {
        var str1 = document.getElementById(str).value;
        // console.log("aaa ", str1);
        const regex = new RegExp(/^\d{4}[\s.-]\d{1,2}[\s.-]\d{1,2}$/);
        return regex.test(str1);
        // console.log("+++++++", regex.test(str1));
    } else {
        str1 = document.getElementById(str).value;
        if(str1.length == 0) {
            return false;
        }
    }
    return true;
}
function add(){
    var table = document.getElementById("my_table");

    if(check("work") == true && check("description") == true && check("time") == true) {
        var row = table.insertRow(table.rows.length);

        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        var cell3 = row.insertCell(2);
        var cell4 = row.insertCell(3);
        var cell5 = row.insertCell(4);

        cell1.innerHTML = table.rows.length-1;
        cell2.innerHTML = document.getElementById("work").value;
        cell3.innerHTML = document.getElementById("description").value;
        cell4.innerHTML = document.getElementById("time").value;
        // cell5.innerHTML ='<input type="checkbox" class="done" onclick="done()" name="done"/>' + 
        // '<label for="done">done</label><br/>'+
        // '<input type="checkbox" class="del" onclick="del()" name="del"/>' + 
        // '<label for="del">delete</label><br/>' +
        // '<button type="button" class="edit" onclick="edit()">edit</button>';
        cell5.innerHTML = '<button type="button" class="done" onclick="done()">done</button><br/>' + 
        '<button type="button" class="del" onclick="del()">delete</button><br/>' + 
        '<button type="button" class="edit" onclick="edit()">edit</button>'
    
        document.getElementById("count_row").innerHTML = str1 + (table.rows.length-1); 
        document.getElementById("del_all").style.display = "inline";
        // document.getElementById("work").value = "";
        // document.getElementById("description").value = "";
        // document.getElementById("time").value = "";
    } else {
        alert("Та жагсаалтанд нэмэх ажлаа зөв оруулна уу.");
    }
}

// function del() {
//     var table = document.getElementById("my_table");
//     const btn_del = document.querySelectorAll(".del");
//     const btn_done = document.querySelectorAll(".done");
//     var count_check = 0;
//     for (var i = 0; i < btn_del.length; i++) {
//         // if (btn_done[i].checked == true) {
//         //     if(btn_del[i].checked == true) table.deleteRow(i+1);
//         //     else count_check++;
//         // } else {
//         //     if(btn_del[i].checked == true) table.deleteRow(i+1);
//         // }
//         // btn_del[i].addEventListener("click", () => {
//         //     table.deleteRow(i+1)});
//         table.deleteRow(i+1);
//     }
//     document.getElementById("count_row").innerHTML =str1 + (table.rows.length-1); 
//     document.getElementById("count_check").innerHTML =str2 + count_check;
//     if(count_check == 0) {
//         document.getElementById("del_check").style.display = "none";
//     }

//     if(table.rows.length == 1) {
//         document.getElementById("del_all").style.display = "none";
//     }
// }

function del(i) {
    var table = document.getElementById("my_table");
    table.deleteRow(i+1);
}

const btn_del = document.querySelectorAll(".del");
for(var i=0; i<table.rows.length; i++) {
    btn[i].addEventListener("click", console.log(i + "++++++++++++++++"));
}
function del_check() {
    var table = document.getElementById("my_table");
    const btn_done = document.querySelectorAll(".done");
    var index = 0;
    for(var i=0; i < btn_done.length; i++){
        if(btn_done[i].checked == true){
            table.deleteRow(i+1-index);
            index++;
        }
    }
    document.getElementById("count_row").innerHTML =str1 + (table.rows.length-1);
    document.getElementById("count_check").innerHTML =str2 + 0;
    document.getElementById("del_check").style.display = "none";
    if(table.rows.length == 1) {
        document.getElementById("del_all").style.display = "none";
    }
}

function del_all() {
    var table = document.getElementById("my_table");
    var rowCount = table.rows.length;
    if(rowCount > 1) {
        for (var i = rowCount - 1; i > 0; i--) {
            table.deleteRow(i);
        }
    }
    document.getElementById("count_row").innerHTML = str1 + 0;
    document.getElementById("count_check").innerHTML = str2 + 0;
    document.getElementById("del_check").style.display = "none";
    document.getElementById("del_all").style.display = "none";
}

function done() {
    document.getElementById("del_check").style.display = "inline";
    var table = document.getElementById("my_table");
    var x = table.getElementsByTagName("tr");
    const btn_done = document.querySelectorAll(".done");
    var count_check = 0;
    for (var i = 0; i < btn_done.length; i++) {
        if(btn_done[i].checked == true) {
            x[i+1].style.backgroundColor = '#4AE259';
            // x[i+1].style.backgroundColor = rgb(74, 226, 89);
            x[i+1].cells[4].style.backgroundColor = "white";
            count_check++;
        } else {
            x[i+1].style.backgroundColor = "white";
        }
    }
    if(count_check == 0) {
        document.getElementById("del_check").style.display = "none";
    }
    document.getElementById("count_check").innerHTML =str2 + count_check; 
}


