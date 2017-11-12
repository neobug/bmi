// 头部搜索框
var search = document.querySelector(".search");
var ibmsearch = document.querySelector("#ibm-search");
var searchimg = document.querySelector(".search-img");
var q = document.querySelector("#q");
var decide = true;
ibmsearch.onmouseover = function(){
		ibmsearch.style.boxShadow = "0 0 2px 2px #4178be";
		searchimg.style.color = "#4178be";
		search.style.boxShadow = "0 0 0";
		q.style.boxShadow = "0 0 0";	
}
ibmsearch.onmouseout = function(){
		ibmsearch.style.boxShadow = "0 0 0";
		searchimg.style.color = "#323232";
}
q.onmouseover = function(){
	searchimg.style.color = "#4178be";	
	this.style.boxShadow = "0 0 2px 2px #4178be";
}
q.onmouseout = function(){
	searchimg.style.color = "#323232";
	this.style.boxShadow = "0 0 0";
}
q.onfocus = function(){
	searchimg.style.color = "#323232";
	search.style.boxShadow = "0 0 2px 2px #4178be";
}
q.onblur = function(){
	search.style.boxShadow = "0 0 0";
}

// 头部下拉
var drop = document.querySelector(".drop");//PRODUCTS
var Dkey = document.querySelector(".drop-key");
var dropservice = document.querySelector("#dropservice");//SERVICE
var DkeyS = document.querySelector(".dropS-key");
var develop = document.querySelector("#develop");//develop
var DkeyD = document.querySelector(".dropD-key");

//延时触发
// PRODUCTS
var timer = null;
Dkey.onmouseover = drop.onmouseover = function(){
	timer = setTimeout(function(){
		drop.style.height = "569px";
	},300)
}
Dkey.onmouseout = drop.onmouseout = function(){
	timer = setTimeout(function(){
		drop.style.height = "0"
	},300)
}


//SERVICE
DkeyS.onmouseover = dropservice.onmouseover = function(){
	timer = setTimeout(function(){
		dropservice.style.height = "569px";
	},300)
}
DkeyS.onmouseout = dropservice.onmouseout = function(){
	timer = setTimeout(function(){
		dropservice.style.height = "0"
	},300)
}


//develop
DkeyD.onmouseover = develop.onmouseover = function(){
	timer = setTimeout(function(){
		develop.style.height = "569px";
	},300)
}
DkeyD.onmouseout = develop.onmouseout = function(){
	timer = setTimeout(function(){
		develop.style.height = "0";
	},300)
}


// select 
var arrow = document.querySelector(".arrow");
var select = document.querySelector("select");
var optgroup = document.querySelector("optgroup")
arrow.onclick = function(){
	if(decide){
		arrow.style.transform = "rotateX(180deg)";
		console.log(decide)
	}else{
		arrow.style.transform = "rotateX(360deg)";
		console.log(decide)
	}
	decide = !decide;
}

// 置顶
var uptop = document.querySelector(".uptop");
window.onscroll = function(){
	var top =document.documentElement.scrollTop||  window.pageYOffset  || document.body.scrollTop;
	setTimeout(function(){
		if(top>200){
			 uptop.style.right = "30px"
			console.log(0)
		}else{
			uptop.style.right = "-60px"
		}
	},400)
	
}