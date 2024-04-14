import AuthService from '@/appwrite/AuthService';
import { Button } from '@/shadcomponents/ui/button';
import { useDispatch } from 'react-redux';
import { login } from '@/stateManager/redux/authSlice';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useToast } from "@/shadcomponents/ui/use-toast"
import UserService from '@/appwrite/UserService';
function Login() {
  const { toast } = useToast()
  const {
    register,
    handleSubmit,
    reset,
    formState:{errors}
  } = useForm();
  const auth = new AuthService();
  const userService=new UserService();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [error,setErrorMessage]=useState('');

  const [isSubmitSuccessful,setIsSubmitSuccessful]=useState(false);

  const submitForm =  (data) => {
    let loginResponse = auth.login(data.email, data.password);
    loginResponse.then((loginResp)=>{
      if (loginResp) {
        const userData =  auth.getCurrentUserAccount();
       userData.then((userResponse)=>{
        setErrorMessage('')
        if (userResponse) {
          dispatch(login(userResponse)); 
          setTimeout(()=>{
           userService.checkUserDisplay(userResponse.$id).then((response)=>{
            if(response.documents[0].displayPictureFileId===null)
            {
              navigate('/setprofile',{replace:true})
            }else{
              navigate('/')
            }
          }).catch((error)=>{console.log(error)})
          },1500)
          userService.checkUserDisplay().then(resp=>{console.log(resp)}).catch(err=>{console.log(err)})
         setIsSubmitSuccessful(true)
         toast({
          title:'Login Successful',
          description:'Redirecting to profile',
         })
       }else{
        toast({
          variant: "destructive",
          title:'Login Unsuccessful',
          description:'Please Try again',
         })
         setIsSubmitSuccessful(false)
       }
       }).catch((error)=>{
      setErrorMessage(error.message)
    
       })
      }
    }).catch((error)=>{
      setErrorMessage(error.message)
    
    })

  };
  useEffect(()=>{
    if(isSubmitSuccessful){
      reset()
    }
  },[isSubmitSuccessful])
  return (
    <>
      <section className="bg-gray-50">
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
          <div className="w-full bg-white rounded-lg shadow  md:mt-0 sm:max-w-md xl:p-0 ">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl ">
                Sign in to your account
              </h1>
              <span className="text-red-500 relative top-2 font-semibold">{error}</span>

              <form
                className="space-y-4 md:space-y-6"
                noValidate
                onSubmit={handleSubmit(submitForm)}>
                <div>
                  <label
                    htmlFor="email"
                    id="userlabel"
                    className="block mb-2 text-sm font-medium text-gray-900 ">
                    Your email
                  </label>
                  <input
                    type="text"
                    {...register('email', {
                      required: {
                        value: true,
                        message: 'Please Enter your email'
                      },pattern:{
                        value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                        message: 'Invalid email address',
                      }
                    })}
                    id="email"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                    placeholder="e.g. john"
                    required=""
                  />
                </div>
                <div>
                  <label
                    htmlFor="password"
                    className="block mb-2 text-sm font-medium text-gray-900 ">
                    Password
                  </label>
                  <input
                    type="password"
                    {...register('password')}
                    id="password"
                    placeholder="••••••••"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
                    required
                  />
                </div>

                <Button type="submit" className="w-full  font-medium  text-center ">
                  Sign in
                </Button>
                <p className="text-sm font-light text-gray-500">
                  Don’t have an account yet?{' '}
                  <Link to="/register" className="font-medium  hover:underline hover:text-sky-600">
                    Sign up
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

export default Login;
