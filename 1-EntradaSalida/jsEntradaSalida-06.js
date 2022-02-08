/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
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
	/*el parseInt() comprueba el primer argumento, una cadena y lo
	y lo tranforma en un numero entero*/

}

