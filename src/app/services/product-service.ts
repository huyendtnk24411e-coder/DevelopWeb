import { Service } from '@angular/core';
import { Product } from '../classes/IProduct';

@Service()
export class ProductService {
    products: Product[] = [
          { id: 1, name: "Coca", price: 15, image_link: "https://www.coca-cola.com/content/dam/onexp/vn/vi/brands/coca-cola/vn-coca-cola.png" },
          { id: 2, name: "Pepsi", price: 15, image_link:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT057ohoQLN-iuzZNlEI_E3zKojaNFmMCedRz4m0cv1bakp0nevWfID5cY&s=10" },
          { id: 3, name: "7up", price: 12, image_link:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1UptGJBe4CDMYp9oHbDDTDKz-bl50ky_ZEg1p8-EV4McLWrnpgGGQMIk&s=10" },
          { id: 4, name: "Aqua", price: 10,image_link:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMRdkVISUKak_wTfKNJM_ZMe3PwyeO4dy5SBxo9_3_feobEK5zimpak4w&s=10" },
          { id: 5, name: "Lavi", price: 9, image_link:"https://cdn.7-eleven.vn/production/attachment_v2s/files/992_1712638985_original.png?1712638985" },
          { id: 6, name: "Sprite", price: -12, image_link:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8OQzlXWuS_EG9q2kvNfYkoXxx2iwEzNHmKa-wJG3Aqb-RfVPj4UutCAA&s=10" }
]
constructor(){}
getProductsList() {
        return this.products;
        }
        filterProductListByPrice(min:number,max:number)
        {
            return this.products.filter(p=>p.price>=min && p.price<=max)
            }
    }
