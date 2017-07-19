import {Pipe, PipeTransform} from '@angular/core';
import {Mention} from '../dashboard/mentions/mention';
@Pipe({
    name: 'cmts'
})
export class CommentPipe implements PipeTransform {

    
  transform(mts:Mention[]): Mention[] {
	
    mts.sort(function (a, b) {
  return b.comts_count - a.comts_count ;
});
//console.log(mts);
return mts;

}
}

