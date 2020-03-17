export const MAPPED_SUPERCLASS = [
	{
		"type": "ImmutableRow",
		"path": "c:/users/papa/vc/ts/votecube-ui/schemas/relational-db/src/ddl/infrastructure/row/immutablerow.ts",
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
					"MappedSuperclass": null,
					"CreatedAt": {
						"fileImports": null,
						"isLocal": true,
						"objectMapByAsName": {
							"CreatedAt": {
								"asName": "CreatedAt",
								"moduleImport": null,
								"sourceName": "CreatedAt"
							}
						},
						"path": "../../../types/common"
					}
				},
				"importMapByModulePath": {
					"@airport/air-control": null,
					"../../../types/common": null
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
		"project": "@votecube/relational-db"
	},
	{
		"type": "SystemGeneratedRow",
		"path": "c:/users/papa/vc/ts/votecube-ui/schemas/relational-db/src/ddl/infrastructure/row/systemgeneratedrow.ts",
		"parentClassName": "ImmutableRow",
		"location": "./ImmutableRow",
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
			"name": "SystemGeneratedRow",
			"type": "typeof SystemGeneratedRow",
			"fileImports": {
				"importMapByObjectAsName": {
					"MappedSuperclass": {
						"fileImports": null,
						"isLocal": false,
						"objectMapByAsName": {
							"MappedSuperclass": {
								"asName": "MappedSuperclass",
								"moduleImport": null,
								"sourceName": "MappedSuperclass"
							}
						},
						"path": "@airport/air-control"
					},
					"ImmutableRow": {
						"fileImports": null,
						"isLocal": true,
						"objectMapByAsName": {
							"ImmutableRow": {
								"asName": "ImmutableRow",
								"moduleImport": null,
								"sourceName": "ImmutableRow"
							}
						},
						"path": "./ImmutableRow"
					}
				},
				"importMapByModulePath": {
					"@airport/air-control": null,
					"./ImmutableRow": null
				}
			},
			"properties": [],
			"methodSignatures": [],
			"constructors": [
				{
					"parameters": [],
					"returnType": "SystemGeneratedRow"
				}
			]
		},
		"implementedInterfaceNames": [],
		"parentEntity": {
			"type": "ImmutableRow",
			"path": "c:/users/papa/vc/ts/votecube-ui/schemas/relational-db/src/ddl/infrastructure/row/immutablerow.ts",
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
						"MappedSuperclass": null,
						"CreatedAt": {
							"fileImports": null,
							"isLocal": true,
							"objectMapByAsName": {
								"CreatedAt": {
									"asName": "CreatedAt",
									"moduleImport": null,
									"sourceName": "CreatedAt"
								}
							},
							"path": "../../../types/common"
						}
					},
					"importMapByModulePath": {
						"@airport/air-control": null,
						"../../../types/common": null
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
			"project": "@votecube/relational-db"
		},
		"project": "@votecube/relational-db"
	},
	{
		"type": "ImmutableActorRow",
		"path": "c:/users/papa/vc/ts/votecube-ui/schemas/relational-db/src/ddl/infrastructure/row/immutableactorrow.ts",
		"parentClassName": "ImmutableRow",
		"location": "./ImmutableRow",
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
			"name": "ImmutableActorRow",
			"type": "typeof ImmutableActorRow",
			"fileImports": {
				"importMapByObjectAsName": {
					"JoinColumn": {
						"fileImports": null,
						"isLocal": false,
						"objectMapByAsName": {
							"JoinColumn": {
								"asName": "JoinColumn",
								"moduleImport": null,
								"sourceName": "JoinColumn"
							},
							"ManyToOne": {
								"asName": "ManyToOne",
								"moduleImport": null,
								"sourceName": "ManyToOne"
							},
							"MappedSuperclass": {
								"asName": "MappedSuperclass",
								"moduleImport": null,
								"sourceName": "MappedSuperclass"
							}
						},
						"path": "@airport/air-control"
					},
					"ManyToOne": null,
					"MappedSuperclass": null,
					"Actor": {
						"fileImports": null,
						"isLocal": true,
						"objectMapByAsName": {
							"Actor": {
								"asName": "Actor",
								"moduleImport": null,
								"sourceName": "Actor"
							}
						},
						"path": "../../user/Actor"
					},
					"UserAccount": {
						"fileImports": null,
						"isLocal": true,
						"objectMapByAsName": {
							"UserAccount": {
								"asName": "UserAccount",
								"moduleImport": null,
								"sourceName": "UserAccount"
							}
						},
						"path": "../../user/UserAccount"
					},
					"ImmutableRow": {
						"fileImports": null,
						"isLocal": true,
						"objectMapByAsName": {
							"ImmutableRow": {
								"asName": "ImmutableRow",
								"moduleImport": null,
								"sourceName": "ImmutableRow"
							}
						},
						"path": "./ImmutableRow"
					}
				},
				"importMapByModulePath": {
					"@airport/air-control": null,
					"../../user/Actor": null,
					"../../user/UserAccount": null,
					"./ImmutableRow": null
				}
			},
			"properties": [
				{
					"decorators": [
						{
							"name": "ManyToOne",
							"values": []
						},
						{
							"name": "JoinColumn",
							"values": [
								{
									"name": "ACTOR_ID"
								}
							]
						}
					],
					"isGenerated": false,
					"isId": false,
					"isMappedSuperclass": false,
					"isTransient": false,
					"name": "actor",
					"type": "Actor",
					"ownerEntity": null,
					"nonArrayType": "Actor",
					"entity": {
						"type": "Actor",
						"path": "c:/users/papa/vc/ts/votecube-ui/schemas/relational-db/src/ddl/user/actor.ts",
						"parentClassName": "SystemGeneratedRow",
						"location": "../infrastructure/row/SystemGeneratedRow",
						"isSuperclass": false,
						"ids": [
							{
								"decorators": [
									{
										"name": "Id",
										"values": []
									},
									{
										"name": "GeneratedValue",
										"values": []
									},
									{
										"name": "Column",
										"values": [
											{
												"name": "ACTOR_ID"
											}
										]
									}
								],
								"isGenerated": true,
								"isId": true,
								"isMappedSuperclass": false,
								"isTransient": false,
								"name": "id",
								"type": "number",
								"ownerEntity": null,
								"nonArrayType": "number",
								"primitive": "number",
								"index": 0
							}
						],
						"docEntry": {
							"decorators": [
								{
									"name": "Entity",
									"values": []
								},
								{
									"name": "Table",
									"values": [
										{
											"name": "ACTORS"
										}
									]
								}
							],
							"isGenerated": false,
							"isId": false,
							"isMappedSuperclass": false,
							"isTransient": false,
							"name": "Actor",
							"type": "typeof Actor",
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
											"DbNumber": {
												"asName": "DbNumber",
												"moduleImport": null,
												"sourceName": "DbNumber"
											},
											"Entity": {
												"asName": "Entity",
												"moduleImport": null,
												"sourceName": "Entity"
											},
											"GeneratedValue": {
												"asName": "GeneratedValue",
												"moduleImport": null,
												"sourceName": "GeneratedValue"
											},
											"Id": {
												"asName": "Id",
												"moduleImport": null,
												"sourceName": "Id"
											},
											"JoinColumn": {
												"asName": "JoinColumn",
												"moduleImport": null,
												"sourceName": "JoinColumn"
											},
											"ManyToOne": {
												"asName": "ManyToOne",
												"moduleImport": null,
												"sourceName": "ManyToOne"
											},
											"Table": {
												"asName": "Table",
												"moduleImport": null,
												"sourceName": "Table"
											}
										},
										"path": "@airport/air-control"
									},
									"DbNumber": null,
									"Entity": null,
									"GeneratedValue": null,
									"Id": null,
									"JoinColumn": null,
									"ManyToOne": null,
									"Table": null,
									"Actor_Hash": {
										"fileImports": null,
										"isLocal": true,
										"objectMapByAsName": {
											"Actor_Hash": {
												"asName": "Actor_Hash",
												"moduleImport": null,
												"sourceName": "Actor_Hash"
											},
											"Actor_Id": {
												"asName": "Actor_Id",
												"moduleImport": null,
												"sourceName": "Actor_Id"
											}
										},
										"path": "../../types/user/Actor"
									},
									"Actor_Id": null,
									"SystemGeneratedRow": {
										"fileImports": null,
										"isLocal": true,
										"objectMapByAsName": {
											"SystemGeneratedRow": {
												"asName": "SystemGeneratedRow",
												"moduleImport": null,
												"sourceName": "SystemGeneratedRow"
											}
										},
										"path": "../infrastructure/row/SystemGeneratedRow"
									},
									"Application": {
										"fileImports": null,
										"isLocal": true,
										"objectMapByAsName": {
											"Application": {
												"asName": "Application",
												"moduleImport": null,
												"sourceName": "Application"
											}
										},
										"path": "./Application"
									},
									"Device": {
										"fileImports": null,
										"isLocal": true,
										"objectMapByAsName": {
											"Device": {
												"asName": "Device",
												"moduleImport": null,
												"sourceName": "Device"
											}
										},
										"path": "./Device"
									},
									"UserAccount": {
										"fileImports": null,
										"isLocal": true,
										"objectMapByAsName": {
											"UserAccount": {
												"asName": "UserAccount",
												"moduleImport": null,
												"sourceName": "UserAccount"
											}
										},
										"path": "./UserAccount"
									}
								},
								"importMapByModulePath": {
									"@airport/air-control": null,
									"../../types/user/Actor": null,
									"../infrastructure/row/SystemGeneratedRow": null,
									"./Application": null,
									"./Device": null,
									"./UserAccount": null
								}
							},
							"properties": [
								{
									"decorators": [
										{
											"name": "Id",
											"values": []
										},
										{
											"name": "GeneratedValue",
											"values": []
										},
										{
											"name": "Column",
											"values": [
												{
													"name": "ACTOR_ID"
												}
											]
										}
									],
									"isGenerated": true,
									"isId": true,
									"isMappedSuperclass": false,
									"isTransient": false,
									"name": "id",
									"type": "number",
									"ownerEntity": null,
									"nonArrayType": "number",
									"primitive": "number",
									"index": 0
								},
								{
									"decorators": [
										{
											"name": "Column",
											"values": [
												{
													"name": "ACTOR_HASH",
													"nullable": false
												}
											]
										},
										{
											"name": "DbNumber",
											"values": []
										}
									],
									"isGenerated": false,
									"isId": false,
									"isMappedSuperclass": false,
									"isTransient": false,
									"name": "hash",
									"type": "number",
									"ownerEntity": null,
									"nonArrayType": "number",
									"primitive": "number",
									"index": 1
								},
								{
									"decorators": [
										{
											"name": "ManyToOne",
											"values": []
										},
										{
											"name": "JoinColumn",
											"values": [
												{
													"name": "USER_ACCOUNT_ID",
													"nullable": false
												}
											]
										}
									],
									"isGenerated": false,
									"isId": false,
									"isMappedSuperclass": false,
									"isTransient": false,
									"name": "userAccount",
									"type": "UserAccount",
									"ownerEntity": null,
									"nonArrayType": "UserAccount",
									"entity": {
										"type": "UserAccount",
										"path": "c:/users/papa/vc/ts/votecube-ui/schemas/relational-db/src/ddl/user/useraccount.ts",
										"parentClassName": "SystemGeneratedRow",
										"location": "../infrastructure/row/SystemGeneratedRow",
										"isSuperclass": false,
										"ids": [
											{
												"decorators": [
													{
														"name": "Id",
														"values": []
													},
													{
														"name": "GeneratedValue",
														"values": []
													},
													{
														"name": "Column",
														"values": [
															{
																"name": "USER_ACCOUNT_ID"
															}
														]
													}
												],
												"isGenerated": true,
												"isId": true,
												"isMappedSuperclass": false,
												"isTransient": false,
												"name": "id",
												"type": "number",
												"ownerEntity": null,
												"nonArrayType": "number",
												"primitive": "number",
												"index": 0
											}
										],
										"docEntry": {
											"decorators": [
												{
													"name": "Entity",
													"values": []
												},
												{
													"name": "Table",
													"values": [
														{
															"name": "USER_ACCOUNTS"
														}
													]
												}
											],
											"isGenerated": false,
											"isId": false,
											"isMappedSuperclass": false,
											"isTransient": false,
											"name": "UserAccount",
											"type": "typeof UserAccount",
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
															"Entity": {
																"asName": "Entity",
																"moduleImport": null,
																"sourceName": "Entity"
															},
															"GeneratedValue": {
																"asName": "GeneratedValue",
																"moduleImport": null,
																"sourceName": "GeneratedValue"
															},
															"Id": {
																"asName": "Id",
																"moduleImport": null,
																"sourceName": "Id"
															},
															"Table": {
																"asName": "Table",
																"moduleImport": null,
																"sourceName": "Table"
															}
														},
														"path": "@airport/air-control"
													},
													"Entity": null,
													"GeneratedValue": null,
													"Id": null,
													"Table": null,
													"UserAccount_BirthDate": {
														"fileImports": null,
														"isLocal": true,
														"objectMapByAsName": {
															"UserAccount_BirthDate": {
																"asName": "UserAccount_BirthDate",
																"moduleImport": null,
																"sourceName": "UserAccount_BirthDate"
															},
															"UserAccount_FirstName": {
																"asName": "UserAccount_FirstName",
																"moduleImport": null,
																"sourceName": "UserAccount_FirstName"
															},
															"UserAccount_Id": {
																"asName": "UserAccount_Id",
																"moduleImport": null,
																"sourceName": "UserAccount_Id"
															},
															"UserAccount_LastName": {
																"asName": "UserAccount_LastName",
																"moduleImport": null,
																"sourceName": "UserAccount_LastName"
															},
															"UserAccount_MiddleName": {
																"asName": "UserAccount_MiddleName",
																"moduleImport": null,
																"sourceName": "UserAccount_MiddleName"
															},
															"UserAccount_UserName": {
																"asName": "UserAccount_UserName",
																"moduleImport": null,
																"sourceName": "UserAccount_UserName"
															}
														},
														"path": "../../types/user/UserAccount"
													},
													"UserAccount_FirstName": null,
													"UserAccount_Id": null,
													"UserAccount_LastName": null,
													"UserAccount_MiddleName": null,
													"UserAccount_UserName": null,
													"SystemGeneratedRow": {
														"fileImports": null,
														"isLocal": true,
														"objectMapByAsName": {
															"SystemGeneratedRow": {
																"asName": "SystemGeneratedRow",
																"moduleImport": null,
																"sourceName": "SystemGeneratedRow"
															}
														},
														"path": "../infrastructure/row/SystemGeneratedRow"
													}
												},
												"importMapByModulePath": {
													"@airport/air-control": null,
													"../../types/user/UserAccount": null,
													"../infrastructure/row/SystemGeneratedRow": null
												}
											},
											"properties": [
												{
													"decorators": [
														{
															"name": "Id",
															"values": []
														},
														{
															"name": "GeneratedValue",
															"values": []
														},
														{
															"name": "Column",
															"values": [
																{
																	"name": "USER_ACCOUNT_ID"
																}
															]
														}
													],
													"isGenerated": true,
													"isId": true,
													"isMappedSuperclass": false,
													"isTransient": false,
													"name": "id",
													"type": "number",
													"ownerEntity": null,
													"nonArrayType": "number",
													"primitive": "number",
													"index": 0
												},
												{
													"decorators": [
														{
															"name": "Column",
															"values": [
																{
																	"name": "USER_NAME",
																	"nullable": false
																}
															]
														}
													],
													"isGenerated": false,
													"isId": false,
													"isMappedSuperclass": false,
													"isTransient": false,
													"name": "userName",
													"type": "string",
													"ownerEntity": null,
													"nonArrayType": "string",
													"primitive": "string",
													"index": 1
												},
												{
													"decorators": [
														{
															"name": "Column",
															"values": [
																{
																	"name": "FIRST_NAME",
																	"nullable": false
																}
															]
														}
													],
													"isGenerated": false,
													"isId": false,
													"isMappedSuperclass": false,
													"isTransient": false,
													"name": "firstName",
													"type": "string",
													"ownerEntity": null,
													"nonArrayType": "string",
													"primitive": "string",
													"index": 2
												},
												{
													"decorators": [
														{
															"name": "Column",
															"values": [
																{
																	"name": "MIDDLE_NAME"
																}
															]
														}
													],
													"isGenerated": false,
													"isId": false,
													"isMappedSuperclass": false,
													"isTransient": false,
													"name": "middleName",
													"type": "string",
													"ownerEntity": null,
													"nonArrayType": "string",
													"primitive": "string",
													"index": 3
												},
												{
													"decorators": [
														{
															"name": "Column",
															"values": [
																{
																	"name": "LAST_NAME",
																	"nullable": false
																}
															]
														}
													],
													"isGenerated": false,
													"isId": false,
													"isMappedSuperclass": false,
													"isTransient": false,
													"name": "lastName",
													"type": "string",
													"ownerEntity": null,
													"nonArrayType": "string",
													"primitive": "string",
													"index": 4
												},
												{
													"decorators": [
														{
															"name": "Column",
															"values": [
																{
																	"name": "BIRTH_DATE"
																}
															]
														}
													],
													"isGenerated": false,
													"isId": false,
													"isMappedSuperclass": false,
													"isTransient": false,
													"name": "birthDate",
													"type": "Date",
													"ownerEntity": null,
													"nonArrayType": "Date",
													"primitive": "Date",
													"index": 5
												}
											],
											"methodSignatures": [],
											"constructors": [
												{
													"parameters": [],
													"returnType": "UserAccount"
												}
											]
										},
										"implementedInterfaceNames": [],
										"parentEntity": {
											"type": "SystemGeneratedRow",
											"path": "c:/users/papa/vc/ts/votecube-ui/schemas/relational-db/src/ddl/infrastructure/row/systemgeneratedrow.ts",
											"parentClassName": "ImmutableRow",
											"location": "./ImmutableRow",
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
												"name": "SystemGeneratedRow",
												"type": "typeof SystemGeneratedRow",
												"fileImports": {
													"importMapByObjectAsName": {
														"MappedSuperclass": {
															"fileImports": null,
															"isLocal": false,
															"objectMapByAsName": {
																"MappedSuperclass": {
																	"asName": "MappedSuperclass",
																	"moduleImport": null,
																	"sourceName": "MappedSuperclass"
																}
															},
															"path": "@airport/air-control"
														},
														"ImmutableRow": {
															"fileImports": null,
															"isLocal": true,
															"objectMapByAsName": {
																"ImmutableRow": {
																	"asName": "ImmutableRow",
																	"moduleImport": null,
																	"sourceName": "ImmutableRow"
																}
															},
															"path": "./ImmutableRow"
														}
													},
													"importMapByModulePath": {
														"@airport/air-control": null,
														"./ImmutableRow": null
													}
												},
												"properties": [],
												"methodSignatures": [],
												"constructors": [
													{
														"parameters": [],
														"returnType": "SystemGeneratedRow"
													}
												]
											},
											"implementedInterfaceNames": [],
											"parentEntity": {
												"type": "ImmutableRow",
												"path": "c:/users/papa/vc/ts/votecube-ui/schemas/relational-db/src/ddl/infrastructure/row/immutablerow.ts",
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
															"MappedSuperclass": null,
															"CreatedAt": {
																"fileImports": null,
																"isLocal": true,
																"objectMapByAsName": {
																	"CreatedAt": {
																		"asName": "CreatedAt",
																		"moduleImport": null,
																		"sourceName": "CreatedAt"
																	}
																},
																"path": "../../../types/common"
															}
														},
														"importMapByModulePath": {
															"@airport/air-control": null,
															"../../../types/common": null
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
												"project": "@votecube/relational-db"
											},
											"project": "@votecube/relational-db"
										}
									},
									"index": 2
								},
								{
									"decorators": [
										{
											"name": "ManyToOne",
											"values": []
										},
										{
											"name": "JoinColumn",
											"values": [
												{
													"name": "DEVICE_ID",
													"nullable": false
												}
											]
										}
									],
									"isGenerated": false,
									"isId": false,
									"isMappedSuperclass": false,
									"isTransient": false,
									"name": "device",
									"type": "Device",
									"ownerEntity": null,
									"nonArrayType": "Device",
									"entity": {
										"type": "Device",
										"path": "c:/users/papa/vc/ts/votecube-ui/schemas/relational-db/src/ddl/user/device.ts",
										"parentClassName": "SystemGeneratedRow",
										"location": "../infrastructure/row/SystemGeneratedRow",
										"isSuperclass": false,
										"ids": [
											{
												"decorators": [
													{
														"name": "GeneratedValue",
														"values": []
													},
													{
														"name": "Id",
														"values": []
													},
													{
														"name": "Column",
														"values": [
															{
																"name": "DEVICE_ID"
															}
														]
													}
												],
												"isGenerated": true,
												"isId": true,
												"isMappedSuperclass": false,
												"isTransient": false,
												"name": "id",
												"type": "number",
												"ownerEntity": null,
												"nonArrayType": "number",
												"primitive": "number",
												"index": 0
											}
										],
										"docEntry": {
											"decorators": [
												{
													"name": "Entity",
													"values": []
												},
												{
													"name": "Table",
													"values": [
														{
															"name": "DEVICES"
														}
													]
												}
											],
											"isGenerated": false,
											"isId": false,
											"isMappedSuperclass": false,
											"isTransient": false,
											"name": "Device",
											"type": "typeof Device",
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
															"DbNumber": {
																"asName": "DbNumber",
																"moduleImport": null,
																"sourceName": "DbNumber"
															},
															"Entity": {
																"asName": "Entity",
																"moduleImport": null,
																"sourceName": "Entity"
															},
															"GeneratedValue": {
																"asName": "GeneratedValue",
																"moduleImport": null,
																"sourceName": "GeneratedValue"
															},
															"Id": {
																"asName": "Id",
																"moduleImport": null,
																"sourceName": "Id"
															},
															"Table": {
																"asName": "Table",
																"moduleImport": null,
																"sourceName": "Table"
															}
														},
														"path": "@airport/air-control"
													},
													"DbNumber": null,
													"Entity": null,
													"GeneratedValue": null,
													"Id": null,
													"Table": null,
													"Device_Hash": {
														"fileImports": null,
														"isLocal": true,
														"objectMapByAsName": {
															"Device_Hash": {
																"asName": "Device_Hash",
																"moduleImport": null,
																"sourceName": "Device_Hash"
															},
															"Device_Id": {
																"asName": "Device_Id",
																"moduleImport": null,
																"sourceName": "Device_Id"
															}
														},
														"path": "../../types/user/Device"
													},
													"Device_Id": null,
													"SystemGeneratedRow": {
														"fileImports": null,
														"isLocal": true,
														"objectMapByAsName": {
															"SystemGeneratedRow": {
																"asName": "SystemGeneratedRow",
																"moduleImport": null,
																"sourceName": "SystemGeneratedRow"
															}
														},
														"path": "../infrastructure/row/SystemGeneratedRow"
													}
												},
												"importMapByModulePath": {
													"@airport/air-control": null,
													"../../types/user/Device": null,
													"../infrastructure/row/SystemGeneratedRow": null
												}
											},
											"properties": [
												{
													"decorators": [
														{
															"name": "GeneratedValue",
															"values": []
														},
														{
															"name": "Id",
															"values": []
														},
														{
															"name": "Column",
															"values": [
																{
																	"name": "DEVICE_ID"
																}
															]
														}
													],
													"isGenerated": true,
													"isId": true,
													"isMappedSuperclass": false,
													"isTransient": false,
													"name": "id",
													"type": "number",
													"ownerEntity": null,
													"nonArrayType": "number",
													"primitive": "number",
													"index": 0
												},
												{
													"decorators": [
														{
															"name": "Column",
															"values": [
																{
																	"name": "DEVICE_HASH",
																	"nullable": false
																}
															]
														},
														{
															"name": "DbNumber",
															"values": []
														}
													],
													"isGenerated": false,
													"isId": false,
													"isMappedSuperclass": false,
													"isTransient": false,
													"name": "hash",
													"type": "string",
													"ownerEntity": null,
													"nonArrayType": "string",
													"primitive": "number",
													"index": 1
												}
											],
											"methodSignatures": [],
											"constructors": [
												{
													"parameters": [],
													"returnType": "Device"
												}
											]
										},
										"implementedInterfaceNames": [],
										"parentEntity": null
									},
									"index": 3
								},
								{
									"decorators": [
										{
											"name": "ManyToOne",
											"values": []
										},
										{
											"name": "JoinColumn",
											"values": [
												{
													"name": "APPLICATION_ID",
													"nullable": false
												}
											]
										}
									],
									"isGenerated": false,
									"isId": false,
									"isMappedSuperclass": false,
									"isTransient": false,
									"name": "application",
									"type": "Application",
									"ownerEntity": null,
									"nonArrayType": "Application",
									"entity": {
										"type": "Application",
										"path": "c:/users/papa/vc/ts/votecube-ui/schemas/relational-db/src/ddl/user/application.ts",
										"parentClassName": "SystemGeneratedRow",
										"location": "../infrastructure/row/SystemGeneratedRow",
										"isSuperclass": false,
										"ids": [
											{
												"decorators": [
													{
														"name": "GeneratedValue",
														"values": []
													},
													{
														"name": "Id",
														"values": []
													},
													{
														"name": "Column",
														"values": [
															{
																"name": "APPLICATION_ID"
															}
														]
													}
												],
												"isGenerated": true,
												"isId": true,
												"isMappedSuperclass": false,
												"isTransient": false,
												"name": "id",
												"type": "number",
												"ownerEntity": null,
												"nonArrayType": "number",
												"primitive": "number",
												"index": 0
											}
										],
										"docEntry": {
											"decorators": [
												{
													"name": "Entity",
													"values": []
												},
												{
													"name": "Table",
													"values": [
														{
															"name": "APPLICATIONS"
														}
													]
												}
											],
											"isGenerated": false,
											"isId": false,
											"isMappedSuperclass": false,
											"isTransient": false,
											"name": "Application",
											"type": "typeof Application",
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
															"DbNumber": {
																"asName": "DbNumber",
																"moduleImport": null,
																"sourceName": "DbNumber"
															},
															"DbString": {
																"asName": "DbString",
																"moduleImport": null,
																"sourceName": "DbString"
															},
															"Entity": {
																"asName": "Entity",
																"moduleImport": null,
																"sourceName": "Entity"
															},
															"GeneratedValue": {
																"asName": "GeneratedValue",
																"moduleImport": null,
																"sourceName": "GeneratedValue"
															},
															"Id": {
																"asName": "Id",
																"moduleImport": null,
																"sourceName": "Id"
															},
															"Table": {
																"asName": "Table",
																"moduleImport": null,
																"sourceName": "Table"
															}
														},
														"path": "@airport/air-control"
													},
													"DbNumber": null,
													"DbString": null,
													"Entity": null,
													"GeneratedValue": null,
													"Id": null,
													"Table": null,
													"Application_Host": {
														"fileImports": null,
														"isLocal": true,
														"objectMapByAsName": {
															"Application_Host": {
																"asName": "Application_Host",
																"moduleImport": null,
																"sourceName": "Application_Host"
															},
															"Application_Id": {
																"asName": "Application_Id",
																"moduleImport": null,
																"sourceName": "Application_Id"
															},
															"Application_Port": {
																"asName": "Application_Port",
																"moduleImport": null,
																"sourceName": "Application_Port"
															}
														},
														"path": "../../types/user/Application"
													},
													"Application_Id": null,
													"Application_Port": null,
													"SystemGeneratedRow": {
														"fileImports": null,
														"isLocal": true,
														"objectMapByAsName": {
															"SystemGeneratedRow": {
																"asName": "SystemGeneratedRow",
																"moduleImport": null,
																"sourceName": "SystemGeneratedRow"
															}
														},
														"path": "../infrastructure/row/SystemGeneratedRow"
													}
												},
												"importMapByModulePath": {
													"@airport/air-control": null,
													"../../types/user/Application": null,
													"../infrastructure/row/SystemGeneratedRow": null
												}
											},
											"properties": [
												{
													"decorators": [
														{
															"name": "GeneratedValue",
															"values": []
														},
														{
															"name": "Id",
															"values": []
														},
														{
															"name": "Column",
															"values": [
																{
																	"name": "APPLICATION_ID"
																}
															]
														}
													],
													"isGenerated": true,
													"isId": true,
													"isMappedSuperclass": false,
													"isTransient": false,
													"name": "id",
													"type": "number",
													"ownerEntity": null,
													"nonArrayType": "number",
													"primitive": "number",
													"index": 0
												},
												{
													"decorators": [
														{
															"name": "DbString",
															"values": []
														},
														{
															"name": "Column",
															"values": [
																{
																	"name": "HOST",
																	"nullable": false
																}
															]
														}
													],
													"isGenerated": false,
													"isId": false,
													"isMappedSuperclass": false,
													"isTransient": false,
													"name": "host",
													"type": "string",
													"ownerEntity": null,
													"nonArrayType": "string",
													"primitive": "string",
													"index": 1
												},
												{
													"decorators": [
														{
															"name": "Column",
															"values": [
																{
																	"name": "PORT",
																	"nullable": false
																}
															]
														},
														{
															"name": "DbNumber",
															"values": []
														}
													],
													"isGenerated": false,
													"isId": false,
													"isMappedSuperclass": false,
													"isTransient": false,
													"name": "port",
													"type": "number",
													"ownerEntity": null,
													"nonArrayType": "number",
													"primitive": "number",
													"index": 2
												}
											],
											"methodSignatures": [],
											"constructors": [
												{
													"parameters": [],
													"returnType": "Application"
												}
											]
										},
										"implementedInterfaceNames": [],
										"parentEntity": null
									},
									"index": 4
								}
							],
							"methodSignatures": [],
							"constructors": [
								{
									"parameters": [],
									"returnType": "Actor"
								}
							]
						},
						"implementedInterfaceNames": [],
						"parentEntity": null
					},
					"index": 0
				},
				{
					"decorators": [
						{
							"name": "ManyToOne",
							"values": []
						},
						{
							"name": "JoinColumn",
							"values": [
								{
									"name": "USER_ACCOUNT_ID"
								}
							]
						}
					],
					"isGenerated": false,
					"isId": false,
					"isMappedSuperclass": false,
					"isTransient": false,
					"name": "userAccount",
					"type": "UserAccount",
					"ownerEntity": null,
					"nonArrayType": "UserAccount",
					"entity": null,
					"index": 1
				}
			],
			"methodSignatures": [],
			"constructors": [
				{
					"parameters": [],
					"returnType": "ImmutableActorRow"
				}
			]
		},
		"implementedInterfaceNames": [],
		"parentEntity": null,
		"project": "@votecube/relational-db"
	},
	{
		"type": "AgeSuitableRow",
		"path": "c:/users/papa/vc/ts/votecube-ui/schemas/relational-db/src/ddl/infrastructure/row/agesuitablerow.ts",
		"parentClassName": "ImmutableActorRow",
		"location": "./ImmutableActorRow",
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
			"name": "AgeSuitableRow",
			"type": "typeof AgeSuitableRow",
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
					"MappedSuperclass": null,
					"AgeSuitability": {
						"fileImports": null,
						"isLocal": true,
						"objectMapByAsName": {
							"AgeSuitability": {
								"asName": "AgeSuitability",
								"moduleImport": null,
								"sourceName": "AgeSuitability"
							}
						},
						"path": "../../../types/common"
					},
					"ImmutableActorRow": {
						"fileImports": null,
						"isLocal": true,
						"objectMapByAsName": {
							"ImmutableActorRow": {
								"asName": "ImmutableActorRow",
								"moduleImport": null,
								"sourceName": "ImmutableActorRow"
							}
						},
						"path": "./ImmutableActorRow"
					}
				},
				"importMapByModulePath": {
					"@airport/air-control": null,
					"../../../types/common": null,
					"./ImmutableActorRow": null
				}
			},
			"properties": [
				{
					"decorators": [
						{
							"name": "Column",
							"values": [
								{
									"name": "AGE_SUITABILITY",
									"nullable": false
								}
							]
						}
					],
					"isGenerated": false,
					"isId": false,
					"isMappedSuperclass": false,
					"isTransient": false,
					"name": "ageSuitability",
					"type": "number",
					"ownerEntity": null,
					"nonArrayType": "number",
					"primitive": "number",
					"index": 0
				}
			],
			"methodSignatures": [],
			"constructors": [
				{
					"parameters": [],
					"returnType": "AgeSuitableRow"
				}
			]
		},
		"implementedInterfaceNames": [],
		"parentEntity": {
			"type": "ImmutableActorRow",
			"path": "c:/users/papa/vc/ts/votecube-ui/schemas/relational-db/src/ddl/infrastructure/row/immutableactorrow.ts",
			"parentClassName": "ImmutableRow",
			"location": "./ImmutableRow",
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
				"name": "ImmutableActorRow",
				"type": "typeof ImmutableActorRow",
				"fileImports": {
					"importMapByObjectAsName": {
						"JoinColumn": {
							"fileImports": null,
							"isLocal": false,
							"objectMapByAsName": {
								"JoinColumn": {
									"asName": "JoinColumn",
									"moduleImport": null,
									"sourceName": "JoinColumn"
								},
								"ManyToOne": {
									"asName": "ManyToOne",
									"moduleImport": null,
									"sourceName": "ManyToOne"
								},
								"MappedSuperclass": {
									"asName": "MappedSuperclass",
									"moduleImport": null,
									"sourceName": "MappedSuperclass"
								}
							},
							"path": "@airport/air-control"
						},
						"ManyToOne": null,
						"MappedSuperclass": null,
						"Actor": {
							"fileImports": null,
							"isLocal": true,
							"objectMapByAsName": {
								"Actor": {
									"asName": "Actor",
									"moduleImport": null,
									"sourceName": "Actor"
								}
							},
							"path": "../../user/Actor"
						},
						"UserAccount": {
							"fileImports": null,
							"isLocal": true,
							"objectMapByAsName": {
								"UserAccount": {
									"asName": "UserAccount",
									"moduleImport": null,
									"sourceName": "UserAccount"
								}
							},
							"path": "../../user/UserAccount"
						},
						"ImmutableRow": {
							"fileImports": null,
							"isLocal": true,
							"objectMapByAsName": {
								"ImmutableRow": {
									"asName": "ImmutableRow",
									"moduleImport": null,
									"sourceName": "ImmutableRow"
								}
							},
							"path": "./ImmutableRow"
						}
					},
					"importMapByModulePath": {
						"@airport/air-control": null,
						"../../user/Actor": null,
						"../../user/UserAccount": null,
						"./ImmutableRow": null
					}
				},
				"properties": [
					{
						"decorators": [
							{
								"name": "ManyToOne",
								"values": []
							},
							{
								"name": "JoinColumn",
								"values": [
									{
										"name": "ACTOR_ID"
									}
								]
							}
						],
						"isGenerated": false,
						"isId": false,
						"isMappedSuperclass": false,
						"isTransient": false,
						"name": "actor",
						"type": "Actor",
						"ownerEntity": null,
						"nonArrayType": "Actor",
						"entity": {
							"type": "Actor",
							"path": "c:/users/papa/vc/ts/votecube-ui/schemas/relational-db/src/ddl/user/actor.ts",
							"parentClassName": "SystemGeneratedRow",
							"location": "../infrastructure/row/SystemGeneratedRow",
							"isSuperclass": false,
							"ids": [
								{
									"decorators": [
										{
											"name": "Id",
											"values": []
										},
										{
											"name": "GeneratedValue",
											"values": []
										},
										{
											"name": "Column",
											"values": [
												{
													"name": "ACTOR_ID"
												}
											]
										}
									],
									"isGenerated": true,
									"isId": true,
									"isMappedSuperclass": false,
									"isTransient": false,
									"name": "id",
									"type": "number",
									"ownerEntity": null,
									"nonArrayType": "number",
									"primitive": "number",
									"index": 0
								}
							],
							"docEntry": {
								"decorators": [
									{
										"name": "Entity",
										"values": []
									},
									{
										"name": "Table",
										"values": [
											{
												"name": "ACTORS"
											}
										]
									}
								],
								"isGenerated": false,
								"isId": false,
								"isMappedSuperclass": false,
								"isTransient": false,
								"name": "Actor",
								"type": "typeof Actor",
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
												"DbNumber": {
													"asName": "DbNumber",
													"moduleImport": null,
													"sourceName": "DbNumber"
												},
												"Entity": {
													"asName": "Entity",
													"moduleImport": null,
													"sourceName": "Entity"
												},
												"GeneratedValue": {
													"asName": "GeneratedValue",
													"moduleImport": null,
													"sourceName": "GeneratedValue"
												},
												"Id": {
													"asName": "Id",
													"moduleImport": null,
													"sourceName": "Id"
												},
												"JoinColumn": {
													"asName": "JoinColumn",
													"moduleImport": null,
													"sourceName": "JoinColumn"
												},
												"ManyToOne": {
													"asName": "ManyToOne",
													"moduleImport": null,
													"sourceName": "ManyToOne"
												},
												"Table": {
													"asName": "Table",
													"moduleImport": null,
													"sourceName": "Table"
												}
											},
											"path": "@airport/air-control"
										},
										"DbNumber": null,
										"Entity": null,
										"GeneratedValue": null,
										"Id": null,
										"JoinColumn": null,
										"ManyToOne": null,
										"Table": null,
										"Actor_Hash": {
											"fileImports": null,
											"isLocal": true,
											"objectMapByAsName": {
												"Actor_Hash": {
													"asName": "Actor_Hash",
													"moduleImport": null,
													"sourceName": "Actor_Hash"
												},
												"Actor_Id": {
													"asName": "Actor_Id",
													"moduleImport": null,
													"sourceName": "Actor_Id"
												}
											},
											"path": "../../types/user/Actor"
										},
										"Actor_Id": null,
										"SystemGeneratedRow": {
											"fileImports": null,
											"isLocal": true,
											"objectMapByAsName": {
												"SystemGeneratedRow": {
													"asName": "SystemGeneratedRow",
													"moduleImport": null,
													"sourceName": "SystemGeneratedRow"
												}
											},
											"path": "../infrastructure/row/SystemGeneratedRow"
										},
										"Application": {
											"fileImports": null,
											"isLocal": true,
											"objectMapByAsName": {
												"Application": {
													"asName": "Application",
													"moduleImport": null,
													"sourceName": "Application"
												}
											},
											"path": "./Application"
										},
										"Device": {
											"fileImports": null,
											"isLocal": true,
											"objectMapByAsName": {
												"Device": {
													"asName": "Device",
													"moduleImport": null,
													"sourceName": "Device"
												}
											},
											"path": "./Device"
										},
										"UserAccount": {
											"fileImports": null,
											"isLocal": true,
											"objectMapByAsName": {
												"UserAccount": {
													"asName": "UserAccount",
													"moduleImport": null,
													"sourceName": "UserAccount"
												}
											},
											"path": "./UserAccount"
										}
									},
									"importMapByModulePath": {
										"@airport/air-control": null,
										"../../types/user/Actor": null,
										"../infrastructure/row/SystemGeneratedRow": null,
										"./Application": null,
										"./Device": null,
										"./UserAccount": null
									}
								},
								"properties": [
									{
										"decorators": [
											{
												"name": "Id",
												"values": []
											},
											{
												"name": "GeneratedValue",
												"values": []
											},
											{
												"name": "Column",
												"values": [
													{
														"name": "ACTOR_ID"
													}
												]
											}
										],
										"isGenerated": true,
										"isId": true,
										"isMappedSuperclass": false,
										"isTransient": false,
										"name": "id",
										"type": "number",
										"ownerEntity": null,
										"nonArrayType": "number",
										"primitive": "number",
										"index": 0
									},
									{
										"decorators": [
											{
												"name": "Column",
												"values": [
													{
														"name": "ACTOR_HASH",
														"nullable": false
													}
												]
											},
											{
												"name": "DbNumber",
												"values": []
											}
										],
										"isGenerated": false,
										"isId": false,
										"isMappedSuperclass": false,
										"isTransient": false,
										"name": "hash",
										"type": "number",
										"ownerEntity": null,
										"nonArrayType": "number",
										"primitive": "number",
										"index": 1
									},
									{
										"decorators": [
											{
												"name": "ManyToOne",
												"values": []
											},
											{
												"name": "JoinColumn",
												"values": [
													{
														"name": "USER_ACCOUNT_ID",
														"nullable": false
													}
												]
											}
										],
										"isGenerated": false,
										"isId": false,
										"isMappedSuperclass": false,
										"isTransient": false,
										"name": "userAccount",
										"type": "UserAccount",
										"ownerEntity": null,
										"nonArrayType": "UserAccount",
										"entity": {
											"type": "UserAccount",
											"path": "c:/users/papa/vc/ts/votecube-ui/schemas/relational-db/src/ddl/user/useraccount.ts",
											"parentClassName": "SystemGeneratedRow",
											"location": "../infrastructure/row/SystemGeneratedRow",
											"isSuperclass": false,
											"ids": [
												{
													"decorators": [
														{
															"name": "Id",
															"values": []
														},
														{
															"name": "GeneratedValue",
															"values": []
														},
														{
															"name": "Column",
															"values": [
																{
																	"name": "USER_ACCOUNT_ID"
																}
															]
														}
													],
													"isGenerated": true,
													"isId": true,
													"isMappedSuperclass": false,
													"isTransient": false,
													"name": "id",
													"type": "number",
													"ownerEntity": null,
													"nonArrayType": "number",
													"primitive": "number",
													"index": 0
												}
											],
											"docEntry": {
												"decorators": [
													{
														"name": "Entity",
														"values": []
													},
													{
														"name": "Table",
														"values": [
															{
																"name": "USER_ACCOUNTS"
															}
														]
													}
												],
												"isGenerated": false,
												"isId": false,
												"isMappedSuperclass": false,
												"isTransient": false,
												"name": "UserAccount",
												"type": "typeof UserAccount",
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
																"Entity": {
																	"asName": "Entity",
																	"moduleImport": null,
																	"sourceName": "Entity"
																},
																"GeneratedValue": {
																	"asName": "GeneratedValue",
																	"moduleImport": null,
																	"sourceName": "GeneratedValue"
																},
																"Id": {
																	"asName": "Id",
																	"moduleImport": null,
																	"sourceName": "Id"
																},
																"Table": {
																	"asName": "Table",
																	"moduleImport": null,
																	"sourceName": "Table"
																}
															},
															"path": "@airport/air-control"
														},
														"Entity": null,
														"GeneratedValue": null,
														"Id": null,
														"Table": null,
														"UserAccount_BirthDate": {
															"fileImports": null,
															"isLocal": true,
															"objectMapByAsName": {
																"UserAccount_BirthDate": {
																	"asName": "UserAccount_BirthDate",
																	"moduleImport": null,
																	"sourceName": "UserAccount_BirthDate"
																},
																"UserAccount_FirstName": {
																	"asName": "UserAccount_FirstName",
																	"moduleImport": null,
																	"sourceName": "UserAccount_FirstName"
																},
																"UserAccount_Id": {
																	"asName": "UserAccount_Id",
																	"moduleImport": null,
																	"sourceName": "UserAccount_Id"
																},
																"UserAccount_LastName": {
																	"asName": "UserAccount_LastName",
																	"moduleImport": null,
																	"sourceName": "UserAccount_LastName"
																},
																"UserAccount_MiddleName": {
																	"asName": "UserAccount_MiddleName",
																	"moduleImport": null,
																	"sourceName": "UserAccount_MiddleName"
																},
																"UserAccount_UserName": {
																	"asName": "UserAccount_UserName",
																	"moduleImport": null,
																	"sourceName": "UserAccount_UserName"
																}
															},
															"path": "../../types/user/UserAccount"
														},
														"UserAccount_FirstName": null,
														"UserAccount_Id": null,
														"UserAccount_LastName": null,
														"UserAccount_MiddleName": null,
														"UserAccount_UserName": null,
														"SystemGeneratedRow": {
															"fileImports": null,
															"isLocal": true,
															"objectMapByAsName": {
																"SystemGeneratedRow": {
																	"asName": "SystemGeneratedRow",
																	"moduleImport": null,
																	"sourceName": "SystemGeneratedRow"
																}
															},
															"path": "../infrastructure/row/SystemGeneratedRow"
														}
													},
													"importMapByModulePath": {
														"@airport/air-control": null,
														"../../types/user/UserAccount": null,
														"../infrastructure/row/SystemGeneratedRow": null
													}
												},
												"properties": [
													{
														"decorators": [
															{
																"name": "Id",
																"values": []
															},
															{
																"name": "GeneratedValue",
																"values": []
															},
															{
																"name": "Column",
																"values": [
																	{
																		"name": "USER_ACCOUNT_ID"
																	}
																]
															}
														],
														"isGenerated": true,
														"isId": true,
														"isMappedSuperclass": false,
														"isTransient": false,
														"name": "id",
														"type": "number",
														"ownerEntity": null,
														"nonArrayType": "number",
														"primitive": "number",
														"index": 0
													},
													{
														"decorators": [
															{
																"name": "Column",
																"values": [
																	{
																		"name": "USER_NAME",
																		"nullable": false
																	}
																]
															}
														],
														"isGenerated": false,
														"isId": false,
														"isMappedSuperclass": false,
														"isTransient": false,
														"name": "userName",
														"type": "string",
														"ownerEntity": null,
														"nonArrayType": "string",
														"primitive": "string",
														"index": 1
													},
													{
														"decorators": [
															{
																"name": "Column",
																"values": [
																	{
																		"name": "FIRST_NAME",
																		"nullable": false
																	}
																]
															}
														],
														"isGenerated": false,
														"isId": false,
														"isMappedSuperclass": false,
														"isTransient": false,
														"name": "firstName",
														"type": "string",
														"ownerEntity": null,
														"nonArrayType": "string",
														"primitive": "string",
														"index": 2
													},
													{
														"decorators": [
															{
																"name": "Column",
																"values": [
																	{
																		"name": "MIDDLE_NAME"
																	}
																]
															}
														],
														"isGenerated": false,
														"isId": false,
														"isMappedSuperclass": false,
														"isTransient": false,
														"name": "middleName",
														"type": "string",
														"ownerEntity": null,
														"nonArrayType": "string",
														"primitive": "string",
														"index": 3
													},
													{
														"decorators": [
															{
																"name": "Column",
																"values": [
																	{
																		"name": "LAST_NAME",
																		"nullable": false
																	}
																]
															}
														],
														"isGenerated": false,
														"isId": false,
														"isMappedSuperclass": false,
														"isTransient": false,
														"name": "lastName",
														"type": "string",
														"ownerEntity": null,
														"nonArrayType": "string",
														"primitive": "string",
														"index": 4
													},
													{
														"decorators": [
															{
																"name": "Column",
																"values": [
																	{
																		"name": "BIRTH_DATE"
																	}
																]
															}
														],
														"isGenerated": false,
														"isId": false,
														"isMappedSuperclass": false,
														"isTransient": false,
														"name": "birthDate",
														"type": "Date",
														"ownerEntity": null,
														"nonArrayType": "Date",
														"primitive": "Date",
														"index": 5
													}
												],
												"methodSignatures": [],
												"constructors": [
													{
														"parameters": [],
														"returnType": "UserAccount"
													}
												]
											},
											"implementedInterfaceNames": [],
											"parentEntity": {
												"type": "SystemGeneratedRow",
												"path": "c:/users/papa/vc/ts/votecube-ui/schemas/relational-db/src/ddl/infrastructure/row/systemgeneratedrow.ts",
												"parentClassName": "ImmutableRow",
												"location": "./ImmutableRow",
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
													"name": "SystemGeneratedRow",
													"type": "typeof SystemGeneratedRow",
													"fileImports": {
														"importMapByObjectAsName": {
															"MappedSuperclass": {
																"fileImports": null,
																"isLocal": false,
																"objectMapByAsName": {
																	"MappedSuperclass": {
																		"asName": "MappedSuperclass",
																		"moduleImport": null,
																		"sourceName": "MappedSuperclass"
																	}
																},
																"path": "@airport/air-control"
															},
															"ImmutableRow": {
																"fileImports": null,
																"isLocal": true,
																"objectMapByAsName": {
																	"ImmutableRow": {
																		"asName": "ImmutableRow",
																		"moduleImport": null,
																		"sourceName": "ImmutableRow"
																	}
																},
																"path": "./ImmutableRow"
															}
														},
														"importMapByModulePath": {
															"@airport/air-control": null,
															"./ImmutableRow": null
														}
													},
													"properties": [],
													"methodSignatures": [],
													"constructors": [
														{
															"parameters": [],
															"returnType": "SystemGeneratedRow"
														}
													]
												},
												"implementedInterfaceNames": [],
												"parentEntity": {
													"type": "ImmutableRow",
													"path": "c:/users/papa/vc/ts/votecube-ui/schemas/relational-db/src/ddl/infrastructure/row/immutablerow.ts",
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
																"MappedSuperclass": null,
																"CreatedAt": {
																	"fileImports": null,
																	"isLocal": true,
																	"objectMapByAsName": {
																		"CreatedAt": {
																			"asName": "CreatedAt",
																			"moduleImport": null,
																			"sourceName": "CreatedAt"
																		}
																	},
																	"path": "../../../types/common"
																}
															},
															"importMapByModulePath": {
																"@airport/air-control": null,
																"../../../types/common": null
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
													"project": "@votecube/relational-db"
												},
												"project": "@votecube/relational-db"
											}
										},
										"index": 2
									},
									{
										"decorators": [
											{
												"name": "ManyToOne",
												"values": []
											},
											{
												"name": "JoinColumn",
												"values": [
													{
														"name": "DEVICE_ID",
														"nullable": false
													}
												]
											}
										],
										"isGenerated": false,
										"isId": false,
										"isMappedSuperclass": false,
										"isTransient": false,
										"name": "device",
										"type": "Device",
										"ownerEntity": null,
										"nonArrayType": "Device",
										"entity": {
											"type": "Device",
											"path": "c:/users/papa/vc/ts/votecube-ui/schemas/relational-db/src/ddl/user/device.ts",
											"parentClassName": "SystemGeneratedRow",
											"location": "../infrastructure/row/SystemGeneratedRow",
											"isSuperclass": false,
											"ids": [
												{
													"decorators": [
														{
															"name": "GeneratedValue",
															"values": []
														},
														{
															"name": "Id",
															"values": []
														},
														{
															"name": "Column",
															"values": [
																{
																	"name": "DEVICE_ID"
																}
															]
														}
													],
													"isGenerated": true,
													"isId": true,
													"isMappedSuperclass": false,
													"isTransient": false,
													"name": "id",
													"type": "number",
													"ownerEntity": null,
													"nonArrayType": "number",
													"primitive": "number",
													"index": 0
												}
											],
											"docEntry": {
												"decorators": [
													{
														"name": "Entity",
														"values": []
													},
													{
														"name": "Table",
														"values": [
															{
																"name": "DEVICES"
															}
														]
													}
												],
												"isGenerated": false,
												"isId": false,
												"isMappedSuperclass": false,
												"isTransient": false,
												"name": "Device",
												"type": "typeof Device",
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
																"DbNumber": {
																	"asName": "DbNumber",
																	"moduleImport": null,
																	"sourceName": "DbNumber"
																},
																"Entity": {
																	"asName": "Entity",
																	"moduleImport": null,
																	"sourceName": "Entity"
																},
																"GeneratedValue": {
																	"asName": "GeneratedValue",
																	"moduleImport": null,
																	"sourceName": "GeneratedValue"
																},
																"Id": {
																	"asName": "Id",
																	"moduleImport": null,
																	"sourceName": "Id"
																},
																"Table": {
																	"asName": "Table",
																	"moduleImport": null,
																	"sourceName": "Table"
																}
															},
															"path": "@airport/air-control"
														},
														"DbNumber": null,
														"Entity": null,
														"GeneratedValue": null,
														"Id": null,
														"Table": null,
														"Device_Hash": {
															"fileImports": null,
															"isLocal": true,
															"objectMapByAsName": {
																"Device_Hash": {
																	"asName": "Device_Hash",
																	"moduleImport": null,
																	"sourceName": "Device_Hash"
																},
																"Device_Id": {
																	"asName": "Device_Id",
																	"moduleImport": null,
																	"sourceName": "Device_Id"
																}
															},
															"path": "../../types/user/Device"
														},
														"Device_Id": null,
														"SystemGeneratedRow": {
															"fileImports": null,
															"isLocal": true,
															"objectMapByAsName": {
																"SystemGeneratedRow": {
																	"asName": "SystemGeneratedRow",
																	"moduleImport": null,
																	"sourceName": "SystemGeneratedRow"
																}
															},
															"path": "../infrastructure/row/SystemGeneratedRow"
														}
													},
													"importMapByModulePath": {
														"@airport/air-control": null,
														"../../types/user/Device": null,
														"../infrastructure/row/SystemGeneratedRow": null
													}
												},
												"properties": [
													{
														"decorators": [
															{
																"name": "GeneratedValue",
																"values": []
															},
															{
																"name": "Id",
																"values": []
															},
															{
																"name": "Column",
																"values": [
																	{
																		"name": "DEVICE_ID"
																	}
																]
															}
														],
														"isGenerated": true,
														"isId": true,
														"isMappedSuperclass": false,
														"isTransient": false,
														"name": "id",
														"type": "number",
														"ownerEntity": null,
														"nonArrayType": "number",
														"primitive": "number",
														"index": 0
													},
													{
														"decorators": [
															{
																"name": "Column",
																"values": [
																	{
																		"name": "DEVICE_HASH",
																		"nullable": false
																	}
																]
															},
															{
																"name": "DbNumber",
																"values": []
															}
														],
														"isGenerated": false,
														"isId": false,
														"isMappedSuperclass": false,
														"isTransient": false,
														"name": "hash",
														"type": "string",
														"ownerEntity": null,
														"nonArrayType": "string",
														"primitive": "number",
														"index": 1
													}
												],
												"methodSignatures": [],
												"constructors": [
													{
														"parameters": [],
														"returnType": "Device"
													}
												]
											},
											"implementedInterfaceNames": [],
											"parentEntity": null
										},
										"index": 3
									},
									{
										"decorators": [
											{
												"name": "ManyToOne",
												"values": []
											},
											{
												"name": "JoinColumn",
												"values": [
													{
														"name": "APPLICATION_ID",
														"nullable": false
													}
												]
											}
										],
										"isGenerated": false,
										"isId": false,
										"isMappedSuperclass": false,
										"isTransient": false,
										"name": "application",
										"type": "Application",
										"ownerEntity": null,
										"nonArrayType": "Application",
										"entity": {
											"type": "Application",
											"path": "c:/users/papa/vc/ts/votecube-ui/schemas/relational-db/src/ddl/user/application.ts",
											"parentClassName": "SystemGeneratedRow",
											"location": "../infrastructure/row/SystemGeneratedRow",
											"isSuperclass": false,
											"ids": [
												{
													"decorators": [
														{
															"name": "GeneratedValue",
															"values": []
														},
														{
															"name": "Id",
															"values": []
														},
														{
															"name": "Column",
															"values": [
																{
																	"name": "APPLICATION_ID"
																}
															]
														}
													],
													"isGenerated": true,
													"isId": true,
													"isMappedSuperclass": false,
													"isTransient": false,
													"name": "id",
													"type": "number",
													"ownerEntity": null,
													"nonArrayType": "number",
													"primitive": "number",
													"index": 0
												}
											],
											"docEntry": {
												"decorators": [
													{
														"name": "Entity",
														"values": []
													},
													{
														"name": "Table",
														"values": [
															{
																"name": "APPLICATIONS"
															}
														]
													}
												],
												"isGenerated": false,
												"isId": false,
												"isMappedSuperclass": false,
												"isTransient": false,
												"name": "Application",
												"type": "typeof Application",
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
																"DbNumber": {
																	"asName": "DbNumber",
																	"moduleImport": null,
																	"sourceName": "DbNumber"
																},
																"DbString": {
																	"asName": "DbString",
																	"moduleImport": null,
																	"sourceName": "DbString"
																},
																"Entity": {
																	"asName": "Entity",
																	"moduleImport": null,
																	"sourceName": "Entity"
																},
																"GeneratedValue": {
																	"asName": "GeneratedValue",
																	"moduleImport": null,
																	"sourceName": "GeneratedValue"
																},
																"Id": {
																	"asName": "Id",
																	"moduleImport": null,
																	"sourceName": "Id"
																},
																"Table": {
																	"asName": "Table",
																	"moduleImport": null,
																	"sourceName": "Table"
																}
															},
															"path": "@airport/air-control"
														},
														"DbNumber": null,
														"DbString": null,
														"Entity": null,
														"GeneratedValue": null,
														"Id": null,
														"Table": null,
														"Application_Host": {
															"fileImports": null,
															"isLocal": true,
															"objectMapByAsName": {
																"Application_Host": {
																	"asName": "Application_Host",
																	"moduleImport": null,
																	"sourceName": "Application_Host"
																},
																"Application_Id": {
																	"asName": "Application_Id",
																	"moduleImport": null,
																	"sourceName": "Application_Id"
																},
																"Application_Port": {
																	"asName": "Application_Port",
																	"moduleImport": null,
																	"sourceName": "Application_Port"
																}
															},
															"path": "../../types/user/Application"
														},
														"Application_Id": null,
														"Application_Port": null,
														"SystemGeneratedRow": {
															"fileImports": null,
															"isLocal": true,
															"objectMapByAsName": {
																"SystemGeneratedRow": {
																	"asName": "SystemGeneratedRow",
																	"moduleImport": null,
																	"sourceName": "SystemGeneratedRow"
																}
															},
															"path": "../infrastructure/row/SystemGeneratedRow"
														}
													},
													"importMapByModulePath": {
														"@airport/air-control": null,
														"../../types/user/Application": null,
														"../infrastructure/row/SystemGeneratedRow": null
													}
												},
												"properties": [
													{
														"decorators": [
															{
																"name": "GeneratedValue",
																"values": []
															},
															{
																"name": "Id",
																"values": []
															},
															{
																"name": "Column",
																"values": [
																	{
																		"name": "APPLICATION_ID"
																	}
																]
															}
														],
														"isGenerated": true,
														"isId": true,
														"isMappedSuperclass": false,
														"isTransient": false,
														"name": "id",
														"type": "number",
														"ownerEntity": null,
														"nonArrayType": "number",
														"primitive": "number",
														"index": 0
													},
													{
														"decorators": [
															{
																"name": "DbString",
																"values": []
															},
															{
																"name": "Column",
																"values": [
																	{
																		"name": "HOST",
																		"nullable": false
																	}
																]
															}
														],
														"isGenerated": false,
														"isId": false,
														"isMappedSuperclass": false,
														"isTransient": false,
														"name": "host",
														"type": "string",
														"ownerEntity": null,
														"nonArrayType": "string",
														"primitive": "string",
														"index": 1
													},
													{
														"decorators": [
															{
																"name": "Column",
																"values": [
																	{
																		"name": "PORT",
																		"nullable": false
																	}
																]
															},
															{
																"name": "DbNumber",
																"values": []
															}
														],
														"isGenerated": false,
														"isId": false,
														"isMappedSuperclass": false,
														"isTransient": false,
														"name": "port",
														"type": "number",
														"ownerEntity": null,
														"nonArrayType": "number",
														"primitive": "number",
														"index": 2
													}
												],
												"methodSignatures": [],
												"constructors": [
													{
														"parameters": [],
														"returnType": "Application"
													}
												]
											},
											"implementedInterfaceNames": [],
											"parentEntity": null
										},
										"index": 4
									}
								],
								"methodSignatures": [],
								"constructors": [
									{
										"parameters": [],
										"returnType": "Actor"
									}
								]
							},
							"implementedInterfaceNames": [],
							"parentEntity": null
						},
						"index": 0
					},
					{
						"decorators": [
							{
								"name": "ManyToOne",
								"values": []
							},
							{
								"name": "JoinColumn",
								"values": [
									{
										"name": "USER_ACCOUNT_ID"
									}
								]
							}
						],
						"isGenerated": false,
						"isId": false,
						"isMappedSuperclass": false,
						"isTransient": false,
						"name": "userAccount",
						"type": "UserAccount",
						"ownerEntity": null,
						"nonArrayType": "UserAccount",
						"entity": null,
						"index": 1
					}
				],
				"methodSignatures": [],
				"constructors": [
					{
						"parameters": [],
						"returnType": "ImmutableActorRow"
					}
				]
			},
			"implementedInterfaceNames": [],
			"parentEntity": null,
			"project": "@votecube/relational-db"
		},
		"project": "@votecube/relational-db"
	},
	{
		"type": "MutableActorRow",
		"path": "c:/users/papa/vc/ts/votecube-ui/schemas/relational-db/src/ddl/infrastructure/row/mutableactorrow.ts",
		"parentClassName": "ImmutableActorRow",
		"location": "./ImmutableActorRow",
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
			"name": "MutableActorRow",
			"type": "typeof MutableActorRow",
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
					"MappedSuperclass": null,
					"UpdatedAt": {
						"fileImports": null,
						"isLocal": true,
						"objectMapByAsName": {
							"UpdatedAt": {
								"asName": "UpdatedAt",
								"moduleImport": null,
								"sourceName": "UpdatedAt"
							}
						},
						"path": "../../../types/common"
					},
					"ImmutableActorRow": {
						"fileImports": null,
						"isLocal": true,
						"objectMapByAsName": {
							"ImmutableActorRow": {
								"asName": "ImmutableActorRow",
								"moduleImport": null,
								"sourceName": "ImmutableActorRow"
							}
						},
						"path": "./ImmutableActorRow"
					}
				},
				"importMapByModulePath": {
					"@airport/air-control": null,
					"../../../types/common": null,
					"./ImmutableActorRow": null
				}
			},
			"properties": [
				{
					"decorators": [
						{
							"name": "Column",
							"values": [
								{
									"name": "UPDATED_AT"
								}
							]
						}
					],
					"isGenerated": false,
					"isId": false,
					"isMappedSuperclass": false,
					"isTransient": false,
					"name": "updatedAt",
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
					"returnType": "MutableActorRow"
				}
			]
		},
		"implementedInterfaceNames": [],
		"parentEntity": {
			"type": "ImmutableActorRow",
			"path": "c:/users/papa/vc/ts/votecube-ui/schemas/relational-db/src/ddl/infrastructure/row/immutableactorrow.ts",
			"parentClassName": "ImmutableRow",
			"location": "./ImmutableRow",
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
				"name": "ImmutableActorRow",
				"type": "typeof ImmutableActorRow",
				"fileImports": {
					"importMapByObjectAsName": {
						"JoinColumn": {
							"fileImports": null,
							"isLocal": false,
							"objectMapByAsName": {
								"JoinColumn": {
									"asName": "JoinColumn",
									"moduleImport": null,
									"sourceName": "JoinColumn"
								},
								"ManyToOne": {
									"asName": "ManyToOne",
									"moduleImport": null,
									"sourceName": "ManyToOne"
								},
								"MappedSuperclass": {
									"asName": "MappedSuperclass",
									"moduleImport": null,
									"sourceName": "MappedSuperclass"
								}
							},
							"path": "@airport/air-control"
						},
						"ManyToOne": null,
						"MappedSuperclass": null,
						"Actor": {
							"fileImports": null,
							"isLocal": true,
							"objectMapByAsName": {
								"Actor": {
									"asName": "Actor",
									"moduleImport": null,
									"sourceName": "Actor"
								}
							},
							"path": "../../user/Actor"
						},
						"UserAccount": {
							"fileImports": null,
							"isLocal": true,
							"objectMapByAsName": {
								"UserAccount": {
									"asName": "UserAccount",
									"moduleImport": null,
									"sourceName": "UserAccount"
								}
							},
							"path": "../../user/UserAccount"
						},
						"ImmutableRow": {
							"fileImports": null,
							"isLocal": true,
							"objectMapByAsName": {
								"ImmutableRow": {
									"asName": "ImmutableRow",
									"moduleImport": null,
									"sourceName": "ImmutableRow"
								}
							},
							"path": "./ImmutableRow"
						}
					},
					"importMapByModulePath": {
						"@airport/air-control": null,
						"../../user/Actor": null,
						"../../user/UserAccount": null,
						"./ImmutableRow": null
					}
				},
				"properties": [
					{
						"decorators": [
							{
								"name": "ManyToOne",
								"values": []
							},
							{
								"name": "JoinColumn",
								"values": [
									{
										"name": "ACTOR_ID"
									}
								]
							}
						],
						"isGenerated": false,
						"isId": false,
						"isMappedSuperclass": false,
						"isTransient": false,
						"name": "actor",
						"type": "Actor",
						"ownerEntity": null,
						"nonArrayType": "Actor",
						"entity": {
							"type": "Actor",
							"path": "c:/users/papa/vc/ts/votecube-ui/schemas/relational-db/src/ddl/user/actor.ts",
							"parentClassName": "SystemGeneratedRow",
							"location": "../infrastructure/row/SystemGeneratedRow",
							"isSuperclass": false,
							"ids": [
								{
									"decorators": [
										{
											"name": "Id",
											"values": []
										},
										{
											"name": "GeneratedValue",
											"values": []
										},
										{
											"name": "Column",
											"values": [
												{
													"name": "ACTOR_ID"
												}
											]
										}
									],
									"isGenerated": true,
									"isId": true,
									"isMappedSuperclass": false,
									"isTransient": false,
									"name": "id",
									"type": "number",
									"ownerEntity": null,
									"nonArrayType": "number",
									"primitive": "number",
									"index": 0
								}
							],
							"docEntry": {
								"decorators": [
									{
										"name": "Entity",
										"values": []
									},
									{
										"name": "Table",
										"values": [
											{
												"name": "ACTORS"
											}
										]
									}
								],
								"isGenerated": false,
								"isId": false,
								"isMappedSuperclass": false,
								"isTransient": false,
								"name": "Actor",
								"type": "typeof Actor",
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
												"DbNumber": {
													"asName": "DbNumber",
													"moduleImport": null,
													"sourceName": "DbNumber"
												},
												"Entity": {
													"asName": "Entity",
													"moduleImport": null,
													"sourceName": "Entity"
												},
												"GeneratedValue": {
													"asName": "GeneratedValue",
													"moduleImport": null,
													"sourceName": "GeneratedValue"
												},
												"Id": {
													"asName": "Id",
													"moduleImport": null,
													"sourceName": "Id"
												},
												"JoinColumn": {
													"asName": "JoinColumn",
													"moduleImport": null,
													"sourceName": "JoinColumn"
												},
												"ManyToOne": {
													"asName": "ManyToOne",
													"moduleImport": null,
													"sourceName": "ManyToOne"
												},
												"Table": {
													"asName": "Table",
													"moduleImport": null,
													"sourceName": "Table"
												}
											},
											"path": "@airport/air-control"
										},
										"DbNumber": null,
										"Entity": null,
										"GeneratedValue": null,
										"Id": null,
										"JoinColumn": null,
										"ManyToOne": null,
										"Table": null,
										"Actor_Hash": {
											"fileImports": null,
											"isLocal": true,
											"objectMapByAsName": {
												"Actor_Hash": {
													"asName": "Actor_Hash",
													"moduleImport": null,
													"sourceName": "Actor_Hash"
												},
												"Actor_Id": {
													"asName": "Actor_Id",
													"moduleImport": null,
													"sourceName": "Actor_Id"
												}
											},
											"path": "../../types/user/Actor"
										},
										"Actor_Id": null,
										"SystemGeneratedRow": {
											"fileImports": null,
											"isLocal": true,
											"objectMapByAsName": {
												"SystemGeneratedRow": {
													"asName": "SystemGeneratedRow",
													"moduleImport": null,
													"sourceName": "SystemGeneratedRow"
												}
											},
											"path": "../infrastructure/row/SystemGeneratedRow"
										},
										"Application": {
											"fileImports": null,
											"isLocal": true,
											"objectMapByAsName": {
												"Application": {
													"asName": "Application",
													"moduleImport": null,
													"sourceName": "Application"
												}
											},
											"path": "./Application"
										},
										"Device": {
											"fileImports": null,
											"isLocal": true,
											"objectMapByAsName": {
												"Device": {
													"asName": "Device",
													"moduleImport": null,
													"sourceName": "Device"
												}
											},
											"path": "./Device"
										},
										"UserAccount": {
											"fileImports": null,
											"isLocal": true,
											"objectMapByAsName": {
												"UserAccount": {
													"asName": "UserAccount",
													"moduleImport": null,
													"sourceName": "UserAccount"
												}
											},
											"path": "./UserAccount"
										}
									},
									"importMapByModulePath": {
										"@airport/air-control": null,
										"../../types/user/Actor": null,
										"../infrastructure/row/SystemGeneratedRow": null,
										"./Application": null,
										"./Device": null,
										"./UserAccount": null
									}
								},
								"properties": [
									{
										"decorators": [
											{
												"name": "Id",
												"values": []
											},
											{
												"name": "GeneratedValue",
												"values": []
											},
											{
												"name": "Column",
												"values": [
													{
														"name": "ACTOR_ID"
													}
												]
											}
										],
										"isGenerated": true,
										"isId": true,
										"isMappedSuperclass": false,
										"isTransient": false,
										"name": "id",
										"type": "number",
										"ownerEntity": null,
										"nonArrayType": "number",
										"primitive": "number",
										"index": 0
									},
									{
										"decorators": [
											{
												"name": "Column",
												"values": [
													{
														"name": "ACTOR_HASH",
														"nullable": false
													}
												]
											},
											{
												"name": "DbNumber",
												"values": []
											}
										],
										"isGenerated": false,
										"isId": false,
										"isMappedSuperclass": false,
										"isTransient": false,
										"name": "hash",
										"type": "number",
										"ownerEntity": null,
										"nonArrayType": "number",
										"primitive": "number",
										"index": 1
									},
									{
										"decorators": [
											{
												"name": "ManyToOne",
												"values": []
											},
											{
												"name": "JoinColumn",
												"values": [
													{
														"name": "USER_ACCOUNT_ID",
														"nullable": false
													}
												]
											}
										],
										"isGenerated": false,
										"isId": false,
										"isMappedSuperclass": false,
										"isTransient": false,
										"name": "userAccount",
										"type": "UserAccount",
										"ownerEntity": null,
										"nonArrayType": "UserAccount",
										"entity": {
											"type": "UserAccount",
											"path": "c:/users/papa/vc/ts/votecube-ui/schemas/relational-db/src/ddl/user/useraccount.ts",
											"parentClassName": "SystemGeneratedRow",
											"location": "../infrastructure/row/SystemGeneratedRow",
											"isSuperclass": false,
											"ids": [
												{
													"decorators": [
														{
															"name": "Id",
															"values": []
														},
														{
															"name": "GeneratedValue",
															"values": []
														},
														{
															"name": "Column",
															"values": [
																{
																	"name": "USER_ACCOUNT_ID"
																}
															]
														}
													],
													"isGenerated": true,
													"isId": true,
													"isMappedSuperclass": false,
													"isTransient": false,
													"name": "id",
													"type": "number",
													"ownerEntity": null,
													"nonArrayType": "number",
													"primitive": "number",
													"index": 0
												}
											],
											"docEntry": {
												"decorators": [
													{
														"name": "Entity",
														"values": []
													},
													{
														"name": "Table",
														"values": [
															{
																"name": "USER_ACCOUNTS"
															}
														]
													}
												],
												"isGenerated": false,
												"isId": false,
												"isMappedSuperclass": false,
												"isTransient": false,
												"name": "UserAccount",
												"type": "typeof UserAccount",
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
																"Entity": {
																	"asName": "Entity",
																	"moduleImport": null,
																	"sourceName": "Entity"
																},
																"GeneratedValue": {
																	"asName": "GeneratedValue",
																	"moduleImport": null,
																	"sourceName": "GeneratedValue"
																},
																"Id": {
																	"asName": "Id",
																	"moduleImport": null,
																	"sourceName": "Id"
																},
																"Table": {
																	"asName": "Table",
																	"moduleImport": null,
																	"sourceName": "Table"
																}
															},
															"path": "@airport/air-control"
														},
														"Entity": null,
														"GeneratedValue": null,
														"Id": null,
														"Table": null,
														"UserAccount_BirthDate": {
															"fileImports": null,
															"isLocal": true,
															"objectMapByAsName": {
																"UserAccount_BirthDate": {
																	"asName": "UserAccount_BirthDate",
																	"moduleImport": null,
																	"sourceName": "UserAccount_BirthDate"
																},
																"UserAccount_FirstName": {
																	"asName": "UserAccount_FirstName",
																	"moduleImport": null,
																	"sourceName": "UserAccount_FirstName"
																},
																"UserAccount_Id": {
																	"asName": "UserAccount_Id",
																	"moduleImport": null,
																	"sourceName": "UserAccount_Id"
																},
																"UserAccount_LastName": {
																	"asName": "UserAccount_LastName",
																	"moduleImport": null,
																	"sourceName": "UserAccount_LastName"
																},
																"UserAccount_MiddleName": {
																	"asName": "UserAccount_MiddleName",
																	"moduleImport": null,
																	"sourceName": "UserAccount_MiddleName"
																},
																"UserAccount_UserName": {
																	"asName": "UserAccount_UserName",
																	"moduleImport": null,
																	"sourceName": "UserAccount_UserName"
																}
															},
															"path": "../../types/user/UserAccount"
														},
														"UserAccount_FirstName": null,
														"UserAccount_Id": null,
														"UserAccount_LastName": null,
														"UserAccount_MiddleName": null,
														"UserAccount_UserName": null,
														"SystemGeneratedRow": {
															"fileImports": null,
															"isLocal": true,
															"objectMapByAsName": {
																"SystemGeneratedRow": {
																	"asName": "SystemGeneratedRow",
																	"moduleImport": null,
																	"sourceName": "SystemGeneratedRow"
																}
															},
															"path": "../infrastructure/row/SystemGeneratedRow"
														}
													},
													"importMapByModulePath": {
														"@airport/air-control": null,
														"../../types/user/UserAccount": null,
														"../infrastructure/row/SystemGeneratedRow": null
													}
												},
												"properties": [
													{
														"decorators": [
															{
																"name": "Id",
																"values": []
															},
															{
																"name": "GeneratedValue",
																"values": []
															},
															{
																"name": "Column",
																"values": [
																	{
																		"name": "USER_ACCOUNT_ID"
																	}
																]
															}
														],
														"isGenerated": true,
														"isId": true,
														"isMappedSuperclass": false,
														"isTransient": false,
														"name": "id",
														"type": "number",
														"ownerEntity": null,
														"nonArrayType": "number",
														"primitive": "number",
														"index": 0
													},
													{
														"decorators": [
															{
																"name": "Column",
																"values": [
																	{
																		"name": "USER_NAME",
																		"nullable": false
																	}
																]
															}
														],
														"isGenerated": false,
														"isId": false,
														"isMappedSuperclass": false,
														"isTransient": false,
														"name": "userName",
														"type": "string",
														"ownerEntity": null,
														"nonArrayType": "string",
														"primitive": "string",
														"index": 1
													},
													{
														"decorators": [
															{
																"name": "Column",
																"values": [
																	{
																		"name": "FIRST_NAME",
																		"nullable": false
																	}
																]
															}
														],
														"isGenerated": false,
														"isId": false,
														"isMappedSuperclass": false,
														"isTransient": false,
														"name": "firstName",
														"type": "string",
														"ownerEntity": null,
														"nonArrayType": "string",
														"primitive": "string",
														"index": 2
													},
													{
														"decorators": [
															{
																"name": "Column",
																"values": [
																	{
																		"name": "MIDDLE_NAME"
																	}
																]
															}
														],
														"isGenerated": false,
														"isId": false,
														"isMappedSuperclass": false,
														"isTransient": false,
														"name": "middleName",
														"type": "string",
														"ownerEntity": null,
														"nonArrayType": "string",
														"primitive": "string",
														"index": 3
													},
													{
														"decorators": [
															{
																"name": "Column",
																"values": [
																	{
																		"name": "LAST_NAME",
																		"nullable": false
																	}
																]
															}
														],
														"isGenerated": false,
														"isId": false,
														"isMappedSuperclass": false,
														"isTransient": false,
														"name": "lastName",
														"type": "string",
														"ownerEntity": null,
														"nonArrayType": "string",
														"primitive": "string",
														"index": 4
													},
													{
														"decorators": [
															{
																"name": "Column",
																"values": [
																	{
																		"name": "BIRTH_DATE"
																	}
																]
															}
														],
														"isGenerated": false,
														"isId": false,
														"isMappedSuperclass": false,
														"isTransient": false,
														"name": "birthDate",
														"type": "Date",
														"ownerEntity": null,
														"nonArrayType": "Date",
														"primitive": "Date",
														"index": 5
													}
												],
												"methodSignatures": [],
												"constructors": [
													{
														"parameters": [],
														"returnType": "UserAccount"
													}
												]
											},
											"implementedInterfaceNames": [],
											"parentEntity": {
												"type": "SystemGeneratedRow",
												"path": "c:/users/papa/vc/ts/votecube-ui/schemas/relational-db/src/ddl/infrastructure/row/systemgeneratedrow.ts",
												"parentClassName": "ImmutableRow",
												"location": "./ImmutableRow",
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
													"name": "SystemGeneratedRow",
													"type": "typeof SystemGeneratedRow",
													"fileImports": {
														"importMapByObjectAsName": {
															"MappedSuperclass": {
																"fileImports": null,
																"isLocal": false,
																"objectMapByAsName": {
																	"MappedSuperclass": {
																		"asName": "MappedSuperclass",
																		"moduleImport": null,
																		"sourceName": "MappedSuperclass"
																	}
																},
																"path": "@airport/air-control"
															},
															"ImmutableRow": {
																"fileImports": null,
																"isLocal": true,
																"objectMapByAsName": {
																	"ImmutableRow": {
																		"asName": "ImmutableRow",
																		"moduleImport": null,
																		"sourceName": "ImmutableRow"
																	}
																},
																"path": "./ImmutableRow"
															}
														},
														"importMapByModulePath": {
															"@airport/air-control": null,
															"./ImmutableRow": null
														}
													},
													"properties": [],
													"methodSignatures": [],
													"constructors": [
														{
															"parameters": [],
															"returnType": "SystemGeneratedRow"
														}
													]
												},
												"implementedInterfaceNames": [],
												"parentEntity": {
													"type": "ImmutableRow",
													"path": "c:/users/papa/vc/ts/votecube-ui/schemas/relational-db/src/ddl/infrastructure/row/immutablerow.ts",
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
																"MappedSuperclass": null,
																"CreatedAt": {
																	"fileImports": null,
																	"isLocal": true,
																	"objectMapByAsName": {
																		"CreatedAt": {
																			"asName": "CreatedAt",
																			"moduleImport": null,
																			"sourceName": "CreatedAt"
																		}
																	},
																	"path": "../../../types/common"
																}
															},
															"importMapByModulePath": {
																"@airport/air-control": null,
																"../../../types/common": null
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
													"project": "@votecube/relational-db"
												},
												"project": "@votecube/relational-db"
											}
										},
										"index": 2
									},
									{
										"decorators": [
											{
												"name": "ManyToOne",
												"values": []
											},
											{
												"name": "JoinColumn",
												"values": [
													{
														"name": "DEVICE_ID",
														"nullable": false
													}
												]
											}
										],
										"isGenerated": false,
										"isId": false,
										"isMappedSuperclass": false,
										"isTransient": false,
										"name": "device",
										"type": "Device",
										"ownerEntity": null,
										"nonArrayType": "Device",
										"entity": {
											"type": "Device",
											"path": "c:/users/papa/vc/ts/votecube-ui/schemas/relational-db/src/ddl/user/device.ts",
											"parentClassName": "SystemGeneratedRow",
											"location": "../infrastructure/row/SystemGeneratedRow",
											"isSuperclass": false,
											"ids": [
												{
													"decorators": [
														{
															"name": "GeneratedValue",
															"values": []
														},
														{
															"name": "Id",
															"values": []
														},
														{
															"name": "Column",
															"values": [
																{
																	"name": "DEVICE_ID"
																}
															]
														}
													],
													"isGenerated": true,
													"isId": true,
													"isMappedSuperclass": false,
													"isTransient": false,
													"name": "id",
													"type": "number",
													"ownerEntity": null,
													"nonArrayType": "number",
													"primitive": "number",
													"index": 0
												}
											],
											"docEntry": {
												"decorators": [
													{
														"name": "Entity",
														"values": []
													},
													{
														"name": "Table",
														"values": [
															{
																"name": "DEVICES"
															}
														]
													}
												],
												"isGenerated": false,
												"isId": false,
												"isMappedSuperclass": false,
												"isTransient": false,
												"name": "Device",
												"type": "typeof Device",
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
																"DbNumber": {
																	"asName": "DbNumber",
																	"moduleImport": null,
																	"sourceName": "DbNumber"
																},
																"Entity": {
																	"asName": "Entity",
																	"moduleImport": null,
																	"sourceName": "Entity"
																},
																"GeneratedValue": {
																	"asName": "GeneratedValue",
																	"moduleImport": null,
																	"sourceName": "GeneratedValue"
																},
																"Id": {
																	"asName": "Id",
																	"moduleImport": null,
																	"sourceName": "Id"
																},
																"Table": {
																	"asName": "Table",
																	"moduleImport": null,
																	"sourceName": "Table"
																}
															},
															"path": "@airport/air-control"
														},
														"DbNumber": null,
														"Entity": null,
														"GeneratedValue": null,
														"Id": null,
														"Table": null,
														"Device_Hash": {
															"fileImports": null,
															"isLocal": true,
															"objectMapByAsName": {
																"Device_Hash": {
																	"asName": "Device_Hash",
																	"moduleImport": null,
																	"sourceName": "Device_Hash"
																},
																"Device_Id": {
																	"asName": "Device_Id",
																	"moduleImport": null,
																	"sourceName": "Device_Id"
																}
															},
															"path": "../../types/user/Device"
														},
														"Device_Id": null,
														"SystemGeneratedRow": {
															"fileImports": null,
															"isLocal": true,
															"objectMapByAsName": {
																"SystemGeneratedRow": {
																	"asName": "SystemGeneratedRow",
																	"moduleImport": null,
																	"sourceName": "SystemGeneratedRow"
																}
															},
															"path": "../infrastructure/row/SystemGeneratedRow"
														}
													},
													"importMapByModulePath": {
														"@airport/air-control": null,
														"../../types/user/Device": null,
														"../infrastructure/row/SystemGeneratedRow": null
													}
												},
												"properties": [
													{
														"decorators": [
															{
																"name": "GeneratedValue",
																"values": []
															},
															{
																"name": "Id",
																"values": []
															},
															{
																"name": "Column",
																"values": [
																	{
																		"name": "DEVICE_ID"
																	}
																]
															}
														],
														"isGenerated": true,
														"isId": true,
														"isMappedSuperclass": false,
														"isTransient": false,
														"name": "id",
														"type": "number",
														"ownerEntity": null,
														"nonArrayType": "number",
														"primitive": "number",
														"index": 0
													},
													{
														"decorators": [
															{
																"name": "Column",
																"values": [
																	{
																		"name": "DEVICE_HASH",
																		"nullable": false
																	}
																]
															},
															{
																"name": "DbNumber",
																"values": []
															}
														],
														"isGenerated": false,
														"isId": false,
														"isMappedSuperclass": false,
														"isTransient": false,
														"name": "hash",
														"type": "string",
														"ownerEntity": null,
														"nonArrayType": "string",
														"primitive": "number",
														"index": 1
													}
												],
												"methodSignatures": [],
												"constructors": [
													{
														"parameters": [],
														"returnType": "Device"
													}
												]
											},
											"implementedInterfaceNames": [],
											"parentEntity": null
										},
										"index": 3
									},
									{
										"decorators": [
											{
												"name": "ManyToOne",
												"values": []
											},
											{
												"name": "JoinColumn",
												"values": [
													{
														"name": "APPLICATION_ID",
														"nullable": false
													}
												]
											}
										],
										"isGenerated": false,
										"isId": false,
										"isMappedSuperclass": false,
										"isTransient": false,
										"name": "application",
										"type": "Application",
										"ownerEntity": null,
										"nonArrayType": "Application",
										"entity": {
											"type": "Application",
											"path": "c:/users/papa/vc/ts/votecube-ui/schemas/relational-db/src/ddl/user/application.ts",
											"parentClassName": "SystemGeneratedRow",
											"location": "../infrastructure/row/SystemGeneratedRow",
											"isSuperclass": false,
											"ids": [
												{
													"decorators": [
														{
															"name": "GeneratedValue",
															"values": []
														},
														{
															"name": "Id",
															"values": []
														},
														{
															"name": "Column",
															"values": [
																{
																	"name": "APPLICATION_ID"
																}
															]
														}
													],
													"isGenerated": true,
													"isId": true,
													"isMappedSuperclass": false,
													"isTransient": false,
													"name": "id",
													"type": "number",
													"ownerEntity": null,
													"nonArrayType": "number",
													"primitive": "number",
													"index": 0
												}
											],
											"docEntry": {
												"decorators": [
													{
														"name": "Entity",
														"values": []
													},
													{
														"name": "Table",
														"values": [
															{
																"name": "APPLICATIONS"
															}
														]
													}
												],
												"isGenerated": false,
												"isId": false,
												"isMappedSuperclass": false,
												"isTransient": false,
												"name": "Application",
												"type": "typeof Application",
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
																"DbNumber": {
																	"asName": "DbNumber",
																	"moduleImport": null,
																	"sourceName": "DbNumber"
																},
																"DbString": {
																	"asName": "DbString",
																	"moduleImport": null,
																	"sourceName": "DbString"
																},
																"Entity": {
																	"asName": "Entity",
																	"moduleImport": null,
																	"sourceName": "Entity"
																},
																"GeneratedValue": {
																	"asName": "GeneratedValue",
																	"moduleImport": null,
																	"sourceName": "GeneratedValue"
																},
																"Id": {
																	"asName": "Id",
																	"moduleImport": null,
																	"sourceName": "Id"
																},
																"Table": {
																	"asName": "Table",
																	"moduleImport": null,
																	"sourceName": "Table"
																}
															},
															"path": "@airport/air-control"
														},
														"DbNumber": null,
														"DbString": null,
														"Entity": null,
														"GeneratedValue": null,
														"Id": null,
														"Table": null,
														"Application_Host": {
															"fileImports": null,
															"isLocal": true,
															"objectMapByAsName": {
																"Application_Host": {
																	"asName": "Application_Host",
																	"moduleImport": null,
																	"sourceName": "Application_Host"
																},
																"Application_Id": {
																	"asName": "Application_Id",
																	"moduleImport": null,
																	"sourceName": "Application_Id"
																},
																"Application_Port": {
																	"asName": "Application_Port",
																	"moduleImport": null,
																	"sourceName": "Application_Port"
																}
															},
															"path": "../../types/user/Application"
														},
														"Application_Id": null,
														"Application_Port": null,
														"SystemGeneratedRow": {
															"fileImports": null,
															"isLocal": true,
															"objectMapByAsName": {
																"SystemGeneratedRow": {
																	"asName": "SystemGeneratedRow",
																	"moduleImport": null,
																	"sourceName": "SystemGeneratedRow"
																}
															},
															"path": "../infrastructure/row/SystemGeneratedRow"
														}
													},
													"importMapByModulePath": {
														"@airport/air-control": null,
														"../../types/user/Application": null,
														"../infrastructure/row/SystemGeneratedRow": null
													}
												},
												"properties": [
													{
														"decorators": [
															{
																"name": "GeneratedValue",
																"values": []
															},
															{
																"name": "Id",
																"values": []
															},
															{
																"name": "Column",
																"values": [
																	{
																		"name": "APPLICATION_ID"
																	}
																]
															}
														],
														"isGenerated": true,
														"isId": true,
														"isMappedSuperclass": false,
														"isTransient": false,
														"name": "id",
														"type": "number",
														"ownerEntity": null,
														"nonArrayType": "number",
														"primitive": "number",
														"index": 0
													},
													{
														"decorators": [
															{
																"name": "DbString",
																"values": []
															},
															{
																"name": "Column",
																"values": [
																	{
																		"name": "HOST",
																		"nullable": false
																	}
																]
															}
														],
														"isGenerated": false,
														"isId": false,
														"isMappedSuperclass": false,
														"isTransient": false,
														"name": "host",
														"type": "string",
														"ownerEntity": null,
														"nonArrayType": "string",
														"primitive": "string",
														"index": 1
													},
													{
														"decorators": [
															{
																"name": "Column",
																"values": [
																	{
																		"name": "PORT",
																		"nullable": false
																	}
																]
															},
															{
																"name": "DbNumber",
																"values": []
															}
														],
														"isGenerated": false,
														"isId": false,
														"isMappedSuperclass": false,
														"isTransient": false,
														"name": "port",
														"type": "number",
														"ownerEntity": null,
														"nonArrayType": "number",
														"primitive": "number",
														"index": 2
													}
												],
												"methodSignatures": [],
												"constructors": [
													{
														"parameters": [],
														"returnType": "Application"
													}
												]
											},
											"implementedInterfaceNames": [],
											"parentEntity": null
										},
										"index": 4
									}
								],
								"methodSignatures": [],
								"constructors": [
									{
										"parameters": [],
										"returnType": "Actor"
									}
								]
							},
							"implementedInterfaceNames": [],
							"parentEntity": null
						},
						"index": 0
					},
					{
						"decorators": [
							{
								"name": "ManyToOne",
								"values": []
							},
							{
								"name": "JoinColumn",
								"values": [
									{
										"name": "USER_ACCOUNT_ID"
									}
								]
							}
						],
						"isGenerated": false,
						"isId": false,
						"isMappedSuperclass": false,
						"isTransient": false,
						"name": "userAccount",
						"type": "UserAccount",
						"ownerEntity": null,
						"nonArrayType": "UserAccount",
						"entity": null,
						"index": 1
					}
				],
				"methodSignatures": [],
				"constructors": [
					{
						"parameters": [],
						"returnType": "ImmutableActorRow"
					}
				]
			},
			"implementedInterfaceNames": [],
			"parentEntity": null,
			"project": "@votecube/relational-db"
		},
		"project": "@votecube/relational-db"
	},
	{
		"type": "MutableRow",
		"path": "c:/users/papa/vc/ts/votecube-ui/schemas/relational-db/src/ddl/infrastructure/row/mutablerow.ts",
		"parentClassName": "ImmutableRow",
		"location": "./ImmutableRow",
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
			"name": "MutableRow",
			"type": "typeof MutableRow",
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
					"MappedSuperclass": null,
					"UpdatedAt": {
						"fileImports": null,
						"isLocal": true,
						"objectMapByAsName": {
							"UpdatedAt": {
								"asName": "UpdatedAt",
								"moduleImport": null,
								"sourceName": "UpdatedAt"
							}
						},
						"path": "../../../types/common"
					},
					"ImmutableRow": {
						"fileImports": null,
						"isLocal": true,
						"objectMapByAsName": {
							"ImmutableRow": {
								"asName": "ImmutableRow",
								"moduleImport": null,
								"sourceName": "ImmutableRow"
							}
						},
						"path": "./ImmutableRow"
					}
				},
				"importMapByModulePath": {
					"@airport/air-control": null,
					"../../../types/common": null,
					"./ImmutableRow": null
				}
			},
			"properties": [
				{
					"decorators": [
						{
							"name": "Column",
							"values": [
								{
									"name": "UPDATED_AT"
								}
							]
						}
					],
					"isGenerated": false,
					"isId": false,
					"isMappedSuperclass": false,
					"isTransient": false,
					"name": "updatedAt",
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
					"returnType": "MutableRow"
				}
			]
		},
		"implementedInterfaceNames": [],
		"parentEntity": {
			"type": "ImmutableRow",
			"path": "c:/users/papa/vc/ts/votecube-ui/schemas/relational-db/src/ddl/infrastructure/row/immutablerow.ts",
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
						"MappedSuperclass": null,
						"CreatedAt": {
							"fileImports": null,
							"isLocal": true,
							"objectMapByAsName": {
								"CreatedAt": {
									"asName": "CreatedAt",
									"moduleImport": null,
									"sourceName": "CreatedAt"
								}
							},
							"path": "../../../types/common"
						}
					},
					"importMapByModulePath": {
						"@airport/air-control": null,
						"../../../types/common": null
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
			"project": "@votecube/relational-db"
		},
		"project": "@votecube/relational-db"
	}
];