var timeleft = 60;
			  var timer = setInterval(function(){
			      if(timeleft == 0){
			      clearInterval(timer);
			      document.getElementById("count").innerHTML = "HURRY UP!";
				alert("HURRY UP!");
			   } else {
			    document.getElementById("count").innerHTML = timeleft + " Seconds Remaining";
			  }
			  timeleft -= 1;
			}, 1000);

		function button(){
			if (timeleft >= 1) {
				alert("Well done!")
				console.log(timeleft);
			}
      else if (timeleft <= 0){
				alert("HURRY UP!")
				console.log(timeleft);
			}
		}

        // localStorage kitchen
        function getItem() {
                document.getElementById('order1').innerHTML = localStorage.getItem('food1');
                document.getElementById('order2').innerHTML = localStorage.getItem('food2');
                document.getElementById('order3').innerHTML = localStorage.getItem('food3');
                document.getElementById('order4').innerHTML = localStorage.getItem('drink1');
                document.getElementById('order5').innerHTML = localStorage.getItem('drink2');
                document.getElementById('order6').innerHTML = localStorage.getItem('drink3');
        }