/* eslint-disable */
export const APPLICATION = {
	"domain": "localhost:8000",
	"index": null,
	"name": "@votecube/votecube",
	"sinceVersion": 1,
	"versions": [
		{
			"api": {
				"apiObjectMap": {
					"AgreementApi": {
						"operationMap": {
							"saveAgreement": {
								"isAsync": true,
								"parameters": []
							},
							"getMyAgreementForIdea": {
								"isAsync": true,
								"parameters": []
							},
							"setAgreement": {
								"isAsync": true,
								"parameters": []
							}
						}
					},
					"IdeaApi": {
						"operationMap": {
							"getIdeasForLabels": {
								"isAsync": true,
								"parameters": []
							},
							"getLeafIdeas": {
								"isAsync": true,
								"parameters": []
							},
							"getStemIdea": {
								"isAsync": true,
								"parameters": []
							},
							"getIdea": {
								"isAsync": true,
								"parameters": []
							},
							"saveIdea": {
								"isAsync": true,
								"parameters": []
							}
						}
					},
					"IdeaRatingApi": {
						"operationMap": {
							"setIdeaRating": {
								"isAsync": true,
								"parameters": []
							}
						}
					},
					"SituationIdeaApi": {
						"operationMap": {
							"add": {
								"isAsync": true,
								"parameters": []
							}
						}
					}
				}
			},
			"entities": [
				{
					"columns": [
						{
							"index": 0,
							"isGenerated": false,
							"manyRelationColumnRefs": [
								{
									"manyRelationIndex": 0,
									"oneApplication_Index": 1,
									"oneTableIndex": 9,
									"oneColumnIndex": 0,
									"sinceVersion": 1
								}
							],
							"name": "REPOSITORY_LID",
							"notNull": true,
							"propertyRefs": [
								{
									"index": 0
								}
							],
							"sinceVersion": 1,
							"type": "NUMBER"
						},
						{
							"index": 1,
							"isGenerated": false,
							"manyRelationColumnRefs": [
								{
									"manyRelationIndex": 1,
									"oneApplication_Index": 1,
									"oneTableIndex": 0,
									"oneColumnIndex": 0,
									"sinceVersion": 1
								}
							],
							"name": "ACTOR_LID",
							"notNull": true,
							"propertyRefs": [
								{
									"index": 1
								}
							],
							"sinceVersion": 1,
							"type": "NUMBER"
						},
						{
							"index": 2,
							"isGenerated": true,
							"manyRelationColumnRefs": [],
							"name": "ACTOR_RECORD_ID",
							"notNull": true,
							"propertyRefs": [
								{
									"index": 2
								}
							],
							"sinceVersion": 1,
							"type": "NUMBER"
						},
						{
							"index": 3,
							"isGenerated": false,
							"manyRelationColumnRefs": [],
							"name": "AGE_SUITABILITY",
							"notNull": true,
							"propertyRefs": [
								{
									"index": 3
								}
							],
							"sinceVersion": 1,
							"type": "NUMBER"
						},
						{
							"index": 4,
							"isGenerated": false,
							"manyRelationColumnRefs": [],
							"name": "CREATED_AT",
							"notNull": false,
							"propertyRefs": [
								{
									"index": 4
								}
							],
							"sinceVersion": 1,
							"type": "DATE"
						},
						{
							"index": 5,
							"isGenerated": false,
							"manyRelationColumnRefs": [],
							"name": "SYSTEM_WIDE_OPERATION_LID",
							"notNull": true,
							"propertyRefs": [
								{
									"index": 5
								}
							],
							"sinceVersion": 1,
							"type": "NUMBER"
						},
						{
							"index": 6,
							"isGenerated": false,
							"manyRelationColumnRefs": [],
							"name": "ORIGINAL_ACTOR_RECORD_ID",
							"notNull": false,
							"propertyRefs": [
								{
									"index": 8
								}
							],
							"sinceVersion": 1,
							"type": "NUMBER"
						},
						{
							"index": 7,
							"isGenerated": false,
							"manyRelationColumnRefs": [
								{
									"manyRelationIndex": 2,
									"oneApplication_Index": 1,
									"oneTableIndex": 9,
									"oneColumnIndex": 0,
									"sinceVersion": 1
								}
							],
							"name": "ORIGINAL_REPOSITORY_LID",
							"notNull": false,
							"propertyRefs": [
								{
									"index": 6
								}
							],
							"sinceVersion": 1,
							"type": "NUMBER"
						},
						{
							"index": 8,
							"isGenerated": false,
							"manyRelationColumnRefs": [
								{
									"manyRelationIndex": 3,
									"oneApplication_Index": 1,
									"oneTableIndex": 0,
									"oneColumnIndex": 0,
									"sinceVersion": 1
								}
							],
							"name": "ORIGINAL_ACTOR_LID",
							"notNull": false,
							"propertyRefs": [
								{
									"index": 7
								}
							],
							"sinceVersion": 1,
							"type": "NUMBER"
						},
						{
							"index": 9,
							"isGenerated": false,
							"manyRelationColumnRefs": [],
							"name": "NAME",
							"notNull": true,
							"propertyRefs": [
								{
									"index": 9
								}
							],
							"sinceVersion": 1,
							"type": "STRING"
						}
					],
					"idColumnRefs": [
						{
							"index": 0
						},
						{
							"index": 1
						},
						{
							"index": 2
						}
					],
					"index": 0,
					"isLocal": false,
					"isAirEntity": true,
					"name": "Label",
					"properties": [
						{
							"index": 0,
							"isId": true,
							"name": "repository",
							"relationRef": {
								"index": 0
							},
							"sinceVersion": 1
						},
						{
							"index": 1,
							"isId": true,
							"name": "actor",
							"relationRef": {
								"index": 1
							},
							"sinceVersion": 1
						},
						{
							"columnRef": {
								"index": 2
							},
							"index": 2,
							"isId": true,
							"name": "_actorRecordId",
							"sinceVersion": 1
						},
						{
							"columnRef": {
								"index": 3
							},
							"index": 3,
							"isId": false,
							"name": "ageSuitability",
							"sinceVersion": 1
						},
						{
							"columnRef": {
								"index": 4
							},
							"index": 4,
							"isId": false,
							"name": "createdAt",
							"sinceVersion": 1
						},
						{
							"columnRef": {
								"index": 5
							},
							"index": 5,
							"isId": false,
							"name": "systemWideOperationId",
							"sinceVersion": 1
						},
						{
							"index": 6,
							"isId": false,
							"name": "originalRepository",
							"relationRef": {
								"index": 2
							},
							"sinceVersion": 1
						},
						{
							"index": 7,
							"isId": false,
							"name": "originalActor",
							"relationRef": {
								"index": 3
							},
							"sinceVersion": 1
						},
						{
							"columnRef": {
								"index": 6
							},
							"index": 8,
							"isId": false,
							"name": "originalActorRecordId",
							"sinceVersion": 1
						},
						{
							"columnRef": {
								"index": 9
							},
							"index": 9,
							"isId": false,
							"name": "name",
							"sinceVersion": 1
						}
					],
					"relations": [
						{
							"index": 0,
							"isId": true,
							"relationType": "MANY_TO_ONE",
							"propertyRef": {
								"index": 0
							},
							"relationTableIndex": 9,
							"relationTableApplication_Index": 1,
							"sinceVersion": 1
						},
						{
							"index": 1,
							"isId": true,
							"relationType": "MANY_TO_ONE",
							"propertyRef": {
								"index": 1
							},
							"relationTableIndex": 0,
							"relationTableApplication_Index": 1,
							"sinceVersion": 1
						},
						{
							"index": 2,
							"isId": false,
							"relationType": "MANY_TO_ONE",
							"propertyRef": {
								"index": 6
							},
							"relationTableIndex": 9,
							"relationTableApplication_Index": 1,
							"sinceVersion": 1
						},
						{
							"index": 3,
							"isId": false,
							"relationType": "MANY_TO_ONE",
							"propertyRef": {
								"index": 7
							},
							"relationTableIndex": 0,
							"relationTableApplication_Index": 1,
							"sinceVersion": 1
						}
					],
					"sinceVersion": 1,
					"tableConfig": {
						"name": "LABELS",
						"columnIndexes": []
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
									"oneApplication_Index": 1,
									"oneTableIndex": 9,
									"oneColumnIndex": 0,
									"sinceVersion": 1
								}
							],
							"name": "REPOSITORY_LID",
							"notNull": true,
							"propertyRefs": [
								{
									"index": 0
								}
							],
							"sinceVersion": 1,
							"type": "NUMBER"
						},
						{
							"index": 1,
							"isGenerated": false,
							"manyRelationColumnRefs": [
								{
									"manyRelationIndex": 1,
									"oneApplication_Index": 1,
									"oneTableIndex": 0,
									"oneColumnIndex": 0,
									"sinceVersion": 1
								}
							],
							"name": "ACTOR_LID",
							"notNull": true,
							"propertyRefs": [
								{
									"index": 1
								}
							],
							"sinceVersion": 1,
							"type": "NUMBER"
						},
						{
							"index": 2,
							"isGenerated": true,
							"manyRelationColumnRefs": [],
							"name": "ACTOR_RECORD_ID",
							"notNull": true,
							"propertyRefs": [
								{
									"index": 2
								}
							],
							"sinceVersion": 1,
							"type": "NUMBER"
						},
						{
							"index": 3,
							"isGenerated": false,
							"manyRelationColumnRefs": [],
							"name": "AGE_SUITABILITY",
							"notNull": true,
							"propertyRefs": [
								{
									"index": 3
								}
							],
							"sinceVersion": 1,
							"type": "NUMBER"
						},
						{
							"index": 4,
							"isGenerated": false,
							"manyRelationColumnRefs": [],
							"name": "CREATED_AT",
							"notNull": false,
							"propertyRefs": [
								{
									"index": 4
								}
							],
							"sinceVersion": 1,
							"type": "DATE"
						},
						{
							"index": 5,
							"isGenerated": false,
							"manyRelationColumnRefs": [],
							"name": "SYSTEM_WIDE_OPERATION_LID",
							"notNull": true,
							"propertyRefs": [
								{
									"index": 5
								}
							],
							"sinceVersion": 1,
							"type": "NUMBER"
						},
						{
							"index": 6,
							"isGenerated": false,
							"manyRelationColumnRefs": [],
							"name": "ORIGINAL_ACTOR_RECORD_ID",
							"notNull": false,
							"propertyRefs": [
								{
									"index": 8
								}
							],
							"sinceVersion": 1,
							"type": "NUMBER"
						},
						{
							"index": 7,
							"isGenerated": false,
							"manyRelationColumnRefs": [
								{
									"manyRelationIndex": 2,
									"oneApplication_Index": 1,
									"oneTableIndex": 9,
									"oneColumnIndex": 0,
									"sinceVersion": 1
								}
							],
							"name": "ORIGINAL_REPOSITORY_LID",
							"notNull": false,
							"propertyRefs": [
								{
									"index": 6
								}
							],
							"sinceVersion": 1,
							"type": "NUMBER"
						},
						{
							"index": 8,
							"isGenerated": false,
							"manyRelationColumnRefs": [
								{
									"manyRelationIndex": 3,
									"oneApplication_Index": 1,
									"oneTableIndex": 0,
									"oneColumnIndex": 0,
									"sinceVersion": 1
								}
							],
							"name": "ORIGINAL_ACTOR_LID",
							"notNull": false,
							"propertyRefs": [
								{
									"index": 7
								}
							],
							"sinceVersion": 1,
							"type": "NUMBER"
						},
						{
							"index": 9,
							"isGenerated": false,
							"manyRelationColumnRefs": [
								{
									"manyRelationIndex": 4,
									"oneApplication_Index": null,
									"oneTableIndex": 6,
									"oneRelationIndex": 9,
									"oneColumnIndex": 0,
									"sinceVersion": 1
								}
							],
							"name": "IDEAS_RID_1",
							"notNull": false,
							"propertyRefs": [
								{
									"index": 9
								}
							],
							"sinceVersion": 1,
							"type": "NUMBER"
						},
						{
							"index": 10,
							"isGenerated": false,
							"manyRelationColumnRefs": [
								{
									"manyRelationIndex": 4,
									"oneApplication_Index": null,
									"oneTableIndex": 6,
									"oneRelationIndex": 9,
									"oneColumnIndex": 1,
									"sinceVersion": 1
								}
							],
							"name": "IDEAS_AID_1",
							"notNull": false,
							"propertyRefs": [
								{
									"index": 9
								}
							],
							"sinceVersion": 1,
							"type": "NUMBER"
						},
						{
							"index": 11,
							"isGenerated": false,
							"manyRelationColumnRefs": [
								{
									"manyRelationIndex": 4,
									"oneApplication_Index": null,
									"oneTableIndex": 6,
									"oneRelationIndex": 9,
									"oneColumnIndex": 2,
									"sinceVersion": 1
								}
							],
							"name": "IDEAS_ARID_1",
							"notNull": false,
							"propertyRefs": [
								{
									"index": 9
								}
							],
							"sinceVersion": 1,
							"type": "NUMBER"
						},
						{
							"index": 12,
							"isGenerated": false,
							"manyRelationColumnRefs": [
								{
									"manyRelationIndex": 5,
									"oneApplication_Index": null,
									"oneTableIndex": 0,
									"oneColumnIndex": 0,
									"sinceVersion": 1
								}
							],
							"name": "LABELS_RID_1",
							"notNull": false,
							"propertyRefs": [
								{
									"index": 10
								}
							],
							"sinceVersion": 1,
							"type": "NUMBER"
						},
						{
							"index": 13,
							"isGenerated": false,
							"manyRelationColumnRefs": [
								{
									"manyRelationIndex": 5,
									"oneApplication_Index": null,
									"oneTableIndex": 0,
									"oneColumnIndex": 1,
									"sinceVersion": 1
								}
							],
							"name": "LABELS_AID_1",
							"notNull": false,
							"propertyRefs": [
								{
									"index": 10
								}
							],
							"sinceVersion": 1,
							"type": "NUMBER"
						},
						{
							"index": 14,
							"isGenerated": false,
							"manyRelationColumnRefs": [
								{
									"manyRelationIndex": 5,
									"oneApplication_Index": null,
									"oneTableIndex": 0,
									"oneColumnIndex": 2,
									"sinceVersion": 1
								}
							],
							"name": "LABELS_ARID_1",
							"notNull": false,
							"propertyRefs": [
								{
									"index": 10
								}
							],
							"sinceVersion": 1,
							"type": "NUMBER"
						}
					],
					"idColumnRefs": [
						{
							"index": 0
						},
						{
							"index": 1
						},
						{
							"index": 2
						}
					],
					"index": 1,
					"isLocal": false,
					"isAirEntity": true,
					"name": "IdeaLabel",
					"properties": [
						{
							"index": 0,
							"isId": true,
							"name": "repository",
							"relationRef": {
								"index": 0
							},
							"sinceVersion": 1
						},
						{
							"index": 1,
							"isId": true,
							"name": "actor",
							"relationRef": {
								"index": 1
							},
							"sinceVersion": 1
						},
						{
							"columnRef": {
								"index": 2
							},
							"index": 2,
							"isId": true,
							"name": "_actorRecordId",
							"sinceVersion": 1
						},
						{
							"columnRef": {
								"index": 3
							},
							"index": 3,
							"isId": false,
							"name": "ageSuitability",
							"sinceVersion": 1
						},
						{
							"columnRef": {
								"index": 4
							},
							"index": 4,
							"isId": false,
							"name": "createdAt",
							"sinceVersion": 1
						},
						{
							"columnRef": {
								"index": 5
							},
							"index": 5,
							"isId": false,
							"name": "systemWideOperationId",
							"sinceVersion": 1
						},
						{
							"index": 6,
							"isId": false,
							"name": "originalRepository",
							"relationRef": {
								"index": 2
							},
							"sinceVersion": 1
						},
						{
							"index": 7,
							"isId": false,
							"name": "originalActor",
							"relationRef": {
								"index": 3
							},
							"sinceVersion": 1
						},
						{
							"columnRef": {
								"index": 6
							},
							"index": 8,
							"isId": false,
							"name": "originalActorRecordId",
							"sinceVersion": 1
						},
						{
							"index": 9,
							"isId": false,
							"name": "idea",
							"relationRef": {
								"index": 4
							},
							"sinceVersion": 1
						},
						{
							"index": 10,
							"isId": false,
							"name": "label",
							"relationRef": {
								"index": 5
							},
							"sinceVersion": 1
						}
					],
					"relations": [
						{
							"index": 0,
							"isId": true,
							"relationType": "MANY_TO_ONE",
							"propertyRef": {
								"index": 0
							},
							"relationTableIndex": 9,
							"relationTableApplication_Index": 1,
							"sinceVersion": 1
						},
						{
							"index": 1,
							"isId": true,
							"relationType": "MANY_TO_ONE",
							"propertyRef": {
								"index": 1
							},
							"relationTableIndex": 0,
							"relationTableApplication_Index": 1,
							"sinceVersion": 1
						},
						{
							"index": 2,
							"isId": false,
							"relationType": "MANY_TO_ONE",
							"propertyRef": {
								"index": 6
							},
							"relationTableIndex": 9,
							"relationTableApplication_Index": 1,
							"sinceVersion": 1
						},
						{
							"index": 3,
							"isId": false,
							"relationType": "MANY_TO_ONE",
							"propertyRef": {
								"index": 7
							},
							"relationTableIndex": 0,
							"relationTableApplication_Index": 1,
							"sinceVersion": 1
						},
						{
							"index": 4,
							"isId": false,
							"relationType": "MANY_TO_ONE",
							"propertyRef": {
								"index": 9
							},
							"relationTableIndex": 6,
							"sinceVersion": 1
						},
						{
							"index": 5,
							"isId": false,
							"relationType": "MANY_TO_ONE",
							"propertyRef": {
								"index": 10
							},
							"relationTableIndex": 0,
							"sinceVersion": 1
						}
					],
					"sinceVersion": 1,
					"tableConfig": {
						"name": "IDEA_LABELS",
						"columnIndexes": []
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
									"oneApplication_Index": 1,
									"oneTableIndex": 9,
									"oneColumnIndex": 0,
									"sinceVersion": 1
								}
							],
							"name": "REPOSITORY_LID",
							"notNull": true,
							"propertyRefs": [
								{
									"index": 0
								}
							],
							"sinceVersion": 1,
							"type": "NUMBER"
						},
						{
							"index": 1,
							"isGenerated": false,
							"manyRelationColumnRefs": [
								{
									"manyRelationIndex": 1,
									"oneApplication_Index": 1,
									"oneTableIndex": 0,
									"oneColumnIndex": 0,
									"sinceVersion": 1
								}
							],
							"name": "ACTOR_LID",
							"notNull": true,
							"propertyRefs": [
								{
									"index": 1
								}
							],
							"sinceVersion": 1,
							"type": "NUMBER"
						},
						{
							"index": 2,
							"isGenerated": true,
							"manyRelationColumnRefs": [],
							"name": "ACTOR_RECORD_ID",
							"notNull": true,
							"propertyRefs": [
								{
									"index": 2
								}
							],
							"sinceVersion": 1,
							"type": "NUMBER"
						},
						{
							"index": 3,
							"isGenerated": false,
							"manyRelationColumnRefs": [],
							"name": "AGE_SUITABILITY",
							"notNull": true,
							"propertyRefs": [
								{
									"index": 3
								}
							],
							"sinceVersion": 1,
							"type": "NUMBER"
						},
						{
							"index": 4,
							"isGenerated": false,
							"manyRelationColumnRefs": [],
							"name": "CREATED_AT",
							"notNull": false,
							"propertyRefs": [
								{
									"index": 4
								}
							],
							"sinceVersion": 1,
							"type": "DATE"
						},
						{
							"index": 5,
							"isGenerated": false,
							"manyRelationColumnRefs": [],
							"name": "SYSTEM_WIDE_OPERATION_LID",
							"notNull": true,
							"propertyRefs": [
								{
									"index": 5
								}
							],
							"sinceVersion": 1,
							"type": "NUMBER"
						},
						{
							"index": 6,
							"isGenerated": false,
							"manyRelationColumnRefs": [],
							"name": "ORIGINAL_ACTOR_RECORD_ID",
							"notNull": false,
							"propertyRefs": [
								{
									"index": 8
								}
							],
							"sinceVersion": 1,
							"type": "NUMBER"
						},
						{
							"index": 7,
							"isGenerated": false,
							"manyRelationColumnRefs": [
								{
									"manyRelationIndex": 2,
									"oneApplication_Index": 1,
									"oneTableIndex": 9,
									"oneColumnIndex": 0,
									"sinceVersion": 1
								}
							],
							"name": "ORIGINAL_REPOSITORY_LID",
							"notNull": false,
							"propertyRefs": [
								{
									"index": 6
								}
							],
							"sinceVersion": 1,
							"type": "NUMBER"
						},
						{
							"index": 8,
							"isGenerated": false,
							"manyRelationColumnRefs": [
								{
									"manyRelationIndex": 3,
									"oneApplication_Index": 1,
									"oneTableIndex": 0,
									"oneColumnIndex": 0,
									"sinceVersion": 1
								}
							],
							"name": "ORIGINAL_ACTOR_LID",
							"notNull": false,
							"propertyRefs": [
								{
									"index": 7
								}
							],
							"sinceVersion": 1,
							"type": "NUMBER"
						},
						{
							"index": 9,
							"isGenerated": false,
							"manyRelationColumnRefs": [],
							"name": "URGENCY_RATING",
							"notNull": false,
							"propertyRefs": [
								{
									"index": 9
								}
							],
							"sinceVersion": 1,
							"type": "NUMBER"
						},
						{
							"index": 10,
							"isGenerated": false,
							"manyRelationColumnRefs": [
								{
									"manyRelationIndex": 4,
									"oneApplication_Index": null,
									"oneTableIndex": 6,
									"oneRelationIndex": 6,
									"oneColumnIndex": 0,
									"sinceVersion": 1
								}
							],
							"name": "IDEAS_RID_1",
							"notNull": false,
							"propertyRefs": [
								{
									"index": 10
								}
							],
							"sinceVersion": 1,
							"type": "NUMBER"
						},
						{
							"index": 11,
							"isGenerated": false,
							"manyRelationColumnRefs": [
								{
									"manyRelationIndex": 4,
									"oneApplication_Index": null,
									"oneTableIndex": 6,
									"oneRelationIndex": 6,
									"oneColumnIndex": 1,
									"sinceVersion": 1
								}
							],
							"name": "IDEAS_AID_1",
							"notNull": false,
							"propertyRefs": [
								{
									"index": 10
								}
							],
							"sinceVersion": 1,
							"type": "NUMBER"
						},
						{
							"index": 12,
							"isGenerated": false,
							"manyRelationColumnRefs": [
								{
									"manyRelationIndex": 4,
									"oneApplication_Index": null,
									"oneTableIndex": 6,
									"oneRelationIndex": 6,
									"oneColumnIndex": 2,
									"sinceVersion": 1
								}
							],
							"name": "IDEAS_ARID_1",
							"notNull": false,
							"propertyRefs": [
								{
									"index": 10
								}
							],
							"sinceVersion": 1,
							"type": "NUMBER"
						},
						{
							"index": 13,
							"isGenerated": false,
							"manyRelationColumnRefs": [
								{
									"manyRelationIndex": 5,
									"oneApplication_Index": null,
									"oneTableIndex": 4,
									"oneRelationIndex": 6,
									"oneColumnIndex": 0,
									"sinceVersion": 1
								}
							],
							"name": "SITUATION_IDEAS_RID_1",
							"notNull": false,
							"propertyRefs": [
								{
									"index": 11
								}
							],
							"sinceVersion": 1,
							"type": "NUMBER"
						},
						{
							"index": 14,
							"isGenerated": false,
							"manyRelationColumnRefs": [
								{
									"manyRelationIndex": 5,
									"oneApplication_Index": null,
									"oneTableIndex": 4,
									"oneRelationIndex": 6,
									"oneColumnIndex": 1,
									"sinceVersion": 1
								}
							],
							"name": "SITUATION_IDEAS_AID_1",
							"notNull": false,
							"propertyRefs": [
								{
									"index": 11
								}
							],
							"sinceVersion": 1,
							"type": "NUMBER"
						},
						{
							"index": 15,
							"isGenerated": false,
							"manyRelationColumnRefs": [
								{
									"manyRelationIndex": 5,
									"oneApplication_Index": null,
									"oneTableIndex": 4,
									"oneRelationIndex": 6,
									"oneColumnIndex": 2,
									"sinceVersion": 1
								}
							],
							"name": "SITUATION_IDEAS_ARID_1",
							"notNull": false,
							"propertyRefs": [
								{
									"index": 11
								}
							],
							"sinceVersion": 1,
							"type": "NUMBER"
						}
					],
					"idColumnRefs": [
						{
							"index": 0
						},
						{
							"index": 1
						},
						{
							"index": 2
						}
					],
					"index": 2,
					"isLocal": false,
					"isAirEntity": true,
					"name": "IdeaRating",
					"properties": [
						{
							"index": 0,
							"isId": true,
							"name": "repository",
							"relationRef": {
								"index": 0
							},
							"sinceVersion": 1
						},
						{
							"index": 1,
							"isId": true,
							"name": "actor",
							"relationRef": {
								"index": 1
							},
							"sinceVersion": 1
						},
						{
							"columnRef": {
								"index": 2
							},
							"index": 2,
							"isId": true,
							"name": "_actorRecordId",
							"sinceVersion": 1
						},
						{
							"columnRef": {
								"index": 3
							},
							"index": 3,
							"isId": false,
							"name": "ageSuitability",
							"sinceVersion": 1
						},
						{
							"columnRef": {
								"index": 4
							},
							"index": 4,
							"isId": false,
							"name": "createdAt",
							"sinceVersion": 1
						},
						{
							"columnRef": {
								"index": 5
							},
							"index": 5,
							"isId": false,
							"name": "systemWideOperationId",
							"sinceVersion": 1
						},
						{
							"index": 6,
							"isId": false,
							"name": "originalRepository",
							"relationRef": {
								"index": 2
							},
							"sinceVersion": 1
						},
						{
							"index": 7,
							"isId": false,
							"name": "originalActor",
							"relationRef": {
								"index": 3
							},
							"sinceVersion": 1
						},
						{
							"columnRef": {
								"index": 6
							},
							"index": 8,
							"isId": false,
							"name": "originalActorRecordId",
							"sinceVersion": 1
						},
						{
							"columnRef": {
								"index": 9
							},
							"index": 9,
							"isId": false,
							"name": "urgencyRating",
							"sinceVersion": 1
						},
						{
							"index": 10,
							"isId": false,
							"name": "idea",
							"relationRef": {
								"index": 4
							},
							"sinceVersion": 1
						},
						{
							"index": 11,
							"isId": false,
							"name": "situationIdea",
							"relationRef": {
								"index": 5
							},
							"sinceVersion": 1
						}
					],
					"relations": [
						{
							"index": 0,
							"isId": true,
							"relationType": "MANY_TO_ONE",
							"propertyRef": {
								"index": 0
							},
							"relationTableIndex": 9,
							"relationTableApplication_Index": 1,
							"sinceVersion": 1
						},
						{
							"index": 1,
							"isId": true,
							"relationType": "MANY_TO_ONE",
							"propertyRef": {
								"index": 1
							},
							"relationTableIndex": 0,
							"relationTableApplication_Index": 1,
							"sinceVersion": 1
						},
						{
							"index": 2,
							"isId": false,
							"relationType": "MANY_TO_ONE",
							"propertyRef": {
								"index": 6
							},
							"relationTableIndex": 9,
							"relationTableApplication_Index": 1,
							"sinceVersion": 1
						},
						{
							"index": 3,
							"isId": false,
							"relationType": "MANY_TO_ONE",
							"propertyRef": {
								"index": 7
							},
							"relationTableIndex": 0,
							"relationTableApplication_Index": 1,
							"sinceVersion": 1
						},
						{
							"index": 4,
							"isId": false,
							"relationType": "MANY_TO_ONE",
							"propertyRef": {
								"index": 10
							},
							"relationTableIndex": 6,
							"sinceVersion": 1
						},
						{
							"index": 5,
							"isId": false,
							"manyToOneElems": {
								"optional": true
							},
							"relationType": "MANY_TO_ONE",
							"propertyRef": {
								"index": 11
							},
							"relationTableIndex": 4,
							"sinceVersion": 1
						}
					],
					"sinceVersion": 1,
					"tableConfig": {
						"name": "IDEA_RATINGS",
						"columnIndexes": []
					},
					"operations": {}
				},
				{
					"columns": [
						{
							"index": 0,
							"isGenerated": false,
							"manyRelationColumnRefs": [
								{
									"manyRelationIndex": 0,
									"oneApplication_Index": 1,
									"oneTableIndex": 9,
									"oneColumnIndex": 0,
									"sinceVersion": 1
								}
							],
							"name": "REPOSITORY_LID",
							"notNull": true,
							"propertyRefs": [
								{
									"index": 0
								}
							],
							"sinceVersion": 1,
							"type": "NUMBER"
						},
						{
							"index": 1,
							"isGenerated": false,
							"manyRelationColumnRefs": [
								{
									"manyRelationIndex": 1,
									"oneApplication_Index": 1,
									"oneTableIndex": 0,
									"oneColumnIndex": 0,
									"sinceVersion": 1
								}
							],
							"name": "ACTOR_LID",
							"notNull": true,
							"propertyRefs": [
								{
									"index": 1
								}
							],
							"sinceVersion": 1,
							"type": "NUMBER"
						},
						{
							"index": 2,
							"isGenerated": true,
							"manyRelationColumnRefs": [],
							"name": "ACTOR_RECORD_ID",
							"notNull": true,
							"propertyRefs": [
								{
									"index": 2
								}
							],
							"sinceVersion": 1,
							"type": "NUMBER"
						},
						{
							"index": 3,
							"isGenerated": false,
							"manyRelationColumnRefs": [],
							"name": "AGE_SUITABILITY",
							"notNull": true,
							"propertyRefs": [
								{
									"index": 3
								}
							],
							"sinceVersion": 1,
							"type": "NUMBER"
						},
						{
							"index": 4,
							"isGenerated": false,
							"manyRelationColumnRefs": [],
							"name": "CREATED_AT",
							"notNull": false,
							"propertyRefs": [
								{
									"index": 4
								}
							],
							"sinceVersion": 1,
							"type": "DATE"
						},
						{
							"index": 5,
							"isGenerated": false,
							"manyRelationColumnRefs": [],
							"name": "SYSTEM_WIDE_OPERATION_LID",
							"notNull": true,
							"propertyRefs": [
								{
									"index": 5
								}
							],
							"sinceVersion": 1,
							"type": "NUMBER"
						},
						{
							"index": 6,
							"isGenerated": false,
							"manyRelationColumnRefs": [],
							"name": "ORIGINAL_ACTOR_RECORD_ID",
							"notNull": false,
							"propertyRefs": [
								{
									"index": 8
								}
							],
							"sinceVersion": 1,
							"type": "NUMBER"
						},
						{
							"index": 7,
							"isGenerated": false,
							"manyRelationColumnRefs": [
								{
									"manyRelationIndex": 2,
									"oneApplication_Index": 1,
									"oneTableIndex": 9,
									"oneColumnIndex": 0,
									"sinceVersion": 1
								}
							],
							"name": "ORIGINAL_REPOSITORY_LID",
							"notNull": false,
							"propertyRefs": [
								{
									"index": 6
								}
							],
							"sinceVersion": 1,
							"type": "NUMBER"
						},
						{
							"index": 8,
							"isGenerated": false,
							"manyRelationColumnRefs": [
								{
									"manyRelationIndex": 3,
									"oneApplication_Index": 1,
									"oneTableIndex": 0,
									"oneColumnIndex": 0,
									"sinceVersion": 1
								}
							],
							"name": "ORIGINAL_ACTOR_LID",
							"notNull": false,
							"propertyRefs": [
								{
									"index": 7
								}
							],
							"sinceVersion": 1,
							"type": "NUMBER"
						},
						{
							"index": 9,
							"isGenerated": false,
							"manyRelationColumnRefs": [],
							"name": "FACTOR_COORDINATE_AXIS",
							"notNull": true,
							"propertyRefs": [
								{
									"index": 9
								}
							],
							"sinceVersion": 1,
							"type": "STRING"
						},
						{
							"index": 10,
							"isGenerated": false,
							"manyRelationColumnRefs": [],
							"name": "POSITION_ORIENTATION",
							"notNull": true,
							"propertyRefs": [
								{
									"index": 10
								}
							],
							"sinceVersion": 1,
							"type": "NUMBER"
						},
						{
							"index": 11,
							"isGenerated": false,
							"manyRelationColumnRefs": [],
							"name": "FACTOR_NUMBER",
							"notNull": true,
							"propertyRefs": [
								{
									"index": 11
								}
							],
							"sinceVersion": 1,
							"type": "NUMBER"
						},
						{
							"index": 12,
							"isGenerated": false,
							"manyRelationColumnRefs": [],
							"name": "COLOR_BLUE",
							"notNull": true,
							"propertyRefs": [
								{
									"index": 12
								}
							],
							"sinceVersion": 1,
							"type": "NUMBER"
						},
						{
							"index": 13,
							"isGenerated": false,
							"manyRelationColumnRefs": [],
							"name": "COLOR_GREEN",
							"notNull": true,
							"propertyRefs": [
								{
									"index": 13
								}
							],
							"sinceVersion": 1,
							"type": "NUMBER"
						},
						{
							"index": 14,
							"isGenerated": false,
							"manyRelationColumnRefs": [],
							"name": "COLOR_RED",
							"notNull": true,
							"propertyRefs": [
								{
									"index": 14
								}
							],
							"sinceVersion": 1,
							"type": "NUMBER"
						},
						{
							"index": 15,
							"isGenerated": false,
							"manyRelationColumnRefs": [],
							"name": "OUTCOME_ORDINAL",
							"notNull": true,
							"propertyRefs": [
								{
									"index": 15
								}
							],
							"sinceVersion": 1,
							"type": "STRING"
						},
						{
							"index": 16,
							"isGenerated": false,
							"manyRelationColumnRefs": [
								{
									"manyRelationIndex": 4,
									"oneApplication_Index": null,
									"oneTableIndex": 4,
									"oneRelationIndex": 8,
									"oneColumnIndex": 0,
									"sinceVersion": 1
								}
							],
							"name": "SITUATION_IDEAS_RID_1",
							"notNull": false,
							"propertyRefs": [
								{
									"index": 16
								}
							],
							"sinceVersion": 1,
							"type": "NUMBER"
						},
						{
							"index": 17,
							"isGenerated": false,
							"manyRelationColumnRefs": [
								{
									"manyRelationIndex": 4,
									"oneApplication_Index": null,
									"oneTableIndex": 4,
									"oneRelationIndex": 8,
									"oneColumnIndex": 1,
									"sinceVersion": 1
								}
							],
							"name": "SITUATION_IDEAS_AID_1",
							"notNull": false,
							"propertyRefs": [
								{
									"index": 16
								}
							],
							"sinceVersion": 1,
							"type": "NUMBER"
						},
						{
							"index": 18,
							"isGenerated": false,
							"manyRelationColumnRefs": [
								{
									"manyRelationIndex": 4,
									"oneApplication_Index": null,
									"oneTableIndex": 4,
									"oneRelationIndex": 8,
									"oneColumnIndex": 2,
									"sinceVersion": 1
								}
							],
							"name": "SITUATION_IDEAS_ARID_1",
							"notNull": false,
							"propertyRefs": [
								{
									"index": 16
								}
							],
							"sinceVersion": 1,
							"type": "NUMBER"
						},
						{
							"index": 19,
							"isGenerated": false,
							"manyRelationColumnRefs": [
								{
									"manyRelationIndex": 5,
									"oneApplication_Index": null,
									"oneTableIndex": 6,
									"oneRelationIndex": 8,
									"oneColumnIndex": 0,
									"sinceVersion": 1
								}
							],
							"name": "IDEAS_RID_1",
							"notNull": false,
							"propertyRefs": [
								{
									"index": 17
								}
							],
							"sinceVersion": 1,
							"type": "NUMBER"
						},
						{
							"index": 20,
							"isGenerated": false,
							"manyRelationColumnRefs": [
								{
									"manyRelationIndex": 5,
									"oneApplication_Index": null,
									"oneTableIndex": 6,
									"oneRelationIndex": 8,
									"oneColumnIndex": 1,
									"sinceVersion": 1
								}
							],
							"name": "IDEAS_AID_1",
							"notNull": false,
							"propertyRefs": [
								{
									"index": 17
								}
							],
							"sinceVersion": 1,
							"type": "NUMBER"
						},
						{
							"index": 21,
							"isGenerated": false,
							"manyRelationColumnRefs": [
								{
									"manyRelationIndex": 5,
									"oneApplication_Index": null,
									"oneTableIndex": 6,
									"oneRelationIndex": 8,
									"oneColumnIndex": 2,
									"sinceVersion": 1
								}
							],
							"name": "IDEAS_ARID_1",
							"notNull": false,
							"propertyRefs": [
								{
									"index": 17
								}
							],
							"sinceVersion": 1,
							"type": "NUMBER"
						},
						{
							"index": 22,
							"isGenerated": false,
							"manyRelationColumnRefs": [
								{
									"manyRelationIndex": 6,
									"oneApplication_Index": null,
									"oneTableIndex": 9,
									"oneColumnIndex": 0,
									"sinceVersion": 1
								}
							],
							"name": "FACTORS_RID_1",
							"notNull": false,
							"propertyRefs": [
								{
									"index": 18
								}
							],
							"sinceVersion": 1,
							"type": "NUMBER"
						},
						{
							"index": 23,
							"isGenerated": false,
							"manyRelationColumnRefs": [
								{
									"manyRelationIndex": 6,
									"oneApplication_Index": null,
									"oneTableIndex": 9,
									"oneColumnIndex": 1,
									"sinceVersion": 1
								}
							],
							"name": "FACTORS_AID_1",
							"notNull": false,
							"propertyRefs": [
								{
									"index": 18
								}
							],
							"sinceVersion": 1,
							"type": "NUMBER"
						},
						{
							"index": 24,
							"isGenerated": false,
							"manyRelationColumnRefs": [
								{
									"manyRelationIndex": 6,
									"oneApplication_Index": null,
									"oneTableIndex": 9,
									"oneColumnIndex": 2,
									"sinceVersion": 1
								}
							],
							"name": "FACTORS_ARID_1",
							"notNull": false,
							"propertyRefs": [
								{
									"index": 18
								}
							],
							"sinceVersion": 1,
							"type": "NUMBER"
						},
						{
							"index": 25,
							"isGenerated": false,
							"manyRelationColumnRefs": [
								{
									"manyRelationIndex": 7,
									"oneApplication_Index": null,
									"oneTableIndex": 10,
									"oneColumnIndex": 0,
									"sinceVersion": 1
								}
							],
							"name": "POSITIONS_RID_1",
							"notNull": false,
							"propertyRefs": [
								{
									"index": 19
								}
							],
							"sinceVersion": 1,
							"type": "NUMBER"
						},
						{
							"index": 26,
							"isGenerated": false,
							"manyRelationColumnRefs": [
								{
									"manyRelationIndex": 7,
									"oneApplication_Index": null,
									"oneTableIndex": 10,
									"oneColumnIndex": 1,
									"sinceVersion": 1
								}
							],
							"name": "POSITIONS_AID_1",
							"notNull": false,
							"propertyRefs": [
								{
									"index": 19
								}
							],
							"sinceVersion": 1,
							"type": "NUMBER"
						},
						{
							"index": 27,
							"isGenerated": false,
							"manyRelationColumnRefs": [
								{
									"manyRelationIndex": 7,
									"oneApplication_Index": null,
									"oneTableIndex": 10,
									"oneColumnIndex": 2,
									"sinceVersion": 1
								}
							],
							"name": "POSITIONS_ARID_1",
							"notNull": false,
							"propertyRefs": [
								{
									"index": 19
								}
							],
							"sinceVersion": 1,
							"type": "NUMBER"
						}
					],
					"idColumnRefs": [
						{
							"index": 0
						},
						{
							"index": 1
						},
						{
							"index": 2
						}
					],
					"index": 3,
					"isLocal": false,
					"isAirEntity": true,
					"name": "Reason",
					"properties": [
						{
							"index": 0,
							"isId": true,
							"name": "repository",
							"relationRef": {
								"index": 0
							},
							"sinceVersion": 1
						},
						{
							"index": 1,
							"isId": true,
							"name": "actor",
							"relationRef": {
								"index": 1
							},
							"sinceVersion": 1
						},
						{
							"columnRef": {
								"index": 2
							},
							"index": 2,
							"isId": true,
							"name": "_actorRecordId",
							"sinceVersion": 1
						},
						{
							"columnRef": {
								"index": 3
							},
							"index": 3,
							"isId": false,
							"name": "ageSuitability",
							"sinceVersion": 1
						},
						{
							"columnRef": {
								"index": 4
							},
							"index": 4,
							"isId": false,
							"name": "createdAt",
							"sinceVersion": 1
						},
						{
							"columnRef": {
								"index": 5
							},
							"index": 5,
							"isId": false,
							"name": "systemWideOperationId",
							"sinceVersion": 1
						},
						{
							"index": 6,
							"isId": false,
							"name": "originalRepository",
							"relationRef": {
								"index": 2
							},
							"sinceVersion": 1
						},
						{
							"index": 7,
							"isId": false,
							"name": "originalActor",
							"relationRef": {
								"index": 3
							},
							"sinceVersion": 1
						},
						{
							"columnRef": {
								"index": 6
							},
							"index": 8,
							"isId": false,
							"name": "originalActorRecordId",
							"sinceVersion": 1
						},
						{
							"columnRef": {
								"index": 9
							},
							"index": 9,
							"isId": false,
							"name": "axis",
							"sinceVersion": 1
						},
						{
							"columnRef": {
								"index": 10
							},
							"index": 10,
							"isId": false,
							"name": "dir",
							"sinceVersion": 1
						},
						{
							"columnRef": {
								"index": 11
							},
							"index": 11,
							"isId": false,
							"name": "factorNumber",
							"sinceVersion": 1
						},
						{
							"columnRef": {
								"index": 12
							},
							"index": 12,
							"isId": false,
							"name": "blue",
							"sinceVersion": 1
						},
						{
							"columnRef": {
								"index": 13
							},
							"index": 13,
							"isId": false,
							"name": "green",
							"sinceVersion": 1
						},
						{
							"columnRef": {
								"index": 14
							},
							"index": 14,
							"isId": false,
							"name": "red",
							"sinceVersion": 1
						},
						{
							"columnRef": {
								"index": 15
							},
							"index": 15,
							"isId": false,
							"name": "outcomeOrdinal",
							"sinceVersion": 1
						},
						{
							"index": 16,
							"isId": false,
							"name": "situationIdea",
							"relationRef": {
								"index": 4
							},
							"sinceVersion": 1
						},
						{
							"index": 17,
							"isId": false,
							"name": "idea",
							"relationRef": {
								"index": 5
							},
							"sinceVersion": 1
						},
						{
							"index": 18,
							"isId": false,
							"name": "factor",
							"relationRef": {
								"index": 6
							},
							"sinceVersion": 1
						},
						{
							"index": 19,
							"isId": false,
							"name": "position",
							"relationRef": {
								"index": 7
							},
							"sinceVersion": 1
						}
					],
					"relations": [
						{
							"index": 0,
							"isId": true,
							"relationType": "MANY_TO_ONE",
							"propertyRef": {
								"index": 0
							},
							"relationTableIndex": 9,
							"relationTableApplication_Index": 1,
							"sinceVersion": 1
						},
						{
							"index": 1,
							"isId": true,
							"relationType": "MANY_TO_ONE",
							"propertyRef": {
								"index": 1
							},
							"relationTableIndex": 0,
							"relationTableApplication_Index": 1,
							"sinceVersion": 1
						},
						{
							"index": 2,
							"isId": false,
							"relationType": "MANY_TO_ONE",
							"propertyRef": {
								"index": 6
							},
							"relationTableIndex": 9,
							"relationTableApplication_Index": 1,
							"sinceVersion": 1
						},
						{
							"index": 3,
							"isId": false,
							"relationType": "MANY_TO_ONE",
							"propertyRef": {
								"index": 7
							},
							"relationTableIndex": 0,
							"relationTableApplication_Index": 1,
							"sinceVersion": 1
						},
						{
							"index": 4,
							"isId": false,
							"manyToOneElems": {
								"optional": true
							},
							"relationType": "MANY_TO_ONE",
							"propertyRef": {
								"index": 16
							},
							"relationTableIndex": 4,
							"sinceVersion": 1
						},
						{
							"index": 5,
							"isId": false,
							"relationType": "MANY_TO_ONE",
							"propertyRef": {
								"index": 17
							},
							"relationTableIndex": 6,
							"sinceVersion": 1
						},
						{
							"index": 6,
							"isId": false,
							"relationType": "MANY_TO_ONE",
							"propertyRef": {
								"index": 18
							},
							"relationTableIndex": 9,
							"sinceVersion": 1
						},
						{
							"index": 7,
							"isId": false,
							"relationType": "MANY_TO_ONE",
							"propertyRef": {
								"index": 19
							},
							"relationTableIndex": 10,
							"sinceVersion": 1
						}
					],
					"sinceVersion": 1,
					"tableConfig": {
						"name": "REASONS",
						"columnIndexes": []
					},
					"operations": {}
				},
				{
					"columns": [
						{
							"index": 0,
							"isGenerated": false,
							"manyRelationColumnRefs": [
								{
									"manyRelationIndex": 0,
									"oneApplication_Index": 1,
									"oneTableIndex": 9,
									"oneColumnIndex": 0,
									"sinceVersion": 1
								}
							],
							"name": "REPOSITORY_LID",
							"notNull": true,
							"propertyRefs": [
								{
									"index": 0
								}
							],
							"sinceVersion": 1,
							"type": "NUMBER"
						},
						{
							"index": 1,
							"isGenerated": false,
							"manyRelationColumnRefs": [
								{
									"manyRelationIndex": 1,
									"oneApplication_Index": 1,
									"oneTableIndex": 0,
									"oneColumnIndex": 0,
									"sinceVersion": 1
								}
							],
							"name": "ACTOR_LID",
							"notNull": true,
							"propertyRefs": [
								{
									"index": 1
								}
							],
							"sinceVersion": 1,
							"type": "NUMBER"
						},
						{
							"index": 2,
							"isGenerated": true,
							"manyRelationColumnRefs": [],
							"name": "ACTOR_RECORD_ID",
							"notNull": true,
							"propertyRefs": [
								{
									"index": 2
								}
							],
							"sinceVersion": 1,
							"type": "NUMBER"
						},
						{
							"index": 3,
							"isGenerated": false,
							"manyRelationColumnRefs": [],
							"name": "AGE_SUITABILITY",
							"notNull": true,
							"propertyRefs": [
								{
									"index": 3
								}
							],
							"sinceVersion": 1,
							"type": "NUMBER"
						},
						{
							"index": 4,
							"isGenerated": false,
							"manyRelationColumnRefs": [],
							"name": "CREATED_AT",
							"notNull": false,
							"propertyRefs": [
								{
									"index": 4
								}
							],
							"sinceVersion": 1,
							"type": "DATE"
						},
						{
							"index": 5,
							"isGenerated": false,
							"manyRelationColumnRefs": [],
							"name": "SYSTEM_WIDE_OPERATION_LID",
							"notNull": true,
							"propertyRefs": [
								{
									"index": 5
								}
							],
							"sinceVersion": 1,
							"type": "NUMBER"
						},
						{
							"index": 6,
							"isGenerated": false,
							"manyRelationColumnRefs": [],
							"name": "ORIGINAL_ACTOR_RECORD_ID",
							"notNull": false,
							"propertyRefs": [
								{
									"index": 8
								}
							],
							"sinceVersion": 1,
							"type": "NUMBER"
						},
						{
							"index": 7,
							"isGenerated": false,
							"manyRelationColumnRefs": [
								{
									"manyRelationIndex": 2,
									"oneApplication_Index": 1,
									"oneTableIndex": 9,
									"oneColumnIndex": 0,
									"sinceVersion": 1
								}
							],
							"name": "ORIGINAL_REPOSITORY_LID",
							"notNull": false,
							"propertyRefs": [
								{
									"index": 6
								}
							],
							"sinceVersion": 1,
							"type": "NUMBER"
						},
						{
							"index": 8,
							"isGenerated": false,
							"manyRelationColumnRefs": [
								{
									"manyRelationIndex": 3,
									"oneApplication_Index": 1,
									"oneTableIndex": 0,
									"oneColumnIndex": 0,
									"sinceVersion": 1
								}
							],
							"name": "ORIGINAL_ACTOR_LID",
							"notNull": false,
							"propertyRefs": [
								{
									"index": 7
								}
							],
							"sinceVersion": 1,
							"type": "NUMBER"
						},
						{
							"index": 9,
							"isGenerated": false,
							"manyRelationColumnRefs": [],
							"name": "AGREEMENT_SHARE_TOTAL",
							"notNull": false,
							"propertyRefs": [
								{
									"index": 9
								}
							],
							"sinceVersion": 1,
							"type": "NUMBER"
						},
						{
							"index": 10,
							"isGenerated": false,
							"manyRelationColumnRefs": [],
							"name": "NUMBER_OF_AGREEMENTS",
							"notNull": false,
							"propertyRefs": [
								{
									"index": 10
								}
							],
							"sinceVersion": 1,
							"type": "NUMBER"
						},
						{
							"index": 11,
							"isGenerated": false,
							"manyRelationColumnRefs": [],
							"name": "URGENCY_TOTAL",
							"notNull": false,
							"propertyRefs": [
								{
									"index": 11
								}
							],
							"sinceVersion": 1,
							"type": "NUMBER"
						},
						{
							"index": 12,
							"isGenerated": false,
							"manyRelationColumnRefs": [],
							"name": "NUMBER_OF_URGENCY_RATINGS",
							"notNull": false,
							"propertyRefs": [
								{
									"index": 12
								}
							],
							"sinceVersion": 1,
							"type": "NUMBER"
						},
						{
							"index": 13,
							"isGenerated": false,
							"manyRelationColumnRefs": [],
							"name": "NUMBER_OF_REASONS",
							"notNull": false,
							"propertyRefs": [
								{
									"index": 13
								}
							],
							"sinceVersion": 1,
							"type": "NUMBER"
						},
						{
							"index": 14,
							"isGenerated": false,
							"manyRelationColumnRefs": [
								{
									"manyRelationIndex": 4,
									"oneApplication_Index": null,
									"oneTableIndex": 6,
									"oneRelationIndex": 10,
									"oneColumnIndex": 0,
									"sinceVersion": 1
								}
							],
							"name": "IDEAS_RID_1",
							"notNull": false,
							"propertyRefs": [
								{
									"index": 14
								}
							],
							"sinceVersion": 1,
							"type": "NUMBER"
						},
						{
							"index": 15,
							"isGenerated": false,
							"manyRelationColumnRefs": [
								{
									"manyRelationIndex": 4,
									"oneApplication_Index": null,
									"oneTableIndex": 6,
									"oneRelationIndex": 10,
									"oneColumnIndex": 1,
									"sinceVersion": 1
								}
							],
							"name": "IDEAS_AID_1",
							"notNull": false,
							"propertyRefs": [
								{
									"index": 14
								}
							],
							"sinceVersion": 1,
							"type": "NUMBER"
						},
						{
							"index": 16,
							"isGenerated": false,
							"manyRelationColumnRefs": [
								{
									"manyRelationIndex": 4,
									"oneApplication_Index": null,
									"oneTableIndex": 6,
									"oneRelationIndex": 10,
									"oneColumnIndex": 2,
									"sinceVersion": 1
								}
							],
							"name": "IDEAS_ARID_1",
							"notNull": false,
							"propertyRefs": [
								{
									"index": 14
								}
							],
							"sinceVersion": 1,
							"type": "NUMBER"
						},
						{
							"index": 17,
							"isGenerated": false,
							"manyRelationColumnRefs": [
								{
									"manyRelationIndex": 5,
									"oneApplication_Index": 0,
									"oneTableIndex": 3,
									"oneColumnIndex": 0,
									"sinceVersion": 1
								}
							],
							"name": "SITUATIONS_RID_1",
							"notNull": false,
							"propertyRefs": [
								{
									"index": 15
								}
							],
							"sinceVersion": 1,
							"type": "NUMBER"
						},
						{
							"index": 18,
							"isGenerated": false,
							"manyRelationColumnRefs": [
								{
									"manyRelationIndex": 5,
									"oneApplication_Index": 0,
									"oneTableIndex": 3,
									"oneColumnIndex": 1,
									"sinceVersion": 1
								}
							],
							"name": "SITUATIONS_AID_1",
							"notNull": false,
							"propertyRefs": [
								{
									"index": 15
								}
							],
							"sinceVersion": 1,
							"type": "NUMBER"
						},
						{
							"index": 19,
							"isGenerated": false,
							"manyRelationColumnRefs": [
								{
									"manyRelationIndex": 5,
									"oneApplication_Index": 0,
									"oneTableIndex": 3,
									"oneColumnIndex": 2,
									"sinceVersion": 1
								}
							],
							"name": "SITUATIONS_ARID_1",
							"notNull": false,
							"propertyRefs": [
								{
									"index": 15
								}
							],
							"sinceVersion": 1,
							"type": "NUMBER"
						}
					],
					"idColumnRefs": [
						{
							"index": 0
						},
						{
							"index": 1
						},
						{
							"index": 2
						}
					],
					"index": 4,
					"isLocal": false,
					"isAirEntity": true,
					"name": "SituationIdea",
					"properties": [
						{
							"index": 0,
							"isId": true,
							"name": "repository",
							"relationRef": {
								"index": 0
							},
							"sinceVersion": 1
						},
						{
							"index": 1,
							"isId": true,
							"name": "actor",
							"relationRef": {
								"index": 1
							},
							"sinceVersion": 1
						},
						{
							"columnRef": {
								"index": 2
							},
							"index": 2,
							"isId": true,
							"name": "_actorRecordId",
							"sinceVersion": 1
						},
						{
							"columnRef": {
								"index": 3
							},
							"index": 3,
							"isId": false,
							"name": "ageSuitability",
							"sinceVersion": 1
						},
						{
							"columnRef": {
								"index": 4
							},
							"index": 4,
							"isId": false,
							"name": "createdAt",
							"sinceVersion": 1
						},
						{
							"columnRef": {
								"index": 5
							},
							"index": 5,
							"isId": false,
							"name": "systemWideOperationId",
							"sinceVersion": 1
						},
						{
							"index": 6,
							"isId": false,
							"name": "originalRepository",
							"relationRef": {
								"index": 2
							},
							"sinceVersion": 1
						},
						{
							"index": 7,
							"isId": false,
							"name": "originalActor",
							"relationRef": {
								"index": 3
							},
							"sinceVersion": 1
						},
						{
							"columnRef": {
								"index": 6
							},
							"index": 8,
							"isId": false,
							"name": "originalActorRecordId",
							"sinceVersion": 1
						},
						{
							"columnRef": {
								"index": 9
							},
							"index": 9,
							"isId": false,
							"name": "agreementShareTotal",
							"sinceVersion": 1
						},
						{
							"columnRef": {
								"index": 10
							},
							"index": 10,
							"isId": false,
							"name": "numberOfAgreements",
							"sinceVersion": 1
						},
						{
							"columnRef": {
								"index": 11
							},
							"index": 11,
							"isId": false,
							"name": "urgencyTotal",
							"sinceVersion": 1
						},
						{
							"columnRef": {
								"index": 12
							},
							"index": 12,
							"isId": false,
							"name": "numberOfUrgencyRatings",
							"sinceVersion": 1
						},
						{
							"columnRef": {
								"index": 13
							},
							"index": 13,
							"isId": false,
							"name": "numberOfReasons",
							"sinceVersion": 1
						},
						{
							"index": 14,
							"isId": false,
							"name": "idea",
							"relationRef": {
								"index": 4
							},
							"sinceVersion": 1
						},
						{
							"index": 15,
							"isId": false,
							"name": "situation",
							"relationRef": {
								"index": 5
							},
							"sinceVersion": 1
						},
						{
							"index": 16,
							"isId": false,
							"name": "ideaRatings",
							"relationRef": {
								"index": 6
							},
							"sinceVersion": 1
						},
						{
							"index": 17,
							"isId": false,
							"name": "agreements",
							"relationRef": {
								"index": 7
							},
							"sinceVersion": 1
						},
						{
							"index": 18,
							"isId": false,
							"name": "reasons",
							"relationRef": {
								"index": 8
							},
							"sinceVersion": 1
						}
					],
					"relations": [
						{
							"index": 0,
							"isId": true,
							"relationType": "MANY_TO_ONE",
							"propertyRef": {
								"index": 0
							},
							"relationTableIndex": 9,
							"relationTableApplication_Index": 1,
							"sinceVersion": 1
						},
						{
							"index": 1,
							"isId": true,
							"relationType": "MANY_TO_ONE",
							"propertyRef": {
								"index": 1
							},
							"relationTableIndex": 0,
							"relationTableApplication_Index": 1,
							"sinceVersion": 1
						},
						{
							"index": 2,
							"isId": false,
							"relationType": "MANY_TO_ONE",
							"propertyRef": {
								"index": 6
							},
							"relationTableIndex": 9,
							"relationTableApplication_Index": 1,
							"sinceVersion": 1
						},
						{
							"index": 3,
							"isId": false,
							"relationType": "MANY_TO_ONE",
							"propertyRef": {
								"index": 7
							},
							"relationTableIndex": 0,
							"relationTableApplication_Index": 1,
							"sinceVersion": 1
						},
						{
							"index": 4,
							"isId": false,
							"relationType": "MANY_TO_ONE",
							"propertyRef": {
								"index": 14
							},
							"relationTableIndex": 6,
							"sinceVersion": 1
						},
						{
							"index": 5,
							"isId": false,
							"relationType": "MANY_TO_ONE",
							"propertyRef": {
								"index": 15
							},
							"relationTableIndex": 3,
							"relationTableApplication_Index": 0,
							"sinceVersion": 1
						},
						{
							"index": 6,
							"isId": false,
							"oneToManyElems": {
								"mappedBy": "situationIdea"
							},
							"relationType": "ONE_TO_MANY",
							"propertyRef": {
								"index": 16
							},
							"relationTableIndex": 2,
							"sinceVersion": 1
						},
						{
							"index": 7,
							"isId": false,
							"oneToManyElems": {
								"mappedBy": "situationIdea"
							},
							"relationType": "ONE_TO_MANY",
							"propertyRef": {
								"index": 17
							},
							"relationTableIndex": 8,
							"sinceVersion": 1
						},
						{
							"index": 8,
							"isId": false,
							"oneToManyElems": {
								"mappedBy": "situationIdea"
							},
							"relationType": "ONE_TO_MANY",
							"propertyRef": {
								"index": 18
							},
							"relationTableIndex": 3,
							"sinceVersion": 1
						}
					],
					"sinceVersion": 1,
					"tableConfig": {
						"name": "SITUATION_IDEAS",
						"columnIndexes": []
					},
					"operations": {}
				},
				{
					"columns": [
						{
							"index": 0,
							"isGenerated": false,
							"manyRelationColumnRefs": [
								{
									"manyRelationIndex": 0,
									"oneApplication_Index": 1,
									"oneTableIndex": 9,
									"oneColumnIndex": 0,
									"sinceVersion": 1
								}
							],
							"name": "REPOSITORY_LID",
							"notNull": true,
							"propertyRefs": [
								{
									"index": 0
								}
							],
							"sinceVersion": 1,
							"type": "NUMBER"
						},
						{
							"index": 1,
							"isGenerated": false,
							"manyRelationColumnRefs": [
								{
									"manyRelationIndex": 1,
									"oneApplication_Index": 1,
									"oneTableIndex": 0,
									"oneColumnIndex": 0,
									"sinceVersion": 1
								}
							],
							"name": "ACTOR_LID",
							"notNull": true,
							"propertyRefs": [
								{
									"index": 1
								}
							],
							"sinceVersion": 1,
							"type": "NUMBER"
						},
						{
							"index": 2,
							"isGenerated": true,
							"manyRelationColumnRefs": [],
							"name": "ACTOR_RECORD_ID",
							"notNull": true,
							"propertyRefs": [
								{
									"index": 2
								}
							],
							"sinceVersion": 1,
							"type": "NUMBER"
						},
						{
							"index": 3,
							"isGenerated": false,
							"manyRelationColumnRefs": [],
							"name": "AGE_SUITABILITY",
							"notNull": true,
							"propertyRefs": [
								{
									"index": 3
								}
							],
							"sinceVersion": 1,
							"type": "NUMBER"
						},
						{
							"index": 4,
							"isGenerated": false,
							"manyRelationColumnRefs": [],
							"name": "CREATED_AT",
							"notNull": false,
							"propertyRefs": [
								{
									"index": 4
								}
							],
							"sinceVersion": 1,
							"type": "DATE"
						},
						{
							"index": 5,
							"isGenerated": false,
							"manyRelationColumnRefs": [],
							"name": "SYSTEM_WIDE_OPERATION_LID",
							"notNull": true,
							"propertyRefs": [
								{
									"index": 5
								}
							],
							"sinceVersion": 1,
							"type": "NUMBER"
						},
						{
							"index": 6,
							"isGenerated": false,
							"manyRelationColumnRefs": [],
							"name": "ORIGINAL_ACTOR_RECORD_ID",
							"notNull": false,
							"propertyRefs": [
								{
									"index": 8
								}
							],
							"sinceVersion": 1,
							"type": "NUMBER"
						},
						{
							"index": 7,
							"isGenerated": false,
							"manyRelationColumnRefs": [
								{
									"manyRelationIndex": 2,
									"oneApplication_Index": 1,
									"oneTableIndex": 9,
									"oneColumnIndex": 0,
									"sinceVersion": 1
								}
							],
							"name": "ORIGINAL_REPOSITORY_LID",
							"notNull": false,
							"propertyRefs": [
								{
									"index": 6
								}
							],
							"sinceVersion": 1,
							"type": "NUMBER"
						},
						{
							"index": 8,
							"isGenerated": false,
							"manyRelationColumnRefs": [
								{
									"manyRelationIndex": 3,
									"oneApplication_Index": 1,
									"oneTableIndex": 0,
									"oneColumnIndex": 0,
									"sinceVersion": 1
								}
							],
							"name": "ORIGINAL_ACTOR_LID",
							"notNull": false,
							"propertyRefs": [
								{
									"index": 7
								}
							],
							"sinceVersion": 1,
							"type": "NUMBER"
						},
						{
							"index": 9,
							"isGenerated": false,
							"manyRelationColumnRefs": [
								{
									"manyRelationIndex": 4,
									"oneApplication_Index": null,
									"oneTableIndex": 6,
									"oneRelationIndex": 11,
									"oneColumnIndex": 0,
									"sinceVersion": 1
								}
							],
							"name": "IDEAS_RID_1",
							"notNull": false,
							"propertyRefs": [
								{
									"index": 9
								}
							],
							"sinceVersion": 1,
							"type": "NUMBER"
						},
						{
							"index": 10,
							"isGenerated": false,
							"manyRelationColumnRefs": [
								{
									"manyRelationIndex": 4,
									"oneApplication_Index": null,
									"oneTableIndex": 6,
									"oneRelationIndex": 11,
									"oneColumnIndex": 1,
									"sinceVersion": 1
								}
							],
							"name": "IDEAS_AID_1",
							"notNull": false,
							"propertyRefs": [
								{
									"index": 9
								}
							],
							"sinceVersion": 1,
							"type": "NUMBER"
						},
						{
							"index": 11,
							"isGenerated": false,
							"manyRelationColumnRefs": [
								{
									"manyRelationIndex": 4,
									"oneApplication_Index": null,
									"oneTableIndex": 6,
									"oneRelationIndex": 11,
									"oneColumnIndex": 2,
									"sinceVersion": 1
								}
							],
							"name": "IDEAS_ARID_1",
							"notNull": false,
							"propertyRefs": [
								{
									"index": 9
								}
							],
							"sinceVersion": 1,
							"type": "NUMBER"
						},
						{
							"index": 12,
							"isGenerated": false,
							"manyRelationColumnRefs": [
								{
									"manyRelationIndex": 5,
									"oneApplication_Index": 0,
									"oneTableIndex": 2,
									"oneColumnIndex": 0,
									"sinceVersion": 1
								}
							],
							"name": "TOPIC_RID_1",
							"notNull": false,
							"propertyRefs": [
								{
									"index": 10
								}
							],
							"sinceVersion": 1,
							"type": "NUMBER"
						},
						{
							"index": 13,
							"isGenerated": false,
							"manyRelationColumnRefs": [
								{
									"manyRelationIndex": 5,
									"oneApplication_Index": 0,
									"oneTableIndex": 2,
									"oneColumnIndex": 1,
									"sinceVersion": 1
								}
							],
							"name": "TOPIC_AID_1",
							"notNull": false,
							"propertyRefs": [
								{
									"index": 10
								}
							],
							"sinceVersion": 1,
							"type": "NUMBER"
						},
						{
							"index": 14,
							"isGenerated": false,
							"manyRelationColumnRefs": [
								{
									"manyRelationIndex": 5,
									"oneApplication_Index": 0,
									"oneTableIndex": 2,
									"oneColumnIndex": 2,
									"sinceVersion": 1
								}
							],
							"name": "TOPIC_ARID_1",
							"notNull": false,
							"propertyRefs": [
								{
									"index": 10
								}
							],
							"sinceVersion": 1,
							"type": "NUMBER"
						}
					],
					"idColumnRefs": [
						{
							"index": 0
						},
						{
							"index": 1
						},
						{
							"index": 2
						}
					],
					"index": 5,
					"isLocal": false,
					"isAirEntity": true,
					"name": "IdeaTopic",
					"properties": [
						{
							"index": 0,
							"isId": true,
							"name": "repository",
							"relationRef": {
								"index": 0
							},
							"sinceVersion": 1
						},
						{
							"index": 1,
							"isId": true,
							"name": "actor",
							"relationRef": {
								"index": 1
							},
							"sinceVersion": 1
						},
						{
							"columnRef": {
								"index": 2
							},
							"index": 2,
							"isId": true,
							"name": "_actorRecordId",
							"sinceVersion": 1
						},
						{
							"columnRef": {
								"index": 3
							},
							"index": 3,
							"isId": false,
							"name": "ageSuitability",
							"sinceVersion": 1
						},
						{
							"columnRef": {
								"index": 4
							},
							"index": 4,
							"isId": false,
							"name": "createdAt",
							"sinceVersion": 1
						},
						{
							"columnRef": {
								"index": 5
							},
							"index": 5,
							"isId": false,
							"name": "systemWideOperationId",
							"sinceVersion": 1
						},
						{
							"index": 6,
							"isId": false,
							"name": "originalRepository",
							"relationRef": {
								"index": 2
							},
							"sinceVersion": 1
						},
						{
							"index": 7,
							"isId": false,
							"name": "originalActor",
							"relationRef": {
								"index": 3
							},
							"sinceVersion": 1
						},
						{
							"columnRef": {
								"index": 6
							},
							"index": 8,
							"isId": false,
							"name": "originalActorRecordId",
							"sinceVersion": 1
						},
						{
							"index": 9,
							"isId": false,
							"name": "idea",
							"relationRef": {
								"index": 4
							},
							"sinceVersion": 1
						},
						{
							"index": 10,
							"isId": false,
							"name": "topic",
							"relationRef": {
								"index": 5
							},
							"sinceVersion": 1
						}
					],
					"relations": [
						{
							"index": 0,
							"isId": true,
							"relationType": "MANY_TO_ONE",
							"propertyRef": {
								"index": 0
							},
							"relationTableIndex": 9,
							"relationTableApplication_Index": 1,
							"sinceVersion": 1
						},
						{
							"index": 1,
							"isId": true,
							"relationType": "MANY_TO_ONE",
							"propertyRef": {
								"index": 1
							},
							"relationTableIndex": 0,
							"relationTableApplication_Index": 1,
							"sinceVersion": 1
						},
						{
							"index": 2,
							"isId": false,
							"relationType": "MANY_TO_ONE",
							"propertyRef": {
								"index": 6
							},
							"relationTableIndex": 9,
							"relationTableApplication_Index": 1,
							"sinceVersion": 1
						},
						{
							"index": 3,
							"isId": false,
							"relationType": "MANY_TO_ONE",
							"propertyRef": {
								"index": 7
							},
							"relationTableIndex": 0,
							"relationTableApplication_Index": 1,
							"sinceVersion": 1
						},
						{
							"index": 4,
							"isId": false,
							"relationType": "MANY_TO_ONE",
							"propertyRef": {
								"index": 9
							},
							"relationTableIndex": 6,
							"sinceVersion": 1
						},
						{
							"index": 5,
							"isId": false,
							"relationType": "MANY_TO_ONE",
							"propertyRef": {
								"index": 10
							},
							"relationTableIndex": 2,
							"relationTableApplication_Index": 0,
							"sinceVersion": 1
						}
					],
					"sinceVersion": 1,
					"tableConfig": {
						"name": "IDEA_TOPICS",
						"columnIndexes": []
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
									"oneApplication_Index": 1,
									"oneTableIndex": 9,
									"oneColumnIndex": 0,
									"sinceVersion": 1
								}
							],
							"name": "REPOSITORY_LID",
							"notNull": true,
							"propertyRefs": [
								{
									"index": 0
								}
							],
							"sinceVersion": 1,
							"type": "NUMBER"
						},
						{
							"index": 1,
							"isGenerated": false,
							"manyRelationColumnRefs": [
								{
									"manyRelationIndex": 1,
									"oneApplication_Index": 1,
									"oneTableIndex": 0,
									"oneColumnIndex": 0,
									"sinceVersion": 1
								}
							],
							"name": "ACTOR_LID",
							"notNull": true,
							"propertyRefs": [
								{
									"index": 1
								}
							],
							"sinceVersion": 1,
							"type": "NUMBER"
						},
						{
							"index": 2,
							"isGenerated": true,
							"manyRelationColumnRefs": [],
							"name": "ACTOR_RECORD_ID",
							"notNull": true,
							"propertyRefs": [
								{
									"index": 2
								}
							],
							"sinceVersion": 1,
							"type": "NUMBER"
						},
						{
							"index": 3,
							"isGenerated": false,
							"manyRelationColumnRefs": [],
							"name": "AGE_SUITABILITY",
							"notNull": true,
							"propertyRefs": [
								{
									"index": 3
								}
							],
							"sinceVersion": 1,
							"type": "NUMBER"
						},
						{
							"index": 4,
							"isGenerated": false,
							"manyRelationColumnRefs": [],
							"name": "CREATED_AT",
							"notNull": false,
							"propertyRefs": [
								{
									"index": 4
								}
							],
							"sinceVersion": 1,
							"type": "DATE"
						},
						{
							"index": 5,
							"isGenerated": false,
							"manyRelationColumnRefs": [],
							"name": "SYSTEM_WIDE_OPERATION_LID",
							"notNull": true,
							"propertyRefs": [
								{
									"index": 5
								}
							],
							"sinceVersion": 1,
							"type": "NUMBER"
						},
						{
							"index": 6,
							"isGenerated": false,
							"manyRelationColumnRefs": [],
							"name": "ORIGINAL_ACTOR_RECORD_ID",
							"notNull": false,
							"propertyRefs": [
								{
									"index": 8
								}
							],
							"sinceVersion": 1,
							"type": "NUMBER"
						},
						{
							"index": 7,
							"isGenerated": false,
							"manyRelationColumnRefs": [
								{
									"manyRelationIndex": 2,
									"oneApplication_Index": 1,
									"oneTableIndex": 9,
									"oneColumnIndex": 0,
									"sinceVersion": 1
								}
							],
							"name": "ORIGINAL_REPOSITORY_LID",
							"notNull": false,
							"propertyRefs": [
								{
									"index": 6
								}
							],
							"sinceVersion": 1,
							"type": "NUMBER"
						},
						{
							"index": 8,
							"isGenerated": false,
							"manyRelationColumnRefs": [
								{
									"manyRelationIndex": 3,
									"oneApplication_Index": 1,
									"oneTableIndex": 0,
									"oneColumnIndex": 0,
									"sinceVersion": 1
								}
							],
							"name": "ORIGINAL_ACTOR_LID",
							"notNull": false,
							"propertyRefs": [
								{
									"index": 7
								}
							],
							"sinceVersion": 1,
							"type": "NUMBER"
						},
						{
							"index": 9,
							"isGenerated": false,
							"manyRelationColumnRefs": [],
							"name": "NAME",
							"notNull": true,
							"propertyRefs": [
								{
									"index": 9
								}
							],
							"sinceVersion": 1,
							"type": "STRING"
						},
						{
							"index": 10,
							"isGenerated": false,
							"manyRelationColumnRefs": [],
							"name": "AGREEMENT_SHARE_TOTAL",
							"notNull": false,
							"propertyRefs": [
								{
									"index": 10
								}
							],
							"sinceVersion": 1,
							"type": "NUMBER"
						},
						{
							"index": 11,
							"isGenerated": false,
							"manyRelationColumnRefs": [],
							"name": "NUMBER_OF_AGREEMENTS",
							"notNull": false,
							"propertyRefs": [
								{
									"index": 11
								}
							],
							"sinceVersion": 1,
							"type": "NUMBER"
						},
						{
							"index": 12,
							"isGenerated": false,
							"manyRelationColumnRefs": [],
							"name": "URGENCY_TOTAL",
							"notNull": false,
							"propertyRefs": [
								{
									"index": 12
								}
							],
							"sinceVersion": 1,
							"type": "NUMBER"
						},
						{
							"index": 13,
							"isGenerated": false,
							"manyRelationColumnRefs": [],
							"name": "NUMBER_OF_URGENCY_RATINGS",
							"notNull": false,
							"propertyRefs": [
								{
									"index": 13
								}
							],
							"sinceVersion": 1,
							"type": "NUMBER"
						},
						{
							"index": 14,
							"isGenerated": false,
							"manyRelationColumnRefs": [],
							"name": "NUMBER_OF_REASONS",
							"notNull": false,
							"propertyRefs": [
								{
									"index": 14
								}
							],
							"sinceVersion": 1,
							"type": "NUMBER"
						},
						{
							"index": 15,
							"isGenerated": false,
							"manyRelationColumnRefs": [
								{
									"manyRelationIndex": 4,
									"oneApplication_Index": null,
									"oneTableIndex": 6,
									"oneRelationIndex": 5,
									"oneColumnIndex": 0,
									"sinceVersion": 1
								}
							],
							"name": "IDEAS_RID_1",
							"notNull": false,
							"propertyRefs": [
								{
									"index": 15
								}
							],
							"sinceVersion": 1,
							"type": "NUMBER"
						},
						{
							"index": 16,
							"isGenerated": false,
							"manyRelationColumnRefs": [
								{
									"manyRelationIndex": 4,
									"oneApplication_Index": null,
									"oneTableIndex": 6,
									"oneRelationIndex": 5,
									"oneColumnIndex": 1,
									"sinceVersion": 1
								}
							],
							"name": "IDEAS_AID_1",
							"notNull": false,
							"propertyRefs": [
								{
									"index": 15
								}
							],
							"sinceVersion": 1,
							"type": "NUMBER"
						},
						{
							"index": 17,
							"isGenerated": false,
							"manyRelationColumnRefs": [
								{
									"manyRelationIndex": 4,
									"oneApplication_Index": null,
									"oneTableIndex": 6,
									"oneRelationIndex": 5,
									"oneColumnIndex": 2,
									"sinceVersion": 1
								}
							],
							"name": "IDEAS_ARID_1",
							"notNull": false,
							"propertyRefs": [
								{
									"index": 15
								}
							],
							"sinceVersion": 1,
							"type": "NUMBER"
						}
					],
					"idColumnRefs": [
						{
							"index": 0
						},
						{
							"index": 1
						},
						{
							"index": 2
						}
					],
					"index": 6,
					"isLocal": false,
					"isAirEntity": true,
					"name": "Idea",
					"properties": [
						{
							"index": 0,
							"isId": true,
							"name": "repository",
							"relationRef": {
								"index": 0
							},
							"sinceVersion": 1
						},
						{
							"index": 1,
							"isId": true,
							"name": "actor",
							"relationRef": {
								"index": 1
							},
							"sinceVersion": 1
						},
						{
							"columnRef": {
								"index": 2
							},
							"index": 2,
							"isId": true,
							"name": "_actorRecordId",
							"sinceVersion": 1
						},
						{
							"columnRef": {
								"index": 3
							},
							"index": 3,
							"isId": false,
							"name": "ageSuitability",
							"sinceVersion": 1
						},
						{
							"columnRef": {
								"index": 4
							},
							"index": 4,
							"isId": false,
							"name": "createdAt",
							"sinceVersion": 1
						},
						{
							"columnRef": {
								"index": 5
							},
							"index": 5,
							"isId": false,
							"name": "systemWideOperationId",
							"sinceVersion": 1
						},
						{
							"index": 6,
							"isId": false,
							"name": "originalRepository",
							"relationRef": {
								"index": 2
							},
							"sinceVersion": 1
						},
						{
							"index": 7,
							"isId": false,
							"name": "originalActor",
							"relationRef": {
								"index": 3
							},
							"sinceVersion": 1
						},
						{
							"columnRef": {
								"index": 6
							},
							"index": 8,
							"isId": false,
							"name": "originalActorRecordId",
							"sinceVersion": 1
						},
						{
							"columnRef": {
								"index": 9
							},
							"index": 9,
							"isId": false,
							"name": "name",
							"sinceVersion": 1
						},
						{
							"columnRef": {
								"index": 10
							},
							"index": 10,
							"isId": false,
							"name": "agreementShareTotal",
							"sinceVersion": 1
						},
						{
							"columnRef": {
								"index": 11
							},
							"index": 11,
							"isId": false,
							"name": "numberOfAgreements",
							"sinceVersion": 1
						},
						{
							"columnRef": {
								"index": 12
							},
							"index": 12,
							"isId": false,
							"name": "urgencyTotal",
							"sinceVersion": 1
						},
						{
							"columnRef": {
								"index": 13
							},
							"index": 13,
							"isId": false,
							"name": "numberOfUrgencyRatings",
							"sinceVersion": 1
						},
						{
							"columnRef": {
								"index": 14
							},
							"index": 14,
							"isId": false,
							"name": "numberOfReasons",
							"sinceVersion": 1
						},
						{
							"index": 15,
							"isId": false,
							"name": "parent",
							"relationRef": {
								"index": 4
							},
							"sinceVersion": 1
						},
						{
							"index": 16,
							"isId": false,
							"name": "children",
							"relationRef": {
								"index": 5
							},
							"sinceVersion": 1
						},
						{
							"index": 17,
							"isId": false,
							"name": "ideaRatings",
							"relationRef": {
								"index": 6
							},
							"sinceVersion": 1
						},
						{
							"index": 18,
							"isId": false,
							"name": "agreements",
							"relationRef": {
								"index": 7
							},
							"sinceVersion": 1
						},
						{
							"index": 19,
							"isId": false,
							"name": "reasons",
							"relationRef": {
								"index": 8
							},
							"sinceVersion": 1
						},
						{
							"index": 20,
							"isId": false,
							"name": "ideaLabels",
							"relationRef": {
								"index": 9
							},
							"sinceVersion": 1
						},
						{
							"index": 21,
							"isId": false,
							"name": "situationIdeas",
							"relationRef": {
								"index": 10
							},
							"sinceVersion": 1
						},
						{
							"index": 22,
							"isId": false,
							"name": "ideaTopics",
							"relationRef": {
								"index": 11
							},
							"sinceVersion": 1
						}
					],
					"relations": [
						{
							"index": 0,
							"isId": true,
							"relationType": "MANY_TO_ONE",
							"propertyRef": {
								"index": 0
							},
							"relationTableIndex": 9,
							"relationTableApplication_Index": 1,
							"sinceVersion": 1
						},
						{
							"index": 1,
							"isId": true,
							"relationType": "MANY_TO_ONE",
							"propertyRef": {
								"index": 1
							},
							"relationTableIndex": 0,
							"relationTableApplication_Index": 1,
							"sinceVersion": 1
						},
						{
							"index": 2,
							"isId": false,
							"relationType": "MANY_TO_ONE",
							"propertyRef": {
								"index": 6
							},
							"relationTableIndex": 9,
							"relationTableApplication_Index": 1,
							"sinceVersion": 1
						},
						{
							"index": 3,
							"isId": false,
							"relationType": "MANY_TO_ONE",
							"propertyRef": {
								"index": 7
							},
							"relationTableIndex": 0,
							"relationTableApplication_Index": 1,
							"sinceVersion": 1
						},
						{
							"index": 4,
							"isId": false,
							"manyToOneElems": {
								"optional": true
							},
							"relationType": "MANY_TO_ONE",
							"propertyRef": {
								"index": 15
							},
							"relationTableIndex": 6,
							"sinceVersion": 1
						},
						{
							"index": 5,
							"isId": false,
							"oneToManyElems": {
								"mappedBy": "parent"
							},
							"relationType": "ONE_TO_MANY",
							"propertyRef": {
								"index": 16
							},
							"relationTableIndex": 6,
							"sinceVersion": 1
						},
						{
							"index": 6,
							"isId": false,
							"oneToManyElems": {
								"mappedBy": "idea"
							},
							"relationType": "ONE_TO_MANY",
							"propertyRef": {
								"index": 17
							},
							"relationTableIndex": 2,
							"sinceVersion": 1
						},
						{
							"index": 7,
							"isId": false,
							"oneToManyElems": {
								"mappedBy": "idea"
							},
							"relationType": "ONE_TO_MANY",
							"propertyRef": {
								"index": 18
							},
							"relationTableIndex": 8,
							"sinceVersion": 1
						},
						{
							"index": 8,
							"isId": false,
							"oneToManyElems": {
								"mappedBy": "idea"
							},
							"relationType": "ONE_TO_MANY",
							"propertyRef": {
								"index": 19
							},
							"relationTableIndex": 3,
							"sinceVersion": 1
						},
						{
							"index": 9,
							"isId": false,
							"oneToManyElems": {
								"mappedBy": "idea"
							},
							"relationType": "ONE_TO_MANY",
							"propertyRef": {
								"index": 20
							},
							"relationTableIndex": 1,
							"sinceVersion": 1
						},
						{
							"index": 10,
							"isId": false,
							"oneToManyElems": {
								"mappedBy": "idea"
							},
							"relationType": "ONE_TO_MANY",
							"propertyRef": {
								"index": 21
							},
							"relationTableIndex": 4,
							"sinceVersion": 1
						},
						{
							"index": 11,
							"isId": false,
							"oneToManyElems": {
								"mappedBy": "idea"
							},
							"relationType": "ONE_TO_MANY",
							"propertyRef": {
								"index": 22
							},
							"relationTableIndex": 5,
							"sinceVersion": 1
						}
					],
					"sinceVersion": 1,
					"tableConfig": {
						"name": "IDEAS",
						"columnIndexes": []
					},
					"operations": {}
				},
				{
					"columns": [
						{
							"index": 0,
							"isGenerated": false,
							"manyRelationColumnRefs": [
								{
									"manyRelationIndex": 0,
									"oneApplication_Index": 1,
									"oneTableIndex": 9,
									"oneColumnIndex": 0,
									"sinceVersion": 1
								}
							],
							"name": "REPOSITORY_LID",
							"notNull": true,
							"propertyRefs": [
								{
									"index": 0
								}
							],
							"sinceVersion": 1,
							"type": "NUMBER"
						},
						{
							"index": 1,
							"isGenerated": false,
							"manyRelationColumnRefs": [
								{
									"manyRelationIndex": 1,
									"oneApplication_Index": 1,
									"oneTableIndex": 0,
									"oneColumnIndex": 0,
									"sinceVersion": 1
								}
							],
							"name": "ACTOR_LID",
							"notNull": true,
							"propertyRefs": [
								{
									"index": 1
								}
							],
							"sinceVersion": 1,
							"type": "NUMBER"
						},
						{
							"index": 2,
							"isGenerated": true,
							"manyRelationColumnRefs": [],
							"name": "ACTOR_RECORD_ID",
							"notNull": true,
							"propertyRefs": [
								{
									"index": 2
								}
							],
							"sinceVersion": 1,
							"type": "NUMBER"
						},
						{
							"index": 3,
							"isGenerated": false,
							"manyRelationColumnRefs": [],
							"name": "AGE_SUITABILITY",
							"notNull": true,
							"propertyRefs": [
								{
									"index": 3
								}
							],
							"sinceVersion": 1,
							"type": "NUMBER"
						},
						{
							"index": 4,
							"isGenerated": false,
							"manyRelationColumnRefs": [],
							"name": "CREATED_AT",
							"notNull": false,
							"propertyRefs": [
								{
									"index": 4
								}
							],
							"sinceVersion": 1,
							"type": "DATE"
						},
						{
							"index": 5,
							"isGenerated": false,
							"manyRelationColumnRefs": [],
							"name": "SYSTEM_WIDE_OPERATION_LID",
							"notNull": true,
							"propertyRefs": [
								{
									"index": 5
								}
							],
							"sinceVersion": 1,
							"type": "NUMBER"
						},
						{
							"index": 6,
							"isGenerated": false,
							"manyRelationColumnRefs": [],
							"name": "ORIGINAL_ACTOR_RECORD_ID",
							"notNull": false,
							"propertyRefs": [
								{
									"index": 8
								}
							],
							"sinceVersion": 1,
							"type": "NUMBER"
						},
						{
							"index": 7,
							"isGenerated": false,
							"manyRelationColumnRefs": [
								{
									"manyRelationIndex": 2,
									"oneApplication_Index": 1,
									"oneTableIndex": 9,
									"oneColumnIndex": 0,
									"sinceVersion": 1
								}
							],
							"name": "ORIGINAL_REPOSITORY_LID",
							"notNull": false,
							"propertyRefs": [
								{
									"index": 6
								}
							],
							"sinceVersion": 1,
							"type": "NUMBER"
						},
						{
							"index": 8,
							"isGenerated": false,
							"manyRelationColumnRefs": [
								{
									"manyRelationIndex": 3,
									"oneApplication_Index": 1,
									"oneTableIndex": 0,
									"oneColumnIndex": 0,
									"sinceVersion": 1
								}
							],
							"name": "ORIGINAL_ACTOR_LID",
							"notNull": false,
							"propertyRefs": [
								{
									"index": 7
								}
							],
							"sinceVersion": 1,
							"type": "NUMBER"
						},
						{
							"index": 9,
							"isGenerated": false,
							"manyRelationColumnRefs": [],
							"name": "THREED_COORDINATE_AXIS",
							"notNull": false,
							"propertyRefs": [
								{
									"index": 9
								}
							],
							"sinceVersion": 1,
							"type": "STRING"
						},
						{
							"index": 10,
							"isGenerated": false,
							"manyRelationColumnRefs": [],
							"name": "SHARE",
							"notNull": false,
							"propertyRefs": [
								{
									"index": 10
								}
							],
							"sinceVersion": 1,
							"type": "NUMBER"
						},
						{
							"index": 11,
							"isGenerated": false,
							"manyRelationColumnRefs": [
								{
									"manyRelationIndex": 4,
									"oneApplication_Index": null,
									"oneTableIndex": 8,
									"oneRelationIndex": 6,
									"oneColumnIndex": 0,
									"sinceVersion": 1
								}
							],
							"name": "AGREEMENTS_RID_1",
							"notNull": false,
							"propertyRefs": [
								{
									"index": 11
								}
							],
							"sinceVersion": 1,
							"type": "NUMBER"
						},
						{
							"index": 12,
							"isGenerated": false,
							"manyRelationColumnRefs": [
								{
									"manyRelationIndex": 4,
									"oneApplication_Index": null,
									"oneTableIndex": 8,
									"oneRelationIndex": 6,
									"oneColumnIndex": 1,
									"sinceVersion": 1
								}
							],
							"name": "AGREEMENTS_AID_1",
							"notNull": false,
							"propertyRefs": [
								{
									"index": 11
								}
							],
							"sinceVersion": 1,
							"type": "NUMBER"
						},
						{
							"index": 13,
							"isGenerated": false,
							"manyRelationColumnRefs": [
								{
									"manyRelationIndex": 4,
									"oneApplication_Index": null,
									"oneTableIndex": 8,
									"oneRelationIndex": 6,
									"oneColumnIndex": 2,
									"sinceVersion": 1
								}
							],
							"name": "AGREEMENTS_ARID_1",
							"notNull": false,
							"propertyRefs": [
								{
									"index": 11
								}
							],
							"sinceVersion": 1,
							"type": "NUMBER"
						},
						{
							"index": 14,
							"isGenerated": false,
							"manyRelationColumnRefs": [
								{
									"manyRelationIndex": 5,
									"oneApplication_Index": null,
									"oneTableIndex": 3,
									"oneColumnIndex": 0,
									"sinceVersion": 1
								}
							],
							"name": "REASONS_RID_1",
							"notNull": false,
							"propertyRefs": [
								{
									"index": 12
								}
							],
							"sinceVersion": 1,
							"type": "NUMBER"
						},
						{
							"index": 15,
							"isGenerated": false,
							"manyRelationColumnRefs": [
								{
									"manyRelationIndex": 5,
									"oneApplication_Index": null,
									"oneTableIndex": 3,
									"oneColumnIndex": 1,
									"sinceVersion": 1
								}
							],
							"name": "REASONS_AID_1",
							"notNull": false,
							"propertyRefs": [
								{
									"index": 12
								}
							],
							"sinceVersion": 1,
							"type": "NUMBER"
						},
						{
							"index": 16,
							"isGenerated": false,
							"manyRelationColumnRefs": [
								{
									"manyRelationIndex": 5,
									"oneApplication_Index": null,
									"oneTableIndex": 3,
									"oneColumnIndex": 2,
									"sinceVersion": 1
								}
							],
							"name": "REASONS_ARID_1",
							"notNull": false,
							"propertyRefs": [
								{
									"index": 12
								}
							],
							"sinceVersion": 1,
							"type": "NUMBER"
						}
					],
					"idColumnRefs": [
						{
							"index": 0
						},
						{
							"index": 1
						},
						{
							"index": 2
						}
					],
					"index": 7,
					"isLocal": false,
					"isAirEntity": true,
					"name": "AgreementReason",
					"properties": [
						{
							"index": 0,
							"isId": true,
							"name": "repository",
							"relationRef": {
								"index": 0
							},
							"sinceVersion": 1
						},
						{
							"index": 1,
							"isId": true,
							"name": "actor",
							"relationRef": {
								"index": 1
							},
							"sinceVersion": 1
						},
						{
							"columnRef": {
								"index": 2
							},
							"index": 2,
							"isId": true,
							"name": "_actorRecordId",
							"sinceVersion": 1
						},
						{
							"columnRef": {
								"index": 3
							},
							"index": 3,
							"isId": false,
							"name": "ageSuitability",
							"sinceVersion": 1
						},
						{
							"columnRef": {
								"index": 4
							},
							"index": 4,
							"isId": false,
							"name": "createdAt",
							"sinceVersion": 1
						},
						{
							"columnRef": {
								"index": 5
							},
							"index": 5,
							"isId": false,
							"name": "systemWideOperationId",
							"sinceVersion": 1
						},
						{
							"index": 6,
							"isId": false,
							"name": "originalRepository",
							"relationRef": {
								"index": 2
							},
							"sinceVersion": 1
						},
						{
							"index": 7,
							"isId": false,
							"name": "originalActor",
							"relationRef": {
								"index": 3
							},
							"sinceVersion": 1
						},
						{
							"columnRef": {
								"index": 6
							},
							"index": 8,
							"isId": false,
							"name": "originalActorRecordId",
							"sinceVersion": 1
						},
						{
							"columnRef": {
								"index": 9
							},
							"index": 9,
							"isId": false,
							"name": "axis",
							"sinceVersion": 1
						},
						{
							"columnRef": {
								"index": 10
							},
							"index": 10,
							"isId": false,
							"name": "share",
							"sinceVersion": 1
						},
						{
							"index": 11,
							"isId": false,
							"name": "agreement",
							"relationRef": {
								"index": 4
							},
							"sinceVersion": 1
						},
						{
							"index": 12,
							"isId": false,
							"name": "reason",
							"relationRef": {
								"index": 5
							},
							"sinceVersion": 1
						}
					],
					"relations": [
						{
							"index": 0,
							"isId": true,
							"relationType": "MANY_TO_ONE",
							"propertyRef": {
								"index": 0
							},
							"relationTableIndex": 9,
							"relationTableApplication_Index": 1,
							"sinceVersion": 1
						},
						{
							"index": 1,
							"isId": true,
							"relationType": "MANY_TO_ONE",
							"propertyRef": {
								"index": 1
							},
							"relationTableIndex": 0,
							"relationTableApplication_Index": 1,
							"sinceVersion": 1
						},
						{
							"index": 2,
							"isId": false,
							"relationType": "MANY_TO_ONE",
							"propertyRef": {
								"index": 6
							},
							"relationTableIndex": 9,
							"relationTableApplication_Index": 1,
							"sinceVersion": 1
						},
						{
							"index": 3,
							"isId": false,
							"relationType": "MANY_TO_ONE",
							"propertyRef": {
								"index": 7
							},
							"relationTableIndex": 0,
							"relationTableApplication_Index": 1,
							"sinceVersion": 1
						},
						{
							"index": 4,
							"isId": false,
							"relationType": "MANY_TO_ONE",
							"propertyRef": {
								"index": 11
							},
							"relationTableIndex": 8,
							"sinceVersion": 1
						},
						{
							"index": 5,
							"isId": false,
							"relationType": "MANY_TO_ONE",
							"propertyRef": {
								"index": 12
							},
							"relationTableIndex": 3,
							"sinceVersion": 1
						}
					],
					"sinceVersion": 1,
					"tableConfig": {
						"name": "AGREEMENT_REASONS",
						"columnIndexes": []
					},
					"operations": {}
				},
				{
					"columns": [
						{
							"index": 0,
							"isGenerated": false,
							"manyRelationColumnRefs": [
								{
									"manyRelationIndex": 0,
									"oneApplication_Index": 1,
									"oneTableIndex": 9,
									"oneColumnIndex": 0,
									"sinceVersion": 1
								}
							],
							"name": "REPOSITORY_LID",
							"notNull": true,
							"propertyRefs": [
								{
									"index": 0
								}
							],
							"sinceVersion": 1,
							"type": "NUMBER"
						},
						{
							"index": 1,
							"isGenerated": false,
							"manyRelationColumnRefs": [
								{
									"manyRelationIndex": 1,
									"oneApplication_Index": 1,
									"oneTableIndex": 0,
									"oneColumnIndex": 0,
									"sinceVersion": 1
								}
							],
							"name": "ACTOR_LID",
							"notNull": true,
							"propertyRefs": [
								{
									"index": 1
								}
							],
							"sinceVersion": 1,
							"type": "NUMBER"
						},
						{
							"index": 2,
							"isGenerated": true,
							"manyRelationColumnRefs": [],
							"name": "ACTOR_RECORD_ID",
							"notNull": true,
							"propertyRefs": [
								{
									"index": 2
								}
							],
							"sinceVersion": 1,
							"type": "NUMBER"
						},
						{
							"index": 3,
							"isGenerated": false,
							"manyRelationColumnRefs": [],
							"name": "AGE_SUITABILITY",
							"notNull": true,
							"propertyRefs": [
								{
									"index": 3
								}
							],
							"sinceVersion": 1,
							"type": "NUMBER"
						},
						{
							"index": 4,
							"isGenerated": false,
							"manyRelationColumnRefs": [],
							"name": "CREATED_AT",
							"notNull": false,
							"propertyRefs": [
								{
									"index": 4
								}
							],
							"sinceVersion": 1,
							"type": "DATE"
						},
						{
							"index": 5,
							"isGenerated": false,
							"manyRelationColumnRefs": [],
							"name": "SYSTEM_WIDE_OPERATION_LID",
							"notNull": true,
							"propertyRefs": [
								{
									"index": 5
								}
							],
							"sinceVersion": 1,
							"type": "NUMBER"
						},
						{
							"index": 6,
							"isGenerated": false,
							"manyRelationColumnRefs": [],
							"name": "ORIGINAL_ACTOR_RECORD_ID",
							"notNull": false,
							"propertyRefs": [
								{
									"index": 8
								}
							],
							"sinceVersion": 1,
							"type": "NUMBER"
						},
						{
							"index": 7,
							"isGenerated": false,
							"manyRelationColumnRefs": [
								{
									"manyRelationIndex": 2,
									"oneApplication_Index": 1,
									"oneTableIndex": 9,
									"oneColumnIndex": 0,
									"sinceVersion": 1
								}
							],
							"name": "ORIGINAL_REPOSITORY_LID",
							"notNull": false,
							"propertyRefs": [
								{
									"index": 6
								}
							],
							"sinceVersion": 1,
							"type": "NUMBER"
						},
						{
							"index": 8,
							"isGenerated": false,
							"manyRelationColumnRefs": [
								{
									"manyRelationIndex": 3,
									"oneApplication_Index": 1,
									"oneTableIndex": 0,
									"oneColumnIndex": 0,
									"sinceVersion": 1
								}
							],
							"name": "ORIGINAL_ACTOR_LID",
							"notNull": false,
							"propertyRefs": [
								{
									"index": 7
								}
							],
							"sinceVersion": 1,
							"type": "NUMBER"
						},
						{
							"index": 9,
							"isGenerated": false,
							"manyRelationColumnRefs": [],
							"name": "SHARE_TOTAL",
							"notNull": false,
							"propertyRefs": [
								{
									"index": 9
								}
							],
							"sinceVersion": 1,
							"type": "NUMBER"
						},
						{
							"index": 10,
							"isGenerated": false,
							"manyRelationColumnRefs": [
								{
									"manyRelationIndex": 4,
									"oneApplication_Index": null,
									"oneTableIndex": 4,
									"oneRelationIndex": 7,
									"oneColumnIndex": 0,
									"sinceVersion": 1
								}
							],
							"name": "SITUATION_IDEAS_RID_1",
							"notNull": false,
							"propertyRefs": [
								{
									"index": 10
								}
							],
							"sinceVersion": 1,
							"type": "NUMBER"
						},
						{
							"index": 11,
							"isGenerated": false,
							"manyRelationColumnRefs": [
								{
									"manyRelationIndex": 4,
									"oneApplication_Index": null,
									"oneTableIndex": 4,
									"oneRelationIndex": 7,
									"oneColumnIndex": 1,
									"sinceVersion": 1
								}
							],
							"name": "SITUATION_IDEAS_AID_1",
							"notNull": false,
							"propertyRefs": [
								{
									"index": 10
								}
							],
							"sinceVersion": 1,
							"type": "NUMBER"
						},
						{
							"index": 12,
							"isGenerated": false,
							"manyRelationColumnRefs": [
								{
									"manyRelationIndex": 4,
									"oneApplication_Index": null,
									"oneTableIndex": 4,
									"oneRelationIndex": 7,
									"oneColumnIndex": 2,
									"sinceVersion": 1
								}
							],
							"name": "SITUATION_IDEAS_ARID_1",
							"notNull": false,
							"propertyRefs": [
								{
									"index": 10
								}
							],
							"sinceVersion": 1,
							"type": "NUMBER"
						},
						{
							"index": 13,
							"isGenerated": false,
							"manyRelationColumnRefs": [
								{
									"manyRelationIndex": 5,
									"oneApplication_Index": null,
									"oneTableIndex": 6,
									"oneRelationIndex": 7,
									"oneColumnIndex": 0,
									"sinceVersion": 1
								}
							],
							"name": "IDEAS_RID_1",
							"notNull": false,
							"propertyRefs": [
								{
									"index": 11
								}
							],
							"sinceVersion": 1,
							"type": "NUMBER"
						},
						{
							"index": 14,
							"isGenerated": false,
							"manyRelationColumnRefs": [
								{
									"manyRelationIndex": 5,
									"oneApplication_Index": null,
									"oneTableIndex": 6,
									"oneRelationIndex": 7,
									"oneColumnIndex": 1,
									"sinceVersion": 1
								}
							],
							"name": "IDEAS_AID_1",
							"notNull": false,
							"propertyRefs": [
								{
									"index": 11
								}
							],
							"sinceVersion": 1,
							"type": "NUMBER"
						},
						{
							"index": 15,
							"isGenerated": false,
							"manyRelationColumnRefs": [
								{
									"manyRelationIndex": 5,
									"oneApplication_Index": null,
									"oneTableIndex": 6,
									"oneRelationIndex": 7,
									"oneColumnIndex": 2,
									"sinceVersion": 1
								}
							],
							"name": "IDEAS_ARID_1",
							"notNull": false,
							"propertyRefs": [
								{
									"index": 11
								}
							],
							"sinceVersion": 1,
							"type": "NUMBER"
						}
					],
					"idColumnRefs": [
						{
							"index": 0
						},
						{
							"index": 1
						},
						{
							"index": 2
						}
					],
					"index": 8,
					"isLocal": false,
					"isAirEntity": true,
					"name": "Agreement",
					"properties": [
						{
							"index": 0,
							"isId": true,
							"name": "repository",
							"relationRef": {
								"index": 0
							},
							"sinceVersion": 1
						},
						{
							"index": 1,
							"isId": true,
							"name": "actor",
							"relationRef": {
								"index": 1
							},
							"sinceVersion": 1
						},
						{
							"columnRef": {
								"index": 2
							},
							"index": 2,
							"isId": true,
							"name": "_actorRecordId",
							"sinceVersion": 1
						},
						{
							"columnRef": {
								"index": 3
							},
							"index": 3,
							"isId": false,
							"name": "ageSuitability",
							"sinceVersion": 1
						},
						{
							"columnRef": {
								"index": 4
							},
							"index": 4,
							"isId": false,
							"name": "createdAt",
							"sinceVersion": 1
						},
						{
							"columnRef": {
								"index": 5
							},
							"index": 5,
							"isId": false,
							"name": "systemWideOperationId",
							"sinceVersion": 1
						},
						{
							"index": 6,
							"isId": false,
							"name": "originalRepository",
							"relationRef": {
								"index": 2
							},
							"sinceVersion": 1
						},
						{
							"index": 7,
							"isId": false,
							"name": "originalActor",
							"relationRef": {
								"index": 3
							},
							"sinceVersion": 1
						},
						{
							"columnRef": {
								"index": 6
							},
							"index": 8,
							"isId": false,
							"name": "originalActorRecordId",
							"sinceVersion": 1
						},
						{
							"columnRef": {
								"index": 9
							},
							"index": 9,
							"isId": false,
							"name": "shareTotal",
							"sinceVersion": 1
						},
						{
							"index": 10,
							"isId": false,
							"name": "situationIdea",
							"relationRef": {
								"index": 4
							},
							"sinceVersion": 1
						},
						{
							"index": 11,
							"isId": false,
							"name": "idea",
							"relationRef": {
								"index": 5
							},
							"sinceVersion": 1
						},
						{
							"index": 12,
							"isId": false,
							"name": "agreementReasons",
							"relationRef": {
								"index": 6
							},
							"sinceVersion": 1
						}
					],
					"relations": [
						{
							"index": 0,
							"isId": true,
							"relationType": "MANY_TO_ONE",
							"propertyRef": {
								"index": 0
							},
							"relationTableIndex": 9,
							"relationTableApplication_Index": 1,
							"sinceVersion": 1
						},
						{
							"index": 1,
							"isId": true,
							"relationType": "MANY_TO_ONE",
							"propertyRef": {
								"index": 1
							},
							"relationTableIndex": 0,
							"relationTableApplication_Index": 1,
							"sinceVersion": 1
						},
						{
							"index": 2,
							"isId": false,
							"relationType": "MANY_TO_ONE",
							"propertyRef": {
								"index": 6
							},
							"relationTableIndex": 9,
							"relationTableApplication_Index": 1,
							"sinceVersion": 1
						},
						{
							"index": 3,
							"isId": false,
							"relationType": "MANY_TO_ONE",
							"propertyRef": {
								"index": 7
							},
							"relationTableIndex": 0,
							"relationTableApplication_Index": 1,
							"sinceVersion": 1
						},
						{
							"index": 4,
							"isId": false,
							"manyToOneElems": {
								"optional": true
							},
							"relationType": "MANY_TO_ONE",
							"propertyRef": {
								"index": 10
							},
							"relationTableIndex": 4,
							"sinceVersion": 1
						},
						{
							"index": 5,
							"isId": false,
							"relationType": "MANY_TO_ONE",
							"propertyRef": {
								"index": 11
							},
							"relationTableIndex": 6,
							"sinceVersion": 1
						},
						{
							"index": 6,
							"isId": false,
							"oneToManyElems": {
								"mappedBy": "agreement"
							},
							"relationType": "ONE_TO_MANY",
							"propertyRef": {
								"index": 12
							},
							"relationTableIndex": 7,
							"sinceVersion": 1
						}
					],
					"sinceVersion": 1,
					"tableConfig": {
						"name": "AGREEMENTS",
						"columnIndexes": []
					},
					"operations": {}
				},
				{
					"columns": [
						{
							"index": 0,
							"isGenerated": false,
							"manyRelationColumnRefs": [
								{
									"manyRelationIndex": 0,
									"oneApplication_Index": 1,
									"oneTableIndex": 9,
									"oneColumnIndex": 0,
									"sinceVersion": 1
								}
							],
							"name": "REPOSITORY_LID",
							"notNull": true,
							"propertyRefs": [
								{
									"index": 0
								}
							],
							"sinceVersion": 1,
							"type": "NUMBER"
						},
						{
							"index": 1,
							"isGenerated": false,
							"manyRelationColumnRefs": [
								{
									"manyRelationIndex": 1,
									"oneApplication_Index": 1,
									"oneTableIndex": 0,
									"oneColumnIndex": 0,
									"sinceVersion": 1
								}
							],
							"name": "ACTOR_LID",
							"notNull": true,
							"propertyRefs": [
								{
									"index": 1
								}
							],
							"sinceVersion": 1,
							"type": "NUMBER"
						},
						{
							"index": 2,
							"isGenerated": true,
							"manyRelationColumnRefs": [],
							"name": "ACTOR_RECORD_ID",
							"notNull": true,
							"propertyRefs": [
								{
									"index": 2
								}
							],
							"sinceVersion": 1,
							"type": "NUMBER"
						},
						{
							"index": 3,
							"isGenerated": false,
							"manyRelationColumnRefs": [],
							"name": "AGE_SUITABILITY",
							"notNull": true,
							"propertyRefs": [
								{
									"index": 3
								}
							],
							"sinceVersion": 1,
							"type": "NUMBER"
						},
						{
							"index": 4,
							"isGenerated": false,
							"manyRelationColumnRefs": [],
							"name": "CREATED_AT",
							"notNull": false,
							"propertyRefs": [
								{
									"index": 4
								}
							],
							"sinceVersion": 1,
							"type": "DATE"
						},
						{
							"index": 5,
							"isGenerated": false,
							"manyRelationColumnRefs": [],
							"name": "SYSTEM_WIDE_OPERATION_LID",
							"notNull": true,
							"propertyRefs": [
								{
									"index": 5
								}
							],
							"sinceVersion": 1,
							"type": "NUMBER"
						},
						{
							"index": 6,
							"isGenerated": false,
							"manyRelationColumnRefs": [],
							"name": "ORIGINAL_ACTOR_RECORD_ID",
							"notNull": false,
							"propertyRefs": [
								{
									"index": 8
								}
							],
							"sinceVersion": 1,
							"type": "NUMBER"
						},
						{
							"index": 7,
							"isGenerated": false,
							"manyRelationColumnRefs": [
								{
									"manyRelationIndex": 2,
									"oneApplication_Index": 1,
									"oneTableIndex": 9,
									"oneColumnIndex": 0,
									"sinceVersion": 1
								}
							],
							"name": "ORIGINAL_REPOSITORY_LID",
							"notNull": false,
							"propertyRefs": [
								{
									"index": 6
								}
							],
							"sinceVersion": 1,
							"type": "NUMBER"
						},
						{
							"index": 8,
							"isGenerated": false,
							"manyRelationColumnRefs": [
								{
									"manyRelationIndex": 3,
									"oneApplication_Index": 1,
									"oneTableIndex": 0,
									"oneColumnIndex": 0,
									"sinceVersion": 1
								}
							],
							"name": "ORIGINAL_ACTOR_LID",
							"notNull": false,
							"propertyRefs": [
								{
									"index": 7
								}
							],
							"sinceVersion": 1,
							"type": "NUMBER"
						},
						{
							"index": 9,
							"isGenerated": false,
							"manyRelationColumnRefs": [],
							"name": "OBJECT",
							"notNull": false,
							"propertyRefs": [
								{
									"index": 9
								}
							],
							"sinceVersion": 1,
							"type": "STRING"
						},
						{
							"index": 10,
							"isGenerated": false,
							"manyRelationColumnRefs": [],
							"name": "ACTION",
							"notNull": false,
							"propertyRefs": [
								{
									"index": 10
								}
							],
							"sinceVersion": 1,
							"type": "STRING"
						},
						{
							"index": 11,
							"isGenerated": false,
							"manyRelationColumnRefs": [],
							"name": "NAME",
							"notNull": false,
							"propertyRefs": [
								{
									"index": 11
								}
							],
							"sinceVersion": 1,
							"type": "STRING"
						}
					],
					"idColumnRefs": [
						{
							"index": 0
						},
						{
							"index": 1
						},
						{
							"index": 2
						}
					],
					"index": 9,
					"isLocal": false,
					"isAirEntity": true,
					"name": "Factor",
					"properties": [
						{
							"index": 0,
							"isId": true,
							"name": "repository",
							"relationRef": {
								"index": 0
							},
							"sinceVersion": 1
						},
						{
							"index": 1,
							"isId": true,
							"name": "actor",
							"relationRef": {
								"index": 1
							},
							"sinceVersion": 1
						},
						{
							"columnRef": {
								"index": 2
							},
							"index": 2,
							"isId": true,
							"name": "_actorRecordId",
							"sinceVersion": 1
						},
						{
							"columnRef": {
								"index": 3
							},
							"index": 3,
							"isId": false,
							"name": "ageSuitability",
							"sinceVersion": 1
						},
						{
							"columnRef": {
								"index": 4
							},
							"index": 4,
							"isId": false,
							"name": "createdAt",
							"sinceVersion": 1
						},
						{
							"columnRef": {
								"index": 5
							},
							"index": 5,
							"isId": false,
							"name": "systemWideOperationId",
							"sinceVersion": 1
						},
						{
							"index": 6,
							"isId": false,
							"name": "originalRepository",
							"relationRef": {
								"index": 2
							},
							"sinceVersion": 1
						},
						{
							"index": 7,
							"isId": false,
							"name": "originalActor",
							"relationRef": {
								"index": 3
							},
							"sinceVersion": 1
						},
						{
							"columnRef": {
								"index": 6
							},
							"index": 8,
							"isId": false,
							"name": "originalActorRecordId",
							"sinceVersion": 1
						},
						{
							"columnRef": {
								"index": 9
							},
							"index": 9,
							"isId": false,
							"name": "object",
							"sinceVersion": 1
						},
						{
							"columnRef": {
								"index": 10
							},
							"index": 10,
							"isId": false,
							"name": "action",
							"sinceVersion": 1
						},
						{
							"columnRef": {
								"index": 11
							},
							"index": 11,
							"isId": false,
							"name": "customText",
							"sinceVersion": 1
						}
					],
					"relations": [
						{
							"index": 0,
							"isId": true,
							"relationType": "MANY_TO_ONE",
							"propertyRef": {
								"index": 0
							},
							"relationTableIndex": 9,
							"relationTableApplication_Index": 1,
							"sinceVersion": 1
						},
						{
							"index": 1,
							"isId": true,
							"relationType": "MANY_TO_ONE",
							"propertyRef": {
								"index": 1
							},
							"relationTableIndex": 0,
							"relationTableApplication_Index": 1,
							"sinceVersion": 1
						},
						{
							"index": 2,
							"isId": false,
							"relationType": "MANY_TO_ONE",
							"propertyRef": {
								"index": 6
							},
							"relationTableIndex": 9,
							"relationTableApplication_Index": 1,
							"sinceVersion": 1
						},
						{
							"index": 3,
							"isId": false,
							"relationType": "MANY_TO_ONE",
							"propertyRef": {
								"index": 7
							},
							"relationTableIndex": 0,
							"relationTableApplication_Index": 1,
							"sinceVersion": 1
						}
					],
					"sinceVersion": 1,
					"tableConfig": {
						"name": "FACTORS",
						"columnIndexes": []
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
									"oneApplication_Index": 1,
									"oneTableIndex": 9,
									"oneColumnIndex": 0,
									"sinceVersion": 1
								}
							],
							"name": "REPOSITORY_LID",
							"notNull": true,
							"propertyRefs": [
								{
									"index": 0
								}
							],
							"sinceVersion": 1,
							"type": "NUMBER"
						},
						{
							"index": 1,
							"isGenerated": false,
							"manyRelationColumnRefs": [
								{
									"manyRelationIndex": 1,
									"oneApplication_Index": 1,
									"oneTableIndex": 0,
									"oneColumnIndex": 0,
									"sinceVersion": 1
								}
							],
							"name": "ACTOR_LID",
							"notNull": true,
							"propertyRefs": [
								{
									"index": 1
								}
							],
							"sinceVersion": 1,
							"type": "NUMBER"
						},
						{
							"index": 2,
							"isGenerated": true,
							"manyRelationColumnRefs": [],
							"name": "ACTOR_RECORD_ID",
							"notNull": true,
							"propertyRefs": [
								{
									"index": 2
								}
							],
							"sinceVersion": 1,
							"type": "NUMBER"
						},
						{
							"index": 3,
							"isGenerated": false,
							"manyRelationColumnRefs": [],
							"name": "AGE_SUITABILITY",
							"notNull": true,
							"propertyRefs": [
								{
									"index": 3
								}
							],
							"sinceVersion": 1,
							"type": "NUMBER"
						},
						{
							"index": 4,
							"isGenerated": false,
							"manyRelationColumnRefs": [],
							"name": "CREATED_AT",
							"notNull": false,
							"propertyRefs": [
								{
									"index": 4
								}
							],
							"sinceVersion": 1,
							"type": "DATE"
						},
						{
							"index": 5,
							"isGenerated": false,
							"manyRelationColumnRefs": [],
							"name": "SYSTEM_WIDE_OPERATION_LID",
							"notNull": true,
							"propertyRefs": [
								{
									"index": 5
								}
							],
							"sinceVersion": 1,
							"type": "NUMBER"
						},
						{
							"index": 6,
							"isGenerated": false,
							"manyRelationColumnRefs": [],
							"name": "ORIGINAL_ACTOR_RECORD_ID",
							"notNull": false,
							"propertyRefs": [
								{
									"index": 8
								}
							],
							"sinceVersion": 1,
							"type": "NUMBER"
						},
						{
							"index": 7,
							"isGenerated": false,
							"manyRelationColumnRefs": [
								{
									"manyRelationIndex": 2,
									"oneApplication_Index": 1,
									"oneTableIndex": 9,
									"oneColumnIndex": 0,
									"sinceVersion": 1
								}
							],
							"name": "ORIGINAL_REPOSITORY_LID",
							"notNull": false,
							"propertyRefs": [
								{
									"index": 6
								}
							],
							"sinceVersion": 1,
							"type": "NUMBER"
						},
						{
							"index": 8,
							"isGenerated": false,
							"manyRelationColumnRefs": [
								{
									"manyRelationIndex": 3,
									"oneApplication_Index": 1,
									"oneTableIndex": 0,
									"oneColumnIndex": 0,
									"sinceVersion": 1
								}
							],
							"name": "ORIGINAL_ACTOR_LID",
							"notNull": false,
							"propertyRefs": [
								{
									"index": 7
								}
							],
							"sinceVersion": 1,
							"type": "NUMBER"
						},
						{
							"index": 9,
							"isGenerated": false,
							"manyRelationColumnRefs": [],
							"name": "NAME",
							"notNull": true,
							"propertyRefs": [
								{
									"index": 9
								}
							],
							"sinceVersion": 1,
							"type": "STRING"
						}
					],
					"idColumnRefs": [
						{
							"index": 0
						},
						{
							"index": 1
						},
						{
							"index": 2
						}
					],
					"index": 10,
					"isLocal": false,
					"isAirEntity": true,
					"name": "Position",
					"properties": [
						{
							"index": 0,
							"isId": true,
							"name": "repository",
							"relationRef": {
								"index": 0
							},
							"sinceVersion": 1
						},
						{
							"index": 1,
							"isId": true,
							"name": "actor",
							"relationRef": {
								"index": 1
							},
							"sinceVersion": 1
						},
						{
							"columnRef": {
								"index": 2
							},
							"index": 2,
							"isId": true,
							"name": "_actorRecordId",
							"sinceVersion": 1
						},
						{
							"columnRef": {
								"index": 3
							},
							"index": 3,
							"isId": false,
							"name": "ageSuitability",
							"sinceVersion": 1
						},
						{
							"columnRef": {
								"index": 4
							},
							"index": 4,
							"isId": false,
							"name": "createdAt",
							"sinceVersion": 1
						},
						{
							"columnRef": {
								"index": 5
							},
							"index": 5,
							"isId": false,
							"name": "systemWideOperationId",
							"sinceVersion": 1
						},
						{
							"index": 6,
							"isId": false,
							"name": "originalRepository",
							"relationRef": {
								"index": 2
							},
							"sinceVersion": 1
						},
						{
							"index": 7,
							"isId": false,
							"name": "originalActor",
							"relationRef": {
								"index": 3
							},
							"sinceVersion": 1
						},
						{
							"columnRef": {
								"index": 6
							},
							"index": 8,
							"isId": false,
							"name": "originalActorRecordId",
							"sinceVersion": 1
						},
						{
							"columnRef": {
								"index": 9
							},
							"index": 9,
							"isId": false,
							"name": "name",
							"sinceVersion": 1
						}
					],
					"relations": [
						{
							"index": 0,
							"isId": true,
							"relationType": "MANY_TO_ONE",
							"propertyRef": {
								"index": 0
							},
							"relationTableIndex": 9,
							"relationTableApplication_Index": 1,
							"sinceVersion": 1
						},
						{
							"index": 1,
							"isId": true,
							"relationType": "MANY_TO_ONE",
							"propertyRef": {
								"index": 1
							},
							"relationTableIndex": 0,
							"relationTableApplication_Index": 1,
							"sinceVersion": 1
						},
						{
							"index": 2,
							"isId": false,
							"relationType": "MANY_TO_ONE",
							"propertyRef": {
								"index": 6
							},
							"relationTableIndex": 9,
							"relationTableApplication_Index": 1,
							"sinceVersion": 1
						},
						{
							"index": 3,
							"isId": false,
							"relationType": "MANY_TO_ONE",
							"propertyRef": {
								"index": 7
							},
							"relationTableIndex": 0,
							"relationTableApplication_Index": 1,
							"sinceVersion": 1
						}
					],
					"sinceVersion": 1,
					"tableConfig": {
						"name": "POSITIONS",
						"columnIndexes": []
					}
				}
			],
			"integerVersion": 1,
			"referencedApplications": [
				{
					"domain": "localhost:8100",
					"index": 0,
					"name": "@sapoto/core",
					"sinceVersion": 1,
					"versions": [
						{
							"entities": null,
							"integerVersion": 1,
							"referencedApplications": null,
							"versionString": "1.0.0"
						}
					]
				},
				{
					"domain": "air",
					"index": 1,
					"name": "@airport/holding-pattern",
					"sinceVersion": 1,
					"versions": [
						{
							"entities": null,
							"integerVersion": 1,
							"referencedApplications": null,
							"versionString": "1.0.0"
						}
					]
				}
			],
			"versionString": "1.0.0"
		}
	]
};