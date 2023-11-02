import "./css.css"

const Header = () => {
    return (
        <>
            <header className="bg-white">
                <div className="  ">
                    <div className="flex h-16 items-center justify-between">
                        <div className="md:flex md:items-center md:gap-12 ">
                            <a className="block text-teal-600 " href="/">
                                <span className="sr-only">Home</span>
                              <img className="logo" src="https://tse4.mm.bing.net/th?id=OIP.FuCU5yLTGDi9mIhXhyBSQAHaEK&pid=Api&P=0&h=220" alt="" />
                            </a>
                        </div>

                        <div className="hidden md:block">
                            <nav aria-label="Global">
                                <ul className="flex  gap-6 ">
                                    <li>
                                        <a
                                            className="text-gray-600 transition hover:text-gray-500/75"
                                            href="/"
                                        >
                                            About
                                        </a>
                                    </li>

                                    <li>
                                        <a
                                            className="text-gray-600 transition hover:text-gray-500/75"
                                            href="/"
                                        >
                                            Products
                                        </a>
                                    </li>

                                    <li>
                                        <a
                                            className="text-gray-600 transition hover:text-gray-500/75"
                                            href="/"
                                        >
                                            Contact
                                        </a>
                                    </li>

                                    <li>
                                        <a
                                            className="text-gray-600 transition hover:text-gray-500/75"
                                            href="/"
                                        >
                                            Services
                                        </a>
                                    </li>

                                    <li>
                                        <a
                                            className="text-gray-600 transition hover:text-gray-500/75"
                                            href="/"
                                        >
                                            Projects
                                        </a>
                                    </li>

                                    <li>
                                        <a
                                            className="text-gray-600 transition hover:text-gray-500/75"
                                            href="/"
                                        >
                                            Blog
                                        </a>
                                    </li>
                                </ul>
                            </nav>
                        </div>

                        <div className="flex items-center gap-4">
                            <div className="sm:flex sm:gap-4">
                                <a
                                    className="rounded-md bg-teal-600 px-3 py-2 font-medium text-white shadow"
                                    href="/"
                                >
                                    Login
                                </a>

                                <div className="hidden sm:flex">
                                    <a
                                        className="rounded-md bg-blue-300 px-3 py-2 text-sm font-medium text-teal-600"
                                        href="/"
                                    >
                                        Register
                                    </a>
                                </div>
                            </div>

                            <div className="block md:hidden">
                                <button   className="rounded bg-gray-100 p-2 text-gray-600 transition hover:text-gray-600/75">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-5 w-5"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        stroke-width="2"
                                    >
                                        <path
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            d="M4 6h16M4 12h16M4 18h16"
                                        />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </header>



            <section
                className="relative bg-[url(https://www.petmom.vn/uploads/category/1591418765_bf3a3654d4a76c33a12c.jpg)] bg-cover bg-center bg-no-repeat"
            >
                <div
                    className="absolute inset-0 bg-white/75 sm:bg-transparent sm:from-white/95 sm:to-white/25 ltr:sm:bg-gradient-to-r rtl:sm:bg-gradient-to-l"
                ></div>

                <div
                    className="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8"
                >
                    <div className="max-w-xl text-center ltr:sm:text-left rtl:sm:text-right">
                        <h1 className="text-3xl font-extrabold sm:text-5xl">
                            Let us find your

                            <strong className="block font-extrabold text-rose-700">
                                Forever Home.
                            </strong>
                        </h1>

                        <p className="mt-4 max-w-lg sm:text-xl/relaxed">
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt illo
                            tenetur fuga ducimus numquam ea!
                        </p>

                        <div className="mt-8 flex flex-wrap gap-4 text-center">
                            <a
                                href="#"
                                className="block w-full rounded bg-rose-600 px-12 py-3 text-sm font-medium text-white shadow hover:bg-rose-700 focus:outline-none focus:ring active:bg-rose-500 sm:w-auto"
                            >
                                Get Started
                            </a>

                            <a
                                href="#"
                                className="block w-full rounded bg-white px-12 py-3 text-sm font-medium text-rose-600 shadow hover:text-rose-700 focus:outline-none focus:ring active:text-rose-500 sm:w-auto"
                            >
                                Learn More
                            </a>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}

export default Header;