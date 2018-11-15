Feature: New Tours Flight Bookings
  Book flights using the new tours website 

  # Scenario Outline: Login to the new tours website
  #   Given I open the newtours web page  
  #   When I login as <username> with <password> 
  #   Then the flight finder page is displayed

  #   Examples:
  #   | username | password | 
  #   | jjee     | drowssap |

  Scenario Outline: Book a flight
    Given I open the newtours web page  
    And I login as <username> with <password>
    # | username | password | 
    # | jjee     | drowssap |
    And the flight finder page is displayed
    When I look for a flight from <origin> to <destination> departing on <departure_month> <departure_day> and returning on <return_month> <return_day> 
    And I select the first flight
    And I book the flight for <first_name> <last_name> using card <card_number>
    Then I get a booking confirmation

    Examples:
    | username | password | origin | destination | departure_month | departure_day | return_month | return_day | first_name | last_name | card_number |
    | jjee     | drowssap | London | New York    | January         | 13            | January      | 20         | JJ         | ee        | 12341234    |
    | jjee     | drowssap | London | Frankfurt   | January         | 24            | January      | 31         | JJ         | ee        | 12341234    |
