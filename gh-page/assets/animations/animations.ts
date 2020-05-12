import { trigger, transition, style, query, group, animate } from '@angular/animations';


export const fadeIn = trigger('fadeIn', [
    transition(':enter', [
        style({opacity: 0}),
        animate(3000),
    ])
]);

export const fadeOut = trigger('fadeOut', [
    transition(':enter', [
        style({opacity: 1}),
        animate(3000, style({opacity: 0})),
        style({opacity: 0})
    ])
]);


export const fader =
    trigger('routeAnimations', [
        transition('* <=> *', [
            query(':enter, :leave', [
                style({
                    position: 'absolute',
                    left: 0,
                    width: '100%',
                    opacity: 0,
                    transform: 'scale(0) translateY(100%)',
                }),
            ]),
            query(':enter', [
                animate('600ms ease', style({ opacity: 1, transform: 'scale(1) translateY(0)' })),
            ])
        ]),
    ]);


// Positioned

export const slider =
    trigger('routeAnimations', [
        transition('splash => main', [
            query(':enter, :leave', [
                style({
                    position: 'absolute',
                    top: 0,
                    width: '100%'
                })
            ], { optional: true }),
            query(':enter', [
                style({ top: '-100%' })
            ]),
            group([
                query(':leave', [
                    animate('600ms ease', style({ top: '100%' }))
                ], { optional: true }),
                query(':enter', [
                    animate('600ms ease', style({ top: '0%' }))
                ])
            ]),
        ])
    ]);
