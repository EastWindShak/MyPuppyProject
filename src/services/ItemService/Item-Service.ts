
//import { Services } from '@angular/core/src/view/types';
import { Injectable } from '@angular/core';
    





export class ItemService{
    icons: string[];
    
    private  singleitem : {title: string, note: string, icon: string, id: number};
    private  items: Array<{title: string, note: string, icon: string, id: number}>;
    private safeitems : Array<{title: string, note: string, icon: string, id: number}>;
    private iniciado: boolean = false;

    public getsingle() : any {
        return this.singleitem;
    }

    public setiniciado() : void {
        this.iniciado = true;
    }

    public getiniciado() : boolean {
        return this.iniciado;
    }
    public setsingle(item: any ) : void{
        this.singleitem = {title:"",note:"",icon:"",id: 1};
        if (item.length === 3) {
          this.singleitem.title = item[0];
          this.singleitem.note = item[1];
          this.singleitem.icon = item[2];
        }
    }


    public returnformer() : void {
        this.items = this.safeitems;
    }

    public getall() : any[]{
        return this.items;
    }

    public redoarray(position : number){
        let i : number = 0;
        for (i = position; i < this.items.length; i++){
            this.items[i].id = this.items[i].id-1;
        }
    }
    public deleteone(thing : any): void {
        
        var indexofthing = 0;
        
        for(let i = 0; i < this.items.length; i++){
            if(this.items[i] == thing){
                indexofthing = i; 
            }
        }
        


        this.items.splice(indexofthing,1);
        this.redoarray(indexofthing);
        this.safeitems = this.items;
        
      }


    public setAll(){
        this.items = [];
        this.icons = ['flask', 'wifi', 'beer', 'football', 'basketball', 'paper-plane',
        'american-football', 'boat', 'bluetooth', 'build'];
    
        if(this.getiniciado() == false){
            // is not initiated
            for(let i = 1; i < 11; i++) {
              this.items.push({
                title: 'Item ' + i,
                note: 'This is item #' + i,
                icon: this.icons[Math.floor(Math.random() * this.icons.length)],
                id : i,
              });
            }
              
            this.safeitems = this.items;  
            this.setiniciado();
          }
    }

    public newone(item:any) : void {
            let id: number = this.safeitems.length+1;
            item.id = id;
            if(this.items){
            this.items.push(item);
            }
    }

}