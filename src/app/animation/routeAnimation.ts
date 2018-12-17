import {animate, animateChild, group, query, style, transition, trigger} from "@angular/animations";

export const routeAnimation = trigger('routeAnimation', [
    transition('mainPage <=> contentPage, contentPage => *, infoPage => *, *=>infoPage', [
        query(':enter, :leave', [
            style({
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100%',
            })
        ]),
        query(':enter', [
            style({left: '-100%'})
        ]),
        group([
            query(':leave', [
                animate('0.3s ease-out', style({left: '100%'}))
            ]),
            query(':enter', [
                animate('0.3s ease-out', style({left: '0%'}))
            ])
        ]),
    ])
]);
