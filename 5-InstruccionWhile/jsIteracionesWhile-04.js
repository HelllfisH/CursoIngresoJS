/*
al presionar el botón 
pedir un número entre 0 y 9 inclusive.*/
function mostrar()
{
	var number;
	number= prompt("Escribe un numero entre 0 y 9 inclusive");

	while(number >= 0 && number < 10)
	{
		alert(number);
	}
}//FIN DE LA FUNCIÓN