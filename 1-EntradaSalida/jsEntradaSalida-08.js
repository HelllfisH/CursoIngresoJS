/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resto entre el dividendo y el divisor.
ej.: "El resto es 0 ."*/
function SacarResto()
{
	var dividendo;
	var divisor;
	total_operacion;
	dividendo= txtIdNumeroDividendo;
	divisor= txtIdNumeroDivisor;
	dividendo= parseInt(dividendo);
	divisor= parseInt(divisor);
	total_operacion= dividendo / divisor;
	alert("El resto es " + total_operacion " % ");

}
