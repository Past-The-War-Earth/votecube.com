export const MAPPED_SUPERCLASS = [
	{
		"type": "ImmutableRow",
		"path": "/media/artem/E4D01D0CD01CE718/dac/votecube-ui/schemas/public-db/src/ddl/ImmutableRow.ts",
		"parentClassName": null,
		"isSuperclass": true,
		"ids": [],
		"docEntry": {
			"decorators": [
				{
					"name": "MappedSuperclass",
					"values": []
				}
			],
			"isGenerated": false,
			"isId": false,
			"isMappedSuperclass": true,
			"isTransient": false,
			"name": "ImmutableRow",
			"type": "typeof ImmutableRow",
			"fileImports": {
				"importMapByObjectAsName": {
					"Column": {
						"fileImports": null,
						"isLocal": false,
						"objectMapByAsName": {
							"Column": {
								"asName": "Column",
								"moduleImport": null,
								"sourceName": "Column"
							},
							"MappedSuperclass": {
								"asName": "MappedSuperclass",
								"moduleImport": null,
								"sourceName": "MappedSuperclass"
							}
						},
						"path": "@airport/air-control"
					},
					"MappedSuperclass": null
				},
				"importMapByModulePath": {
					"@airport/air-control": null
				}
			},
			"properties": [
				{
					"decorators": [
						{
							"name": "Column",
							"values": [
								{
									"name": "CREATED_AT"
								}
							]
						}
					],
					"isGenerated": false,
					"isId": false,
					"isMappedSuperclass": false,
					"isTransient": false,
					"name": "createdAt",
					"type": "Date",
					"ownerEntity": null,
					"nonArrayType": "Date",
					"primitive": "Date",
					"index": 0
				}
			],
			"methodSignatures": [],
			"constructors": [
				{
					"parameters": [],
					"returnType": "ImmutableRow"
				}
			]
		},
		"implementedInterfaceNames": [],
		"project": "@votecube/public-db"
	}
];