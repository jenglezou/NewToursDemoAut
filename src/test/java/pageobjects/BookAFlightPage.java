package pageobjects;
// import helpers.Log;

// import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
// import org.openqa.selenium.support.How;
// import org.openqa.selenium.support.PageFactory;

public class BookAFlightPage extends BaseClass{

	public BookAFlightPage(WebDriver driver){
		super(driver);
	}    

    @FindBy(name = "passFirst0")
    public static WebElement firstName;

    @FindBy(name = "passLast0")
    public static WebElement lastName;

	@FindBy(name = "creditnumber")
    public static WebElement cardNumber;	

    @FindBy(name = "buyFlights")
    public static WebElement buyFlights;

}
