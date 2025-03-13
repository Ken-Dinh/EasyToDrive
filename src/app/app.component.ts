import { Component } from '@angular/core';
import { TestService } from './service/test.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'EasyToDrive';
  data_delete: string = 'There is no data';
  data_get: string = 'There is no data';
  data_post: string = 'There is no data';
  data_put: string = 'There is no data';
  data_option: string = 'There is no data';

  constructor(private testService:TestService){}

  ngOnInit(){
    this.testService.getTest().subscribe((data:any)=>{
      this.data_get = data.message;
    });
  
    this.testService.postTest({id:1}).subscribe((data:any)=>{
      this.data_post = data.message;
    });

    this.testService.putTest({id:1}).subscribe((data:any)=>{
      this.data_put = data.message;
    });

    this.testService.deleteTest({id:1}).subscribe((data:any)=>{
      this.data_delete = data.message;
    });

    this.testService.optionTest().subscribe((data:any)=>{
      this.data_option = data.message;
    });
  }
}
