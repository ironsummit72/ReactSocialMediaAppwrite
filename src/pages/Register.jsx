import { Button } from '@/shadcncomponents/ui/button';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';

import { account } from '../lib/appwrite';

function Register() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch
  } = useForm();

  const submitHandler = async (data) => {
    const { username, email, password } = data;
    const response = await account.create(`[${username}]`, `${email}`, `${password}`);
    console.log(response);
  };
  return (
    <>
      <section className="bg-gray-50">
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
          <div className="w-full bg-white rounded-lg shadow  md:mt-0 sm:max-w-md xl:p-0">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl ">
                Create and account
              </h1>
              <form
                className="space-y-4 md:space-y-6"
                onSubmit={handleSubmit(submitHandler)}
                noValidate>
                <div>
                  <label
                    htmlFor="username"
                    className={`block mb-2 text-sm font-medium  ${
                      errors.username?.message ? 'text-red-600' : ' text-gray-900'
                    }`}
                    id="userlabel">
                    {errors.username?.message ? errors.username?.message : 'Your username'}
                  </label>
                  <input
                    type="text"
                    {...register('username', {
                      required: {
                        value: true,
                        message: 'Please Enter your username'
                      }
                    })}
                    id="username"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
                    placeholder="e.g. lewisham"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="firstname"
                    className={`block mb-2 text-sm font-medium  ${
                      errors.firstname?.message ? 'text-red-600' : ' text-gray-900'
                    }`}
                    id="userlabel">
                    {errors.firstname?.message ? errors.firstname?.message : 'Your First Name'}
                  </label>
                  <input
                    type="text"
                    {...register('firstname', {
                      required: {
                        value: true,
                        message: 'Please Enter your firstname'
                      }
                    })}
                    id="firstname"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                    placeholder="e.g. Lewis"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="lastname"
                    className={`block mb-2 text-sm font-medium  ${
                      errors.lastname?.message ? 'text-red-600' : ' text-gray-900'
                    }`}
                    id="userlabel">
                    {errors.lastname?.message ? errors.lastname?.message : 'Your Last Name'}
                  </label>
                  <input
                    type="text"
                    {...register('lastname', {
                      required: {
                        value: true,
                        message: 'Please Enter your lastname'
                      }
                    })}
                    id="lastname"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                    placeholder="e.g. Hamilton"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className={`block mb-2 text-sm font-medium  ${
                      errors.email?.message ? 'text-red-600' : ' text-gray-900'
                    }`}
                    id="emaillable">
                    {errors.email?.message ? errors.email?.message : 'Your Email'}
                  </label>
                  <input
                    type="email"
                    {...register('email', {
                      required: {
                        value: true,
                        message: 'Please Enter your email'
                      }
                    })}
                    id="email"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                    placeholder="name@company.com"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="password"
                    className={`block mb-2 text-sm font-medium  ${
                      errors.password?.message ? 'text-red-600' : ' text-gray-900'
                    }`}>
                    {errors.password?.message ? errors.password?.message : 'Your Password'}
                  </label>
                  <input
                    type="password"
                    {...register('password', {
                      required: {
                        value: true,
                        message: 'Please Enter your password'
                      }
                    })}
                    id="password"
                    placeholder="••••••••"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="confirm-password"
                    className={`block mb-2 text-sm font-medium  ${
                      errors.cpassword?.message ? 'text-red-600' : ' text-gray-900'
                    }`}>
                    {errors.cpassword?.message ? errors.cpassword?.message : 'Confirm Password'}
                  </label>
                  <input
                    type="password"
                    {...register('cpassword', {
                      required: {
                        value: true,
                        message: 'Please Enter your confirm password'
                      },
                      validate: (val) => {
                        const password = watch('password');
                        if (val !== password) {
                          return 'password not matched';
                        }
                      }
                    })}
                    id="cpassword"
                    placeholder="••••••••"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                    required
                  />
                </div>
                <Button type="submit" className="w-full">
                  Create an account
                </Button>
                <p className="text-sm font-light text-gray-500 ">
                  Already have an account?{' '}
                  <Link to="/login" className="font-medium  hover:underline hover:text-sky-600 ">
                    Login here
                  </Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Register;
