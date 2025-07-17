let Quote= document.getElementById("Quote").innerHTML;
const Quote2="Be yourself; everyone else is already taken.";
const Quote6 = "Design and code awaken imagination, turning dreams into living art."
const Quote1 = "It is better to be hated for what you are than to be loved for what you are not."
const Quote3 = "Be the change that you wish to see in the world "
const Quote4 ="Coding = Life"
const Quote5 ="Design and code awaken imagination, turning dreams into living art."
const list = [Quote,Quote1,Quote2,Quote3,Quote4,Quote5];
let QuotesNBR = 6;
let n;
n=1;

function New(){
  document.getElementById("Quote").innerHTML= list[n];
n++;
if(n>=QuotesNBR){
  n=1;
}

}


