package pageobjects;
// import helpers.Log;

// import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
// import org.openqa.selenium.support.How;
// import org.openqa.selenium.support.PageFactory;

public class SelectFlightPage extends BaseClass{

	public SelectFlightPage(WebDriver driver){
		super(driver);
	}    

    @FindBy(name = "reserveFlights")
    public static WebElement reserveFlights;
		
}
