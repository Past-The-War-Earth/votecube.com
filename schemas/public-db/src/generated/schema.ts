export const SCHEMA = {
	"domain": "public",
	"index": null,
	"name": "@votecube/public-db",
	"sinceVersion": 1,
	"versions": [
		{
			"entities": [
				{
					"columns": [
						{
							"index": 0,
							"isGenerated": true,
							"manyRelationColumnRefs": [],
							"name": "TOWN_ID",
							"notNull": false,
							"propertyRefs": [
								{
									"index": 0
								}
							],
							"sinceVersion": 1,
							"type": 4
						},
						{
							"index": 1,
							"isGenerated": false,
							"manyRelationColumnRefs": [],
							"name": "TOWN_NAME",
							"notNull": true,
							"propertyRefs": [
								{
									"index": 2
								}
							],
							"sinceVersion": 1,
							"type": 5
						},
						{
							"index": 2,
							"manyRelationColumnRefs": [
								{
									"manyRelationIndex": 0,
									"oneSchemaIndex": null,
									"oneTableIndex": 1,
									"oneColumnIndex": 0,
									"sinceVersion": 1
								}
							],
							"name": "STATE_ID",
							"notNull": true,
							"propertyRefs": [
								{
									"index": 1
								}
							],
							"sinceVersion": 1,
							"type": 4
						}
					],
					"idColumnRefs": [],
					"index": 0,
					"isLocal": true,
					"isRepositoryEntity": false,
					"name": "Town",
					"properties": [
						{
							"columnRef": {
								"index": 0
							},
							"index": 0,
							"isId": false,
							"name": "id",
							"sinceVersion": 1
						},
						{
							"index": 1,
							"isId": false,
							"name": "state",
							"relationRef": {
								"index": 0
							},
							"sinceVersion": 1
						},
						{
							"columnRef": {
								"index": 1
							},
							"index": 2,
							"isId": false,
							"name": "name",
							"sinceVersion": 1
						}
					],
					"relations": [
						{
							"index": 0,
							"isId": false,
							"relationType": 1,
							"propertyRef": {
								"index": 1
							},
							"relationTableIndex": 1,
							"sinceVersion": 1
						}
					],
					"sinceVersion": 1,
					"tableConfig": {
						"name": "TOWNS"
					}
				},
				{
					"columns": [
						{
							"index": 0,
							"isGenerated": true,
							"manyRelationColumnRefs": [],
							"name": "STATE_ID",
							"notNull": false,
							"propertyRefs": [
								{
									"index": 0
								}
							],
							"sinceVersion": 1,
							"type": 4
						},
						{
							"index": 1,
							"isGenerated": false,
							"manyRelationColumnRefs": [],
							"name": "STATE_NAME",
							"notNull": true,
							"propertyRefs": [
								{
									"index": 2
								}
							],
							"sinceVersion": 1,
							"type": 5
						},
						{
							"index": 2,
							"manyRelationColumnRefs": [
								{
									"manyRelationIndex": 0,
									"oneSchemaIndex": null,
									"oneTableIndex": 2,
									"oneColumnIndex": 0,
									"sinceVersion": 1
								}
							],
							"name": "COUNTRY_ID",
							"notNull": true,
							"propertyRefs": [
								{
									"index": 1
								}
							],
							"sinceVersion": 1,
							"type": 4
						}
					],
					"idColumnRefs": [],
					"index": 1,
					"isLocal": true,
					"isRepositoryEntity": false,
					"name": "State",
					"properties": [
						{
							"columnRef": {
								"index": 0
							},
							"index": 0,
							"isId": false,
							"name": "id",
							"sinceVersion": 1
						},
						{
							"index": 1,
							"isId": false,
							"name": "country",
							"relationRef": {
								"index": 0
							},
							"sinceVersion": 1
						},
						{
							"columnRef": {
								"index": 1
							},
							"index": 2,
							"isId": false,
							"name": "name",
							"sinceVersion": 1
						},
						{
							"index": 3,
							"isId": false,
							"name": "states",
							"relationRef": {
								"index": 1
							},
							"sinceVersion": 1
						}
					],
					"relations": [
						{
							"index": 0,
							"isId": false,
							"relationType": 1,
							"propertyRef": {
								"index": 1
							},
							"relationTableIndex": 2,
							"sinceVersion": 1
						},
						{
							"index": 1,
							"isId": false,
							"oneToManyElems": {
								"mappedBy": "TOWN_ID"
							},
							"relationType": 0,
							"propertyRef": {
								"index": 3
							},
							"relationTableIndex": 0,
							"sinceVersion": 1
						}
					],
					"sinceVersion": 1,
					"tableConfig": {
						"name": "STATES"
					}
				},
				{
					"columns": [
						{
							"index": 0,
							"isGenerated": true,
							"manyRelationColumnRefs": [],
							"name": "COUNTRY_ID",
							"notNull": false,
							"propertyRefs": [
								{
									"index": 0
								}
							],
							"sinceVersion": 1,
							"type": 4
						},
						{
							"index": 1,
							"isGenerated": false,
							"manyRelationColumnRefs": [],
							"name": "COUNTRY_NAME",
							"notNull": true,
							"propertyRefs": [
								{
									"index": 2
								}
							],
							"sinceVersion": 1,
							"type": 5
						},
						{
							"index": 2,
							"manyRelationColumnRefs": [
								{
									"manyRelationIndex": 0,
									"oneSchemaIndex": null,
									"oneTableIndex": 3,
									"oneColumnIndex": 0,
									"sinceVersion": 1
								}
							],
							"name": "CONTINENT_ID",
							"notNull": true,
							"propertyRefs": [
								{
									"index": 1
								}
							],
							"sinceVersion": 1,
							"type": 4
						}
					],
					"idColumnRefs": [],
					"index": 2,
					"isLocal": true,
					"isRepositoryEntity": false,
					"name": "Country",
					"properties": [
						{
							"columnRef": {
								"index": 0
							},
							"index": 0,
							"isId": false,
							"name": "id",
							"sinceVersion": 1
						},
						{
							"index": 1,
							"isId": false,
							"name": "continent",
							"relationRef": {
								"index": 0
							},
							"sinceVersion": 1
						},
						{
							"columnRef": {
								"index": 1
							},
							"index": 2,
							"isId": false,
							"name": "name",
							"sinceVersion": 1
						},
						{
							"index": 3,
							"isId": false,
							"name": "states",
							"relationRef": {
								"index": 1
							},
							"sinceVersion": 1
						}
					],
					"relations": [
						{
							"index": 0,
							"isId": false,
							"relationType": 1,
							"propertyRef": {
								"index": 1
							},
							"relationTableIndex": 3,
							"sinceVersion": 1
						},
						{
							"index": 1,
							"isId": false,
							"oneToManyElems": {
								"mappedBy": "COUNTRY_ID"
							},
							"relationType": 0,
							"propertyRef": {
								"index": 3
							},
							"relationTableIndex": 1,
							"sinceVersion": 1
						}
					],
					"sinceVersion": 1,
					"tableConfig": {
						"name": "COUNTRIES"
					}
				},
				{
					"columns": [
						{
							"index": 0,
							"isGenerated": true,
							"manyRelationColumnRefs": [],
							"name": "CONTINENT_ID",
							"notNull": false,
							"propertyRefs": [
								{
									"index": 0
								}
							],
							"sinceVersion": 1,
							"type": 4
						},
						{
							"index": 1,
							"isGenerated": false,
							"manyRelationColumnRefs": [],
							"name": "CONTINENT_NAME",
							"notNull": true,
							"propertyRefs": [
								{
									"index": 1
								}
							],
							"sinceVersion": 1,
							"type": 5
						}
					],
					"idColumnRefs": [],
					"index": 3,
					"isLocal": true,
					"isRepositoryEntity": false,
					"name": "Continent",
					"properties": [
						{
							"columnRef": {
								"index": 0
							},
							"index": 0,
							"isId": false,
							"name": "id",
							"sinceVersion": 1
						},
						{
							"columnRef": {
								"index": 1
							},
							"index": 1,
							"isId": false,
							"name": "name",
							"sinceVersion": 1
						},
						{
							"index": 2,
							"isId": false,
							"name": "countries",
							"relationRef": {
								"index": 0
							},
							"sinceVersion": 1
						}
					],
					"relations": [
						{
							"index": 0,
							"isId": false,
							"oneToManyElems": {
								"mappedBy": "CONTINENT_ID"
							},
							"relationType": 0,
							"propertyRef": {
								"index": 2
							},
							"relationTableIndex": 2,
							"sinceVersion": 1
						}
					],
					"sinceVersion": 1,
					"tableConfig": {
						"name": "CONTINENTS"
					}
				},
				{
					"columns": [
						{
							"index": 0,
							"isGenerated": true,
							"manyRelationColumnRefs": [],
							"name": "COUNTY_ID",
							"notNull": false,
							"propertyRefs": [
								{
									"index": 0
								}
							],
							"sinceVersion": 1,
							"type": 4
						},
						{
							"index": 1,
							"isGenerated": false,
							"manyRelationColumnRefs": [],
							"name": "COUNTY_NAME",
							"notNull": true,
							"propertyRefs": [
								{
									"index": 2
								}
							],
							"sinceVersion": 1,
							"type": 5
						},
						{
							"index": 2,
							"manyRelationColumnRefs": [
								{
									"manyRelationIndex": 0,
									"oneSchemaIndex": null,
									"oneTableIndex": 1,
									"oneColumnIndex": 0,
									"sinceVersion": 1
								}
							],
							"name": "STATE_ID",
							"notNull": true,
							"propertyRefs": [
								{
									"index": 1
								}
							],
							"sinceVersion": 1,
							"type": 4
						}
					],
					"idColumnRefs": [],
					"index": 4,
					"isLocal": true,
					"isRepositoryEntity": false,
					"name": "County",
					"properties": [
						{
							"columnRef": {
								"index": 0
							},
							"index": 0,
							"isId": false,
							"name": "id",
							"sinceVersion": 1
						},
						{
							"index": 1,
							"isId": false,
							"name": "state",
							"relationRef": {
								"index": 0
							},
							"sinceVersion": 1
						},
						{
							"columnRef": {
								"index": 1
							},
							"index": 2,
							"isId": false,
							"name": "name",
							"sinceVersion": 1
						},
						{
							"index": 3,
							"isId": false,
							"name": "states",
							"relationRef": {
								"index": 1
							},
							"sinceVersion": 1
						}
					],
					"relations": [
						{
							"index": 0,
							"isId": false,
							"relationType": 1,
							"propertyRef": {
								"index": 1
							},
							"relationTableIndex": 1,
							"sinceVersion": 1
						},
						{
							"index": 1,
							"isId": false,
							"oneToManyElems": {
								"mappedBy": "TOWN_ID"
							},
							"relationType": 0,
							"propertyRef": {
								"index": 3
							},
							"relationTableIndex": 0,
							"sinceVersion": 1
						}
					],
					"sinceVersion": 1,
					"tableConfig": {
						"name": "COUNTIES"
					}
				},
				{
					"columns": [
						{
							"index": 0,
							"isGenerated": true,
							"manyRelationColumnRefs": [],
							"name": "POLL_COUNTRY_ID",
							"notNull": false,
							"propertyRefs": [
								{
									"index": 0
								}
							],
							"sinceVersion": 1,
							"type": 4
						},
						{
							"index": 1,
							"manyRelationColumnRefs": [
								{
									"manyRelationIndex": 0,
									"oneSchemaIndex": null,
									"oneTableIndex": 2,
									"oneColumnIndex": 0,
									"sinceVersion": 1
								}
							],
							"name": "COUNTRY_ID",
							"notNull": true,
							"propertyRefs": [
								{
									"index": 1
								}
							],
							"sinceVersion": 1,
							"type": 4
						},
						{
							"index": 2,
							"manyRelationColumnRefs": [
								{
									"manyRelationIndex": 1,
									"oneSchemaIndex": null,
									"oneTableIndex": 15,
									"oneRelationIndex": 4,
									"oneColumnIndex": 0,
									"sinceVersion": 1
								}
							],
							"name": "POLL_ID",
							"notNull": true,
							"propertyRefs": [
								{
									"index": 2
								}
							],
							"sinceVersion": 1,
							"type": 4
						}
					],
					"idColumnRefs": [],
					"index": 5,
					"isLocal": true,
					"isRepositoryEntity": false,
					"name": "PollCountry",
					"properties": [
						{
							"columnRef": {
								"index": 0
							},
							"index": 0,
							"isId": false,
							"name": "id",
							"sinceVersion": 1
						},
						{
							"index": 1,
							"isId": false,
							"name": "country",
							"relationRef": {
								"index": 0
							},
							"sinceVersion": 1
						},
						{
							"index": 2,
							"isId": false,
							"name": "poll",
							"relationRef": {
								"index": 1
							},
							"sinceVersion": 1
						}
					],
					"relations": [
						{
							"index": 0,
							"isId": false,
							"relationType": 1,
							"propertyRef": {
								"index": 1
							},
							"relationTableIndex": 2,
							"sinceVersion": 1
						},
						{
							"index": 1,
							"isId": false,
							"relationType": 1,
							"propertyRef": {
								"index": 2
							},
							"relationTableIndex": 15,
							"sinceVersion": 1
						}
					],
					"sinceVersion": 1,
					"tableConfig": {
						"name": "POLL_COUNTRIES"
					}
				},
				{
					"columns": [
						{
							"index": 0,
							"isGenerated": true,
							"manyRelationColumnRefs": [],
							"name": "POLL_STATE_ID",
							"notNull": false,
							"propertyRefs": [
								{
									"index": 0
								}
							],
							"sinceVersion": 1,
							"type": 4
						},
						{
							"index": 1,
							"manyRelationColumnRefs": [
								{
									"manyRelationIndex": 0,
									"oneSchemaIndex": null,
									"oneTableIndex": 15,
									"oneRelationIndex": 7,
									"oneColumnIndex": 0,
									"sinceVersion": 1
								}
							],
							"name": "POLL_ID",
							"notNull": true,
							"propertyRefs": [
								{
									"index": 1
								}
							],
							"sinceVersion": 1,
							"type": 4
						},
						{
							"index": 2,
							"manyRelationColumnRefs": [
								{
									"manyRelationIndex": 1,
									"oneSchemaIndex": null,
									"oneTableIndex": 1,
									"oneColumnIndex": 0,
									"sinceVersion": 1
								}
							],
							"name": "STATE_ID",
							"notNull": true,
							"propertyRefs": [
								{
									"index": 2
								}
							],
							"sinceVersion": 1,
							"type": 4
						}
					],
					"idColumnRefs": [],
					"index": 6,
					"isLocal": true,
					"isRepositoryEntity": false,
					"name": "PollState",
					"properties": [
						{
							"columnRef": {
								"index": 0
							},
							"index": 0,
							"isId": false,
							"name": "id",
							"sinceVersion": 1
						},
						{
							"index": 1,
							"isId": false,
							"name": "poll",
							"relationRef": {
								"index": 0
							},
							"sinceVersion": 1
						},
						{
							"index": 2,
							"isId": false,
							"name": "state",
							"relationRef": {
								"index": 1
							},
							"sinceVersion": 1
						}
					],
					"relations": [
						{
							"index": 0,
							"isId": false,
							"relationType": 1,
							"propertyRef": {
								"index": 1
							},
							"relationTableIndex": 15,
							"sinceVersion": 1
						},
						{
							"index": 1,
							"isId": false,
							"relationType": 1,
							"propertyRef": {
								"index": 2
							},
							"relationTableIndex": 1,
							"sinceVersion": 1
						}
					],
					"sinceVersion": 1,
					"tableConfig": {
						"name": "POLL_STATES"
					}
				},
				{
					"columns": [
						{
							"index": 0,
							"isGenerated": true,
							"manyRelationColumnRefs": [],
							"name": "POLL_STATE_ID",
							"notNull": false,
							"propertyRefs": [
								{
									"index": 0
								}
							],
							"sinceVersion": 1,
							"type": 4
						},
						{
							"index": 1,
							"manyRelationColumnRefs": [
								{
									"manyRelationIndex": 0,
									"oneSchemaIndex": null,
									"oneTableIndex": 15,
									"oneRelationIndex": 8,
									"oneColumnIndex": 0,
									"sinceVersion": 1
								}
							],
							"name": "POLL_ID",
							"notNull": true,
							"propertyRefs": [
								{
									"index": 1
								}
							],
							"sinceVersion": 1,
							"type": 4
						},
						{
							"index": 2,
							"manyRelationColumnRefs": [
								{
									"manyRelationIndex": 1,
									"oneSchemaIndex": null,
									"oneTableIndex": 0,
									"oneColumnIndex": 0,
									"sinceVersion": 1
								}
							],
							"name": "TOWN_ID",
							"notNull": true,
							"propertyRefs": [
								{
									"index": 2
								}
							],
							"sinceVersion": 1,
							"type": 4
						}
					],
					"idColumnRefs": [],
					"index": 7,
					"isLocal": true,
					"isRepositoryEntity": false,
					"name": "PollTown",
					"properties": [
						{
							"columnRef": {
								"index": 0
							},
							"index": 0,
							"isId": false,
							"name": "id",
							"sinceVersion": 1
						},
						{
							"index": 1,
							"isId": false,
							"name": "poll",
							"relationRef": {
								"index": 0
							},
							"sinceVersion": 1
						},
						{
							"index": 2,
							"isId": false,
							"name": "town",
							"relationRef": {
								"index": 1
							},
							"sinceVersion": 1
						}
					],
					"relations": [
						{
							"index": 0,
							"isId": false,
							"relationType": 1,
							"propertyRef": {
								"index": 1
							},
							"relationTableIndex": 15,
							"sinceVersion": 1
						},
						{
							"index": 1,
							"isId": false,
							"relationType": 1,
							"propertyRef": {
								"index": 2
							},
							"relationTableIndex": 0,
							"sinceVersion": 1
						}
					],
					"sinceVersion": 1,
					"tableConfig": {
						"name": "POLL_TOWNS"
					}
				},
				{
					"columns": [
						{
							"index": 0,
							"isGenerated": false,
							"manyRelationColumnRefs": [],
							"name": "THEME_ID",
							"notNull": false,
							"propertyRefs": [
								{
									"index": 0
								}
							],
							"sinceVersion": 1,
							"type": 4
						},
						{
							"index": 1,
							"isGenerated": false,
							"manyRelationColumnRefs": [],
							"name": "NAME",
							"notNull": true,
							"propertyRefs": [
								{
									"index": 1
								}
							],
							"sinceVersion": 1,
							"type": 5
						}
					],
					"idColumnRefs": [],
					"index": 8,
					"isLocal": true,
					"isRepositoryEntity": false,
					"name": "Theme",
					"properties": [
						{
							"columnRef": {
								"index": 0
							},
							"index": 0,
							"isId": false,
							"name": "id",
							"sinceVersion": 1
						},
						{
							"columnRef": {
								"index": 1
							},
							"index": 1,
							"isId": false,
							"name": "name",
							"sinceVersion": 1
						}
					],
					"relations": [],
					"sinceVersion": 1,
					"tableConfig": {
						"name": "THEMES"
					}
				},
				{
					"columns": [
						{
							"index": 0,
							"isGenerated": true,
							"manyRelationColumnRefs": [],
							"name": "FACTOR_ID",
							"notNull": false,
							"propertyRefs": [
								{
									"index": 0
								}
							],
							"sinceVersion": 1,
							"type": 4
						},
						{
							"index": 1,
							"isGenerated": false,
							"manyRelationColumnRefs": [],
							"name": "COLOR_ID",
							"notNull": true,
							"propertyRefs": [
								{
									"index": 1
								}
							],
							"sinceVersion": 1,
							"type": 4
						},
						{
							"index": 2,
							"isGenerated": false,
							"manyRelationColumnRefs": [],
							"name": "FACTOR_NAME",
							"notNull": true,
							"propertyRefs": [
								{
									"index": 2
								}
							],
							"sinceVersion": 1,
							"type": 5
						},
						{
							"index": 3,
							"manyRelationColumnRefs": [
								{
									"manyRelationIndex": 0,
									"oneSchemaIndex": null,
									"oneTableIndex": 9,
									"oneColumnIndex": 0,
									"sinceVersion": 1
								}
							],
							"name": "PARENT_FACTOR_ID",
							"notNull": false,
							"propertyRefs": [
								{
									"index": 3
								}
							],
							"sinceVersion": 1,
							"type": 4
						}
					],
					"idColumnRefs": [],
					"index": 9,
					"isLocal": true,
					"isRepositoryEntity": false,
					"name": "Factor",
					"properties": [
						{
							"columnRef": {
								"index": 0
							},
							"index": 0,
							"isId": false,
							"name": "id",
							"sinceVersion": 1
						},
						{
							"columnRef": {
								"index": 1
							},
							"index": 1,
							"isId": false,
							"name": "color",
							"sinceVersion": 1
						},
						{
							"columnRef": {
								"index": 2
							},
							"index": 2,
							"isId": false,
							"name": "name",
							"sinceVersion": 1
						},
						{
							"index": 3,
							"isId": false,
							"name": "parent",
							"relationRef": {
								"index": 0
							},
							"sinceVersion": 1
						}
					],
					"relations": [
						{
							"index": 0,
							"isId": false,
							"relationType": 1,
							"propertyRef": {
								"index": 3
							},
							"relationTableIndex": 9,
							"sinceVersion": 1
						}
					],
					"sinceVersion": 1,
					"tableConfig": {
						"name": "FACTORS"
					}
				},
				{
					"columns": [
						{
							"index": 0,
							"isGenerated": true,
							"manyRelationColumnRefs": [],
							"name": "POSITION_ID",
							"notNull": false,
							"propertyRefs": [
								{
									"index": 0
								}
							],
							"sinceVersion": 1,
							"type": 4
						},
						{
							"index": 1,
							"isGenerated": false,
							"manyRelationColumnRefs": [],
							"name": "POSITION_DESCRIPTION",
							"notNull": true,
							"propertyRefs": [
								{
									"index": 1
								}
							],
							"sinceVersion": 1,
							"type": 5
						},
						{
							"index": 2,
							"manyRelationColumnRefs": [
								{
									"manyRelationIndex": 0,
									"oneSchemaIndex": null,
									"oneTableIndex": 10,
									"oneColumnIndex": 0,
									"sinceVersion": 1
								}
							],
							"name": "PARENT_POSITION_ID",
							"notNull": false,
							"propertyRefs": [
								{
									"index": 2
								}
							],
							"sinceVersion": 1,
							"type": 4
						}
					],
					"idColumnRefs": [],
					"index": 10,
					"isLocal": true,
					"isRepositoryEntity": false,
					"name": "Position",
					"properties": [
						{
							"columnRef": {
								"index": 0
							},
							"index": 0,
							"isId": false,
							"name": "id",
							"sinceVersion": 1
						},
						{
							"columnRef": {
								"index": 1
							},
							"index": 1,
							"isId": false,
							"name": "name",
							"sinceVersion": 1
						},
						{
							"index": 2,
							"isId": false,
							"name": "parent",
							"relationRef": {
								"index": 0
							},
							"sinceVersion": 1
						}
					],
					"relations": [
						{
							"index": 0,
							"isId": false,
							"relationType": 1,
							"propertyRef": {
								"index": 2
							},
							"relationTableIndex": 10,
							"sinceVersion": 1
						}
					],
					"sinceVersion": 1,
					"tableConfig": {
						"name": "POSITIONS"
					}
				},
				{
					"columns": [
						{
							"index": 0,
							"isGenerated": true,
							"manyRelationColumnRefs": [],
							"name": "FACTOR_POSITION_ID",
							"notNull": false,
							"propertyRefs": [
								{
									"index": 0
								}
							],
							"sinceVersion": 1,
							"type": 4
						},
						{
							"index": 1,
							"manyRelationColumnRefs": [
								{
									"manyRelationIndex": 0,
									"oneSchemaIndex": null,
									"oneTableIndex": 9,
									"oneColumnIndex": 0,
									"sinceVersion": 1
								}
							],
							"name": "FACTOR_ID",
							"notNull": false,
							"propertyRefs": [
								{
									"index": 1
								}
							],
							"sinceVersion": 1,
							"type": 4
						},
						{
							"index": 2,
							"manyRelationColumnRefs": [
								{
									"manyRelationIndex": 1,
									"oneSchemaIndex": null,
									"oneTableIndex": 10,
									"oneColumnIndex": 0,
									"sinceVersion": 1
								}
							],
							"name": "POSITION_ID",
							"notNull": false,
							"propertyRefs": [
								{
									"index": 2
								}
							],
							"sinceVersion": 1,
							"type": 4
						}
					],
					"idColumnRefs": [],
					"index": 11,
					"isLocal": true,
					"isRepositoryEntity": false,
					"name": "FactorPosition",
					"properties": [
						{
							"columnRef": {
								"index": 0
							},
							"index": 0,
							"isId": false,
							"name": "id",
							"sinceVersion": 1
						},
						{
							"index": 1,
							"isId": false,
							"name": "factor",
							"relationRef": {
								"index": 0
							},
							"sinceVersion": 1
						},
						{
							"index": 2,
							"isId": false,
							"name": "position",
							"relationRef": {
								"index": 1
							},
							"sinceVersion": 1
						}
					],
					"relations": [
						{
							"index": 0,
							"isId": false,
							"relationType": 1,
							"propertyRef": {
								"index": 1
							},
							"relationTableIndex": 9,
							"sinceVersion": 1
						},
						{
							"index": 1,
							"isId": false,
							"relationType": 1,
							"propertyRef": {
								"index": 2
							},
							"relationTableIndex": 10,
							"sinceVersion": 1
						}
					],
					"sinceVersion": 1,
					"tableConfig": {
						"name": "FACTOR_POSITIONS"
					}
				},
				{
					"columns": [
						{
							"index": 0,
							"isGenerated": true,
							"manyRelationColumnRefs": [],
							"name": "POLL_FACTOR_POSITION_ID",
							"notNull": false,
							"propertyRefs": [
								{
									"index": 0
								}
							],
							"sinceVersion": 1,
							"type": 4
						},
						{
							"index": 1,
							"isGenerated": false,
							"manyRelationColumnRefs": [],
							"name": "FACTOR_COORDINATE_AXIS",
							"notNull": true,
							"propertyRefs": [
								{
									"index": 1
								}
							],
							"sinceVersion": 1,
							"type": 5
						},
						{
							"index": 2,
							"isGenerated": false,
							"manyRelationColumnRefs": [],
							"name": "COLOR_ID",
							"notNull": true,
							"propertyRefs": [
								{
									"index": 2
								}
							],
							"sinceVersion": 1,
							"type": 4
						},
						{
							"index": 3,
							"isGenerated": false,
							"manyRelationColumnRefs": [],
							"name": "POSITION_ORIENTATION",
							"notNull": true,
							"propertyRefs": [
								{
									"index": 3
								}
							],
							"sinceVersion": 1,
							"type": 4
						},
						{
							"index": 4,
							"manyRelationColumnRefs": [
								{
									"manyRelationIndex": 0,
									"oneSchemaIndex": null,
									"oneTableIndex": 11,
									"oneColumnIndex": 0,
									"sinceVersion": 1
								}
							],
							"name": "FACTOR_POSITION_ID",
							"notNull": true,
							"propertyRefs": [
								{
									"index": 4
								}
							],
							"sinceVersion": 1,
							"type": 4
						},
						{
							"index": 5,
							"manyRelationColumnRefs": [
								{
									"manyRelationIndex": 1,
									"oneSchemaIndex": null,
									"oneTableIndex": 15,
									"oneRelationIndex": 6,
									"oneColumnIndex": 0,
									"sinceVersion": 1
								}
							],
							"name": "POLL_ID",
							"notNull": true,
							"propertyRefs": [
								{
									"index": 5
								}
							],
							"sinceVersion": 1,
							"type": 4
						}
					],
					"idColumnRefs": [],
					"index": 12,
					"isLocal": true,
					"isRepositoryEntity": false,
					"name": "PollFactorPosition",
					"properties": [
						{
							"columnRef": {
								"index": 0
							},
							"index": 0,
							"isId": false,
							"name": "id",
							"sinceVersion": 1
						},
						{
							"columnRef": {
								"index": 1
							},
							"index": 1,
							"isId": false,
							"name": "axis",
							"sinceVersion": 1
						},
						{
							"columnRef": {
								"index": 2
							},
							"index": 2,
							"isId": false,
							"name": "color",
							"sinceVersion": 1
						},
						{
							"columnRef": {
								"index": 3
							},
							"index": 3,
							"isId": false,
							"name": "dir",
							"sinceVersion": 1
						},
						{
							"index": 4,
							"isId": false,
							"name": "factorPosition",
							"relationRef": {
								"index": 0
							},
							"sinceVersion": 1
						},
						{
							"index": 5,
							"isId": false,
							"name": "poll",
							"relationRef": {
								"index": 1
							},
							"sinceVersion": 1
						}
					],
					"relations": [
						{
							"index": 0,
							"isId": false,
							"relationType": 1,
							"propertyRef": {
								"index": 4
							},
							"relationTableIndex": 11,
							"sinceVersion": 1
						},
						{
							"index": 1,
							"isId": false,
							"relationType": 1,
							"propertyRef": {
								"index": 5
							},
							"relationTableIndex": 15,
							"sinceVersion": 1
						}
					],
					"sinceVersion": 1,
					"tableConfig": {
						"name": "POLL_FACTOR_POSITIONS"
					}
				},
				{
					"columns": [
						{
							"index": 0,
							"isGenerated": true,
							"manyRelationColumnRefs": [],
							"name": "LABEL_ID",
							"notNull": false,
							"propertyRefs": [
								{
									"index": 0
								}
							],
							"sinceVersion": 1,
							"type": 4
						},
						{
							"index": 1,
							"isGenerated": false,
							"manyRelationColumnRefs": [],
							"name": "NAME",
							"notNull": true,
							"propertyRefs": [
								{
									"index": 1
								}
							],
							"sinceVersion": 1,
							"type": 5
						}
					],
					"idColumnRefs": [],
					"index": 13,
					"isLocal": true,
					"isRepositoryEntity": false,
					"name": "Label",
					"properties": [
						{
							"columnRef": {
								"index": 0
							},
							"index": 0,
							"isId": false,
							"name": "id",
							"sinceVersion": 1
						},
						{
							"columnRef": {
								"index": 1
							},
							"index": 1,
							"isId": false,
							"name": "name",
							"sinceVersion": 1
						}
					],
					"relations": [],
					"sinceVersion": 1,
					"tableConfig": {
						"name": "LABELS"
					}
				},
				{
					"columns": [
						{
							"index": 0,
							"isGenerated": true,
							"manyRelationColumnRefs": [],
							"name": "POLL_LABEL_ID",
							"notNull": false,
							"propertyRefs": [
								{
									"index": 0
								}
							],
							"sinceVersion": 1,
							"type": 4
						},
						{
							"index": 1,
							"manyRelationColumnRefs": [
								{
									"manyRelationIndex": 0,
									"oneSchemaIndex": null,
									"oneTableIndex": 13,
									"oneColumnIndex": 0,
									"sinceVersion": 1
								}
							],
							"name": "LABEL_ID",
							"notNull": true,
							"propertyRefs": [
								{
									"index": 1
								}
							],
							"sinceVersion": 1,
							"type": 4
						},
						{
							"index": 2,
							"manyRelationColumnRefs": [
								{
									"manyRelationIndex": 1,
									"oneSchemaIndex": null,
									"oneTableIndex": 15,
									"oneRelationIndex": 5,
									"oneColumnIndex": 0,
									"sinceVersion": 1
								}
							],
							"name": "POLL_ID",
							"notNull": true,
							"propertyRefs": [
								{
									"index": 2
								}
							],
							"sinceVersion": 1,
							"type": 4
						}
					],
					"idColumnRefs": [],
					"index": 14,
					"isLocal": true,
					"isRepositoryEntity": false,
					"name": "PollLabel",
					"properties": [
						{
							"columnRef": {
								"index": 0
							},
							"index": 0,
							"isId": false,
							"name": "id",
							"sinceVersion": 1
						},
						{
							"index": 1,
							"isId": false,
							"name": "label",
							"relationRef": {
								"index": 0
							},
							"sinceVersion": 1
						},
						{
							"index": 2,
							"isId": false,
							"name": "poll",
							"relationRef": {
								"index": 1
							},
							"sinceVersion": 1
						}
					],
					"relations": [
						{
							"index": 0,
							"isId": false,
							"relationType": 1,
							"propertyRef": {
								"index": 1
							},
							"relationTableIndex": 13,
							"sinceVersion": 1
						},
						{
							"index": 1,
							"isId": false,
							"relationType": 1,
							"propertyRef": {
								"index": 2
							},
							"relationTableIndex": 15,
							"sinceVersion": 1
						}
					],
					"sinceVersion": 1,
					"tableConfig": {
						"name": "POLL_LABELS"
					}
				},
				{
					"columns": [
						{
							"index": 0,
							"isGenerated": true,
							"manyRelationColumnRefs": [],
							"name": "POLL_ID",
							"notNull": false,
							"propertyRefs": [
								{
									"index": 0
								}
							],
							"sinceVersion": 1,
							"type": 4
						},
						{
							"index": 1,
							"isGenerated": false,
							"manyRelationColumnRefs": [],
							"name": "END_DATE",
							"notNull": true,
							"propertyRefs": [
								{
									"index": 1
								}
							],
							"sinceVersion": 1,
							"type": 2
						},
						{
							"index": 2,
							"isGenerated": false,
							"manyRelationColumnRefs": [],
							"name": "START_DATE",
							"notNull": true,
							"propertyRefs": [
								{
									"index": 2
								}
							],
							"sinceVersion": 1,
							"type": 2
						},
						{
							"index": 3,
							"isGenerated": false,
							"manyRelationColumnRefs": [],
							"name": "POLL_DESCRIPTION",
							"notNull": true,
							"propertyRefs": [
								{
									"index": 3
								}
							],
							"sinceVersion": 1,
							"type": 4
						},
						{
							"index": 4,
							"manyRelationColumnRefs": [
								{
									"manyRelationIndex": 0,
									"oneSchemaIndex": null,
									"oneTableIndex": 15,
									"oneRelationIndex": 2,
									"oneColumnIndex": 0,
									"sinceVersion": 1
								}
							],
							"name": "PARENT_POLL_ID",
							"notNull": false,
							"propertyRefs": [
								{
									"index": 4
								}
							],
							"sinceVersion": 1,
							"type": 4
						},
						{
							"index": 5,
							"manyRelationColumnRefs": [
								{
									"manyRelationIndex": 1,
									"oneSchemaIndex": null,
									"oneTableIndex": 8,
									"oneColumnIndex": 0,
									"sinceVersion": 1
								}
							],
							"name": "THEME_ID",
							"notNull": true,
							"propertyRefs": [
								{
									"index": 5
								}
							],
							"sinceVersion": 1,
							"type": 4
						}
					],
					"idColumnRefs": [],
					"index": 15,
					"isLocal": true,
					"isRepositoryEntity": false,
					"name": "Poll",
					"properties": [
						{
							"columnRef": {
								"index": 0
							},
							"index": 0,
							"isId": false,
							"name": "id",
							"sinceVersion": 1
						},
						{
							"columnRef": {
								"index": 1
							},
							"index": 1,
							"isId": false,
							"name": "endDate",
							"sinceVersion": 1
						},
						{
							"columnRef": {
								"index": 2
							},
							"index": 2,
							"isId": false,
							"name": "startDate",
							"sinceVersion": 1
						},
						{
							"columnRef": {
								"index": 3
							},
							"index": 3,
							"isId": false,
							"name": "name",
							"sinceVersion": 1
						},
						{
							"index": 4,
							"isId": false,
							"name": "parentPoll",
							"relationRef": {
								"index": 0
							},
							"sinceVersion": 1
						},
						{
							"index": 5,
							"isId": false,
							"name": "theme",
							"relationRef": {
								"index": 1
							},
							"sinceVersion": 1
						},
						{
							"index": 6,
							"isId": false,
							"name": "childPolls",
							"relationRef": {
								"index": 2
							},
							"sinceVersion": 1
						},
						{
							"index": 7,
							"isId": false,
							"name": "pollContinents",
							"relationRef": {
								"index": 3
							},
							"sinceVersion": 1
						},
						{
							"index": 8,
							"isId": false,
							"name": "pollCountries",
							"relationRef": {
								"index": 4
							},
							"sinceVersion": 1
						},
						{
							"index": 9,
							"isId": false,
							"name": "pollLabels",
							"relationRef": {
								"index": 5
							},
							"sinceVersion": 1
						},
						{
							"index": 10,
							"isId": false,
							"name": "pollFactorPositions",
							"relationRef": {
								"index": 6
							},
							"sinceVersion": 1
						},
						{
							"index": 11,
							"isId": false,
							"name": "pollStates",
							"relationRef": {
								"index": 7
							},
							"sinceVersion": 1
						},
						{
							"index": 12,
							"isId": false,
							"name": "pollTowns",
							"relationRef": {
								"index": 8
							},
							"sinceVersion": 1
						}
					],
					"relations": [
						{
							"index": 0,
							"isId": false,
							"relationType": 1,
							"propertyRef": {
								"index": 4
							},
							"relationTableIndex": 15,
							"sinceVersion": 1
						},
						{
							"index": 1,
							"isId": false,
							"relationType": 1,
							"propertyRef": {
								"index": 5
							},
							"relationTableIndex": 8,
							"sinceVersion": 1
						},
						{
							"index": 2,
							"isId": false,
							"oneToManyElems": {
								"mappedBy": "parentPoll"
							},
							"relationType": 0,
							"propertyRef": {
								"index": 6
							},
							"relationTableIndex": 15,
							"sinceVersion": 1
						},
						{
							"index": 3,
							"isId": false,
							"oneToManyElems": {
								"cascade": 1,
								"mappedBy": "poll"
							},
							"relationType": 0,
							"propertyRef": {
								"index": 7
							},
							"relationTableIndex": 16,
							"sinceVersion": 1
						},
						{
							"index": 4,
							"isId": false,
							"oneToManyElems": {
								"cascade": 1,
								"mappedBy": "poll"
							},
							"relationType": 0,
							"propertyRef": {
								"index": 8
							},
							"relationTableIndex": 5,
							"sinceVersion": 1
						},
						{
							"index": 5,
							"isId": false,
							"oneToManyElems": {
								"cascade": 1,
								"mappedBy": "poll"
							},
							"relationType": 0,
							"propertyRef": {
								"index": 9
							},
							"relationTableIndex": 14,
							"sinceVersion": 1
						},
						{
							"index": 6,
							"isId": false,
							"oneToManyElems": {
								"cascade": 1,
								"mappedBy": "poll"
							},
							"relationType": 0,
							"propertyRef": {
								"index": 10
							},
							"relationTableIndex": 12,
							"sinceVersion": 1
						},
						{
							"index": 7,
							"isId": false,
							"oneToManyElems": {
								"cascade": 1,
								"mappedBy": "poll"
							},
							"relationType": 0,
							"propertyRef": {
								"index": 11
							},
							"relationTableIndex": 6,
							"sinceVersion": 1
						},
						{
							"index": 8,
							"isId": false,
							"oneToManyElems": {
								"cascade": 1,
								"mappedBy": "poll"
							},
							"relationType": 0,
							"propertyRef": {
								"index": 12
							},
							"relationTableIndex": 7,
							"sinceVersion": 1
						}
					],
					"sinceVersion": 1,
					"tableConfig": {
						"name": "POLLS"
					}
				},
				{
					"columns": [
						{
							"index": 0,
							"isGenerated": true,
							"manyRelationColumnRefs": [],
							"name": "POLL_CONTINENT_ID",
							"notNull": false,
							"propertyRefs": [
								{
									"index": 0
								}
							],
							"sinceVersion": 1,
							"type": 4
						},
						{
							"index": 1,
							"manyRelationColumnRefs": [
								{
									"manyRelationIndex": 0,
									"oneSchemaIndex": null,
									"oneTableIndex": 3,
									"oneColumnIndex": 0,
									"sinceVersion": 1
								}
							],
							"name": "CONTINENT_ID",
							"notNull": true,
							"propertyRefs": [
								{
									"index": 1
								}
							],
							"sinceVersion": 1,
							"type": 4
						},
						{
							"index": 2,
							"manyRelationColumnRefs": [
								{
									"manyRelationIndex": 1,
									"oneSchemaIndex": null,
									"oneTableIndex": 15,
									"oneRelationIndex": 3,
									"oneColumnIndex": 0,
									"sinceVersion": 1
								}
							],
							"name": "POLL_ID",
							"notNull": true,
							"propertyRefs": [
								{
									"index": 2
								}
							],
							"sinceVersion": 1,
							"type": 4
						}
					],
					"idColumnRefs": [],
					"index": 16,
					"isLocal": true,
					"isRepositoryEntity": false,
					"name": "PollContinent",
					"properties": [
						{
							"columnRef": {
								"index": 0
							},
							"index": 0,
							"isId": false,
							"name": "id",
							"sinceVersion": 1
						},
						{
							"index": 1,
							"isId": false,
							"name": "continent",
							"relationRef": {
								"index": 0
							},
							"sinceVersion": 1
						},
						{
							"index": 2,
							"isId": false,
							"name": "poll",
							"relationRef": {
								"index": 1
							},
							"sinceVersion": 1
						}
					],
					"relations": [
						{
							"index": 0,
							"isId": false,
							"relationType": 1,
							"propertyRef": {
								"index": 1
							},
							"relationTableIndex": 3,
							"sinceVersion": 1
						},
						{
							"index": 1,
							"isId": false,
							"relationType": 1,
							"propertyRef": {
								"index": 2
							},
							"relationTableIndex": 15,
							"sinceVersion": 1
						}
					],
					"sinceVersion": 1,
					"tableConfig": {
						"name": "POLL_CONTINENTS"
					}
				},
				{
					"columns": [
						{
							"index": 0,
							"isGenerated": true,
							"manyRelationColumnRefs": [],
							"name": "POLL_COUNTY_ID",
							"notNull": false,
							"propertyRefs": [
								{
									"index": 0
								}
							],
							"sinceVersion": 1,
							"type": 4
						},
						{
							"index": 1,
							"manyRelationColumnRefs": [
								{
									"manyRelationIndex": 0,
									"oneSchemaIndex": null,
									"oneTableIndex": 4,
									"oneColumnIndex": 0,
									"sinceVersion": 1
								}
							],
							"name": "COUNTY_ID",
							"notNull": true,
							"propertyRefs": [
								{
									"index": 1
								}
							],
							"sinceVersion": 1,
							"type": 4
						},
						{
							"index": 2,
							"manyRelationColumnRefs": [
								{
									"manyRelationIndex": 1,
									"oneSchemaIndex": null,
									"oneTableIndex": 15,
									"oneColumnIndex": 0,
									"sinceVersion": 1
								}
							],
							"name": "POLL_ID",
							"notNull": true,
							"propertyRefs": [
								{
									"index": 2
								}
							],
							"sinceVersion": 1,
							"type": 4
						}
					],
					"idColumnRefs": [],
					"index": 17,
					"isLocal": true,
					"isRepositoryEntity": false,
					"name": "PollCounty",
					"properties": [
						{
							"columnRef": {
								"index": 0
							},
							"index": 0,
							"isId": false,
							"name": "id",
							"sinceVersion": 1
						},
						{
							"index": 1,
							"isId": false,
							"name": "country",
							"relationRef": {
								"index": 0
							},
							"sinceVersion": 1
						},
						{
							"index": 2,
							"isId": false,
							"name": "poll",
							"relationRef": {
								"index": 1
							},
							"sinceVersion": 1
						}
					],
					"relations": [
						{
							"index": 0,
							"isId": false,
							"relationType": 1,
							"propertyRef": {
								"index": 1
							},
							"relationTableIndex": 4,
							"sinceVersion": 1
						},
						{
							"index": 1,
							"isId": false,
							"relationType": 1,
							"propertyRef": {
								"index": 2
							},
							"relationTableIndex": 15,
							"sinceVersion": 1
						}
					],
					"sinceVersion": 1,
					"tableConfig": {
						"name": "POLL_COUNTIES"
					}
				}
			],
			"integerVersion": 1,
			"referencedSchemas": [],
			"versionString": "1.0.0"
		}
	]
};