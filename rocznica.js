var data=new Date(2019,06,02,0,0,0,0);//02.07.2019

var dzis = new Date//(2021,06,02,0,0,0,0);

var rok = dzis.getFullYear();
var mies = dzis.getMonth();
var dzien = dzis.getDate();

var rokm=rok;
if(mies==11 && dzien>2)
{
    var rokm=rok+1;
    var mies=0;
}
else if(dzien>2)
{
    mies++;
}

var mx=mies+1;
if(mx<9)
{
    var miesx="0"+mx;   
}
else
{
    var miesx=mx;
}

if(mies>6)
{
    var rokr=rok+1;
}
else
{
    var rokr=rok;
}

var nastepna_miesiecznica=new Date(rokm,mies,02,0,0,0,0);
var nastepna_rocznica=new Date(rokr,06,02,0,0,0,0);

var odej = (dzis-data)/(86400000*30);
var miesiecznica=Math.floor(odej);//cos tu nie

var ro=(dzis-data)/(86400000*365);
var rocznica=Math.floor(ro);

var nrocz=(nastepna_rocznica-dzis)/(86400000);
var nrocz=Math.floor(nrocz);

var kiedy=(nastepna_miesiecznica-dzis)/(86400000);
var kiedy=Math.floor(kiedy);


//************************Paski procentowe
var procent=Math.floor((kiedy/30)*100);
var procent=procent+"%"

/*if(kiedy==1)
{
    var procent="0%"
    var kiedy=0;
}*/

document.getElementsByClassName("bar")[0].style.width =procent;



var procentr=((nrocz/365)*100);
var procentr=procentr+"%"

/*if(nrocz==1)
{
    var procentr="0%"
    var nrocz=0;
}*/

document.getElementsByClassName("bar")[1].style.width =procentr;


//************************ 

if(dzien==2)
{
    var kiedy='Dzisiaj';
}

if(kiedy<2)
{
    var kiedy=kiedy+1+" dzień"
}
else if(kiedy>2)
{
    var kiedy=kiedy+1+" dni"
}
document.getElementsByClassName("txt")[2].innerHTML=kiedy;

document.getElementsByClassName("txt")[1].innerHTML="0"+nastepna_miesiecznica.getDate()+"."+miesx+"."+nastepna_miesiecznica.getFullYear();;

document.getElementsByClassName("txt")[0].innerHTML=miesiecznica+1+" miesięcznica";


//Rocznica

if(nrocz<2)
{
    var nrocz=nrocz+1+" dzień"
}
else if(nrocz>2)
{
    var nrocz=nrocz+1+" dni"
}

document.getElementsByClassName("txt")[5].innerHTML=nrocz;

document.getElementsByClassName("txt")[4].innerHTML="02.07."+nastepna_rocznica.getFullYear();

document.getElementsByClassName("txt")[3].innerHTML=rocznica+1+" rocznica";







/*
if(mies==11 && dzien>2)
{
    rok++;
    var mies=0;
}
else if(dzien>2)
{
    mies++;
}

var mx=mies+1;
if(mx<9)
{
    var miesx="0"+mx;   
}
else
{
    var miesx=mx;
}

var next=new Date(rok,mies,02,0,0,0,0)

var odej = (dzis-data)/2629800000;
var miesiecznica=Math.floor(odej)+1;

var ro=(dzis-data)/(86400000*365);
var rocznica=Math.floor(ro);



var kiedy=(next-dzis)/86400000;
var kiedy=Math.floor(kiedy)+1;

if(kiedy<2)
{
    var kiedy=kiedy+" dzień"
}
else
{
    var kiedy=kiedy+" dni"
}
if(dzien=='2' && mies!=data.getMonth())
{
    let x = "Dzisiaj jest "+miesiecznica+" miesięcznica";
    document.title=x;
    document.getElementsByClassName("txt")[1].innerHTML=x;
    document.getElementsByClassName("txt")[3].innerHTML="Dzisiaj"
    document.getElementsByClassName("txt")[5].innerHTML="0"

}
else if(mies==data.getMonth() && dzien=='2')
{
    let x = "Dzisiaj jest ";
    document.title=x+rocznica+" rocznica";
    document.getElementsByClassName("txt")[0].innerHTML=+rocznica+" rocznica";
    document.getElementsByClassName("txt")[2].innerHTML="Dzisiaj"
    document.getElementsByClassName("txt")[4].innerHTML="0"
}

if(dzien!='2' && mies!=data.getMonth())
{
    document.getElementsByClassName("txt")[1].innerHTML=miesiecznica+" miesięcznica";
    document.getElementsByClassName("txt")[3].innerHTML="0"+next.getDate()+"."+miesx+"."+next.getFullYear();
    document.getElementsByClassName("txt")[5].innerHTML=kiedy;
    document.title='Miesięcznica za '+kiedy;
}

document.getElementsByClassName("txt")[0].innerHTML=+rocznica+" rocznica";
document.getElementsByClassName("txt")[2].innerHTML='02.07.'+rok


*/

