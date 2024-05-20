function salaryCheck(name, designation, basic){

    var tax = 0, basicSalary, deduction, output;

    if (designation == "Developer"){
        tax = 10;
    }


    else if (designation == "CEO"){
        tax = 40;    
    }

    else if (designation == "Peon"){
        tax = 0;    
    }

    else if (designation =="Manager"){
        tax = 8;    
    }

    else if (designation == "Contenet Writer"){
        tax = 5;    
    }


    else{
        document.write("inValid Designation")
    }
    deduction = basic * tax / 100;
    basicSalary = basic - deduction ;

    output = 
    `
    <tr>
    <td> ${name} </td>
    <td> ${designation} </td>
    <td> ${basic} </td>
    <td> ${tax} </td>
    <td> ${basicSalary} </td>
    </tr>
    `

    return output;

}

    var name = prompt("Please enter your name"),
     designation = prompt("Please enter your designation"),
     basic = parseInt(prompt("Please enter your basic salary"));


    var empData = salaryCheck(name, designation, basic);
    document.getElementById("data").innerHTML = empData;
