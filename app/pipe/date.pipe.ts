import { Injectable, Pipe, PipeTransform } from '@angular/core';
import {Mention} from '../dashboard/mentions/mention';
@Pipe({
    name: 'datePipe'
})

@Injectable()
export class DatePipe implements PipeTransform {
    transform(array: Mention[], args: string): Mention[] {  
        if (typeof args[0] === "undefined") {
            return array;
        }
        let direction = args[0][0];
        let column = args.replace('-','');
        array.sort((a: any, b: any) => {
            let left = Number(new Date(a[column]));
            let right = Number(new Date(b[column]));
            return (direction === "-") ? right - left : left - right;
        });
        return array;
    }
}
