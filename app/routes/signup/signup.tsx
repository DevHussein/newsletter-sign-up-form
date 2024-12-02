import { defaultValues, signupFormSchema } from "~/schemas/SignupForm";
import type { SignupForm } from "~/schemas/SignupForm";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useForm } from "react-hook-form";
import {
  Form,
  MetaArgs,
  useActionData,
  useNavigation,
  redirect,
} from "react-router";

export function meta({}: MetaArgs) {
  return [
    { title: "Signup Form" },
    { name: "description", content: "Welcome to Newsletter!" },
  ];
}

export const action = async ({ request }: { request: Request }) => {
  const loginFormData = await request.formData();
  const data = Object.fromEntries(loginFormData);

  try {
    const validateData = signupFormSchema.safeParse(data);

    if (!validateData.success) {
      return Response.json({
        errors: validateData.error.flatten().fieldErrors,
      });
    }
    return redirect("/signup-success?email=" + validateData.data.email);
    // return Response.json({ success: true, data: validateData.data });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return Response.json(
        {
          sucess: false,
          errors: error.flatten().fieldErrors,
        },
        { status: 400 }
      );
    }
    return Response.json({ errors: error });
  }
};

function SignupForm() {
  const actionData = useActionData();
  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting";

  const {
    register,
    formState: { isDirty, isValid, errors },
  } = useForm<SignupForm>({
    mode: "all",
    resolver: zodResolver(signupFormSchema),
    defaultValues,
  });

  return (
    <main className="min-h-screen flex flex-col items-center justify-center font-sans antialiased desktop:bg-paleNavy">
      <div className="bg-white max-w-screen-mobile text-darkNavy flex flex-col desktop:max-w-[928px] desktop:flex-row desktop:gap-16 desktop:items-center desktop:justify-around desktop:mx-64 desktop:mt-[219px] desktop:mb-[220px] desktop:rounded-[36px]">
        <div className="block desktop:hidden">
          <img
            className="object-cover object-center"
            src="/public/images/illustration-sign-up-mobile.svg"
            alt="Signup image"
          />
        </div>
        <div className="my-10 mx-6  desktop:mx-0 desktop:my-0 space-y-10 desktop:pl-16">
          <div className="space-y-6">
            <h1 className="text-[2.5rem] desktop:text-heading font-bold leading-[100%] tracking-[0px]">
              Stay updated!
            </h1>
            <p className="text-body">
              Join 60,000+ product managers receiving monthly updates on:
            </p>
            <ul className="space-y-[.625rem]">
              <div className="flex items-start gap-x-4">
                <img src="/public/images/icon-list.svg" alt="Icon list" />
                <li>Product discovery and building what matters</li>
              </div>
              <div className="flex items-start gap-x-4">
                <img src="/public/images/icon-list.svg" alt="Icon list" />
                <li>Measuring to ensure updates are a success</li>
              </div>
              <div className="flex items-start gap-x-4">
                <img src="/public/images/icon-list.svg" alt="Icon list" />
                <li>And much more!</li>
              </div>
            </ul>
          </div>
          <Form
            method="post"
            encType="multipart/form-data"
            className="space-y-6"
          >
            <div className="space-y-2 flex flex-col">
              <div className="flex justify-between">
                <label className="text-bodySmall" htmlFor="email">
                  Email address
                </label>
                {(errors?.email || actionData?.errors?.email) && (
                  <p className="text-vermellion text-bodySmall">
                    {errors?.email?.message || actionData?.errors?.email}
                  </p>
                )}
              </div>
              <input
                className={`${
                  errors.email || actionData?.errors?.email
                    ? "bg-vermellion bg-opacity-15 border border-vermellion text-vermellion "
                    : "bg-white text-darkNavy text-opacity-50 border-darkNavy border-opacity-25"
                } border rounded-lg py-4 pl-6 text-body focus-visible:ring-0 active:focus:border-darkNavy active:focus:text-darkNavy`}
                type="email"
                id="email"
                {...register("email")}
                placeholder="email@company.com"
              />
            </div>

            <button
              type="submit"
              disabled={
                isSubmitting ||
                Boolean(actionData?.errors) ||
                Boolean(errors?.email)
              }
              className="pt-[1.125rem] pb-[.875rem] pl-12 pr-[2.875rem] desktop:px-0 desktop:w-full bg-darkNavy active:bg-custom-gradient text-bodyBold text-white rounded-lg"
            >
              Subscribe to monthly newsletter
            </button>
          </Form>
        </div>
        <img
          className="hidden desktop:block desktop:object-cover desktop:object-center desktop:py-6 desktop:pr-6"
          src="/public/images/illustration-sign-up-desktop.svg"
          alt="Signup image"
        />
      </div>
    </main>
  );
}

export default SignupForm;
