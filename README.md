# VIDEOGAMES EXPRESS com SEQUELIZE

Se ha utilizado la base de datos de videogames, pero el acceso a los datos se hace a partir de un ORM, en este caso SEQUELIZE.

## Modelos

Los modelos de la base de datos se han generado automáticamente a partir de las tablas y campos de la base de datos. La carpeta generated se ha generado con `sequelize-auto` con el siguiente comando:

```bash
node ./node_modules/sequelize-auto/bin/sequelize-auto -o "./generated" -d videogames -h localhost -u usuario_de_la_base_de_datos -p 3306 -x PASSWORD_DE_LA_BASE_DE_DATOS -e mysql -v
```

Se ha modificado el fichero `init-models.ls` para cambiar la relación videogames-users por la videogames_with_scores-users ya que sequelize-auto no genera relaciones con vistas.