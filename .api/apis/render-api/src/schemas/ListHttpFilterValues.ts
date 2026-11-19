const ListHttpFilterValues = {
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
          },
          "host": {
            "type": "string",
            "examples": [
              "example.com"
            ],
            "description": "The hosts of HTTP requests to filter to. When multiple host query params are provided, they are ORed together"
          },
          "statusCode": {
            "type": "string",
            "examples": [
              "200"
            ],
            "description": "The status codes of HTTP requests to filter to. When multiple status code query params are provided, they are ORed together"
          }
        }
      }
    ]
  },
  "response": {
    "200": {
      "type": "array",
      "description": "A collection of filter values for HTTP metrics",
      "required": [
        "items"
      ],
      "items": {
        "type": "object",
        "properties": {
          "filter": {
            "type": "string",
            "enum": [
              "host",
              "statusCode"
            ],
            "description": "`host` `statusCode`"
          },
          "values": {
            "type": "array",
            "items": {
              "type": "string",
              "examples": [
                "api.example.com"
              ]
            }
          }
        }
      },
      "$schema": "http://json-schema.org/draft-04/schema#"
    }
  }
} as const;
export default ListHttpFilterValues
