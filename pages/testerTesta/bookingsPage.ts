import { Booking } from "../locators/testerTestarudo/booking";
import { BasePage } from "./basePage";
import {Page,Locator} from '@playwright/test';

export class BookingPage extends BasePage{

    private readonly toPort:Locator;
    private readonly submit:Locator;
    private readonly chosenFlight:Locator;
    private readonly fromPort:Locator;
    private readonly inputName:Locator;
    private readonly address:Locator;
    private readonly city:Locator;
    private readonly state:Locator;
    private readonly zipCode:Locator;
    private readonly creditCardNumber:Locator;
    private readonly creditCardYear:Locator;
    private readonly nameOnCard:Locator;
    private readonly rememberMeCheck:Locator;
    private readonly purchaseFlightButton:Locator;

        constructor (page:Page){
            super(page);

                this.fromPort=page.locator(Booking.fromPort);
                this.toPort=page.locator(Booking.toPort);
                this.submit=page.locator(Booking.submit);
                this.chosenFlight=page.locator(Booking.chosenFlight);
                this.inputName=page.locator(Booking.inputName);
                this.address=page.locator(Booking.address);
                this.city=page.locator(Booking.city);
                this.state=page.locator(Booking.state);
                this.zipCode=page.locator(Booking.zipCode);
                this.creditCardNumber=page.locator(Booking.creditCardNumber);
                this.creditCardYear=page.locator(Booking.creditCardYear);
                this.nameOnCard=page.locator(Booking.nameOnCard);
                this.rememberMeCheck=page.locator(Booking.rememberMeCheck);
                
        }
             
            


        async seleccionarOrigenyDestino(from:string, to:string){ 
            await this.selectOpt(Booking.fromPort,from)
            await this.selectOpt(Booking.toPort,to)
            await this.clickOn(Booking.submit)
        }
        async seleccionarVuelo(){
            await this.clickOn(Booking.chosenFlight)
        }
        async fillForm(name:string, address:string, city:string, state:string, zipCode:string, creditCardNumber:string, creditCardYear:string, nameOnCard:string){
            await this.fillField(Booking.inputName,name)
            await this.fillField(Booking.address,address)
            await this.fillField(Booking.city,city)
            await this.fillField(Booking.state,state)
            await this.fillField(Booking.zipCode,zipCode)
            await this.fillField(Booking.creditCardNumber,creditCardNumber)
            await this.fillField(Booking.creditCardYear,creditCardYear)
            await this.fillField(Booking.nameOnCard,nameOnCard)
            await this.clickOn(Booking.rememberMeCheck)
          
        }
    
}
