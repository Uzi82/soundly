import clsx from 'clsx';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import type { SubmitErrorHandler } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

import { FormElement } from './formElement';
import styles from './signInUp.module.scss';
import { ILogin } from './types';

import { HeaderText } from '@/components/headerText';

export const Login = () => {
	const { register, handleSubmit } = useForm<ILogin>();
	const navigate = useNavigate();
	const [fieldErrors, setErrors] = useState<boolean[]>([false, false]);
	const submitHandler = () => {
		navigate('/');
	};
	const errorHandler: SubmitErrorHandler<ILogin> = err => {
		toast.error('Неправильно заполнены поля!');
		setErrors([err.nickname !== undefined, err.password !== undefined]);
	};
	return (
		<>
			<div className={styles.header}>
				<HeaderText btn={false} size="32px" weight="500">
					Вход
				</HeaderText>
			</div>
			<form
				onSubmit={handleSubmit(submitHandler, errorHandler)}
				className={clsx(styles.form, styles['form-loginForm'])}>
				<FormElement
					label="Имя"
					placeholder="НагибаторМузла2033"
					className={fieldErrors[0] && 'form-error'}
					register={register('nickname', {
						required: true,
						minLength: 4,
						maxLength: 12,
					})}
				/>
				<FormElement
					label="Пароль"
					placeholder="Очень сложный пароль..."
					className={fieldErrors[1] && 'form-error'}
					register={register('password', {
						required: true,
						minLength: 8,
						maxLength: 20,
					})}
				/>
				<button
					type="submit"
					className={clsx(
						styles['form-submit'],
						styles['form-submit-loginForm'],
					)}>
					Я вернулся!
				</button>
			</form>
		</>
	);
};
