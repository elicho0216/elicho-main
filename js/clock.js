//컴퓨터로부터 시간 정보를 얻어와서 저장
let now;
let year;
let month;
let day;
let hour;
let minute;
let second;

function timeInfo(){
	now=new Date();
	year=now.getFullYear();
	month=now.getMonth()+1;
	day=now.getDate();
	hour=now.getHours();
	minute=now.getMinutes();
	second=now.getSeconds();
}


//현재 시간을 출력하는 함수
function currentTime(){
	timeInfo();
	let clockMonth=month;
	let clockDay=day;
	let clockHour=hour;
	let clockMinute=minute;
	let clockSecond=second;
	if(month<10){
		clockMonth='0'+month;
	}
	if(day<10){
		clockDay='0'+day;
	}
	if(hour<10){
		clockHour='0'+hour;
	}
	if(minute<10){
		clockMinute='0'+minute;
	}
	if(second<10){
		clockSecond='0'+second;
	}
	document.querySelector(".time").innerHTML = year+"-"+clockMonth+"-"+clockDay+" "+clockHour+":"+clockMinute+":"+clockSecond;
}

//현재 시간 출력 함수를 1초마다 반복하는 함수
function clock(){
  	currentTime();
	setInterval(currentTime,1000);
}

//현재 시간 출력
clock();



