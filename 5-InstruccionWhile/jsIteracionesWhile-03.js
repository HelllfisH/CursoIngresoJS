/*
al presionar el botón pedir la CLAVE (ayuda: es utn750)*/
function mostrar()
{
	var clave;
	clave= prompt("Ingrese la clave");
	
	do
	{
		if(clave != "utn750")
		{
			alert("La clave es incorrecta");
			clave= prompt("Vuelve a ingresar la clave");

		}else
		{
			alert("Clave correcta");
		}
		
	}while(clave != "utn750")
		
	
}//FIN DE LA FUNCIÓN
