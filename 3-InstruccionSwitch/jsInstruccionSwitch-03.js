function mostrar()
{
	//tomo el mes
	
	var mes;
	mes= txtIdMes.value;

	switch(mes)
	{
		case "Febrero":
			alert("Este mes no tiene más de 29 dias");
			break;
		default:
			alert("Este mes tiene 30 dias o mas dias");
			break;	
	}


}//FIN DE LA FUNCIÓN