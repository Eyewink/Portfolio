import { animate, animateChild, group, query, style, transition, trigger } from "@angular/animations";

export const routerAnimations =
	trigger('routeAnimations', [
		transition('Start => Disclaimer', [
			style({ position: 'relative' }),
			query(':enter, :leave', [
				style({
					position: 'absolute',
					top: 0,
				})
			]),
			query(':enter' , [
				style({ top: '100vh'})
			]),
			query(':leave', animateChild()),
			group([
				query(':leave', [
					animate('500ms ease-out', style({ top: '-100vh'}))
				]),
				query(':enter', [
					animate('500ms ease-out', style({ top: 0 }))
				])
			]),
			query(':enter', animateChild())
		]),
		transition('Disclaimer => Examples', [
			style({ position: 'relative' }),
			query(':enter, :leave', [
				style({
					position: 'absolute',
					top: 0,
				})
			]),
			query(':enter' , [
				style({ top: '100vh'})
			]),
			query(':leave', animateChild()),
			group([
				query(':leave', [
					animate('500ms ease-out', style({ top: '-100vh'}))
				]),
				query(':enter', [
					animate('500ms ease-out', style({ top: 0 }))
				])
			]),
			query(':enter', animateChild())
		]),
		transition('Examples => Contacts', [
			style({ position: 'relative' }),
			query(':enter, :leave', [
				style({
					position: 'absolute',
					top: 0,
				})
			]),
			query(':enter' , [
				style({ top: '100vh'})
			]),
			query(':leave', animateChild()),
			group([
				query(':leave', [
					animate('500ms ease-out', style({ top: '-100vh'}))
				]),
				query(':enter', [
					animate('500ms ease-out', style({ top: 0 }))
				])
			]),
			query(':enter', animateChild())
		]),
		transition('Disclaimer => Start', [
			style({ position: 'relative' }),
			query(':enter, :leave', [
				style({
					position: 'absolute',
					top: 0,
				})
			]),
			query(':enter' , [
				style({ top: '-100vh'})
			]),
			query(':leave', animateChild()),
			group([
				query(':leave', [
					animate('500ms ease-out', style({ top: '100vh'}))
				]),
				query(':enter', [
					animate('500ms ease-out', style({ top: 0 }))
				])
			]),
			query(':enter', animateChild())
		]),
		transition('Examples => Disclaimer', [
			style({ position: 'relative' }),
			query(':enter, :leave', [
				style({
					position: 'absolute',
					top: 0,
				})
			]),
			query(':enter' , [
				style({ top: '-100vh'})
			]),
			query(':leave', animateChild()),
			group([
				query(':leave', [
					animate('500ms ease-out', style({ top: '100vh'}))
				]),
				query(':enter', [
					animate('500ms ease-out', style({ top: 0 }))
				])
			]),
			query(':enter', animateChild())
		]),
		transition('Contacts => Examples', [
			style({ position: 'relative' }),
			query(':enter, :leave', [
				style({
					position: 'absolute',
					top: 0,
				})
			]),
			query(':enter' , [
				style({ top: '-100vh'})
			]),
			query(':leave', animateChild()),
			group([
				query(':leave', [
					animate('500ms ease-out', style({ top: '100vh'}))
				]),
				query(':enter', [
					animate('500ms ease-out', style({ top: 0 }))
				])
			]),
			query(':enter', animateChild())
		])
	]);
