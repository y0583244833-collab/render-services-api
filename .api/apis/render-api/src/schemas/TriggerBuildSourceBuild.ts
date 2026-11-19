const TriggerBuildSourceBuild = {
  "body": {
    "type": "object",
    "properties": {
      "clearCache": {
        "type": "string",
        "enum": [
          "clear",
          "do_not_clear"
        ],
        "default": "do_not_clear",
        "description": "If `clear`, Render clears the build source's build cache before building. This can be useful if you're experiencing issues with your build."
      }
    },
    "$schema": "http://json-schema.org/draft-04/schema#"
  },
  "metadata": {
    "allOf": [
      {
        "$schema": "http://json-schema.org/draft-04/schema#",
        "type": "object",
        "properties": {
          "buildSourceId": {
            "type": "string"
          }
        },
        "required": [
          "buildSourceId"
        ]
      }
    ]
  },
  "response": {
    "201": {
      "type": "object",
      "required": [
        "id",
        "buildSourceId",
        "createdAt",
        "updatedAt"
      ],
      "properties": {
        "id": {
          "type": "string"
        },
        "buildSourceId": {
          "type": "string"
        },
        "buildRun": {
          "type": "object",
          "required": [
            "id"
          ],
          "properties": {
            "id": {
              "type": "string"
            },
            "status": {
              "type": "string",
              "enum": [
                "created",
                "inProgress",
                "succeeded",
                "failed",
                "canceled",
                "unknown"
              ],
              "description": "`created` `inProgress` `succeeded` `failed` `canceled` `unknown`"
            },
            "buildStartedAt": {
              "type": "string",
              "format": "date-time"
            },
            "buildFinishedAt": {
              "type": "string",
              "format": "date-time"
            },
            "runtime": {
              "type": "string",
              "enum": [
                "docker",
                "elixir",
                "go",
                "node",
                "python",
                "ruby",
                "rust"
              ],
              "description": "`docker` `elixir` `go` `node` `python` `ruby` `rust`"
            },
            "commitId": {
              "type": "string"
            },
            "commitUrl": {
              "type": "string"
            }
          },
          "description": "The Render build run that produced this build. Present when the build source is currently build-based. Mutually exclusive with `image`.\n"
        },
        "image": {
          "type": "object",
          "properties": {
            "imageVersionId": {
              "type": "string"
            },
            "SHA": {
              "type": "string"
            },
            "ref": {
              "type": "string"
            },
            "imageUrl": {
              "type": "string"
            },
            "registryCredentialId": {
              "type": "string"
            }
          },
          "description": "Present when the build source is currently image-based. Mutually exclusive with `buildRun`.\n"
        },
        "createdAt": {
          "type": "string",
          "format": "date-time"
        },
        "updatedAt": {
          "type": "string",
          "format": "date-time"
        },
        "assetsDeletedAt": {
          "type": "string",
          "format": "date-time"
        }
      },
      "$schema": "http://json-schema.org/draft-04/schema#"
    }
  }
} as const;
export default TriggerBuildSourceBuild
