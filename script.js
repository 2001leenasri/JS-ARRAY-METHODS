//array length
function val(){
    var a=prompt("Please enter your array", "");
    var len = a.split(",")
    document.getElementById("ans").innerHTML=len.length;
}

//array tostring
function tostring(){
    var b=prompt("Please enter your array", ""); 
    var str = b.split(",")
    str.toString(document.getElementById("ans1").value);
    document.getElementById("ans1").innerHTML=str;
}


//array push
function get(){
    let len=Number(prompt("enter a length:"))
    let arr=[]
    for(let i=0; i<len; i++){
        let val=prompt("enter a array:")
        arr.push(val)
      
        
    }
    document.getElementById('ans2').innerHTML=arr
    let val1=prompt("enter the value")
    arr.push(val1)
    document.getElementById('ans3').innerHTML=arr
   }

//array delete
function myfunction(){
    let del = prompt("enter your array")
    let arrdel = del.split(",");
    delete arrdel[prompt("enter the value")];
    document.getElementById("arrdel").innerHTML = arrdel;
}

//array concat
function myelements(){
    let g = prompt("enter the girls name", "");
    let concate = g.split(",");
    let result = concate.concat(prompt("enter the boys name", ""));
    document.getElementById("ans7").innerHTML = result;

   
}

//array splice
function my(){
    let splicing = prompt("enter your friut", "");
    let splice = splicing.split(",");
    let val1 =prompt("enter your friut", "")
    let val2 = prompt("enter your friut", "")
    splice.splice(val1,val2)
    document.getElementById("ans8").innerHTML = splice;


   
}

//array slice
function myfunc(){
    

    var name = prompt("enter your name", "");    
    var name1 = prompt("enter your name2", "");
    var name2 = prompt("enter your name3", "");
    var result = name + " " + name1 +" "+ name2 ;
    
    document.getElementById("ans10").innerHTML =result ;
    
   const name3 = prompt(" enter your slicing number", "");  
   let citrus = result.split(",");  
   
   document.getElementById("ans11").innerHTML = citrus.slice(name3);
   
}
// array flat
function myfun(){
        let h =prompt("enter your array", "");
        let join = h.split(",");
        let result = join.join(prompt("enter your array to be joined", ""));
        document.getElementById("ans12").innerHTML = result;
   
}

//array pop
function myarr(){
    var c=prompt("enter your arrays", "");
    var pop = c.split(",")
    pop.pop(prompt("enter your array to be popped", ""));
    document.getElementById("ans14").innerHTML=pop;
}

function shiftFunction(){
    var e=prompt("enter your arrays", "");
    var shift = e.split(",")
    shift.shift(prompt("enter your arrays", ""));
    document.getElementById("ans15").innerHTML = shift;
}

function unshiftFunction() {
    let f = prompt("enter your arrays", "");
    let unshift = f.split(",");
    unshift.unshift(prompt("enter your arrays", ""));
    document.getElementById("ans16").innerHTML = unshift;
}
    
  
