var John = {
	age:18,
	height:175
};

var friend={
	age:17,
	height:178
};

function cal(age,height){
	var score=age*5+height;
	return score;
}

var scoreJohn=cal(John.age,John.height);
console.log(scoreJohn);
var scoreFriend=cal(friend.age,friend.height);
console.log(scoreFriend);

if(scoreJohn>scoreFriend){
	console.log("John Win");
}else if(scoreJohn==scoreFriend){
	console.log('tie');
}else{
	console.log('friend win');
}

