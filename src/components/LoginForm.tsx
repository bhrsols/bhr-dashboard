import { FiMail, FiLogIn } from 'react-icons/fi'
import { RiLockPasswordLine } from 'react-icons/ri'
import { InputField } from './InputField'
import { Button } from './Button'

export function LoginForm() {
    return (
        <div className="flex h-screen justify-center items-center bg-white dark:bg-dark_accent">
            <div
                className={`flex flex-row-reverse w-11/12 md:w-11/12 lg:w-4/5 xl:w-3/4 bg-gray-50 dark:bg-dark_primary rounded-md shadow-lg overflow-hidden mx-auto max-w-sm lg:max-w-6xl animate-grow-light`}
            >
                <div className="hidden lg:flex justify-center items-center lg:w-1/2 m-auto">
                    <img
                        alt="NTIS Logo"
                        src="/static/images/logo.png"
                        className="m-auto w-60"
                        draggable={false}
                    />
                </div>

                <div className="w-full p-8 py-16 lg:w-1/2 bg-white dark:bg-dark_accent dark:border dark:border-dark_primary">
                    <h2 className="text-2xl font-semibold text-gray-700 dark:text-gray-300 text-center">
                        LOGIN
                    </h2>

                    <div className="my-6 flex items-center justify-between">
                        <span className="border-b w-14 md:w-20"></span>
                        <p className="text-xs text-gray-700 dark:text-gray-400 uppercase">
                            appTitle
                        </p>
                        <span className="border-b w-14 md:w-20"></span>
                    </div>

                    <InputField
                        required
                        width="full"
                        ltr={true}
                        fieldIcon={FiMail}
                        placeholder="Email"
                        value={'email'}
                        type="email"
                    />

                    <InputField
                        required
                        width="full"
                        ltr={true}
                        fieldIcon={RiLockPasswordLine}
                        placeholder={'Password'}
                        value={'password'}
                        type="password"
                    />

                    <div className="flex justify-center mt-4">
                        <Button
                            outLine={false}
                            text="LOGIN"
                            fullWidth={true}
                            icon={<FiLogIn size="20" />}
                            loading={false}
                            disabled={false}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}
