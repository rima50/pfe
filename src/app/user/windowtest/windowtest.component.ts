import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-windowtest',
  templateUrl: './windowtest.component.html',
  styleUrls: ['./windowtest.component.css']
})
export class WindowtestComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  public opened = true;
  public dataSaved = false;

  public close() {
    this.opened = false;
  }

  public open() {
    this.opened = true;
  }

  public submit() {
      this.dataSaved = true;
      this.close();
  }
}
