const acd = document.querySelectorAll("button")
		acd.forEach(function(button,Home){
		button.addEventListener("click",function(event){{
			var acdItem = event.target
			var product = acdItem.parentElement
			var productImg = product.querySelector("img").src
			var productname = product.querySelector("h3").innerText
			var productmoney = product.querySelector("span").innerText
			addcart(productImg, productmoney,productname)
			
		}})

		})
		function addcart(productImg, productmoney,productname) {
			var addtr = document.createElement("tr")
			var trcontent = '<tr><td style="display: flex; align-items: center;"><img style="width: 70px;" src="'+productImg+'" alt="">'+productname+'</td><td><p><span>'+productmoney+'</span><sup>đ</sup></p></td><td><input style="width: 30px; outline:none;" type="number" value="1" min="1"></td><td style="cursor: pointer;">xóa</td></tr>'
			addtr.innerHTML = trcontent
			var cartTable = document.querySelector("tbody")
			// console.log(cartTable)
			cartTable.append(addtr)
		}