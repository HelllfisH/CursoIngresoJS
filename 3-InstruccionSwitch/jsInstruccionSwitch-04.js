function mostrar()
{
	//tomo el mes
	
	var mes;
	mes= txtIdMes.value;

	switch(mes)
	{
		case "Febrero":
			alert("Este mes tiene 28 dias");
			break;
		case "Enero": 
		case "Marzo":
		case "Mayo":
		case "Agosto":
		case "Octubre":
		case "Diciembre":
			alert("Este mes tiene 31 dias");
			break
		default:
			alert("Este mes tiene 30 dias");
			break;						
	}

}//FIN DE LA FUNCIÓN