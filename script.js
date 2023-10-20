function mainFun(){
   
    name=document.getElementById("name").value;
    ptg=document.getElementById("sho");
    console.log(ptg,"ptag");
    console.log(name,"name") ;
   
    return function () {
         ptg.innerHTML=name+" (fro inner func) ";
           
  }  }
  
function disp() {
    console.log ("disp displ");
    iner=mainFun();
    iner();
}


//Task
//create 2 methods/function in a method/function and return a method/function based on condition and store it outside, in a variable.

function twomet() {
    a=0;
    if(a==true){
        return first;
    }
    else {
        return sec;
    }
    function first() {
      console.log ("first ");
        }
    function sec() {
       console.log ("sec");
        }
}

//function stored in a variable. 
k=twomet(); 


//task
//try call & apply methods on Math Object, Date Object(study)


obj={a:99,b:4.2,d:267};
//onsole.log(obj);
arr=[45, 24,889];

//call method
r=Math.max.call(null,obj.a,obj.b);//only takes argument that Math object , not object.
console.log(r);

//find minimum through math object by call methd. 

p=Math.min.call(null,obj.a,obj.b);
console.log("min - ",p);

ro=Math.round.call(null,obj.b);
console.log("round of ",ro);

ci=Math.ceil(obj.b);
console.log("ceil of ",obj.b," is",ci);


//Apply method on math.

arr=[obj.a, obj.b,obj.d];
ma=Math.max.apply(null,arr);//only takes argment  Math object , not object.
console.log("maximm of ",arr," is",ma);



//call method on date object. 

date=new Date("5/23/2025");
year=new Date().getFullYear.call(date);//if no free floating variables then take objects. 
console.log("full year ",year);


//call method to find month

function getmonth() {
    console.log ("germonth");
    
   arr=["Jan","Feb","Mar","Apr","May","June","Jul","Aug","Sep","Oct","Nov","Dec"];
    console.log(typeof(arr));
    mn=document.getElementById("mn").value;
    console.log(mn);
    obj=new Date(mn);
    shmm=document.getElementById("shmn");
    r=new Date().getMonth.call(obj);//if no free floating variables then take objects. 
    shmn.innerHTML=arr[r] + " -  via Call() on date";
    console.log("month ",r+1);


//apply method on Date obj. to find day of the week

    console.log ("getday");
    
    arr=["sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    console.log(typeof(arr));
   
    shdy=document.getElementById("shdy");
    r=new Date().getDay.apply(obj);//if no free floating variables then take objects.it(date) only accept object. 
    shdy.innerHTML=arr[r]+" - via apply()";
    console.log("Day ",r+1);
    
    
}


function University (name,age,marks,city) {
    this.name=name, 
    this.age=age, 
    this.city=city, 
    this.marks=marks, 
    this.func=function () {
        
        a=0;
    }
    
}
std1=new University("Neha",20,78,"nainital");

std2=new University("Jagriti",22,88,"Delhi");

std3=new University("Ravi",23,97,"Jamshedpur");

std4=new University("Vikram",18,65,"Raipur");

std5=new University("Jyoti",22,67,"Kolkata");



console.log(std1);
console.log(std2);
console.log(std3);
console.log(std4);
console.log(std1);

arr=[std1,std2, std3, std4, std5];

lis=document.getElementsByTagName("li");
console.log(lis, "ar of lists");

function dislist(){
    for(i=0;i<5;i++){
        console.log("dislike");
        //console.log(arr[0].name);
        lis[i].innerHTML="Student "+(i+1)+" - Name - "+arr[i].name+", Age: "+arr[i].age+" city - "+arr[i].city+", Marks: "+arr[i].marks;
    }
}
