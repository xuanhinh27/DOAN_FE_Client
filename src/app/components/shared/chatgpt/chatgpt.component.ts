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
  constructor(
    private apiService: ServiceService,
    ) { }

  ngOnInit(): void {
      if (localStorage.getItem('chatData'))
          this.chatData = localStorage.getItem('chatData')
  }
  chat() {
      // if (!this.value) {
      //     this.snackBar.open('Vui lòng nhập nội dung', 'Đóng', { duration: 2000, horizontalPosition: 'right', verticalPosition: 'top', panelClass: ['snackBar-info'] });
      //     return
      // }
      this.isLoading = true;
      this.apiService.chat(this.value).subscribe(
          res => {
              if (res?.choices) {
                  let newUserChat: any = {
                      content: this.value,
                      role: "user"
                  }
                  this.chatData.push(newUserChat);
                  res?.choices.forEach(element => {
                      let newAssChat: any = {
                          content: element.message?.content,
                          role: element?.message?.role
                      }
                      this.chatData.push(newAssChat);
                  });

                  localStorage.setItem("chatData", JSON.stringify(this.chatData));
                  setTimeout(() => {
                      var objDiv = document.getElementById("chatbot-content");
                      objDiv.scrollTop = objDiv.scrollHeight;
                      this.value = ''
                  }, 100)

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
