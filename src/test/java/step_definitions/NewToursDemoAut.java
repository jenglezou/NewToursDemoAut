package step_definitions;

import helpers.DataHelper;

import static org.junit.Assert.assertEquals;
import static org.junit.Assert.assertTrue;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;

// import modules.SignInAction;
// import modules.SignoutAction;

import org.openqa.selenium.By;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;


import org.openqa.selenium.WebDriver;
import org.openqa.selenium.support.PageFactory;

import pageobjects.NewToursHomePage;
import pageobjects.SignOnPage;
import pageobjects.BookAFlightPage;
import pageobjects.FlightFinderPage;
import pageobjects.SelectFlightPage;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import cucumber.api.java.en.Given;


public class NewToursDemoAut{
    public WebDriver driver;
    // public List<HashMap<String,String>> datamap = DataHelper.data();
    public static List<HashMap<String,String>> datamap = null;
    
    
    public NewToursDemoAut()
    {
    	driver = Hooks.driver;
    	
    	datamap = new ArrayList<HashMap<String,String>>();
    	HashMap<String,String> sampleData = new HashMap<String,String>();
    	sampleData.put("username","jjee");
    	sampleData.put("password","drowssap");
    	System.out.println("Current data" +sampleData);
    	datamap.add(sampleData);
    }
    
    @FindBy(xpath="//a[text()='SIGN-OFF']")
    public static WebElement signOff;

    @Given("^I open the newtours web page$")
    public void i_open_the_newtours_web_page() throws Throwable {
        // Write code here that turns the phrase above into concrete actions
    
        // Attempted to detect that the browser was already open and not reopen.
        // Instead of using the browser opened in hooks. Needs more investigation ...
        
        // try {
        //     if (driver.getTitle() == "") {
        //         // if (signOff.isDisplayed()) {
        //         //     signOff.click();
        //         // }
        //     }
        // } catch (Exception err){
        //     // System.setProperty("webdriver.chrome.driver","src/test/resources/selenium_browser_drivers/macChromedriver/chromedriver");
        //     // driver = new ChromeDriver();
        //     driver.get("http://newtours.demoaut.com");
        // }
        driver.get("http://newtours.demoaut.com");

    }

    @When("^I login as (.*) with (.*)$")
    public void i_login_with_username_and_password(String username, String password) throws Throwable {
        // driver.get("http://newtours.demoaut.com/mercurysignon.php");
        
        PageFactory.initElements(driver, NewToursHomePage.class);
        NewToursHomePage.clickSignonLink();

        PageFactory.initElements(driver, SignOnPage.class);
        SignOnPage.setUsername(username);
        SignOnPage.setPassword(password);
        SignOnPage.login.click();
        // Thread.sleep(1000);
        // throw new PendingException();
    }
    
    @Then("^the flight finder page is displayed$")
    public void the_flight_finder_page_is_displayed() throws Throwable {
        assertTrue(driver.getTitle().contains("Find a Flight"));
        // throw new PendingException();
    }
    
    @Given("^I am on the fight finder page$")
    public void i_am_on_the_flight_finder_page() throws Throwable {
        assertTrue(driver.getTitle().contains("Find a Flight"));
        // throw new PendingException();
    }

    @When("^I look for a flight from (.*) to (.*) departing on (.*) (.*) and returning on (.*) (.*)$")
    public void i_look_for_a_flight_from_origin_to_destination_departing_on_date_and_returning_on_date(String origin, String destination, String departureMonth, String departureDay, String returnMonth, String returnDay) throws Throwable {
        // Write code here that turns the phrase above into concrete actions
        PageFactory.initElements(driver, FlightFinderPage.class);
        FlightFinderPage.origin.sendKeys(origin);
        FlightFinderPage.destination.sendKeys(destination);
        FlightFinderPage.fromMonth.sendKeys(departureMonth);
        FlightFinderPage.fromDay.sendKeys(departureDay);
        FlightFinderPage.toMonth.sendKeys(returnMonth);
        FlightFinderPage.toDay.sendKeys(returnDay);
        FlightFinderPage.findFlights.click();
        // throw new PendingException();
    }

    @When("^I select the first flight$")
    public void i_select_the_first_flight() throws Throwable {
        // Write code here that turns the phrase above into concrete actions
        PageFactory.initElements(driver, SelectFlightPage.class);
        SelectFlightPage.reserveFlights.click();
        // throw new PendingException();
    }


    @When("^I book the flight for (.*) (.*) using card (.*)$")
    public void i_book_the_flight_for_JJ_ee_using_card(String firstName, String lastName, String cardNumber) throws Throwable {
        // Write code here that turns the phrase above into concrete actions
        PageFactory.initElements(driver, BookAFlightPage.class);
        BookAFlightPage.firstName.sendKeys(firstName);
        BookAFlightPage.lastName.sendKeys(lastName);
        BookAFlightPage.cardNumber.sendKeys(cardNumber);
        BookAFlightPage.buyFlights.click();
        Thread.sleep(1000);
        // throw new PendingException();
    }

    @Then("^I get a booking confirmation$")
    public void i_get_a_booking_confirmation() throws Throwable {
        // Write code here that turns the phrase above into concrete actions
        assertTrue(driver.getTitle().contains("Flight Confirmation"));
        // throw new PendingException();
    }


}