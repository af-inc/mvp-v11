import Link from "next/link";

export default function Home() {
  const existingRoutes = [
    { label: "Signup", route:"/v1/auth/sign-up"},
    { label: "Signin", route:"/v1/auth/sign-in"},
    { label: "Reset password", route:"/v1/auth/reset-password"},
    { label: "Verify email", route:"/v1/auth/verify-email"},
    { label: "New password", route:"/v1/auth/new-password"},
    { label: "Create campaign", route:"/v1/create-campaign"},
    { label: "Donate overview", route:"/v1/donate"},
    { label: "New Donation", route:"/v1/donate/new"},
    { label: "Create campaign", route:"/v1/create-campaign"},
    { label: "My campaigns", route:"/v1/my-campaigns"},
    { label: "", route:""},
    ]
  return (
    <div className="w-full h-screen flex items-center justify-center bg-gray-900 text-indigo-400">
      <div className="flex flex-col gap-6 w-full h-full text-white">
        {existingRoutes.map((i, key) => {
          return <Link key={key} href={i.route}>{i.label}</Link>
        })}
      </div>
    </div>
  );
}
