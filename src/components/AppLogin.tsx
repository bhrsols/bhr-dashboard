import { FiMail } from 'react-icons/fi'
import { RiLockPasswordLine } from 'react-icons/ri'
import { InputField } from './InputField'
import { Button } from './Button'
import { useAppDispatch, useAppSelector, login } from 'src/app'
import { useState } from 'react'

export function AppLogin() {
    const dispatch = useAppDispatch()
    const { ui, properties } = useAppSelector(state => state)
    const { propertiesLoading } = properties
    const { theme, t } = ui
    const [email, setEmail] = useState('info@bhr.sa')
    const [password, setPassword] = useState('$RA+Ra5.&Xq8nQB')

    const handleLogin = () => {
        dispatch(
            login({
                email,
                password,
            })
        )
    }

    return (
        <div className="relative h-screen flex justify-center items-center">
            <div
                className={`overflow-hidden flex flex-row-reverse w-10/12 md:w-11/12 lg:w-4/5 xl:w-3/4 mx-auto max-w-sm lg:max-w-6xl bg-lightbg dark:bg-darkbg rounded-xl shadow-md border border-disabled dark:border-gentle dark:border-opacity-10 animate-grow`}
            >
                <div className="hidden lg:flex justify-center items-center lg:w-1/2 m-auto">
                    <a
                        href={t.COMPANY_WEBSITE}
                        target="_blank"
                        rel="noreferrer"
                    >
                        <img
                            alt="Bhr Logo"
                            src={
                                theme === 'dark'
                                    ? '/static/logo-txt-dark.png'
                                    : '/static/logo-txt.png'
                            }
                            width={300}
                            className="onclick-push"
                            draggable={false}
                        />
                    </a>
                </div>

                <div className="w-full px-8 py-16 lg:w-1/2 bg-lightfg dark:bg-darkfg text-center">
                    <div className="mb-12">
                        <h4>{t.APP_TITLE}</h4>
                    </div>

                    <div className="my-8">
                        <InputField
                            required
                            fieldIcon={FiMail}
                            type="email"
                            dir="ltr"
                            placeholder="Email"
                            value={email}
                            onChange={e => setEmail(e.target.value)}
                        />

                        <InputField
                            required
                            fieldIcon={RiLockPasswordLine}
                            type="password"
                            dir="ltr"
                            placeholder="Password"
                            value={password}
                            onChange={e => setPassword(e.target.value)}
                        />
                    </div>

                    <Button
                        text={t.LOG_IN}
                        loading={propertiesLoading}
                        onClick={handleLogin}
                    />
                </div>
            </div>
            <div className="absolute bottom-32 hover:text-primary onclick-push">
                <a href={t.COMPANY_WEBSITE} target="_blank" rel="noreferrer">
                    <p>{t.BHR_CR}</p>
                </a>
            </div>
        </div>
    )
}
