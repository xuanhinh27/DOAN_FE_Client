import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../../pages/services/service.service';

@Component({
  selector: 'app-chatgpt',
  templateUrl: './chatgpt.component.html',
  styleUrls: ['./chatgpt.component.scss']
})
export class ChatgptComponent implements OnInit {
  value: any;
  chatData: any = [];
  isLoading: boolean = false;
  a:any
  constructor(
    private apiService: ServiceService,
    ) { }

  ngOnInit(): void { 
 
      if (localStorage.getItem('chatData'))
          this.chatData = JSON.parse(localStorage.getItem('chatData')!)
          setTimeout(() => {
            var objDiv = document.getElementById("chatbot-content")!;
            objDiv.scrollTop = objDiv.scrollHeight;
        }, 100)
  }
  chat() {
      this.apiService.chat(this.a).subscribe(
          res => {
              if (res?.choices) {
                  let newUserChat: any = {
                      content: this.a,
                      role: "user"
                  }
                  this.chatData.push(newUserChat);
                  res?.choices.forEach((element:any) => {
                      let newAssChat: any = {
                          content: element.message?.content,
                          role: element?.message?.role
                      }
                      this.chatData.push(newAssChat);
                  });
                  localStorage.setItem("chatData", JSON.stringify(this.chatData));
                  setTimeout(() => {
                      let objDiv = document.getElementById("chatbot-content")!;
                      objDiv.scrollTop = objDiv.scrollHeight;
                      this.value = ''
                  }, 100) 
                  this.a = ''
              }
              else {
                  // this.snackBar.open('Không có dữ liệu faq', 'Đóng', { duration: 2000, horizontalPosition: 'right', verticalPosition: 'top', panelClass: ['snackBar-info'] });
              }
          },
          error => {
              // this.snackBar.open('Có lỗi kết nối tới máy chủ', 'Đóng', { duration: 2000, horizontalPosition: 'right', verticalPosition: 'top', panelClass: ['snackBar-error'] });
              // console.log(error.error.errors[0].description);
          },
          () => {
              this.isLoading = false
          }
      );
  }

}
