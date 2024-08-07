"use client";

import Button from "@/components/ui/Button";
import { FC, useState } from "react";
import { signIn } from "next-auth/react";
import { toast } from "react-hot-toast";

const Page: FC = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  async function loginWithGoogle() {
    setIsLoading(true);
    try {
      await signIn("google");
    } catch (error) {
      // display error message to user
      toast.error("Something went wrong with your login.");
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className="relative h-screen w-screen">
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <video 
          autoPlay 
          loop 
          muted 
          className="absolute inset-0 w-full h-full object-cover"
          poster="/bg/bg-otimize-video.mp4" // Fallback image for mobile devices
        >
          <source src="/bg/bg-otimize-video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="absolute inset-0 bg-black opacity-50"></div> {/* Overlay */}
      </div>
      <div className="flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="w-full flex flex-col items-center max-w-md space-y-8 bg-white bg-opacity-70 p-6 rounded-lg shadow-lg sm:p-8 lg:p-10">
          <div className="flex flex-col items-center gap-4 sm:gap-6 lg:gap-8">
            <h2 className="mt-6 text-center text-2xl sm:text-3xl font-bold  text-gray-900">
              Welcome to Chat-App
            </h2>
            <p className="text-center text-xs sm:text-sm text-gray-700">
              Sign in to your account to start chatting with your friends.
            </p>
            {/* <p className="text-center text-xs sm:text-sm lg:text-base text-gray-500">
              Connect with your friends and enjoy secure and private messaging.
            </p> */}
          </div>

          <Button
            isLoading={isLoading}
            type="button"
            className="max-w-sm mx-auto w-full text-xs sm:text-sm"
            onClick={loginWithGoogle}>
            {isLoading ? null : (
              <svg
                className="mr-2 h-4 w-4"
                aria-hidden="true"
                focusable="false"
                data-prefix="fab"
                data-icon="google"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24">
                <path
                  d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                  fill="#4285F4"
                />
                <path
                  d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                  fill="#34A853"
                />
                <path
                  d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                  fill="#FBBC05"
                />
                <path
                  d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                  fill="#EA4335"
                />
                <path d="M1 1h22v22H1z" fill="none" />
              </svg>
            )}
            Google
          </Button>
          <p className="text-center text-xs sm:text-sm  text-gray-700">
            By signing in, you agree to our Terms and Conditions and Privacy Policy.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Page;
