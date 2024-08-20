module.exports = {
	extends: [
		"eslint:recommended",
		"plugin:react/recommended",
		"plugin:react-hooks/recommended",
		"plugin:@typescript-eslint/recommended",
		"plugin:css-modules/recommended",
		"plugin:prettier/recommended",
		"plugin:jsx-a11y/recommended",
	],
	overrides: [
		{
			files: ["*.ts", "*.tsx"],
			rules: {
				//=============eslint=======================
				"no-undef": "off", // handled by TypeScript itself, troublesome instead of helpful
				"no-mixed-spaces-and-tabs": "off", // conflicts with Prettier
				"no-constant-condition": "off",

				//============typescript=============
				"@typescript-eslint/no-explicit-any": "off",

				//=========react===============
				"react/prop-types": "off",
				"react/display-name": "off",
			},
		},
	],
	parser: "@typescript-eslint/parser",
	parserOptions: {
		ecmaFeatures: {
			jsx: true,
		},
		ecmaVersion: "latest",
		sourceType: "module",
		project: ["./tsconfig.json"],
	},
	plugins: [
		"react",
		"react-hooks",
		"@typescript-eslint",
		"css-modules",
		"prettier",
		"unused-imports",
		"jsx-a11y",
	],
	rules: {
		//============= eslint-plugin-css-modules ===============
		"css-modules/no-unused-class": [0, { camelCase: true }],
		"css-modules/no-undef-class": [0, { camelCase: true }],

		//=============react===============
		"react/no-array-index-key": "error",
		"react/no-unescaped-entities": ["warn"],
    'react/prop-types': 'off',
    'react/jsx-uses-react': 'off',
    'react/react-in-jsx-scope': 'off',
		//      //=============typescript===============
		"@typescript-eslint/no-unused-vars": "warn",
		"@typescript-eslint/no-use-before-define": ["error"],

		//=============eslint================
		"unused-imports/no-unused-imports": "error",
		"spaced-comment": "warn",
		"no-alert": "error",
		"no-console": ["error", { allow: ["warn", "error"] }],
		"no-debugger": "error",
		"no-duplicate-imports": "error",
		"newline-before-return": "warn",
		"prefer-const": ["error"],
		"no-array-constructor": "error",
		"no-loop-func": "warn",
		"no-var": "error",
		"object-shorthand": "warn",
		"no-new-object": "error",
		"no-prototype-builtins": "warn",
		"template-curly-spacing": "warn",
		"no-eval": "error",
		"no-param-reassign": "warn",
		"space-before-blocks": "warn",
		"no-new-func": "error",
		"prefer-rest-params": "warn",
		"prefer-destructuring": [
			"error",
			{
				array: true,
				object: true,
			},
			{
				enforceForRenamedProperties: false,
			},
		],
		"wrap-iife": "warn",
		"func-style": "warn",
		"array-callback-return": "error",
		"quote-props": [2, "always"],
		"prettier/prettier": ["error"],
		// "camelcase": "error"  // cases where keys are returned by API and also set by us on window and read by gnb

		/* Not doing */
		// "no-magic-numbers": ["error", { "ignore": [-1, 0, 1, 2, 100] }], // extra chaotic and also impacts readability negatively
	},
	settings: {
		react: {
			version: "detect",
		},
		"import/resolver": {
			typescript: {},
		},
	},
};
