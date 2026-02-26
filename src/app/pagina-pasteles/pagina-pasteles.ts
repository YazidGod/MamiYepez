import { Component } from '@angular/core';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-pagina-pasteles',
  standalone: true,
  imports: [CurrencyPipe],
  templateUrl: './pagina-pasteles.html',
  styleUrl: './pagina-pasteles.css'
})
export class PaginaPasteles {
  // === Estado de visibilidad ===
  vainillaVisible     = true;
  chocolateVisible    = false;
  combinadoVisible    = false;
  tresLechesVisible   = false;
  especialVisible     = false;
  circularAltoVisible = false;
  cuadradoVisible     = false;

  mostrar(seccion: 'vainilla'|'chocolate'|'combinado'|'tres-leches'|'especial'|'circular-alto'|'cuadrado') {
    this.vainillaVisible     = seccion === 'vainilla';
    this.chocolateVisible    = seccion === 'chocolate';
    this.combinadoVisible    = seccion === 'combinado';
    this.tresLechesVisible   = seccion === 'tres-leches';
    this.especialVisible     = seccion === 'especial';
    this.circularAltoVisible = seccion === 'circular-alto';
    this.cuadradoVisible     = seccion === 'cuadrado';
  }

  // === Imágenes ===
  
img = {
    vainilla:  'https://imgs.search.brave.com/iRY19RgL92NkA3PqMKcn18DBIKyU3KUX0BKjSa2TYh8/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzL2RiL2Zh/L2Y2L2RiZmFmNjY5/NmYzYjA3Mjg4YTM2/NDQ2OWY5MTY4NWZm/LmpwZw',
    chocolate: 'https://imgs.search.brave.com/F3nVVWdoO25vuylSOpG7plHgKlnPU9VgNCRGRbUz-l0/rs:fit:0:180:1:0/g:ce/aHR0cHM6Ly9pbWct/Z2xvYmFsLmNwY2Ru/LmNvbS9zdGVwcy9h/OWM0ZWZjZWMzNmM1/YTI2LzE2MHgxMjhj/cTgwL2ZvdG8tZGVs/LXBhc28tNC1kZS1s/YS1yZWNldGEtcGFu/LXBhcmEtcGFzdGVs/LWRlLWNob2NvbGF0/ZS1mYWNpbC5qcGc',
    combinado: 'https://imgs.search.brave.com/RWuSYxpcxqlitpGk6Xawlbzhq9En6Z8DgCoWzYmyslQ/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9pbWct/Z2xvYmFsLmNwY2Ru/LmNvbS9yZWNpcGVz/LzQwYTkyODRkYWQz/ZjllMTAvMzAweDQy/NmNxODAvcGFzdGVs/LXZhaW5pbGxhLXkt/Y2hvY29sYXRlLWZv/dG8tcHJpbmNpcGFs/LmpwZw',
    tresLeches:'https://imgs.search.brave.com/RRcL3LJUr717bGuDAkDez4BERLX6GW10qXUs4t3HY5I/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly93d3cu/bWFyaWNydXphdmFs/b3MuY29tL3dwLWNv/bnRlbnQvdXBsb2Fk/cy8yMDIwLzEyL3Ry/ZXNfbGVjaGVzX2Nh/a2Vfc3RlcHM1Lmpw/Zw',
    especial:  'https://imgs.search.brave.com/WQKi_cXjJqHq99dU__vNyKO_rcIlPX53esWGqH5MV_U/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9hbGdv/ZHVsY2UuY29tLm14/L2Nkbi9zaG9wL2Zp/bGVzL01HXzQ1MDIu/anBnP3Y9MTcyMTg0/NjcwNQ',
    circularAlto: 'https://imgs.search.brave.com/dZbX_TPzzIJHZByzW2rRup5tcGiHDdi5o_ZfjI3zWuw/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9hbm5h/cnVpei5jb20ubXgv/YXJ3L3dwLWNvbnRl/bnQvdXBsb2Fkcy8y/MDIwLzA1L2Rlc2Nh/cmdhLmpwZw',
    cuadrado:  'https://imgs.search.brave.com/-NBRqVxdHnjEK48g2x-B4DMe1-ZutyR-Vu7Y-yVwd-w/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvNDY1/NDc2NjQ1L2VzL2Zv/dG8vYnJvd25pZS10/b3J0YS1kZS1jaG9j/b2xhdGUuanBnP3M9/NjEyeDYxMiZ3PTAm/az0yMCZjPVdCUVhs/YzQ2RmRrcjJBZ2py/QVQxVHNXUnFPWlIw/VTNnT2JlaVZlYVpW/YTA9'
  };


  // === Datos ===
  tablas = {
    vainilla: [
      { tamano: 'individual', rebanadas: 4,  precio: 140 },
      { tamano: 'Chico',      rebanadas: 6,  precio: 180 },
      { tamano: 'Mediano',    rebanadas: 16, precio: 280 },
      { tamano: 'Grande',     rebanadas: 30, precio: 550 },
    ],
    chocolate: [
      { tamano: 'individual', rebanadas: 4,  precio: 170 },
      { tamano: 'Chico',      rebanadas: 6,  precio: 220 },
      { tamano: 'Mediano',    rebanadas: 16, precio: 330 },
      { tamano: 'Grande',     rebanadas: 30, precio: 550 },
    ],
    combinado: [
      { tamano: 'individual', rebanadas: 4,  precio: 160 },
      { tamano: 'Chico',      rebanadas: 6,  precio: 220 },
      { tamano: 'Mediano',    rebanadas: 16, precio: 380 },
      { tamano: 'Grande',     rebanadas: 30, precio: 750 },
    ],
    tresLeches: [
      { tamano: 'individual', rebanadas: 4,  precio: 200 },
      { tamano: 'Chico',      rebanadas: 6,  precio: 260 },
      { tamano: 'Mediano',    rebanadas: 16, precio: 380 },
      { tamano: 'Grande',     rebanadas: 30, precio: 750 },
    ],
    especial: [
      { tamano: 'individual', rebanadas: 4,  precio: 200 },
      { tamano: 'Chico',      rebanadas: 6,  precio: 260 },
      { tamano: 'Mediano',    rebanadas: 16, precio: 380 },
      { tamano: 'Grande',     rebanadas: 30, precio: 750 },
    ],
    circularAlto: [
      { tamano: 'Individual', rebanadas: 4,  vainilla:210, chocolate:260, combinado:240, especial:300 },
      { tamano: 'Chico',      rebanadas: 8,  vainilla:270, chocolate:330, combinado:330, especial:400 },
      { tamano: 'Mediano',    rebanadas: 24, vainilla:420, chocolate:500, combinado:570, especial:570 },
      { tamano: 'Grande',     rebanadas: 44, vainilla:820, chocolate:830, combinado:1130, especial:1130 },
    ],
    cuadrado: [
      { tamano: '18x18', rebanadas: 12, vainilla:250, chocolate:270, combinado:260, tresLeches:300 },
      { tamano: '30x30', rebanadas: 36, vainilla:760, chocolate:780, combinado:770, tresLeches:860 },
      { tamano: '28x36', rebanadas: 42, vainilla:880, chocolate:900, combinado:890, tresLeches:1030 },
      { tamano: '36x48', rebanadas: 70, vainilla:1100, chocolate:1150, combinado:1130, tresLeches:1300 },
    ]
  };
}
``