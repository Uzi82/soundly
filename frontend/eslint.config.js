import eslintPluginImport from 'eslint-plugin-import';
import eslintPluginPrettier from 'eslint-plugin-prettier';
import react from 'eslint-plugin-react';
// eslint-disable-next-line import/no-unresolved
import tseslint from 'typescript-eslint';
import { defineConfig } from 'vite';

export default defineConfig({
	languageOptions: {
		parser: tseslint.parser,
		parserOptions: {
			projectService: true,
			tsconfigRootDir: import.meta.dirname,
		},
	},
	plugins: {
		react,
		prettier: eslintPluginPrettier,
		import: eslintPluginImport,
		'@typescript-eslint': tseslint.plugin,
	},
	rules: {
		// Ваши правила ESLint
		'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
		'no-unused-vars': 'warn',
		semi: ['error', 'always'],
		'react-hooks/exhaustive-deps': 'off',
		'react-refresh/only-export-components': 'off',
		'prettier/prettier': 'error',
		'import/no-unresolved': 'error',
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
		// Добавьте другие правила по необходимости
	},
	settings: {
		react: {
			version: 'detect', // Автоматически определяет версию React
		},
	},
});
