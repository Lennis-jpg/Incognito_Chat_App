var spec = {
  "openapi": "3.0.1",
  "info": {
    "version": "4.1.0",
    "title": "Incongito Chat API Documentation"
  },
  "paths": {
    "/IncongitoChat": {
      "post": {
        "summary": "Create account",
        "operationId": "createIncongitoChat",
        "tags": [
          "IncongitoChat API"
        ],
        "requestBody": {
          "content": {
            "application/json": {
              "schema": {
                "$ref": "#/components/schemas/IncongitoChat"
              }
            }
          }
        },
        "responses": {
          "201": {
            "description": "Success",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/IncongitoChat"
                }
              }
            }
          },
          "400": {
            "$ref": "#/components/responses/IllegalInput"
          }
        }
      }
, 
     //
     "post": {
      "summary": "Create message",
      "operationId": "createmessage",
      "tags": [
        "Message"
      ],
      "requestBody": {
        "content": {
          "application/json": {
            "schema": {
              "$ref": "#/components/schemas/IncongitoChat"
            }
          }
        }
      },
      "responses": {
        "201": {
          "description": "Success",
          "content": {
            "application/json": {
              "schema": {
                "$ref": "#/components/schemas/IncongitoChat"
              }
            }
          }
        },
        "400": {
          "$ref": "#/components/responses/IllegalInput"
        }
      }
    }, 
     //
      "get": {
        "summary": "Get a list of accounts",
        "operationId": "listIncongitoChat",
        "tags": [
          "IncongitoChat API"
        ],
        "parameters": [
          {
            "$ref": "#/components/parameters/Limit"
          },
          {
            "$ref": "#/components/parameters/Offset"
          }
        ],
        "responses": {
          "200": {
            "description": "Success",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/IncongitoChatList"
                }
              }
            }
          }
        }
      }
    },
    "/IncongitoChat/{id}": {
      "get": {
        "summary": "Get an account",
        "operationId": "getIncongitoChat",
        "tags": [
          "IncongitoChat API"
        ],
        "parameters": [
          {
            "$ref": "#/components/parameters/Id"
          }
        ],
        "responses": {
          "200": {
            "description": "Success",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/IncongitoChat"
                }
              }
            }
          },
          "404": {
            "$ref": "#/components/responses/NotFound"
          }
        }
      },
      "put": {
        "summary": "Update an account",
        "operationId": "updateIncongitoChat",
        "tags": [
          "IncongitoChat API"
        ],
        "parameters": [
          {
            "$ref": "#/components/parameters/Id"
          }
        ],
        "requestBody": {
          "content": {
            "application/json": {
              "schema": {
                "$ref": "#/components/schemas/IncongitoChat"
              }
            }
          }
        },
        "responses": {
          "200": {
            "description": "Success",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/IncongitoChat"
                }
              }
            }
          },
          "404": {
            "$ref": "#/components/responses/NotFound"
          }
        }
      },
      "delete": {
        "summary": "Delete an Account",
        "operationId": "deleteIncongitoChat",
        "tags": [
          "IncongitoChat API"
        ],
        "parameters": [
          {
            "$ref": "#/components/parameters/Id"
          }
        ],
        "responses": {
          "204": {
            "description": "Success"
          },
          "404": {
            "$ref": "#/components/responses/NotFound"
          }
        }
      }
    }
  },
  "components": {
    "schemas": {
      "Id": {
        "description": "Resource ID",
        "type": "integer",
        "format": "int64",
        "readOnly": true,
        "example": 1
      },
      "IncongitoChatForList": {
        "properties": {
          "id": {
            "$ref": "#/components/schemas/Id"
          },
          "category": {
            "description": "Category of an IncongitoChat",
            "type": "string",
            "example": "sports"
          }
        }
      },
      "IncongitoChat": {
        "allOf": [
          {
            "$ref": "#/components/schemas/IncongitoChatForList"
          }
        ],
        "required": [
          "text"
        ],
        "properties": {
          "text": {
            "description": "Content of an IncongitoChat",
            "type": "string",
            "maxLength": 1024,
            "example": "# Title\n\n## Head Line\n\nBody"
          }
        }
      },
      "IncongitoChatList": {
        "type": "array",
        "items": {
          "$ref": "#/components/schemas/IncongitoChatForList"
        }
      },
      "Error": {
        "description": "<table>\n  <tr>\n    <th>Code</th>\n    <th>Description</th>\n  </tr>\n  <tr>\n    <td>illegal_input</td>\n    <td>The input is invalid.</td>\n  </tr>\n  <tr>\n    <td>not_found</td>\n    <td>The resource is not found.</td>\n  </tr>\n</table>\n",
        "required": [
          "code",
          "message"
        ],
        "properties": {
          "code": {
            "type": "string",
            "example": "illegal_input"
          }
        }
      }
    },
    "parameters": {
      "Id": {
        "name": "id",
        "in": "path",
        "description": "Resource ID",
        "required": true,
        "schema": {
          "$ref": "#/components/schemas/Id"
        }
      },
      "Limit": {
        "name": "limit",
        "in": "query",
        "description": "limit",
        "required": false,
        "schema": {
          "type": "integer",
          "minimum": 1,
          "maximum": 100,
          "default": 10,
          "example": 10
        }
      },
      "Offset": {
        "name": "offset",
        "in": "query",
        "description": "offset",
        "required": false,
        "schema": {
          "type": "integer",
          "minimum": 0,
          "default": 0,
          "example": 10
        }
      }
    },
    "responses": {
      "NotFound": {
        "description": "The resource is not found.",
        "content": {
          "application/json": {
            "schema": {
              "$ref": "#/components/schemas/Error"
            }
          }
        }
      },
      "IllegalInput": {
        "description": "The input is invalid.",
        "content": {
          "application/json": {
            "schema": {
              "$ref": "#/components/schemas/Error"
            }
          }
        }
      }
    }
  }
}