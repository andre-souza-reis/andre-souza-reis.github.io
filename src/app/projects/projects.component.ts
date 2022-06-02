import { Component, OnInit } from '@angular/core';
import { TranslationLoaderService } from '../service/translation-loader.service';
import { locale as english } from '../shared/i18n/en';
import { locale as portuguese } from '../shared/i18n/pt';
import { projectsEn} from '../api/projectsEn';
import { projectsPt} from '../api/projectsPt';

import { TranslateService } from '@ngx-translate/core';
@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
  projects:any[]=projectsEn;
  venobox: any;
  constructor(private _translationLoaderService: TranslationLoaderService,private _translateService: TranslateService) {
    this._translationLoaderService.loadTranslations(english, portuguese);
    this._translateService.onLangChange.subscribe(()=>{
      if(this._translateService.currentLang=="en"){
        this.projects=projectsEn;
      }
      else{
        this.projects=projectsPt;
      }
    });
  }

  ngOnInit(): void {
    
  }

  ngAfterViewInit(){
    console.log("after view init");
    this.onMouse("mautic-link", "mautic-img");
    this.onMouse("TransferStyle-link", "TransferStyle-img");
    this.venobox = $('.venobox');
    this.venobox.venobox();
  }

  detailOnClick(project: any) {
    this.projects.filter(item=>item.detailIsDisplayed && item.id!=project.id).map(elem=>elem.detailIsDisplayed=false);
    project.detailIsDisplayed=!project.detailIsDisplayed;
  }

  onMouse(idLink: String, idImage: String) {
    $('#' + idLink).on("mouseenter", function () {
      console.log('on mouseenter');
      $('#' + idImage).css("opacity", "0.3");
      $('#' + idLink).css("opacity", "1");
    }).on('mouseleave', function () {
      $('#' + idImage).css("opacity", "1");
      $('#' + idLink).css("opacity", "0");
    }
    );

    $('#' + idImage).on("mouseenter", function () {
      $('#' + idImage).css("opacity", "0.3");
      $('#' + idLink).css("opacity", "1");
    }).on('mouseleave', function () {
      $('#' + idImage).css("opacity", "1");
      $('#' + idLink).css("opacity", "0");
    }
    );
  }
}
