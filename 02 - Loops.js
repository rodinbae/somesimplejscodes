var firstNum, sum=0, x=0;

firstNum = Number(prompt(firstNum));

/*for(var x=0;x<=firstNum;x++){
sum=sum+x;
}
document.write("Girilen sayilarin toplami: " + sum);*/
/*
while(x<=firstNum){
    sum+=x;
    x++;
}alert("Toplam:"+sum);*/

do{
    sum+=x;
    x++;
}while(x<=firstNum);
document.getElementById("text").innerHTML=sum;