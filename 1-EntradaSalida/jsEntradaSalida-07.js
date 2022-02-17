/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
function sumar()
{	
	var number1;
	var number2;
	var result;
	number1= txtIdNumeroUno.value;
	number2= txtIdNumeroDos.value;
	number1= parseInt(number1);
	number2= parseInt(number2);
	result= number1 + number2;
	alert("La suma es " + result);
}

function restar()
{
	var number1;
	var number2;
	var result;
	number1= txtIdNumeroUno.value;
	number2= txtIdNumeroDos.value;
	number1= parseInt(number1);
	number2= parseInt(number2);
	result= number1 - number2;
	alert("La resta es " + result);
}

function multiplicar()
{ 
	var number1;
	var number2;
	var result;
	number1= txtIdNumeroUno.value;
	number2= txtIdNumeroDos.value;
	number1= parseInt(number1);
	number2= parseInt(number2);
	result= number1 * number2;
	alert("La multiplicacion es " + result);
}

function dividir()
{
	var number1;
	var number2;
	number1= txtIdNumeroUno.value;
	number2= txtIdNumeroDos.value;
	number1= parseInt(number1);
	number2= parseInt(number2);
	result= number1 / number2;
	alert("La division es " + result);
}

