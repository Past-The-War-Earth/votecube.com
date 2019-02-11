{
  "UI": {
    "Dimension": {
      "Info": {
        "name": {
          "info": "A short name that is common to both directions.  It is prefixed to the descriptions on both opposite sides of a cube for this dimension.",
          "label": "Dimension Name",
          "errors": {
            "required": "Dimension Name is required",
            "minLength": "Dimension Name must be at least 5 characters long"
          }
        }
      },
      "List": {
        "theme": {
          "label": "Select the theme",
          "errors": {
            "required": "Theme is required"
          }
        },
        "labels": {
          "label": "Select labels"
        }
      },
      "PickColor": {
        "error": "Dimension Color is required",
        "label": "Select Color",
        "picker": {
          "errors": {
            "required": "Dimension Color is required"
          }
        }
      }
    },
    "Direction": {
      "BottomDirection": {
        "error": "Bottom Direction is required",
        "label": "Select Bottom Direction",
        "name": {
          "info": "The negative position on a facet/dimension of the vote cube.  This is the CON/negative side.",
          "label": "Bottom Direction",
          "errors": {
            "required": "Bottom Direction is required",
            "minLength": "Direction Name must be at least 5 characters long"
          }
        }
      },
      "TopDirection": {
        "error": "Top Direction is required",
        "label": "Select Top Direction",
        "name": {
          "info": "The positive position on a facet/dimension of the vote cube.  This is the PRO/positive side.",
          "label": "Top Direction",
          "errors": {
            "required": "Top Direction is required",
            "minLength": "Direction Name must be at least 5 characters long"
          }
        }
      }
    },
    "Poll": {
      "List": {
        "search": {
          "info": "Search all polls or use the filter in the top-right menu",
          "label": "Search Polls"
        }
      },
      "MainInfo": {
        "name": {
          "info": "Select the name for this poll",
          "label": "Poll Name",
          "errors": {
            "required": "Poll Name is required",
            "minLength": "Poll Name must be at least 3 characters long"
          }
        },
        "dimensions": {
          "info": "Select the dimensions of the poll",
          "error": "At least two poll dimensions are required"
        },
        "labels": {
          "info": "Select matching label(s) for this poll",
          "label": "Label(s)"
        },
        "locations": {
          "info": "Select the location(s) of the poll (Continent(s), Country(ies), State(s), City(ies))",
          "error": "Correct location information is required"
        },
        "timeframe": {
          "info": "Select the Start and End dates for the poll",
          "error": "Correct time-frame information is required"
        },
        "theme": {
          "info": "Select the defining theme of this poll",
          "label": "Theme",
          "errors": {
            "required": "Poll Theme is required"
          }
        }
      },
      "Dimensions": {
        "first": {
          "label": "Select 1st dimension",
          "error": "First dimension is required"
        },
        "second": {
          "label": "Select 2nd dimension",
          "error": "Second dimension is required"
        },
        "third": {
          "label": "Select 3rd dimension",
          "error": "Third dimension must be fully omitted or fully specified"
        }
      },
      "Labels": {
        "labels": {
          "info": "Select matching label(s) for this poll",
          "label": "Label(s)"
        }
      },
      "Locations": {
        "cities": {
          "info": "Select one or more cities to which this poll will apply",
          "label": "City(ies)"
        },
        "continents": {
          "info": "Select one or more continents to which this poll will apply",
          "label": "Continent(s)",
          "errors": {
            "required": "Continent is required"
          }
        },
        "countries": {
          "info": "Select one or more countries to which this poll will apply",
          "label": "Country(ies)"
        },
        "error": "Poll Location is required",
        "states": {
          "info": "Select one or more states to which this poll will apply",
          "label": "State(s)"
        }
      },
      "Timeframe": {
        "startDate": {
          "info": "Select the date when this poll starts",
          "label": "Start Date",
          "errors": {
            "required": "Start Date is required",
            "format": "Start Date is invalid",
            "min": "Start Date must be greater than today"
          }
        },
        "endDate": {
          "info": "Select the last date when this poll open",
          "label": "End Date",
          "errors": {
            "required": "End Date is required",
            "format": "End Date is invalid",
            "min": "End Date must be greater than today",
            "greaterThanOrEquals": "End Date must be on or after Start Date"
          }
        },
        "error": "Poll Timeframe is required"
      }
    },
    "Common": {
      "Field": {
        "Datepicker": {
          "month": {
            "0": "January",
            "1": "February",
            "2": "March",
            "3": "April",
            "4": "May",
            "5": "June",
            "6": "July",
            "7": "August",
            "8": "September",
            "9": "October",
            "10": "November",
            "11": "December"
          },
          "weekDayOrder": [
            0,
            1,
            2,
            3,
            4,
            5,
            6
          ],
          "shortWeekDay": {
            "0": "Su",
            "1": "Mo",
            "2": "Tu",
            "3": "We",
            "4": "Th",
            "5": "Fr",
            "6": "Sa"
          },
          "dateInput": {
            "placeholder": {
              "month": " M",
              "date": " D",
              "year": "YYYY"
            },
            "separator": "/"
          }
        }
      }
    }
  }
}