import {Pipe, PipeTransform} from '@angular/core';
import {Mention} from '../dashboard/mentions/mention';
@Pipe({
    name: 'likes'
})
export class MentionPipe implements PipeTransform {

    
  transform(mts:Mention[]): Mention[] {
	
    mts.sort(function (a, b) {
  return b.likes_count - a.likes_count ;
});
//console.log(mts);
return mts;

}
}

