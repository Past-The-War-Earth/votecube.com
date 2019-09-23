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
							"isGenerated": false,
							"manyRelationColumnRefs": [],
							"name": "CREATED_AT",
							"notNull": false,
							"propertyRefs": [
								{
									"index": 0
								}
							],
							"sinceVersion": 1,
							"type": 2
						},
						{
							"index": 1,
							"isGenerated": true,
							"manyRelationColumnRefs": [],
							"name": "DESIGN_PATTERN_ID",
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
							"isGenerated": false,
							"manyRelationColumnRefs": [],
							"name": "DESIGN_PATTERN_NAME",
							"notNull": false,
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
							"isGenerated": false,
							"manyRelationColumnRefs": [],
							"name": "DESIGN_PATTERN_CSS_CLASS",
							"notNull": false,
							"propertyRefs": [
								{
									"index": 3
								}
							],
							"sinceVersion": 1,
							"type": 5
						}
					],
					"idColumnRefs": [
						{
							"index": 1
						}
					],
					"index": 0,
					"isLocal": true,
					"isRepositoryEntity": false,
					"name": "DesignPattern",
					"properties": [
						{
							"columnRef": {
								"index": 0
							},
							"index": 0,
							"isId": false,
							"name": "createdAt",
							"sinceVersion": 1
						},
						{
							"columnRef": {
								"index": 1
							},
							"index": 1,
							"isId": true,
							"name": "id",
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
							"columnRef": {
								"index": 3
							},
							"index": 3,
							"isId": false,
							"name": "cssClass",
							"sinceVersion": 1
						}
					],
					"relations": [],
					"sinceVersion": 1,
					"tableConfig": {
						"name": "DESIGN_PATTERNS",
						"indexes": []
					}
				},
				{
					"columns": [
						{
							"index": 0,
							"isGenerated": false,
							"manyRelationColumnRefs": [],
							"name": "CREATED_AT",
							"notNull": false,
							"propertyRefs": [
								{
									"index": 0
								}
							],
							"sinceVersion": 1,
							"type": 2
						},
						{
							"index": 1,
							"isGenerated": true,
							"manyRelationColumnRefs": [],
							"name": "EMOJI_ID",
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
							"isGenerated": false,
							"manyRelationColumnRefs": [],
							"name": "EMOJI_NAME",
							"notNull": false,
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
							"isGenerated": false,
							"manyRelationColumnRefs": [],
							"name": "EMOJI_CSS_CLASS",
							"notNull": false,
							"propertyRefs": [
								{
									"index": 3
								}
							],
							"sinceVersion": 1,
							"type": 5
						}
					],
					"idColumnRefs": [
						{
							"index": 1
						}
					],
					"index": 1,
					"isLocal": true,
					"isRepositoryEntity": false,
					"name": "Emoji",
					"properties": [
						{
							"columnRef": {
								"index": 0
							},
							"index": 0,
							"isId": false,
							"name": "createdAt",
							"sinceVersion": 1
						},
						{
							"columnRef": {
								"index": 1
							},
							"index": 1,
							"isId": true,
							"name": "id",
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
							"columnRef": {
								"index": 3
							},
							"index": 3,
							"isId": false,
							"name": "cssClass",
							"sinceVersion": 1
						}
					],
					"relations": [],
					"sinceVersion": 1,
					"tableConfig": {
						"name": "EMOJI",
						"indexes": []
					}
				},
				{
					"columns": [
						{
							"index": 0,
							"isGenerated": false,
							"manyRelationColumnRefs": [],
							"name": "CREATED_AT",
							"notNull": false,
							"propertyRefs": [
								{
									"index": 0
								}
							],
							"sinceVersion": 1,
							"type": 2
						},
						{
							"index": 1,
							"isGenerated": true,
							"manyRelationColumnRefs": [],
							"name": "APPLICATION_ID",
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
							"isGenerated": false,
							"manyRelationColumnRefs": [],
							"name": "HOST",
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
							"isGenerated": false,
							"manyRelationColumnRefs": [],
							"name": "PORT",
							"notNull": true,
							"propertyRefs": [
								{
									"index": 3
								}
							],
							"sinceVersion": 1,
							"type": 4
						}
					],
					"idColumnRefs": [
						{
							"index": 1
						}
					],
					"index": 2,
					"isLocal": true,
					"isRepositoryEntity": false,
					"name": "Application",
					"properties": [
						{
							"columnRef": {
								"index": 0
							},
							"index": 0,
							"isId": false,
							"name": "createdAt",
							"sinceVersion": 1
						},
						{
							"columnRef": {
								"index": 1
							},
							"index": 1,
							"isId": true,
							"name": "id",
							"sinceVersion": 1
						},
						{
							"columnRef": {
								"index": 2
							},
							"index": 2,
							"isId": false,
							"name": "host",
							"sinceVersion": 1
						},
						{
							"columnRef": {
								"index": 3
							},
							"index": 3,
							"isId": false,
							"name": "port",
							"sinceVersion": 1
						}
					],
					"relations": [],
					"sinceVersion": 1,
					"tableConfig": {
						"name": "APPLICATIONS",
						"indexes": []
					}
				},
				{
					"columns": [
						{
							"index": 0,
							"isGenerated": false,
							"manyRelationColumnRefs": [],
							"name": "CREATED_AT",
							"notNull": false,
							"propertyRefs": [
								{
									"index": 0
								}
							],
							"sinceVersion": 1,
							"type": 2
						},
						{
							"index": 1,
							"isGenerated": true,
							"manyRelationColumnRefs": [],
							"name": "DEVICE_ID",
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
							"isGenerated": false,
							"manyRelationColumnRefs": [],
							"name": "DEVICE_HASH",
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
					"idColumnRefs": [
						{
							"index": 1
						}
					],
					"index": 3,
					"isLocal": true,
					"isRepositoryEntity": false,
					"name": "Device",
					"properties": [
						{
							"columnRef": {
								"index": 0
							},
							"index": 0,
							"isId": false,
							"name": "createdAt",
							"sinceVersion": 1
						},
						{
							"columnRef": {
								"index": 1
							},
							"index": 1,
							"isId": true,
							"name": "id",
							"sinceVersion": 1
						},
						{
							"columnRef": {
								"index": 2
							},
							"index": 2,
							"isId": false,
							"name": "hash",
							"sinceVersion": 1
						}
					],
					"relations": [],
					"sinceVersion": 1,
					"tableConfig": {
						"name": "DEVICES",
						"indexes": []
					}
				},
				{
					"columns": [
						{
							"index": 0,
							"isGenerated": false,
							"manyRelationColumnRefs": [],
							"name": "CREATED_AT",
							"notNull": false,
							"propertyRefs": [
								{
									"index": 0
								}
							],
							"sinceVersion": 1,
							"type": 2
						},
						{
							"index": 1,
							"isGenerated": true,
							"manyRelationColumnRefs": [],
							"name": "USER_ACCOUNT_ID",
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
							"isGenerated": false,
							"manyRelationColumnRefs": [],
							"name": "USER_NAME",
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
							"isGenerated": false,
							"manyRelationColumnRefs": [],
							"name": "FIRST_NAME",
							"notNull": true,
							"propertyRefs": [
								{
									"index": 3
								}
							],
							"sinceVersion": 1,
							"type": 5
						},
						{
							"index": 4,
							"isGenerated": false,
							"manyRelationColumnRefs": [],
							"name": "MIDDLE_NAME",
							"notNull": false,
							"propertyRefs": [
								{
									"index": 4
								}
							],
							"sinceVersion": 1,
							"type": 5
						},
						{
							"index": 5,
							"isGenerated": false,
							"manyRelationColumnRefs": [],
							"name": "LAST_NAME",
							"notNull": true,
							"propertyRefs": [
								{
									"index": 5
								}
							],
							"sinceVersion": 1,
							"type": 5
						},
						{
							"index": 6,
							"isGenerated": false,
							"manyRelationColumnRefs": [],
							"name": "BIRTH_DATE",
							"notNull": false,
							"propertyRefs": [
								{
									"index": 6
								}
							],
							"sinceVersion": 1,
							"type": 2
						}
					],
					"idColumnRefs": [
						{
							"index": 1
						}
					],
					"index": 4,
					"isLocal": true,
					"isRepositoryEntity": false,
					"name": "UserAccount",
					"properties": [
						{
							"columnRef": {
								"index": 0
							},
							"index": 0,
							"isId": false,
							"name": "createdAt",
							"sinceVersion": 1
						},
						{
							"columnRef": {
								"index": 1
							},
							"index": 1,
							"isId": true,
							"name": "id",
							"sinceVersion": 1
						},
						{
							"columnRef": {
								"index": 2
							},
							"index": 2,
							"isId": false,
							"name": "userName",
							"sinceVersion": 1
						},
						{
							"columnRef": {
								"index": 3
							},
							"index": 3,
							"isId": false,
							"name": "firstName",
							"sinceVersion": 1
						},
						{
							"columnRef": {
								"index": 4
							},
							"index": 4,
							"isId": false,
							"name": "middleName",
							"sinceVersion": 1
						},
						{
							"columnRef": {
								"index": 5
							},
							"index": 5,
							"isId": false,
							"name": "lastName",
							"sinceVersion": 1
						},
						{
							"columnRef": {
								"index": 6
							},
							"index": 6,
							"isId": false,
							"name": "birthDate",
							"sinceVersion": 1
						}
					],
					"relations": [],
					"sinceVersion": 1,
					"tableConfig": {
						"name": "USER_ACCOUNTS",
						"indexes": []
					}
				},
				{
					"columns": [
						{
							"index": 0,
							"isGenerated": false,
							"manyRelationColumnRefs": [],
							"name": "CREATED_AT",
							"notNull": false,
							"propertyRefs": [
								{
									"index": 0
								}
							],
							"sinceVersion": 1,
							"type": 2
						},
						{
							"index": 1,
							"isGenerated": true,
							"manyRelationColumnRefs": [],
							"name": "ACTOR_ID",
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
							"isGenerated": false,
							"manyRelationColumnRefs": [],
							"name": "ACTOR_HASH",
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
							"manyRelationColumnRefs": [
								{
									"manyRelationIndex": 0,
									"oneSchemaIndex": null,
									"oneTableIndex": 4,
									"oneColumnIndex": 1,
									"sinceVersion": 1
								}
							],
							"name": "USER_ACCOUNT_ID",
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
							"isGenerated": false,
							"manyRelationColumnRefs": [
								{
									"manyRelationIndex": 1,
									"oneSchemaIndex": null,
									"oneTableIndex": 3,
									"oneColumnIndex": 1,
									"sinceVersion": 1
								}
							],
							"name": "DEVICE_ID",
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
							"isGenerated": false,
							"manyRelationColumnRefs": [
								{
									"manyRelationIndex": 2,
									"oneSchemaIndex": null,
									"oneTableIndex": 2,
									"oneColumnIndex": 1,
									"sinceVersion": 1
								}
							],
							"name": "APPLICATION_ID",
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
					"idColumnRefs": [
						{
							"index": 1
						}
					],
					"index": 5,
					"isLocal": true,
					"isRepositoryEntity": false,
					"name": "Actor",
					"properties": [
						{
							"columnRef": {
								"index": 0
							},
							"index": 0,
							"isId": false,
							"name": "createdAt",
							"sinceVersion": 1
						},
						{
							"columnRef": {
								"index": 1
							},
							"index": 1,
							"isId": true,
							"name": "id",
							"sinceVersion": 1
						},
						{
							"columnRef": {
								"index": 2
							},
							"index": 2,
							"isId": false,
							"name": "hash",
							"sinceVersion": 1
						},
						{
							"index": 3,
							"isId": false,
							"name": "userAccount",
							"relationRef": {
								"index": 0
							},
							"sinceVersion": 1
						},
						{
							"index": 4,
							"isId": false,
							"name": "device",
							"relationRef": {
								"index": 1
							},
							"sinceVersion": 1
						},
						{
							"index": 5,
							"isId": false,
							"name": "application",
							"relationRef": {
								"index": 2
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
							"relationTableIndex": 4,
							"sinceVersion": 1
						},
						{
							"index": 1,
							"isId": false,
							"relationType": 1,
							"propertyRef": {
								"index": 4
							},
							"relationTableIndex": 3,
							"sinceVersion": 1
						},
						{
							"index": 2,
							"isId": false,
							"relationType": 1,
							"propertyRef": {
								"index": 5
							},
							"relationTableIndex": 2,
							"sinceVersion": 1
						}
					],
					"sinceVersion": 1,
					"tableConfig": {
						"name": "ACTORS",
						"indexes": []
					}
				},
				{
					"columns": [
						{
							"index": 0,
							"isGenerated": false,
							"manyRelationColumnRefs": [],
							"name": "CREATED_AT",
							"notNull": false,
							"propertyRefs": [
								{
									"index": 0
								}
							],
							"sinceVersion": 1,
							"type": 2
						},
						{
							"index": 1,
							"isGenerated": true,
							"manyRelationColumnRefs": [],
							"name": "POLL_OPINION_COUNT_ID",
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
							"isGenerated": false,
							"manyRelationColumnRefs": [],
							"name": "COUNT",
							"notNull": false,
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
							"manyRelationColumnRefs": [
								{
									"manyRelationIndex": 0,
									"oneSchemaIndex": null,
									"oneTableIndex": 56,
									"oneRelationIndex": 11,
									"oneColumnIndex": 2,
									"sinceVersion": 1
								}
							],
							"name": "POLL_ID",
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
					"index": 6,
					"isLocal": true,
					"isRepositoryEntity": false,
					"name": "PollOpinionsCount",
					"properties": [
						{
							"columnRef": {
								"index": 0
							},
							"index": 0,
							"isId": false,
							"name": "createdAt",
							"sinceVersion": 1
						},
						{
							"columnRef": {
								"index": 1
							},
							"index": 1,
							"isId": false,
							"name": "id",
							"sinceVersion": 1
						},
						{
							"columnRef": {
								"index": 2
							},
							"index": 2,
							"isId": false,
							"name": "count",
							"sinceVersion": 1
						},
						{
							"index": 3,
							"isId": false,
							"name": "poll",
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
							"relationTableIndex": 56,
							"sinceVersion": 1
						}
					],
					"sinceVersion": 1,
					"tableConfig": {
						"name": "POLL_OPINIONS_COUNTS",
						"indexes": []
					}
				},
				{
					"columns": [
						{
							"index": 0,
							"isGenerated": false,
							"manyRelationColumnRefs": [],
							"name": "CREATED_AT",
							"notNull": false,
							"propertyRefs": [
								{
									"index": 0
								}
							],
							"sinceVersion": 1,
							"type": 2
						},
						{
							"index": 1,
							"isGenerated": true,
							"manyRelationColumnRefs": [],
							"name": "CONTINENT_ID",
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
							"isGenerated": false,
							"manyRelationColumnRefs": [],
							"name": "CONTINENT_NAME",
							"notNull": true,
							"propertyRefs": [
								{
									"index": 2
								}
							],
							"sinceVersion": 1,
							"type": 5
						}
					],
					"idColumnRefs": [
						{
							"index": 1
						}
					],
					"index": 7,
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
							"name": "createdAt",
							"sinceVersion": 1
						},
						{
							"columnRef": {
								"index": 1
							},
							"index": 1,
							"isId": true,
							"name": "id",
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
								"index": 3
							},
							"relationTableIndex": 14,
							"sinceVersion": 1
						}
					],
					"sinceVersion": 1,
					"tableConfig": {
						"name": "CONTINENTS",
						"indexes": []
					}
				},
				{
					"columns": [
						{
							"index": 0,
							"isGenerated": false,
							"manyRelationColumnRefs": [],
							"name": "CREATED_AT",
							"notNull": false,
							"propertyRefs": [
								{
									"index": 0
								}
							],
							"sinceVersion": 1,
							"type": 2
						},
						{
							"index": 1,
							"isGenerated": false,
							"manyRelationColumnRefs": [
								{
									"manyRelationIndex": 0,
									"oneSchemaIndex": null,
									"oneTableIndex": 11,
									"oneRelationIndex": 1,
									"oneColumnIndex": 1,
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
							"isGenerated": false,
							"manyRelationColumnRefs": [
								{
									"manyRelationIndex": 1,
									"oneSchemaIndex": null,
									"oneTableIndex": 12,
									"oneColumnIndex": 1,
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
					"idColumnRefs": [
						{
							"index": 1
						},
						{
							"index": 2
						}
					],
					"index": 8,
					"isLocal": true,
					"isRepositoryEntity": false,
					"name": "CountyTown",
					"properties": [
						{
							"columnRef": {
								"index": 0
							},
							"index": 0,
							"isId": false,
							"name": "createdAt",
							"sinceVersion": 1
						},
						{
							"index": 1,
							"isId": true,
							"name": "county",
							"relationRef": {
								"index": 0
							},
							"sinceVersion": 1
						},
						{
							"index": 2,
							"isId": true,
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
							"isId": true,
							"relationType": 1,
							"propertyRef": {
								"index": 1
							},
							"relationTableIndex": 11,
							"sinceVersion": 1
						},
						{
							"index": 1,
							"isId": true,
							"relationType": 1,
							"propertyRef": {
								"index": 2
							},
							"relationTableIndex": 12,
							"sinceVersion": 1
						}
					],
					"sinceVersion": 1,
					"tableConfig": {
						"name": "COUNTY_TOWNS",
						"indexes": []
					}
				},
				{
					"columns": [
						{
							"index": 0,
							"isGenerated": false,
							"manyRelationColumnRefs": [],
							"name": "CREATED_AT",
							"notNull": false,
							"propertyRefs": [
								{
									"index": 0
								}
							],
							"sinceVersion": 1,
							"type": 2
						},
						{
							"index": 1,
							"isGenerated": false,
							"manyRelationColumnRefs": [
								{
									"manyRelationIndex": 0,
									"oneSchemaIndex": null,
									"oneTableIndex": 10,
									"oneRelationIndex": 1,
									"oneColumnIndex": 1,
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
						},
						{
							"index": 2,
							"isGenerated": false,
							"manyRelationColumnRefs": [
								{
									"manyRelationIndex": 1,
									"oneSchemaIndex": null,
									"oneTableIndex": 12,
									"oneColumnIndex": 1,
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
					"idColumnRefs": [
						{
							"index": 1
						},
						{
							"index": 2
						}
					],
					"index": 9,
					"isLocal": true,
					"isRepositoryEntity": false,
					"name": "StateTown",
					"properties": [
						{
							"columnRef": {
								"index": 0
							},
							"index": 0,
							"isId": false,
							"name": "createdAt",
							"sinceVersion": 1
						},
						{
							"index": 1,
							"isId": true,
							"name": "state",
							"relationRef": {
								"index": 0
							},
							"sinceVersion": 1
						},
						{
							"index": 2,
							"isId": true,
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
							"isId": true,
							"relationType": 1,
							"propertyRef": {
								"index": 1
							},
							"relationTableIndex": 10,
							"sinceVersion": 1
						},
						{
							"index": 1,
							"isId": true,
							"relationType": 1,
							"propertyRef": {
								"index": 2
							},
							"relationTableIndex": 12,
							"sinceVersion": 1
						}
					],
					"sinceVersion": 1,
					"tableConfig": {
						"name": "STATE_TOWNS",
						"indexes": []
					}
				},
				{
					"columns": [
						{
							"index": 0,
							"isGenerated": false,
							"manyRelationColumnRefs": [],
							"name": "CREATED_AT",
							"notNull": false,
							"propertyRefs": [
								{
									"index": 0
								}
							],
							"sinceVersion": 1,
							"type": 2
						},
						{
							"index": 1,
							"isGenerated": true,
							"manyRelationColumnRefs": [],
							"name": "STATE_ID",
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
							"isGenerated": false,
							"manyRelationColumnRefs": [],
							"name": "STATE_NAME",
							"notNull": true,
							"propertyRefs": [
								{
									"index": 3
								}
							],
							"sinceVersion": 1,
							"type": 5
						},
						{
							"index": 3,
							"isGenerated": false,
							"manyRelationColumnRefs": [
								{
									"manyRelationIndex": 0,
									"oneSchemaIndex": null,
									"oneTableIndex": 14,
									"oneColumnIndex": 1,
									"sinceVersion": 1
								}
							],
							"name": "COUNTRY_ID",
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
					"idColumnRefs": [
						{
							"index": 1
						}
					],
					"index": 10,
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
							"name": "createdAt",
							"sinceVersion": 1
						},
						{
							"columnRef": {
								"index": 1
							},
							"index": 1,
							"isId": true,
							"name": "id",
							"sinceVersion": 1
						},
						{
							"index": 2,
							"isId": false,
							"name": "country",
							"relationRef": {
								"index": 0
							},
							"sinceVersion": 1
						},
						{
							"columnRef": {
								"index": 2
							},
							"index": 3,
							"isId": false,
							"name": "name",
							"sinceVersion": 1
						},
						{
							"index": 4,
							"isId": false,
							"name": "stateTowns",
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
								"index": 2
							},
							"relationTableIndex": 14,
							"sinceVersion": 1
						},
						{
							"index": 1,
							"isId": false,
							"oneToManyElems": {
								"mappedBy": "state"
							},
							"relationType": 0,
							"propertyRef": {
								"index": 4
							},
							"relationTableIndex": 9,
							"sinceVersion": 1
						}
					],
					"sinceVersion": 1,
					"tableConfig": {
						"name": "STATES",
						"indexes": []
					}
				},
				{
					"columns": [
						{
							"index": 0,
							"isGenerated": false,
							"manyRelationColumnRefs": [],
							"name": "CREATED_AT",
							"notNull": false,
							"propertyRefs": [
								{
									"index": 0
								}
							],
							"sinceVersion": 1,
							"type": 2
						},
						{
							"index": 1,
							"isGenerated": true,
							"manyRelationColumnRefs": [],
							"name": "COUNTY_ID",
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
							"isGenerated": false,
							"manyRelationColumnRefs": [],
							"name": "COUNTY_NAME",
							"notNull": true,
							"propertyRefs": [
								{
									"index": 3
								}
							],
							"sinceVersion": 1,
							"type": 5
						},
						{
							"index": 3,
							"isGenerated": false,
							"manyRelationColumnRefs": [
								{
									"manyRelationIndex": 0,
									"oneSchemaIndex": null,
									"oneTableIndex": 10,
									"oneColumnIndex": 1,
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
					"idColumnRefs": [
						{
							"index": 1
						}
					],
					"index": 11,
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
							"name": "createdAt",
							"sinceVersion": 1
						},
						{
							"columnRef": {
								"index": 1
							},
							"index": 1,
							"isId": true,
							"name": "id",
							"sinceVersion": 1
						},
						{
							"index": 2,
							"isId": false,
							"name": "state",
							"relationRef": {
								"index": 0
							},
							"sinceVersion": 1
						},
						{
							"columnRef": {
								"index": 2
							},
							"index": 3,
							"isId": false,
							"name": "name",
							"sinceVersion": 1
						},
						{
							"index": 4,
							"isId": false,
							"name": "countyTowns",
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
								"index": 2
							},
							"relationTableIndex": 10,
							"sinceVersion": 1
						},
						{
							"index": 1,
							"isId": false,
							"oneToManyElems": {
								"mappedBy": "county"
							},
							"relationType": 0,
							"propertyRef": {
								"index": 4
							},
							"relationTableIndex": 8,
							"sinceVersion": 1
						}
					],
					"sinceVersion": 1,
					"tableConfig": {
						"name": "COUNTIES",
						"indexes": []
					}
				},
				{
					"columns": [
						{
							"index": 0,
							"isGenerated": false,
							"manyRelationColumnRefs": [],
							"name": "CREATED_AT",
							"notNull": false,
							"propertyRefs": [
								{
									"index": 0
								}
							],
							"sinceVersion": 1,
							"type": 2
						},
						{
							"index": 1,
							"isGenerated": true,
							"manyRelationColumnRefs": [],
							"name": "TOWN_ID",
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
							"isGenerated": false,
							"manyRelationColumnRefs": [],
							"name": "TOWN_NAME",
							"notNull": true,
							"propertyRefs": [
								{
									"index": 3
								}
							],
							"sinceVersion": 1,
							"type": 5
						},
						{
							"index": 3,
							"isGenerated": false,
							"manyRelationColumnRefs": [
								{
									"manyRelationIndex": 0,
									"oneSchemaIndex": null,
									"oneTableIndex": 11,
									"oneColumnIndex": 1,
									"sinceVersion": 1
								}
							],
							"name": "COUNTY_ID",
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
					"idColumnRefs": [
						{
							"index": 1
						}
					],
					"index": 12,
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
							"name": "createdAt",
							"sinceVersion": 1
						},
						{
							"columnRef": {
								"index": 1
							},
							"index": 1,
							"isId": true,
							"name": "id",
							"sinceVersion": 1
						},
						{
							"index": 2,
							"isId": false,
							"name": "county",
							"relationRef": {
								"index": 0
							},
							"sinceVersion": 1
						},
						{
							"columnRef": {
								"index": 2
							},
							"index": 3,
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
								"index": 2
							},
							"relationTableIndex": 11,
							"sinceVersion": 1
						}
					],
					"sinceVersion": 1,
					"tableConfig": {
						"name": "TOWNS",
						"indexes": []
					}
				},
				{
					"columns": [
						{
							"index": 0,
							"isGenerated": false,
							"manyRelationColumnRefs": [],
							"name": "CREATED_AT",
							"notNull": false,
							"propertyRefs": [
								{
									"index": 0
								}
							],
							"sinceVersion": 1,
							"type": 2
						},
						{
							"index": 1,
							"isGenerated": false,
							"manyRelationColumnRefs": [
								{
									"manyRelationIndex": 0,
									"oneSchemaIndex": null,
									"oneTableIndex": 12,
									"oneColumnIndex": 1,
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
						},
						{
							"index": 2,
							"isGenerated": false,
							"manyRelationColumnRefs": [
								{
									"manyRelationIndex": 1,
									"oneSchemaIndex": null,
									"oneTableIndex": 14,
									"oneRelationIndex": 2,
									"oneColumnIndex": 1,
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
					"idColumnRefs": [
						{
							"index": 1
						}
					],
					"index": 13,
					"isLocal": true,
					"isRepositoryEntity": false,
					"name": "CountryTown",
					"properties": [
						{
							"columnRef": {
								"index": 0
							},
							"index": 0,
							"isId": false,
							"name": "createdAt",
							"sinceVersion": 1
						},
						{
							"index": 1,
							"isId": false,
							"name": "country",
							"relationRef": {
								"index": 1
							},
							"sinceVersion": 1
						},
						{
							"index": 2,
							"isId": true,
							"name": "town",
							"relationRef": {
								"index": 0
							},
							"sinceVersion": 1
						}
					],
					"relations": [
						{
							"index": 0,
							"isId": true,
							"relationType": 1,
							"propertyRef": {
								"index": 2
							},
							"relationTableIndex": 12,
							"sinceVersion": 1
						},
						{
							"index": 1,
							"isId": false,
							"relationType": 1,
							"propertyRef": {
								"index": 1
							},
							"relationTableIndex": 14,
							"sinceVersion": 1
						}
					],
					"sinceVersion": 1,
					"tableConfig": {
						"name": "COUNTRY_TOWNS",
						"indexes": []
					}
				},
				{
					"columns": [
						{
							"index": 0,
							"isGenerated": false,
							"manyRelationColumnRefs": [],
							"name": "CREATED_AT",
							"notNull": false,
							"propertyRefs": [
								{
									"index": 0
								}
							],
							"sinceVersion": 1,
							"type": 2
						},
						{
							"index": 1,
							"isGenerated": true,
							"manyRelationColumnRefs": [],
							"name": "COUNTRY_ID",
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
							"isGenerated": false,
							"manyRelationColumnRefs": [],
							"name": "COUNTRY_NAME",
							"notNull": true,
							"propertyRefs": [
								{
									"index": 3
								}
							],
							"sinceVersion": 1,
							"type": 5
						},
						{
							"index": 3,
							"isGenerated": false,
							"manyRelationColumnRefs": [
								{
									"manyRelationIndex": 0,
									"oneSchemaIndex": null,
									"oneTableIndex": 7,
									"oneColumnIndex": 1,
									"sinceVersion": 1
								}
							],
							"name": "CONTINENT_ID",
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
					"idColumnRefs": [
						{
							"index": 1
						}
					],
					"index": 14,
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
							"name": "createdAt",
							"sinceVersion": 1
						},
						{
							"columnRef": {
								"index": 1
							},
							"index": 1,
							"isId": true,
							"name": "id",
							"sinceVersion": 1
						},
						{
							"index": 2,
							"isId": false,
							"name": "continent",
							"relationRef": {
								"index": 0
							},
							"sinceVersion": 1
						},
						{
							"columnRef": {
								"index": 2
							},
							"index": 3,
							"isId": false,
							"name": "name",
							"sinceVersion": 1
						},
						{
							"index": 4,
							"isId": false,
							"name": "states",
							"relationRef": {
								"index": 1
							},
							"sinceVersion": 1
						},
						{
							"index": 5,
							"isId": false,
							"name": "countryTowns",
							"relationRef": {
								"index": 2
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
							"relationTableIndex": 7,
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
								"index": 4
							},
							"relationTableIndex": 10,
							"sinceVersion": 1
						},
						{
							"index": 2,
							"isId": false,
							"oneToManyElems": {
								"mappedBy": "country"
							},
							"relationType": 0,
							"propertyRef": {
								"index": 5
							},
							"relationTableIndex": 13,
							"sinceVersion": 1
						}
					],
					"sinceVersion": 1,
					"tableConfig": {
						"name": "COUNTRIES",
						"indexes": []
					}
				},
				{
					"columns": [
						{
							"index": 0,
							"isGenerated": false,
							"manyRelationColumnRefs": [],
							"name": "CREATED_AT",
							"notNull": false,
							"propertyRefs": [
								{
									"index": 0
								}
							],
							"sinceVersion": 1,
							"type": 2
						},
						{
							"index": 1,
							"isGenerated": true,
							"manyRelationColumnRefs": [],
							"name": "RATING_SETTING_ID",
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
							"isGenerated": false,
							"manyRelationColumnRefs": [],
							"name": "RATING_SETTING_KEY",
							"notNull": false,
							"propertyRefs": [
								{
									"index": 4
								}
							],
							"sinceVersion": 1,
							"type": 5
						},
						{
							"index": 3,
							"isGenerated": false,
							"manyRelationColumnRefs": [],
							"name": "RATING_SETTING_VALUE",
							"notNull": false,
							"propertyRefs": [
								{
									"index": 5
								}
							],
							"sinceVersion": 1,
							"type": 5
						},
						{
							"index": 4,
							"isGenerated": false,
							"manyRelationColumnRefs": [
								{
									"manyRelationIndex": 0,
									"oneSchemaIndex": null,
									"oneTableIndex": 14,
									"oneColumnIndex": 1,
									"sinceVersion": 1
								}
							],
							"name": "COUNTRY_ID",
							"notNull": false,
							"propertyRefs": [
								{
									"index": 2
								}
							],
							"sinceVersion": 1,
							"type": 4
						},
						{
							"index": 5,
							"isGenerated": false,
							"manyRelationColumnRefs": [
								{
									"manyRelationIndex": 1,
									"oneSchemaIndex": null,
									"oneTableIndex": 19,
									"oneRelationIndex": 1,
									"oneColumnIndex": 1,
									"sinceVersion": 1
								}
							],
							"name": "RATING_ID",
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
					"idColumnRefs": [
						{
							"index": 1
						}
					],
					"index": 15,
					"isLocal": true,
					"isRepositoryEntity": false,
					"name": "RatingSetting",
					"properties": [
						{
							"columnRef": {
								"index": 0
							},
							"index": 0,
							"isId": false,
							"name": "createdAt",
							"sinceVersion": 1
						},
						{
							"columnRef": {
								"index": 1
							},
							"index": 1,
							"isId": true,
							"name": "id",
							"sinceVersion": 1
						},
						{
							"index": 2,
							"isId": false,
							"name": "country",
							"relationRef": {
								"index": 0
							},
							"sinceVersion": 1
						},
						{
							"index": 3,
							"isId": false,
							"name": "rating",
							"relationRef": {
								"index": 1
							},
							"sinceVersion": 1
						},
						{
							"columnRef": {
								"index": 2
							},
							"index": 4,
							"isId": false,
							"name": "key",
							"sinceVersion": 1
						},
						{
							"columnRef": {
								"index": 3
							},
							"index": 5,
							"isId": false,
							"name": "value",
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
							"relationTableIndex": 14,
							"sinceVersion": 1
						},
						{
							"index": 1,
							"isId": false,
							"relationType": 1,
							"propertyRef": {
								"index": 3
							},
							"relationTableIndex": 19,
							"sinceVersion": 1
						}
					],
					"sinceVersion": 1,
					"tableConfig": {
						"name": "RATING_SETTINGS",
						"indexes": []
					}
				},
				{
					"columns": [
						{
							"index": 0,
							"isGenerated": true,
							"manyRelationColumnRefs": [],
							"name": "LANGUAGE_ID",
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
							"name": "LANGUAGE_NAME",
							"notNull": false,
							"propertyRefs": [
								{
									"index": 1
								}
							],
							"sinceVersion": 1,
							"type": 5
						}
					],
					"idColumnRefs": [
						{
							"index": 0
						}
					],
					"index": 16,
					"isLocal": true,
					"isRepositoryEntity": false,
					"name": "Language",
					"properties": [
						{
							"columnRef": {
								"index": 0
							},
							"index": 0,
							"isId": true,
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
						"name": "LANGUAGES",
						"indexes": []
					}
				},
				{
					"columns": [
						{
							"index": 0,
							"isGenerated": false,
							"manyRelationColumnRefs": [],
							"name": "CREATED_AT",
							"notNull": false,
							"propertyRefs": [
								{
									"index": 0
								}
							],
							"sinceVersion": 1,
							"type": 2
						},
						{
							"index": 1,
							"isGenerated": true,
							"manyRelationColumnRefs": [],
							"name": "RATING_TRANSLATION_ID",
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
							"isGenerated": false,
							"manyRelationColumnRefs": [],
							"name": "RATING_NAME",
							"notNull": true,
							"propertyRefs": [
								{
									"index": 4
								}
							],
							"sinceVersion": 1,
							"type": 5
						},
						{
							"index": 3,
							"isGenerated": false,
							"manyRelationColumnRefs": [],
							"name": "RATING_DESCRIPTION",
							"notNull": true,
							"propertyRefs": [
								{
									"index": 5
								}
							],
							"sinceVersion": 1,
							"type": 5
						},
						{
							"index": 4,
							"isGenerated": false,
							"manyRelationColumnRefs": [
								{
									"manyRelationIndex": 0,
									"oneSchemaIndex": null,
									"oneTableIndex": 19,
									"oneRelationIndex": 2,
									"oneColumnIndex": 1,
									"sinceVersion": 1
								}
							],
							"name": "RATING_ID",
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
							"index": 5,
							"isGenerated": false,
							"manyRelationColumnRefs": [
								{
									"manyRelationIndex": 1,
									"oneSchemaIndex": null,
									"oneTableIndex": 16,
									"oneColumnIndex": 0,
									"sinceVersion": 1
								}
							],
							"name": "LANGUAGE_ID",
							"notNull": true,
							"propertyRefs": [
								{
									"index": 3
								}
							],
							"sinceVersion": 1,
							"type": 4
						}
					],
					"idColumnRefs": [
						{
							"index": 1
						}
					],
					"index": 17,
					"isLocal": true,
					"isRepositoryEntity": false,
					"name": "RatingTranslation",
					"properties": [
						{
							"columnRef": {
								"index": 0
							},
							"index": 0,
							"isId": false,
							"name": "createdAt",
							"sinceVersion": 1
						},
						{
							"columnRef": {
								"index": 1
							},
							"index": 1,
							"isId": true,
							"name": "id",
							"sinceVersion": 1
						},
						{
							"index": 2,
							"isId": false,
							"name": "rating",
							"relationRef": {
								"index": 0
							},
							"sinceVersion": 1
						},
						{
							"index": 3,
							"isId": false,
							"name": "language",
							"relationRef": {
								"index": 1
							},
							"sinceVersion": 1
						},
						{
							"columnRef": {
								"index": 2
							},
							"index": 4,
							"isId": false,
							"name": "name",
							"sinceVersion": 1
						},
						{
							"columnRef": {
								"index": 3
							},
							"index": 5,
							"isId": false,
							"name": "description",
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
							"relationTableIndex": 19,
							"sinceVersion": 1
						},
						{
							"index": 1,
							"isId": false,
							"relationType": 1,
							"propertyRef": {
								"index": 3
							},
							"relationTableIndex": 16,
							"sinceVersion": 1
						}
					],
					"sinceVersion": 1,
					"tableConfig": {
						"name": "RATING_TRANSLATIONS",
						"indexes": []
					}
				},
				{
					"columns": [
						{
							"index": 0,
							"isGenerated": false,
							"manyRelationColumnRefs": [],
							"name": "CREATED_AT",
							"notNull": false,
							"propertyRefs": [
								{
									"index": 0
								}
							],
							"sinceVersion": 1,
							"type": 2
						},
						{
							"index": 1,
							"isGenerated": true,
							"manyRelationColumnRefs": [],
							"name": "RATING_TYPE_ID",
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
							"isGenerated": false,
							"manyRelationColumnRefs": [],
							"name": "RATING_TYPE_CODE",
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
							"isGenerated": false,
							"manyRelationColumnRefs": [],
							"name": "RATING_TYPE_DESCRIPTION",
							"notNull": true,
							"propertyRefs": [
								{
									"index": 3
								}
							],
							"sinceVersion": 1,
							"type": 5
						}
					],
					"idColumnRefs": [
						{
							"index": 1
						}
					],
					"index": 18,
					"isLocal": true,
					"isRepositoryEntity": false,
					"name": "RatingType",
					"properties": [
						{
							"columnRef": {
								"index": 0
							},
							"index": 0,
							"isId": false,
							"name": "createdAt",
							"sinceVersion": 1
						},
						{
							"columnRef": {
								"index": 1
							},
							"index": 1,
							"isId": true,
							"name": "id",
							"sinceVersion": 1
						},
						{
							"columnRef": {
								"index": 2
							},
							"index": 2,
							"isId": false,
							"name": "code",
							"sinceVersion": 1
						},
						{
							"columnRef": {
								"index": 3
							},
							"index": 3,
							"isId": false,
							"name": "description",
							"sinceVersion": 1
						}
					],
					"relations": [],
					"sinceVersion": 1,
					"tableConfig": {
						"name": "RATING_TYPES",
						"indexes": []
					}
				},
				{
					"columns": [
						{
							"index": 0,
							"isGenerated": false,
							"manyRelationColumnRefs": [],
							"name": "CREATED_AT",
							"notNull": false,
							"propertyRefs": [
								{
									"index": 0
								}
							],
							"sinceVersion": 1,
							"type": 2
						},
						{
							"index": 1,
							"isGenerated": true,
							"manyRelationColumnRefs": [],
							"name": "RATING_ID",
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
							"isGenerated": false,
							"manyRelationColumnRefs": [],
							"name": "RATING_CSS_CLASS",
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
							"isGenerated": false,
							"manyRelationColumnRefs": [
								{
									"manyRelationIndex": 0,
									"oneSchemaIndex": null,
									"oneTableIndex": 18,
									"oneColumnIndex": 1,
									"sinceVersion": 1
								}
							],
							"name": "RATING_TYPE_ID",
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
					"idColumnRefs": [
						{
							"index": 1
						}
					],
					"index": 19,
					"isLocal": true,
					"isRepositoryEntity": false,
					"name": "Rating",
					"properties": [
						{
							"columnRef": {
								"index": 0
							},
							"index": 0,
							"isId": false,
							"name": "createdAt",
							"sinceVersion": 1
						},
						{
							"columnRef": {
								"index": 1
							},
							"index": 1,
							"isId": true,
							"name": "id",
							"sinceVersion": 1
						},
						{
							"columnRef": {
								"index": 2
							},
							"index": 2,
							"isId": false,
							"name": "cssClass",
							"sinceVersion": 1
						},
						{
							"index": 3,
							"isId": false,
							"name": "type",
							"relationRef": {
								"index": 0
							},
							"sinceVersion": 1
						},
						{
							"index": 4,
							"isId": false,
							"name": "settings",
							"relationRef": {
								"index": 1
							},
							"sinceVersion": 1
						},
						{
							"index": 5,
							"isId": false,
							"name": "translations",
							"relationRef": {
								"index": 2
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
							"relationTableIndex": 18,
							"sinceVersion": 1
						},
						{
							"index": 1,
							"isId": false,
							"oneToManyElems": {
								"cascade": 1,
								"mappedBy": "rating"
							},
							"relationType": 0,
							"propertyRef": {
								"index": 4
							},
							"relationTableIndex": 15,
							"sinceVersion": 1
						},
						{
							"index": 2,
							"isId": false,
							"oneToManyElems": {
								"cascade": 1,
								"mappedBy": "rating"
							},
							"relationType": 0,
							"propertyRef": {
								"index": 5
							},
							"relationTableIndex": 17,
							"sinceVersion": 1
						}
					],
					"sinceVersion": 1,
					"tableConfig": {
						"name": "RATINGS",
						"indexes": []
					}
				},
				{
					"columns": [
						{
							"index": 0,
							"isGenerated": false,
							"manyRelationColumnRefs": [],
							"name": "CREATED_AT",
							"notNull": false,
							"propertyRefs": [
								{
									"index": 0
								}
							],
							"sinceVersion": 1,
							"type": 2
						},
						{
							"index": 1,
							"isGenerated": true,
							"manyRelationColumnRefs": [],
							"name": "POLL_OPINION_RATING_COUNT_ID",
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
							"isGenerated": false,
							"manyRelationColumnRefs": [],
							"name": "COUNT",
							"notNull": false,
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
							"manyRelationColumnRefs": [
								{
									"manyRelationIndex": 0,
									"oneSchemaIndex": null,
									"oneTableIndex": 56,
									"oneRelationIndex": 12,
									"oneColumnIndex": 2,
									"sinceVersion": 1
								}
							],
							"name": "POLL_ID",
							"notNull": false,
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
							"isGenerated": false,
							"manyRelationColumnRefs": [
								{
									"manyRelationIndex": 1,
									"oneSchemaIndex": null,
									"oneTableIndex": 19,
									"oneColumnIndex": 1,
									"sinceVersion": 1
								}
							],
							"name": "RATING_ID",
							"notNull": false,
							"propertyRefs": [
								{
									"index": 4
								}
							],
							"sinceVersion": 1,
							"type": 4
						}
					],
					"idColumnRefs": [],
					"index": 20,
					"isLocal": true,
					"isRepositoryEntity": false,
					"name": "PollOpinionsRatingCount",
					"properties": [
						{
							"columnRef": {
								"index": 0
							},
							"index": 0,
							"isId": false,
							"name": "createdAt",
							"sinceVersion": 1
						},
						{
							"columnRef": {
								"index": 1
							},
							"index": 1,
							"isId": false,
							"name": "id",
							"sinceVersion": 1
						},
						{
							"columnRef": {
								"index": 2
							},
							"index": 2,
							"isId": false,
							"name": "count",
							"sinceVersion": 1
						},
						{
							"index": 3,
							"isId": false,
							"name": "poll",
							"relationRef": {
								"index": 0
							},
							"sinceVersion": 1
						},
						{
							"index": 4,
							"isId": false,
							"name": "rating",
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
								"index": 3
							},
							"relationTableIndex": 56,
							"sinceVersion": 1
						},
						{
							"index": 1,
							"isId": false,
							"relationType": 1,
							"propertyRef": {
								"index": 4
							},
							"relationTableIndex": 19,
							"sinceVersion": 1
						}
					],
					"sinceVersion": 1,
					"tableConfig": {
						"name": "POLL_OPINIONS_RATING_COUNTS",
						"indexes": []
					}
				},
				{
					"columns": [
						{
							"index": 0,
							"isGenerated": false,
							"manyRelationColumnRefs": [],
							"name": "CREATED_AT",
							"notNull": false,
							"propertyRefs": [
								{
									"index": 0
								}
							],
							"sinceVersion": 1,
							"type": 2
						},
						{
							"index": 1,
							"isGenerated": true,
							"manyRelationColumnRefs": [],
							"name": "POLL_RATING_COUNT_ID",
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
							"isGenerated": false,
							"manyRelationColumnRefs": [],
							"name": "COUNT",
							"notNull": false,
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
							"manyRelationColumnRefs": [
								{
									"manyRelationIndex": 0,
									"oneSchemaIndex": null,
									"oneTableIndex": 56,
									"oneRelationIndex": 6,
									"oneColumnIndex": 2,
									"sinceVersion": 1
								}
							],
							"name": "POLL_ID",
							"notNull": false,
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
							"isGenerated": false,
							"manyRelationColumnRefs": [
								{
									"manyRelationIndex": 1,
									"oneSchemaIndex": null,
									"oneTableIndex": 19,
									"oneColumnIndex": 1,
									"sinceVersion": 1
								}
							],
							"name": "RATING_ID",
							"notNull": false,
							"propertyRefs": [
								{
									"index": 4
								}
							],
							"sinceVersion": 1,
							"type": 4
						}
					],
					"idColumnRefs": [
						{
							"index": 1
						}
					],
					"index": 21,
					"isLocal": true,
					"isRepositoryEntity": false,
					"name": "PollRatingCount",
					"properties": [
						{
							"columnRef": {
								"index": 0
							},
							"index": 0,
							"isId": false,
							"name": "createdAt",
							"sinceVersion": 1
						},
						{
							"columnRef": {
								"index": 1
							},
							"index": 1,
							"isId": true,
							"name": "id",
							"sinceVersion": 1
						},
						{
							"columnRef": {
								"index": 2
							},
							"index": 2,
							"isId": false,
							"name": "count",
							"sinceVersion": 1
						},
						{
							"index": 3,
							"isId": false,
							"name": "poll",
							"relationRef": {
								"index": 0
							},
							"sinceVersion": 1
						},
						{
							"index": 4,
							"isId": false,
							"name": "rating",
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
								"index": 3
							},
							"relationTableIndex": 56,
							"sinceVersion": 1
						},
						{
							"index": 1,
							"isId": false,
							"relationType": 1,
							"propertyRef": {
								"index": 4
							},
							"relationTableIndex": 19,
							"sinceVersion": 1
						}
					],
					"sinceVersion": 1,
					"tableConfig": {
						"name": "POLL_RATING_COUNTS",
						"indexes": []
					}
				},
				{
					"columns": [
						{
							"index": 0,
							"isGenerated": false,
							"manyRelationColumnRefs": [],
							"name": "CREATED_AT",
							"notNull": false,
							"propertyRefs": [
								{
									"index": 0
								}
							],
							"sinceVersion": 1,
							"type": 2
						},
						{
							"index": 1,
							"isGenerated": true,
							"manyRelationColumnRefs": [],
							"name": "POLL_VOTE_COUNT_ID",
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
							"isGenerated": false,
							"manyRelationColumnRefs": [],
							"name": "COUNT",
							"notNull": false,
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
							"manyRelationColumnRefs": [
								{
									"manyRelationIndex": 0,
									"oneSchemaIndex": null,
									"oneTableIndex": 56,
									"oneRelationIndex": 13,
									"oneColumnIndex": 2,
									"sinceVersion": 1
								}
							],
							"name": "POLL_ID",
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
					"index": 22,
					"isLocal": true,
					"isRepositoryEntity": false,
					"name": "PollVoteCount",
					"properties": [
						{
							"columnRef": {
								"index": 0
							},
							"index": 0,
							"isId": false,
							"name": "createdAt",
							"sinceVersion": 1
						},
						{
							"columnRef": {
								"index": 1
							},
							"index": 1,
							"isId": false,
							"name": "id",
							"sinceVersion": 1
						},
						{
							"columnRef": {
								"index": 2
							},
							"index": 2,
							"isId": false,
							"name": "count",
							"sinceVersion": 1
						},
						{
							"index": 3,
							"isId": false,
							"name": "poll",
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
							"relationTableIndex": 56,
							"sinceVersion": 1
						}
					],
					"sinceVersion": 1,
					"tableConfig": {
						"name": "POLL_VOTE_COUNTS",
						"indexes": []
					}
				},
				{
					"columns": [
						{
							"index": 0,
							"isGenerated": false,
							"manyRelationColumnRefs": [],
							"name": "CREATED_AT",
							"notNull": false,
							"propertyRefs": [
								{
									"index": 0
								}
							],
							"sinceVersion": 1,
							"type": 2
						},
						{
							"index": 1,
							"isGenerated": true,
							"manyRelationColumnRefs": [],
							"name": "CHOSEN_POLL_VARIATION_TYPE_ID",
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
							"isGenerated": false,
							"manyRelationColumnRefs": [],
							"name": "CODE",
							"notNull": false,
							"propertyRefs": [
								{
									"index": 2
								}
							],
							"sinceVersion": 1,
							"type": 5
						}
					],
					"idColumnRefs": [
						{
							"index": 1
						}
					],
					"index": 23,
					"isLocal": true,
					"isRepositoryEntity": false,
					"name": "ChosenPollVariationType",
					"properties": [
						{
							"columnRef": {
								"index": 0
							},
							"index": 0,
							"isId": false,
							"name": "createdAt",
							"sinceVersion": 1
						},
						{
							"columnRef": {
								"index": 1
							},
							"index": 1,
							"isId": true,
							"name": "id",
							"sinceVersion": 1
						},
						{
							"columnRef": {
								"index": 2
							},
							"index": 2,
							"isId": false,
							"name": "code",
							"sinceVersion": 1
						}
					],
					"relations": [],
					"sinceVersion": 1,
					"tableConfig": {
						"name": "CHOSEN_POLL_VARIATION_TYPES",
						"indexes": []
					}
				},
				{
					"columns": [
						{
							"index": 0,
							"isGenerated": false,
							"manyRelationColumnRefs": [],
							"name": "CREATED_AT",
							"notNull": false,
							"propertyRefs": [
								{
									"index": 0
								}
							],
							"sinceVersion": 1,
							"type": 2
						},
						{
							"index": 1,
							"isGenerated": true,
							"manyRelationColumnRefs": [],
							"name": "CHOSEN_POLL_VARIATION_ID",
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
							"isGenerated": false,
							"manyRelationColumnRefs": [
								{
									"manyRelationIndex": 0,
									"oneSchemaIndex": null,
									"oneTableIndex": 56,
									"oneRelationIndex": 8,
									"oneColumnIndex": 2,
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
						},
						{
							"index": 3,
							"isGenerated": false,
							"manyRelationColumnRefs": [
								{
									"manyRelationIndex": 1,
									"oneSchemaIndex": null,
									"oneTableIndex": 86,
									"oneColumnIndex": 2,
									"sinceVersion": 1
								}
							],
							"name": "POLL_VARIATION_ID",
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
							"isGenerated": false,
							"manyRelationColumnRefs": [
								{
									"manyRelationIndex": 2,
									"oneSchemaIndex": null,
									"oneTableIndex": 23,
									"oneColumnIndex": 1,
									"sinceVersion": 1
								}
							],
							"name": "CHOSEN_POLL_VARIATION_TYPE_ID",
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
							"isGenerated": false,
							"manyRelationColumnRefs": [
								{
									"manyRelationIndex": 3,
									"oneSchemaIndex": null,
									"oneTableIndex": 30,
									"oneRelationIndex": 2,
									"oneColumnIndex": 2,
									"sinceVersion": 1
								}
							],
							"name": "POLL_LOCATION_TIME_FRAME_ID",
							"notNull": false,
							"propertyRefs": [
								{
									"index": 5
								}
							],
							"sinceVersion": 1,
							"type": 4
						}
					],
					"idColumnRefs": [
						{
							"index": 1
						}
					],
					"index": 24,
					"isLocal": true,
					"isRepositoryEntity": false,
					"name": "ChosenPollVariation",
					"properties": [
						{
							"columnRef": {
								"index": 0
							},
							"index": 0,
							"isId": false,
							"name": "createdAt",
							"sinceVersion": 1
						},
						{
							"columnRef": {
								"index": 1
							},
							"index": 1,
							"isId": true,
							"name": "id",
							"sinceVersion": 1
						},
						{
							"index": 2,
							"isId": false,
							"name": "poll",
							"relationRef": {
								"index": 0
							},
							"sinceVersion": 1
						},
						{
							"index": 3,
							"isId": false,
							"name": "pollVariation",
							"relationRef": {
								"index": 1
							},
							"sinceVersion": 1
						},
						{
							"index": 4,
							"isId": false,
							"name": "type",
							"relationRef": {
								"index": 2
							},
							"sinceVersion": 1
						},
						{
							"index": 5,
							"isId": false,
							"name": "locationTimeFrame",
							"relationRef": {
								"index": 3
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
							"relationTableIndex": 56,
							"sinceVersion": 1
						},
						{
							"index": 1,
							"isId": false,
							"relationType": 1,
							"propertyRef": {
								"index": 3
							},
							"relationTableIndex": 86,
							"sinceVersion": 1
						},
						{
							"index": 2,
							"isId": false,
							"relationType": 1,
							"propertyRef": {
								"index": 4
							},
							"relationTableIndex": 23,
							"sinceVersion": 1
						},
						{
							"index": 3,
							"isId": false,
							"relationType": 1,
							"propertyRef": {
								"index": 5
							},
							"relationTableIndex": 30,
							"sinceVersion": 1
						}
					],
					"sinceVersion": 1,
					"tableConfig": {
						"name": "CHOSEN_POLL_VARIATIONS",
						"indexes": []
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
							"isGenerated": false,
							"manyRelationColumnRefs": [
								{
									"manyRelationIndex": 0,
									"oneSchemaIndex": null,
									"oneTableIndex": 7,
									"oneColumnIndex": 1,
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
							"isGenerated": false,
							"manyRelationColumnRefs": [
								{
									"manyRelationIndex": 1,
									"oneSchemaIndex": null,
									"oneTableIndex": 30,
									"oneRelationIndex": 4,
									"oneColumnIndex": 2,
									"sinceVersion": 1
								}
							],
							"name": "POLL_LOCATION_TIME_FRAME_ID",
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
					"idColumnRefs": [
						{
							"index": 0
						}
					],
					"index": 25,
					"isLocal": true,
					"isRepositoryEntity": false,
					"name": "PollLTFContinent",
					"properties": [
						{
							"columnRef": {
								"index": 0
							},
							"index": 0,
							"isId": true,
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
							"name": "locationTimeFrame",
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
							"relationTableIndex": 7,
							"sinceVersion": 1
						},
						{
							"index": 1,
							"isId": false,
							"relationType": 1,
							"propertyRef": {
								"index": 2
							},
							"relationTableIndex": 30,
							"sinceVersion": 1
						}
					],
					"sinceVersion": 1,
					"tableConfig": {
						"name": "POLL_CONTINENTS",
						"indexes": []
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
							"isGenerated": false,
							"manyRelationColumnRefs": [
								{
									"manyRelationIndex": 0,
									"oneSchemaIndex": null,
									"oneTableIndex": 14,
									"oneColumnIndex": 1,
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
							"isGenerated": false,
							"manyRelationColumnRefs": [
								{
									"manyRelationIndex": 1,
									"oneSchemaIndex": null,
									"oneTableIndex": 30,
									"oneRelationIndex": 5,
									"oneColumnIndex": 2,
									"sinceVersion": 1
								}
							],
							"name": "POLL_LOCATION_TIME_FRAME_ID",
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
					"idColumnRefs": [
						{
							"index": 0
						}
					],
					"index": 26,
					"isLocal": true,
					"isRepositoryEntity": false,
					"name": "PollLTFCountry",
					"properties": [
						{
							"columnRef": {
								"index": 0
							},
							"index": 0,
							"isId": true,
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
							"name": "locationTimeFrame",
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
							"relationTableIndex": 14,
							"sinceVersion": 1
						},
						{
							"index": 1,
							"isId": false,
							"relationType": 1,
							"propertyRef": {
								"index": 2
							},
							"relationTableIndex": 30,
							"sinceVersion": 1
						}
					],
					"sinceVersion": 1,
					"tableConfig": {
						"name": "POLL_COUNTRIES",
						"indexes": []
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
							"isGenerated": false,
							"manyRelationColumnRefs": [
								{
									"manyRelationIndex": 0,
									"oneSchemaIndex": null,
									"oneTableIndex": 11,
									"oneColumnIndex": 1,
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
							"isGenerated": false,
							"manyRelationColumnRefs": [
								{
									"manyRelationIndex": 1,
									"oneSchemaIndex": null,
									"oneTableIndex": 30,
									"oneRelationIndex": 7,
									"oneColumnIndex": 2,
									"sinceVersion": 1
								}
							],
							"name": "POLL_LOCATION_TIME_FRAME_ID",
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
					"idColumnRefs": [
						{
							"index": 0
						}
					],
					"index": 27,
					"isLocal": true,
					"isRepositoryEntity": false,
					"name": "PollLTFCounty",
					"properties": [
						{
							"columnRef": {
								"index": 0
							},
							"index": 0,
							"isId": true,
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
							"name": "locationTimeFrame",
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
							"relationTableIndex": 11,
							"sinceVersion": 1
						},
						{
							"index": 1,
							"isId": false,
							"relationType": 1,
							"propertyRef": {
								"index": 2
							},
							"relationTableIndex": 30,
							"sinceVersion": 1
						}
					],
					"sinceVersion": 1,
					"tableConfig": {
						"name": "POLL_COUNTIES",
						"indexes": []
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
							"isGenerated": false,
							"manyRelationColumnRefs": [
								{
									"manyRelationIndex": 0,
									"oneSchemaIndex": null,
									"oneTableIndex": 10,
									"oneColumnIndex": 1,
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
						},
						{
							"index": 2,
							"isGenerated": false,
							"manyRelationColumnRefs": [
								{
									"manyRelationIndex": 1,
									"oneSchemaIndex": null,
									"oneTableIndex": 30,
									"oneRelationIndex": 6,
									"oneColumnIndex": 2,
									"sinceVersion": 1
								}
							],
							"name": "POLL_LOCATION_TIME_FRAME_ID",
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
					"idColumnRefs": [
						{
							"index": 0
						}
					],
					"index": 28,
					"isLocal": true,
					"isRepositoryEntity": false,
					"name": "PollLTFState",
					"properties": [
						{
							"columnRef": {
								"index": 0
							},
							"index": 0,
							"isId": true,
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
							"index": 2,
							"isId": false,
							"name": "locationTimeFrame",
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
							"relationTableIndex": 10,
							"sinceVersion": 1
						},
						{
							"index": 1,
							"isId": false,
							"relationType": 1,
							"propertyRef": {
								"index": 2
							},
							"relationTableIndex": 30,
							"sinceVersion": 1
						}
					],
					"sinceVersion": 1,
					"tableConfig": {
						"name": "POLL_STATES",
						"indexes": []
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
							"isGenerated": false,
							"manyRelationColumnRefs": [
								{
									"manyRelationIndex": 0,
									"oneSchemaIndex": null,
									"oneTableIndex": 12,
									"oneColumnIndex": 1,
									"sinceVersion": 1
								}
							],
							"name": "TOWN_ID",
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
							"manyRelationColumnRefs": [
								{
									"manyRelationIndex": 1,
									"oneSchemaIndex": null,
									"oneTableIndex": 30,
									"oneRelationIndex": 8,
									"oneColumnIndex": 2,
									"sinceVersion": 1
								}
							],
							"name": "POLL_LOCATION_TIME_FRAME_ID",
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
					"idColumnRefs": [
						{
							"index": 0
						}
					],
					"index": 29,
					"isLocal": true,
					"isRepositoryEntity": false,
					"name": "PollLTFTown",
					"properties": [
						{
							"columnRef": {
								"index": 0
							},
							"index": 0,
							"isId": true,
							"name": "id",
							"sinceVersion": 1
						},
						{
							"index": 1,
							"isId": false,
							"name": "town",
							"relationRef": {
								"index": 0
							},
							"sinceVersion": 1
						},
						{
							"index": 2,
							"isId": false,
							"name": "locationTimeFrame",
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
							"relationTableIndex": 12,
							"sinceVersion": 1
						},
						{
							"index": 1,
							"isId": false,
							"relationType": 1,
							"propertyRef": {
								"index": 2
							},
							"relationTableIndex": 30,
							"sinceVersion": 1
						}
					],
					"sinceVersion": 1,
					"tableConfig": {
						"name": "POLL_TOWNS",
						"indexes": []
					}
				},
				{
					"columns": [
						{
							"index": 0,
							"isGenerated": false,
							"manyRelationColumnRefs": [],
							"name": "CREATED_AT",
							"notNull": false,
							"propertyRefs": [
								{
									"index": 0
								}
							],
							"sinceVersion": 1,
							"type": 2
						},
						{
							"index": 1,
							"isGenerated": false,
							"manyRelationColumnRefs": [
								{
									"manyRelationIndex": 0,
									"oneSchemaIndex": null,
									"oneTableIndex": 5,
									"oneColumnIndex": 1,
									"sinceVersion": 1
								}
							],
							"name": "ACTOR_ID",
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
							"isGenerated": true,
							"manyRelationColumnRefs": [],
							"name": "POLL_LOCATION_TIME_FRAME_ID",
							"notNull": false,
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
							"name": "END_DATE",
							"notNull": true,
							"propertyRefs": [
								{
									"index": 3
								}
							],
							"sinceVersion": 1,
							"type": 2
						},
						{
							"index": 4,
							"isGenerated": false,
							"manyRelationColumnRefs": [],
							"name": "START_DATE",
							"notNull": true,
							"propertyRefs": [
								{
									"index": 4
								}
							],
							"sinceVersion": 1,
							"type": 2
						},
						{
							"index": 5,
							"isGenerated": false,
							"manyRelationColumnRefs": [
								{
									"manyRelationIndex": 1,
									"oneSchemaIndex": null,
									"oneTableIndex": 56,
									"oneRelationIndex": 9,
									"oneColumnIndex": 2,
									"sinceVersion": 1
								}
							],
							"name": "POLL_ID",
							"notNull": false,
							"propertyRefs": [
								{
									"index": 5
								}
							],
							"sinceVersion": 1,
							"type": 4
						}
					],
					"idColumnRefs": [
						{
							"index": 2
						}
					],
					"index": 30,
					"isLocal": true,
					"isRepositoryEntity": false,
					"name": "PollLocationTimeFrame",
					"properties": [
						{
							"columnRef": {
								"index": 0
							},
							"index": 0,
							"isId": false,
							"name": "createdAt",
							"sinceVersion": 1
						},
						{
							"index": 1,
							"isId": false,
							"name": "actor",
							"relationRef": {
								"index": 0
							},
							"sinceVersion": 1
						},
						{
							"columnRef": {
								"index": 2
							},
							"index": 2,
							"isId": true,
							"name": "id",
							"sinceVersion": 1
						},
						{
							"columnRef": {
								"index": 3
							},
							"index": 3,
							"isId": false,
							"name": "endDate",
							"sinceVersion": 1
						},
						{
							"columnRef": {
								"index": 4
							},
							"index": 4,
							"isId": false,
							"name": "startDate",
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
						},
						{
							"index": 6,
							"isId": false,
							"name": "chosenVariations",
							"relationRef": {
								"index": 2
							},
							"sinceVersion": 1
						},
						{
							"index": 7,
							"isId": false,
							"name": "createdAtVariations",
							"relationRef": {
								"index": 3
							},
							"sinceVersion": 1
						},
						{
							"index": 8,
							"isId": false,
							"name": "pollContinents",
							"relationRef": {
								"index": 4
							},
							"sinceVersion": 1
						},
						{
							"index": 9,
							"isId": false,
							"name": "pollCountries",
							"relationRef": {
								"index": 5
							},
							"sinceVersion": 1
						},
						{
							"index": 10,
							"isId": false,
							"name": "pollStates",
							"relationRef": {
								"index": 6
							},
							"sinceVersion": 1
						},
						{
							"index": 11,
							"isId": false,
							"name": "pollCounties",
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
						},
						{
							"index": 13,
							"isId": false,
							"name": "pollVariations",
							"relationRef": {
								"index": 9
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
							"relationTableIndex": 5,
							"sinceVersion": 1
						},
						{
							"index": 1,
							"isId": false,
							"relationType": 1,
							"propertyRef": {
								"index": 5
							},
							"relationTableIndex": 56,
							"sinceVersion": 1
						},
						{
							"index": 2,
							"isId": false,
							"oneToManyElems": {
								"cascade": 1,
								"mappedBy": "locationTimeFrame"
							},
							"relationType": 0,
							"propertyRef": {
								"index": 6
							},
							"relationTableIndex": 24,
							"sinceVersion": 1
						},
						{
							"index": 3,
							"isId": false,
							"oneToManyElems": {
								"cascade": 1,
								"mappedBy": "createdAtLocationTimeFrame"
							},
							"relationType": 0,
							"propertyRef": {
								"index": 7
							},
							"relationTableIndex": 86,
							"sinceVersion": 1
						},
						{
							"index": 4,
							"isId": false,
							"oneToManyElems": {
								"cascade": 1,
								"mappedBy": "locationTimeFrame"
							},
							"relationType": 0,
							"propertyRef": {
								"index": 8
							},
							"relationTableIndex": 25,
							"sinceVersion": 1
						},
						{
							"index": 5,
							"isId": false,
							"oneToManyElems": {
								"cascade": 1,
								"mappedBy": "locationTimeFrame"
							},
							"relationType": 0,
							"propertyRef": {
								"index": 9
							},
							"relationTableIndex": 26,
							"sinceVersion": 1
						},
						{
							"index": 6,
							"isId": false,
							"oneToManyElems": {
								"cascade": 1,
								"mappedBy": "locationTimeFrame"
							},
							"relationType": 0,
							"propertyRef": {
								"index": 10
							},
							"relationTableIndex": 28,
							"sinceVersion": 1
						},
						{
							"index": 7,
							"isId": false,
							"oneToManyElems": {
								"cascade": 1,
								"mappedBy": "locationTimeFrame"
							},
							"relationType": 0,
							"propertyRef": {
								"index": 11
							},
							"relationTableIndex": 27,
							"sinceVersion": 1
						},
						{
							"index": 8,
							"isId": false,
							"oneToManyElems": {
								"cascade": 1,
								"mappedBy": "locationTimeFrame"
							},
							"relationType": 0,
							"propertyRef": {
								"index": 12
							},
							"relationTableIndex": 29,
							"sinceVersion": 1
						},
						{
							"index": 9,
							"isId": false,
							"oneToManyElems": {
								"cascade": 0,
								"mappedBy": "locationTimeFrame"
							},
							"relationType": 0,
							"propertyRef": {
								"index": 13
							},
							"relationTableIndex": 86,
							"sinceVersion": 1
						}
					],
					"sinceVersion": 1,
					"tableConfig": {
						"name": "POLL_LOCATION_TIME_FRAMES",
						"indexes": []
					}
				},
				{
					"columns": [
						{
							"index": 0,
							"isGenerated": false,
							"manyRelationColumnRefs": [],
							"name": "CREATED_AT",
							"notNull": false,
							"propertyRefs": [
								{
									"index": 0
								}
							],
							"sinceVersion": 1,
							"type": 2
						},
						{
							"index": 1,
							"isGenerated": false,
							"manyRelationColumnRefs": [],
							"name": "POLL_TYPE_ID",
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
							"isGenerated": false,
							"manyRelationColumnRefs": [],
							"name": "POLL_TYPE_VALUE",
							"notNull": false,
							"propertyRefs": [
								{
									"index": 2
								}
							],
							"sinceVersion": 1,
							"type": 5
						}
					],
					"idColumnRefs": [
						{
							"index": 1
						}
					],
					"index": 31,
					"isLocal": true,
					"isRepositoryEntity": false,
					"name": "PollType",
					"properties": [
						{
							"columnRef": {
								"index": 0
							},
							"index": 0,
							"isId": false,
							"name": "createdAt",
							"sinceVersion": 1
						},
						{
							"columnRef": {
								"index": 1
							},
							"index": 1,
							"isId": true,
							"name": "id",
							"sinceVersion": 1
						},
						{
							"columnRef": {
								"index": 2
							},
							"index": 2,
							"isId": false,
							"name": "value",
							"sinceVersion": 1
						}
					],
					"relations": [],
					"sinceVersion": 1,
					"tableConfig": {
						"name": "POLL_TYPES",
						"indexes": []
					}
				},
				{
					"columns": [
						{
							"index": 0,
							"isGenerated": false,
							"manyRelationColumnRefs": [],
							"name": "CREATED_AT",
							"notNull": false,
							"propertyRefs": [
								{
									"index": 0
								}
							],
							"sinceVersion": 1,
							"type": 2
						},
						{
							"index": 1,
							"isGenerated": true,
							"manyRelationColumnRefs": [],
							"name": "THEME_ID",
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
							"isGenerated": false,
							"manyRelationColumnRefs": [],
							"name": "NAME",
							"notNull": true,
							"propertyRefs": [
								{
									"index": 2
								}
							],
							"sinceVersion": 1,
							"type": 5
						}
					],
					"idColumnRefs": [
						{
							"index": 1
						}
					],
					"index": 32,
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
							"name": "createdAt",
							"sinceVersion": 1
						},
						{
							"columnRef": {
								"index": 1
							},
							"index": 1,
							"isId": true,
							"name": "id",
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
						}
					],
					"relations": [],
					"sinceVersion": 1,
					"tableConfig": {
						"name": "THEMES",
						"indexes": []
					}
				},
				{
					"columns": [
						{
							"index": 0,
							"isGenerated": true,
							"manyRelationColumnRefs": [],
							"name": "TRANSLATION_TYPE_ID",
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
							"name": "TRANSLATION_TYPE_CODE",
							"notNull": false,
							"propertyRefs": [
								{
									"index": 1
								}
							],
							"sinceVersion": 1,
							"type": 4
						}
					],
					"idColumnRefs": [
						{
							"index": 0
						}
					],
					"index": 33,
					"isLocal": true,
					"isRepositoryEntity": false,
					"name": "TranslationType",
					"properties": [
						{
							"columnRef": {
								"index": 0
							},
							"index": 0,
							"isId": true,
							"name": "id",
							"sinceVersion": 1
						},
						{
							"columnRef": {
								"index": 1
							},
							"index": 1,
							"isId": false,
							"name": "code",
							"sinceVersion": 1
						}
					],
					"relations": [],
					"sinceVersion": 1,
					"tableConfig": {
						"name": "TRANSLATION_TYPES",
						"indexes": []
					}
				},
				{
					"columns": [
						{
							"index": 0,
							"isGenerated": false,
							"manyRelationColumnRefs": [],
							"name": "CREATED_AT",
							"notNull": false,
							"propertyRefs": [
								{
									"index": 0
								}
							],
							"sinceVersion": 1,
							"type": 2
						},
						{
							"index": 1,
							"isGenerated": false,
							"manyRelationColumnRefs": [
								{
									"manyRelationIndex": 0,
									"oneSchemaIndex": null,
									"oneTableIndex": 5,
									"oneColumnIndex": 1,
									"sinceVersion": 1
								}
							],
							"name": "ACTOR_ID",
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
							"name": "UPDATED_AT",
							"notNull": false,
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
							"isGenerated": true,
							"manyRelationColumnRefs": [],
							"name": "USER_POLL_RATING_ID",
							"notNull": false,
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
							"isGenerated": false,
							"manyRelationColumnRefs": [
								{
									"manyRelationIndex": 1,
									"oneSchemaIndex": null,
									"oneTableIndex": 35,
									"oneRelationIndex": 4,
									"oneColumnIndex": 3,
									"sinceVersion": 1
								}
							],
							"name": "USER_POLL_ID",
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
							"isGenerated": false,
							"manyRelationColumnRefs": [
								{
									"manyRelationIndex": 2,
									"oneSchemaIndex": null,
									"oneTableIndex": 56,
									"oneRelationIndex": 5,
									"oneColumnIndex": 2,
									"sinceVersion": 1
								}
							],
							"name": "POLL_ID",
							"notNull": false,
							"propertyRefs": [
								{
									"index": 5
								}
							],
							"sinceVersion": 1,
							"type": 4
						},
						{
							"index": 6,
							"isGenerated": false,
							"manyRelationColumnRefs": [
								{
									"manyRelationIndex": 3,
									"oneSchemaIndex": null,
									"oneTableIndex": 19,
									"oneColumnIndex": 1,
									"sinceVersion": 1
								}
							],
							"name": "RATING_ID",
							"notNull": false,
							"propertyRefs": [
								{
									"index": 6
								}
							],
							"sinceVersion": 1,
							"type": 4
						}
					],
					"idColumnRefs": [
						{
							"index": 3
						}
					],
					"index": 34,
					"isLocal": true,
					"isRepositoryEntity": false,
					"name": "UserPollRating",
					"properties": [
						{
							"columnRef": {
								"index": 0
							},
							"index": 0,
							"isId": false,
							"name": "createdAt",
							"sinceVersion": 1
						},
						{
							"index": 1,
							"isId": false,
							"name": "actor",
							"relationRef": {
								"index": 0
							},
							"sinceVersion": 1
						},
						{
							"columnRef": {
								"index": 2
							},
							"index": 2,
							"isId": false,
							"name": "updatedAt",
							"sinceVersion": 1
						},
						{
							"columnRef": {
								"index": 3
							},
							"index": 3,
							"isId": true,
							"name": "id",
							"sinceVersion": 1
						},
						{
							"index": 4,
							"isId": false,
							"name": "userPoll",
							"relationRef": {
								"index": 1
							},
							"sinceVersion": 1
						},
						{
							"index": 5,
							"isId": false,
							"name": "poll",
							"relationRef": {
								"index": 2
							},
							"sinceVersion": 1
						},
						{
							"index": 6,
							"isId": false,
							"name": "rating",
							"relationRef": {
								"index": 3
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
							"relationTableIndex": 5,
							"sinceVersion": 1
						},
						{
							"index": 1,
							"isId": false,
							"relationType": 1,
							"propertyRef": {
								"index": 4
							},
							"relationTableIndex": 35,
							"sinceVersion": 1
						},
						{
							"index": 2,
							"isId": false,
							"relationType": 1,
							"propertyRef": {
								"index": 5
							},
							"relationTableIndex": 56,
							"sinceVersion": 1
						},
						{
							"index": 3,
							"isId": false,
							"relationType": 1,
							"propertyRef": {
								"index": 6
							},
							"relationTableIndex": 19,
							"sinceVersion": 1
						}
					],
					"sinceVersion": 1,
					"tableConfig": {
						"name": "USER_POLL_RATINGS",
						"indexes": []
					}
				},
				{
					"columns": [
						{
							"index": 0,
							"isGenerated": false,
							"manyRelationColumnRefs": [],
							"name": "CREATED_AT",
							"notNull": false,
							"propertyRefs": [
								{
									"index": 0
								}
							],
							"sinceVersion": 1,
							"type": 2
						},
						{
							"index": 1,
							"isGenerated": false,
							"manyRelationColumnRefs": [
								{
									"manyRelationIndex": 0,
									"oneSchemaIndex": null,
									"oneTableIndex": 5,
									"oneColumnIndex": 1,
									"sinceVersion": 1
								}
							],
							"name": "ACTOR_ID",
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
							"name": "UPDATED_AT",
							"notNull": false,
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
							"isGenerated": true,
							"manyRelationColumnRefs": [],
							"name": "USER_POLL_ID",
							"notNull": false,
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
							"isGenerated": false,
							"manyRelationColumnRefs": [],
							"name": "USER_POLL_PINNED_EXPLICITLY",
							"notNull": true,
							"propertyRefs": [
								{
									"index": 4
								}
							],
							"sinceVersion": 1,
							"type": 1
						},
						{
							"index": 5,
							"isGenerated": false,
							"manyRelationColumnRefs": [
								{
									"manyRelationIndex": 1,
									"oneSchemaIndex": null,
									"oneTableIndex": 56,
									"oneColumnIndex": 2,
									"sinceVersion": 1
								}
							],
							"name": "POLL_ID",
							"notNull": false,
							"propertyRefs": [
								{
									"index": 5
								}
							],
							"sinceVersion": 1,
							"type": 4
						},
						{
							"index": 6,
							"isGenerated": false,
							"manyRelationColumnRefs": [
								{
									"manyRelationIndex": 2,
									"oneSchemaIndex": null,
									"oneTableIndex": 86,
									"oneColumnIndex": 2,
									"sinceVersion": 1
								}
							],
							"name": "POLL_VARIATION_ID",
							"notNull": false,
							"propertyRefs": [
								{
									"index": 6
								}
							],
							"sinceVersion": 1,
							"type": 4
						}
					],
					"idColumnRefs": [
						{
							"index": 3
						}
					],
					"index": 35,
					"isLocal": true,
					"isRepositoryEntity": false,
					"name": "UserPoll",
					"properties": [
						{
							"columnRef": {
								"index": 0
							},
							"index": 0,
							"isId": false,
							"name": "createdAt",
							"sinceVersion": 1
						},
						{
							"index": 1,
							"isId": false,
							"name": "actor",
							"relationRef": {
								"index": 0
							},
							"sinceVersion": 1
						},
						{
							"columnRef": {
								"index": 2
							},
							"index": 2,
							"isId": false,
							"name": "updatedAt",
							"sinceVersion": 1
						},
						{
							"columnRef": {
								"index": 3
							},
							"index": 3,
							"isId": true,
							"name": "id",
							"sinceVersion": 1
						},
						{
							"columnRef": {
								"index": 4
							},
							"index": 4,
							"isId": false,
							"name": "pinnedExplicitly",
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
						},
						{
							"index": 6,
							"isId": false,
							"name": "pinnedVariation",
							"relationRef": {
								"index": 2
							},
							"sinceVersion": 1
						},
						{
							"index": 7,
							"isId": false,
							"name": "userPollVariations",
							"relationRef": {
								"index": 3
							},
							"sinceVersion": 1
						},
						{
							"index": 8,
							"isId": false,
							"name": "ratings",
							"relationRef": {
								"index": 4
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
							"relationTableIndex": 5,
							"sinceVersion": 1
						},
						{
							"index": 1,
							"isId": false,
							"relationType": 1,
							"propertyRef": {
								"index": 5
							},
							"relationTableIndex": 56,
							"sinceVersion": 1
						},
						{
							"index": 2,
							"isId": false,
							"relationType": 1,
							"propertyRef": {
								"index": 6
							},
							"relationTableIndex": 86,
							"sinceVersion": 1
						},
						{
							"index": 3,
							"isId": false,
							"oneToManyElems": {
								"cascade": 1,
								"mappedBy": "userPoll"
							},
							"relationType": 0,
							"propertyRef": {
								"index": 7
							},
							"relationTableIndex": 37,
							"sinceVersion": 1
						},
						{
							"index": 4,
							"isId": false,
							"oneToManyElems": {
								"cascade": 1,
								"mappedBy": "userPoll"
							},
							"relationType": 0,
							"propertyRef": {
								"index": 8
							},
							"relationTableIndex": 34,
							"sinceVersion": 1
						}
					],
					"sinceVersion": 1,
					"tableConfig": {
						"name": "USER_POLLS",
						"indexes": []
					}
				},
				{
					"columns": [
						{
							"index": 0,
							"isGenerated": false,
							"manyRelationColumnRefs": [],
							"name": "CREATED_AT",
							"notNull": false,
							"propertyRefs": [
								{
									"index": 0
								}
							],
							"sinceVersion": 1,
							"type": 2
						},
						{
							"index": 1,
							"isGenerated": false,
							"manyRelationColumnRefs": [
								{
									"manyRelationIndex": 0,
									"oneSchemaIndex": null,
									"oneTableIndex": 5,
									"oneColumnIndex": 1,
									"sinceVersion": 1
								}
							],
							"name": "ACTOR_ID",
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
							"name": "UPDATED_AT",
							"notNull": false,
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
							"isGenerated": true,
							"manyRelationColumnRefs": [],
							"name": "USER_POLL_VARIATION_RATING_ID",
							"notNull": false,
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
							"isGenerated": false,
							"manyRelationColumnRefs": [
								{
									"manyRelationIndex": 1,
									"oneSchemaIndex": null,
									"oneTableIndex": 37,
									"oneRelationIndex": 4,
									"oneColumnIndex": 3,
									"sinceVersion": 1
								}
							],
							"name": "USER_POLL_VARIATION_ID",
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
							"isGenerated": false,
							"manyRelationColumnRefs": [
								{
									"manyRelationIndex": 2,
									"oneSchemaIndex": null,
									"oneTableIndex": 86,
									"oneRelationIndex": 5,
									"oneColumnIndex": 2,
									"sinceVersion": 1
								}
							],
							"name": "POLL_VARIATION_ID",
							"notNull": false,
							"propertyRefs": [
								{
									"index": 5
								}
							],
							"sinceVersion": 1,
							"type": 4
						},
						{
							"index": 6,
							"isGenerated": false,
							"manyRelationColumnRefs": [
								{
									"manyRelationIndex": 3,
									"oneSchemaIndex": null,
									"oneTableIndex": 19,
									"oneColumnIndex": 1,
									"sinceVersion": 1
								}
							],
							"name": "RATING_ID",
							"notNull": false,
							"propertyRefs": [
								{
									"index": 6
								}
							],
							"sinceVersion": 1,
							"type": 4
						}
					],
					"idColumnRefs": [
						{
							"index": 3
						}
					],
					"index": 36,
					"isLocal": true,
					"isRepositoryEntity": false,
					"name": "UserPollVariationRating",
					"properties": [
						{
							"columnRef": {
								"index": 0
							},
							"index": 0,
							"isId": false,
							"name": "createdAt",
							"sinceVersion": 1
						},
						{
							"index": 1,
							"isId": false,
							"name": "actor",
							"relationRef": {
								"index": 0
							},
							"sinceVersion": 1
						},
						{
							"columnRef": {
								"index": 2
							},
							"index": 2,
							"isId": false,
							"name": "updatedAt",
							"sinceVersion": 1
						},
						{
							"columnRef": {
								"index": 3
							},
							"index": 3,
							"isId": true,
							"name": "id",
							"sinceVersion": 1
						},
						{
							"index": 4,
							"isId": false,
							"name": "userPollVariation",
							"relationRef": {
								"index": 1
							},
							"sinceVersion": 1
						},
						{
							"index": 5,
							"isId": false,
							"name": "pollVariation",
							"relationRef": {
								"index": 2
							},
							"sinceVersion": 1
						},
						{
							"index": 6,
							"isId": false,
							"name": "rating",
							"relationRef": {
								"index": 3
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
							"relationTableIndex": 5,
							"sinceVersion": 1
						},
						{
							"index": 1,
							"isId": false,
							"relationType": 1,
							"propertyRef": {
								"index": 4
							},
							"relationTableIndex": 37,
							"sinceVersion": 1
						},
						{
							"index": 2,
							"isId": false,
							"relationType": 1,
							"propertyRef": {
								"index": 5
							},
							"relationTableIndex": 86,
							"sinceVersion": 1
						},
						{
							"index": 3,
							"isId": false,
							"relationType": 1,
							"propertyRef": {
								"index": 6
							},
							"relationTableIndex": 19,
							"sinceVersion": 1
						}
					],
					"sinceVersion": 1,
					"tableConfig": {
						"name": "USER_POLL_VARIATION_RATINGS",
						"indexes": []
					}
				},
				{
					"columns": [
						{
							"index": 0,
							"isGenerated": false,
							"manyRelationColumnRefs": [],
							"name": "CREATED_AT",
							"notNull": false,
							"propertyRefs": [
								{
									"index": 0
								}
							],
							"sinceVersion": 1,
							"type": 2
						},
						{
							"index": 1,
							"isGenerated": false,
							"manyRelationColumnRefs": [
								{
									"manyRelationIndex": 0,
									"oneSchemaIndex": null,
									"oneTableIndex": 5,
									"oneColumnIndex": 1,
									"sinceVersion": 1
								}
							],
							"name": "ACTOR_ID",
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
							"name": "UPDATED_AT",
							"notNull": false,
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
							"isGenerated": true,
							"manyRelationColumnRefs": [],
							"name": "USER_POLL_VARIATION_ID",
							"notNull": false,
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
							"isGenerated": false,
							"manyRelationColumnRefs": [
								{
									"manyRelationIndex": 1,
									"oneSchemaIndex": null,
									"oneTableIndex": 35,
									"oneRelationIndex": 3,
									"oneColumnIndex": 3,
									"sinceVersion": 1
								}
							],
							"name": "USER_POLL_ID",
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
							"isGenerated": false,
							"manyRelationColumnRefs": [
								{
									"manyRelationIndex": 2,
									"oneSchemaIndex": null,
									"oneTableIndex": 86,
									"oneColumnIndex": 2,
									"sinceVersion": 1
								}
							],
							"name": "POLL_VARIATION_ID",
							"notNull": false,
							"propertyRefs": [
								{
									"index": 5
								}
							],
							"sinceVersion": 1,
							"type": 4
						}
					],
					"idColumnRefs": [
						{
							"index": 3
						}
					],
					"index": 37,
					"isLocal": true,
					"isRepositoryEntity": false,
					"name": "UserPollVariation",
					"properties": [
						{
							"columnRef": {
								"index": 0
							},
							"index": 0,
							"isId": false,
							"name": "createdAt",
							"sinceVersion": 1
						},
						{
							"index": 1,
							"isId": false,
							"name": "actor",
							"relationRef": {
								"index": 0
							},
							"sinceVersion": 1
						},
						{
							"columnRef": {
								"index": 2
							},
							"index": 2,
							"isId": false,
							"name": "updatedAt",
							"sinceVersion": 1
						},
						{
							"columnRef": {
								"index": 3
							},
							"index": 3,
							"isId": true,
							"name": "id",
							"sinceVersion": 1
						},
						{
							"index": 4,
							"isId": false,
							"name": "userPoll",
							"relationRef": {
								"index": 1
							},
							"sinceVersion": 1
						},
						{
							"index": 5,
							"isId": false,
							"name": "variation",
							"relationRef": {
								"index": 2
							},
							"sinceVersion": 1
						},
						{
							"index": 6,
							"isId": false,
							"name": "translations",
							"relationRef": {
								"index": 3
							},
							"sinceVersion": 1
						},
						{
							"index": 7,
							"isId": false,
							"name": "ratings",
							"relationRef": {
								"index": 4
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
							"relationTableIndex": 5,
							"sinceVersion": 1
						},
						{
							"index": 1,
							"isId": false,
							"relationType": 1,
							"propertyRef": {
								"index": 4
							},
							"relationTableIndex": 35,
							"sinceVersion": 1
						},
						{
							"index": 2,
							"isId": false,
							"relationType": 1,
							"propertyRef": {
								"index": 5
							},
							"relationTableIndex": 86,
							"sinceVersion": 1
						},
						{
							"index": 3,
							"isId": false,
							"oneToManyElems": {
								"cascade": 1,
								"mappedBy": "userPollVariation"
							},
							"relationType": 0,
							"propertyRef": {
								"index": 6
							},
							"relationTableIndex": 38,
							"sinceVersion": 1
						},
						{
							"index": 4,
							"isId": false,
							"oneToManyElems": {
								"cascade": 1,
								"mappedBy": "userPollVariation"
							},
							"relationType": 0,
							"propertyRef": {
								"index": 7
							},
							"relationTableIndex": 36,
							"sinceVersion": 1
						}
					],
					"sinceVersion": 1,
					"tableConfig": {
						"name": "USER_POLL_VARIATIONS",
						"indexes": []
					}
				},
				{
					"columns": [
						{
							"index": 0,
							"isGenerated": false,
							"manyRelationColumnRefs": [],
							"name": "CREATED_AT",
							"notNull": false,
							"propertyRefs": [
								{
									"index": 0
								}
							],
							"sinceVersion": 1,
							"type": 2
						},
						{
							"index": 1,
							"isGenerated": false,
							"manyRelationColumnRefs": [
								{
									"manyRelationIndex": 0,
									"oneSchemaIndex": null,
									"oneTableIndex": 5,
									"oneColumnIndex": 1,
									"sinceVersion": 1
								}
							],
							"name": "ACTOR_ID",
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
							"name": "UPDATED_AT",
							"notNull": false,
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
							"isGenerated": true,
							"manyRelationColumnRefs": [],
							"name": "USER_POLL_VARIATION_TRANSLATION_ID",
							"notNull": false,
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
							"isGenerated": false,
							"manyRelationColumnRefs": [
								{
									"manyRelationIndex": 1,
									"oneSchemaIndex": null,
									"oneTableIndex": 37,
									"oneRelationIndex": 3,
									"oneColumnIndex": 3,
									"sinceVersion": 1
								}
							],
							"name": "USER_POLL_VARIATION_ID",
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
							"isGenerated": false,
							"manyRelationColumnRefs": [
								{
									"manyRelationIndex": 2,
									"oneSchemaIndex": null,
									"oneTableIndex": 51,
									"oneColumnIndex": 2,
									"sinceVersion": 1
								}
							],
							"name": "POLL_VARIATION_TRANSLATION_ID",
							"notNull": false,
							"propertyRefs": [
								{
									"index": 5
								}
							],
							"sinceVersion": 1,
							"type": 4
						}
					],
					"idColumnRefs": [
						{
							"index": 3
						}
					],
					"index": 38,
					"isLocal": true,
					"isRepositoryEntity": false,
					"name": "UserPollVariationTranslation",
					"properties": [
						{
							"columnRef": {
								"index": 0
							},
							"index": 0,
							"isId": false,
							"name": "createdAt",
							"sinceVersion": 1
						},
						{
							"index": 1,
							"isId": false,
							"name": "actor",
							"relationRef": {
								"index": 0
							},
							"sinceVersion": 1
						},
						{
							"columnRef": {
								"index": 2
							},
							"index": 2,
							"isId": false,
							"name": "updatedAt",
							"sinceVersion": 1
						},
						{
							"columnRef": {
								"index": 3
							},
							"index": 3,
							"isId": true,
							"name": "id",
							"sinceVersion": 1
						},
						{
							"index": 4,
							"isId": false,
							"name": "userPollVariation",
							"relationRef": {
								"index": 1
							},
							"sinceVersion": 1
						},
						{
							"index": 5,
							"isId": false,
							"name": "variationTranslation",
							"relationRef": {
								"index": 2
							},
							"sinceVersion": 1
						},
						{
							"index": 6,
							"isId": false,
							"name": "ratings",
							"relationRef": {
								"index": 3
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
							"relationTableIndex": 5,
							"sinceVersion": 1
						},
						{
							"index": 1,
							"isId": false,
							"relationType": 1,
							"propertyRef": {
								"index": 4
							},
							"relationTableIndex": 37,
							"sinceVersion": 1
						},
						{
							"index": 2,
							"isId": false,
							"relationType": 1,
							"propertyRef": {
								"index": 5
							},
							"relationTableIndex": 51,
							"sinceVersion": 1
						},
						{
							"index": 3,
							"isId": false,
							"oneToManyElems": {
								"cascade": 1,
								"mappedBy": "userPollVariationTranslation"
							},
							"relationType": 0,
							"propertyRef": {
								"index": 6
							},
							"relationTableIndex": 39,
							"sinceVersion": 1
						}
					],
					"sinceVersion": 1,
					"tableConfig": {
						"name": "USER_POLL_VARIATION_TRANSLATIONS",
						"indexes": []
					}
				},
				{
					"columns": [
						{
							"index": 0,
							"isGenerated": false,
							"manyRelationColumnRefs": [],
							"name": "CREATED_AT",
							"notNull": false,
							"propertyRefs": [
								{
									"index": 0
								}
							],
							"sinceVersion": 1,
							"type": 2
						},
						{
							"index": 1,
							"isGenerated": false,
							"manyRelationColumnRefs": [
								{
									"manyRelationIndex": 0,
									"oneSchemaIndex": null,
									"oneTableIndex": 5,
									"oneColumnIndex": 1,
									"sinceVersion": 1
								}
							],
							"name": "ACTOR_ID",
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
							"isGenerated": true,
							"manyRelationColumnRefs": [],
							"name": "USER_POLL_VARIATION_TRANSLATION_RATING_ID",
							"notNull": false,
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
							"name": "USER_POLL_VARIATION_TRANSLATION_RATING_IS_CURRENT",
							"notNull": false,
							"propertyRefs": [
								{
									"index": 3
								}
							],
							"sinceVersion": 1,
							"type": 1
						},
						{
							"index": 4,
							"isGenerated": false,
							"manyRelationColumnRefs": [
								{
									"manyRelationIndex": 1,
									"oneSchemaIndex": null,
									"oneTableIndex": 38,
									"oneRelationIndex": 3,
									"oneColumnIndex": 3,
									"sinceVersion": 1
								}
							],
							"name": "USER_POLL_VARIATION_TRANSLATION_ID",
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
							"isGenerated": false,
							"manyRelationColumnRefs": [
								{
									"manyRelationIndex": 2,
									"oneSchemaIndex": null,
									"oneTableIndex": 51,
									"oneColumnIndex": 2,
									"sinceVersion": 1
								}
							],
							"name": "POLL_VARIATION_TRANSLATION_ID",
							"notNull": false,
							"propertyRefs": [
								{
									"index": 5
								}
							],
							"sinceVersion": 1,
							"type": 4
						},
						{
							"index": 6,
							"isGenerated": false,
							"manyRelationColumnRefs": [
								{
									"manyRelationIndex": 3,
									"oneSchemaIndex": null,
									"oneTableIndex": 30,
									"oneColumnIndex": 2,
									"sinceVersion": 1
								}
							],
							"name": "POLL_LOCATION_TIME_FRAME_ID",
							"notNull": false,
							"propertyRefs": [
								{
									"index": 6
								}
							],
							"sinceVersion": 1,
							"type": 4
						},
						{
							"index": 7,
							"isGenerated": false,
							"manyRelationColumnRefs": [
								{
									"manyRelationIndex": 4,
									"oneSchemaIndex": null,
									"oneTableIndex": 19,
									"oneColumnIndex": 1,
									"sinceVersion": 1
								}
							],
							"name": "RATING_ID",
							"notNull": false,
							"propertyRefs": [
								{
									"index": 7
								}
							],
							"sinceVersion": 1,
							"type": 4
						},
						{
							"index": 8,
							"isGenerated": false,
							"manyRelationColumnRefs": [
								{
									"manyRelationIndex": 5,
									"oneSchemaIndex": null,
									"oneTableIndex": 39,
									"oneRelationIndex": 6,
									"oneColumnIndex": 2,
									"sinceVersion": 1
								}
							],
							"name": "PARENT_USER_POLL_VARIATION_TRANSLATION_RATING_ID",
							"notNull": false,
							"propertyRefs": [
								{
									"index": 8
								}
							],
							"sinceVersion": 1,
							"type": 4
						}
					],
					"idColumnRefs": [
						{
							"index": 2
						}
					],
					"index": 39,
					"isLocal": true,
					"isRepositoryEntity": false,
					"name": "UserPollVariationTranslationRating",
					"properties": [
						{
							"columnRef": {
								"index": 0
							},
							"index": 0,
							"isId": false,
							"name": "createdAt",
							"sinceVersion": 1
						},
						{
							"index": 1,
							"isId": false,
							"name": "actor",
							"relationRef": {
								"index": 0
							},
							"sinceVersion": 1
						},
						{
							"columnRef": {
								"index": 2
							},
							"index": 2,
							"isId": true,
							"name": "id",
							"sinceVersion": 1
						},
						{
							"columnRef": {
								"index": 3
							},
							"index": 3,
							"isId": false,
							"name": "isCurrent",
							"sinceVersion": 1
						},
						{
							"index": 4,
							"isId": false,
							"name": "userPollVariationTranslation",
							"relationRef": {
								"index": 1
							},
							"sinceVersion": 1
						},
						{
							"index": 5,
							"isId": false,
							"name": "pollVariationTranslation",
							"relationRef": {
								"index": 2
							},
							"sinceVersion": 1
						},
						{
							"index": 6,
							"isId": false,
							"name": "locationTimeFrame",
							"relationRef": {
								"index": 3
							},
							"sinceVersion": 1
						},
						{
							"index": 7,
							"isId": false,
							"name": "rating",
							"relationRef": {
								"index": 4
							},
							"sinceVersion": 1
						},
						{
							"index": 8,
							"isId": false,
							"name": "parent",
							"relationRef": {
								"index": 5
							},
							"sinceVersion": 1
						},
						{
							"index": 9,
							"isId": false,
							"name": "child",
							"relationRef": {
								"index": 6
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
							"relationTableIndex": 5,
							"sinceVersion": 1
						},
						{
							"index": 1,
							"isId": false,
							"relationType": 1,
							"propertyRef": {
								"index": 4
							},
							"relationTableIndex": 38,
							"sinceVersion": 1
						},
						{
							"index": 2,
							"isId": false,
							"relationType": 1,
							"propertyRef": {
								"index": 5
							},
							"relationTableIndex": 51,
							"sinceVersion": 1
						},
						{
							"index": 3,
							"isId": false,
							"relationType": 1,
							"propertyRef": {
								"index": 6
							},
							"relationTableIndex": 30,
							"sinceVersion": 1
						},
						{
							"index": 4,
							"isId": false,
							"relationType": 1,
							"propertyRef": {
								"index": 7
							},
							"relationTableIndex": 19,
							"sinceVersion": 1
						},
						{
							"index": 5,
							"isId": false,
							"relationType": 1,
							"propertyRef": {
								"index": 8
							},
							"relationTableIndex": 39,
							"sinceVersion": 1
						},
						{
							"index": 6,
							"isId": false,
							"oneToManyElems": {
								"cascade": 1,
								"mappedBy": "parent"
							},
							"relationType": 0,
							"propertyRef": {
								"index": 9
							},
							"relationTableIndex": 39,
							"sinceVersion": 1
						}
					],
					"sinceVersion": 1,
					"tableConfig": {
						"name": "USER_POLL_VARIATION_TRANSLATION_RATINGS",
						"indexes": []
					}
				},
				{
					"columns": [
						{
							"index": 0,
							"isGenerated": false,
							"manyRelationColumnRefs": [],
							"name": "CREATED_AT",
							"notNull": false,
							"propertyRefs": [
								{
									"index": 0
								}
							],
							"sinceVersion": 1,
							"type": 2
						},
						{
							"index": 1,
							"isGenerated": true,
							"manyRelationColumnRefs": [],
							"name": "POLL_VARIATION_TRANSLATION_OPINION_COUNT_ID",
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
							"isGenerated": false,
							"manyRelationColumnRefs": [],
							"name": "COUNT",
							"notNull": false,
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
							"manyRelationColumnRefs": [
								{
									"manyRelationIndex": 0,
									"oneSchemaIndex": null,
									"oneTableIndex": 51,
									"oneRelationIndex": 11,
									"oneColumnIndex": 2,
									"sinceVersion": 1
								}
							],
							"name": "POLL_VARIATION_TRANSLATION_ID",
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
					"index": 40,
					"isLocal": true,
					"isRepositoryEntity": false,
					"name": "PollVariationTranslationOpinionCount",
					"properties": [
						{
							"columnRef": {
								"index": 0
							},
							"index": 0,
							"isId": false,
							"name": "createdAt",
							"sinceVersion": 1
						},
						{
							"columnRef": {
								"index": 1
							},
							"index": 1,
							"isId": false,
							"name": "id",
							"sinceVersion": 1
						},
						{
							"columnRef": {
								"index": 2
							},
							"index": 2,
							"isId": false,
							"name": "count",
							"sinceVersion": 1
						},
						{
							"index": 3,
							"isId": false,
							"name": "pollVariationTranslation",
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
							"relationTableIndex": 51,
							"sinceVersion": 1
						}
					],
					"sinceVersion": 1,
					"tableConfig": {
						"name": "POLL_VARIATION_TRANSLATION_OPINION_COUNTS",
						"indexes": []
					}
				},
				{
					"columns": [
						{
							"index": 0,
							"isGenerated": false,
							"manyRelationColumnRefs": [],
							"name": "CREATED_AT",
							"notNull": false,
							"propertyRefs": [
								{
									"index": 0
								}
							],
							"sinceVersion": 1,
							"type": 2
						},
						{
							"index": 1,
							"isGenerated": true,
							"manyRelationColumnRefs": [],
							"name": "POLL_VARIATION_TRANSLATION_OPINION_RATING_COUNT_ID",
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
							"isGenerated": false,
							"manyRelationColumnRefs": [],
							"name": "COUNT",
							"notNull": false,
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
							"manyRelationColumnRefs": [
								{
									"manyRelationIndex": 0,
									"oneSchemaIndex": null,
									"oneTableIndex": 51,
									"oneRelationIndex": 12,
									"oneColumnIndex": 2,
									"sinceVersion": 1
								}
							],
							"name": "POLL_VARIATION_TRANSLATION_ID",
							"notNull": false,
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
							"isGenerated": false,
							"manyRelationColumnRefs": [
								{
									"manyRelationIndex": 1,
									"oneSchemaIndex": null,
									"oneTableIndex": 19,
									"oneColumnIndex": 1,
									"sinceVersion": 1
								}
							],
							"name": "RATING_ID",
							"notNull": false,
							"propertyRefs": [
								{
									"index": 4
								}
							],
							"sinceVersion": 1,
							"type": 4
						}
					],
					"idColumnRefs": [],
					"index": 41,
					"isLocal": true,
					"isRepositoryEntity": false,
					"name": "PollVariationTranslationOpinionRatingCount",
					"properties": [
						{
							"columnRef": {
								"index": 0
							},
							"index": 0,
							"isId": false,
							"name": "createdAt",
							"sinceVersion": 1
						},
						{
							"columnRef": {
								"index": 1
							},
							"index": 1,
							"isId": false,
							"name": "id",
							"sinceVersion": 1
						},
						{
							"columnRef": {
								"index": 2
							},
							"index": 2,
							"isId": false,
							"name": "count",
							"sinceVersion": 1
						},
						{
							"index": 3,
							"isId": false,
							"name": "pollVariationTranslation",
							"relationRef": {
								"index": 0
							},
							"sinceVersion": 1
						},
						{
							"index": 4,
							"isId": false,
							"name": "rating",
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
								"index": 3
							},
							"relationTableIndex": 51,
							"sinceVersion": 1
						},
						{
							"index": 1,
							"isId": false,
							"relationType": 1,
							"propertyRef": {
								"index": 4
							},
							"relationTableIndex": 19,
							"sinceVersion": 1
						}
					],
					"sinceVersion": 1,
					"tableConfig": {
						"name": "POLL_VARIATION_TRANSLATION_OPINION_RATING_COUNTS",
						"indexes": []
					}
				},
				{
					"columns": [
						{
							"index": 0,
							"isGenerated": false,
							"manyRelationColumnRefs": [],
							"name": "CREATED_AT",
							"notNull": false,
							"propertyRefs": [
								{
									"index": 0
								}
							],
							"sinceVersion": 1,
							"type": 2
						},
						{
							"index": 1,
							"isGenerated": true,
							"manyRelationColumnRefs": [],
							"name": "POLL_VARIATION_TRANSLATION_RATING_COUNT_ID",
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
							"isGenerated": false,
							"manyRelationColumnRefs": [],
							"name": "COUNT",
							"notNull": false,
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
							"manyRelationColumnRefs": [
								{
									"manyRelationIndex": 0,
									"oneSchemaIndex": null,
									"oneTableIndex": 51,
									"oneRelationIndex": 8,
									"oneColumnIndex": 2,
									"sinceVersion": 1
								}
							],
							"name": "POLL_VARIATION_TRANSLATION_ID",
							"notNull": false,
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
							"isGenerated": false,
							"manyRelationColumnRefs": [
								{
									"manyRelationIndex": 1,
									"oneSchemaIndex": null,
									"oneTableIndex": 19,
									"oneColumnIndex": 1,
									"sinceVersion": 1
								}
							],
							"name": "RATING_ID",
							"notNull": false,
							"propertyRefs": [
								{
									"index": 4
								}
							],
							"sinceVersion": 1,
							"type": 4
						}
					],
					"idColumnRefs": [],
					"index": 42,
					"isLocal": true,
					"isRepositoryEntity": false,
					"name": "PollVariationTranslationRatingCount",
					"properties": [
						{
							"columnRef": {
								"index": 0
							},
							"index": 0,
							"isId": false,
							"name": "createdAt",
							"sinceVersion": 1
						},
						{
							"columnRef": {
								"index": 1
							},
							"index": 1,
							"isId": false,
							"name": "id",
							"sinceVersion": 1
						},
						{
							"columnRef": {
								"index": 2
							},
							"index": 2,
							"isId": false,
							"name": "count",
							"sinceVersion": 1
						},
						{
							"index": 3,
							"isId": false,
							"name": "pollVariationTranslation",
							"relationRef": {
								"index": 0
							},
							"sinceVersion": 1
						},
						{
							"index": 4,
							"isId": false,
							"name": "rating",
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
								"index": 3
							},
							"relationTableIndex": 51,
							"sinceVersion": 1
						},
						{
							"index": 1,
							"isId": false,
							"relationType": 1,
							"propertyRef": {
								"index": 4
							},
							"relationTableIndex": 19,
							"sinceVersion": 1
						}
					],
					"sinceVersion": 1,
					"tableConfig": {
						"name": "POLL_VARIATION_TRANSLATION_RATING_COUNTS",
						"indexes": []
					}
				},
				{
					"columns": [
						{
							"index": 0,
							"isGenerated": false,
							"manyRelationColumnRefs": [],
							"name": "CREATED_AT",
							"notNull": false,
							"propertyRefs": [
								{
									"index": 0
								}
							],
							"sinceVersion": 1,
							"type": 2
						},
						{
							"index": 1,
							"isGenerated": true,
							"manyRelationColumnRefs": [],
							"name": "POLL_VARIATION_TRANSLATION_VOTE_COUNT_ID",
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
							"isGenerated": false,
							"manyRelationColumnRefs": [],
							"name": "COUNT",
							"notNull": false,
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
							"manyRelationColumnRefs": [
								{
									"manyRelationIndex": 0,
									"oneSchemaIndex": null,
									"oneTableIndex": 51,
									"oneRelationIndex": 13,
									"oneColumnIndex": 2,
									"sinceVersion": 1
								}
							],
							"name": "POLL_VARIATION_TRANSLATION_ID",
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
					"index": 43,
					"isLocal": true,
					"isRepositoryEntity": false,
					"name": "PollVariationTranslationVoteCount",
					"properties": [
						{
							"columnRef": {
								"index": 0
							},
							"index": 0,
							"isId": false,
							"name": "createdAt",
							"sinceVersion": 1
						},
						{
							"columnRef": {
								"index": 1
							},
							"index": 1,
							"isId": false,
							"name": "id",
							"sinceVersion": 1
						},
						{
							"columnRef": {
								"index": 2
							},
							"index": 2,
							"isId": false,
							"name": "count",
							"sinceVersion": 1
						},
						{
							"index": 3,
							"isId": false,
							"name": "pollVariationTranslation",
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
							"relationTableIndex": 51,
							"sinceVersion": 1
						}
					],
					"sinceVersion": 1,
					"tableConfig": {
						"name": "POLL_VARIATION_TRANSLATION_VOTE_COUNTS",
						"indexes": []
					}
				},
				{
					"columns": [
						{
							"index": 0,
							"isGenerated": false,
							"manyRelationColumnRefs": [],
							"name": "CREATED_AT",
							"notNull": false,
							"propertyRefs": [
								{
									"index": 0
								}
							],
							"sinceVersion": 1,
							"type": 2
						},
						{
							"index": 1,
							"isGenerated": false,
							"manyRelationColumnRefs": [
								{
									"manyRelationIndex": 0,
									"oneSchemaIndex": null,
									"oneTableIndex": 5,
									"oneColumnIndex": 1,
									"sinceVersion": 1
								}
							],
							"name": "ACTOR_ID",
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
							"isGenerated": true,
							"manyRelationColumnRefs": [],
							"name": "FACTOR_VARIATION_ID",
							"notNull": false,
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
							"manyRelationColumnRefs": [
								{
									"manyRelationIndex": 1,
									"oneSchemaIndex": null,
									"oneTableIndex": 86,
									"oneColumnIndex": 2,
									"sinceVersion": 1
								}
							],
							"name": "POLL_VARIATION_ID",
							"notNull": false,
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
							"isGenerated": false,
							"manyRelationColumnRefs": [
								{
									"manyRelationIndex": 2,
									"oneSchemaIndex": null,
									"oneTableIndex": 88,
									"oneRelationIndex": 5,
									"oneColumnIndex": 2,
									"sinceVersion": 1
								}
							],
							"name": "FACTOR_ID",
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
							"isGenerated": false,
							"manyRelationColumnRefs": [
								{
									"manyRelationIndex": 3,
									"oneSchemaIndex": null,
									"oneTableIndex": 44,
									"oneRelationIndex": 4,
									"oneColumnIndex": 2,
									"sinceVersion": 1
								}
							],
							"name": "PARENT_FACTOR_VARIATION_ID",
							"notNull": false,
							"propertyRefs": [
								{
									"index": 5
								}
							],
							"sinceVersion": 1,
							"type": 4
						}
					],
					"idColumnRefs": [
						{
							"index": 2
						}
					],
					"index": 44,
					"isLocal": true,
					"isRepositoryEntity": false,
					"name": "FactorVariation",
					"properties": [
						{
							"columnRef": {
								"index": 0
							},
							"index": 0,
							"isId": false,
							"name": "createdAt",
							"sinceVersion": 1
						},
						{
							"index": 1,
							"isId": false,
							"name": "actor",
							"relationRef": {
								"index": 0
							},
							"sinceVersion": 1
						},
						{
							"columnRef": {
								"index": 2
							},
							"index": 2,
							"isId": true,
							"name": "id",
							"sinceVersion": 1
						},
						{
							"index": 3,
							"isId": false,
							"name": "pollVariation",
							"relationRef": {
								"index": 1
							},
							"sinceVersion": 1
						},
						{
							"index": 4,
							"isId": false,
							"name": "factor",
							"relationRef": {
								"index": 2
							},
							"sinceVersion": 1
						},
						{
							"index": 5,
							"isId": false,
							"name": "parent",
							"relationRef": {
								"index": 3
							},
							"sinceVersion": 1
						},
						{
							"index": 6,
							"isId": false,
							"name": "children",
							"relationRef": {
								"index": 4
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
							"relationTableIndex": 5,
							"sinceVersion": 1
						},
						{
							"index": 1,
							"isId": false,
							"relationType": 1,
							"propertyRef": {
								"index": 3
							},
							"relationTableIndex": 86,
							"sinceVersion": 1
						},
						{
							"index": 2,
							"isId": false,
							"relationType": 1,
							"propertyRef": {
								"index": 4
							},
							"relationTableIndex": 88,
							"sinceVersion": 1
						},
						{
							"index": 3,
							"isId": false,
							"relationType": 1,
							"propertyRef": {
								"index": 5
							},
							"relationTableIndex": 44,
							"sinceVersion": 1
						},
						{
							"index": 4,
							"isId": false,
							"oneToManyElems": {
								"cascade": 1,
								"mappedBy": "parent"
							},
							"relationType": 0,
							"propertyRef": {
								"index": 6
							},
							"relationTableIndex": 44,
							"sinceVersion": 1
						}
					],
					"sinceVersion": 1,
					"tableConfig": {
						"name": "FACTOR_VARIATIONS",
						"indexes": []
					}
				},
				{
					"columns": [
						{
							"index": 0,
							"isGenerated": false,
							"manyRelationColumnRefs": [],
							"name": "CREATED_AT",
							"notNull": false,
							"propertyRefs": [
								{
									"index": 0
								}
							],
							"sinceVersion": 1,
							"type": 2
						},
						{
							"index": 1,
							"isGenerated": false,
							"manyRelationColumnRefs": [
								{
									"manyRelationIndex": 0,
									"oneSchemaIndex": null,
									"oneTableIndex": 5,
									"oneColumnIndex": 1,
									"sinceVersion": 1
								}
							],
							"name": "ACTOR_ID",
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
							"isGenerated": true,
							"manyRelationColumnRefs": [],
							"name": "FACTOR_VARIATION_TRANSLATION_ID",
							"notNull": false,
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
							"name": "FACTOR_NAME",
							"notNull": false,
							"propertyRefs": [
								{
									"index": 3
								}
							],
							"sinceVersion": 1,
							"type": 5
						},
						{
							"index": 4,
							"isGenerated": false,
							"manyRelationColumnRefs": [],
							"name": "FACTOR_DESCRIPTION",
							"notNull": false,
							"propertyRefs": [
								{
									"index": 4
								}
							],
							"sinceVersion": 1,
							"type": 5
						},
						{
							"index": 5,
							"isGenerated": false,
							"manyRelationColumnRefs": [
								{
									"manyRelationIndex": 1,
									"oneSchemaIndex": null,
									"oneTableIndex": 44,
									"oneColumnIndex": 2,
									"sinceVersion": 1
								}
							],
							"name": "FACTOR_VARIATION_ID",
							"notNull": false,
							"propertyRefs": [
								{
									"index": 5
								}
							],
							"sinceVersion": 1,
							"type": 4
						},
						{
							"index": 6,
							"isGenerated": false,
							"manyRelationColumnRefs": [
								{
									"manyRelationIndex": 2,
									"oneSchemaIndex": null,
									"oneTableIndex": 16,
									"oneColumnIndex": 0,
									"sinceVersion": 1
								}
							],
							"name": "LANGUAGE_ID",
							"notNull": false,
							"propertyRefs": [
								{
									"index": 6
								}
							],
							"sinceVersion": 1,
							"type": 4
						},
						{
							"index": 7,
							"isGenerated": false,
							"manyRelationColumnRefs": [
								{
									"manyRelationIndex": 3,
									"oneSchemaIndex": null,
									"oneTableIndex": 45,
									"oneRelationIndex": 4,
									"oneColumnIndex": 2,
									"sinceVersion": 1
								}
							],
							"name": "PARENT_FACTOR_VARIATION_TRANSLATION_ID",
							"notNull": false,
							"propertyRefs": [
								{
									"index": 7
								}
							],
							"sinceVersion": 1,
							"type": 4
						}
					],
					"idColumnRefs": [
						{
							"index": 2
						}
					],
					"index": 45,
					"isLocal": true,
					"isRepositoryEntity": false,
					"name": "FactorVariationTranslation",
					"properties": [
						{
							"columnRef": {
								"index": 0
							},
							"index": 0,
							"isId": false,
							"name": "createdAt",
							"sinceVersion": 1
						},
						{
							"index": 1,
							"isId": false,
							"name": "actor",
							"relationRef": {
								"index": 0
							},
							"sinceVersion": 1
						},
						{
							"columnRef": {
								"index": 2
							},
							"index": 2,
							"isId": true,
							"name": "id",
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
							"columnRef": {
								"index": 4
							},
							"index": 4,
							"isId": false,
							"name": "description",
							"sinceVersion": 1
						},
						{
							"index": 5,
							"isId": false,
							"name": "factorVariation",
							"relationRef": {
								"index": 1
							},
							"sinceVersion": 1
						},
						{
							"index": 6,
							"isId": false,
							"name": "language",
							"relationRef": {
								"index": 2
							},
							"sinceVersion": 1
						},
						{
							"index": 7,
							"isId": false,
							"name": "parent",
							"relationRef": {
								"index": 3
							},
							"sinceVersion": 1
						},
						{
							"index": 8,
							"isId": false,
							"name": "children",
							"relationRef": {
								"index": 4
							},
							"sinceVersion": 1
						},
						{
							"index": 9,
							"isId": false,
							"name": "childFactors",
							"relationRef": {
								"index": 5
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
							"relationTableIndex": 5,
							"sinceVersion": 1
						},
						{
							"index": 1,
							"isId": false,
							"relationType": 1,
							"propertyRef": {
								"index": 5
							},
							"relationTableIndex": 44,
							"sinceVersion": 1
						},
						{
							"index": 2,
							"isId": false,
							"relationType": 1,
							"propertyRef": {
								"index": 6
							},
							"relationTableIndex": 16,
							"sinceVersion": 1
						},
						{
							"index": 3,
							"isId": false,
							"relationType": 1,
							"propertyRef": {
								"index": 7
							},
							"relationTableIndex": 45,
							"sinceVersion": 1
						},
						{
							"index": 4,
							"isId": false,
							"oneToManyElems": {
								"cascade": 1,
								"mappedBy": "parent"
							},
							"relationType": 0,
							"propertyRef": {
								"index": 8
							},
							"relationTableIndex": 45,
							"sinceVersion": 1
						},
						{
							"index": 5,
							"isId": false,
							"oneToManyElems": {
								"cascade": 1,
								"mappedBy": "parentTranslation"
							},
							"relationType": 0,
							"propertyRef": {
								"index": 9
							},
							"relationTableIndex": 88,
							"sinceVersion": 1
						}
					],
					"sinceVersion": 1,
					"tableConfig": {
						"name": "FACTOR_VARIATION_TRANSLATIONS",
						"indexes": []
					}
				},
				{
					"columns": [
						{
							"index": 0,
							"isGenerated": false,
							"manyRelationColumnRefs": [
								{
									"manyRelationIndex": 0,
									"oneSchemaIndex": null,
									"oneTableIndex": 51,
									"oneRelationIndex": 9,
									"oneColumnIndex": 2,
									"sinceVersion": 1
								}
							],
							"name": "POLL_VARIATION_TRANSLATION_ID",
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
							"manyRelationColumnRefs": [
								{
									"manyRelationIndex": 1,
									"oneSchemaIndex": null,
									"oneTableIndex": 45,
									"oneColumnIndex": 2,
									"sinceVersion": 1
								}
							],
							"name": "FACTOR_VARIATION_TRANSLATION_ID",
							"notNull": false,
							"propertyRefs": [
								{
									"index": 1
								}
							],
							"sinceVersion": 1,
							"type": 4
						}
					],
					"idColumnRefs": [
						{
							"index": 0
						},
						{
							"index": 1
						}
					],
					"index": 46,
					"isLocal": true,
					"isRepositoryEntity": false,
					"name": "PollVariationFactorTranslation",
					"properties": [
						{
							"index": 0,
							"isId": true,
							"name": "pollVariationTranslation",
							"relationRef": {
								"index": 0
							},
							"sinceVersion": 1
						},
						{
							"index": 1,
							"isId": true,
							"name": "factorVariationTranslation",
							"relationRef": {
								"index": 1
							},
							"sinceVersion": 1
						}
					],
					"relations": [
						{
							"index": 0,
							"isId": true,
							"relationType": 1,
							"propertyRef": {
								"index": 0
							},
							"relationTableIndex": 51,
							"sinceVersion": 1
						},
						{
							"index": 1,
							"isId": true,
							"relationType": 1,
							"propertyRef": {
								"index": 1
							},
							"relationTableIndex": 45,
							"sinceVersion": 1
						}
					],
					"sinceVersion": 1,
					"tableConfig": {
						"name": "POLL_VARIATION_FACTOR_TRANSLATIONS",
						"indexes": []
					}
				},
				{
					"columns": [
						{
							"index": 0,
							"isGenerated": false,
							"manyRelationColumnRefs": [],
							"name": "CREATED_AT",
							"notNull": false,
							"propertyRefs": [
								{
									"index": 0
								}
							],
							"sinceVersion": 1,
							"type": 2
						},
						{
							"index": 1,
							"isGenerated": false,
							"manyRelationColumnRefs": [
								{
									"manyRelationIndex": 0,
									"oneSchemaIndex": null,
									"oneTableIndex": 5,
									"oneColumnIndex": 1,
									"sinceVersion": 1
								}
							],
							"name": "ACTOR_ID",
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
							"isGenerated": true,
							"manyRelationColumnRefs": [],
							"name": "POSITION_ID",
							"notNull": false,
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
							"manyRelationColumnRefs": [
								{
									"manyRelationIndex": 1,
									"oneSchemaIndex": null,
									"oneTableIndex": 49,
									"oneColumnIndex": 2,
									"sinceVersion": 1
								}
							],
							"name": "PARENT_POSITION_VARIATION_TRANSLATION_ID",
							"notNull": false,
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
							"isGenerated": false,
							"manyRelationColumnRefs": [
								{
									"manyRelationIndex": 2,
									"oneSchemaIndex": null,
									"oneTableIndex": 47,
									"oneRelationIndex": 3,
									"oneColumnIndex": 2,
									"sinceVersion": 1
								}
							],
							"name": "PARENT_POSITION_ID",
							"notNull": false,
							"propertyRefs": [
								{
									"index": 4
								}
							],
							"sinceVersion": 1,
							"type": 4
						}
					],
					"idColumnRefs": [
						{
							"index": 2
						}
					],
					"index": 47,
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
							"name": "createdAt",
							"sinceVersion": 1
						},
						{
							"index": 1,
							"isId": false,
							"name": "actor",
							"relationRef": {
								"index": 0
							},
							"sinceVersion": 1
						},
						{
							"columnRef": {
								"index": 2
							},
							"index": 2,
							"isId": true,
							"name": "id",
							"sinceVersion": 1
						},
						{
							"index": 3,
							"isId": false,
							"name": "parentTranslation",
							"relationRef": {
								"index": 1
							},
							"sinceVersion": 1
						},
						{
							"index": 4,
							"isId": false,
							"name": "parent",
							"relationRef": {
								"index": 2
							},
							"sinceVersion": 1
						},
						{
							"index": 5,
							"isId": false,
							"name": "children",
							"relationRef": {
								"index": 3
							},
							"sinceVersion": 1
						},
						{
							"index": 6,
							"isId": false,
							"name": "factorPositions",
							"relationRef": {
								"index": 4
							},
							"sinceVersion": 1
						},
						{
							"index": 7,
							"isId": false,
							"name": "variations",
							"relationRef": {
								"index": 5
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
							"relationTableIndex": 5,
							"sinceVersion": 1
						},
						{
							"index": 1,
							"isId": false,
							"relationType": 1,
							"propertyRef": {
								"index": 3
							},
							"relationTableIndex": 49,
							"sinceVersion": 1
						},
						{
							"index": 2,
							"isId": false,
							"relationType": 1,
							"propertyRef": {
								"index": 4
							},
							"relationTableIndex": 47,
							"sinceVersion": 1
						},
						{
							"index": 3,
							"isId": false,
							"oneToManyElems": {
								"cascade": 1,
								"mappedBy": "parent"
							},
							"relationType": 0,
							"propertyRef": {
								"index": 5
							},
							"relationTableIndex": 47,
							"sinceVersion": 1
						},
						{
							"index": 4,
							"isId": false,
							"oneToManyElems": {
								"cascade": 1,
								"mappedBy": "position"
							},
							"relationType": 0,
							"propertyRef": {
								"index": 6
							},
							"relationTableIndex": 89,
							"sinceVersion": 1
						},
						{
							"index": 5,
							"isId": false,
							"oneToManyElems": {
								"cascade": 1,
								"mappedBy": "position"
							},
							"relationType": 0,
							"propertyRef": {
								"index": 7
							},
							"relationTableIndex": 48,
							"sinceVersion": 1
						}
					],
					"sinceVersion": 1,
					"tableConfig": {
						"name": "POSITIONS",
						"indexes": []
					}
				},
				{
					"columns": [
						{
							"index": 0,
							"isGenerated": false,
							"manyRelationColumnRefs": [],
							"name": "CREATED_AT",
							"notNull": false,
							"propertyRefs": [
								{
									"index": 0
								}
							],
							"sinceVersion": 1,
							"type": 2
						},
						{
							"index": 1,
							"isGenerated": false,
							"manyRelationColumnRefs": [
								{
									"manyRelationIndex": 0,
									"oneSchemaIndex": null,
									"oneTableIndex": 5,
									"oneColumnIndex": 1,
									"sinceVersion": 1
								}
							],
							"name": "ACTOR_ID",
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
							"isGenerated": true,
							"manyRelationColumnRefs": [],
							"name": "POSITION_VARIATION_ID",
							"notNull": false,
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
							"manyRelationColumnRefs": [
								{
									"manyRelationIndex": 1,
									"oneSchemaIndex": null,
									"oneTableIndex": 86,
									"oneColumnIndex": 2,
									"sinceVersion": 1
								}
							],
							"name": "POLL_VARIATION_ID",
							"notNull": false,
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
							"isGenerated": false,
							"manyRelationColumnRefs": [
								{
									"manyRelationIndex": 2,
									"oneSchemaIndex": null,
									"oneTableIndex": 47,
									"oneRelationIndex": 5,
									"oneColumnIndex": 2,
									"sinceVersion": 1
								}
							],
							"name": "POSITION_ID",
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
							"isGenerated": false,
							"manyRelationColumnRefs": [
								{
									"manyRelationIndex": 3,
									"oneSchemaIndex": null,
									"oneTableIndex": 48,
									"oneRelationIndex": 4,
									"oneColumnIndex": 2,
									"sinceVersion": 1
								}
							],
							"name": "PARENT_POSITION_VARIATION_ID",
							"notNull": false,
							"propertyRefs": [
								{
									"index": 5
								}
							],
							"sinceVersion": 1,
							"type": 4
						}
					],
					"idColumnRefs": [
						{
							"index": 2
						}
					],
					"index": 48,
					"isLocal": true,
					"isRepositoryEntity": false,
					"name": "PositionVariation",
					"properties": [
						{
							"columnRef": {
								"index": 0
							},
							"index": 0,
							"isId": false,
							"name": "createdAt",
							"sinceVersion": 1
						},
						{
							"index": 1,
							"isId": false,
							"name": "actor",
							"relationRef": {
								"index": 0
							},
							"sinceVersion": 1
						},
						{
							"columnRef": {
								"index": 2
							},
							"index": 2,
							"isId": true,
							"name": "id",
							"sinceVersion": 1
						},
						{
							"index": 3,
							"isId": false,
							"name": "createdAtPollVariation",
							"relationRef": {
								"index": 1
							},
							"sinceVersion": 1
						},
						{
							"index": 4,
							"isId": false,
							"name": "position",
							"relationRef": {
								"index": 2
							},
							"sinceVersion": 1
						},
						{
							"index": 5,
							"isId": false,
							"name": "parent",
							"relationRef": {
								"index": 3
							},
							"sinceVersion": 1
						},
						{
							"index": 6,
							"isId": false,
							"name": "children",
							"relationRef": {
								"index": 4
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
							"relationTableIndex": 5,
							"sinceVersion": 1
						},
						{
							"index": 1,
							"isId": false,
							"relationType": 1,
							"propertyRef": {
								"index": 3
							},
							"relationTableIndex": 86,
							"sinceVersion": 1
						},
						{
							"index": 2,
							"isId": false,
							"relationType": 1,
							"propertyRef": {
								"index": 4
							},
							"relationTableIndex": 47,
							"sinceVersion": 1
						},
						{
							"index": 3,
							"isId": false,
							"relationType": 1,
							"propertyRef": {
								"index": 5
							},
							"relationTableIndex": 48,
							"sinceVersion": 1
						},
						{
							"index": 4,
							"isId": false,
							"oneToManyElems": {
								"cascade": 1,
								"mappedBy": "parent"
							},
							"relationType": 0,
							"propertyRef": {
								"index": 6
							},
							"relationTableIndex": 48,
							"sinceVersion": 1
						}
					],
					"sinceVersion": 1,
					"tableConfig": {
						"name": "POSITION_VARIATIONS",
						"indexes": []
					}
				},
				{
					"columns": [
						{
							"index": 0,
							"isGenerated": false,
							"manyRelationColumnRefs": [],
							"name": "CREATED_AT",
							"notNull": false,
							"propertyRefs": [
								{
									"index": 0
								}
							],
							"sinceVersion": 1,
							"type": 2
						},
						{
							"index": 1,
							"isGenerated": false,
							"manyRelationColumnRefs": [
								{
									"manyRelationIndex": 0,
									"oneSchemaIndex": null,
									"oneTableIndex": 5,
									"oneColumnIndex": 1,
									"sinceVersion": 1
								}
							],
							"name": "ACTOR_ID",
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
							"isGenerated": true,
							"manyRelationColumnRefs": [],
							"name": "POSITION_VARIATION_TRANSLATION_ID",
							"notNull": false,
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
							"name": "POSITION_DESCRIPTION",
							"notNull": false,
							"propertyRefs": [
								{
									"index": 3
								}
							],
							"sinceVersion": 1,
							"type": 5
						},
						{
							"index": 4,
							"isGenerated": false,
							"manyRelationColumnRefs": [
								{
									"manyRelationIndex": 1,
									"oneSchemaIndex": null,
									"oneTableIndex": 48,
									"oneColumnIndex": 2,
									"sinceVersion": 1
								}
							],
							"name": "POSITION_VARIATION_ID",
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
							"isGenerated": false,
							"manyRelationColumnRefs": [
								{
									"manyRelationIndex": 2,
									"oneSchemaIndex": null,
									"oneTableIndex": 16,
									"oneColumnIndex": 0,
									"sinceVersion": 1
								}
							],
							"name": "LANGUAGE_ID",
							"notNull": false,
							"propertyRefs": [
								{
									"index": 5
								}
							],
							"sinceVersion": 1,
							"type": 4
						},
						{
							"index": 6,
							"isGenerated": false,
							"manyRelationColumnRefs": [
								{
									"manyRelationIndex": 3,
									"oneSchemaIndex": null,
									"oneTableIndex": 49,
									"oneRelationIndex": 4,
									"oneColumnIndex": 2,
									"sinceVersion": 1
								}
							],
							"name": "PARENT_POSITION_VARIATION_TRANSLATION_ID",
							"notNull": false,
							"propertyRefs": [
								{
									"index": 6
								}
							],
							"sinceVersion": 1,
							"type": 4
						}
					],
					"idColumnRefs": [
						{
							"index": 2
						}
					],
					"index": 49,
					"isLocal": true,
					"isRepositoryEntity": false,
					"name": "PositionVariationTranslation",
					"properties": [
						{
							"columnRef": {
								"index": 0
							},
							"index": 0,
							"isId": false,
							"name": "createdAt",
							"sinceVersion": 1
						},
						{
							"index": 1,
							"isId": false,
							"name": "actor",
							"relationRef": {
								"index": 0
							},
							"sinceVersion": 1
						},
						{
							"columnRef": {
								"index": 2
							},
							"index": 2,
							"isId": true,
							"name": "id",
							"sinceVersion": 1
						},
						{
							"columnRef": {
								"index": 3
							},
							"index": 3,
							"isId": false,
							"name": "description",
							"sinceVersion": 1
						},
						{
							"index": 4,
							"isId": false,
							"name": "positionVariation",
							"relationRef": {
								"index": 1
							},
							"sinceVersion": 1
						},
						{
							"index": 5,
							"isId": false,
							"name": "language",
							"relationRef": {
								"index": 2
							},
							"sinceVersion": 1
						},
						{
							"index": 6,
							"isId": false,
							"name": "parent",
							"relationRef": {
								"index": 3
							},
							"sinceVersion": 1
						},
						{
							"index": 7,
							"isId": false,
							"name": "children",
							"relationRef": {
								"index": 4
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
							"relationTableIndex": 5,
							"sinceVersion": 1
						},
						{
							"index": 1,
							"isId": false,
							"relationType": 1,
							"propertyRef": {
								"index": 4
							},
							"relationTableIndex": 48,
							"sinceVersion": 1
						},
						{
							"index": 2,
							"isId": false,
							"relationType": 1,
							"propertyRef": {
								"index": 5
							},
							"relationTableIndex": 16,
							"sinceVersion": 1
						},
						{
							"index": 3,
							"isId": false,
							"relationType": 1,
							"propertyRef": {
								"index": 6
							},
							"relationTableIndex": 49,
							"sinceVersion": 1
						},
						{
							"index": 4,
							"isId": false,
							"oneToManyElems": {
								"cascade": 1,
								"mappedBy": "parent"
							},
							"relationType": 0,
							"propertyRef": {
								"index": 7
							},
							"relationTableIndex": 49,
							"sinceVersion": 1
						}
					],
					"sinceVersion": 1,
					"tableConfig": {
						"name": "POSITION_VARIATION_TRANSLATIONS",
						"indexes": []
					}
				},
				{
					"columns": [
						{
							"index": 0,
							"isGenerated": false,
							"manyRelationColumnRefs": [
								{
									"manyRelationIndex": 0,
									"oneSchemaIndex": null,
									"oneTableIndex": 51,
									"oneRelationIndex": 10,
									"oneColumnIndex": 2,
									"sinceVersion": 1
								}
							],
							"name": "POLL_VARIATION_TRANSLATION_ID",
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
							"manyRelationColumnRefs": [
								{
									"manyRelationIndex": 1,
									"oneSchemaIndex": null,
									"oneTableIndex": 49,
									"oneColumnIndex": 2,
									"sinceVersion": 1
								}
							],
							"name": "POSITION_VARIATION_TRANSLATION_ID",
							"notNull": false,
							"propertyRefs": [
								{
									"index": 1
								}
							],
							"sinceVersion": 1,
							"type": 4
						}
					],
					"idColumnRefs": [
						{
							"index": 0
						},
						{
							"index": 1
						}
					],
					"index": 50,
					"isLocal": true,
					"isRepositoryEntity": false,
					"name": "PollVariationPositionTranslation",
					"properties": [
						{
							"index": 0,
							"isId": true,
							"name": "pollVariationTranslation",
							"relationRef": {
								"index": 0
							},
							"sinceVersion": 1
						},
						{
							"index": 1,
							"isId": true,
							"name": "positionVariationTranslation",
							"relationRef": {
								"index": 1
							},
							"sinceVersion": 1
						}
					],
					"relations": [
						{
							"index": 0,
							"isId": true,
							"relationType": 1,
							"propertyRef": {
								"index": 0
							},
							"relationTableIndex": 51,
							"sinceVersion": 1
						},
						{
							"index": 1,
							"isId": true,
							"relationType": 1,
							"propertyRef": {
								"index": 1
							},
							"relationTableIndex": 49,
							"sinceVersion": 1
						}
					],
					"sinceVersion": 1,
					"tableConfig": {
						"name": "POLL_VARIATION_POSITION_TRANSLATIONS",
						"indexes": []
					}
				},
				{
					"columns": [
						{
							"index": 0,
							"isGenerated": false,
							"manyRelationColumnRefs": [],
							"name": "CREATED_AT",
							"notNull": false,
							"propertyRefs": [
								{
									"index": 0
								}
							],
							"sinceVersion": 1,
							"type": 2
						},
						{
							"index": 1,
							"isGenerated": false,
							"manyRelationColumnRefs": [
								{
									"manyRelationIndex": 0,
									"oneSchemaIndex": null,
									"oneTableIndex": 5,
									"oneColumnIndex": 1,
									"sinceVersion": 1
								}
							],
							"name": "ACTOR_ID",
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
							"isGenerated": true,
							"manyRelationColumnRefs": [],
							"name": "POLL_VARIATION_TRANSLATION_ID",
							"notNull": false,
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
							"name": "POLL_NAME",
							"notNull": false,
							"propertyRefs": [
								{
									"index": 5
								}
							],
							"sinceVersion": 1,
							"type": 5
						},
						{
							"index": 4,
							"isGenerated": false,
							"manyRelationColumnRefs": [],
							"name": "POLL_DESCRIPTION",
							"notNull": false,
							"propertyRefs": [
								{
									"index": 6
								}
							],
							"sinceVersion": 1,
							"type": 5
						},
						{
							"index": 5,
							"isGenerated": false,
							"manyRelationColumnRefs": [
								{
									"manyRelationIndex": 1,
									"oneSchemaIndex": null,
									"oneTableIndex": 86,
									"oneRelationIndex": 13,
									"oneColumnIndex": 2,
									"sinceVersion": 1
								}
							],
							"name": "POLL_VARIATION_ID",
							"notNull": false,
							"propertyRefs": [
								{
									"index": 3
								}
							],
							"sinceVersion": 1,
							"type": 4
						},
						{
							"index": 6,
							"isGenerated": false,
							"manyRelationColumnRefs": [
								{
									"manyRelationIndex": 2,
									"oneSchemaIndex": null,
									"oneTableIndex": 16,
									"oneColumnIndex": 0,
									"sinceVersion": 1
								}
							],
							"name": "LANGUAGE_ID",
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
							"index": 7,
							"isGenerated": false,
							"manyRelationColumnRefs": [
								{
									"manyRelationIndex": 3,
									"oneSchemaIndex": null,
									"oneTableIndex": 33,
									"oneColumnIndex": 0,
									"sinceVersion": 1
								}
							],
							"name": "TRANSLATION_TYPE_ID",
							"notNull": false,
							"propertyRefs": [
								{
									"index": 7
								}
							],
							"sinceVersion": 1,
							"type": 4
						},
						{
							"index": 8,
							"isGenerated": false,
							"manyRelationColumnRefs": [
								{
									"manyRelationIndex": 4,
									"oneSchemaIndex": null,
									"oneTableIndex": 30,
									"oneColumnIndex": 2,
									"sinceVersion": 1
								}
							],
							"name": "POLL_LOCATION_TIME_FRAME_ID",
							"notNull": false,
							"propertyRefs": [
								{
									"index": 8
								}
							],
							"sinceVersion": 1,
							"type": 4
						},
						{
							"index": 9,
							"isGenerated": false,
							"manyRelationColumnRefs": [
								{
									"manyRelationIndex": 5,
									"oneSchemaIndex": null,
									"oneTableIndex": 51,
									"oneRelationIndex": 6,
									"oneColumnIndex": 2,
									"sinceVersion": 1
								}
							],
							"name": "PARENT_POLL_VARIATION_TRANSLATION_ID",
							"notNull": false,
							"propertyRefs": [
								{
									"index": 9
								}
							],
							"sinceVersion": 1,
							"type": 4
						}
					],
					"idColumnRefs": [
						{
							"index": 2
						}
					],
					"index": 51,
					"isLocal": true,
					"isRepositoryEntity": false,
					"name": "PollVariationTranslation",
					"properties": [
						{
							"columnRef": {
								"index": 0
							},
							"index": 0,
							"isId": false,
							"name": "createdAt",
							"sinceVersion": 1
						},
						{
							"index": 1,
							"isId": false,
							"name": "actor",
							"relationRef": {
								"index": 0
							},
							"sinceVersion": 1
						},
						{
							"columnRef": {
								"index": 2
							},
							"index": 2,
							"isId": true,
							"name": "id",
							"sinceVersion": 1
						},
						{
							"index": 3,
							"isId": false,
							"name": "pollVariation",
							"relationRef": {
								"index": 1
							},
							"sinceVersion": 1
						},
						{
							"index": 4,
							"isId": false,
							"name": "language",
							"relationRef": {
								"index": 2
							},
							"sinceVersion": 1
						},
						{
							"columnRef": {
								"index": 3
							},
							"index": 5,
							"isId": false,
							"name": "name",
							"sinceVersion": 1
						},
						{
							"columnRef": {
								"index": 4
							},
							"index": 6,
							"isId": false,
							"name": "description",
							"sinceVersion": 1
						},
						{
							"index": 7,
							"isId": false,
							"name": "type",
							"relationRef": {
								"index": 3
							},
							"sinceVersion": 1
						},
						{
							"index": 8,
							"isId": false,
							"name": "createdAtLocationTimeFrame",
							"relationRef": {
								"index": 4
							},
							"sinceVersion": 1
						},
						{
							"index": 9,
							"isId": false,
							"name": "parent",
							"relationRef": {
								"index": 5
							},
							"sinceVersion": 1
						},
						{
							"index": 10,
							"isId": false,
							"name": "children",
							"relationRef": {
								"index": 6
							},
							"sinceVersion": 1
						},
						{
							"index": 11,
							"isId": false,
							"name": "ratings",
							"relationRef": {
								"index": 7
							},
							"sinceVersion": 1
						},
						{
							"index": 12,
							"isId": false,
							"name": "ratingCounts",
							"relationRef": {
								"index": 8
							},
							"sinceVersion": 1
						},
						{
							"index": 13,
							"isId": false,
							"name": "factors",
							"relationRef": {
								"index": 9
							},
							"sinceVersion": 1
						},
						{
							"index": 14,
							"isId": false,
							"name": "positions",
							"relationRef": {
								"index": 10
							},
							"sinceVersion": 1
						},
						{
							"index": 15,
							"isId": false,
							"name": "opinionCounts",
							"relationRef": {
								"index": 11
							},
							"sinceVersion": 1
						},
						{
							"index": 16,
							"isId": false,
							"name": "opinionRatingCounts",
							"relationRef": {
								"index": 12
							},
							"sinceVersion": 1
						},
						{
							"index": 17,
							"isId": false,
							"name": "voteCounts",
							"relationRef": {
								"index": 13
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
							"relationTableIndex": 5,
							"sinceVersion": 1
						},
						{
							"index": 1,
							"isId": false,
							"relationType": 1,
							"propertyRef": {
								"index": 3
							},
							"relationTableIndex": 86,
							"sinceVersion": 1
						},
						{
							"index": 2,
							"isId": false,
							"relationType": 1,
							"propertyRef": {
								"index": 4
							},
							"relationTableIndex": 16,
							"sinceVersion": 1
						},
						{
							"index": 3,
							"isId": false,
							"relationType": 1,
							"propertyRef": {
								"index": 7
							},
							"relationTableIndex": 33,
							"sinceVersion": 1
						},
						{
							"index": 4,
							"isId": false,
							"relationType": 1,
							"propertyRef": {
								"index": 8
							},
							"relationTableIndex": 30,
							"sinceVersion": 1
						},
						{
							"index": 5,
							"isId": false,
							"relationType": 1,
							"propertyRef": {
								"index": 9
							},
							"relationTableIndex": 51,
							"sinceVersion": 1
						},
						{
							"index": 6,
							"isId": false,
							"oneToManyElems": {
								"cascade": 1,
								"mappedBy": "parent"
							},
							"relationType": 0,
							"propertyRef": {
								"index": 10
							},
							"relationTableIndex": 51,
							"sinceVersion": 1
						},
						{
							"index": 7,
							"isId": false,
							"oneToManyElems": {
								"cascade": 1,
								"mappedBy": "translation"
							},
							"relationType": 0,
							"propertyRef": {
								"index": 11
							},
							"relationTableIndex": 39,
							"sinceVersion": 1
						},
						{
							"index": 8,
							"isId": false,
							"oneToManyElems": {
								"cascade": 0,
								"mappedBy": "pollVariationTranslation"
							},
							"relationType": 0,
							"propertyRef": {
								"index": 12
							},
							"relationTableIndex": 42,
							"sinceVersion": 1
						},
						{
							"index": 9,
							"isId": false,
							"oneToManyElems": {
								"cascade": 0,
								"mappedBy": "pollVariationTranslation"
							},
							"relationType": 0,
							"propertyRef": {
								"index": 13
							},
							"relationTableIndex": 46,
							"sinceVersion": 1
						},
						{
							"index": 10,
							"isId": false,
							"oneToManyElems": {
								"cascade": 0,
								"mappedBy": "pollVariationTranslation"
							},
							"relationType": 0,
							"propertyRef": {
								"index": 14
							},
							"relationTableIndex": 50,
							"sinceVersion": 1
						},
						{
							"index": 11,
							"isId": false,
							"oneToManyElems": {
								"cascade": 0,
								"mappedBy": "pollVariationTranslation"
							},
							"relationType": 0,
							"propertyRef": {
								"index": 15
							},
							"relationTableIndex": 40,
							"sinceVersion": 1
						},
						{
							"index": 12,
							"isId": false,
							"oneToManyElems": {
								"cascade": 0,
								"mappedBy": "pollVariationTranslation"
							},
							"relationType": 0,
							"propertyRef": {
								"index": 16
							},
							"relationTableIndex": 41,
							"sinceVersion": 1
						},
						{
							"index": 13,
							"isId": false,
							"oneToManyElems": {
								"cascade": 0,
								"mappedBy": "pollVariationTranslation"
							},
							"relationType": 0,
							"propertyRef": {
								"index": 17
							},
							"relationTableIndex": 43,
							"sinceVersion": 1
						}
					],
					"sinceVersion": 1,
					"tableConfig": {
						"name": "POLL_VARIATION_TRANSLATIONS",
						"indexes": []
					}
				},
				{
					"columns": [
						{
							"index": 0,
							"isGenerated": false,
							"manyRelationColumnRefs": [],
							"name": "CREATED_AT",
							"notNull": false,
							"propertyRefs": [
								{
									"index": 0
								}
							],
							"sinceVersion": 1,
							"type": 2
						},
						{
							"index": 1,
							"isGenerated": true,
							"manyRelationColumnRefs": [],
							"name": "CHOSEN_POLL_TRANSLATION_TYPE_ID",
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
							"isGenerated": false,
							"manyRelationColumnRefs": [],
							"name": "CODE",
							"notNull": false,
							"propertyRefs": [
								{
									"index": 2
								}
							],
							"sinceVersion": 1,
							"type": 5
						}
					],
					"idColumnRefs": [
						{
							"index": 1
						}
					],
					"index": 52,
					"isLocal": true,
					"isRepositoryEntity": false,
					"name": "ChosenPollTranslationType",
					"properties": [
						{
							"columnRef": {
								"index": 0
							},
							"index": 0,
							"isId": false,
							"name": "createdAt",
							"sinceVersion": 1
						},
						{
							"columnRef": {
								"index": 1
							},
							"index": 1,
							"isId": true,
							"name": "id",
							"sinceVersion": 1
						},
						{
							"columnRef": {
								"index": 2
							},
							"index": 2,
							"isId": false,
							"name": "code",
							"sinceVersion": 1
						}
					],
					"relations": [],
					"sinceVersion": 1,
					"tableConfig": {
						"name": "CHOSEN_POLL_TRANSLATION_TYPES",
						"indexes": []
					}
				},
				{
					"columns": [
						{
							"index": 0,
							"isGenerated": false,
							"manyRelationColumnRefs": [],
							"name": "CREATED_AT",
							"notNull": false,
							"propertyRefs": [
								{
									"index": 0
								}
							],
							"sinceVersion": 1,
							"type": 2
						},
						{
							"index": 1,
							"isGenerated": true,
							"manyRelationColumnRefs": [],
							"name": "CHOSEN_POLL_TRANSLATION_ID",
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
							"isGenerated": false,
							"manyRelationColumnRefs": [
								{
									"manyRelationIndex": 0,
									"oneSchemaIndex": null,
									"oneTableIndex": 56,
									"oneRelationIndex": 7,
									"oneColumnIndex": 2,
									"sinceVersion": 1
								}
							],
							"name": "POLL_ID",
							"notNull": false,
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
							"manyRelationColumnRefs": [
								{
									"manyRelationIndex": 1,
									"oneSchemaIndex": null,
									"oneTableIndex": 86,
									"oneRelationIndex": 12,
									"oneColumnIndex": 2,
									"sinceVersion": 1
								}
							],
							"name": "POLL_VARIATION_ID",
							"notNull": false,
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
							"isGenerated": false,
							"manyRelationColumnRefs": [
								{
									"manyRelationIndex": 2,
									"oneSchemaIndex": null,
									"oneTableIndex": 16,
									"oneColumnIndex": 0,
									"sinceVersion": 1
								}
							],
							"name": "LANGUAGE_ID",
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
							"isGenerated": false,
							"manyRelationColumnRefs": [
								{
									"manyRelationIndex": 3,
									"oneSchemaIndex": null,
									"oneTableIndex": 52,
									"oneColumnIndex": 1,
									"sinceVersion": 1
								}
							],
							"name": "CHOSEN_POLL_TRANSLATION_TYPE_ID",
							"notNull": false,
							"propertyRefs": [
								{
									"index": 5
								}
							],
							"sinceVersion": 1,
							"type": 4
						}
					],
					"idColumnRefs": [
						{
							"index": 1
						}
					],
					"index": 53,
					"isLocal": true,
					"isRepositoryEntity": false,
					"name": "ChosenPollTranslation",
					"properties": [
						{
							"columnRef": {
								"index": 0
							},
							"index": 0,
							"isId": false,
							"name": "createdAt",
							"sinceVersion": 1
						},
						{
							"columnRef": {
								"index": 1
							},
							"index": 1,
							"isId": true,
							"name": "id",
							"sinceVersion": 1
						},
						{
							"index": 2,
							"isId": false,
							"name": "poll",
							"relationRef": {
								"index": 0
							},
							"sinceVersion": 1
						},
						{
							"index": 3,
							"isId": false,
							"name": "pollVariation",
							"relationRef": {
								"index": 1
							},
							"sinceVersion": 1
						},
						{
							"index": 4,
							"isId": false,
							"name": "language",
							"relationRef": {
								"index": 2
							},
							"sinceVersion": 1
						},
						{
							"index": 5,
							"isId": false,
							"name": "type",
							"relationRef": {
								"index": 3
							},
							"sinceVersion": 1
						},
						{
							"index": 6,
							"isId": false,
							"name": "variationTranslation",
							"relationRef": {
								"index": 4
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
							"relationTableIndex": 56,
							"sinceVersion": 1
						},
						{
							"index": 1,
							"isId": false,
							"relationType": 1,
							"propertyRef": {
								"index": 3
							},
							"relationTableIndex": 86,
							"sinceVersion": 1
						},
						{
							"index": 2,
							"isId": false,
							"relationType": 1,
							"propertyRef": {
								"index": 4
							},
							"relationTableIndex": 16,
							"sinceVersion": 1
						},
						{
							"index": 3,
							"isId": false,
							"relationType": 1,
							"propertyRef": {
								"index": 5
							},
							"relationTableIndex": 52,
							"sinceVersion": 1
						},
						{
							"index": 4,
							"isId": false,
							"oneToManyElems": {
								"cascade": 1,
								"mappedBy": "pollTranslation"
							},
							"relationType": 0,
							"propertyRef": {
								"index": 6
							},
							"relationTableIndex": 51,
							"sinceVersion": 1
						}
					],
					"sinceVersion": 1,
					"tableConfig": {
						"name": "CHOSEN_POLL_TRANSLATIONS",
						"indexes": []
					}
				},
				{
					"columns": [
						{
							"index": 0,
							"isGenerated": false,
							"manyRelationColumnRefs": [],
							"name": "CREATED_AT",
							"notNull": false,
							"propertyRefs": [
								{
									"index": 0
								}
							],
							"sinceVersion": 1,
							"type": 2
						},
						{
							"index": 1,
							"isGenerated": false,
							"manyRelationColumnRefs": [
								{
									"manyRelationIndex": 0,
									"oneSchemaIndex": null,
									"oneTableIndex": 5,
									"oneColumnIndex": 1,
									"sinceVersion": 1
								}
							],
							"name": "ACTOR_ID",
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
							"isGenerated": true,
							"manyRelationColumnRefs": [],
							"name": "LABEL_ID",
							"notNull": false,
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
							"name": "NAME",
							"notNull": true,
							"propertyRefs": [
								{
									"index": 3
								}
							],
							"sinceVersion": 1,
							"type": 5
						}
					],
					"idColumnRefs": [],
					"index": 54,
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
							"name": "createdAt",
							"sinceVersion": 1
						},
						{
							"index": 1,
							"isId": false,
							"name": "actor",
							"relationRef": {
								"index": 0
							},
							"sinceVersion": 1
						},
						{
							"columnRef": {
								"index": 2
							},
							"index": 2,
							"isId": false,
							"name": "id",
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
							"relationTableIndex": 5,
							"sinceVersion": 1
						}
					],
					"sinceVersion": 1,
					"tableConfig": {
						"name": "LABELS",
						"indexes": []
					}
				},
				{
					"columns": [
						{
							"index": 0,
							"isGenerated": false,
							"manyRelationColumnRefs": [],
							"name": "CREATED_AT",
							"notNull": false,
							"propertyRefs": [
								{
									"index": 0
								}
							],
							"sinceVersion": 1,
							"type": 2
						},
						{
							"index": 1,
							"isGenerated": false,
							"manyRelationColumnRefs": [
								{
									"manyRelationIndex": 0,
									"oneSchemaIndex": null,
									"oneTableIndex": 5,
									"oneColumnIndex": 1,
									"sinceVersion": 1
								}
							],
							"name": "ACTOR_ID",
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
							"isGenerated": true,
							"manyRelationColumnRefs": [],
							"name": "POLL_VARIATION_LABEL_ID",
							"notNull": false,
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
							"manyRelationColumnRefs": [
								{
									"manyRelationIndex": 1,
									"oneSchemaIndex": null,
									"oneTableIndex": 54,
									"oneColumnIndex": 2,
									"sinceVersion": 1
								}
							],
							"name": "LABEL_ID",
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
							"isGenerated": false,
							"manyRelationColumnRefs": [
								{
									"manyRelationIndex": 2,
									"oneSchemaIndex": null,
									"oneTableIndex": 86,
									"oneRelationIndex": 7,
									"oneColumnIndex": 2,
									"sinceVersion": 1
								}
							],
							"name": "POLL_VARIATION_ID",
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
							"isGenerated": false,
							"manyRelationColumnRefs": [
								{
									"manyRelationIndex": 3,
									"oneSchemaIndex": null,
									"oneTableIndex": 30,
									"oneColumnIndex": 2,
									"sinceVersion": 1
								}
							],
							"name": "POLL_LOCATION_TIME_FRAME_ID",
							"notNull": false,
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
					"index": 55,
					"isLocal": true,
					"isRepositoryEntity": false,
					"name": "PollVariationLabel",
					"properties": [
						{
							"columnRef": {
								"index": 0
							},
							"index": 0,
							"isId": false,
							"name": "createdAt",
							"sinceVersion": 1
						},
						{
							"index": 1,
							"isId": false,
							"name": "actor",
							"relationRef": {
								"index": 0
							},
							"sinceVersion": 1
						},
						{
							"columnRef": {
								"index": 2
							},
							"index": 2,
							"isId": false,
							"name": "id",
							"sinceVersion": 1
						},
						{
							"index": 3,
							"isId": false,
							"name": "label",
							"relationRef": {
								"index": 1
							},
							"sinceVersion": 1
						},
						{
							"index": 4,
							"isId": false,
							"name": "pollVariation",
							"relationRef": {
								"index": 2
							},
							"sinceVersion": 1
						},
						{
							"index": 5,
							"isId": false,
							"name": "locationTimeFrame",
							"relationRef": {
								"index": 3
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
							"relationTableIndex": 5,
							"sinceVersion": 1
						},
						{
							"index": 1,
							"isId": false,
							"relationType": 1,
							"propertyRef": {
								"index": 3
							},
							"relationTableIndex": 54,
							"sinceVersion": 1
						},
						{
							"index": 2,
							"isId": false,
							"relationType": 1,
							"propertyRef": {
								"index": 4
							},
							"relationTableIndex": 86,
							"sinceVersion": 1
						},
						{
							"index": 3,
							"isId": false,
							"relationType": 1,
							"propertyRef": {
								"index": 5
							},
							"relationTableIndex": 30,
							"sinceVersion": 1
						}
					],
					"sinceVersion": 1,
					"tableConfig": {
						"name": "POLL_VARIATION_LABELS",
						"indexes": []
					}
				},
				{
					"columns": [
						{
							"index": 0,
							"isGenerated": false,
							"manyRelationColumnRefs": [],
							"name": "CREATED_AT",
							"notNull": false,
							"propertyRefs": [
								{
									"index": 0
								}
							],
							"sinceVersion": 1,
							"type": 2
						},
						{
							"index": 1,
							"isGenerated": false,
							"manyRelationColumnRefs": [
								{
									"manyRelationIndex": 0,
									"oneSchemaIndex": null,
									"oneTableIndex": 5,
									"oneColumnIndex": 1,
									"sinceVersion": 1
								}
							],
							"name": "ACTOR_ID",
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
							"isGenerated": true,
							"manyRelationColumnRefs": [],
							"name": "POLL_ID",
							"notNull": false,
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
							"manyRelationColumnRefs": [
								{
									"manyRelationIndex": 1,
									"oneSchemaIndex": null,
									"oneTableIndex": 32,
									"oneColumnIndex": 1,
									"sinceVersion": 1
								}
							],
							"name": "THEME_ID",
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
							"isGenerated": false,
							"manyRelationColumnRefs": [
								{
									"manyRelationIndex": 2,
									"oneSchemaIndex": null,
									"oneTableIndex": 31,
									"oneColumnIndex": 1,
									"sinceVersion": 1
								}
							],
							"name": "POLL_TYPE_ID",
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
							"isGenerated": false,
							"manyRelationColumnRefs": [
								{
									"manyRelationIndex": 3,
									"oneSchemaIndex": null,
									"oneTableIndex": 56,
									"oneRelationIndex": 4,
									"oneColumnIndex": 2,
									"sinceVersion": 1
								}
							],
							"name": "PARENT_POLL_ID",
							"notNull": false,
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
					"index": 56,
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
							"name": "createdAt",
							"sinceVersion": 1
						},
						{
							"index": 1,
							"isId": false,
							"name": "actor",
							"relationRef": {
								"index": 0
							},
							"sinceVersion": 1
						},
						{
							"columnRef": {
								"index": 2
							},
							"index": 2,
							"isId": false,
							"name": "id",
							"sinceVersion": 1
						},
						{
							"index": 3,
							"isId": false,
							"name": "theme",
							"relationRef": {
								"index": 1
							},
							"sinceVersion": 1
						},
						{
							"index": 4,
							"isId": false,
							"name": "type",
							"relationRef": {
								"index": 2
							},
							"sinceVersion": 1
						},
						{
							"index": 5,
							"isId": false,
							"name": "parent",
							"relationRef": {
								"index": 3
							},
							"sinceVersion": 1
						},
						{
							"index": 6,
							"isId": false,
							"name": "children",
							"relationRef": {
								"index": 4
							},
							"sinceVersion": 1
						},
						{
							"index": 7,
							"isId": false,
							"name": "ratings",
							"relationRef": {
								"index": 5
							},
							"sinceVersion": 1
						},
						{
							"index": 8,
							"isId": false,
							"name": "ratingCounts",
							"relationRef": {
								"index": 6
							},
							"sinceVersion": 1
						},
						{
							"index": 9,
							"isId": false,
							"name": "chosenPollTranslations",
							"relationRef": {
								"index": 7
							},
							"sinceVersion": 1
						},
						{
							"index": 10,
							"isId": false,
							"name": "chosenVariations",
							"relationRef": {
								"index": 8
							},
							"sinceVersion": 1
						},
						{
							"index": 11,
							"isId": false,
							"name": "locationTimeFrames",
							"relationRef": {
								"index": 9
							},
							"sinceVersion": 1
						},
						{
							"index": 12,
							"isId": false,
							"name": "allPollVariations",
							"relationRef": {
								"index": 10
							},
							"sinceVersion": 1
						},
						{
							"index": 13,
							"isId": false,
							"name": "opinionCounts",
							"relationRef": {
								"index": 11
							},
							"sinceVersion": 1
						},
						{
							"index": 14,
							"isId": false,
							"name": "opinionRatingCounts",
							"relationRef": {
								"index": 12
							},
							"sinceVersion": 1
						},
						{
							"index": 15,
							"isId": false,
							"name": "voteCounts",
							"relationRef": {
								"index": 13
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
							"relationTableIndex": 5,
							"sinceVersion": 1
						},
						{
							"index": 1,
							"isId": false,
							"relationType": 1,
							"propertyRef": {
								"index": 3
							},
							"relationTableIndex": 32,
							"sinceVersion": 1
						},
						{
							"index": 2,
							"isId": false,
							"relationType": 1,
							"propertyRef": {
								"index": 4
							},
							"relationTableIndex": 31,
							"sinceVersion": 1
						},
						{
							"index": 3,
							"isId": false,
							"relationType": 1,
							"propertyRef": {
								"index": 5
							},
							"relationTableIndex": 56,
							"sinceVersion": 1
						},
						{
							"index": 4,
							"isId": false,
							"oneToManyElems": {
								"mappedBy": "parent"
							},
							"relationType": 0,
							"propertyRef": {
								"index": 6
							},
							"relationTableIndex": 56,
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
								"index": 7
							},
							"relationTableIndex": 34,
							"sinceVersion": 1
						},
						{
							"index": 6,
							"isId": false,
							"oneToManyElems": {
								"cascade": 0,
								"mappedBy": "poll"
							},
							"relationType": 0,
							"propertyRef": {
								"index": 8
							},
							"relationTableIndex": 21,
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
								"index": 9
							},
							"relationTableIndex": 53,
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
								"index": 10
							},
							"relationTableIndex": 24,
							"sinceVersion": 1
						},
						{
							"index": 9,
							"isId": false,
							"oneToManyElems": {
								"cascade": 1,
								"mappedBy": "poll"
							},
							"relationType": 0,
							"propertyRef": {
								"index": 11
							},
							"relationTableIndex": 30,
							"sinceVersion": 1
						},
						{
							"index": 10,
							"isId": false,
							"oneToManyElems": {
								"cascade": 1,
								"mappedBy": "poll"
							},
							"relationType": 0,
							"propertyRef": {
								"index": 12
							},
							"relationTableIndex": 86,
							"sinceVersion": 1
						},
						{
							"index": 11,
							"isId": false,
							"oneToManyElems": {
								"cascade": 0,
								"mappedBy": "poll"
							},
							"relationType": 0,
							"propertyRef": {
								"index": 13
							},
							"relationTableIndex": 6,
							"sinceVersion": 1
						},
						{
							"index": 12,
							"isId": false,
							"oneToManyElems": {
								"cascade": 0,
								"mappedBy": "poll"
							},
							"relationType": 0,
							"propertyRef": {
								"index": 14
							},
							"relationTableIndex": 20,
							"sinceVersion": 1
						},
						{
							"index": 13,
							"isId": false,
							"oneToManyElems": {
								"cascade": 0,
								"mappedBy": "poll"
							},
							"relationType": 0,
							"propertyRef": {
								"index": 15
							},
							"relationTableIndex": 22,
							"sinceVersion": 1
						}
					],
					"sinceVersion": 1,
					"tableConfig": {
						"name": "POLLS",
						"indexes": []
					}
				},
				{
					"columns": [
						{
							"index": 0,
							"isGenerated": false,
							"manyRelationColumnRefs": [],
							"name": "CREATED_AT",
							"notNull": false,
							"propertyRefs": [
								{
									"index": 0
								}
							],
							"sinceVersion": 1,
							"type": 2
						},
						{
							"index": 1,
							"isGenerated": true,
							"manyRelationColumnRefs": [],
							"name": "POLL_OPINION_RATING_COUNT_ID",
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
							"isGenerated": false,
							"manyRelationColumnRefs": [],
							"name": "COUNT",
							"notNull": false,
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
							"manyRelationColumnRefs": [
								{
									"manyRelationIndex": 0,
									"oneSchemaIndex": null,
									"oneTableIndex": 80,
									"oneRelationIndex": 7,
									"oneColumnIndex": 3,
									"sinceVersion": 1
								}
							],
							"name": "POLL_OPINION_ID",
							"notNull": false,
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
							"isGenerated": false,
							"manyRelationColumnRefs": [
								{
									"manyRelationIndex": 1,
									"oneSchemaIndex": null,
									"oneTableIndex": 19,
									"oneColumnIndex": 1,
									"sinceVersion": 1
								}
							],
							"name": "RATING_ID",
							"notNull": false,
							"propertyRefs": [
								{
									"index": 4
								}
							],
							"sinceVersion": 1,
							"type": 4
						}
					],
					"idColumnRefs": [
						{
							"index": 1
						}
					],
					"index": 57,
					"isLocal": true,
					"isRepositoryEntity": false,
					"name": "PollOpinionRatingCount",
					"properties": [
						{
							"columnRef": {
								"index": 0
							},
							"index": 0,
							"isId": false,
							"name": "createdAt",
							"sinceVersion": 1
						},
						{
							"columnRef": {
								"index": 1
							},
							"index": 1,
							"isId": true,
							"name": "id",
							"sinceVersion": 1
						},
						{
							"columnRef": {
								"index": 2
							},
							"index": 2,
							"isId": false,
							"name": "count",
							"sinceVersion": 1
						},
						{
							"index": 3,
							"isId": false,
							"name": "pollOpinion",
							"relationRef": {
								"index": 0
							},
							"sinceVersion": 1
						},
						{
							"index": 4,
							"isId": false,
							"name": "rating",
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
								"index": 3
							},
							"relationTableIndex": 80,
							"sinceVersion": 1
						},
						{
							"index": 1,
							"isId": false,
							"relationType": 1,
							"propertyRef": {
								"index": 4
							},
							"relationTableIndex": 19,
							"sinceVersion": 1
						}
					],
					"sinceVersion": 1,
					"tableConfig": {
						"name": "POLL_OPINION_RATING_COUNTS",
						"indexes": []
					}
				},
				{
					"columns": [
						{
							"index": 0,
							"isGenerated": false,
							"manyRelationColumnRefs": [],
							"name": "CREATED_AT",
							"notNull": false,
							"propertyRefs": [
								{
									"index": 0
								}
							],
							"sinceVersion": 1,
							"type": 2
						},
						{
							"index": 1,
							"isGenerated": true,
							"manyRelationColumnRefs": [],
							"name": "CHOSEN_VOTE_VARIATION_TYPE_ID",
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
							"isGenerated": false,
							"manyRelationColumnRefs": [],
							"name": "CODE",
							"notNull": false,
							"propertyRefs": [
								{
									"index": 2
								}
							],
							"sinceVersion": 1,
							"type": 5
						}
					],
					"idColumnRefs": [
						{
							"index": 1
						}
					],
					"index": 58,
					"isLocal": true,
					"isRepositoryEntity": false,
					"name": "ChosenVoteVariationType",
					"properties": [
						{
							"columnRef": {
								"index": 0
							},
							"index": 0,
							"isId": false,
							"name": "createdAt",
							"sinceVersion": 1
						},
						{
							"columnRef": {
								"index": 1
							},
							"index": 1,
							"isId": true,
							"name": "id",
							"sinceVersion": 1
						},
						{
							"columnRef": {
								"index": 2
							},
							"index": 2,
							"isId": false,
							"name": "code",
							"sinceVersion": 1
						}
					],
					"relations": [],
					"sinceVersion": 1,
					"tableConfig": {
						"name": "CHOSEN_VOTE_VARIATION_TYPE_TYPES",
						"indexes": []
					}
				},
				{
					"columns": [
						{
							"index": 0,
							"isGenerated": false,
							"manyRelationColumnRefs": [],
							"name": "CREATED_AT",
							"notNull": false,
							"propertyRefs": [
								{
									"index": 0
								}
							],
							"sinceVersion": 1,
							"type": 2
						},
						{
							"index": 1,
							"isGenerated": true,
							"manyRelationColumnRefs": [],
							"name": "CHOSEN_VOTE_VARIATION_ID",
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
							"isGenerated": false,
							"manyRelationColumnRefs": [
								{
									"manyRelationIndex": 0,
									"oneSchemaIndex": null,
									"oneTableIndex": 61,
									"oneRelationIndex": 3,
									"oneColumnIndex": 2,
									"sinceVersion": 1
								}
							],
							"name": "VOTE_ID",
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
							"manyRelationColumnRefs": [
								{
									"manyRelationIndex": 1,
									"oneSchemaIndex": null,
									"oneTableIndex": 58,
									"oneColumnIndex": 1,
									"sinceVersion": 1
								}
							],
							"name": "CHOSEN_VOTE_VARIATION_TYPE_ID",
							"notNull": true,
							"propertyRefs": [
								{
									"index": 3
								}
							],
							"sinceVersion": 1,
							"type": 4
						}
					],
					"idColumnRefs": [
						{
							"index": 1
						}
					],
					"index": 59,
					"isLocal": true,
					"isRepositoryEntity": false,
					"name": "ChosenVoteVariation",
					"properties": [
						{
							"columnRef": {
								"index": 0
							},
							"index": 0,
							"isId": false,
							"name": "createdAt",
							"sinceVersion": 1
						},
						{
							"columnRef": {
								"index": 1
							},
							"index": 1,
							"isId": true,
							"name": "id",
							"sinceVersion": 1
						},
						{
							"index": 2,
							"isId": false,
							"name": "vote",
							"relationRef": {
								"index": 0
							},
							"sinceVersion": 1
						},
						{
							"index": 3,
							"isId": false,
							"name": "type",
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
								"index": 2
							},
							"relationTableIndex": 61,
							"sinceVersion": 1
						},
						{
							"index": 1,
							"isId": false,
							"relationType": 1,
							"propertyRef": {
								"index": 3
							},
							"relationTableIndex": 58,
							"sinceVersion": 1
						}
					],
					"sinceVersion": 1,
					"tableConfig": {
						"name": "CHOSEN_VOTE_VARIATIONS",
						"indexes": []
					}
				},
				{
					"columns": [
						{
							"index": 0,
							"isGenerated": false,
							"manyRelationColumnRefs": [],
							"name": "CREATED_AT",
							"notNull": false,
							"propertyRefs": [
								{
									"index": 0
								}
							],
							"sinceVersion": 1,
							"type": 2
						},
						{
							"index": 1,
							"isGenerated": true,
							"manyRelationColumnRefs": [],
							"name": "VOTE_TYPE_ID",
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
							"isGenerated": false,
							"manyRelationColumnRefs": [],
							"name": "VOTE_TYPE_NAME",
							"notNull": false,
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
							"isGenerated": false,
							"manyRelationColumnRefs": [],
							"name": "VOTE_TYPE_DESCRIPTION",
							"notNull": false,
							"propertyRefs": [
								{
									"index": 3
								}
							],
							"sinceVersion": 1,
							"type": 5
						}
					],
					"idColumnRefs": [
						{
							"index": 1
						}
					],
					"index": 60,
					"isLocal": true,
					"isRepositoryEntity": false,
					"name": "VoteType",
					"properties": [
						{
							"columnRef": {
								"index": 0
							},
							"index": 0,
							"isId": false,
							"name": "createdAt",
							"sinceVersion": 1
						},
						{
							"columnRef": {
								"index": 1
							},
							"index": 1,
							"isId": true,
							"name": "id",
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
							"columnRef": {
								"index": 3
							},
							"index": 3,
							"isId": false,
							"name": "description",
							"sinceVersion": 1
						}
					],
					"relations": [],
					"sinceVersion": 1,
					"tableConfig": {
						"name": "VOTE_TYPES",
						"indexes": []
					}
				},
				{
					"columns": [
						{
							"index": 0,
							"isGenerated": false,
							"manyRelationColumnRefs": [],
							"name": "CREATED_AT",
							"notNull": false,
							"propertyRefs": [
								{
									"index": 0
								}
							],
							"sinceVersion": 1,
							"type": 2
						},
						{
							"index": 1,
							"isGenerated": false,
							"manyRelationColumnRefs": [
								{
									"manyRelationIndex": 0,
									"oneSchemaIndex": null,
									"oneTableIndex": 5,
									"oneColumnIndex": 1,
									"sinceVersion": 1
								},
								{
									"manyRelationIndex": 1,
									"oneSchemaIndex": null,
									"oneTableIndex": 5,
									"oneColumnIndex": 1,
									"sinceVersion": 1
								}
							],
							"name": "ACTOR_ID",
							"notNull": true,
							"propertyRefs": [
								{
									"index": 1
								},
								{
									"index": 3
								}
							],
							"sinceVersion": 1,
							"type": 4
						},
						{
							"index": 2,
							"isGenerated": true,
							"manyRelationColumnRefs": [],
							"name": "VOTE_ID",
							"notNull": false,
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
							"name": "VOTE_TYPE_ID",
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
							"index": 4,
							"isGenerated": false,
							"manyRelationColumnRefs": [
								{
									"manyRelationIndex": 2,
									"oneSchemaIndex": null,
									"oneTableIndex": 56,
									"oneColumnIndex": 2,
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
					"idColumnRefs": [
						{
							"index": 2
						}
					],
					"index": 61,
					"isLocal": true,
					"isRepositoryEntity": false,
					"name": "Vote",
					"properties": [
						{
							"columnRef": {
								"index": 0
							},
							"index": 0,
							"isId": false,
							"name": "createdAt",
							"sinceVersion": 1
						},
						{
							"index": 1,
							"isId": false,
							"name": "actor",
							"relationRef": {
								"index": 0
							},
							"sinceVersion": 1
						},
						{
							"columnRef": {
								"index": 2
							},
							"index": 2,
							"isId": true,
							"name": "id",
							"sinceVersion": 1
						},
						{
							"index": 3,
							"isId": false,
							"name": "actor",
							"relationRef": {
								"index": 1
							},
							"sinceVersion": 1
						},
						{
							"columnRef": {
								"index": 3
							},
							"index": 4,
							"isId": false,
							"name": "type",
							"sinceVersion": 1
						},
						{
							"index": 5,
							"isId": false,
							"name": "poll",
							"relationRef": {
								"index": 2
							},
							"sinceVersion": 1
						},
						{
							"index": 6,
							"isId": false,
							"name": "chosenVariations",
							"relationRef": {
								"index": 3
							},
							"sinceVersion": 1
						},
						{
							"index": 7,
							"isId": false,
							"name": "variations",
							"relationRef": {
								"index": 4
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
							"relationTableIndex": 5,
							"sinceVersion": 1
						},
						{
							"index": 1,
							"isId": false,
							"relationType": 1,
							"propertyRef": {
								"index": 3
							},
							"relationTableIndex": 5,
							"sinceVersion": 1
						},
						{
							"index": 2,
							"isId": false,
							"relationType": 1,
							"propertyRef": {
								"index": 5
							},
							"relationTableIndex": 56,
							"sinceVersion": 1
						},
						{
							"index": 3,
							"isId": false,
							"oneToManyElems": {
								"cascade": 1,
								"mappedBy": "vote"
							},
							"relationType": 0,
							"propertyRef": {
								"index": 6
							},
							"relationTableIndex": 59,
							"sinceVersion": 1
						},
						{
							"index": 4,
							"isId": false,
							"oneToManyElems": {
								"cascade": 1,
								"mappedBy": "vote"
							},
							"relationType": 0,
							"propertyRef": {
								"index": 7
							},
							"relationTableIndex": 65,
							"sinceVersion": 1
						}
					],
					"sinceVersion": 1,
					"tableConfig": {
						"name": "VOTES",
						"indexes": []
					}
				},
				{
					"columns": [
						{
							"index": 0,
							"isGenerated": false,
							"manyRelationColumnRefs": [],
							"name": "CREATED_AT",
							"notNull": false,
							"propertyRefs": [
								{
									"index": 0
								}
							],
							"sinceVersion": 1,
							"type": 2
						},
						{
							"index": 1,
							"isGenerated": true,
							"manyRelationColumnRefs": [],
							"name": "POLL_FACTOR_POSITION_VARIATION_ID",
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
							"isGenerated": false,
							"manyRelationColumnRefs": [],
							"name": "FACTOR_COORDINATE_AXIS",
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
							"isGenerated": false,
							"manyRelationColumnRefs": [
								{
									"manyRelationIndex": 0,
									"oneSchemaIndex": null,
									"oneTableIndex": 86,
									"oneRelationIndex": 8,
									"oneColumnIndex": 2,
									"sinceVersion": 1
								}
							],
							"name": "POLL_VARIATION_ID",
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
							"isGenerated": false,
							"manyRelationColumnRefs": [
								{
									"manyRelationIndex": 1,
									"oneSchemaIndex": null,
									"oneTableIndex": 89,
									"oneColumnIndex": 2,
									"sinceVersion": 1
								}
							],
							"name": "FACTOR_POSITION_ID",
							"notNull": true,
							"propertyRefs": [
								{
									"index": 5
								}
							],
							"sinceVersion": 1,
							"type": 4
						},
						{
							"index": 6,
							"isGenerated": false,
							"manyRelationColumnRefs": [
								{
									"manyRelationIndex": 2,
									"oneSchemaIndex": null,
									"oneTableIndex": 62,
									"oneRelationIndex": 3,
									"oneColumnIndex": 1,
									"sinceVersion": 1
								}
							],
							"name": "PARENT_POLL_FACTOR_POSITION_VARIATION_ID",
							"notNull": false,
							"propertyRefs": [
								{
									"index": 6
								}
							],
							"sinceVersion": 1,
							"type": 4
						}
					],
					"idColumnRefs": [
						{
							"index": 1
						}
					],
					"index": 62,
					"isLocal": true,
					"isRepositoryEntity": false,
					"name": "PollFactorPositionVariation",
					"properties": [
						{
							"columnRef": {
								"index": 0
							},
							"index": 0,
							"isId": false,
							"name": "createdAt",
							"sinceVersion": 1
						},
						{
							"columnRef": {
								"index": 1
							},
							"index": 1,
							"isId": true,
							"name": "id",
							"sinceVersion": 1
						},
						{
							"columnRef": {
								"index": 2
							},
							"index": 2,
							"isId": false,
							"name": "axis",
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
							"name": "pollVariation",
							"relationRef": {
								"index": 0
							},
							"sinceVersion": 1
						},
						{
							"index": 5,
							"isId": false,
							"name": "factorPosition",
							"relationRef": {
								"index": 1
							},
							"sinceVersion": 1
						},
						{
							"index": 6,
							"isId": false,
							"name": "parent",
							"relationRef": {
								"index": 2
							},
							"sinceVersion": 1
						},
						{
							"index": 7,
							"isId": false,
							"name": "children",
							"relationRef": {
								"index": 3
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
							"relationTableIndex": 86,
							"sinceVersion": 1
						},
						{
							"index": 1,
							"isId": false,
							"relationType": 1,
							"propertyRef": {
								"index": 5
							},
							"relationTableIndex": 89,
							"sinceVersion": 1
						},
						{
							"index": 2,
							"isId": false,
							"relationType": 1,
							"propertyRef": {
								"index": 6
							},
							"relationTableIndex": 62,
							"sinceVersion": 1
						},
						{
							"index": 3,
							"isId": false,
							"oneToManyElems": {
								"cascade": 1,
								"mappedBy": "parent"
							},
							"relationType": 0,
							"propertyRef": {
								"index": 7
							},
							"relationTableIndex": 62,
							"sinceVersion": 1
						}
					],
					"sinceVersion": 1,
					"tableConfig": {
						"name": "POLL_FACTOR_POSITION_VARIATIONS",
						"indexes": []
					}
				},
				{
					"columns": [
						{
							"index": 0,
							"isGenerated": false,
							"manyRelationColumnRefs": [],
							"name": "CREATED_AT",
							"notNull": false,
							"propertyRefs": [
								{
									"index": 0
								}
							],
							"sinceVersion": 1,
							"type": 2
						},
						{
							"index": 1,
							"isGenerated": false,
							"manyRelationColumnRefs": [],
							"name": "VOTE_FACTOR_TYPE_ID",
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
							"isGenerated": false,
							"manyRelationColumnRefs": [],
							"name": "VOTE_FACTOR_TYPE_VALUE",
							"notNull": false,
							"propertyRefs": [
								{
									"index": 2
								}
							],
							"sinceVersion": 1,
							"type": 5
						}
					],
					"idColumnRefs": [
						{
							"index": 1
						}
					],
					"index": 63,
					"isLocal": true,
					"isRepositoryEntity": false,
					"name": "VoteFactorType",
					"properties": [
						{
							"columnRef": {
								"index": 0
							},
							"index": 0,
							"isId": false,
							"name": "createdAt",
							"sinceVersion": 1
						},
						{
							"columnRef": {
								"index": 1
							},
							"index": 1,
							"isId": true,
							"name": "id",
							"sinceVersion": 1
						},
						{
							"columnRef": {
								"index": 2
							},
							"index": 2,
							"isId": false,
							"name": "value",
							"sinceVersion": 1
						}
					],
					"relations": [],
					"sinceVersion": 1,
					"tableConfig": {
						"name": "VOTE_FACTOR_TYPES",
						"indexes": []
					}
				},
				{
					"columns": [
						{
							"index": 0,
							"isGenerated": true,
							"manyRelationColumnRefs": [],
							"name": "VOTE_FACTOR_ID",
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
							"name": "SHARE",
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
							"isGenerated": false,
							"manyRelationColumnRefs": [
								{
									"manyRelationIndex": 0,
									"oneSchemaIndex": null,
									"oneTableIndex": 65,
									"oneRelationIndex": 5,
									"oneColumnIndex": 2,
									"sinceVersion": 1
								}
							],
							"name": "VOTE_VARIATION_ID",
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
							"index": 3,
							"isGenerated": false,
							"manyRelationColumnRefs": [
								{
									"manyRelationIndex": 1,
									"oneSchemaIndex": null,
									"oneTableIndex": 62,
									"oneColumnIndex": 1,
									"sinceVersion": 1
								}
							],
							"name": "POLL_FACTOR_POSITION_VARIATION_ID",
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
							"isGenerated": false,
							"manyRelationColumnRefs": [
								{
									"manyRelationIndex": 2,
									"oneSchemaIndex": null,
									"oneTableIndex": 63,
									"oneColumnIndex": 1,
									"sinceVersion": 1
								}
							],
							"name": "VOTE_FACTOR_TYPE_ID",
							"notNull": true,
							"propertyRefs": [
								{
									"index": 4
								}
							],
							"sinceVersion": 1,
							"type": 4
						}
					],
					"idColumnRefs": [
						{
							"index": 0
						}
					],
					"index": 64,
					"isLocal": true,
					"isRepositoryEntity": false,
					"name": "VoteFactor",
					"properties": [
						{
							"columnRef": {
								"index": 0
							},
							"index": 0,
							"isId": true,
							"name": "id",
							"sinceVersion": 1
						},
						{
							"index": 1,
							"isId": false,
							"name": "voteVariation",
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
							"name": "share",
							"sinceVersion": 1
						},
						{
							"index": 3,
							"isId": false,
							"name": "pollFactorPos",
							"relationRef": {
								"index": 1
							},
							"sinceVersion": 1
						},
						{
							"index": 4,
							"isId": false,
							"name": "type",
							"relationRef": {
								"index": 2
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
							"relationTableIndex": 65,
							"sinceVersion": 1
						},
						{
							"index": 1,
							"isId": false,
							"relationType": 1,
							"propertyRef": {
								"index": 3
							},
							"relationTableIndex": 62,
							"sinceVersion": 1
						},
						{
							"index": 2,
							"isId": false,
							"relationType": 1,
							"propertyRef": {
								"index": 4
							},
							"relationTableIndex": 63,
							"sinceVersion": 1
						}
					],
					"sinceVersion": 1,
					"tableConfig": {
						"name": "VOTE_FACTORS",
						"indexes": []
					}
				},
				{
					"columns": [
						{
							"index": 0,
							"isGenerated": false,
							"manyRelationColumnRefs": [],
							"name": "CREATED_AT",
							"notNull": false,
							"propertyRefs": [
								{
									"index": 0
								}
							],
							"sinceVersion": 1,
							"type": 2
						},
						{
							"index": 1,
							"isGenerated": false,
							"manyRelationColumnRefs": [
								{
									"manyRelationIndex": 0,
									"oneSchemaIndex": null,
									"oneTableIndex": 5,
									"oneColumnIndex": 1,
									"sinceVersion": 1
								}
							],
							"name": "ACTOR_ID",
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
							"isGenerated": true,
							"manyRelationColumnRefs": [],
							"name": "VOTE_VARIATION_ID",
							"notNull": false,
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
							"manyRelationColumnRefs": [
								{
									"manyRelationIndex": 1,
									"oneSchemaIndex": null,
									"oneTableIndex": 86,
									"oneColumnIndex": 2,
									"sinceVersion": 1
								}
							],
							"name": "POLL_VARIATION_ID",
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
							"isGenerated": false,
							"manyRelationColumnRefs": [
								{
									"manyRelationIndex": 2,
									"oneSchemaIndex": null,
									"oneTableIndex": 61,
									"oneRelationIndex": 4,
									"oneColumnIndex": 2,
									"sinceVersion": 1
								}
							],
							"name": "VOTE_ID",
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
							"isGenerated": false,
							"manyRelationColumnRefs": [
								{
									"manyRelationIndex": 3,
									"oneSchemaIndex": null,
									"oneTableIndex": 51,
									"oneColumnIndex": 2,
									"sinceVersion": 1
								}
							],
							"name": "POLL_VARIATION_TRANSLATION_ID",
							"notNull": true,
							"propertyRefs": [
								{
									"index": 5
								}
							],
							"sinceVersion": 1,
							"type": 4
						},
						{
							"index": 6,
							"isGenerated": false,
							"manyRelationColumnRefs": [
								{
									"manyRelationIndex": 4,
									"oneSchemaIndex": null,
									"oneTableIndex": 30,
									"oneColumnIndex": 2,
									"sinceVersion": 1
								}
							],
							"name": "POLL_LOCATION_TIME_FRAME_ID",
							"notNull": true,
							"propertyRefs": [
								{
									"index": 6
								}
							],
							"sinceVersion": 1,
							"type": 4
						}
					],
					"idColumnRefs": [
						{
							"index": 2
						}
					],
					"index": 65,
					"isLocal": true,
					"isRepositoryEntity": false,
					"name": "VoteVariation",
					"properties": [
						{
							"columnRef": {
								"index": 0
							},
							"index": 0,
							"isId": false,
							"name": "createdAt",
							"sinceVersion": 1
						},
						{
							"index": 1,
							"isId": false,
							"name": "actor",
							"relationRef": {
								"index": 0
							},
							"sinceVersion": 1
						},
						{
							"columnRef": {
								"index": 2
							},
							"index": 2,
							"isId": true,
							"name": "id",
							"sinceVersion": 1
						},
						{
							"index": 3,
							"isId": false,
							"name": "variation",
							"relationRef": {
								"index": 1
							},
							"sinceVersion": 1
						},
						{
							"index": 4,
							"isId": false,
							"name": "vote",
							"relationRef": {
								"index": 2
							},
							"sinceVersion": 1
						},
						{
							"index": 5,
							"isId": false,
							"name": "variationTranslation",
							"relationRef": {
								"index": 3
							},
							"sinceVersion": 1
						},
						{
							"index": 6,
							"isId": false,
							"name": "locationTimeFrame",
							"relationRef": {
								"index": 4
							},
							"sinceVersion": 1
						},
						{
							"index": 7,
							"isId": false,
							"name": "factors",
							"relationRef": {
								"index": 5
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
							"relationTableIndex": 5,
							"sinceVersion": 1
						},
						{
							"index": 1,
							"isId": false,
							"relationType": 1,
							"propertyRef": {
								"index": 3
							},
							"relationTableIndex": 86,
							"sinceVersion": 1
						},
						{
							"index": 2,
							"isId": false,
							"relationType": 1,
							"propertyRef": {
								"index": 4
							},
							"relationTableIndex": 61,
							"sinceVersion": 1
						},
						{
							"index": 3,
							"isId": false,
							"relationType": 1,
							"propertyRef": {
								"index": 5
							},
							"relationTableIndex": 51,
							"sinceVersion": 1
						},
						{
							"index": 4,
							"isId": false,
							"relationType": 1,
							"propertyRef": {
								"index": 6
							},
							"relationTableIndex": 30,
							"sinceVersion": 1
						},
						{
							"index": 5,
							"isId": false,
							"oneToManyElems": {
								"cascade": 1,
								"mappedBy": "voteVariation"
							},
							"relationType": 0,
							"propertyRef": {
								"index": 7
							},
							"relationTableIndex": 64,
							"sinceVersion": 1
						}
					],
					"sinceVersion": 1,
					"tableConfig": {
						"name": "VOTE_VARIATIONS",
						"indexes": []
					}
				},
				{
					"columns": [
						{
							"index": 0,
							"isGenerated": false,
							"manyRelationColumnRefs": [],
							"name": "CREATED_AT",
							"notNull": false,
							"propertyRefs": [
								{
									"index": 0
								}
							],
							"sinceVersion": 1,
							"type": 2
						},
						{
							"index": 1,
							"isGenerated": true,
							"manyRelationColumnRefs": [],
							"name": "POLL_OPINION_VERSION_RATING_COUNT_ID",
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
							"isGenerated": false,
							"manyRelationColumnRefs": [],
							"name": "COUNT",
							"notNull": false,
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
							"manyRelationColumnRefs": [
								{
									"manyRelationIndex": 0,
									"oneSchemaIndex": null,
									"oneTableIndex": 79,
									"oneRelationIndex": 10,
									"oneColumnIndex": 1,
									"sinceVersion": 1
								}
							],
							"name": "POLL_OPINION_VERSION_ID",
							"notNull": false,
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
							"isGenerated": false,
							"manyRelationColumnRefs": [
								{
									"manyRelationIndex": 1,
									"oneSchemaIndex": null,
									"oneTableIndex": 19,
									"oneColumnIndex": 1,
									"sinceVersion": 1
								}
							],
							"name": "RATING_ID",
							"notNull": false,
							"propertyRefs": [
								{
									"index": 4
								}
							],
							"sinceVersion": 1,
							"type": 4
						}
					],
					"idColumnRefs": [
						{
							"index": 1
						}
					],
					"index": 66,
					"isLocal": true,
					"isRepositoryEntity": false,
					"name": "PollOpinionVersionRatingCount",
					"properties": [
						{
							"columnRef": {
								"index": 0
							},
							"index": 0,
							"isId": false,
							"name": "createdAt",
							"sinceVersion": 1
						},
						{
							"columnRef": {
								"index": 1
							},
							"index": 1,
							"isId": true,
							"name": "id",
							"sinceVersion": 1
						},
						{
							"columnRef": {
								"index": 2
							},
							"index": 2,
							"isId": false,
							"name": "count",
							"sinceVersion": 1
						},
						{
							"index": 3,
							"isId": false,
							"name": "pollOpinionVersion",
							"relationRef": {
								"index": 0
							},
							"sinceVersion": 1
						},
						{
							"index": 4,
							"isId": false,
							"name": "rating",
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
								"index": 3
							},
							"relationTableIndex": 79,
							"sinceVersion": 1
						},
						{
							"index": 1,
							"isId": false,
							"relationType": 1,
							"propertyRef": {
								"index": 4
							},
							"relationTableIndex": 19,
							"sinceVersion": 1
						}
					],
					"sinceVersion": 1,
					"tableConfig": {
						"name": "POLL_OPINION_VERSION_RATING_COUNTS",
						"indexes": []
					}
				},
				{
					"columns": [
						{
							"index": 0,
							"isGenerated": false,
							"manyRelationColumnRefs": [],
							"name": "CREATED_AT",
							"notNull": false,
							"propertyRefs": [
								{
									"index": 0
								}
							],
							"sinceVersion": 1,
							"type": 2
						},
						{
							"index": 1,
							"isGenerated": true,
							"manyRelationColumnRefs": [],
							"name": "POLL_FACTOR_VARIATION_ID",
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
							"isGenerated": false,
							"manyRelationColumnRefs": [
								{
									"manyRelationIndex": 0,
									"oneSchemaIndex": null,
									"oneTableIndex": 86,
									"oneRelationIndex": 9,
									"oneColumnIndex": 2,
									"sinceVersion": 1
								}
							],
							"name": "POLL_VARIATION_ID",
							"notNull": false,
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
							"manyRelationColumnRefs": [
								{
									"manyRelationIndex": 1,
									"oneSchemaIndex": null,
									"oneTableIndex": 44,
									"oneColumnIndex": 2,
									"sinceVersion": 1
								}
							],
							"name": "FACTOR_VARIATION_ID",
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
							"isGenerated": false,
							"manyRelationColumnRefs": [
								{
									"manyRelationIndex": 2,
									"oneSchemaIndex": null,
									"oneTableIndex": 67,
									"oneRelationIndex": 3,
									"oneColumnIndex": 1,
									"sinceVersion": 1
								}
							],
							"name": "PARENT_POLL_FACTOR_VARIATION_ID",
							"notNull": false,
							"propertyRefs": [
								{
									"index": 4
								}
							],
							"sinceVersion": 1,
							"type": 4
						}
					],
					"idColumnRefs": [
						{
							"index": 1
						}
					],
					"index": 67,
					"isLocal": true,
					"isRepositoryEntity": false,
					"name": "PollFactorVariation",
					"properties": [
						{
							"columnRef": {
								"index": 0
							},
							"index": 0,
							"isId": false,
							"name": "createdAt",
							"sinceVersion": 1
						},
						{
							"columnRef": {
								"index": 1
							},
							"index": 1,
							"isId": true,
							"name": "id",
							"sinceVersion": 1
						},
						{
							"index": 2,
							"isId": false,
							"name": "pollVariation",
							"relationRef": {
								"index": 0
							},
							"sinceVersion": 1
						},
						{
							"index": 3,
							"isId": false,
							"name": "factorVariation",
							"relationRef": {
								"index": 1
							},
							"sinceVersion": 1
						},
						{
							"index": 4,
							"isId": false,
							"name": "parent",
							"relationRef": {
								"index": 2
							},
							"sinceVersion": 1
						},
						{
							"index": 5,
							"isId": false,
							"name": "children",
							"relationRef": {
								"index": 3
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
							"relationTableIndex": 86,
							"sinceVersion": 1
						},
						{
							"index": 1,
							"isId": false,
							"relationType": 1,
							"propertyRef": {
								"index": 3
							},
							"relationTableIndex": 44,
							"sinceVersion": 1
						},
						{
							"index": 2,
							"isId": false,
							"relationType": 1,
							"propertyRef": {
								"index": 4
							},
							"relationTableIndex": 67,
							"sinceVersion": 1
						},
						{
							"index": 3,
							"isId": false,
							"oneToManyElems": {
								"cascade": 1,
								"mappedBy": "parent"
							},
							"relationType": 0,
							"propertyRef": {
								"index": 5
							},
							"relationTableIndex": 67,
							"sinceVersion": 1
						}
					],
					"sinceVersion": 1,
					"tableConfig": {
						"name": "POLL_FACTOR_VARIATIONS",
						"indexes": []
					}
				},
				{
					"columns": [
						{
							"index": 0,
							"isGenerated": false,
							"manyRelationColumnRefs": [],
							"name": "CREATED_AT",
							"notNull": false,
							"propertyRefs": [
								{
									"index": 0
								}
							],
							"sinceVersion": 1,
							"type": 2
						},
						{
							"index": 1,
							"isGenerated": true,
							"manyRelationColumnRefs": [],
							"name": "FACTOR_OPINION_VERSION_RATING_COUNT_ID",
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
							"isGenerated": false,
							"manyRelationColumnRefs": [],
							"name": "COUNT",
							"notNull": false,
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
							"manyRelationColumnRefs": [
								{
									"manyRelationIndex": 0,
									"oneSchemaIndex": null,
									"oneTableIndex": 76,
									"oneRelationIndex": 6,
									"oneColumnIndex": 0,
									"sinceVersion": 1
								}
							],
							"name": "FACTOR_OPINION_VERSION_ID",
							"notNull": false,
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
							"isGenerated": false,
							"manyRelationColumnRefs": [
								{
									"manyRelationIndex": 1,
									"oneSchemaIndex": null,
									"oneTableIndex": 19,
									"oneColumnIndex": 1,
									"sinceVersion": 1
								}
							],
							"name": "RATING_ID",
							"notNull": false,
							"propertyRefs": [
								{
									"index": 4
								}
							],
							"sinceVersion": 1,
							"type": 4
						}
					],
					"idColumnRefs": [
						{
							"index": 1
						}
					],
					"index": 68,
					"isLocal": true,
					"isRepositoryEntity": false,
					"name": "FactorOpinionVersionRatingCount",
					"properties": [
						{
							"columnRef": {
								"index": 0
							},
							"index": 0,
							"isId": false,
							"name": "createdAt",
							"sinceVersion": 1
						},
						{
							"columnRef": {
								"index": 1
							},
							"index": 1,
							"isId": true,
							"name": "id",
							"sinceVersion": 1
						},
						{
							"columnRef": {
								"index": 2
							},
							"index": 2,
							"isId": false,
							"name": "count",
							"sinceVersion": 1
						},
						{
							"index": 3,
							"isId": false,
							"name": "factorOpinionVersion",
							"relationRef": {
								"index": 0
							},
							"sinceVersion": 1
						},
						{
							"index": 4,
							"isId": false,
							"name": "rating",
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
								"index": 3
							},
							"relationTableIndex": 76,
							"sinceVersion": 1
						},
						{
							"index": 1,
							"isId": false,
							"relationType": 1,
							"propertyRef": {
								"index": 4
							},
							"relationTableIndex": 19,
							"sinceVersion": 1
						}
					],
					"sinceVersion": 1,
					"tableConfig": {
						"name": "FACTOR_OPINION_VERSION_RATING_COUNTS",
						"indexes": []
					}
				},
				{
					"columns": [
						{
							"index": 0,
							"isGenerated": false,
							"manyRelationColumnRefs": [],
							"name": "CREATED_AT",
							"notNull": false,
							"propertyRefs": [
								{
									"index": 0
								}
							],
							"sinceVersion": 1,
							"type": 2
						},
						{
							"index": 1,
							"isGenerated": true,
							"manyRelationColumnRefs": [],
							"name": "POLL_POSITION_VARIATION_ID",
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
							"isGenerated": false,
							"manyRelationColumnRefs": [
								{
									"manyRelationIndex": 0,
									"oneSchemaIndex": null,
									"oneTableIndex": 86,
									"oneRelationIndex": 11,
									"oneColumnIndex": 2,
									"sinceVersion": 1
								}
							],
							"name": "POLL_VARIATION_ID",
							"notNull": false,
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
							"manyRelationColumnRefs": [
								{
									"manyRelationIndex": 1,
									"oneSchemaIndex": null,
									"oneTableIndex": 48,
									"oneColumnIndex": 2,
									"sinceVersion": 1
								}
							],
							"name": "POSITION_VARIATION_ID",
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
							"isGenerated": false,
							"manyRelationColumnRefs": [
								{
									"manyRelationIndex": 2,
									"oneSchemaIndex": null,
									"oneTableIndex": 69,
									"oneRelationIndex": 3,
									"oneColumnIndex": 1,
									"sinceVersion": 1
								}
							],
							"name": "PARENT_POLL_POSITION_VARIATION_ID",
							"notNull": false,
							"propertyRefs": [
								{
									"index": 4
								}
							],
							"sinceVersion": 1,
							"type": 4
						}
					],
					"idColumnRefs": [
						{
							"index": 1
						}
					],
					"index": 69,
					"isLocal": true,
					"isRepositoryEntity": false,
					"name": "PollPositionVariation",
					"properties": [
						{
							"columnRef": {
								"index": 0
							},
							"index": 0,
							"isId": false,
							"name": "createdAt",
							"sinceVersion": 1
						},
						{
							"columnRef": {
								"index": 1
							},
							"index": 1,
							"isId": true,
							"name": "id",
							"sinceVersion": 1
						},
						{
							"index": 2,
							"isId": false,
							"name": "pollVariation",
							"relationRef": {
								"index": 0
							},
							"sinceVersion": 1
						},
						{
							"index": 3,
							"isId": false,
							"name": "positionVariation",
							"relationRef": {
								"index": 1
							},
							"sinceVersion": 1
						},
						{
							"index": 4,
							"isId": false,
							"name": "parent",
							"relationRef": {
								"index": 2
							},
							"sinceVersion": 1
						},
						{
							"index": 5,
							"isId": false,
							"name": "children",
							"relationRef": {
								"index": 3
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
							"relationTableIndex": 86,
							"sinceVersion": 1
						},
						{
							"index": 1,
							"isId": false,
							"relationType": 1,
							"propertyRef": {
								"index": 3
							},
							"relationTableIndex": 48,
							"sinceVersion": 1
						},
						{
							"index": 2,
							"isId": false,
							"relationType": 1,
							"propertyRef": {
								"index": 4
							},
							"relationTableIndex": 69,
							"sinceVersion": 1
						},
						{
							"index": 3,
							"isId": false,
							"oneToManyElems": {
								"cascade": 1,
								"mappedBy": "parent"
							},
							"relationType": 0,
							"propertyRef": {
								"index": 5
							},
							"relationTableIndex": 69,
							"sinceVersion": 1
						}
					],
					"sinceVersion": 1,
					"tableConfig": {
						"name": "POLL_POSITION_VARIATIONS",
						"indexes": []
					}
				},
				{
					"columns": [
						{
							"index": 0,
							"isGenerated": false,
							"manyRelationColumnRefs": [],
							"name": "CREATED_AT",
							"notNull": false,
							"propertyRefs": [
								{
									"index": 0
								}
							],
							"sinceVersion": 1,
							"type": 2
						},
						{
							"index": 1,
							"isGenerated": true,
							"manyRelationColumnRefs": [],
							"name": "POSITION_OPINION_VERSION_RATING_COUNT_ID",
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
							"isGenerated": false,
							"manyRelationColumnRefs": [],
							"name": "COUNT",
							"notNull": false,
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
							"manyRelationColumnRefs": [
								{
									"manyRelationIndex": 0,
									"oneSchemaIndex": null,
									"oneTableIndex": 73,
									"oneRelationIndex": 5,
									"oneColumnIndex": 0,
									"sinceVersion": 1
								}
							],
							"name": "POSITION_OPINION_VERSION_ID",
							"notNull": false,
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
							"isGenerated": false,
							"manyRelationColumnRefs": [
								{
									"manyRelationIndex": 1,
									"oneSchemaIndex": null,
									"oneTableIndex": 19,
									"oneColumnIndex": 1,
									"sinceVersion": 1
								}
							],
							"name": "RATING_ID",
							"notNull": false,
							"propertyRefs": [
								{
									"index": 4
								}
							],
							"sinceVersion": 1,
							"type": 4
						}
					],
					"idColumnRefs": [
						{
							"index": 1
						}
					],
					"index": 70,
					"isLocal": true,
					"isRepositoryEntity": false,
					"name": "PositionOpinionVersionRatingCount",
					"properties": [
						{
							"columnRef": {
								"index": 0
							},
							"index": 0,
							"isId": false,
							"name": "createdAt",
							"sinceVersion": 1
						},
						{
							"columnRef": {
								"index": 1
							},
							"index": 1,
							"isId": true,
							"name": "id",
							"sinceVersion": 1
						},
						{
							"columnRef": {
								"index": 2
							},
							"index": 2,
							"isId": false,
							"name": "count",
							"sinceVersion": 1
						},
						{
							"index": 3,
							"isId": false,
							"name": "positionOpinionVersion",
							"relationRef": {
								"index": 0
							},
							"sinceVersion": 1
						},
						{
							"index": 4,
							"isId": false,
							"name": "rating",
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
								"index": 3
							},
							"relationTableIndex": 73,
							"sinceVersion": 1
						},
						{
							"index": 1,
							"isId": false,
							"relationType": 1,
							"propertyRef": {
								"index": 4
							},
							"relationTableIndex": 19,
							"sinceVersion": 1
						}
					],
					"sinceVersion": 1,
					"tableConfig": {
						"name": "POSITION_OPINION_VERSION_RATING_COUNTS",
						"indexes": []
					}
				},
				{
					"columns": [
						{
							"index": 0,
							"isGenerated": false,
							"manyRelationColumnRefs": [],
							"name": "CREATED_AT",
							"notNull": false,
							"propertyRefs": [
								{
									"index": 0
								}
							],
							"sinceVersion": 1,
							"type": 2
						},
						{
							"index": 1,
							"isGenerated": true,
							"manyRelationColumnRefs": [],
							"name": "POSITION_OPINION_VERSION_TRANSLATION_ID",
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
							"isGenerated": false,
							"manyRelationColumnRefs": [],
							"name": "FACTOR_OPINION_VERSION_TRANSLATION_IS_ORIGINAL",
							"notNull": true,
							"propertyRefs": [
								{
									"index": 2
								}
							],
							"sinceVersion": 1,
							"type": 1
						},
						{
							"index": 3,
							"isGenerated": false,
							"manyRelationColumnRefs": [],
							"name": "POSITION_OPINION_VERSION_TRANSLATION_TITLE",
							"notNull": true,
							"propertyRefs": [
								{
									"index": 3
								}
							],
							"sinceVersion": 1,
							"type": 5
						},
						{
							"index": 4,
							"isGenerated": false,
							"manyRelationColumnRefs": [],
							"name": "POSITION_OPINION_VERSION_TRANSLATION_TEXT",
							"notNull": true,
							"propertyRefs": [
								{
									"index": 4
								}
							],
							"sinceVersion": 1,
							"type": 5
						},
						{
							"index": 5,
							"isGenerated": false,
							"manyRelationColumnRefs": [
								{
									"manyRelationIndex": 0,
									"oneSchemaIndex": null,
									"oneTableIndex": 73,
									"oneRelationIndex": 4,
									"oneColumnIndex": 0,
									"sinceVersion": 1
								}
							],
							"name": "POSITION_OPINION_VERSION_ID",
							"notNull": true,
							"propertyRefs": [
								{
									"index": 5
								}
							],
							"sinceVersion": 1,
							"type": 4
						},
						{
							"index": 6,
							"isGenerated": false,
							"manyRelationColumnRefs": [
								{
									"manyRelationIndex": 1,
									"oneSchemaIndex": null,
									"oneTableIndex": 16,
									"oneColumnIndex": 0,
									"sinceVersion": 1
								}
							],
							"name": "LANGUAGE_ID",
							"notNull": true,
							"propertyRefs": [
								{
									"index": 6
								}
							],
							"sinceVersion": 1,
							"type": 4
						}
					],
					"idColumnRefs": [
						{
							"index": 1
						}
					],
					"index": 71,
					"isLocal": true,
					"isRepositoryEntity": false,
					"name": "PositionOpinionVersionTranslation",
					"properties": [
						{
							"columnRef": {
								"index": 0
							},
							"index": 0,
							"isId": false,
							"name": "createdAt",
							"sinceVersion": 1
						},
						{
							"columnRef": {
								"index": 1
							},
							"index": 1,
							"isId": true,
							"name": "id",
							"sinceVersion": 1
						},
						{
							"columnRef": {
								"index": 2
							},
							"index": 2,
							"isId": false,
							"name": "original",
							"sinceVersion": 1
						},
						{
							"columnRef": {
								"index": 3
							},
							"index": 3,
							"isId": false,
							"name": "title",
							"sinceVersion": 1
						},
						{
							"columnRef": {
								"index": 4
							},
							"index": 4,
							"isId": false,
							"name": "text",
							"sinceVersion": 1
						},
						{
							"index": 5,
							"isId": false,
							"name": "positionOpinionVersion",
							"relationRef": {
								"index": 0
							},
							"sinceVersion": 1
						},
						{
							"index": 6,
							"isId": false,
							"name": "language",
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
								"index": 5
							},
							"relationTableIndex": 73,
							"sinceVersion": 1
						},
						{
							"index": 1,
							"isId": false,
							"relationType": 1,
							"propertyRef": {
								"index": 6
							},
							"relationTableIndex": 16,
							"sinceVersion": 1
						}
					],
					"sinceVersion": 1,
					"tableConfig": {
						"name": "POSITION_OPINION_VERSION_TRANSLATIONS",
						"indexes": []
					}
				},
				{
					"columns": [
						{
							"index": 0,
							"isGenerated": false,
							"manyRelationColumnRefs": [],
							"name": "CREATED_AT",
							"notNull": false,
							"propertyRefs": [
								{
									"index": 0
								}
							],
							"sinceVersion": 1,
							"type": 2
						},
						{
							"index": 1,
							"isGenerated": false,
							"manyRelationColumnRefs": [
								{
									"manyRelationIndex": 0,
									"oneSchemaIndex": null,
									"oneTableIndex": 5,
									"oneColumnIndex": 1,
									"sinceVersion": 1
								}
							],
							"name": "ACTOR_ID",
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
							"isGenerated": true,
							"manyRelationColumnRefs": [],
							"name": "POSITION_OPINION_VERSION_RATING_ID",
							"notNull": false,
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
							"name": "POSITION_OPINION_VERSION_RATING_IS_CURRENT",
							"notNull": false,
							"propertyRefs": [
								{
									"index": 3
								}
							],
							"sinceVersion": 1,
							"type": 1
						},
						{
							"index": 4,
							"isGenerated": false,
							"manyRelationColumnRefs": [
								{
									"manyRelationIndex": 1,
									"oneSchemaIndex": null,
									"oneTableIndex": 73,
									"oneRelationIndex": 3,
									"oneColumnIndex": 0,
									"sinceVersion": 1
								}
							],
							"name": "POSITION_OPINION_VERSION_ID",
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
							"isGenerated": false,
							"manyRelationColumnRefs": [
								{
									"manyRelationIndex": 2,
									"oneSchemaIndex": null,
									"oneTableIndex": 19,
									"oneColumnIndex": 1,
									"sinceVersion": 1
								}
							],
							"name": "RATING_ID",
							"notNull": false,
							"propertyRefs": [
								{
									"index": 5
								}
							],
							"sinceVersion": 1,
							"type": 4
						},
						{
							"index": 6,
							"isGenerated": false,
							"manyRelationColumnRefs": [
								{
									"manyRelationIndex": 3,
									"oneSchemaIndex": null,
									"oneTableIndex": 72,
									"oneRelationIndex": 4,
									"oneColumnIndex": 2,
									"sinceVersion": 1
								}
							],
							"name": "PARENT_POSITION_OPINION_VERSION_RATING_ID",
							"notNull": false,
							"propertyRefs": [
								{
									"index": 6
								}
							],
							"sinceVersion": 1,
							"type": 4
						}
					],
					"idColumnRefs": [
						{
							"index": 2
						}
					],
					"index": 72,
					"isLocal": true,
					"isRepositoryEntity": false,
					"name": "PositionOpinionVersionRating",
					"properties": [
						{
							"columnRef": {
								"index": 0
							},
							"index": 0,
							"isId": false,
							"name": "createdAt",
							"sinceVersion": 1
						},
						{
							"index": 1,
							"isId": false,
							"name": "actor",
							"relationRef": {
								"index": 0
							},
							"sinceVersion": 1
						},
						{
							"columnRef": {
								"index": 2
							},
							"index": 2,
							"isId": true,
							"name": "id",
							"sinceVersion": 1
						},
						{
							"columnRef": {
								"index": 3
							},
							"index": 3,
							"isId": false,
							"name": "isCurrent",
							"sinceVersion": 1
						},
						{
							"index": 4,
							"isId": false,
							"name": "positionOpinionVersion",
							"relationRef": {
								"index": 1
							},
							"sinceVersion": 1
						},
						{
							"index": 5,
							"isId": false,
							"name": "rating",
							"relationRef": {
								"index": 2
							},
							"sinceVersion": 1
						},
						{
							"index": 6,
							"isId": false,
							"name": "parent",
							"relationRef": {
								"index": 3
							},
							"sinceVersion": 1
						},
						{
							"index": 7,
							"isId": false,
							"name": "child",
							"relationRef": {
								"index": 4
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
							"relationTableIndex": 5,
							"sinceVersion": 1
						},
						{
							"index": 1,
							"isId": false,
							"relationType": 1,
							"propertyRef": {
								"index": 4
							},
							"relationTableIndex": 73,
							"sinceVersion": 1
						},
						{
							"index": 2,
							"isId": false,
							"relationType": 1,
							"propertyRef": {
								"index": 5
							},
							"relationTableIndex": 19,
							"sinceVersion": 1
						},
						{
							"index": 3,
							"isId": false,
							"relationType": 1,
							"propertyRef": {
								"index": 6
							},
							"relationTableIndex": 72,
							"sinceVersion": 1
						},
						{
							"index": 4,
							"isId": false,
							"oneToManyElems": {
								"cascade": 1,
								"mappedBy": "parent"
							},
							"relationType": 0,
							"propertyRef": {
								"index": 7
							},
							"relationTableIndex": 72,
							"sinceVersion": 1
						}
					],
					"sinceVersion": 1,
					"tableConfig": {
						"name": "POSITION_OPINION_VERSION_RATINGS",
						"indexes": []
					}
				},
				{
					"columns": [
						{
							"index": 0,
							"isGenerated": true,
							"manyRelationColumnRefs": [],
							"name": "POSITION_OPINION_VERSION_ID",
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
							"manyRelationColumnRefs": [
								{
									"manyRelationIndex": 0,
									"oneSchemaIndex": null,
									"oneTableIndex": 76,
									"oneRelationIndex": 5,
									"oneColumnIndex": 0,
									"sinceVersion": 1
								}
							],
							"name": "FACTOR_OPINION_VERSION_ID",
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
							"manyRelationColumnRefs": [
								{
									"manyRelationIndex": 1,
									"oneSchemaIndex": null,
									"oneTableIndex": 69,
									"oneColumnIndex": 1,
									"sinceVersion": 1
								}
							],
							"name": "POLL_POSITION_VARIATION_ID",
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
							"manyRelationColumnRefs": [
								{
									"manyRelationIndex": 2,
									"oneSchemaIndex": null,
									"oneTableIndex": 16,
									"oneColumnIndex": 0,
									"sinceVersion": 1
								}
							],
							"name": "LANGUAGE_ID",
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
					"idColumnRefs": [
						{
							"index": 0
						}
					],
					"index": 73,
					"isLocal": true,
					"isRepositoryEntity": false,
					"name": "PositionOpinionVersion",
					"properties": [
						{
							"columnRef": {
								"index": 0
							},
							"index": 0,
							"isId": true,
							"name": "id",
							"sinceVersion": 1
						},
						{
							"index": 1,
							"isId": false,
							"name": "factorOpinionVersion",
							"relationRef": {
								"index": 0
							},
							"sinceVersion": 1
						},
						{
							"index": 2,
							"isId": false,
							"name": "pollPositionVariation",
							"relationRef": {
								"index": 1
							},
							"sinceVersion": 1
						},
						{
							"index": 3,
							"isId": false,
							"name": "language",
							"relationRef": {
								"index": 2
							},
							"sinceVersion": 1
						},
						{
							"index": 4,
							"isId": false,
							"name": "ratings",
							"relationRef": {
								"index": 3
							},
							"sinceVersion": 1
						},
						{
							"index": 5,
							"isId": false,
							"name": "translations",
							"relationRef": {
								"index": 4
							},
							"sinceVersion": 1
						},
						{
							"index": 6,
							"isId": false,
							"name": "ratingCounts",
							"relationRef": {
								"index": 5
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
							"relationTableIndex": 76,
							"sinceVersion": 1
						},
						{
							"index": 1,
							"isId": false,
							"relationType": 1,
							"propertyRef": {
								"index": 2
							},
							"relationTableIndex": 69,
							"sinceVersion": 1
						},
						{
							"index": 2,
							"isId": false,
							"relationType": 1,
							"propertyRef": {
								"index": 3
							},
							"relationTableIndex": 16,
							"sinceVersion": 1
						},
						{
							"index": 3,
							"isId": false,
							"oneToManyElems": {
								"cascade": 1,
								"mappedBy": "positionOpinionVersion"
							},
							"relationType": 0,
							"propertyRef": {
								"index": 4
							},
							"relationTableIndex": 72,
							"sinceVersion": 1
						},
						{
							"index": 4,
							"isId": false,
							"oneToManyElems": {
								"cascade": 1,
								"mappedBy": "positionOpinionVersion"
							},
							"relationType": 0,
							"propertyRef": {
								"index": 5
							},
							"relationTableIndex": 71,
							"sinceVersion": 1
						},
						{
							"index": 5,
							"isId": false,
							"oneToManyElems": {
								"cascade": 0,
								"mappedBy": "positionOpinionVersion"
							},
							"relationType": 0,
							"propertyRef": {
								"index": 6
							},
							"relationTableIndex": 70,
							"sinceVersion": 1
						}
					],
					"sinceVersion": 1,
					"tableConfig": {
						"name": "POSITION_OPINION_VERSIONS",
						"indexes": []
					}
				},
				{
					"columns": [
						{
							"index": 0,
							"isGenerated": false,
							"manyRelationColumnRefs": [],
							"name": "CREATED_AT",
							"notNull": false,
							"propertyRefs": [
								{
									"index": 0
								}
							],
							"sinceVersion": 1,
							"type": 2
						},
						{
							"index": 1,
							"isGenerated": true,
							"manyRelationColumnRefs": [],
							"name": "FACTOR_OPINION_VERSION_TRANSLATION_ID",
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
							"isGenerated": false,
							"manyRelationColumnRefs": [],
							"name": "FACTOR_OPINION_VERSION_TRANSLATION_IS_ORIGINAL",
							"notNull": true,
							"propertyRefs": [
								{
									"index": 2
								}
							],
							"sinceVersion": 1,
							"type": 1
						},
						{
							"index": 3,
							"isGenerated": false,
							"manyRelationColumnRefs": [],
							"name": "FACTOR_OPINION_VERSION_TRANSLATION_TITLE",
							"notNull": true,
							"propertyRefs": [
								{
									"index": 3
								}
							],
							"sinceVersion": 1,
							"type": 5
						},
						{
							"index": 4,
							"isGenerated": false,
							"manyRelationColumnRefs": [],
							"name": "FACTOR_OPINION_VERSION_TRANSLATION_TEXT",
							"notNull": true,
							"propertyRefs": [
								{
									"index": 4
								}
							],
							"sinceVersion": 1,
							"type": 5
						},
						{
							"index": 5,
							"isGenerated": false,
							"manyRelationColumnRefs": [
								{
									"manyRelationIndex": 0,
									"oneSchemaIndex": null,
									"oneTableIndex": 76,
									"oneRelationIndex": 4,
									"oneColumnIndex": 0,
									"sinceVersion": 1
								}
							],
							"name": "FACTOR_OPINION_VERSION_ID",
							"notNull": true,
							"propertyRefs": [
								{
									"index": 5
								}
							],
							"sinceVersion": 1,
							"type": 4
						},
						{
							"index": 6,
							"isGenerated": false,
							"manyRelationColumnRefs": [
								{
									"manyRelationIndex": 1,
									"oneSchemaIndex": null,
									"oneTableIndex": 16,
									"oneColumnIndex": 0,
									"sinceVersion": 1
								}
							],
							"name": "LANGUAGE_ID",
							"notNull": true,
							"propertyRefs": [
								{
									"index": 6
								}
							],
							"sinceVersion": 1,
							"type": 4
						}
					],
					"idColumnRefs": [
						{
							"index": 1
						}
					],
					"index": 74,
					"isLocal": true,
					"isRepositoryEntity": false,
					"name": "FactorOpinionVersionTranslation",
					"properties": [
						{
							"columnRef": {
								"index": 0
							},
							"index": 0,
							"isId": false,
							"name": "createdAt",
							"sinceVersion": 1
						},
						{
							"columnRef": {
								"index": 1
							},
							"index": 1,
							"isId": true,
							"name": "id",
							"sinceVersion": 1
						},
						{
							"columnRef": {
								"index": 2
							},
							"index": 2,
							"isId": false,
							"name": "original",
							"sinceVersion": 1
						},
						{
							"columnRef": {
								"index": 3
							},
							"index": 3,
							"isId": false,
							"name": "title",
							"sinceVersion": 1
						},
						{
							"columnRef": {
								"index": 4
							},
							"index": 4,
							"isId": false,
							"name": "text",
							"sinceVersion": 1
						},
						{
							"index": 5,
							"isId": false,
							"name": "factorOpinionVersion",
							"relationRef": {
								"index": 0
							},
							"sinceVersion": 1
						},
						{
							"index": 6,
							"isId": false,
							"name": "language",
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
								"index": 5
							},
							"relationTableIndex": 76,
							"sinceVersion": 1
						},
						{
							"index": 1,
							"isId": false,
							"relationType": 1,
							"propertyRef": {
								"index": 6
							},
							"relationTableIndex": 16,
							"sinceVersion": 1
						}
					],
					"sinceVersion": 1,
					"tableConfig": {
						"name": "FACTOR_OPINION_VERSION_TRANSLATIONS",
						"indexes": []
					}
				},
				{
					"columns": [
						{
							"index": 0,
							"isGenerated": false,
							"manyRelationColumnRefs": [],
							"name": "CREATED_AT",
							"notNull": false,
							"propertyRefs": [
								{
									"index": 0
								}
							],
							"sinceVersion": 1,
							"type": 2
						},
						{
							"index": 1,
							"isGenerated": false,
							"manyRelationColumnRefs": [
								{
									"manyRelationIndex": 0,
									"oneSchemaIndex": null,
									"oneTableIndex": 5,
									"oneColumnIndex": 1,
									"sinceVersion": 1
								}
							],
							"name": "ACTOR_ID",
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
							"isGenerated": true,
							"manyRelationColumnRefs": [],
							"name": "FACTOR_OPINION_VERSION_RATING_ID",
							"notNull": false,
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
							"name": "FACTOR_OPINION_VERSION_RATING_IS_CURRENT",
							"notNull": false,
							"propertyRefs": [
								{
									"index": 3
								}
							],
							"sinceVersion": 1,
							"type": 1
						},
						{
							"index": 4,
							"isGenerated": false,
							"manyRelationColumnRefs": [
								{
									"manyRelationIndex": 1,
									"oneSchemaIndex": null,
									"oneTableIndex": 76,
									"oneRelationIndex": 3,
									"oneColumnIndex": 0,
									"sinceVersion": 1
								}
							],
							"name": "FACTOR_OPINION_VERSION_ID",
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
							"isGenerated": false,
							"manyRelationColumnRefs": [
								{
									"manyRelationIndex": 2,
									"oneSchemaIndex": null,
									"oneTableIndex": 19,
									"oneColumnIndex": 1,
									"sinceVersion": 1
								}
							],
							"name": "RATING_ID",
							"notNull": false,
							"propertyRefs": [
								{
									"index": 5
								}
							],
							"sinceVersion": 1,
							"type": 4
						},
						{
							"index": 6,
							"isGenerated": false,
							"manyRelationColumnRefs": [
								{
									"manyRelationIndex": 3,
									"oneSchemaIndex": null,
									"oneTableIndex": 75,
									"oneRelationIndex": 4,
									"oneColumnIndex": 2,
									"sinceVersion": 1
								}
							],
							"name": "PARENT_FACTOR_OPINION_VERSION_RATING_ID",
							"notNull": false,
							"propertyRefs": [
								{
									"index": 6
								}
							],
							"sinceVersion": 1,
							"type": 4
						}
					],
					"idColumnRefs": [
						{
							"index": 2
						}
					],
					"index": 75,
					"isLocal": true,
					"isRepositoryEntity": false,
					"name": "FactorOpinionVersionRating",
					"properties": [
						{
							"columnRef": {
								"index": 0
							},
							"index": 0,
							"isId": false,
							"name": "createdAt",
							"sinceVersion": 1
						},
						{
							"index": 1,
							"isId": false,
							"name": "actor",
							"relationRef": {
								"index": 0
							},
							"sinceVersion": 1
						},
						{
							"columnRef": {
								"index": 2
							},
							"index": 2,
							"isId": true,
							"name": "id",
							"sinceVersion": 1
						},
						{
							"columnRef": {
								"index": 3
							},
							"index": 3,
							"isId": false,
							"name": "isCurrent",
							"sinceVersion": 1
						},
						{
							"index": 4,
							"isId": false,
							"name": "factorOpinionVersion",
							"relationRef": {
								"index": 1
							},
							"sinceVersion": 1
						},
						{
							"index": 5,
							"isId": false,
							"name": "rating",
							"relationRef": {
								"index": 2
							},
							"sinceVersion": 1
						},
						{
							"index": 6,
							"isId": false,
							"name": "parent",
							"relationRef": {
								"index": 3
							},
							"sinceVersion": 1
						},
						{
							"index": 7,
							"isId": false,
							"name": "child",
							"relationRef": {
								"index": 4
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
							"relationTableIndex": 5,
							"sinceVersion": 1
						},
						{
							"index": 1,
							"isId": false,
							"relationType": 1,
							"propertyRef": {
								"index": 4
							},
							"relationTableIndex": 76,
							"sinceVersion": 1
						},
						{
							"index": 2,
							"isId": false,
							"relationType": 1,
							"propertyRef": {
								"index": 5
							},
							"relationTableIndex": 19,
							"sinceVersion": 1
						},
						{
							"index": 3,
							"isId": false,
							"relationType": 1,
							"propertyRef": {
								"index": 6
							},
							"relationTableIndex": 75,
							"sinceVersion": 1
						},
						{
							"index": 4,
							"isId": false,
							"oneToManyElems": {
								"cascade": 1,
								"mappedBy": "parent"
							},
							"relationType": 0,
							"propertyRef": {
								"index": 7
							},
							"relationTableIndex": 75,
							"sinceVersion": 1
						}
					],
					"sinceVersion": 1,
					"tableConfig": {
						"name": "FACTOR_OPINION_VERSION_RATINGS",
						"indexes": []
					}
				},
				{
					"columns": [
						{
							"index": 0,
							"isGenerated": true,
							"manyRelationColumnRefs": [],
							"name": "FACTOR_OPINION_VERSION_ID",
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
							"manyRelationColumnRefs": [
								{
									"manyRelationIndex": 0,
									"oneSchemaIndex": null,
									"oneTableIndex": 79,
									"oneRelationIndex": 9,
									"oneColumnIndex": 1,
									"sinceVersion": 1
								}
							],
							"name": "POLL_OPINION_VERSION_ID",
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
							"manyRelationColumnRefs": [
								{
									"manyRelationIndex": 1,
									"oneSchemaIndex": null,
									"oneTableIndex": 67,
									"oneColumnIndex": 1,
									"sinceVersion": 1
								}
							],
							"name": "POLL_FACTOR_VARIATION_ID",
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
							"manyRelationColumnRefs": [
								{
									"manyRelationIndex": 2,
									"oneSchemaIndex": null,
									"oneTableIndex": 16,
									"oneColumnIndex": 0,
									"sinceVersion": 1
								}
							],
							"name": "LANGUAGE_ID",
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
					"idColumnRefs": [
						{
							"index": 0
						}
					],
					"index": 76,
					"isLocal": true,
					"isRepositoryEntity": false,
					"name": "FactorOpinionVersion",
					"properties": [
						{
							"columnRef": {
								"index": 0
							},
							"index": 0,
							"isId": true,
							"name": "id",
							"sinceVersion": 1
						},
						{
							"index": 1,
							"isId": false,
							"name": "pollOpinionVersion",
							"relationRef": {
								"index": 0
							},
							"sinceVersion": 1
						},
						{
							"index": 2,
							"isId": false,
							"name": "pollFactorVariation",
							"relationRef": {
								"index": 1
							},
							"sinceVersion": 1
						},
						{
							"index": 3,
							"isId": false,
							"name": "language",
							"relationRef": {
								"index": 2
							},
							"sinceVersion": 1
						},
						{
							"index": 4,
							"isId": false,
							"name": "ratings",
							"relationRef": {
								"index": 3
							},
							"sinceVersion": 1
						},
						{
							"index": 5,
							"isId": false,
							"name": "translations",
							"relationRef": {
								"index": 4
							},
							"sinceVersion": 1
						},
						{
							"index": 6,
							"isId": false,
							"name": "positions",
							"relationRef": {
								"index": 5
							},
							"sinceVersion": 1
						},
						{
							"index": 7,
							"isId": false,
							"name": "ratingCounts",
							"relationRef": {
								"index": 6
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
							"relationTableIndex": 79,
							"sinceVersion": 1
						},
						{
							"index": 1,
							"isId": false,
							"relationType": 1,
							"propertyRef": {
								"index": 2
							},
							"relationTableIndex": 67,
							"sinceVersion": 1
						},
						{
							"index": 2,
							"isId": false,
							"relationType": 1,
							"propertyRef": {
								"index": 3
							},
							"relationTableIndex": 16,
							"sinceVersion": 1
						},
						{
							"index": 3,
							"isId": false,
							"oneToManyElems": {
								"cascade": 1,
								"mappedBy": "factorOpinionVersion"
							},
							"relationType": 0,
							"propertyRef": {
								"index": 4
							},
							"relationTableIndex": 75,
							"sinceVersion": 1
						},
						{
							"index": 4,
							"isId": false,
							"oneToManyElems": {
								"cascade": 1,
								"mappedBy": "factorOpinionVersion"
							},
							"relationType": 0,
							"propertyRef": {
								"index": 5
							},
							"relationTableIndex": 74,
							"sinceVersion": 1
						},
						{
							"index": 5,
							"isId": false,
							"oneToManyElems": {
								"cascade": 1,
								"mappedBy": "factorOpinionVersion"
							},
							"relationType": 0,
							"propertyRef": {
								"index": 6
							},
							"relationTableIndex": 73,
							"sinceVersion": 1
						},
						{
							"index": 6,
							"isId": false,
							"oneToManyElems": {
								"cascade": 0,
								"mappedBy": "factorOpinionVersion"
							},
							"relationType": 0,
							"propertyRef": {
								"index": 7
							},
							"relationTableIndex": 68,
							"sinceVersion": 1
						}
					],
					"sinceVersion": 1,
					"tableConfig": {
						"name": "FACTOR_OPINION_VERSIONS",
						"indexes": []
					}
				},
				{
					"columns": [
						{
							"index": 0,
							"isGenerated": false,
							"manyRelationColumnRefs": [],
							"name": "CREATED_AT",
							"notNull": false,
							"propertyRefs": [
								{
									"index": 0
								}
							],
							"sinceVersion": 1,
							"type": 2
						},
						{
							"index": 1,
							"isGenerated": true,
							"manyRelationColumnRefs": [],
							"name": "POLL_OPINION_VERSION_TRANSLATION_ID",
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
							"isGenerated": false,
							"manyRelationColumnRefs": [],
							"name": "POLL_OPINION_VERSION_TRANSLATION_IS_ORIGINAL",
							"notNull": true,
							"propertyRefs": [
								{
									"index": 2
								}
							],
							"sinceVersion": 1,
							"type": 1
						},
						{
							"index": 3,
							"isGenerated": false,
							"manyRelationColumnRefs": [],
							"name": "POLL_OPINION_VERSION_TRANSLATION_TITLE",
							"notNull": true,
							"propertyRefs": [
								{
									"index": 3
								}
							],
							"sinceVersion": 1,
							"type": 5
						},
						{
							"index": 4,
							"isGenerated": false,
							"manyRelationColumnRefs": [],
							"name": "POLL_OPINION_VERSION_TRANSLATION_TEXT",
							"notNull": true,
							"propertyRefs": [
								{
									"index": 4
								}
							],
							"sinceVersion": 1,
							"type": 5
						},
						{
							"index": 5,
							"isGenerated": false,
							"manyRelationColumnRefs": [
								{
									"manyRelationIndex": 0,
									"oneSchemaIndex": null,
									"oneTableIndex": 79,
									"oneRelationIndex": 8,
									"oneColumnIndex": 1,
									"sinceVersion": 1
								}
							],
							"name": "POLL_OPINION_VERSION_ID",
							"notNull": true,
							"propertyRefs": [
								{
									"index": 5
								}
							],
							"sinceVersion": 1,
							"type": 4
						},
						{
							"index": 6,
							"isGenerated": false,
							"manyRelationColumnRefs": [
								{
									"manyRelationIndex": 1,
									"oneSchemaIndex": null,
									"oneTableIndex": 16,
									"oneColumnIndex": 0,
									"sinceVersion": 1
								}
							],
							"name": "LANGUAGE_ID",
							"notNull": true,
							"propertyRefs": [
								{
									"index": 6
								}
							],
							"sinceVersion": 1,
							"type": 4
						}
					],
					"idColumnRefs": [
						{
							"index": 1
						}
					],
					"index": 77,
					"isLocal": true,
					"isRepositoryEntity": false,
					"name": "PollOpinionVersionTranslation",
					"properties": [
						{
							"columnRef": {
								"index": 0
							},
							"index": 0,
							"isId": false,
							"name": "createdAt",
							"sinceVersion": 1
						},
						{
							"columnRef": {
								"index": 1
							},
							"index": 1,
							"isId": true,
							"name": "id",
							"sinceVersion": 1
						},
						{
							"columnRef": {
								"index": 2
							},
							"index": 2,
							"isId": false,
							"name": "original",
							"sinceVersion": 1
						},
						{
							"columnRef": {
								"index": 3
							},
							"index": 3,
							"isId": false,
							"name": "title",
							"sinceVersion": 1
						},
						{
							"columnRef": {
								"index": 4
							},
							"index": 4,
							"isId": false,
							"name": "text",
							"sinceVersion": 1
						},
						{
							"index": 5,
							"isId": false,
							"name": "pollOpinionVersion",
							"relationRef": {
								"index": 0
							},
							"sinceVersion": 1
						},
						{
							"index": 6,
							"isId": false,
							"name": "language",
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
								"index": 5
							},
							"relationTableIndex": 79,
							"sinceVersion": 1
						},
						{
							"index": 1,
							"isId": false,
							"relationType": 1,
							"propertyRef": {
								"index": 6
							},
							"relationTableIndex": 16,
							"sinceVersion": 1
						}
					],
					"sinceVersion": 1,
					"tableConfig": {
						"name": "POLL_OPINION_VERSION_TRANSLATIONS",
						"indexes": []
					}
				},
				{
					"columns": [
						{
							"index": 0,
							"isGenerated": false,
							"manyRelationColumnRefs": [],
							"name": "CREATED_AT",
							"notNull": false,
							"propertyRefs": [
								{
									"index": 0
								}
							],
							"sinceVersion": 1,
							"type": 2
						},
						{
							"index": 1,
							"isGenerated": false,
							"manyRelationColumnRefs": [
								{
									"manyRelationIndex": 0,
									"oneSchemaIndex": null,
									"oneTableIndex": 5,
									"oneColumnIndex": 1,
									"sinceVersion": 1
								}
							],
							"name": "ACTOR_ID",
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
							"isGenerated": true,
							"manyRelationColumnRefs": [],
							"name": "POLL_OPINION_VERSION_RATING_ID",
							"notNull": false,
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
							"name": "POLL_OPINION_VERSION_RATING_IS_CURRENT",
							"notNull": false,
							"propertyRefs": [
								{
									"index": 3
								}
							],
							"sinceVersion": 1,
							"type": 1
						},
						{
							"index": 4,
							"isGenerated": false,
							"manyRelationColumnRefs": [
								{
									"manyRelationIndex": 1,
									"oneSchemaIndex": null,
									"oneTableIndex": 79,
									"oneRelationIndex": 7,
									"oneColumnIndex": 1,
									"sinceVersion": 1
								}
							],
							"name": "POLL_OPINION_VERSION_ID",
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
							"isGenerated": false,
							"manyRelationColumnRefs": [
								{
									"manyRelationIndex": 2,
									"oneSchemaIndex": null,
									"oneTableIndex": 19,
									"oneColumnIndex": 1,
									"sinceVersion": 1
								}
							],
							"name": "RATING_ID",
							"notNull": false,
							"propertyRefs": [
								{
									"index": 5
								}
							],
							"sinceVersion": 1,
							"type": 4
						},
						{
							"index": 6,
							"isGenerated": false,
							"manyRelationColumnRefs": [
								{
									"manyRelationIndex": 3,
									"oneSchemaIndex": null,
									"oneTableIndex": 78,
									"oneRelationIndex": 4,
									"oneColumnIndex": 2,
									"sinceVersion": 1
								}
							],
							"name": "PARENT_POLL_OPINION_VERSION_RATING_ID",
							"notNull": false,
							"propertyRefs": [
								{
									"index": 6
								}
							],
							"sinceVersion": 1,
							"type": 4
						}
					],
					"idColumnRefs": [
						{
							"index": 2
						}
					],
					"index": 78,
					"isLocal": true,
					"isRepositoryEntity": false,
					"name": "PollOpinionVersionRating",
					"properties": [
						{
							"columnRef": {
								"index": 0
							},
							"index": 0,
							"isId": false,
							"name": "createdAt",
							"sinceVersion": 1
						},
						{
							"index": 1,
							"isId": false,
							"name": "actor",
							"relationRef": {
								"index": 0
							},
							"sinceVersion": 1
						},
						{
							"columnRef": {
								"index": 2
							},
							"index": 2,
							"isId": true,
							"name": "id",
							"sinceVersion": 1
						},
						{
							"columnRef": {
								"index": 3
							},
							"index": 3,
							"isId": false,
							"name": "isCurrent",
							"sinceVersion": 1
						},
						{
							"index": 4,
							"isId": false,
							"name": "pollOpinionVersion",
							"relationRef": {
								"index": 1
							},
							"sinceVersion": 1
						},
						{
							"index": 5,
							"isId": false,
							"name": "rating",
							"relationRef": {
								"index": 2
							},
							"sinceVersion": 1
						},
						{
							"index": 6,
							"isId": false,
							"name": "parent",
							"relationRef": {
								"index": 3
							},
							"sinceVersion": 1
						},
						{
							"index": 7,
							"isId": false,
							"name": "child",
							"relationRef": {
								"index": 4
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
							"relationTableIndex": 5,
							"sinceVersion": 1
						},
						{
							"index": 1,
							"isId": false,
							"relationType": 1,
							"propertyRef": {
								"index": 4
							},
							"relationTableIndex": 79,
							"sinceVersion": 1
						},
						{
							"index": 2,
							"isId": false,
							"relationType": 1,
							"propertyRef": {
								"index": 5
							},
							"relationTableIndex": 19,
							"sinceVersion": 1
						},
						{
							"index": 3,
							"isId": false,
							"relationType": 1,
							"propertyRef": {
								"index": 6
							},
							"relationTableIndex": 78,
							"sinceVersion": 1
						},
						{
							"index": 4,
							"isId": false,
							"oneToManyElems": {
								"cascade": 1,
								"mappedBy": "parent"
							},
							"relationType": 0,
							"propertyRef": {
								"index": 7
							},
							"relationTableIndex": 78,
							"sinceVersion": 1
						}
					],
					"sinceVersion": 1,
					"tableConfig": {
						"name": "POLL_OPINION_VERSION_RATINGS",
						"indexes": []
					}
				},
				{
					"columns": [
						{
							"index": 0,
							"isGenerated": false,
							"manyRelationColumnRefs": [],
							"name": "CREATED_AT",
							"notNull": false,
							"propertyRefs": [
								{
									"index": 0
								}
							],
							"sinceVersion": 1,
							"type": 2
						},
						{
							"index": 1,
							"isGenerated": true,
							"manyRelationColumnRefs": [],
							"name": "POLL_OPINION_VERSION_ID",
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
							"isGenerated": false,
							"manyRelationColumnRefs": [
								{
									"manyRelationIndex": 0,
									"oneSchemaIndex": null,
									"oneTableIndex": 80,
									"oneRelationIndex": 6,
									"oneColumnIndex": 3,
									"sinceVersion": 1
								}
							],
							"name": "POLL_OPINION_ID",
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
							"manyRelationColumnRefs": [
								{
									"manyRelationIndex": 1,
									"oneSchemaIndex": null,
									"oneTableIndex": 86,
									"oneColumnIndex": 2,
									"sinceVersion": 1
								}
							],
							"name": "POLL_VARIATION_ID",
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
							"isGenerated": false,
							"manyRelationColumnRefs": [
								{
									"manyRelationIndex": 2,
									"oneSchemaIndex": null,
									"oneTableIndex": 65,
									"oneColumnIndex": 2,
									"sinceVersion": 1
								}
							],
							"name": "VOTE_VARIATION_ID",
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
							"isGenerated": false,
							"manyRelationColumnRefs": [
								{
									"manyRelationIndex": 3,
									"oneSchemaIndex": null,
									"oneTableIndex": 16,
									"oneColumnIndex": 0,
									"sinceVersion": 1
								}
							],
							"name": "LANGUAGE_ID",
							"notNull": false,
							"propertyRefs": [
								{
									"index": 5
								}
							],
							"sinceVersion": 1,
							"type": 4
						},
						{
							"index": 6,
							"isGenerated": false,
							"manyRelationColumnRefs": [
								{
									"manyRelationIndex": 4,
									"oneSchemaIndex": null,
									"oneTableIndex": 30,
									"oneColumnIndex": 2,
									"sinceVersion": 1
								}
							],
							"name": "POLL_LOCATION_TIME_FRAME_ID",
							"notNull": false,
							"propertyRefs": [
								{
									"index": 6
								}
							],
							"sinceVersion": 1,
							"type": 4
						},
						{
							"index": 7,
							"isGenerated": false,
							"manyRelationColumnRefs": [
								{
									"manyRelationIndex": 5,
									"oneSchemaIndex": null,
									"oneTableIndex": 79,
									"oneRelationIndex": 6,
									"oneColumnIndex": 1,
									"sinceVersion": 1
								}
							],
							"name": "PARENT_POLL_OPINION_VERSION_ID",
							"notNull": true,
							"propertyRefs": [
								{
									"index": 7
								}
							],
							"sinceVersion": 1,
							"type": 4
						}
					],
					"idColumnRefs": [
						{
							"index": 1
						}
					],
					"index": 79,
					"isLocal": true,
					"isRepositoryEntity": false,
					"name": "PollOpinionVersion",
					"properties": [
						{
							"columnRef": {
								"index": 0
							},
							"index": 0,
							"isId": false,
							"name": "createdAt",
							"sinceVersion": 1
						},
						{
							"columnRef": {
								"index": 1
							},
							"index": 1,
							"isId": true,
							"name": "id",
							"sinceVersion": 1
						},
						{
							"index": 2,
							"isId": false,
							"name": "pollOpinion",
							"relationRef": {
								"index": 0
							},
							"sinceVersion": 1
						},
						{
							"index": 3,
							"isId": false,
							"name": "pollVariation",
							"relationRef": {
								"index": 1
							},
							"sinceVersion": 1
						},
						{
							"index": 4,
							"isId": false,
							"name": "voteVariation",
							"relationRef": {
								"index": 2
							},
							"sinceVersion": 1
						},
						{
							"index": 5,
							"isId": false,
							"name": "language",
							"relationRef": {
								"index": 3
							},
							"sinceVersion": 1
						},
						{
							"index": 6,
							"isId": false,
							"name": "locationTimeFrame",
							"relationRef": {
								"index": 4
							},
							"sinceVersion": 1
						},
						{
							"index": 7,
							"isId": false,
							"name": "parent",
							"relationRef": {
								"index": 5
							},
							"sinceVersion": 1
						},
						{
							"index": 8,
							"isId": false,
							"name": "children",
							"relationRef": {
								"index": 6
							},
							"sinceVersion": 1
						},
						{
							"index": 9,
							"isId": false,
							"name": "ratings",
							"relationRef": {
								"index": 7
							},
							"sinceVersion": 1
						},
						{
							"index": 10,
							"isId": false,
							"name": "translations",
							"relationRef": {
								"index": 8
							},
							"sinceVersion": 1
						},
						{
							"index": 11,
							"isId": false,
							"name": "factors",
							"relationRef": {
								"index": 9
							},
							"sinceVersion": 1
						},
						{
							"index": 12,
							"isId": false,
							"name": "ratingCounts",
							"relationRef": {
								"index": 10
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
							"relationTableIndex": 80,
							"sinceVersion": 1
						},
						{
							"index": 1,
							"isId": false,
							"relationType": 1,
							"propertyRef": {
								"index": 3
							},
							"relationTableIndex": 86,
							"sinceVersion": 1
						},
						{
							"index": 2,
							"isId": false,
							"relationType": 1,
							"propertyRef": {
								"index": 4
							},
							"relationTableIndex": 65,
							"sinceVersion": 1
						},
						{
							"index": 3,
							"isId": false,
							"relationType": 1,
							"propertyRef": {
								"index": 5
							},
							"relationTableIndex": 16,
							"sinceVersion": 1
						},
						{
							"index": 4,
							"isId": false,
							"relationType": 1,
							"propertyRef": {
								"index": 6
							},
							"relationTableIndex": 30,
							"sinceVersion": 1
						},
						{
							"index": 5,
							"isId": false,
							"relationType": 1,
							"propertyRef": {
								"index": 7
							},
							"relationTableIndex": 79,
							"sinceVersion": 1
						},
						{
							"index": 6,
							"isId": false,
							"oneToManyElems": {
								"cascade": 1,
								"mappedBy": "parent"
							},
							"relationType": 0,
							"propertyRef": {
								"index": 8
							},
							"relationTableIndex": 79,
							"sinceVersion": 1
						},
						{
							"index": 7,
							"isId": false,
							"oneToManyElems": {
								"cascade": 1,
								"mappedBy": "pollOpinionVersion"
							},
							"relationType": 0,
							"propertyRef": {
								"index": 9
							},
							"relationTableIndex": 78,
							"sinceVersion": 1
						},
						{
							"index": 8,
							"isId": false,
							"oneToManyElems": {
								"cascade": 1,
								"mappedBy": "pollOpinionVersion"
							},
							"relationType": 0,
							"propertyRef": {
								"index": 10
							},
							"relationTableIndex": 77,
							"sinceVersion": 1
						},
						{
							"index": 9,
							"isId": false,
							"oneToManyElems": {
								"cascade": 1,
								"mappedBy": "pollOpinionVersion"
							},
							"relationType": 0,
							"propertyRef": {
								"index": 11
							},
							"relationTableIndex": 76,
							"sinceVersion": 1
						},
						{
							"index": 10,
							"isId": false,
							"oneToManyElems": {
								"cascade": 0,
								"mappedBy": "pollOpinionVersion"
							},
							"relationType": 0,
							"propertyRef": {
								"index": 12
							},
							"relationTableIndex": 66,
							"sinceVersion": 1
						}
					],
					"sinceVersion": 1,
					"tableConfig": {
						"name": "POLL_OPINION_VERSIONS",
						"indexes": []
					}
				},
				{
					"columns": [
						{
							"index": 0,
							"isGenerated": false,
							"manyRelationColumnRefs": [],
							"name": "CREATED_AT",
							"notNull": false,
							"propertyRefs": [
								{
									"index": 0
								}
							],
							"sinceVersion": 1,
							"type": 2
						},
						{
							"index": 1,
							"isGenerated": false,
							"manyRelationColumnRefs": [
								{
									"manyRelationIndex": 0,
									"oneSchemaIndex": null,
									"oneTableIndex": 5,
									"oneColumnIndex": 1,
									"sinceVersion": 1
								}
							],
							"name": "ACTOR_ID",
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
							"name": "UPDATED_AT",
							"notNull": false,
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
							"isGenerated": true,
							"manyRelationColumnRefs": [],
							"name": "POLL_OPINION_ID",
							"notNull": false,
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
							"isGenerated": false,
							"manyRelationColumnRefs": [],
							"name": "NUMBER_OF_VERSIONS",
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
							"isGenerated": false,
							"manyRelationColumnRefs": [
								{
									"manyRelationIndex": 1,
									"oneSchemaIndex": null,
									"oneTableIndex": 56,
									"oneColumnIndex": 2,
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
						},
						{
							"index": 6,
							"isGenerated": false,
							"manyRelationColumnRefs": [
								{
									"manyRelationIndex": 2,
									"oneSchemaIndex": null,
									"oneTableIndex": 79,
									"oneColumnIndex": 1,
									"sinceVersion": 1
								}
							],
							"name": "FIRST_POLL_OPINION_VERSION_ID",
							"notNull": true,
							"propertyRefs": [
								{
									"index": 6
								}
							],
							"sinceVersion": 1,
							"type": 4
						},
						{
							"index": 7,
							"isGenerated": false,
							"manyRelationColumnRefs": [
								{
									"manyRelationIndex": 3,
									"oneSchemaIndex": null,
									"oneTableIndex": 79,
									"oneColumnIndex": 1,
									"sinceVersion": 1
								}
							],
							"name": "LAST_POLL_OPINION_VERSION_ID",
							"notNull": true,
							"propertyRefs": [
								{
									"index": 7
								}
							],
							"sinceVersion": 1,
							"type": 4
						},
						{
							"index": 8,
							"isGenerated": false,
							"manyRelationColumnRefs": [
								{
									"manyRelationIndex": 4,
									"oneSchemaIndex": null,
									"oneTableIndex": 80,
									"oneRelationIndex": 5,
									"oneColumnIndex": 3,
									"sinceVersion": 1
								}
							],
							"name": "PARENT_POLL_OPINION_ID",
							"notNull": true,
							"propertyRefs": [
								{
									"index": 8
								}
							],
							"sinceVersion": 1,
							"type": 4
						}
					],
					"idColumnRefs": [
						{
							"index": 3
						}
					],
					"index": 80,
					"isLocal": true,
					"isRepositoryEntity": false,
					"name": "PollOpinion",
					"properties": [
						{
							"columnRef": {
								"index": 0
							},
							"index": 0,
							"isId": false,
							"name": "createdAt",
							"sinceVersion": 1
						},
						{
							"index": 1,
							"isId": false,
							"name": "actor",
							"relationRef": {
								"index": 0
							},
							"sinceVersion": 1
						},
						{
							"columnRef": {
								"index": 2
							},
							"index": 2,
							"isId": false,
							"name": "updatedAt",
							"sinceVersion": 1
						},
						{
							"columnRef": {
								"index": 3
							},
							"index": 3,
							"isId": true,
							"name": "id",
							"sinceVersion": 1
						},
						{
							"columnRef": {
								"index": 4
							},
							"index": 4,
							"isId": false,
							"name": "numberOfVersions",
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
						},
						{
							"index": 6,
							"isId": false,
							"name": "firstVersion",
							"relationRef": {
								"index": 2
							},
							"sinceVersion": 1
						},
						{
							"index": 7,
							"isId": false,
							"name": "lastVersion",
							"relationRef": {
								"index": 3
							},
							"sinceVersion": 1
						},
						{
							"index": 8,
							"isId": false,
							"name": "parent",
							"relationRef": {
								"index": 4
							},
							"sinceVersion": 1
						},
						{
							"index": 9,
							"isId": false,
							"name": "children",
							"relationRef": {
								"index": 5
							},
							"sinceVersion": 1
						},
						{
							"index": 10,
							"isId": false,
							"name": "versions",
							"relationRef": {
								"index": 6
							},
							"sinceVersion": 1
						},
						{
							"index": 11,
							"isId": false,
							"name": "ratingCounts",
							"relationRef": {
								"index": 7
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
							"relationTableIndex": 5,
							"sinceVersion": 1
						},
						{
							"index": 1,
							"isId": false,
							"relationType": 1,
							"propertyRef": {
								"index": 5
							},
							"relationTableIndex": 56,
							"sinceVersion": 1
						},
						{
							"index": 2,
							"isId": false,
							"relationType": 1,
							"propertyRef": {
								"index": 6
							},
							"relationTableIndex": 79,
							"sinceVersion": 1
						},
						{
							"index": 3,
							"isId": false,
							"relationType": 1,
							"propertyRef": {
								"index": 7
							},
							"relationTableIndex": 79,
							"sinceVersion": 1
						},
						{
							"index": 4,
							"isId": false,
							"relationType": 1,
							"propertyRef": {
								"index": 8
							},
							"relationTableIndex": 80,
							"sinceVersion": 1
						},
						{
							"index": 5,
							"isId": false,
							"oneToManyElems": {
								"cascade": 1,
								"mappedBy": "parent"
							},
							"relationType": 0,
							"propertyRef": {
								"index": 9
							},
							"relationTableIndex": 80,
							"sinceVersion": 1
						},
						{
							"index": 6,
							"isId": false,
							"oneToManyElems": {
								"cascade": 1,
								"mappedBy": "pollOpinion"
							},
							"relationType": 0,
							"propertyRef": {
								"index": 10
							},
							"relationTableIndex": 79,
							"sinceVersion": 1
						},
						{
							"index": 7,
							"isId": false,
							"oneToManyElems": {
								"cascade": 0,
								"mappedBy": "pollOpinion"
							},
							"relationType": 0,
							"propertyRef": {
								"index": 11
							},
							"relationTableIndex": 57,
							"sinceVersion": 1
						}
					],
					"sinceVersion": 1,
					"tableConfig": {
						"name": "POLL_OPINIONS",
						"indexes": []
					}
				},
				{
					"columns": [
						{
							"index": 0,
							"isGenerated": false,
							"manyRelationColumnRefs": [],
							"name": "CREATED_AT",
							"notNull": false,
							"propertyRefs": [
								{
									"index": 0
								}
							],
							"sinceVersion": 1,
							"type": 2
						},
						{
							"index": 1,
							"isGenerated": true,
							"manyRelationColumnRefs": [],
							"name": "POLL_VARIATION_OPINION_COUNT_ID",
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
							"isGenerated": false,
							"manyRelationColumnRefs": [],
							"name": "COUNT",
							"notNull": false,
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
							"manyRelationColumnRefs": [
								{
									"manyRelationIndex": 0,
									"oneSchemaIndex": null,
									"oneTableIndex": 86,
									"oneRelationIndex": 15,
									"oneColumnIndex": 2,
									"sinceVersion": 1
								}
							],
							"name": "POLL_VARIATION_ID",
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
					"index": 81,
					"isLocal": true,
					"isRepositoryEntity": false,
					"name": "PollVariationOpinionCount",
					"properties": [
						{
							"columnRef": {
								"index": 0
							},
							"index": 0,
							"isId": false,
							"name": "createdAt",
							"sinceVersion": 1
						},
						{
							"columnRef": {
								"index": 1
							},
							"index": 1,
							"isId": false,
							"name": "id",
							"sinceVersion": 1
						},
						{
							"columnRef": {
								"index": 2
							},
							"index": 2,
							"isId": false,
							"name": "count",
							"sinceVersion": 1
						},
						{
							"index": 3,
							"isId": false,
							"name": "pollVariation",
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
							"relationTableIndex": 86,
							"sinceVersion": 1
						}
					],
					"sinceVersion": 1,
					"tableConfig": {
						"name": "POLL_VARIATION_OPINION_COUNTS",
						"indexes": []
					}
				},
				{
					"columns": [
						{
							"index": 0,
							"isGenerated": false,
							"manyRelationColumnRefs": [],
							"name": "CREATED_AT",
							"notNull": false,
							"propertyRefs": [
								{
									"index": 0
								}
							],
							"sinceVersion": 1,
							"type": 2
						},
						{
							"index": 1,
							"isGenerated": true,
							"manyRelationColumnRefs": [],
							"name": "POLL_VARIATION_OPINION_RATING_COUNT_ID",
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
							"isGenerated": false,
							"manyRelationColumnRefs": [],
							"name": "COUNT",
							"notNull": false,
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
							"manyRelationColumnRefs": [
								{
									"manyRelationIndex": 0,
									"oneSchemaIndex": null,
									"oneTableIndex": 86,
									"oneRelationIndex": 16,
									"oneColumnIndex": 2,
									"sinceVersion": 1
								}
							],
							"name": "POLL_VARIATION_ID",
							"notNull": false,
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
							"isGenerated": false,
							"manyRelationColumnRefs": [
								{
									"manyRelationIndex": 1,
									"oneSchemaIndex": null,
									"oneTableIndex": 19,
									"oneColumnIndex": 1,
									"sinceVersion": 1
								}
							],
							"name": "RATING_ID",
							"notNull": false,
							"propertyRefs": [
								{
									"index": 4
								}
							],
							"sinceVersion": 1,
							"type": 4
						}
					],
					"idColumnRefs": [],
					"index": 82,
					"isLocal": true,
					"isRepositoryEntity": false,
					"name": "PollVariationOpinionRatingCount",
					"properties": [
						{
							"columnRef": {
								"index": 0
							},
							"index": 0,
							"isId": false,
							"name": "createdAt",
							"sinceVersion": 1
						},
						{
							"columnRef": {
								"index": 1
							},
							"index": 1,
							"isId": false,
							"name": "id",
							"sinceVersion": 1
						},
						{
							"columnRef": {
								"index": 2
							},
							"index": 2,
							"isId": false,
							"name": "count",
							"sinceVersion": 1
						},
						{
							"index": 3,
							"isId": false,
							"name": "pollVariation",
							"relationRef": {
								"index": 0
							},
							"sinceVersion": 1
						},
						{
							"index": 4,
							"isId": false,
							"name": "rating",
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
								"index": 3
							},
							"relationTableIndex": 86,
							"sinceVersion": 1
						},
						{
							"index": 1,
							"isId": false,
							"relationType": 1,
							"propertyRef": {
								"index": 4
							},
							"relationTableIndex": 19,
							"sinceVersion": 1
						}
					],
					"sinceVersion": 1,
					"tableConfig": {
						"name": "POLL_VARIATION_OPINION_RATING_COUNTS",
						"indexes": []
					}
				},
				{
					"columns": [
						{
							"index": 0,
							"isGenerated": false,
							"manyRelationColumnRefs": [],
							"name": "CREATED_AT",
							"notNull": false,
							"propertyRefs": [
								{
									"index": 0
								}
							],
							"sinceVersion": 1,
							"type": 2
						},
						{
							"index": 1,
							"isGenerated": true,
							"manyRelationColumnRefs": [],
							"name": "POLL_VARIATION_RATING_COUNT_ID",
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
							"isGenerated": false,
							"manyRelationColumnRefs": [],
							"name": "COUNT",
							"notNull": false,
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
							"manyRelationColumnRefs": [
								{
									"manyRelationIndex": 0,
									"oneSchemaIndex": null,
									"oneTableIndex": 86,
									"oneRelationIndex": 6,
									"oneColumnIndex": 2,
									"sinceVersion": 1
								}
							],
							"name": "POLL_VARIATION_ID",
							"notNull": false,
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
							"isGenerated": false,
							"manyRelationColumnRefs": [
								{
									"manyRelationIndex": 1,
									"oneSchemaIndex": null,
									"oneTableIndex": 19,
									"oneColumnIndex": 1,
									"sinceVersion": 1
								}
							],
							"name": "RATING_ID",
							"notNull": false,
							"propertyRefs": [
								{
									"index": 4
								}
							],
							"sinceVersion": 1,
							"type": 4
						}
					],
					"idColumnRefs": [],
					"index": 83,
					"isLocal": true,
					"isRepositoryEntity": false,
					"name": "PollVariationRatingCount",
					"properties": [
						{
							"columnRef": {
								"index": 0
							},
							"index": 0,
							"isId": false,
							"name": "createdAt",
							"sinceVersion": 1
						},
						{
							"columnRef": {
								"index": 1
							},
							"index": 1,
							"isId": false,
							"name": "id",
							"sinceVersion": 1
						},
						{
							"columnRef": {
								"index": 2
							},
							"index": 2,
							"isId": false,
							"name": "count",
							"sinceVersion": 1
						},
						{
							"index": 3,
							"isId": false,
							"name": "pollVariation",
							"relationRef": {
								"index": 0
							},
							"sinceVersion": 1
						},
						{
							"index": 4,
							"isId": false,
							"name": "rating",
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
								"index": 3
							},
							"relationTableIndex": 86,
							"sinceVersion": 1
						},
						{
							"index": 1,
							"isId": false,
							"relationType": 1,
							"propertyRef": {
								"index": 4
							},
							"relationTableIndex": 19,
							"sinceVersion": 1
						}
					],
					"sinceVersion": 1,
					"tableConfig": {
						"name": "POLL_VARIATION_RATING_COUNTS",
						"indexes": []
					}
				},
				{
					"columns": [
						{
							"index": 0,
							"isGenerated": false,
							"manyRelationColumnRefs": [],
							"name": "CREATED_AT",
							"notNull": false,
							"propertyRefs": [
								{
									"index": 0
								}
							],
							"sinceVersion": 1,
							"type": 2
						},
						{
							"index": 1,
							"isGenerated": true,
							"manyRelationColumnRefs": [],
							"name": "POLL_VARIATION_VOTE_COUNT_ID",
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
							"isGenerated": false,
							"manyRelationColumnRefs": [],
							"name": "COUNT",
							"notNull": false,
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
							"manyRelationColumnRefs": [
								{
									"manyRelationIndex": 0,
									"oneSchemaIndex": null,
									"oneTableIndex": 86,
									"oneRelationIndex": 17,
									"oneColumnIndex": 2,
									"sinceVersion": 1
								}
							],
							"name": "POLL_VARIATION_ID",
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
					"index": 84,
					"isLocal": true,
					"isRepositoryEntity": false,
					"name": "PollVariationVoteCount",
					"properties": [
						{
							"columnRef": {
								"index": 0
							},
							"index": 0,
							"isId": false,
							"name": "createdAt",
							"sinceVersion": 1
						},
						{
							"columnRef": {
								"index": 1
							},
							"index": 1,
							"isId": false,
							"name": "id",
							"sinceVersion": 1
						},
						{
							"columnRef": {
								"index": 2
							},
							"index": 2,
							"isId": false,
							"name": "count",
							"sinceVersion": 1
						},
						{
							"index": 3,
							"isId": false,
							"name": "pollVariation",
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
							"relationTableIndex": 86,
							"sinceVersion": 1
						}
					],
					"sinceVersion": 1,
					"tableConfig": {
						"name": "POLL_VARIATION_VOTE_COUNTS",
						"indexes": []
					}
				},
				{
					"columns": [
						{
							"index": 0,
							"isGenerated": false,
							"manyRelationColumnRefs": [],
							"name": "CREATED_AT",
							"notNull": false,
							"propertyRefs": [
								{
									"index": 0
								}
							],
							"sinceVersion": 1,
							"type": 2
						},
						{
							"index": 1,
							"isGenerated": true,
							"manyRelationColumnRefs": [],
							"name": "POLL_FACTOR_SKIN_VARIATION_ID",
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
							"isGenerated": false,
							"manyRelationColumnRefs": [
								{
									"manyRelationIndex": 0,
									"oneSchemaIndex": null,
									"oneTableIndex": 86,
									"oneRelationIndex": 10,
									"oneColumnIndex": 2,
									"sinceVersion": 1
								}
							],
							"name": "POLL_VARIATION_ID",
							"notNull": false,
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
							"manyRelationColumnRefs": [
								{
									"manyRelationIndex": 1,
									"oneSchemaIndex": null,
									"oneTableIndex": 87,
									"oneColumnIndex": 2,
									"sinceVersion": 1
								}
							],
							"name": "FACTOR_SKIN_VARIATION_ID",
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
							"isGenerated": false,
							"manyRelationColumnRefs": [
								{
									"manyRelationIndex": 2,
									"oneSchemaIndex": null,
									"oneTableIndex": 85,
									"oneRelationIndex": 3,
									"oneColumnIndex": 1,
									"sinceVersion": 1
								}
							],
							"name": "PARENT_POLL_FACTOR_SKIN_VARIATION_ID",
							"notNull": false,
							"propertyRefs": [
								{
									"index": 4
								}
							],
							"sinceVersion": 1,
							"type": 4
						}
					],
					"idColumnRefs": [
						{
							"index": 1
						}
					],
					"index": 85,
					"isLocal": true,
					"isRepositoryEntity": false,
					"name": "PollFactorSkinVariation",
					"properties": [
						{
							"columnRef": {
								"index": 0
							},
							"index": 0,
							"isId": false,
							"name": "createdAt",
							"sinceVersion": 1
						},
						{
							"columnRef": {
								"index": 1
							},
							"index": 1,
							"isId": true,
							"name": "id",
							"sinceVersion": 1
						},
						{
							"index": 2,
							"isId": false,
							"name": "pollVariation",
							"relationRef": {
								"index": 0
							},
							"sinceVersion": 1
						},
						{
							"index": 3,
							"isId": false,
							"name": "factorSkinVariation",
							"relationRef": {
								"index": 1
							},
							"sinceVersion": 1
						},
						{
							"index": 4,
							"isId": false,
							"name": "parent",
							"relationRef": {
								"index": 2
							},
							"sinceVersion": 1
						},
						{
							"index": 5,
							"isId": false,
							"name": "children",
							"relationRef": {
								"index": 3
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
							"relationTableIndex": 86,
							"sinceVersion": 1
						},
						{
							"index": 1,
							"isId": false,
							"relationType": 1,
							"propertyRef": {
								"index": 3
							},
							"relationTableIndex": 87,
							"sinceVersion": 1
						},
						{
							"index": 2,
							"isId": false,
							"relationType": 1,
							"propertyRef": {
								"index": 4
							},
							"relationTableIndex": 85,
							"sinceVersion": 1
						},
						{
							"index": 3,
							"isId": false,
							"oneToManyElems": {
								"cascade": 1,
								"mappedBy": "parent"
							},
							"relationType": 0,
							"propertyRef": {
								"index": 5
							},
							"relationTableIndex": 85,
							"sinceVersion": 1
						}
					],
					"sinceVersion": 1,
					"tableConfig": {
						"name": "POLL_FACTOR_SKIN_VARIATIONS",
						"indexes": []
					}
				},
				{
					"columns": [
						{
							"index": 0,
							"isGenerated": false,
							"manyRelationColumnRefs": [],
							"name": "CREATED_AT",
							"notNull": false,
							"propertyRefs": [
								{
									"index": 0
								}
							],
							"sinceVersion": 1,
							"type": 2
						},
						{
							"index": 1,
							"isGenerated": false,
							"manyRelationColumnRefs": [
								{
									"manyRelationIndex": 0,
									"oneSchemaIndex": null,
									"oneTableIndex": 5,
									"oneColumnIndex": 1,
									"sinceVersion": 1
								}
							],
							"name": "ACTOR_ID",
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
							"isGenerated": true,
							"manyRelationColumnRefs": [],
							"name": "POLL_VARIATION_ID",
							"notNull": false,
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
							"manyRelationColumnRefs": [
								{
									"manyRelationIndex": 1,
									"oneSchemaIndex": null,
									"oneTableIndex": 56,
									"oneRelationIndex": 10,
									"oneColumnIndex": 2,
									"sinceVersion": 1
								}
							],
							"name": "POLL_ID",
							"notNull": false,
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
							"isGenerated": false,
							"manyRelationColumnRefs": [
								{
									"manyRelationIndex": 2,
									"oneSchemaIndex": null,
									"oneTableIndex": 30,
									"oneRelationIndex": 3,
									"oneColumnIndex": 2,
									"sinceVersion": 1
								}
							],
							"name": "POLL_LOCATION_TIME_FRAME_ID",
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
							"isGenerated": false,
							"manyRelationColumnRefs": [
								{
									"manyRelationIndex": 3,
									"oneSchemaIndex": null,
									"oneTableIndex": 86,
									"oneRelationIndex": 4,
									"oneColumnIndex": 2,
									"sinceVersion": 1
								}
							],
							"name": "PARENT_POLL_VARIATION_ID",
							"notNull": false,
							"propertyRefs": [
								{
									"index": 5
								}
							],
							"sinceVersion": 1,
							"type": 4
						}
					],
					"idColumnRefs": [
						{
							"index": 2
						}
					],
					"index": 86,
					"isLocal": true,
					"isRepositoryEntity": false,
					"name": "PollVariation",
					"properties": [
						{
							"columnRef": {
								"index": 0
							},
							"index": 0,
							"isId": false,
							"name": "createdAt",
							"sinceVersion": 1
						},
						{
							"index": 1,
							"isId": false,
							"name": "actor",
							"relationRef": {
								"index": 0
							},
							"sinceVersion": 1
						},
						{
							"columnRef": {
								"index": 2
							},
							"index": 2,
							"isId": true,
							"name": "id",
							"sinceVersion": 1
						},
						{
							"index": 3,
							"isId": false,
							"name": "poll",
							"relationRef": {
								"index": 1
							},
							"sinceVersion": 1
						},
						{
							"index": 4,
							"isId": false,
							"name": "createdAtLocationTimeFrame",
							"relationRef": {
								"index": 2
							},
							"sinceVersion": 1
						},
						{
							"index": 5,
							"isId": false,
							"name": "parent",
							"relationRef": {
								"index": 3
							},
							"sinceVersion": 1
						},
						{
							"index": 6,
							"isId": false,
							"name": "children",
							"relationRef": {
								"index": 4
							},
							"sinceVersion": 1
						},
						{
							"index": 7,
							"isId": false,
							"name": "ratings",
							"relationRef": {
								"index": 5
							},
							"sinceVersion": 1
						},
						{
							"index": 8,
							"isId": false,
							"name": "ratingCounts",
							"relationRef": {
								"index": 6
							},
							"sinceVersion": 1
						},
						{
							"index": 9,
							"isId": false,
							"name": "variationLabels",
							"relationRef": {
								"index": 7
							},
							"sinceVersion": 1
						},
						{
							"index": 10,
							"isId": false,
							"name": "pollFactorPositionVariations",
							"relationRef": {
								"index": 8
							},
							"sinceVersion": 1
						},
						{
							"index": 11,
							"isId": false,
							"name": "factors",
							"relationRef": {
								"index": 9
							},
							"sinceVersion": 1
						},
						{
							"index": 12,
							"isId": false,
							"name": "factorSkins",
							"relationRef": {
								"index": 10
							},
							"sinceVersion": 1
						},
						{
							"index": 13,
							"isId": false,
							"name": "positions",
							"relationRef": {
								"index": 11
							},
							"sinceVersion": 1
						},
						{
							"index": 14,
							"isId": false,
							"name": "chosenTranslations",
							"relationRef": {
								"index": 12
							},
							"sinceVersion": 1
						},
						{
							"index": 15,
							"isId": false,
							"name": "allTranslations",
							"relationRef": {
								"index": 13
							},
							"sinceVersion": 1
						},
						{
							"index": 16,
							"isId": false,
							"name": "opinions",
							"relationRef": {
								"index": 14
							},
							"sinceVersion": 1
						},
						{
							"index": 17,
							"isId": false,
							"name": "opinionCounts",
							"relationRef": {
								"index": 15
							},
							"sinceVersion": 1
						},
						{
							"index": 18,
							"isId": false,
							"name": "opinionRatingCounts",
							"relationRef": {
								"index": 16
							},
							"sinceVersion": 1
						},
						{
							"index": 19,
							"isId": false,
							"name": "voteCounts",
							"relationRef": {
								"index": 17
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
							"relationTableIndex": 5,
							"sinceVersion": 1
						},
						{
							"index": 1,
							"isId": false,
							"relationType": 1,
							"propertyRef": {
								"index": 3
							},
							"relationTableIndex": 56,
							"sinceVersion": 1
						},
						{
							"index": 2,
							"isId": false,
							"relationType": 1,
							"propertyRef": {
								"index": 4
							},
							"relationTableIndex": 30,
							"sinceVersion": 1
						},
						{
							"index": 3,
							"isId": false,
							"relationType": 1,
							"propertyRef": {
								"index": 5
							},
							"relationTableIndex": 86,
							"sinceVersion": 1
						},
						{
							"index": 4,
							"isId": false,
							"oneToManyElems": {
								"cascade": 1,
								"mappedBy": "parent"
							},
							"relationType": 0,
							"propertyRef": {
								"index": 6
							},
							"relationTableIndex": 86,
							"sinceVersion": 1
						},
						{
							"index": 5,
							"isId": false,
							"oneToManyElems": {
								"cascade": 1,
								"mappedBy": "pollVariation"
							},
							"relationType": 0,
							"propertyRef": {
								"index": 7
							},
							"relationTableIndex": 36,
							"sinceVersion": 1
						},
						{
							"index": 6,
							"isId": false,
							"oneToManyElems": {
								"cascade": 0,
								"mappedBy": "pollVariation"
							},
							"relationType": 0,
							"propertyRef": {
								"index": 8
							},
							"relationTableIndex": 83,
							"sinceVersion": 1
						},
						{
							"index": 7,
							"isId": false,
							"oneToManyElems": {
								"cascade": 1,
								"mappedBy": "pollVariation"
							},
							"relationType": 0,
							"propertyRef": {
								"index": 9
							},
							"relationTableIndex": 55,
							"sinceVersion": 1
						},
						{
							"index": 8,
							"isId": false,
							"oneToManyElems": {
								"cascade": 1,
								"mappedBy": "pollVariation"
							},
							"relationType": 0,
							"propertyRef": {
								"index": 10
							},
							"relationTableIndex": 62,
							"sinceVersion": 1
						},
						{
							"index": 9,
							"isId": false,
							"oneToManyElems": {
								"cascade": 1,
								"mappedBy": "pollVariation"
							},
							"relationType": 0,
							"propertyRef": {
								"index": 11
							},
							"relationTableIndex": 67,
							"sinceVersion": 1
						},
						{
							"index": 10,
							"isId": false,
							"oneToManyElems": {
								"cascade": 1,
								"mappedBy": "pollVariation"
							},
							"relationType": 0,
							"propertyRef": {
								"index": 12
							},
							"relationTableIndex": 85,
							"sinceVersion": 1
						},
						{
							"index": 11,
							"isId": false,
							"oneToManyElems": {
								"cascade": 1,
								"mappedBy": "pollVariation"
							},
							"relationType": 0,
							"propertyRef": {
								"index": 13
							},
							"relationTableIndex": 69,
							"sinceVersion": 1
						},
						{
							"index": 12,
							"isId": false,
							"oneToManyElems": {
								"cascade": 1,
								"mappedBy": "pollVariation"
							},
							"relationType": 0,
							"propertyRef": {
								"index": 14
							},
							"relationTableIndex": 53,
							"sinceVersion": 1
						},
						{
							"index": 13,
							"isId": false,
							"oneToManyElems": {
								"cascade": 1,
								"mappedBy": "pollVariation"
							},
							"relationType": 0,
							"propertyRef": {
								"index": 15
							},
							"relationTableIndex": 51,
							"sinceVersion": 1
						},
						{
							"index": 14,
							"isId": false,
							"oneToManyElems": {
								"cascade": 1,
								"mappedBy": "pollVariation"
							},
							"relationType": 0,
							"propertyRef": {
								"index": 16
							},
							"relationTableIndex": 80,
							"sinceVersion": 1
						},
						{
							"index": 15,
							"isId": false,
							"oneToManyElems": {
								"cascade": 0,
								"mappedBy": "pollVariation"
							},
							"relationType": 0,
							"propertyRef": {
								"index": 17
							},
							"relationTableIndex": 81,
							"sinceVersion": 1
						},
						{
							"index": 16,
							"isId": false,
							"oneToManyElems": {
								"cascade": 0,
								"mappedBy": "pollVariation"
							},
							"relationType": 0,
							"propertyRef": {
								"index": 18
							},
							"relationTableIndex": 82,
							"sinceVersion": 1
						},
						{
							"index": 17,
							"isId": false,
							"oneToManyElems": {
								"cascade": 0,
								"mappedBy": "pollVariation"
							},
							"relationType": 0,
							"propertyRef": {
								"index": 19
							},
							"relationTableIndex": 84,
							"sinceVersion": 1
						}
					],
					"sinceVersion": 1,
					"tableConfig": {
						"name": "POLL_VARIATIONS",
						"indexes": []
					}
				},
				{
					"columns": [
						{
							"index": 0,
							"isGenerated": false,
							"manyRelationColumnRefs": [],
							"name": "CREATED_AT",
							"notNull": false,
							"propertyRefs": [
								{
									"index": 0
								}
							],
							"sinceVersion": 1,
							"type": 2
						},
						{
							"index": 1,
							"isGenerated": false,
							"manyRelationColumnRefs": [
								{
									"manyRelationIndex": 0,
									"oneSchemaIndex": null,
									"oneTableIndex": 5,
									"oneColumnIndex": 1,
									"sinceVersion": 1
								}
							],
							"name": "ACTOR_ID",
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
							"isGenerated": true,
							"manyRelationColumnRefs": [],
							"name": "FACTOR_SKIN_VARIATION_ID",
							"notNull": false,
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
							"name": "BACKGROUND_COLOR_ID",
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
							"isGenerated": false,
							"manyRelationColumnRefs": [],
							"name": "TEXT_COLOR_ID",
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
							"isGenerated": false,
							"manyRelationColumnRefs": [
								{
									"manyRelationIndex": 1,
									"oneSchemaIndex": null,
									"oneTableIndex": 86,
									"oneColumnIndex": 2,
									"sinceVersion": 1
								}
							],
							"name": "POLL_VARIATION_ID",
							"notNull": false,
							"propertyRefs": [
								{
									"index": 5
								}
							],
							"sinceVersion": 1,
							"type": 4
						},
						{
							"index": 6,
							"isGenerated": false,
							"manyRelationColumnRefs": [
								{
									"manyRelationIndex": 2,
									"oneSchemaIndex": null,
									"oneTableIndex": 88,
									"oneRelationIndex": 6,
									"oneColumnIndex": 2,
									"sinceVersion": 1
								}
							],
							"name": "FACTOR_ID",
							"notNull": false,
							"propertyRefs": [
								{
									"index": 6
								}
							],
							"sinceVersion": 1,
							"type": 4
						},
						{
							"index": 7,
							"isGenerated": false,
							"manyRelationColumnRefs": [
								{
									"manyRelationIndex": 3,
									"oneSchemaIndex": null,
									"oneTableIndex": 87,
									"oneRelationIndex": 4,
									"oneColumnIndex": 2,
									"sinceVersion": 1
								}
							],
							"name": "PARENT_FACTOR_SKIN_VARIATION_ID",
							"notNull": false,
							"propertyRefs": [
								{
									"index": 7
								}
							],
							"sinceVersion": 1,
							"type": 4
						}
					],
					"idColumnRefs": [
						{
							"index": 2
						}
					],
					"index": 87,
					"isLocal": true,
					"isRepositoryEntity": false,
					"name": "FactorSkinVariation",
					"properties": [
						{
							"columnRef": {
								"index": 0
							},
							"index": 0,
							"isId": false,
							"name": "createdAt",
							"sinceVersion": 1
						},
						{
							"index": 1,
							"isId": false,
							"name": "actor",
							"relationRef": {
								"index": 0
							},
							"sinceVersion": 1
						},
						{
							"columnRef": {
								"index": 2
							},
							"index": 2,
							"isId": true,
							"name": "id",
							"sinceVersion": 1
						},
						{
							"columnRef": {
								"index": 3
							},
							"index": 3,
							"isId": false,
							"name": "backgroundColor",
							"sinceVersion": 1
						},
						{
							"columnRef": {
								"index": 4
							},
							"index": 4,
							"isId": false,
							"name": "textColor",
							"sinceVersion": 1
						},
						{
							"index": 5,
							"isId": false,
							"name": "pollVariation",
							"relationRef": {
								"index": 1
							},
							"sinceVersion": 1
						},
						{
							"index": 6,
							"isId": false,
							"name": "factor",
							"relationRef": {
								"index": 2
							},
							"sinceVersion": 1
						},
						{
							"index": 7,
							"isId": false,
							"name": "parent",
							"relationRef": {
								"index": 3
							},
							"sinceVersion": 1
						},
						{
							"index": 8,
							"isId": false,
							"name": "children",
							"relationRef": {
								"index": 4
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
							"relationTableIndex": 5,
							"sinceVersion": 1
						},
						{
							"index": 1,
							"isId": false,
							"relationType": 1,
							"propertyRef": {
								"index": 5
							},
							"relationTableIndex": 86,
							"sinceVersion": 1
						},
						{
							"index": 2,
							"isId": false,
							"relationType": 1,
							"propertyRef": {
								"index": 6
							},
							"relationTableIndex": 88,
							"sinceVersion": 1
						},
						{
							"index": 3,
							"isId": false,
							"relationType": 1,
							"propertyRef": {
								"index": 7
							},
							"relationTableIndex": 87,
							"sinceVersion": 1
						},
						{
							"index": 4,
							"isId": false,
							"oneToManyElems": {
								"cascade": 1,
								"mappedBy": "parent"
							},
							"relationType": 0,
							"propertyRef": {
								"index": 8
							},
							"relationTableIndex": 87,
							"sinceVersion": 1
						}
					],
					"sinceVersion": 1,
					"tableConfig": {
						"name": "FACTOR_SKIN_VARIATIONS",
						"indexes": []
					}
				},
				{
					"columns": [
						{
							"index": 0,
							"isGenerated": false,
							"manyRelationColumnRefs": [],
							"name": "CREATED_AT",
							"notNull": false,
							"propertyRefs": [
								{
									"index": 0
								}
							],
							"sinceVersion": 1,
							"type": 2
						},
						{
							"index": 1,
							"isGenerated": false,
							"manyRelationColumnRefs": [
								{
									"manyRelationIndex": 0,
									"oneSchemaIndex": null,
									"oneTableIndex": 5,
									"oneColumnIndex": 1,
									"sinceVersion": 1
								}
							],
							"name": "ACTOR_ID",
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
							"isGenerated": true,
							"manyRelationColumnRefs": [],
							"name": "FACTOR_ID",
							"notNull": false,
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
							"manyRelationColumnRefs": [
								{
									"manyRelationIndex": 1,
									"oneSchemaIndex": null,
									"oneTableIndex": 45,
									"oneRelationIndex": 5,
									"oneColumnIndex": 2,
									"sinceVersion": 1
								}
							],
							"name": "PARENT_FACTOR_VARIATION_TRANSLATION_ID",
							"notNull": false,
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
							"isGenerated": false,
							"manyRelationColumnRefs": [
								{
									"manyRelationIndex": 2,
									"oneSchemaIndex": null,
									"oneTableIndex": 88,
									"oneRelationIndex": 3,
									"oneColumnIndex": 2,
									"sinceVersion": 1
								}
							],
							"name": "PARENT_FACTOR_ID",
							"notNull": false,
							"propertyRefs": [
								{
									"index": 4
								}
							],
							"sinceVersion": 1,
							"type": 4
						}
					],
					"idColumnRefs": [
						{
							"index": 2
						}
					],
					"index": 88,
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
							"name": "createdAt",
							"sinceVersion": 1
						},
						{
							"index": 1,
							"isId": false,
							"name": "actor",
							"relationRef": {
								"index": 0
							},
							"sinceVersion": 1
						},
						{
							"columnRef": {
								"index": 2
							},
							"index": 2,
							"isId": true,
							"name": "id",
							"sinceVersion": 1
						},
						{
							"index": 3,
							"isId": false,
							"name": "parentTranslation",
							"relationRef": {
								"index": 1
							},
							"sinceVersion": 1
						},
						{
							"index": 4,
							"isId": false,
							"name": "parent",
							"relationRef": {
								"index": 2
							},
							"sinceVersion": 1
						},
						{
							"index": 5,
							"isId": false,
							"name": "children",
							"relationRef": {
								"index": 3
							},
							"sinceVersion": 1
						},
						{
							"index": 6,
							"isId": false,
							"name": "factorPositions",
							"relationRef": {
								"index": 4
							},
							"sinceVersion": 1
						},
						{
							"index": 7,
							"isId": false,
							"name": "variations",
							"relationRef": {
								"index": 5
							},
							"sinceVersion": 1
						},
						{
							"index": 8,
							"isId": false,
							"name": "skins",
							"relationRef": {
								"index": 6
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
							"relationTableIndex": 5,
							"sinceVersion": 1
						},
						{
							"index": 1,
							"isId": false,
							"relationType": 1,
							"propertyRef": {
								"index": 3
							},
							"relationTableIndex": 45,
							"sinceVersion": 1
						},
						{
							"index": 2,
							"isId": false,
							"relationType": 1,
							"propertyRef": {
								"index": 4
							},
							"relationTableIndex": 88,
							"sinceVersion": 1
						},
						{
							"index": 3,
							"isId": false,
							"oneToManyElems": {
								"cascade": 1,
								"mappedBy": "parent"
							},
							"relationType": 0,
							"propertyRef": {
								"index": 5
							},
							"relationTableIndex": 88,
							"sinceVersion": 1
						},
						{
							"index": 4,
							"isId": false,
							"oneToManyElems": {
								"cascade": 1,
								"mappedBy": "factor"
							},
							"relationType": 0,
							"propertyRef": {
								"index": 6
							},
							"relationTableIndex": 89,
							"sinceVersion": 1
						},
						{
							"index": 5,
							"isId": false,
							"oneToManyElems": {
								"cascade": 1,
								"mappedBy": "factor"
							},
							"relationType": 0,
							"propertyRef": {
								"index": 7
							},
							"relationTableIndex": 44,
							"sinceVersion": 1
						},
						{
							"index": 6,
							"isId": false,
							"oneToManyElems": {
								"cascade": 1,
								"mappedBy": "factor"
							},
							"relationType": 0,
							"propertyRef": {
								"index": 8
							},
							"relationTableIndex": 87,
							"sinceVersion": 1
						}
					],
					"sinceVersion": 1,
					"tableConfig": {
						"name": "FACTORS",
						"indexes": []
					}
				},
				{
					"columns": [
						{
							"index": 0,
							"isGenerated": false,
							"manyRelationColumnRefs": [],
							"name": "CREATED_AT",
							"notNull": false,
							"propertyRefs": [
								{
									"index": 0
								}
							],
							"sinceVersion": 1,
							"type": 2
						},
						{
							"index": 1,
							"isGenerated": false,
							"manyRelationColumnRefs": [
								{
									"manyRelationIndex": 0,
									"oneSchemaIndex": null,
									"oneTableIndex": 5,
									"oneColumnIndex": 1,
									"sinceVersion": 1
								}
							],
							"name": "ACTOR_ID",
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
							"isGenerated": true,
							"manyRelationColumnRefs": [],
							"name": "FACTOR_POSITION_ID",
							"notNull": false,
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
							"manyRelationColumnRefs": [
								{
									"manyRelationIndex": 1,
									"oneSchemaIndex": null,
									"oneTableIndex": 88,
									"oneRelationIndex": 4,
									"oneColumnIndex": 2,
									"sinceVersion": 1
								}
							],
							"name": "FACTOR_ID",
							"notNull": false,
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
							"isGenerated": false,
							"manyRelationColumnRefs": [
								{
									"manyRelationIndex": 2,
									"oneSchemaIndex": null,
									"oneTableIndex": 47,
									"oneRelationIndex": 4,
									"oneColumnIndex": 2,
									"sinceVersion": 1
								}
							],
							"name": "POSITION_ID",
							"notNull": false,
							"propertyRefs": [
								{
									"index": 4
								}
							],
							"sinceVersion": 1,
							"type": 4
						}
					],
					"idColumnRefs": [
						{
							"index": 2
						}
					],
					"index": 89,
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
							"name": "createdAt",
							"sinceVersion": 1
						},
						{
							"index": 1,
							"isId": false,
							"name": "actor",
							"relationRef": {
								"index": 0
							},
							"sinceVersion": 1
						},
						{
							"columnRef": {
								"index": 2
							},
							"index": 2,
							"isId": true,
							"name": "id",
							"sinceVersion": 1
						},
						{
							"index": 3,
							"isId": false,
							"name": "factor",
							"relationRef": {
								"index": 1
							},
							"sinceVersion": 1
						},
						{
							"index": 4,
							"isId": false,
							"name": "position",
							"relationRef": {
								"index": 2
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
							"relationTableIndex": 5,
							"sinceVersion": 1
						},
						{
							"index": 1,
							"isId": false,
							"relationType": 1,
							"propertyRef": {
								"index": 3
							},
							"relationTableIndex": 88,
							"sinceVersion": 1
						},
						{
							"index": 2,
							"isId": false,
							"relationType": 1,
							"propertyRef": {
								"index": 4
							},
							"relationTableIndex": 47,
							"sinceVersion": 1
						}
					],
					"sinceVersion": 1,
					"tableConfig": {
						"name": "FACTOR_POSITIONS",
						"indexes": []
					}
				},
				{
					"columns": [
						{
							"index": 0,
							"isGenerated": false,
							"manyRelationColumnRefs": [],
							"name": "CREATED_AT",
							"notNull": false,
							"propertyRefs": [
								{
									"index": 0
								}
							],
							"sinceVersion": 1,
							"type": 2
						},
						{
							"index": 1,
							"isGenerated": true,
							"manyRelationColumnRefs": [],
							"name": "RATING_REASON_TRANSLATION_ID",
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
							"isGenerated": false,
							"manyRelationColumnRefs": [],
							"name": "RATING_REASON_NAME",
							"notNull": true,
							"propertyRefs": [
								{
									"index": 4
								}
							],
							"sinceVersion": 1,
							"type": 5
						},
						{
							"index": 3,
							"isGenerated": false,
							"manyRelationColumnRefs": [],
							"name": "RATING_REASON_DESCRIPTION",
							"notNull": true,
							"propertyRefs": [
								{
									"index": 5
								}
							],
							"sinceVersion": 1,
							"type": 5
						},
						{
							"index": 4,
							"isGenerated": false,
							"manyRelationColumnRefs": [
								{
									"manyRelationIndex": 0,
									"oneSchemaIndex": null,
									"oneTableIndex": 91,
									"oneRelationIndex": 0,
									"oneColumnIndex": 1,
									"sinceVersion": 1
								}
							],
							"name": "RATING_REASON_ID",
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
							"index": 5,
							"isGenerated": false,
							"manyRelationColumnRefs": [
								{
									"manyRelationIndex": 1,
									"oneSchemaIndex": null,
									"oneTableIndex": 16,
									"oneColumnIndex": 0,
									"sinceVersion": 1
								}
							],
							"name": "LANGUAGE_ID",
							"notNull": true,
							"propertyRefs": [
								{
									"index": 3
								}
							],
							"sinceVersion": 1,
							"type": 4
						}
					],
					"idColumnRefs": [
						{
							"index": 1
						}
					],
					"index": 90,
					"isLocal": true,
					"isRepositoryEntity": false,
					"name": "RatingReasonTranslation",
					"properties": [
						{
							"columnRef": {
								"index": 0
							},
							"index": 0,
							"isId": false,
							"name": "createdAt",
							"sinceVersion": 1
						},
						{
							"columnRef": {
								"index": 1
							},
							"index": 1,
							"isId": true,
							"name": "id",
							"sinceVersion": 1
						},
						{
							"index": 2,
							"isId": false,
							"name": "reason",
							"relationRef": {
								"index": 0
							},
							"sinceVersion": 1
						},
						{
							"index": 3,
							"isId": false,
							"name": "language",
							"relationRef": {
								"index": 1
							},
							"sinceVersion": 1
						},
						{
							"columnRef": {
								"index": 2
							},
							"index": 4,
							"isId": false,
							"name": "name",
							"sinceVersion": 1
						},
						{
							"columnRef": {
								"index": 3
							},
							"index": 5,
							"isId": false,
							"name": "description",
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
							"relationTableIndex": 91,
							"sinceVersion": 1
						},
						{
							"index": 1,
							"isId": false,
							"relationType": 1,
							"propertyRef": {
								"index": 3
							},
							"relationTableIndex": 16,
							"sinceVersion": 1
						}
					],
					"sinceVersion": 1,
					"tableConfig": {
						"name": "RATING_REASON_TRANSLATIONS",
						"indexes": []
					}
				},
				{
					"columns": [
						{
							"index": 0,
							"isGenerated": false,
							"manyRelationColumnRefs": [],
							"name": "CREATED_AT",
							"notNull": false,
							"propertyRefs": [
								{
									"index": 0
								}
							],
							"sinceVersion": 1,
							"type": 2
						},
						{
							"index": 1,
							"isGenerated": true,
							"manyRelationColumnRefs": [],
							"name": "RATING_REASON_ID",
							"notNull": false,
							"propertyRefs": [
								{
									"index": 1
								}
							],
							"sinceVersion": 1,
							"type": 4
						}
					],
					"idColumnRefs": [
						{
							"index": 1
						}
					],
					"index": 91,
					"isLocal": true,
					"isRepositoryEntity": false,
					"name": "RatingReason",
					"properties": [
						{
							"columnRef": {
								"index": 0
							},
							"index": 0,
							"isId": false,
							"name": "createdAt",
							"sinceVersion": 1
						},
						{
							"columnRef": {
								"index": 1
							},
							"index": 1,
							"isId": true,
							"name": "id",
							"sinceVersion": 1
						},
						{
							"index": 2,
							"isId": false,
							"name": "translations",
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
								"cascade": 1,
								"mappedBy": "reason"
							},
							"relationType": 0,
							"propertyRef": {
								"index": 2
							},
							"relationTableIndex": 90,
							"sinceVersion": 1
						}
					],
					"sinceVersion": 1,
					"tableConfig": {
						"name": "RATING_REASONS",
						"indexes": []
					}
				},
				{
					"columns": [
						{
							"index": 0,
							"isGenerated": false,
							"manyRelationColumnRefs": [],
							"name": "CREATED_AT",
							"notNull": false,
							"propertyRefs": [
								{
									"index": 0
								}
							],
							"sinceVersion": 1,
							"type": 2
						},
						{
							"index": 1,
							"isGenerated": true,
							"manyRelationColumnRefs": [],
							"name": "POLL_LTF_OPINION_COUNT_ID",
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
							"isGenerated": false,
							"manyRelationColumnRefs": [],
							"name": "COUNT",
							"notNull": false,
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
							"manyRelationColumnRefs": [
								{
									"manyRelationIndex": 0,
									"oneSchemaIndex": null,
									"oneTableIndex": 30,
									"oneColumnIndex": 2,
									"sinceVersion": 1
								}
							],
							"name": "POLL_LOCATION_TIME_FRAME_ID",
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
					"index": 92,
					"isLocal": true,
					"isRepositoryEntity": false,
					"name": "PollLTFOpinionCount",
					"properties": [
						{
							"columnRef": {
								"index": 0
							},
							"index": 0,
							"isId": false,
							"name": "createdAt",
							"sinceVersion": 1
						},
						{
							"columnRef": {
								"index": 1
							},
							"index": 1,
							"isId": false,
							"name": "id",
							"sinceVersion": 1
						},
						{
							"columnRef": {
								"index": 2
							},
							"index": 2,
							"isId": false,
							"name": "count",
							"sinceVersion": 1
						},
						{
							"index": 3,
							"isId": false,
							"name": "locationTimeFrame",
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
							"relationTableIndex": 30,
							"sinceVersion": 1
						}
					],
					"sinceVersion": 1,
					"tableConfig": {
						"name": "POLL_LTF_OPINION_COUNTS",
						"indexes": []
					}
				},
				{
					"columns": [
						{
							"index": 0,
							"isGenerated": false,
							"manyRelationColumnRefs": [],
							"name": "CREATED_AT",
							"notNull": false,
							"propertyRefs": [
								{
									"index": 0
								}
							],
							"sinceVersion": 1,
							"type": 2
						},
						{
							"index": 1,
							"isGenerated": true,
							"manyRelationColumnRefs": [],
							"name": "POLL_LTF_OPINION_RATING_COUNT_ID",
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
							"isGenerated": false,
							"manyRelationColumnRefs": [],
							"name": "COUNT",
							"notNull": false,
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
							"manyRelationColumnRefs": [
								{
									"manyRelationIndex": 0,
									"oneSchemaIndex": null,
									"oneTableIndex": 30,
									"oneColumnIndex": 2,
									"sinceVersion": 1
								}
							],
							"name": "POLL_LOCATION_TIME_FRAME_ID",
							"notNull": false,
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
							"isGenerated": false,
							"manyRelationColumnRefs": [
								{
									"manyRelationIndex": 1,
									"oneSchemaIndex": null,
									"oneTableIndex": 19,
									"oneColumnIndex": 1,
									"sinceVersion": 1
								}
							],
							"name": "RATING_ID",
							"notNull": false,
							"propertyRefs": [
								{
									"index": 4
								}
							],
							"sinceVersion": 1,
							"type": 4
						}
					],
					"idColumnRefs": [],
					"index": 93,
					"isLocal": true,
					"isRepositoryEntity": false,
					"name": "PollLTFOpinionRatingCount",
					"properties": [
						{
							"columnRef": {
								"index": 0
							},
							"index": 0,
							"isId": false,
							"name": "createdAt",
							"sinceVersion": 1
						},
						{
							"columnRef": {
								"index": 1
							},
							"index": 1,
							"isId": false,
							"name": "id",
							"sinceVersion": 1
						},
						{
							"columnRef": {
								"index": 2
							},
							"index": 2,
							"isId": false,
							"name": "count",
							"sinceVersion": 1
						},
						{
							"index": 3,
							"isId": false,
							"name": "locationTimeFrame",
							"relationRef": {
								"index": 0
							},
							"sinceVersion": 1
						},
						{
							"index": 4,
							"isId": false,
							"name": "rating",
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
								"index": 3
							},
							"relationTableIndex": 30,
							"sinceVersion": 1
						},
						{
							"index": 1,
							"isId": false,
							"relationType": 1,
							"propertyRef": {
								"index": 4
							},
							"relationTableIndex": 19,
							"sinceVersion": 1
						}
					],
					"sinceVersion": 1,
					"tableConfig": {
						"name": "POLL_LTF_OPINION_RATING_COUNTS",
						"indexes": []
					}
				},
				{
					"columns": [
						{
							"index": 0,
							"isGenerated": false,
							"manyRelationColumnRefs": [],
							"name": "CREATED_AT",
							"notNull": false,
							"propertyRefs": [
								{
									"index": 0
								}
							],
							"sinceVersion": 1,
							"type": 2
						},
						{
							"index": 1,
							"isGenerated": true,
							"manyRelationColumnRefs": [],
							"name": "POLL_LTF_RATING_COUNT_ID",
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
							"isGenerated": false,
							"manyRelationColumnRefs": [],
							"name": "COUNT",
							"notNull": false,
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
							"manyRelationColumnRefs": [
								{
									"manyRelationIndex": 0,
									"oneSchemaIndex": null,
									"oneTableIndex": 30,
									"oneColumnIndex": 2,
									"sinceVersion": 1
								}
							],
							"name": "POLL_LOCATION_TIME_FRAME_ID",
							"notNull": false,
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
							"isGenerated": false,
							"manyRelationColumnRefs": [
								{
									"manyRelationIndex": 1,
									"oneSchemaIndex": null,
									"oneTableIndex": 19,
									"oneColumnIndex": 1,
									"sinceVersion": 1
								}
							],
							"name": "RATING_ID",
							"notNull": false,
							"propertyRefs": [
								{
									"index": 4
								}
							],
							"sinceVersion": 1,
							"type": 4
						}
					],
					"idColumnRefs": [],
					"index": 94,
					"isLocal": true,
					"isRepositoryEntity": false,
					"name": "PollLTFRatingCount",
					"properties": [
						{
							"columnRef": {
								"index": 0
							},
							"index": 0,
							"isId": false,
							"name": "createdAt",
							"sinceVersion": 1
						},
						{
							"columnRef": {
								"index": 1
							},
							"index": 1,
							"isId": false,
							"name": "id",
							"sinceVersion": 1
						},
						{
							"columnRef": {
								"index": 2
							},
							"index": 2,
							"isId": false,
							"name": "count",
							"sinceVersion": 1
						},
						{
							"index": 3,
							"isId": false,
							"name": "locationTimeFrame",
							"relationRef": {
								"index": 0
							},
							"sinceVersion": 1
						},
						{
							"index": 4,
							"isId": false,
							"name": "rating",
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
								"index": 3
							},
							"relationTableIndex": 30,
							"sinceVersion": 1
						},
						{
							"index": 1,
							"isId": false,
							"relationType": 1,
							"propertyRef": {
								"index": 4
							},
							"relationTableIndex": 19,
							"sinceVersion": 1
						}
					],
					"sinceVersion": 1,
					"tableConfig": {
						"name": "POLL_LTF_RATING_COUNTS",
						"indexes": []
					}
				},
				{
					"columns": [
						{
							"index": 0,
							"isGenerated": false,
							"manyRelationColumnRefs": [],
							"name": "CREATED_AT",
							"notNull": false,
							"propertyRefs": [
								{
									"index": 0
								}
							],
							"sinceVersion": 1,
							"type": 2
						},
						{
							"index": 1,
							"isGenerated": true,
							"manyRelationColumnRefs": [],
							"name": "POLL_LTF_VOTE_COUNT_ID",
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
							"isGenerated": false,
							"manyRelationColumnRefs": [],
							"name": "COUNT",
							"notNull": false,
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
							"manyRelationColumnRefs": [
								{
									"manyRelationIndex": 0,
									"oneSchemaIndex": null,
									"oneTableIndex": 30,
									"oneColumnIndex": 2,
									"sinceVersion": 1
								}
							],
							"name": "POLL_LOCATION_TIME_FRAME_ID",
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
					"index": 95,
					"isLocal": true,
					"isRepositoryEntity": false,
					"name": "PollLTFVoteCount",
					"properties": [
						{
							"columnRef": {
								"index": 0
							},
							"index": 0,
							"isId": false,
							"name": "createdAt",
							"sinceVersion": 1
						},
						{
							"columnRef": {
								"index": 1
							},
							"index": 1,
							"isId": false,
							"name": "id",
							"sinceVersion": 1
						},
						{
							"columnRef": {
								"index": 2
							},
							"index": 2,
							"isId": false,
							"name": "count",
							"sinceVersion": 1
						},
						{
							"index": 3,
							"isId": false,
							"name": "locationTimeFrame",
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
							"relationTableIndex": 30,
							"sinceVersion": 1
						}
					],
					"sinceVersion": 1,
					"tableConfig": {
						"name": "POLL_LTF_VOTE_COUNTS",
						"indexes": []
					}
				},
				{
					"columns": [
						{
							"index": 0,
							"isGenerated": false,
							"manyRelationColumnRefs": [],
							"name": "CREATED_AT",
							"notNull": false,
							"propertyRefs": [
								{
									"index": 0
								}
							],
							"sinceVersion": 1,
							"type": 2
						},
						{
							"index": 1,
							"isGenerated": true,
							"manyRelationColumnRefs": [],
							"name": "LABEL_TRANSLATION_RATING_COUNT_ID",
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
							"isGenerated": false,
							"manyRelationColumnRefs": [],
							"name": "COUNT",
							"notNull": false,
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
							"manyRelationColumnRefs": [
								{
									"manyRelationIndex": 0,
									"oneSchemaIndex": null,
									"oneTableIndex": 97,
									"oneRelationIndex": 0,
									"oneColumnIndex": 1,
									"sinceVersion": 1
								}
							],
							"name": "LABEL_TRANSLATION_ID",
							"notNull": false,
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
							"isGenerated": false,
							"manyRelationColumnRefs": [
								{
									"manyRelationIndex": 1,
									"oneSchemaIndex": null,
									"oneTableIndex": 19,
									"oneColumnIndex": 1,
									"sinceVersion": 1
								}
							],
							"name": "RATING_ID",
							"notNull": false,
							"propertyRefs": [
								{
									"index": 4
								}
							],
							"sinceVersion": 1,
							"type": 4
						}
					],
					"idColumnRefs": [],
					"index": 96,
					"isLocal": true,
					"isRepositoryEntity": false,
					"name": "LabelTranslationRatingCount",
					"properties": [
						{
							"columnRef": {
								"index": 0
							},
							"index": 0,
							"isId": false,
							"name": "createdAt",
							"sinceVersion": 1
						},
						{
							"columnRef": {
								"index": 1
							},
							"index": 1,
							"isId": false,
							"name": "id",
							"sinceVersion": 1
						},
						{
							"columnRef": {
								"index": 2
							},
							"index": 2,
							"isId": false,
							"name": "count",
							"sinceVersion": 1
						},
						{
							"index": 3,
							"isId": false,
							"name": "labelTranslation",
							"relationRef": {
								"index": 0
							},
							"sinceVersion": 1
						},
						{
							"index": 4,
							"isId": false,
							"name": "rating",
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
								"index": 3
							},
							"relationTableIndex": 97,
							"sinceVersion": 1
						},
						{
							"index": 1,
							"isId": false,
							"relationType": 1,
							"propertyRef": {
								"index": 4
							},
							"relationTableIndex": 19,
							"sinceVersion": 1
						}
					],
					"sinceVersion": 1,
					"tableConfig": {
						"name": "LABEL_TRANSLATION_RATING_COUNTS",
						"indexes": []
					}
				},
				{
					"columns": [
						{
							"index": 0,
							"isGenerated": false,
							"manyRelationColumnRefs": [],
							"name": "CREATED_AT",
							"notNull": false,
							"propertyRefs": [
								{
									"index": 0
								}
							],
							"sinceVersion": 1,
							"type": 2
						},
						{
							"index": 1,
							"isGenerated": true,
							"manyRelationColumnRefs": [],
							"name": "LABEL_TRANSLATION_ID",
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
							"isGenerated": false,
							"manyRelationColumnRefs": [],
							"name": "NAME",
							"notNull": true,
							"propertyRefs": [
								{
									"index": 2
								}
							],
							"sinceVersion": 1,
							"type": 5
						}
					],
					"idColumnRefs": [],
					"index": 97,
					"isLocal": true,
					"isRepositoryEntity": false,
					"name": "LabelTranslation",
					"properties": [
						{
							"columnRef": {
								"index": 0
							},
							"index": 0,
							"isId": false,
							"name": "createdAt",
							"sinceVersion": 1
						},
						{
							"columnRef": {
								"index": 1
							},
							"index": 1,
							"isId": false,
							"name": "id",
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
							"name": "counts",
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
								"cascade": 0,
								"mappedBy": "labelTranslation"
							},
							"relationType": 0,
							"propertyRef": {
								"index": 3
							},
							"relationTableIndex": 96,
							"sinceVersion": 1
						}
					],
					"sinceVersion": 1,
					"tableConfig": {
						"name": "LABEL_TRANSLATIONS",
						"indexes": []
					}
				},
				{
					"columns": [
						{
							"index": 0,
							"isGenerated": false,
							"manyRelationColumnRefs": [],
							"name": "CREATED_AT",
							"notNull": false,
							"propertyRefs": [
								{
									"index": 0
								}
							],
							"sinceVersion": 1,
							"type": 2
						},
						{
							"index": 1,
							"isGenerated": false,
							"manyRelationColumnRefs": [
								{
									"manyRelationIndex": 0,
									"oneSchemaIndex": null,
									"oneTableIndex": 5,
									"oneColumnIndex": 1,
									"sinceVersion": 1
								}
							],
							"name": "ACTOR_ID",
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
							"isGenerated": true,
							"manyRelationColumnRefs": [],
							"name": "LABEL_TRANSLATION_RATING_ID",
							"notNull": false,
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
							"name": "LABEL_TRANSLATION_RATING_IS_CURRENT",
							"notNull": false,
							"propertyRefs": [
								{
									"index": 3
								}
							],
							"sinceVersion": 1,
							"type": 1
						},
						{
							"index": 4,
							"isGenerated": false,
							"manyRelationColumnRefs": [
								{
									"manyRelationIndex": 1,
									"oneSchemaIndex": null,
									"oneTableIndex": 97,
									"oneColumnIndex": 1,
									"sinceVersion": 1
								}
							],
							"name": "LABEL_TRANSLATION_ID",
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
							"isGenerated": false,
							"manyRelationColumnRefs": [
								{
									"manyRelationIndex": 2,
									"oneSchemaIndex": null,
									"oneTableIndex": 19,
									"oneColumnIndex": 1,
									"sinceVersion": 1
								}
							],
							"name": "RATING_ID",
							"notNull": false,
							"propertyRefs": [
								{
									"index": 5
								}
							],
							"sinceVersion": 1,
							"type": 4
						},
						{
							"index": 6,
							"isGenerated": false,
							"manyRelationColumnRefs": [
								{
									"manyRelationIndex": 3,
									"oneSchemaIndex": null,
									"oneTableIndex": 98,
									"oneRelationIndex": 4,
									"oneColumnIndex": 2,
									"sinceVersion": 1
								}
							],
							"name": "PARENT_LABEL_TRANSLATION_RATING_ID",
							"notNull": false,
							"propertyRefs": [
								{
									"index": 6
								}
							],
							"sinceVersion": 1,
							"type": 4
						}
					],
					"idColumnRefs": [
						{
							"index": 2
						}
					],
					"index": 98,
					"isLocal": true,
					"isRepositoryEntity": false,
					"name": "LabelTranslationRating",
					"properties": [
						{
							"columnRef": {
								"index": 0
							},
							"index": 0,
							"isId": false,
							"name": "createdAt",
							"sinceVersion": 1
						},
						{
							"index": 1,
							"isId": false,
							"name": "actor",
							"relationRef": {
								"index": 0
							},
							"sinceVersion": 1
						},
						{
							"columnRef": {
								"index": 2
							},
							"index": 2,
							"isId": true,
							"name": "id",
							"sinceVersion": 1
						},
						{
							"columnRef": {
								"index": 3
							},
							"index": 3,
							"isId": false,
							"name": "isCurrent",
							"sinceVersion": 1
						},
						{
							"index": 4,
							"isId": false,
							"name": "labelTranslation",
							"relationRef": {
								"index": 1
							},
							"sinceVersion": 1
						},
						{
							"index": 5,
							"isId": false,
							"name": "rating",
							"relationRef": {
								"index": 2
							},
							"sinceVersion": 1
						},
						{
							"index": 6,
							"isId": false,
							"name": "parent",
							"relationRef": {
								"index": 3
							},
							"sinceVersion": 1
						},
						{
							"index": 7,
							"isId": false,
							"name": "child",
							"relationRef": {
								"index": 4
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
							"relationTableIndex": 5,
							"sinceVersion": 1
						},
						{
							"index": 1,
							"isId": false,
							"relationType": 1,
							"propertyRef": {
								"index": 4
							},
							"relationTableIndex": 97,
							"sinceVersion": 1
						},
						{
							"index": 2,
							"isId": false,
							"relationType": 1,
							"propertyRef": {
								"index": 5
							},
							"relationTableIndex": 19,
							"sinceVersion": 1
						},
						{
							"index": 3,
							"isId": false,
							"relationType": 1,
							"propertyRef": {
								"index": 6
							},
							"relationTableIndex": 98,
							"sinceVersion": 1
						},
						{
							"index": 4,
							"isId": false,
							"oneToManyElems": {
								"cascade": 1,
								"mappedBy": "parent"
							},
							"relationType": 0,
							"propertyRef": {
								"index": 7
							},
							"relationTableIndex": 98,
							"sinceVersion": 1
						}
					],
					"sinceVersion": 1,
					"tableConfig": {
						"name": "LABEL_TRANSLATION_RATINGS",
						"indexes": []
					}
				}
			],
			"integerVersion": 1,
			"referencedSchemas": [],
			"versionString": "1.0.0"
		}
	]
};