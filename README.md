New Tours Demo Website - AUtomation using CucumberJvm and Selenium
==================================================================

This project automates a couple of flight booking scenarios using the New Tours Demo website.

To run:
mvn clean install
mvn clean test

Note: the test is currently configured to run on a Macbook using the macChromeDriver.  It is not set up to auto-detect the host environment.  To run on windows, just change line 27 in src/test/java/step_definitions/Hooks.java to this:

System.setProperty("webdriver.chrome.driver","src/test/resources/selenium_browser_drivers/windowsChromedriver/chromedriver.exe");



The project is based on a CucumberJvm-Selenium template.  Information below:
  
cucumber-jvm-template
=====================

This is a template project that you can use to start with cucumber-jvm and selenium java tests. Read about it on [seleniumframework.com](http://www.seleniumframework.com/cucumber-jvm-3/cucumber-jvm-and-selenium/)

# Full Tutorials

[Basic Tutorial](http://www.seleniumframework.com/cucumber-jvm-3/cucumber-jvm-and-selenium/)  
[Intermediate Tutorial](http://www.seleniumframework.com/cucumber-jvm-3/parameterize-browser/)  
[Advanced Tutorial/Frameworks](http://www.seleniumframework.com/cucumber-jvm-3/what-are-frameworks/)
