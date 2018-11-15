package pageobjects;
// import helpers.Log;

// import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
// import org.openqa.selenium.support.How;
// import org.openqa.selenium.support.PageFactory;

public class SignOnPage extends BaseClass{

	public SignOnPage(WebDriver driver){
		super(driver);
	}    

	@FindBy(name = "userName")
    public static WebElement Username;

    @FindBy(name = "password")
	public static WebElement Password;
    
    @FindBy(name = "login")
    public static WebElement login;

    /**
     * Set 
     */
    public static boolean setUsername(String username) {
        Username.sendKeys(username);
        return true;
    }

    /**
     * Set 
     */
    public static boolean setPassword(String password) {
        Password.sendKeys(password);
        return true;
    }
}
		

	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
