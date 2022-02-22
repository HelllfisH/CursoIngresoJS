function mostrar()
{
	//tomo el mes

	var mes;
	mes= txtIdMes.value;

	switch(mes)
	{
		case "Enero":
			alert("que comiences bien el año!!!");
			break;
		case "Marzo":
			alert("a clases!!!");
			break;
		case "Julio":
			alert("se vienen las vacaciones");
			break;
		case "Diciembre":
			alert("Felices fiesta!!!");
			break;
		default:
			break;				
	}

	
	
	/*if(mes_año == "Enero")
	{
		alert("que comiences bien el año!!!");

	}else
	{
		if(mes_año == "Marzo")
		{
			alert("a clases!!!");
		
		}else
		{
			if(mes_año == "Julio")
			{
				alert("se vienen las vacaciones!!!");
			
			}else
			{
				if(mes_año == "Diciembre")
				{
					alert("Felices fiesta!!!");
				}
			}
		}
	}*/

}//FIN DE LA FUNCIÓN