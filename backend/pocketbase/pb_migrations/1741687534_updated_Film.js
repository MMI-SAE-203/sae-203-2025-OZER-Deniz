/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_91977388")

  // remove field
  collection.fields.removeById("date2090260438")

  // add field
  collection.fields.addAt(5, new Field({
    "hidden": false,
    "id": "number2090260438",
    "max": null,
    "min": null,
    "name": "annee_de_sortie_film",
    "onlyInt": false,
    "presentable": false,
    "required": false,
    "system": false,
    "type": "number"
  }))

  // add field
  collection.fields.addAt(10, new Field({
    "hidden": false,
    "id": "date4060831118",
    "max": "",
    "min": "",
    "name": "diffusion_film",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "date"
  }))

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_91977388")

  // add field
  collection.fields.addAt(5, new Field({
    "hidden": false,
    "id": "date2090260438",
    "max": "",
    "min": "",
    "name": "annee_de_sortie_film",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "date"
  }))

  // remove field
  collection.fields.removeById("number2090260438")

  // remove field
  collection.fields.removeById("date4060831118")

  return app.save(collection)
})
