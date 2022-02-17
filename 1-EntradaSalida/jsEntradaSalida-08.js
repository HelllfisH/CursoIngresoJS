/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resto entre el dividendo y el divisor.
ej.: "El resto es 0 ."*/
function SacarResto()
{
	var number1;
    var number2;
    var resto;
    number1= txtIdNumeroDividendo.value;
    number2= txtIdNumeroDivisor.value;
    number1= parseInt(number1);
    number2= parseInt(number2);
    resto= number1 % number2;
    alert("El resto es " + resto);
}
