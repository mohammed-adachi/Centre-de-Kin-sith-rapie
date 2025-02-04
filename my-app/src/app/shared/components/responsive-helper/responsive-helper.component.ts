import { Component } from '@angular/core';
import { NgIf } from '@angular/common';
import { OnInit } from '@angular/core';
import { environment } from '../../../../environment/environmen';

@Component({
  selector: 'app-responsive-helper',
  standalone: true,
  imports: [NgIf],

  templateUrl: './responsive-helper.component.html',
  styleUrl: './responsive-helper.component.css'
})
export class ResponsiveHelperComponent implements OnInit {
  public env: any = environment;

  constructor() {}

  ngOnInit(): void {}
}
