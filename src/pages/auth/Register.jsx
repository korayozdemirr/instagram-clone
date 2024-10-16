import React from "react";
import Button from "../../components/Button";
import { AiFillFacebook } from "react-icons/ai";
import Separator from "../../components/Separator";
import { Formik, Form } from "formik";
import Input from "../../components/Input";
import { Link } from "react-router-dom";

function Register() {
  return (
    <div className="h-full w-full flex flex-wrap overflow-auto items-center gap-x-8 justify-center">
      <div className="w-[350px]  gap-y-3">
        <div className="bg-white border px-[40px] pt-10 pb-6">
          <div className="flex justify-center mb-4">
            <img className="h-[51px]" src="src/assets/logo.png" alt="" />
          </div>
          <p className="text-[17px] font-semibold text-[8e8e8e] text-center mb-6">
            Sign up to see photos and videos from friends.
          </p>
          <Button>
            <AiFillFacebook size={20} />
            Log in with Facebook
          </Button>
          <Separator />
          <Formik
            initialValues={{
              email: "",
              full_name: "",
              username: "",
              password: "",
            }}
          >
            {({ isSubmitting, isValid, dirty, values }) => (
              <Form className="grid gap-y-1.5">
                <Input name="email" label="Email" />
                <Input name="full_name" label="Full Name" />
                <Input name="username" label="Username" />
                <Input type="password" name="password" label="Password" />
                <p className="text-xs text-[#8e8e8e] py-2">
                  People who use our service may have uploaded your contact
                  information to Instagram.{" "}
                  <a href="#" className="font-semibold">
                    Learn More
                  </a>
                  <br />
                  <br />
                  By signing up, you agree to our{" "}
                  <a href="#" className="font-semibold">
                    Terms
                  </a>
                  ,{" "}
                  <a href="#" className="font-semibold">
                    Data Policy
                  </a>{" "}
                  and{" "}
                  <a href="#" className="font-semibold">
                    Cookies Policy
                  </a>
                  .
                </p>
                <Button
                  type="submit"
                  disabled={!isValid || !dirty || isSubmitting}
                >
                  Sign up
                </Button>
              </Form>
            )}
          </Formik>
        </div>
        <div className="bg-white border p-4 text-sm text-center">
          Have an account?{" "}
          <Link to="/login" className="font-semibold text-brand">
            Log in
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Register;
