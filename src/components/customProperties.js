import {createGlobalStyle} from 'styled-components'

export const GlobalStyles = createGlobalStyle`
	:root{
		/* colours */
		--dme: hsl(209, 23%, 22%);
		--dmb: hsl(200, 15%, 8%);
		--dg-lmi: hsl(0, 0%, 52%);
		--lmb: hsl(0, 0%, 98%);
		--white : hsl(0, 0%, 100%);

		/* Typography */
		--fs-home: 14px;
		--detai-page: 16px;

		--fw-1: 300;
		--fw-2: 600;
		--fw-3: 800;
	}

	body{
		background: ${({ theme }) => theme.body};
		color: ${({ theme }) => theme.text};
		transition: all .5s linear;
	}


	`
export const lightTheme = {
	body: 'hsl(0, 0%, 98%)',
	text: ' hsl(200, 15%, 8%)',
	element: 'hsl(0, 0%, 100%)',
	input: ' hsl(0, 0%, 52%)',
	boxshadow: 'hsl(0, 0%, 52%)'
}

export const darkTheme = {
	body: ' hsl(207, 26%, 17%)',
	text: 'hsl(0, 0%, 100%)',
	element: 'hsl(209, 23%, 22%)',
	boxshadow: 'hsl(207, 26%, 17%)'
}