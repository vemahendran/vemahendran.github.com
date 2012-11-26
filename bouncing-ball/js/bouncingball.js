/**
 * Bouncing Ball Technique
 *
 * @author Venkatesan Mahendran
 */

 "use strict"
 
if(typeof Bounce === 'undefined' || !Bounce) {
	var Bounce = {};
}

(function () {
	Bounce.ball = function () {
		var that = this;

		//console.log(this);
		return {
			setTrigger: function () {
				that._init();
			},
			
			stopTrigger: function(){
				that._stopBounce();
			}
		};
	};


	Bounce.ball.prototype = {

		posStart: 0,

		posEnd: 0,
		
		runDown: null,
		
		runUp: null,

		_init: function () {
			var container = document.getElementById("container"),
				Containerheight = container.offsetHeight,
				ball = document.getElementById("ball"),
				ballHeight = ball.offsetHeight,
				bounceHeight = parseInt(Containerheight, 10) - parseInt(ballHeight, 10);

			this.posEnd = this.validateBounceHeight(bounceHeight);
			this._stopBounce();
			this.startBounce(this.posEnd, ball);

		},
		
		validateBounceHeight: function(bounceHeight){			
			var bounceHeight = (bounceHeight%20 !== 0)?(Math.floor(bounceHeight/20)*20):bounceHeight;				
			return bounceHeight;			
		},

		startBounce: function (height, ball) {
			ball.style.left = "0px";
			ball.style.top = "0px";
			this.moveDown(this.posStart, height);
		},
		
		_stopBounce: function(){
			clearInterval(this.runDown);
			clearInterval(this.runUp);
			ball.style.left = "0px";
			ball.style.top = "0px";				
		},

		moveDown: function (startPos, endPos) {

			var startPos = parseInt(startPos, 10),
				endPos = parseInt(endPos, 10),
				top = startPos,
				obj = this;

			if (startPos === endPos) {
				return true;
			}

			obj.runDown = setInterval(function () {
				ball.style.top = parseInt(top, 10) + "px";
				//console.log(top);
				if (top === endPos) {
					clearInterval(obj.runDown);
					obj.moveUp(startPos, endPos);
				}
				top += 20;
			}, 30);
		},

		moveUp: function (startPos, endPos) {
			var startPos = parseInt(startPos, 10),
				endPos = parseInt(endPos, 10),
				top = endPos,
				obj = this;

			obj.runUp = setInterval(function () {
				ball.style.top = parseInt(top, 10) + "px";
				top -= 20;
				if (top === startPos) {
					clearInterval(obj.runUp);
					startPos = startPos + 20;
					obj.moveDown(startPos, endPos);
				}

			}, 30);

		}

	};

})();


var myBall = new Bounce.ball();

var startBounce = document.getElementById("startBounce");
startBounce.onclick = function () {
	//myBall.setTrigger();
};

var startBounce = document.getElementById("stopBounce");
stopBounce.onclick = function () {
	//myBall.stopTrigger();
};

var myBall2 = new Bounce.ball();

console.log(myBall instanceof Object);






