import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import Link from "next/link"

 
const Signin = () => {
 
  
  return (
    <div className="h-[100vh] w-full">
       <div className="fixed inset-0 hidden lg:flex rounded-l-[35px]">
        <div className="absolute rounded-l-[35px] inset-0 bg-gradient-to-br from-purple-600 via-blue-600 to-cyan-500">
          <div className="absolute inset-0" style={{
            backgroundImage: `repeating-linear-gradient(
              45deg,
              transparent,
              transparent 10px,
              rgba(255,255,255,0.1) 10px,
              rgba(255,255,255,0.1) 20px
            )`
          }} />
        </div>
      </div>

      <div className="relative lg:hidden">
        <div className="h-16 rounded-b-[30px] bg-gradient-to-r from-purple-600 to-blue-600">
          <div className="absolute inset-0 flex items-center p-6" style={{
            backgroundImage: `repeating-linear-gradient(
              45deg,
              transparent,
              transparent 10px,
              rgba(255,255,255,0.1) 10px,
              rgba(255,255,255,0.1) 20px
            )`
          }} >
            <span className="text-white text-xl font-extrabold">aidefunding.</span>
          </div>
        </div>
      </div>

      <main className="relative flex min-h-screen w-full flex-col lg:grid lg:grid-cols-2">
        <div className="flex flex-1 flex-col items-center justify-center px-4 sm:px-6 lg:px-8 bg-white">
          <div className="w-full max-w-sm h-screen">

            <div className="space-y-2">
              <h1 className="text-3xl pt-14 font-extrabold tracking-tight">Welcome back</h1>
              <p className="text-sm text-muted-foreground">
                Signin with Google or enter your credentials.
              </p>
            </div>

            <div className="py-3">
              <Button variant="outline" className="w-full">
                <svg className="mr-2 h-4 w-4" viewBox="0 0 24 24">
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
                </svg>
                Signin with Google
              </Button>

              <div className="space-y-4 mt-5">
                <div className="space-y-2">
                  <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70" htmlFor="email">
                    Email
                  </label>
                  <Input id="email" type="email" placeholder="your-email@provider.com" required/>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70" htmlFor="password">
                    Password
                  </label>
                  <Input id="password" type="password" placeholder="***********" required/>
                </div>
              </div>

              <div className="flex items-center justify-end py-3 underline ">
                <Link
                  href="/v1/auth/reset-password"
                  className="text-sm font-medium text-neutral-500 hover:underline"
                >
                  Forgot password
                </Link>
              </div>


              <Button className="w-full mt-4 bg-indigo-500 hover:bg-gray-800">
                Signin
              </Button>

              <div className="text-center text-sm p-3">
                {"Don't have an account? "}
                <Link href="/v1/auth/sign-up" className="font-medium text-primary hover:underline">
                  Signup
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="hidden lg:flex relative items-center justify-center">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="flex items-center space-x-2">
              <span className="text-3xl font-extrabold text-white">aidefunding.</span>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

export default Signin