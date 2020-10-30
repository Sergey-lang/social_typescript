import React from 'react'
import s from './Header.module.css'

type HeaderPropsType = {
	isAuth: boolean
	login: string | null
}

export const Header: React.FC<HeaderPropsType> = (props) => {
	return (
		<header className={s.header}>
			<div className={s.container}>
				<div className={s.logo_name}>
					SW<span className={s.logo_explanation}>social network</span>
				</div>
				<div className={s.user_login}>
					{props.isAuth ? <div className={s.login}>{props.login}</div>: <div className={s.login}>Login</div>}
				</div>
			</div>
		</header>
	)
}