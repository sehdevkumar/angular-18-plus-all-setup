import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { TranslateDirective, TranslatePipe, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-localization',
  standalone: true,
  imports: [TranslatePipe, TranslateDirective, CommonModule,MatFormFieldModule,MatSelectModule,ReactiveFormsModule],
  templateUrl: './localization.component.html',
  styleUrl: './localization.component.scss'
})
export class LocalizationComponent {

   languageForm!: FormGroup;
   fb = inject(FormBuilder);
   languages = ['en', 'hi'];


  translate = inject(TranslateService);

  constructor() {
    this.translate.setDefaultLang('en');

    this.translate.addLangs(['en', 'hi']);

    this.translate.use('en');
  
    
    this.languageForm = this.fb.group({
      language: ['en'],
    });


    this.languageForm.valueChanges.subscribe((lang) => {
      this.translate.use(lang.language);
    });
   
    

  }

}
