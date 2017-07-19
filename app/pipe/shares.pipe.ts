import {Pipe, PipeTransform} from '@angular/core';
import {Mention} from '../dashboard/mentions/mention';
@Pipe({
    name: 'shares'
})
export class SharePipe implements PipeTransform {

    
  transform(mts:Mention[]): Mention[] {
	
    mts.sort(function (a, b) {
  return b.shares_count - a.shares_count ;
});
//console.log(mts);
return mts;

}
}

