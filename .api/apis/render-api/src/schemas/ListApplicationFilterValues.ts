const ListApplicationFilterValues = {
  "metadata": {
    "allOf": [
      {
        "$schema": "http://json-schema.org/draft-04/schema#",
        "type": "object",
        "properties": {
          "startTime": {
            "type": "string",
            "format": "date-time",
            "examples": [
              "2021-06-17T08:15:30Z"
            ],
            "description": "Epoch/Unix timestamp of start of time range to return. Defaults to `now() - 1 hour`."
          },
          "endTime": {
            "type": "string",
            "format": "date-time",
            "examples": [
              "2021-06-17T08:30:30Z"
            ],
            "description": "Epoch/Unix timestamp of end of time range to return. Defaults to `now()`."
          },
          "resolutionSeconds": {
            "type": "number",
            "minimum": 30,
            "default": 60,
            "examples": [
              60
            ],
            "description": "The resolution of the returned data"
          },
          "resource": {
            "type": "string",
            "examples": [
              "srv-xxxxx"
            ],
            "description": "Service ID to query. When multiple service ids are provided, they are ORed together"
          },
          "service": {
            "type": "string",
            "deprecated": true,
            "examples": [
              "srv-xxxxx"
            ],
            "description": "This parameter is deprecated. Please use `resource` instead"
          }
        }
      }
    ]
  },
  "response": {
    "200": {
      "type": "array",
      "description": "A collection of filter values for application metrics",
      "required": [
        "items"
      ],
      "items": {
        "type": "object",
        "properties": {
          "filter": {
            "type": "string",
            "enum": [
              "instance"
            ],
            "description": "`instance`"
          },
          "values": {
            "type": "array",
            "items": {
              "type": "string",
              "examples": [
                "srv-xxxxx-yyyy"
              ]
            }
          }
        }
      },
      "$schema": "http://json-schema.org/draft-04/schema#"
    }
  }
} as const;
export default ListApplicationFilterValues
