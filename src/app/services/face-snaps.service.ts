import { Injectable } from "@angular/core";
import { FaceSnap } from "../Models/face-snap.model";

@Injectable({
    providedIn: 'root'
})

export class FaceSnapsService{
    faceSnaps: FaceSnap[] = [
        {
          id: 1,
          title: "Archibald", 
          description: "Mon meilleur ami",
          imageUrl: "https://upload.wikimedia.org/wikipedia/commons/c/c9/Archibald_Photo.jpg", 
          createdDate: new Date(),
          snaps: 0,
          location: "Paris",
        },
        {
          id: 2,
          title: "Marlone", 
          description: "Mon pilier lors de chaque épreuve",
          imageUrl: "https://upload.wikimedia.org/wikipedia/commons/4/43/Pierre-Marie_Pory-Papy_portrait.jpg", 
          createdDate: new Date(),
          snaps: 402,
        },
        {
          id: 3,
          title: "Victorine", 
          description: "Elle... c'est ma super copine! Tu vas l'adorer!",
          imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR33Zjt0Q166E1idGE95Gf0mQYURcoFz_Xi5g&usqp=CAU", 
          createdDate: new Date(),
          snaps: 180,
          location: "Bretagne",
        },
        {
          id: 4,
          title: "Archibald", 
          description: "Mon meilleur ami",
          imageUrl: "https://upload.wikimedia.org/wikipedia/commons/c/c9/Archibald_Photo.jpg", 
          createdDate: new Date(),
          snaps: 134,
          location: "Paris",
        },
        {
          id: 5,
          title: "Marlone", 
          description: "Mon pilier lors de chaque épreuve",
          imageUrl: "https://upload.wikimedia.org/wikipedia/commons/4/43/Pierre-Marie_Pory-Papy_portrait.jpg", 
          createdDate: new Date(),
          snaps: 100,
        },
        {
          id: 6,
          title: "Victorine", 
          description: "Elle... c'est ma super copine! Tu vas l'adorer!",
          imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR33Zjt0Q166E1idGE95Gf0mQYURcoFz_Xi5g&usqp=CAU", 
          createdDate: new Date(),
          snaps: 6,
          location: "Bretagne",
        }
      ];

    getAllFaceSnaps(): FaceSnap[] {
        return this.faceSnaps;
    }

    getFaceSnapById(faceSnapId: number): FaceSnap {
        const faceSnap = this.faceSnaps.find(faceSnap => faceSnap.id === faceSnapId);
        if(!faceSnap){
            throw new Error('FaceSnap not found!');
        } else {
            return faceSnap;
        }
    }
    snapFaceSnapById(faceSnapId: number, snapType: 'snap' | 'unsnap'): void{
        const faceSnap = this.getFaceSnapById(faceSnapId);
        snapType === 'snap' ? faceSnap.snaps++ : faceSnap.snaps--;
        
    } 
}