</br>
<p align="center"> 
  <img width=40% src=../../images/challenge-13.svg/>
</p>

<h1 align="center">👩🏻‍💻 Reto #13: <em>Backup de los archivos de Papá Noel</em> 💻</h1>

## Instrucciones - [![](https://img.shields.io/badge/-Fácil-brightgreen?style=plastic)]()

Para evitar perder datos cuando el servidor se cae, Papa Noel ha decidido hacer backups incrementales. Un hacker llamado S4vitelf le esta ayudando.

Por un lado, tenemos el **timestamp** de cuándo se hizo el último backup.

También tenemos los cambios que se han realizado en un array de arrays. Cada array interno contiene **dos elementos**: el **id** del archivo modificado y el **timestamp** de la modificación.

Tienes que crear un programa que devuelva un array con las **id** de los archivos que tendríamos que hacer backup porque han sido modificados desde el último backup y **ordenados de forma ascendente**. Ejemplo:

```
const lastBackup = 1546300800
const changes = [
  [ 3, 1546301100 ],
  [ 2, 1546300800 ],
  [ 1, 1546300800 ],
  [ 1, 1546300900 ],
  [ 1, 1546301000 ]
]

getFilesToBackup(lastBackup, changes) // => [ 1, 3 ]
// El archivo con id 1 ha sido modificado dos veces
// después del último backup.

// El archivo con id 2 no ha sido modificado después
// del último backup.

// El archivo con id 3 ha sido modificado una vez
// después del último backup.

// Tenemos que hacer una copia de seguridad
// de los archivos 1 y 3.
```

Recuerda que:

- Devuelve la id de los archivos que han sido modificados después del último backup.
- Devuelve un array vacío si no hay archivos que hacer backup.
- Recuerda que deben estar ordenados los id de forma ascendente.
