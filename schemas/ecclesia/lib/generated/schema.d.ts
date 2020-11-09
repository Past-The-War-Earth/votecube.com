export declare const SCHEMA: {
    domain: string;
    index: any;
    name: string;
    sinceVersion: number;
    versions: {
        entities: ({
            columns: {
                index: number;
                isGenerated: boolean;
                manyRelationColumnRefs: any[];
                name: string;
                notNull: boolean;
                propertyRefs: {
                    index: number;
                }[];
                sinceVersion: number;
                type: number;
            }[];
            idColumnRefs: {
                index: number;
            }[];
            index: number;
            isLocal: boolean;
            isRepositoryEntity: boolean;
            name: string;
            properties: {
                columnRef: {
                    index: number;
                };
                index: number;
                isId: boolean;
                name: string;
                sinceVersion: number;
            }[];
            relations: any[];
            sinceVersion: number;
            tableConfig: {
                name: string;
                indexes: any[];
            };
            operations: {
                createOne?: undefined;
            };
        } | {
            columns: {
                index: number;
                isGenerated: boolean;
                manyRelationColumnRefs: {
                    manyRelationIndex: number;
                    oneSchemaIndex: any;
                    oneTableIndex: number;
                    oneColumnIndex: number;
                    sinceVersion: number;
                }[];
                name: string;
                notNull: boolean;
                propertyRefs: {
                    index: number;
                }[];
                sinceVersion: number;
                type: number;
            }[];
            idColumnRefs: {
                index: number;
            }[];
            index: number;
            isLocal: boolean;
            isRepositoryEntity: boolean;
            name: string;
            properties: ({
                columnRef: {
                    index: number;
                };
                index: number;
                isId: boolean;
                name: string;
                sinceVersion: number;
                relationRef?: undefined;
            } | {
                index: number;
                isId: boolean;
                name: string;
                relationRef: {
                    index: number;
                };
                sinceVersion: number;
                columnRef?: undefined;
            })[];
            relations: ({
                index: number;
                isId: boolean;
                relationType: number;
                propertyRef: {
                    index: number;
                };
                relationTableIndex: number;
                sinceVersion: number;
                oneToManyElems?: undefined;
            } | {
                index: number;
                isId: boolean;
                oneToManyElems: {
                    mappedBy: string;
                };
                relationType: number;
                propertyRef: {
                    index: number;
                };
                relationTableIndex: number;
                sinceVersion: number;
            })[];
            sinceVersion: number;
            tableConfig: {
                name: string;
                indexes: any[];
            };
            operations?: undefined;
        } | {
            columns: ({
                index: number;
                isGenerated: boolean;
                manyRelationColumnRefs: {
                    manyRelationIndex: number;
                    oneSchemaIndex: any;
                    oneTableIndex: number;
                    oneColumnIndex: number;
                    sinceVersion: number;
                }[];
                name: string;
                notNull: boolean;
                propertyRefs: {
                    index: number;
                }[];
                sinceVersion: number;
                type: number;
            } | {
                index: number;
                isGenerated: boolean;
                manyRelationColumnRefs: {
                    manyRelationIndex: number;
                    oneSchemaIndex: any;
                    oneTableIndex: number;
                    oneRelationIndex: number;
                    oneColumnIndex: number;
                    sinceVersion: number;
                }[];
                name: string;
                notNull: boolean;
                propertyRefs: {
                    index: number;
                }[];
                sinceVersion: number;
                type: number;
            })[];
            idColumnRefs: {
                index: number;
            }[];
            index: number;
            isLocal: boolean;
            isRepositoryEntity: boolean;
            name: string;
            properties: ({
                columnRef: {
                    index: number;
                };
                index: number;
                isId: boolean;
                name: string;
                sinceVersion: number;
                relationRef?: undefined;
            } | {
                index: number;
                isId: boolean;
                name: string;
                relationRef: {
                    index: number;
                };
                sinceVersion: number;
                columnRef?: undefined;
            })[];
            relations: ({
                index: number;
                isId: boolean;
                relationType: number;
                propertyRef: {
                    index: number;
                };
                relationTableIndex: number;
                sinceVersion: number;
                oneToManyElems?: undefined;
            } | {
                index: number;
                isId: boolean;
                oneToManyElems: {
                    cascade: number;
                    mappedBy: string;
                };
                relationType: number;
                propertyRef: {
                    index: number;
                };
                relationTableIndex: number;
                sinceVersion: number;
            })[];
            sinceVersion: number;
            tableConfig: {
                name: string;
                indexes: any[];
            };
            operations?: undefined;
        } | {
            columns: ({
                index: number;
                isGenerated: boolean;
                manyRelationColumnRefs: {
                    manyRelationIndex: number;
                    oneSchemaIndex: any;
                    oneTableIndex: number;
                    oneColumnIndex: number;
                    sinceVersion: number;
                }[];
                name: string;
                notNull: boolean;
                propertyRefs: {
                    index: number;
                }[];
                sinceVersion: number;
                type: number;
            } | {
                index: number;
                isGenerated: boolean;
                manyRelationColumnRefs: {
                    manyRelationIndex: number;
                    oneSchemaIndex: any;
                    oneTableIndex: number;
                    oneRelationIndex: number;
                    oneColumnIndex: number;
                    sinceVersion: number;
                }[];
                name: string;
                notNull: boolean;
                propertyRefs: {
                    index: number;
                }[];
                sinceVersion: number;
                type: number;
            })[];
            idColumnRefs: {
                index: number;
            }[];
            index: number;
            isLocal: boolean;
            isRepositoryEntity: boolean;
            name: string;
            properties: ({
                columnRef: {
                    index: number;
                };
                index: number;
                isId: boolean;
                name: string;
                sinceVersion: number;
                relationRef?: undefined;
            } | {
                index: number;
                isId: boolean;
                name: string;
                relationRef: {
                    index: number;
                };
                sinceVersion: number;
                columnRef?: undefined;
            })[];
            relations: ({
                index: number;
                isId: boolean;
                relationType: number;
                propertyRef: {
                    index: number;
                };
                relationTableIndex: number;
                sinceVersion: number;
                oneToManyElems?: undefined;
            } | {
                index: number;
                isId: boolean;
                oneToManyElems: {
                    mappedBy: string;
                    cascade?: undefined;
                };
                relationType: number;
                propertyRef: {
                    index: number;
                };
                relationTableIndex: number;
                sinceVersion: number;
            } | {
                index: number;
                isId: boolean;
                oneToManyElems: {
                    cascade: number;
                    mappedBy: string;
                };
                relationType: number;
                propertyRef: {
                    index: number;
                };
                relationTableIndex: number;
                sinceVersion: number;
            })[];
            sinceVersion: number;
            tableConfig: {
                name: string;
                indexes: any[];
            };
            operations: {
                createOne: {
                    type: number;
                    subRules: {
                        ageSuitability: {
                            anyValue: boolean;
                        };
                        parent: {
                            operator: string;
                            subRules: {
                                left: {
                                    subRules: {
                                        id: {
                                            anyValue: boolean;
                                        };
                                    };
                                };
                                right: {
                                    isNull: boolean;
                                };
                            };
                        };
                        revisions: {
                            isArray: boolean;
                            subRules: {
                                subRules: {
                                    ageSuitability: {
                                        anyValue: boolean;
                                    };
                                    depth: {
                                        numericValue: number;
                                    };
                                    factorPositions: {
                                        isArray: boolean;
                                        subRules: ({
                                            subRules: {
                                                axis: {
                                                    anyValue: boolean;
                                                };
                                                dir: {
                                                    anyValue: boolean;
                                                };
                                                factorNumber: {
                                                    anyValue: boolean;
                                                };
                                                blue: {
                                                    anyValue: boolean;
                                                };
                                                green: {
                                                    anyValue: boolean;
                                                };
                                                red: {
                                                    anyValue: boolean;
                                                };
                                                outcomeOrdinal: {
                                                    anyValue: boolean;
                                                };
                                                parent: {
                                                    operator: string;
                                                    subRules: {
                                                        left: {
                                                            isNull: boolean;
                                                        };
                                                        right: {
                                                            subRules: {
                                                                id: {
                                                                    anyValue: boolean;
                                                                };
                                                            };
                                                        };
                                                    };
                                                };
                                                skin: {
                                                    operator: string;
                                                    subRules: {
                                                        left: {
                                                            subRules: {
                                                                id: {
                                                                    anyValue: boolean;
                                                                };
                                                            };
                                                        };
                                                        right: {
                                                            subRules: {
                                                                backgroundColor: {
                                                                    anyValue: boolean;
                                                                };
                                                                textColor: {
                                                                    anyValue: boolean;
                                                                };
                                                                parent: {
                                                                    operator: string;
                                                                    subRules: {
                                                                        left: {
                                                                            isNull: boolean;
                                                                        };
                                                                        right: {
                                                                            subRules: {
                                                                                id: {
                                                                                    anyValue: boolean;
                                                                                };
                                                                            };
                                                                        };
                                                                    };
                                                                };
                                                            };
                                                        };
                                                    };
                                                };
                                                factorPosition: {
                                                    subRules: {
                                                        factor: {
                                                            operator: string;
                                                            subRules: {
                                                                left: {
                                                                    subRules: {
                                                                        id: {
                                                                            anyValue: boolean;
                                                                        };
                                                                    };
                                                                };
                                                                right: {
                                                                    subRules: {
                                                                        ageSuitability: {
                                                                            anyValue: boolean;
                                                                        };
                                                                        parentTranslation: {
                                                                            subRules: {
                                                                                name: {
                                                                                    anyValue: boolean;
                                                                                };
                                                                            };
                                                                        };
                                                                        parent: {
                                                                            operator: string;
                                                                            subRules: {
                                                                                left: {
                                                                                    isNull: boolean;
                                                                                };
                                                                                right: {
                                                                                    subRules: {
                                                                                        id: {
                                                                                            anyValue: boolean;
                                                                                        };
                                                                                    };
                                                                                };
                                                                            };
                                                                        };
                                                                    };
                                                                };
                                                            };
                                                        };
                                                        position: {
                                                            operator: string;
                                                            subRules: {
                                                                left: {
                                                                    subRules: {
                                                                        id: {
                                                                            anyValue: boolean;
                                                                        };
                                                                    };
                                                                };
                                                                right: {
                                                                    subRules: {
                                                                        ageSuitability: {
                                                                            anyValue: boolean;
                                                                        };
                                                                        parentTranslation: {
                                                                            subRules: {
                                                                                name: {
                                                                                    anyValue: boolean;
                                                                                };
                                                                            };
                                                                        };
                                                                        parent: {
                                                                            operator: string;
                                                                            subRules: {
                                                                                left: {
                                                                                    isNull: boolean;
                                                                                };
                                                                                right: {
                                                                                    subRules: {
                                                                                        id: {
                                                                                            anyValue: boolean;
                                                                                        };
                                                                                    };
                                                                                };
                                                                            };
                                                                        };
                                                                    };
                                                                };
                                                            };
                                                        };
                                                    };
                                                };
                                            };
                                            functionCall?: undefined;
                                        } | {
                                            functionCall: {
                                                functionName: string;
                                                parameters: number[];
                                            };
                                            subRules?: undefined;
                                        })[];
                                    };
                                    outcomeVersionA: {
                                        operator: string;
                                        subRules: {
                                            left: {
                                                subRules: {
                                                    id: {
                                                        anyValue: boolean;
                                                    };
                                                };
                                            };
                                            right: {
                                                subRules: {
                                                    ageSuitability: {
                                                        anyValue: boolean;
                                                    };
                                                    parentTranslation: {
                                                        subRules: {
                                                            name: {
                                                                anyValue: boolean;
                                                            };
                                                        };
                                                    };
                                                    parent: {
                                                        operator: string;
                                                        subRules: {
                                                            left: {
                                                                isNull: boolean;
                                                            };
                                                            right: {
                                                                subRules: {
                                                                    id: {
                                                                        anyValue: boolean;
                                                                    };
                                                                };
                                                            };
                                                        };
                                                    };
                                                };
                                            };
                                        };
                                    };
                                    outcomeVersionB: {
                                        operator: string;
                                        subRules: {
                                            left: {
                                                subRules: {
                                                    id: {
                                                        anyValue: boolean;
                                                    };
                                                };
                                            };
                                            right: {
                                                subRules: {
                                                    ageSuitability: {
                                                        anyValue: boolean;
                                                    };
                                                    parentTranslation: {
                                                        subRules: {
                                                            name: {
                                                                anyValue: boolean;
                                                            };
                                                        };
                                                    };
                                                    parent: {
                                                        operator: string;
                                                        subRules: {
                                                            left: {
                                                                isNull: boolean;
                                                            };
                                                            right: {
                                                                subRules: {
                                                                    id: {
                                                                        anyValue: boolean;
                                                                    };
                                                                };
                                                            };
                                                        };
                                                    };
                                                };
                                            };
                                        };
                                    };
                                    parentTranslation: {
                                        operator: string;
                                        subRules: {
                                            left: {
                                                subRules: {
                                                    id: {
                                                        anyValue: boolean;
                                                    };
                                                };
                                            };
                                            right: {
                                                subRules: {
                                                    name: {
                                                        anyValue: boolean;
                                                    };
                                                    parent: {
                                                        operator: string;
                                                        subRules: {
                                                            left: {
                                                                isNull: boolean;
                                                            };
                                                            right: {
                                                                subRules: {
                                                                    id: {
                                                                        anyValue: boolean;
                                                                    };
                                                                };
                                                            };
                                                        };
                                                    };
                                                };
                                            };
                                        };
                                    };
                                    poll: {
                                        subRules: {
                                            id: {
                                                anyValue: boolean;
                                            };
                                        };
                                    };
                                };
                            }[];
                        };
                        theme: {
                            subRules: {
                                id: {
                                    anyValue: boolean;
                                };
                            };
                        };
                        type: {
                            subRules: {
                                id: {
                                    anyValue: boolean;
                                };
                            };
                        };
                        depth?: undefined;
                        factorPositions?: undefined;
                        outcomeVersionA?: undefined;
                        outcomeVersionB?: undefined;
                        parentTranslation?: undefined;
                        poll?: undefined;
                    };
                };
            };
        } | {
            columns: ({
                index: number;
                isGenerated: boolean;
                manyRelationColumnRefs: {
                    manyRelationIndex: number;
                    oneSchemaIndex: any;
                    oneTableIndex: number;
                    oneColumnIndex: number;
                    sinceVersion: number;
                }[];
                name: string;
                notNull: boolean;
                propertyRefs: {
                    index: number;
                }[];
                sinceVersion: number;
                type: number;
            } | {
                index: number;
                isGenerated: boolean;
                manyRelationColumnRefs: {
                    manyRelationIndex: number;
                    oneSchemaIndex: any;
                    oneTableIndex: number;
                    oneRelationIndex: number;
                    oneColumnIndex: number;
                    sinceVersion: number;
                }[];
                name: string;
                notNull: boolean;
                propertyRefs: {
                    index: number;
                }[];
                sinceVersion: number;
                type: number;
            })[];
            idColumnRefs: {
                index: number;
            }[];
            index: number;
            isLocal: boolean;
            isRepositoryEntity: boolean;
            name: string;
            properties: ({
                columnRef: {
                    index: number;
                };
                index: number;
                isId: boolean;
                name: string;
                sinceVersion: number;
                relationRef?: undefined;
            } | {
                index: number;
                isId: boolean;
                name: string;
                relationRef: {
                    index: number;
                };
                sinceVersion: number;
                columnRef?: undefined;
            })[];
            relations: ({
                index: number;
                isId: boolean;
                relationType: number;
                propertyRef: {
                    index: number;
                };
                relationTableIndex: number;
                sinceVersion: number;
                oneToManyElems?: undefined;
            } | {
                index: number;
                isId: boolean;
                oneToManyElems: {
                    cascade: number;
                    mappedBy: string;
                };
                relationType: number;
                propertyRef: {
                    index: number;
                };
                relationTableIndex: number;
                sinceVersion: number;
            })[];
            sinceVersion: number;
            tableConfig: {
                name: string;
                indexes: any[];
            };
            operations: {
                createOne: {
                    type: number;
                    subRules: {
                        ageSuitability: {
                            anyValue: boolean;
                        };
                        depth: {
                            anyValue: boolean;
                        };
                        factorPositions: {
                            isArray: boolean;
                            subRules: ({
                                subRules: {
                                    axis: {
                                        anyValue: boolean;
                                    };
                                    dir: {
                                        anyValue: boolean;
                                    };
                                    factorNumber: {
                                        anyValue: boolean;
                                    };
                                    blue: {
                                        anyValue: boolean;
                                    };
                                    green: {
                                        anyValue: boolean;
                                    };
                                    red: {
                                        anyValue: boolean;
                                    };
                                    outcomeOrdinal: {
                                        anyValue: boolean;
                                    };
                                    parent: {
                                        operator: string;
                                        subRules: {
                                            left: {
                                                isNull: boolean;
                                            };
                                            right: {
                                                subRules: {
                                                    id: {
                                                        anyValue: boolean;
                                                    };
                                                };
                                            };
                                        };
                                    };
                                    skin: {
                                        operator: string;
                                        subRules: {
                                            left: {
                                                subRules: {
                                                    id: {
                                                        anyValue: boolean;
                                                    };
                                                };
                                            };
                                            right: {
                                                subRules: {
                                                    backgroundColor: {
                                                        anyValue: boolean;
                                                    };
                                                    textColor: {
                                                        anyValue: boolean;
                                                    };
                                                    parent: {
                                                        operator: string;
                                                        subRules: {
                                                            left: {
                                                                isNull: boolean;
                                                            };
                                                            right: {
                                                                subRules: {
                                                                    id: {
                                                                        anyValue: boolean;
                                                                    };
                                                                };
                                                            };
                                                        };
                                                    };
                                                };
                                            };
                                        };
                                    };
                                    factorPosition: {
                                        subRules: {
                                            factor: {
                                                operator: string;
                                                subRules: {
                                                    left: {
                                                        subRules: {
                                                            id: {
                                                                anyValue: boolean;
                                                            };
                                                        };
                                                    };
                                                    right: {
                                                        subRules: {
                                                            ageSuitability: {
                                                                anyValue: boolean;
                                                            };
                                                            parentTranslation: {
                                                                subRules: {
                                                                    name: {
                                                                        anyValue: boolean;
                                                                    };
                                                                };
                                                            };
                                                            parent: {
                                                                operator: string;
                                                                subRules: {
                                                                    left: {
                                                                        isNull: boolean;
                                                                    };
                                                                    right: {
                                                                        subRules: {
                                                                            id: {
                                                                                anyValue: boolean;
                                                                            };
                                                                        };
                                                                    };
                                                                };
                                                            };
                                                        };
                                                    };
                                                };
                                            };
                                            position: {
                                                operator: string;
                                                subRules: {
                                                    left: {
                                                        subRules: {
                                                            id: {
                                                                anyValue: boolean;
                                                            };
                                                        };
                                                    };
                                                    right: {
                                                        subRules: {
                                                            ageSuitability: {
                                                                anyValue: boolean;
                                                            };
                                                            parentTranslation: {
                                                                subRules: {
                                                                    name: {
                                                                        anyValue: boolean;
                                                                    };
                                                                };
                                                            };
                                                            parent: {
                                                                operator: string;
                                                                subRules: {
                                                                    left: {
                                                                        isNull: boolean;
                                                                    };
                                                                    right: {
                                                                        subRules: {
                                                                            id: {
                                                                                anyValue: boolean;
                                                                            };
                                                                        };
                                                                    };
                                                                };
                                                            };
                                                        };
                                                    };
                                                };
                                            };
                                        };
                                    };
                                };
                                functionCall?: undefined;
                            } | {
                                functionCall: {
                                    functionName: string;
                                    parameters: number[];
                                };
                                subRules?: undefined;
                            })[];
                        };
                        outcomeVersionA: {
                            operator: string;
                            subRules: {
                                left: {
                                    subRules: {
                                        id: {
                                            anyValue: boolean;
                                        };
                                    };
                                };
                                right: {
                                    subRules: {
                                        ageSuitability: {
                                            anyValue: boolean;
                                        };
                                        parentTranslation: {
                                            subRules: {
                                                name: {
                                                    anyValue: boolean;
                                                };
                                            };
                                        };
                                        parent: {
                                            operator: string;
                                            subRules: {
                                                left: {
                                                    isNull: boolean;
                                                };
                                                right: {
                                                    subRules: {
                                                        id: {
                                                            anyValue: boolean;
                                                        };
                                                    };
                                                };
                                            };
                                        };
                                    };
                                };
                            };
                        };
                        outcomeVersionB: {
                            operator: string;
                            subRules: {
                                left: {
                                    subRules: {
                                        id: {
                                            anyValue: boolean;
                                        };
                                    };
                                };
                                right: {
                                    subRules: {
                                        ageSuitability: {
                                            anyValue: boolean;
                                        };
                                        parentTranslation: {
                                            subRules: {
                                                name: {
                                                    anyValue: boolean;
                                                };
                                            };
                                        };
                                        parent: {
                                            operator: string;
                                            subRules: {
                                                left: {
                                                    isNull: boolean;
                                                };
                                                right: {
                                                    subRules: {
                                                        id: {
                                                            anyValue: boolean;
                                                        };
                                                    };
                                                };
                                            };
                                        };
                                    };
                                };
                            };
                        };
                        parentTranslation: {
                            operator: string;
                            subRules: {
                                left: {
                                    subRules: {
                                        id: {
                                            anyValue: boolean;
                                        };
                                    };
                                };
                                right: {
                                    subRules: {
                                        name: {
                                            anyValue: boolean;
                                        };
                                        parent: {
                                            operator: string;
                                            subRules: {
                                                left: {
                                                    isNull: boolean;
                                                };
                                                right: {
                                                    subRules: {
                                                        id: {
                                                            anyValue: boolean;
                                                        };
                                                    };
                                                };
                                            };
                                        };
                                    };
                                };
                            };
                        };
                        poll: {
                            subRules: {
                                id: {
                                    anyValue: boolean;
                                };
                            };
                        };
                        parent?: undefined;
                        revisions?: undefined;
                        theme?: undefined;
                        type?: undefined;
                    };
                };
            };
        })[];
        integerVersion: number;
        referencedSchemas: any[];
        versionString: string;
    }[];
};
//# sourceMappingURL=schema.d.ts.map