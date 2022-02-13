function mostrar()
{
	//Genero el número RANDOM entre 1 y 10 
	
	var number;
	number= Math.floor(Math.random() * 10) + 1;
	console.log("El numero es " + number);

	if(number > 8)
	{
		alert("EXELENTE");

	}else
	{
		if(number > 3 && number < 9)
		{
			alert("APROBÓ");

		}else
		{
			alert("Vamos, la proxima se puede");
		}
	}

}//FIN DE LA FUNCIÓN