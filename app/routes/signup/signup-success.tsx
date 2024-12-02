import { useLoaderData, useNavigate } from "react-router";

import { LoaderFunction } from "react-router";

export const loader: LoaderFunction = async ({ request }) => {
  const url = new URL(request.url);
  const email = url.searchParams.get("email");
  if (!email) {
    throw new Response("Email not provided", { status: 400 });
  }
  return { email: email };
};

export function SignupSucess() {
  const navigate = useNavigate();
  const { email } = useLoaderData();

  return (
    <main className="min-h-screen flex flex-col justify-center items-center font-sans antialiased desktop:bg-darkNavy">
      <div className="bg-white max-w-screen-mobile desktop:max-w-[504px] text-darkNavy px-6 desktop:px-16 desktop:pb-16 flex flex-col desktop:mx-[468px] desktop:my-[280px] rounded-[36px]">
        <div className="pt-[149px] pb-[263px] desktop:pt-12 desktop:pb-10">
          <img className="mb-10" src="icon-success.svg" alt="Icon success" />
          <h1 className="mb-6 font-bold text-[40px] desktop:text-heading leading-[100%] tracking-[0px]">
            Thanks for subscribing!
          </h1>
          <p className="text-body text-darkNavy">
            A confirmation email has been sent to{" "}
            <span className="text-bodyBold">{email}</span>. Please open it and
            click the button inside to confirm your subscription
          </p>
        </div>
        <button
          onClick={() => navigate("/")}
          className="pt-[1.125rem] pb-[.875rem] mb-10 desktop:mb-0 pl-12 pr-[2.875rem] bg-darkNavy active:bg-custom-gradient text-bodyBold text-white rounded-lg"
        >
          Dismiss message
        </button>
      </div>
    </main>
  );
}

export default SignupSucess;
