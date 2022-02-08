/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
function sumar()
{	
	var number1;
	var number2;
	var resultado;
	number1= txtIdNumeroUno.value;
	number2= txtIdNumeroDos.value;
	number1= parseInt(number1);
	number2= parseInt(number2);
	resultado= number1 + number2;
	alert("La suma es " + resultado);

}

function restar()
{
	var number3;
	var number4;
	var resultado;
	number3= txtIdNumeroUno.value;
	number4= txtIdNumeroDos.value;
	number3= parseInt(number3);
	number4= parseInt(number4);
	resultado= number3 - number4;
	alert("La resta es " + resultado);

}

function multiplicar()
{ 
	var number5;
	var number6;
	number5= txtIdNumeroUno.value;
	number6= txtIdNumeroDos.value;
	number5= parseInt(number5);
	number6= parseInt(number6);
	resultado= number5 * number6;
	alert("La multiplicacion es " + resultado);

}

function dividir()
{
	var number7;
	var number8;
	var resultado; 
	number7= txtIdNumeroUno.value;
	number8= txtIdNumeroDos.value;
	number7= parseInt(number7);
	number8= parseInt(number8);
	resultado= number7 / number8;
	alert("La division es " + resultado);

}

