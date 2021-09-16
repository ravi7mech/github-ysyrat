import { Component, Input, OnChanges, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  comments: any;
  count: number;
  constructor() {
    this.comments = [
      {
        commentId: 0,
        currentDate: '2021-09-16T07:43:01.216Z',
        commentTxt: 'sssssss',
        replyComment: [
          {
            currentDate: '2021-09-16T07:43:03.730Z',
            commentTxt: 'aaaaaaaaaa',
            replyComment: [
              {
                currentDate: '2021-09-16T07:43:03.730Z',
                commentTxt: 'aaaaaaaaaa'
              }
            ]
          }
        ]
      }
    ];
  }

  ngOnInit() {
    this.count = 0;
  }

  receiveComment($event) {
    this.comments = $event;
    this.count = this.comments.length;
    console.log(this.comments.length);
  }

  recieveCount($event) {
    this.comments = $event;
    this.count = this.comments.length;
  }
}
