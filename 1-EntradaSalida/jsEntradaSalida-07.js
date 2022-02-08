/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
function sumar()
{	
	var number1;
	var number2;
	var suma_total;
	number1= txtIdNumeroUno.value;
	number2= txtIdNumeroDos.value;
	number1= parseInt(number1);
	number2= parseInt(number2);
	suma_total= number1 + number2;
	alert("La suma es " + suma_total);

}

function restar()
{
	var number3;
	var number4;
	var resta_total;
	number3= txtIdNumeroUno.value;
	number4= txtIdNumeroDos.value;
	number3= parseInt(number3);
	number4= parseInt(number4);
	resta_total= number3 - number4;
	alert("La resta es " + resta_total);

}

function multiplicar()
{ 
	var number5;
	var number6;
	var multiplicacion_total;
	number5= txtIdNumeroUno.value;
	number6= txtIdNumeroDos.value;
	number5= parseInt(number5);
	number6= parseInt(number6);
	multiplicacion_total= number5 * number6;
	alert("La multiplicacion es " + multiplicacion_total);

}

function dividir()
{
	var number7;
	var number8;
	var division_total;
	number7= txtIdNumeroUno.value;
	number8= txtIdNumeroDos.value;
	number7= parseInt(number7);
	number8= parseInt(number8);
	division_total= number7 / number8;
	alert("La division es " + division_total);

}

