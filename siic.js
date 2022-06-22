document.addEventListener("DOMContentLoaded", function () {
    new TypeIt("#element", {
      strings: ["This is my string!"],
    }).go();
  });


function replaceBtn(){
	document.getElementById('output').textContent =text;
	
}


async function loadFile(file){
	let text =await file.text();
	console.log(text);
	document.getElementById('output').textContent =text;
}




Date.prototype.getInterval = function (otherDate) {
    var interval;
 
    if(this > otherDate)
        interval = this.getTime() - otherDate.getTime();
    else
        interval = otherDate.getTime() - this.getTime();
 
    return Math.floor(interval / (1000*60*60*24));
}





function btnGo(){
	
	addr = document.getElementById("aa").value;
	addr=addr.trim()
	if(addr==""){
		alert("몰ID가 비어있습니다");
		addr.focus();
		
	}else{
	
	addrFull= addr+".cafe24.com";
	//window.open('http://'+addrFull,'','menubar=0,width=500, height=550,location=0');
	document.getElementById("ifream").src='https://'+addrFull;
	}
	
}

function btnGo2(){
	
	addr = document.getElementById("bb").value;
	addr=addr.trim()
	if(addr==""){
		alert("FTP 접속 을 위해  몰ID 를 입력해주세요.");
		addr.focus();
		
	}else{
	
	addrFull= addr+".cafe24.com/disp/admin/ecfileupload/main?type=download";
	
	window.open("https://"+addrFull);
	}
	
}




function btnDay(){
	day= document.getElementById("day").value;
	

	var dt1 = new Date(day);
	var dt2 = new Date();
	var day_alert=dt2.getInterval(dt1);
	
	var result_str = '데이터 접수 <strong>'+dt2.getInterval(dt1)+'  </strong>일째 입니다.';
	
	/*
	if(day_alert>=14 ){
		alert("데이터가 접수된지 2주가 지났습니다");
	}

	*/
	if(day==""){
		alert("날짜를 입력해주세요");
	}else{
		document.getElementById("date").innerHTML = result_str;
	}

}

function createRe(){
    let mallid=document.getElementById("mallid").value;
    document.getElementById("coco").innerText=mallid+"님 안녕하세요 CAFE24 이전센터 입니다.";
    document.getElementById("mallid").value="";
}

