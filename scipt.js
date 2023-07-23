//input
var result=document.querySelector('#validate');
var day=document.querySelector("#day");
var month=document.querySelector("#month");
var year = document.querySelector("#year");
// error
var error_day = document.querySelector('.error-day');
var error_month = document.querySelector('.error-month');
var error_year = document.querySelector('.error-year');

var h6_day=document.querySelector('.h6-day');
var h6_month=document.querySelector('.h6-month');
var h6_year=document.querySelector('.h6-year');
// output
var output_day = document.querySelector('.output-day');
var output_month = document.querySelector('.output-month');
var output_year = document.querySelector('.output-year');


let isValid=false;

// button listener
result.addEventListener('click',calculateAge);
//Day
day.addEventListener('input',(e)=>{
   if(+day.value>31){    //Plus(+) will convert string to int
      day.classList.add('error-input');
      h6_day.classList.add('error-h6');
      error_day.textContent="Must be valid date";
      isValid=false;
      // return;
   }
   else{
      isValid=true;
      day.classList.remove('error-input');
      h6_day.classList.remove('error-h6');
      error_day.textContent="";
      }
   if(+day.value===0){                    //if the field is empty or equal to zero
      isValid=false;
      day.classList.add('error-input');
      h6_day.classList.add('error-h6');
      error_day.textContent="This field is required.";
   }
});

//Month

month.addEventListener('input',(e)=>{
   if(+month.value>12){    //Plus(+) will convert string to int
      month.classList.add('error-input');
      h6_month.classList.add('error-h6');
      error_month.textContent="Must be valid month.";
      isValid=false;

      // return;
   }
   else{
      isValid=true;
      month.classList.remove('error-input');
      h6_month.classList.remove('error-h6');
      error_month.textContent="";
      }
   if(+month.value===0){                    //if the field is empty or equal to zero
      isValid=false;
      month.classList.add('error-input');
      h6_month.classList.add('error-h6');
      error_month.textContent="This field is required.";
   }
});

//year
year.addEventListener('input',(e)=>{
   if(+year.value<1000 || +year.value>2023){    //Plus(+) will convert string to int
      year.classList.add('error-input');
      h6_year.classList.add('error-h6');
      error_year.textContent="Must be valid Year.";
      isValid=false;
      // return;
   }
   else{
      isValid=true;
      year.classList.remove('error-input');
      h6_year.classList.remove('error-h6');
      error_year.textContent="";
      }
   if(+year.value===0){                    //if the field is empty or equal to zero
      isValid=false;
      year.classList.add('error-input');
      h6_year.classList.add('error-h6');
      error_year.textContent="This field is required.";
   }
});

// function to calculate age
function calculateAge(){
   if(isValid){
      var date=new Date();
      let date_now=date.getDate();
      let month_now=date.getMonth() +1;
      let year_now=date.getFullYear();
      // console.log(date_now,month_now,year_now);

      var age_date=date_now -day.value;
      var age_month=month_now -month.value;
      var age_year=year_now -year.value;

      // console.log(age_date,age_month,age_year);

      output_day.textContent=Math.abs(age_date);
      output_month.textContent=Math.abs(age_month);
      output_year.textContent=Math.abs(age_year);

   }
   else{
      alert("Enter all values")
   }
}

