import { Component, OnInit,Input,Output} from '@angular/core';
import {Mention} from './mention';
import {MentionOpService} from './mentions-ops.service';
import {MentionService} from './mention.service';
@Component
({
selector :'ops',
template :
`
<div [hidden]="hideBtns" class="form-inline">
<button type="button" #avisup    value="positive" (click)="LikeMention(avisup.value)" class="btn btn-primary  btn-sm"><i class="fa fa-thumbs-o-up fa-fw" aria-hidden="true"></i></button>
<button type="button" #avisdown  value="negative" (click)="disLikeMention(avisdown.value)" class="btn btn-secondary btn-sm"><i class="fa fa-thumbs-o-down fa-fw" aria-hidden="true"></i></button>
<button type="button" (click)="deleteMention()" class="btn btn-danger btn-sm"><i class="fa fa-trash fa-fw" aria-hidden="true"></i></button>
</div>
`,
providers :[MentionOpService,MentionService],


})

export class MentionOps implements OnInit
{
    @Input() 
    mentionTosend:Mention;
    @Input() alerTosend:string;
    pagedItems:Mention[];
    hideBtns:boolean =false;

   

constructor(private mtOpService:MentionOpService,private mentionService:MentionService)
{
/*setInterval(() => {
      
      // the following is required, otherwise the view will not be updated
      this.ref.markForCheck();
    }, 1000);*/
}
ngOnInit(): void 
{
    //console.log("alert ::::  "+this.alerTosend);
    //console.log(this.mentionTosend);

}

LikeMention(avis:any)
{
    
    //console.log(avis);
    this.mentionTosend.avis = avis;
    this.hideBtns =true;
    this.mtOpService.update(this.mentionTosend,this.alerTosend);

}

disLikeMention(avis:any)
{
    
    //console.log(avis);
    this.mentionTosend.avis = avis;
    this.hideBtns =true;
    this.mtOpService.update(this.mentionTosend,this.alerTosend);

}

deleteMention()
{
    var resp = window.confirm("Etes vous sûrs de vouloir supprimer cette mention");
    if(resp)
    {
        console.log("Id à supp "+this.mentionTosend.ids);
        this.mtOpService.delete(this.mentionTosend.ids,this.alerTosend);
        //this.refreshMentionList();
        //location.reload();
    
    
        
    }
    else
    {   window.close();
        return;}
    
}

refreshMentionList():void
    {
      
        this.mentionService._getMentions(this.alerTosend)
            .subscribe
            (
                ms => {
                 this.pagedItems= ms;
                 
                }
            );
    }

 


}