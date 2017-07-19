import { Directive, Input } from '@angular/core';

@Directive({
    selector: 'img [src]',
    host: {
        '[src]': 'checkPath(src)',
        '(error)': 'onError()'
    }
})
export class DefaultImageDirective { 
    @Input() src: string;
    public defaultImg: string = '../../assets/img/twitter-icon.png';
    public onError() {
        return this.defaultImg;
    }
    public checkPath(src:string) {
        return src ? src : this.defaultImg;
    }
}