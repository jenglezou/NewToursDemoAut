$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("features/NewToursDemoAut.feature");
formatter.feature({
  "line": 1,
  "name": "New Tours Flight Bookings",
  "description": "Book flights using the new tours website",
  "id": "new-tours-flight-bookings",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "comments": [
    {
      "line": 4,
      "value": "# Scenario Outline: Login to the new tours website"
    },
    {
      "line": 5,
      "value": "#   Given I open the newtours web page"
    },
    {
      "line": 6,
      "value": "#   When I login as \u003cusername\u003e with \u003cpassword\u003e"
    },
    {
      "line": 7,
      "value": "#   Then the flight finder page is displayed"
    },
    {
      "line": 9,
      "value": "#   Examples:"
    },
    {
      "line": 10,
      "value": "#   | username | password |"
    },
    {
      "line": 11,
      "value": "#   | jjee     | drowssap |"
    }
  ],
  "line": 13,
  "name": "Book a flight",
  "description": "",
  "id": "new-tours-flight-bookings;book-a-flight",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 14,
  "name": "I open the newtours web page",
  "keyword": "Given "
});
formatter.step({
  "line": 15,
  "name": "I login as \u003cusername\u003e with \u003cpassword\u003e",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 16,
      "value": "# | username | password |"
    },
    {
      "line": 17,
      "value": "# | jjee     | drowssap |"
    }
  ],
  "line": 18,
  "name": "the flight finder page is displayed",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "I look for a flight from \u003corigin\u003e to \u003cdestination\u003e departing on \u003cdeparture_month\u003e \u003cdeparture_day\u003e and returning on \u003creturn_month\u003e \u003creturn_day\u003e",
  "keyword": "When "
});
formatter.step({
  "line": 20,
  "name": "I select the first flight",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "I book the flight for \u003cfirst_name\u003e \u003clast_name\u003e using card \u003ccard_number\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "I get a booking confirmation",
  "keyword": "Then "
});
formatter.examples({
  "line": 24,
  "name": "",
  "description": "",
  "id": "new-tours-flight-bookings;book-a-flight;",
  "rows": [
    {
      "cells": [
        "username",
        "password",
        "origin",
        "destination",
        "departure_month",
        "departure_day",
        "return_month",
        "return_day",
        "first_name",
        "last_name",
        "card_number"
      ],
      "line": 25,
      "id": "new-tours-flight-bookings;book-a-flight;;1"
    },
    {
      "cells": [
        "jjee",
        "drowssap",
        "London",
        "New York",
        "January",
        "13",
        "January",
        "20",
        "JJ",
        "ee",
        "12341234"
      ],
      "line": 26,
      "id": "new-tours-flight-bookings;book-a-flight;;2"
    },
    {
      "cells": [
        "jjee",
        "drowssap",
        "London",
        "Frankfurt",
        "January",
        "24",
        "January",
        "31",
        "JJ",
        "ee",
        "12341234"
      ],
      "line": 27,
      "id": "new-tours-flight-bookings;book-a-flight;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 2658310898,
  "status": "passed"
});
formatter.scenario({
  "line": 26,
  "name": "Book a flight",
  "description": "",
  "id": "new-tours-flight-bookings;book-a-flight;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 14,
  "name": "I open the newtours web page",
  "keyword": "Given "
});
formatter.step({
  "line": 15,
  "name": "I login as jjee with drowssap",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 16,
      "value": "# | username | password |"
    },
    {
      "line": 17,
      "value": "# | jjee     | drowssap |"
    }
  ],
  "line": 18,
  "name": "the flight finder page is displayed",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "I look for a flight from London to New York departing on January 13 and returning on January 20",
  "matchedColumns": [
    2,
    3,
    4,
    5,
    6,
    7
  ],
  "keyword": "When "
});
formatter.step({
  "line": 20,
  "name": "I select the first flight",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "I book the flight for JJ ee using card 12341234",
  "matchedColumns": [
    8,
    9,
    10
  ],
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "I get a booking confirmation",
  "keyword": "Then "
});
formatter.match({
  "location": "NewToursDemoAut.i_open_the_newtours_web_page()"
});
formatter.result({
  "duration": 2697163278,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "jjee",
      "offset": 11
    },
    {
      "val": "drowssap",
      "offset": 21
    }
  ],
  "location": "NewToursDemoAut.i_login_with_username_and_password(String,String)"
});
formatter.result({
  "duration": 27788718467,
  "status": "passed"
});
formatter.match({
  "location": "NewToursDemoAut.the_flight_finder_page_is_displayed()"
});
formatter.result({
  "duration": 9746278,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "London",
      "offset": 25
    },
    {
      "val": "New York",
      "offset": 35
    },
    {
      "val": "January",
      "offset": 57
    },
    {
      "val": "13",
      "offset": 65
    },
    {
      "val": "January",
      "offset": 85
    },
    {
      "val": "20",
      "offset": 93
    }
  ],
  "location": "NewToursDemoAut.i_look_for_a_flight_from_origin_to_destination_departing_on_date_and_returning_on_date(String,String,String,String,String,String)"
});
formatter.result({
  "duration": 7224686469,
  "status": "passed"
});
formatter.match({
  "location": "NewToursDemoAut.i_select_the_first_flight()"
});
formatter.result({
  "duration": 6884841846,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "JJ",
      "offset": 22
    },
    {
      "val": "ee",
      "offset": 25
    },
    {
      "val": "12341234",
      "offset": 39
    }
  ],
  "location": "NewToursDemoAut.i_book_the_flight_for_JJ_ee_using_card(String,String,String)"
});
formatter.result({
  "duration": 4585658075,
  "status": "passed"
});
formatter.match({
  "location": "NewToursDemoAut.i_get_a_booking_confirmation()"
});
formatter.result({
  "duration": 8548806,
  "status": "passed"
});
formatter.after({
  "duration": 571983631,
  "status": "passed"
});
formatter.before({
  "duration": 1980952751,
  "status": "passed"
});
formatter.scenario({
  "line": 27,
  "name": "Book a flight",
  "description": "",
  "id": "new-tours-flight-bookings;book-a-flight;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 14,
  "name": "I open the newtours web page",
  "keyword": "Given "
});
formatter.step({
  "line": 15,
  "name": "I login as jjee with drowssap",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 16,
      "value": "# | username | password |"
    },
    {
      "line": 17,
      "value": "# | jjee     | drowssap |"
    }
  ],
  "line": 18,
  "name": "the flight finder page is displayed",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "I look for a flight from London to Frankfurt departing on January 24 and returning on January 31",
  "matchedColumns": [
    2,
    3,
    4,
    5,
    6,
    7
  ],
  "keyword": "When "
});
formatter.step({
  "line": 20,
  "name": "I select the first flight",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "I book the flight for JJ ee using card 12341234",
  "matchedColumns": [
    8,
    9,
    10
  ],
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "I get a booking confirmation",
  "keyword": "Then "
});
formatter.match({
  "location": "NewToursDemoAut.i_open_the_newtours_web_page()"
});
formatter.result({
  "duration": 1958579835,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "jjee",
      "offset": 11
    },
    {
      "val": "drowssap",
      "offset": 21
    }
  ],
  "location": "NewToursDemoAut.i_login_with_username_and_password(String,String)"
});
formatter.result({
  "duration": 87106326315,
  "status": "passed"
});
formatter.match({
  "location": "NewToursDemoAut.the_flight_finder_page_is_displayed()"
});
formatter.result({
  "duration": 6831627,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "London",
      "offset": 25
    },
    {
      "val": "Frankfurt",
      "offset": 35
    },
    {
      "val": "January",
      "offset": 58
    },
    {
      "val": "24",
      "offset": 66
    },
    {
      "val": "January",
      "offset": 86
    },
    {
      "val": "31",
      "offset": 94
    }
  ],
  "location": "NewToursDemoAut.i_look_for_a_flight_from_origin_to_destination_departing_on_date_and_returning_on_date(String,String,String,String,String,String)"
});
formatter.result({
  "duration": 1212558164,
  "status": "passed"
});
formatter.match({
  "location": "NewToursDemoAut.i_select_the_first_flight()"
});
formatter.result({
  "duration": 1539528740,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "JJ",
      "offset": 22
    },
    {
      "val": "ee",
      "offset": 25
    },
    {
      "val": "12341234",
      "offset": 39
    }
  ],
  "location": "NewToursDemoAut.i_book_the_flight_for_JJ_ee_using_card(String,String,String)"
});
formatter.result({
  "duration": 5405145989,
  "status": "passed"
});
formatter.match({
  "location": "NewToursDemoAut.i_get_a_booking_confirmation()"
});
formatter.result({
  "duration": 8336554,
  "status": "passed"
});
formatter.after({
  "duration": 574935390,
  "status": "passed"
});
});