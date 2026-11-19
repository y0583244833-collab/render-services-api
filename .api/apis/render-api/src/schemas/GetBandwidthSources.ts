const GetBandwidthSources = {
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
      "type": "object",
      "properties": {
        "data": {
          "type": "array",
          "items": {
            "type": "object",
            "properties": {
              "labels": {
                "type": "object",
                "properties": {
                  "resource": {
                    "type": "string",
                    "examples": [
                      "srv-abc123"
                    ]
                  },
                  "trafficSource": {
                    "type": "string",
                    "enum": [
                      "total",
                      "http",
                      "websocket",
                      "nat",
                      "privatelink"
                    ],
                    "examples": [
                      "http"
                    ],
                    "description": "`total` `http` `websocket` `nat` `privatelink`"
                  }
                }
              },
              "values": {
                "type": "array",
                "items": {
                  "type": "object",
                  "properties": {
                    "timestamp": {
                      "type": "integer",
                      "examples": [
                        1709856000
                      ]
                    },
                    "value": {
                      "type": "number",
                      "examples": [
                        100
                      ]
                    }
                  }
                }
              }
            }
          }
        }
      },
      "$schema": "http://json-schema.org/draft-04/schema#"
    }
  }
} as const;
export default GetBandwidthSources
