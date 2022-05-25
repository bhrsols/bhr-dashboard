import { FiMail } from 'react-icons/fi'
import { RiLockPasswordLine } from 'react-icons/ri'
import { InputField } from './InputField'
import { Button } from './Button'
import { useAppSelector } from 'src/app'

export function AppLogin() {
    const { theme, t } = useAppSelector(state => state.ui)
    return (
        <div className="flex h-screen justify-center items-center">
            <div
                className={`overflow-hidden flex flex-row-reverse w-11/12 md:w-11/12 lg:w-4/5 xl:w-3/4 mx-auto max-w-sm lg:max-w-6xl bg-lightbg dark:bg-darkbg rounded-xl shadow-md border border-disabled dark:border-gentle dark:border-opacity-10 animate-grow`}
            >
                <div className="hidden lg:flex justify-center items-center lg:w-1/2 m-auto">
                    <a href="https://bhr.sa" target="_blank" rel="noreferrer">
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
                    <h4>{t.LOG_IN_TO_CONTINUE}</h4>

                    <div className="my-6 flex items-center justify-between">
                        <span className="border-b w-14 md:w-32"></span>
                        <p className="uppercase">{t.APP_TITLE}</p>
                        <span className="border-b w-14 md:w-32"></span>
                    </div>

                    <div className="my-6">
                        <InputField
                            required
                            fieldIcon={FiMail}
                            placeholder="Email"
                            value={'email'}
                            type="email"
                            dir="ltr"
                        />

                        <InputField
                            required
                            fieldIcon={RiLockPasswordLine}
                            placeholder={'Password'}
                            value={'password'}
                            type="password"
                            dir="ltr"
                        />
                    </div>

                    <Button
                        text={t.LOG_IN}
                        loading={false}
                        disabled={false}
                        onClick={() => null}
                    />
                </div>
            </div>
        </div>
    )
}
