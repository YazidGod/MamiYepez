import { Component } from '@angular/core';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-menu-superior',
  templateUrl: './menu-superior.html',
  styleUrls: ['./menu-superior.css'],
  imports: [RouterLink]
})
export class MenuSuperior {
  menuVisible = false;
  perfilVisible = false;
}
