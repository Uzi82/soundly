import { useState } from 'react';
import { useForm } from 'react-hook-form';
import type { SubmitErrorHandler } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

import { FormElement } from './formElement';
import styles from './signInUp.module.scss';
import { IRegistration } from './types';

import { HeaderText } from '@/components/headerText';

export const Registration = () => {
	const { register, handleSubmit, setError } = useForm<IRegistration>();
	const navigate = useNavigate();
	const [fieldErrors, setErrors] = useState<boolean[]>([
		false,
		false,
		false,
		false,
	]);
	const submitHandler = (data: IRegistration) => {
		if (data.password !== data.confirmPassword) {
			setError(
				'confirmPassword',
				{
					type: 'Пароли не совпадают',
				},
				{ shouldFocus: true },
			);
			toast.error('Неправильно заполнены поля!');
			setErrors([false, false, true, false]);
			return;
		}
		navigate('/');
	};
	const errorHandler: SubmitErrorHandler<IRegistration> = err => {
		toast.error('Неправильно заполнены поля!');
		setErrors([
			err.email !== undefined,
			err.password !== undefined,
			err.confirmPassword !== undefined,
			err.nickname !== undefined,
		]);
	};
	return (
		<>
			<div className={styles.header}>
				<HeaderText btn={false} size="32px" weight="500">
					Регистрация
				</HeaderText>
			</div>
			<form
				onSubmit={handleSubmit(submitHandler, errorHandler)}
				className={styles.form}>
				<FormElement
					label="Email"
					placeholder="example@mail.ru"
					className={fieldErrors[0] && 'form-error'}
					email
					register={register('email', {
						required: true,
						minLength: 10,
						maxLength: 30,
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
				<FormElement
					label="Подтверждение пароля"
					placeholder="Опять очень сложный пароль..."
					className={fieldErrors[2] && 'form-error'}
					register={register('confirmPassword', {
						required: true,
						minLength: 8,
						maxLength: 20,
					})}
				/>
				<FormElement
					label="Имя"
					placeholder="НагибаторМузла2033"
					className={fieldErrors[3] && 'form-error'}
					register={register('nickname', {
						required: true,
						minLength: 4,
						maxLength: 12,
					})}
				/>
				<button type="submit" className={styles['form-submit']}>
					Поехали!
				</button>
			</form>
		</>
	);
};
