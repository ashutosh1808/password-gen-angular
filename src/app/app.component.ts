import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  length=0;
  password='';
  includeLetters:boolean=false;
  includeDigits:boolean=false;
  includeSymbols:boolean=false;
  
  onChangeLength(event:Event){
    const value=(event.target as HTMLInputElement).value
    const parsedValue=parseInt(value)
    if(!isNaN(parsedValue)){
      this.length=parsedValue;
    }
  }

  onChangeUseLetters(){
    this.includeLetters=!this.includeLetters;
  }

  onChangeUseDigits(){
    this.includeDigits=!this.includeDigits;
  }

  onChangeUseSymbols(){
    this.includeSymbols=!this.includeSymbols;
  }

  onButtonClick(){
    const numbers='1234567890';
    const letters='abcdefghijklmnopqrstuvwxyz';
    const symbols='!@#$%^&*()';

    let validChars='';
    if(this.includeLetters){
      validChars+=letters;
    }if(this.includeDigits){
      validChars+=numbers;
    }if(this.includeSymbols){
      validChars+=symbols;
    }

    let generatedPassword=""
    for(let i=0;i<this.length;i++){
      const index=Math.floor(Math.random()*validChars.length);
      generatedPassword+=validChars[index];
    }
    this.password=generatedPassword;
  }
}
