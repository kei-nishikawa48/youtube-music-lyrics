// 共通化できる型を記述しましょう

export type ColorProp = 'black' | 'gray' | 'grayDark' | 'grayLight' | 'white';

export type Color = {
	black: string;
	gray: string;
	grayDark: string;
	grayLight: string;
	white: string;
};

export type BgColorProp = 'transparent' | ColorProp;

export type BgColor = { transparent: string } | Color;
