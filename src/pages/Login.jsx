import { useEffect, useRef } from "react"
import Input from "../components/Input"
import Button from "../components/Button"
import Separator from "../components/Separator"
import { AiFillFacebook } from "react-icons/ai"
import { Formik, Form } from "formik";
function Login() {
  const ref = useRef()
  const images = [
    '/src/assets/photo1.png',
    '/src/assets/photo2.png',
    '/src/assets/photo3.png',
    '/src/assets/photo4.png',
  ]
  useEffect(() => {
    let photos = ref.current.querySelectorAll('img')
    let total = photos.length;
    let current = 0;

    const photoSlider = () => {
      photos[(current > 0 ? current : total) - 1].classList.add('opacity-0');
      photos[current].classList.remove('opacity-0');
      current = current === total - 1 ? 0 : current + 1;
    }
    photoSlider();
    let interval = setInterval(photoSlider, 3000);
    return () => {
      clearInterval(interval)
    }
  })
  return (
    <div className="h-full w-full flex flex-wrap overflow-auto items-center gap-x-8 justify-center">
      <div className="hidden md:block w-[380px] h-[581px] bg-logo-pattern relative  bg-[length:468.32px_634.15px] bg-[top_left_-46px]">
        <div className="w-[250px] h-[538px] absolute top-[27px] right-[18px] " ref={ref}>
          {images.map((image, key) => (
            <img key={key} src={image} alt="" className="w-full h-full absolute top-0 left-0 opacity-0 transition-opacity duration-1000 ease-linear" />
          ))}
        </div>
      </div>
      <div className="w-[350px] grid gap-y-3">
        <div className="bg-white border px-[40px] pt-10 pb-6">
          <div className="flex justify-center mb-8">
            <img src="src/assets/logo.png" className="h-[51px]" alt="instagram" />
          </div>
          <Formik
            initialValues={{
              username: '',
              password: ''
            }}

          >
            {({ isSubmitting, isValid, dirty, values }) => (
              <Form className="grid gap-y-1.5">
                <Input name="username" label="Phone number, username or email" />
                <Input type="password" name="password" label="Password" />
                <Button type="submit" disabled={!isValid || !dirty || isSubmitting}>
                  Log In
                </Button>
                <Separator />
                <a href="#"
                  className="flex justify-center mb-2.5 items-center gap-x-2 text-sm font-semibold text-facebook">
                  <AiFillFacebook size={20} />
                  Log in with Facebook
                </a>
                <a href="#" className="text-xs flex items-center justify-center text-link">
                  Forgot password?
                </a>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  )
}

export default Login