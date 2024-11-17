import clsx from 'clsx';
import React from 'react';

import styles from './signInUp.module.scss';

export const FormElement = ({
	label,
	className = '',
	placeholder,
	email = false,
	...other
}: {
	label: string;
	className?: string | false;
	placeholder: string;
	email?: boolean;
	register: React.InputHTMLAttributes<HTMLInputElement>;
}) => {
	return (
		<div className={styles['form-el']}>
			<label className={styles['form-label']}>{label}</label>
			<input
				type={email ? 'email' : 'text'}
				className={clsx(styles['form-input'], className && styles[className])}
				placeholder={placeholder}
				{...other.register}
			/>
		</div>
	);
};
