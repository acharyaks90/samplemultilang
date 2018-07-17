import { Component } from '@angular/core';
import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  chooselan = ""
  constructor(public translate: TranslateService){
    // this language will be used as a fallback when a translation isn't found in the current language
    translate.setDefaultLang('hi');

    // the lang to use, if the lang isn't available, it will use the current loader to get them
    translate.use('hi');
  }


  changeLang(lan){
    console.log(lan,'lan')
    this.translate.use(lan);
  }

}
