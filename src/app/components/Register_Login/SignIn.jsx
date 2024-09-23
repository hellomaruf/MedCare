"use client";
import Image from "next/image";
import loginImg from "../../../asset/imgs/login.png";
import facebook from "../../../asset/imgs/facebook.png";
import google from "../../../asset/imgs/search.png";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { signIn } from "next-auth/react";
import { IoArrowBackCircleOutline } from "react-icons/io5";
import { useRouter } from "next/navigation";
// import {signIn} from "next-auth/react";
function SignIn() {
  const pathName = usePathname();
  const router = useRouter();
  const handleLogin = async (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(email, password);
    const resp = await signIn("credentials", {
      email,
      password,
      redirect: false,
    });
    console.log(resp);
    if (resp?.status === 200) {
      router.push("/");
    }
  };
  const handleSocialLogin = (provider) => {
    console.log(provider)
    const resp = signIn(provider);
    console.log(resp);
    if (resp?.status === 'authenticated') {
      router.push('/')
    }
  };
  return (
    <div>
      <div className="grid grid-cols-2 items-center h-screen ">
        <div className="bg-gradient-to-r from-[#2089CB] h-full to-[#1a7fbd] rounded-tr-[100px]  flex flex-col items-center justify-center">
          <Image src={loginImg} alt="login-img" width={500} height={500} />
          <h2 className="text-3xl mt-6 text-white font-semibold text-center">
            Welcome to MedCare
          </h2>
          <p className="text-center text-gray-200 max-w-xl mx-auto">
            Proactively utilize standardized users with focused growth
            strategies. Phosfluorescently synergize installed base
          </p>
        </div>
        <div className=" relative">
          <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-lg">
              <div className=" bg-gray-50 rounded-3xl">
                <div className=" flex item-center gap-5 pt-6 px-4">
                  <Link
                    href="/signin"
                    className={
                      pathName === "/signin" ? "font-semibold" : "text-gray-500"
                    }
                  >
                    Sign In
                  </Link>
                  <Link
                    href="/signup"
                    className={
                      pathName === "/signup" ? "font-semibold" : "text-gray-500"
                    }
                  >
                    Sign Up
                  </Link>
                </div>
                {/* <p className='text-sm pt-2 pl-4'>If you have not registered then click on sign up button</p> */}
                <div className="bg-white shadow-lg pb-6 rounded-3xl">

                <form
                  onSubmit={handleLogin}
                  action="#"
                  className="mb-0 mt-6 space-y-4 rounded-3xl p-4  sm:p-6 lg:p-8"
                >
                  <p className="text-center text-lg font-medium">
                    Sign in to your account
                  </p>

                  <div>
                    <label htmlFor="email" className="sr-only">
                      Email
                    </label>

                    <div className="relative">
                      <input
                        type="email"
                        name="email"
                        className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                        placeholder="Enter email"
                      />

                      <span className="absolute inset-y-0 end-0 grid place-content-center px-4">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="size-4 text-gray-400"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                          />
                        </svg>
                      </span>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="password" className="sr-only">
                      Password
                    </label>

                    <div className="relative">
                      <input
                        type="password"
                        name="password"
                        className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                        placeholder="Enter password"
                      />

                      <span className="absolute inset-y-0 end-0 grid place-content-center px-4">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="size-4 text-gray-400"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                          />
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                          />
                        </svg>
                      </span>
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="block w-full rounded-lg bg-primary px-5 py-3 text-sm font-medium text-white"
                  >
                    Sign in
                  </button>
                  </form>
                  
                <div className="divider text-sm py-4">
                  Continue with Google or Facebook
                </div>
                <div className="flex gap-4 item-center justify-center">
                  <button
                    onClick={() => handleSocialLogin("google")}
                    className="btn bg-white border-2 border-gray-300"
                  >
                    <Image
                      src={google}
                      alt={"facebook"}
                      width={20}
                      height={20}
                    />{" "}
                    Google
                  </button>
                  <button  onClick={() => handleSocialLogin("github")} className="btn bg-white border-2 border-gray-300">
                    <Image
                      src={facebook}
                      alt={"facebook"}
                      width={20}
                      height={20}
                    />{" "}
                    Facebook
                  </button>
                </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <Link
              className="absolute -top-2 right-6 flex items-center gap-2 text-[#1F88C9]"
              href="/"
            >
              <IoArrowBackCircleOutline className="text-2xl" /> Back to Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignIn;
