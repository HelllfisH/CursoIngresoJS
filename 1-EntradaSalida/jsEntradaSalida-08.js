/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resto entre el dividendo y el divisor.
ej.: "El resto es 0 ."*/
function SacarResto()
{
	var dividendo;
	var divisor;
	var resto;
	/*dividendo= 1200;
	divisor= 60;*/
	dividendo= txtIdNumeroDividendo.value;
	console.log(dividendo);
	divisor= txtIdNumeroDivisor.value;
	console.log(divisor);
	dividendo= parseInt(dividendo);
	console.log(dividendo);
	divisor= parseInt(divisor);
	console.log(divisor);
	resto= dividendo % divisor;
	alert("El resto es " + resto);

}
