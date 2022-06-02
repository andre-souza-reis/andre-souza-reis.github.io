import { Component, OnInit } from '@angular/core';
import { TranslationLoaderService } from '../service/translation-loader.service';
import { locale as english } from '../shared/i18n/en';
import { locale as portuguese } from '../shared/i18n/pt';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {
  skills:any={
    languages:[{name:"Python",percent:80,remark:'very-good'}, {name:"SQL",percent:80,remark:'very-good'}, {name:"HTML, JavaScript, CSS",percent:70,remark:'good'}, {name:"C, C#",percent:50,remark:'average'}],
    libraries:[{name:"TensorFlow, Keras",percent:90,remark:'excellent'}, {name:"Numpy, Pandas, Matplotlib",percent:90,remark:'excellent'}, {name:"Scikit-Learn",percent:80,remark:'very-good'},{name:"Angular, BootStrap",percent:70,remark:'good'}],
    tools:[{name:"AWS",percent:80,remark:'very-good'}, {name:"Git",percent:80,remark:'very-good'}, {name:"Docker",percent:70,remark:'good'},{name:"Linux",percent:50,remark:'average'}]
  };

  constructor(private _translationLoaderService: TranslationLoaderService) {
    this._translationLoaderService.loadTranslations(english, portuguese);
  }

  ngOnInit(): void {
  }

}

    
    
  
