package pageobjects;
// import helpers.Log;

// import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
// import org.openqa.selenium.support.How;
// import org.openqa.selenium.support.PageFactory;

public class FlightFinderPage extends BaseClass{

	public FlightFinderPage(WebDriver driver){
		super(driver);
	}    


    @FindBy(name = "fromPort")
    public static WebElement origin;

    @FindBy(name = "fromMonth")
    public static WebElement fromMonth;

    @FindBy(name = "fromDay")
    public static WebElement fromDay;

    @FindBy(name = "toPort")
    public static WebElement destination;

    @FindBy(name = "toMonth")
    public static WebElement toMonth;

    @FindBy(name = "toDay")
    public static WebElement toDay;

    @FindBy(name = "findFlights")
    public static WebElement findFlights;
		
}
