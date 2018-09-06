var pedidos = [];
var vendidos = {Bananaa: 0, Macaa: 0, Peraa: 0, Total: 0};

function bananaChange(checkbox){
	if(checkbox.checked == true){
		document.getElementById("bananaQtd").style.visibility = "visible";
	}else{
		document.getElementById("bananaQtd").style.visibility = "hidden";
	}
}

function macaChange(checkbox){
	if(checkbox.checked == true){
		document.getElementById("macaQtd").style.visibility = "visible";
	}else{
		document.getElementById("macaQtd").style.visibility = "hidden";
	}
}

function peraChange(checkbox){
	if(checkbox.checked == true){
		document.getElementById("peraQtd").style.visibility = "visible";
	}else{
		document.getElementById("peraQtd").style.visibility = "hidden";
	}
}



function logArrayElements(element, index, array){
	console.log("a[" + index + "] =" + element);
}

function gerarPedido(){
	var pedido = {Total: 0};
	if(document.getElementById("banana").checked){
		pedido.Bananaa = parseInt(document.getElementById("bananaQtd").value);
		pedido['Total'] = (1.50 * document.getElementById("bananaQtd").value) + pedido['Total'];

	}

	if(document.getElementById("maca").checked){
		pedido.Macaa = parseInt(document.getElementById("macaQtd").value);
		pedido['Total'] = (2.00 * document.getElementById("macaQtd").value) + pedido['Total'];
	}

	if(document.getElementById("pera").checked){
		pedido.Peraa = parseInt(document.getElementById("peraQtd").value);
		pedido['Total'] = (4.00 * document.getElementById("peraQtd").value) + pedido['Total'];
	}


	pedidos.push(pedido);
	console.log('Pedido');
	console.log(pedido);

}


function gerarRelatorio(){
	var vendidos = {Bananaa: 0, Macaa: 0, Peraa: 0, Total: 0};
	pedidos.filter(function(item){
		if("Bananaa" in item){
			vendidos['Bananaa'] = vendidos['Bananaa'] + item['Bananaa'];}
		if("Macaa" in item){
			vendidos['Macaa'] = vendidos['Macaa'] + item['Macaa'];}	
		if("Peraa" in item){
			vendidos['Peraa'] = vendidos['Peraa'] + item['Peraa'];	}	

		vendidos['Total'] = vendidos['Total'] + item['Total'];
	})

	console.log('Relatorio');
	console.log(vendidos);
	document.getElementById('print').innerHTML= 'Bananaa: ' + vendidos['Bananaa'] + '<br>' + 
												'Macaa: ' + vendidos['Macaa'] + '<br>' + 
												'Peraa: ' + vendidos['Peraa'] + '<br>' +
												'Total: R$ ' + vendidos['Total'];
}