/* eslint-disable */
export const MAPPED_SUPERCLASS = [
    {
        "type": "ImmutableRow",
        "path": "D:\\code\\Votecube\\votecube-ui\\schemas\\ecclesia\\src\\ddl\\infrastructure\\row\\ImmutableRow.ts",
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
                        "path": "@airport/air-traffic-control"
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
                    "@airport/air-traffic-control": null,
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
        "project": "@votecube/ecclesia"
    },
    {
        "type": "SystemGeneratedRow",
        "path": "D:\\code\\Votecube\\votecube-ui\\schemas\\ecclesia\\src\\ddl\\infrastructure\\row\\SystemGeneratedRow.ts",
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
                        "path": "@airport/air-traffic-control"
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
                    "@airport/air-traffic-control": null,
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
            "path": "D:\\code\\Votecube\\votecube-ui\\schemas\\ecclesia\\src\\ddl\\infrastructure\\row\\ImmutableRow.ts",
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
                            "path": "@airport/air-traffic-control"
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
                        "@airport/air-traffic-control": null,
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
            "project": "@votecube/ecclesia"
        },
        "project": "@votecube/ecclesia"
    },
    {
        "type": "ImmutableActorRow",
        "path": "D:\\code\\Votecube\\votecube-ui\\schemas\\ecclesia\\src\\ddl\\infrastructure\\row\\ImmutableActorRow.ts",
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
                        "path": "@airport/air-traffic-control"
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
                    "@airport/air-traffic-control": null,
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
                    "entity": {
                        "type": "UserAccount",
                        "path": "D:\\code\\Votecube\\votecube-ui\\schemas\\ecclesia\\src\\ddl\\user\\UserAccount.ts",
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
                                        "path": "@airport/air-traffic-control"
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
                                            "UserAccount_Email": {
                                                "asName": "UserAccount_Email",
                                                "moduleImport": null,
                                                "sourceName": "UserAccount_Email"
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
                                            "UserAccount_PasswordHash": {
                                                "asName": "UserAccount_PasswordHash",
                                                "moduleImport": null,
                                                "sourceName": "UserAccount_PasswordHash"
                                            },
                                            "UserAccount_UserName": {
                                                "asName": "UserAccount_UserName",
                                                "moduleImport": null,
                                                "sourceName": "UserAccount_UserName"
                                            }
                                        },
                                        "path": "../../types/user/UserAccount"
                                    },
                                    "UserAccount_Email": null,
                                    "UserAccount_FirstName": null,
                                    "UserAccount_Id": null,
                                    "UserAccount_LastName": null,
                                    "UserAccount_MiddleName": null,
                                    "UserAccount_PasswordHash": null,
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
                                    "@airport/air-traffic-control": null,
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
                                                    "name": "EMAIL"
                                                }
                                            ]
                                        }
                                    ],
                                    "isGenerated": false,
                                    "isId": false,
                                    "isMappedSuperclass": false,
                                    "isTransient": false,
                                    "name": "email",
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
                                                    "name": "PASSWORD_HASH",
                                                    "nullable": false
                                                }
                                            ]
                                        }
                                    ],
                                    "isGenerated": false,
                                    "isId": false,
                                    "isMappedSuperclass": false,
                                    "isTransient": false,
                                    "name": "passwordHash",
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
                                                    "name": "FIRST_NAME"
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
                                    "index": 4
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
                                    "index": 5
                                },
                                {
                                    "decorators": [
                                        {
                                            "name": "Column",
                                            "values": [
                                                {
                                                    "name": "LAST_NAME"
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
                                    "index": 6
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
                                    "index": 7
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
                            "path": "D:\\code\\Votecube\\votecube-ui\\schemas\\ecclesia\\src\\ddl\\infrastructure\\row\\SystemGeneratedRow.ts",
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
                                            "path": "@airport/air-traffic-control"
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
                                        "@airport/air-traffic-control": null,
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
                                "path": "D:\\code\\Votecube\\votecube-ui\\schemas\\ecclesia\\src\\ddl\\infrastructure\\row\\ImmutableRow.ts",
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
                                                "path": "@airport/air-traffic-control"
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
                                            "@airport/air-traffic-control": null,
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
                                "project": "@votecube/ecclesia"
                            },
                            "project": "@votecube/ecclesia"
                        }
                    },
                    "index": 0
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
        "project": "@votecube/ecclesia"
    },
    {
        "type": "AgeSuitableRow",
        "path": "D:\\code\\Votecube\\votecube-ui\\schemas\\ecclesia\\src\\ddl\\infrastructure\\row\\AgeSuitableRow.ts",
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
                        "path": "@airport/air-traffic-control"
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
                    "@airport/air-traffic-control": null,
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
            "path": "D:\\code\\Votecube\\votecube-ui\\schemas\\ecclesia\\src\\ddl\\infrastructure\\row\\ImmutableActorRow.ts",
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
                            "path": "@airport/air-traffic-control"
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
                        "@airport/air-traffic-control": null,
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
                        "entity": {
                            "type": "UserAccount",
                            "path": "D:\\code\\Votecube\\votecube-ui\\schemas\\ecclesia\\src\\ddl\\user\\UserAccount.ts",
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
                                            "path": "@airport/air-traffic-control"
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
                                                "UserAccount_Email": {
                                                    "asName": "UserAccount_Email",
                                                    "moduleImport": null,
                                                    "sourceName": "UserAccount_Email"
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
                                                "UserAccount_PasswordHash": {
                                                    "asName": "UserAccount_PasswordHash",
                                                    "moduleImport": null,
                                                    "sourceName": "UserAccount_PasswordHash"
                                                },
                                                "UserAccount_UserName": {
                                                    "asName": "UserAccount_UserName",
                                                    "moduleImport": null,
                                                    "sourceName": "UserAccount_UserName"
                                                }
                                            },
                                            "path": "../../types/user/UserAccount"
                                        },
                                        "UserAccount_Email": null,
                                        "UserAccount_FirstName": null,
                                        "UserAccount_Id": null,
                                        "UserAccount_LastName": null,
                                        "UserAccount_MiddleName": null,
                                        "UserAccount_PasswordHash": null,
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
                                        "@airport/air-traffic-control": null,
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
                                                        "name": "EMAIL"
                                                    }
                                                ]
                                            }
                                        ],
                                        "isGenerated": false,
                                        "isId": false,
                                        "isMappedSuperclass": false,
                                        "isTransient": false,
                                        "name": "email",
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
                                                        "name": "PASSWORD_HASH",
                                                        "nullable": false
                                                    }
                                                ]
                                            }
                                        ],
                                        "isGenerated": false,
                                        "isId": false,
                                        "isMappedSuperclass": false,
                                        "isTransient": false,
                                        "name": "passwordHash",
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
                                                        "name": "FIRST_NAME"
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
                                        "index": 4
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
                                        "index": 5
                                    },
                                    {
                                        "decorators": [
                                            {
                                                "name": "Column",
                                                "values": [
                                                    {
                                                        "name": "LAST_NAME"
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
                                        "index": 6
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
                                        "index": 7
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
                                "path": "D:\\code\\Votecube\\votecube-ui\\schemas\\ecclesia\\src\\ddl\\infrastructure\\row\\SystemGeneratedRow.ts",
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
                                                "path": "@airport/air-traffic-control"
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
                                            "@airport/air-traffic-control": null,
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
                                    "path": "D:\\code\\Votecube\\votecube-ui\\schemas\\ecclesia\\src\\ddl\\infrastructure\\row\\ImmutableRow.ts",
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
                                                    "path": "@airport/air-traffic-control"
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
                                                "@airport/air-traffic-control": null,
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
                                    "project": "@votecube/ecclesia"
                                },
                                "project": "@votecube/ecclesia"
                            }
                        },
                        "index": 0
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
            "project": "@votecube/ecclesia"
        },
        "project": "@votecube/ecclesia"
    },
    {
        "type": "MutableActorRow",
        "path": "D:\\code\\Votecube\\votecube-ui\\schemas\\ecclesia\\src\\ddl\\infrastructure\\row\\MutableActorRow.ts",
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
                        "path": "@airport/air-traffic-control"
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
                    "@airport/air-traffic-control": null,
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
            "path": "D:\\code\\Votecube\\votecube-ui\\schemas\\ecclesia\\src\\ddl\\infrastructure\\row\\ImmutableActorRow.ts",
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
                            "path": "@airport/air-traffic-control"
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
                        "@airport/air-traffic-control": null,
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
                        "entity": {
                            "type": "UserAccount",
                            "path": "D:\\code\\Votecube\\votecube-ui\\schemas\\ecclesia\\src\\ddl\\user\\UserAccount.ts",
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
                                            "path": "@airport/air-traffic-control"
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
                                                "UserAccount_Email": {
                                                    "asName": "UserAccount_Email",
                                                    "moduleImport": null,
                                                    "sourceName": "UserAccount_Email"
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
                                                "UserAccount_PasswordHash": {
                                                    "asName": "UserAccount_PasswordHash",
                                                    "moduleImport": null,
                                                    "sourceName": "UserAccount_PasswordHash"
                                                },
                                                "UserAccount_UserName": {
                                                    "asName": "UserAccount_UserName",
                                                    "moduleImport": null,
                                                    "sourceName": "UserAccount_UserName"
                                                }
                                            },
                                            "path": "../../types/user/UserAccount"
                                        },
                                        "UserAccount_Email": null,
                                        "UserAccount_FirstName": null,
                                        "UserAccount_Id": null,
                                        "UserAccount_LastName": null,
                                        "UserAccount_MiddleName": null,
                                        "UserAccount_PasswordHash": null,
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
                                        "@airport/air-traffic-control": null,
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
                                                        "name": "EMAIL"
                                                    }
                                                ]
                                            }
                                        ],
                                        "isGenerated": false,
                                        "isId": false,
                                        "isMappedSuperclass": false,
                                        "isTransient": false,
                                        "name": "email",
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
                                                        "name": "PASSWORD_HASH",
                                                        "nullable": false
                                                    }
                                                ]
                                            }
                                        ],
                                        "isGenerated": false,
                                        "isId": false,
                                        "isMappedSuperclass": false,
                                        "isTransient": false,
                                        "name": "passwordHash",
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
                                                        "name": "FIRST_NAME"
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
                                        "index": 4
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
                                        "index": 5
                                    },
                                    {
                                        "decorators": [
                                            {
                                                "name": "Column",
                                                "values": [
                                                    {
                                                        "name": "LAST_NAME"
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
                                        "index": 6
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
                                        "index": 7
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
                                "path": "D:\\code\\Votecube\\votecube-ui\\schemas\\ecclesia\\src\\ddl\\infrastructure\\row\\SystemGeneratedRow.ts",
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
                                                "path": "@airport/air-traffic-control"
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
                                            "@airport/air-traffic-control": null,
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
                                    "path": "D:\\code\\Votecube\\votecube-ui\\schemas\\ecclesia\\src\\ddl\\infrastructure\\row\\ImmutableRow.ts",
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
                                                    "path": "@airport/air-traffic-control"
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
                                                "@airport/air-traffic-control": null,
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
                                    "project": "@votecube/ecclesia"
                                },
                                "project": "@votecube/ecclesia"
                            }
                        },
                        "index": 0
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
            "project": "@votecube/ecclesia"
        },
        "project": "@votecube/ecclesia"
    },
    {
        "type": "MutableRow",
        "path": "D:\\code\\Votecube\\votecube-ui\\schemas\\ecclesia\\src\\ddl\\infrastructure\\row\\MutableRow.ts",
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
                        "path": "@airport/air-traffic-control"
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
                    "@airport/air-traffic-control": null,
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
            "path": "D:\\code\\Votecube\\votecube-ui\\schemas\\ecclesia\\src\\ddl\\infrastructure\\row\\ImmutableRow.ts",
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
                            "path": "@airport/air-traffic-control"
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
                        "@airport/air-traffic-control": null,
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
            "project": "@votecube/ecclesia"
        },
        "project": "@votecube/ecclesia"
    }
];
//# sourceMappingURL=mappedSuperclass.js.map