import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';
@Component({
  selector: 'app-dam2',
  templateUrl: './dam2.page.html',
  styleUrls: ['./dam2.page.scss'],
})
export class DAM2Page implements OnInit {

  constructor(public toastController: ToastController) { }

  async presentToast(message: string) {
    const toast = await this.toastController.create({
      message,
      duration: 2000
    });
    toast.present();
  }

  public elementos = [
    {
      asignatura: 'Programación de Servicios y Procesos',
      img: 'https://e7.pngegg.com/pngimages/568/379/png-clipart-technology-computer-icons-technology-electronics-text.png',
      
    },
    {
      asignatura: 'Desarrollo de Interfaces',
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTn74LjF-MVjekGi05RTlE39GomHavGszQNow&usqp=CAU'
    },
    {
      asignatura: 'Sistemas de Gestión Empreserial',
      img: 'https://w7.pngwing.com/pngs/459/325/png-transparent-computer-icons-competition-miscellaneous-text-monochrome.png'
    },
    {
      asignatura: 'Programación Multimedia y Dispositivos Móviles',
      img: 'https://media.istockphoto.com/vectors/mobile-programming-vector-icon-round-style-illustration-vector-id1205087854?k=6&m=1205087854&s=170667a&w=0&h=BAXAvzyCJ7x4j_X41yfKjuJrHyn6mxXCW_mSbVvCFX4='
    },
    {
      asignatura: 'Acceso a Datos',
      img: 'https://image.flaticon.com/icons/png/512/51/51333.png'
    },
    {
      asignatura: 'Empresa e Iniciativa Emprendedora',
      img: 'https://img2.freepng.es/20180423/lgq/kisspng-computer-icons-business-management-company-service-enterprises-vector-5add7e27491c73.9049300415244651912995.jpg'
    }

  ];

 

  ngOnInit() {
  }

}
