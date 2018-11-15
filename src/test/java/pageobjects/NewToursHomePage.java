package pageobjects;
// import helpers.Log;

// import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
// import org.openqa.selenium.support.How;
// import org.openqa.selenium.support.PageFactory;

public class NewToursHomePage extends BaseClass{

	public NewToursHomePage(WebDriver driver){
		super(driver);
	}    

    // @FindBy(css = "a[href='mercurysignon.php']")
    @FindBy(xpath="//a[text()='SIGN-ON']")
    // @FindBy(xpath ="/html/body/div/table/tbody/tr/td[2]/table/tbody/tr[2]/td/table/tbody/tr/td[1]/a")
    public static WebElement signon;

    /**
     * Click on Signon Link.
     */
    public static boolean clickSignonLink() {
        signon.click();
        return true;
    }
		
}
		

	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
