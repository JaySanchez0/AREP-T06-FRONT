# AREP-T06-FRONT

### Presentado por:

Jeisson G. Sanchez R.

### Despliegue con s3

Creamos una instancia de s3

![ver](img/s3/instancia.PNG)

Damos permisos para que el contenido de s3 en este caso la aplicacion web sea publico

![ver](img/s3/makePublic.PNG)

![ver](img/s3/crear.PNG)

Una vez creada nuestra instancia de S3, construimos nuestra aplicacion react

![ver](img/s3/build-app.PNG)

Despues procedemos a cargar el contenido de la carpeta build en nuestra instancia de s3

![ver](img/s3/cargaBuild.PNG)

Aqui podemos consultar el contenido

![ver](img/s3/cont.PNG)

Ya despues de esto podemos consultar nuestra aplicacion

![ver](img/s3/build.PNG)


### Despliegue en produccion con amplify:

Vamos a desplegar la aplicacion en aws desde github para ello se utilizara amplify

![ver](img/conexion.PNG)

aqui vamos a seleccionar github

![ver](img/repo.PNG)

seleccionamos nuestro repo de github y la rama a desplegar

![ver](img/detalles.PNG)

![ver](img/build.PNG)

![ver](img/finalDeploy.PNG)