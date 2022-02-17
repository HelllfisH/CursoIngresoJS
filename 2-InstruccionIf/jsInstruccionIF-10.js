function mostrar()
{
	//Genero el número RANDOM entre 1 y 10 
	
	var number;
	number= Math.floor(Math.random() * 10) + 1;
	console.log("La nota es " + number);

	if(number > 8)
	{
		alert("EXCELENTE");

	}else
	{
		if(number > 4 && number < 9)
		{
			alert("APROBÓ");

		}else
		{
			alert("Vamos, la proxima se puede");
		}
	}

}//FIN DE LA FUNCIÓN