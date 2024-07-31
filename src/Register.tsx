import { Input } from "./components/ui/input"
import { Button } from "./components/ui/button"
import {Link} from 'react-router-dom'

export default function Component() {
  return (
    <div className="min-h-screen flex">
      <div className="w-1/2 bg-black text-white p-12 flex flex-col justify-between">
        <div>
          <FlagIcon className="text-white h-6 w-6" />
          <h1 className="text-4xl font-bold mt-2">Acme Inc</h1>
        </div>
        <div>
          <p className="text-lg italic">
            "This library has saved me countless hours of work and helped me deliver stunning designs to my clients
            faster than ever before."
          </p>
          <p className="text-lg font-semibold mt-4">Sofia Davis</p>
        </div>
      </div>
      <div className="w-1/2 bg-white p-12 flex flex-col justify-center">
        <div className="text-right">
          <Link to="#" className="text-sm font-medium text-gray-600">
            Login
          </Link>
        </div>
        <div className="mt-12">
          <h2 className="text-3xl font-bold mb-4">Create an account</h2>
          <p className="text-gray-600 mb-8">Enter your email below to create your account</p>
          <Input placeholder="name@example.com" className="mb-4" />
          <Button className="bg-[#bd1e59] text-white w-full mb-4">Sign In with Email</Button>
         
          
          <p className="text-xs text-gray-500 mt-4">
            By clicking continue, you agree to our Terms of Service and Privacy Policy.
          </p>
        </div>
      </div>
    </div>
  )
}

function ChromeIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <circle cx="12" cy="12" r="4" />
      <line x1="21.17" x2="12" y1="8" y2="8" />
      <line x1="3.95" x2="8.54" y1="6.06" y2="14" />
      <line x1="10.88" x2="15.46" y1="21.94" y2="14" />
    </svg>
  )
}


function FlagIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z" />
      <line x1="4" x2="4" y1="22" y2="15" />
    </svg>
  )
}


function XIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </svg>
  )
}