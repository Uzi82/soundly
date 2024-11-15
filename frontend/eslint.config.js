import js from '@eslint/js';
import eslintPluginImport from 'eslint-plugin-import';
import eslintPluginPrettier from 'eslint-plugin-prettier';
import react from 'eslint-plugin-react';
import process from 'process';
import tseslint from 'typescript-eslint';

export default [
	{
		plugins: {
			react,
			prettier: eslintPluginPrettier,
			import: eslintPluginImport,
		},
		rules: {
			'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
			'no-unused-vars': 'warn',
			semi: ['error', 'always'],
			'react-hooks/exhaustive-deps': 'off',
			'react-refresh/only-export-components': 'off',
			'prettier/prettier': 'error',
			'import/named': 'error',
			'import/default': 'error',
			'import/namespace': 'error',
			'import/no-extraneous-dependencies': [
				'error',
				{
					devDependencies: false,
					optionalDependencies: false,
					peerDependencies: false,
				},
			],
			'import/no-absolute-path': 'error',
			'import/no-dynamic-require': 'error',
			'import/no-self-import': 'error',
			'import/no-cycle': ['error', { maxDepth: 1 }],
			'import/order': [
				'error',
				{
					groups: [
						['builtin', 'external'],
						'internal',
						['parent', 'sibling', 'index'],
						'object',
					],
					'newlines-between': 'always',
					alphabetize: { order: 'asc', caseInsensitive: true },
				},
			],
		},
		settings: {
			react: {
				version: 'detect',
			},
		},
	},
	js.configs.recommended,
	...tseslint.configs.recommended,
];
