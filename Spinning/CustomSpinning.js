import{ LightningElement } from "lwc"

export default class CustomSPinner extends LightningElement{
    isLoading = false;

    showSpinner(){
        if(!this.isLoading){
            this.isLoading = true;
        }
        else{
            this.isLoading = false;
        }
    }
}