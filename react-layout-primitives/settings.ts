export const sizes = {
	medium: '640px',
	large: '1025px',
	ultra: '2560px',
};

export const queries = {
	medium: `@media(min-width: ${sizes.medium})`,
	large: `@media(min-width: ${sizes.large})`,
	ultra: `@media(min-width: ${sizes.ultra})`,
};

export const settings = [sizes, queries];
