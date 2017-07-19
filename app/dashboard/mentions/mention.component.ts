import { Component, OnInit,Input} from '@angular/core';
import { Mention } from './mention';
import {MentionService} from './mention.service';
import {Router} from '@angular/router';
import {Alert} from '../alert/alert';
import {DefaultImageDirective} from './defaultImage.directive';
import {MenuComponent} from './menu/menu.component';
import {MODULE_PIPES} from '../../pipe/pipe.const';
import {PagerService} from '../_services/index';
import {MentionOps} from './mentions-ops.component';
@Component({
  moduleId :module.id,
  selector:'mentions',
  templateUrl: 'mentions.component.html',
  styleUrls: [ 'mentions.component.css' ],
  providers :[DefaultImageDirective],
  viewProviders :[MODULE_PIPES,MentionOps],
 
  
})

export class MentionComponent  implements OnInit
{
   
   title = 'Les Mentions';
   public mentions : Mention[];
   public srcMentions :Mention[];
   selectedAlert:boolean=false;
   
   choice:string;
   iSource:boolean = false;
   isDate:boolean =false;
   private alertIn:string;
   // pager object
    pager: any = {};
    // paged items
    pagedItems: any[];
    
   constructor(private  pagerService: PagerService,private mentionService: MentionService,private route:Router
   ) 
   {
   
   }
    
     
    ngOnInit(): void {
        this.onChange("facebook.com") ;
    }

    getMts():void
    {
     
      location.reload();
        
    }
   

    anotherfunct(p:string):void
    {
       //this.route.navigate(['/mentions']);
       this.mentions =null;
       var page:string =p.trim();
       this.alertIn =page;

       if(page.startsWith('#'))
            this.alertIn=page.replace('#','%23');
       if(page.startsWith('@'))
            this.alertIn=page.replace('@','%40');
      

       console.log("page"+this.alertIn);
       this.selectedAlert=true;
        
        this.mentionService._getMentions(this.alertIn)
            .subscribe( ms => {
                this.mentions=ms;
                
                // initialize to page 1
                this.setPage(1);
            });
    }
    rankByDate()
    {
        this.isDate=true;
    }
    
    disableDateBtn():boolean
    {
        if(this.iSource==true)
            return true;
            else
                return false;
    } 

    changeSrc(src:any): void
    {
       //alert(src); 
      
      this.iSource=true;
      //this.getMts();
      let mentions =this.mentions; 
      function filterItems(query:any): Mention[]{
          return mentions.filter(
                 function(el:Mention) { 
                    return el.link.toLowerCase().indexOf(query.toLowerCase()) > -1;
                        })      
                        }
     this.srcMentions = filterItems(src);
     
    
}

    onChange(src:string):void
    {
       this.choice = 'Likes';
       this.choice = src;
       console.log('choix:'+this.choice);

    }

    /*
    Setting paging for mentions
    */
    setPage(page: number) {
        if (page < 1 || page > this.pager.totalPages) {
            return;
        }

        // get pager object from service
        this.pager = this.pagerService.getPager(this.mentions.length, page);

        // get current page of items
        this.pagedItems = this.mentions.slice(this.pager.startIndex, this.pager.endIndex + 1);
    }
    
}
