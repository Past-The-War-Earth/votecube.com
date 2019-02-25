{
  "UI": {
    "Dimension": {
      "Info": {
        "name": {
          "info": "A short name that is common to both Positions.  It is prefixed to the descriptions on both opposite sides of a cube for this Factor.",
          "label": "Factor Name",
          "errors": {
            "required": "Factor Name is required",
            "minLength": "Factor Name must be at least 5 characters long"
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
          "label": "Select Tags"
        }
      },
      "PickColor": {
        "error": "Factor Color is required",
        "label": "Select Color",
        "picker": {
          "errors": {
            "required": "Factor Color is required"
          }
        }
      }
    },
    "Direction": {
      "BottomDirection": {
        "error": "Down Position is required",
        "label": "Select Down Position",
        "name": {
          "info": "The Down Position on a Factor of the vote cube.  This is the CON/Down side.",
          "label": "Down Position",
          "errors": {
            "required": "Down Position is required",
            "minLength": "Position Name must be at least 5 characters long"
          }
        }
      },
      "TopDirection": {
        "error": "Up Position is required",
        "label": "Select Up Position",
        "name": {
          "info": "The Up Position on a Factor of the vote cube.  This is the PRO/Up side.",
          "label": "Up Position",
          "errors": {
            "required": "Up Position is required",
            "minLength": "Position Name must be at least 5 characters long"
          }
        }
      }
    },
    "Poll": {
      "List": {
        "search": {
          "info": "Search for Polls or use the filter in the top-right menu",
          "label": "Find Polls"
        }
      },
      "MainInfo": {
        "name": {
          "info": "Select the name for this poll",
          "label": "Poll Issue",
          "errors": {
            "required": "Poll Issue is required",
            "minLength": "Poll Issue must be at least 3 characters long"
          }
        },
        "dimensions": {
          "info": "Select the Factors of the poll",
          "error": "At least two poll Factors are required"
        },
        "labels": {
          "info": "Select matching Tag(s) for this poll",
          "label": "Tag(s)"
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
          "label": "Select 1st Factor",
          "error": "First Factor is required"
        },
        "second": {
          "label": "Select 2nd Factor",
          "error": "Second Factor is required"
        },
        "third": {
          "label": "Select 3rd Factor",
          "error": "Third Factor must be fully omitted or fully specified"
        }
      },
      "Labels": {
        "labels": {
          "info": "Select matching Tag(s) for this poll",
          "label": "Tag(s)"
        }
      },
      "Locations": {
        "cities": {
          "info": "Select one or more Cities to which this poll will apply",
          "label": "City(ies)"
        },
        "continents": {
          "info": "Select one or more Continents to which this poll will apply",
          "label": "Continent(s)",
          "errors": {
            "required": "Continent is required"
          }
        },
        "countries": {
          "info": "Select one or more Countries to which this poll will apply",
          "label": "Country(ies)"
        },
        "error": "Poll Geography is required",
        "states": {
          "info": "Select one or more States to which this poll will apply",
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
        "error": "Poll Time Frame is required"
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