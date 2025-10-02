// Design-only Signup page (no logic)
import Logo from '../assets/veritas_logo_light.png';
const BACKGROUND_IMAGE = "https://images.unsplash.com/photo-1522199710521-72d69614c702?w=1600&fit=crop&crop=center";

const Signup = () => {
  return (
    <div className="min-h-screen w-full flex items-center justify-centers relative">
      <img src={BACKGROUND_IMAGE} className='w-1/2 h-screen object-cover'  alt="" />
      <div className="w-1/2">
        <div className="px-8 py-4 text-center">
          <img src={Logo} alt="Veritas Logo" className="h-28 mx-auto" />
          <h1 className="font-serif text-3xl font-bold tracking-tight text-gray-900">Create Your Account</h1>
          <p className="text-gray-600 text-sm">Join Veritas Daily for curated, trustworthy journalism.</p>
        </div>

        <form className="px-8 pb-8 space-y-5" onSubmit={(e) => e.preventDefault()}>
          {/* Example error placeholder (remove if not needed) */}
          <div className="hidden bg-red-50 border border-red-200 text-red-600 text-sm px-4 py-2 rounded">
            Error message placeholder
          </div>

          <div className="space-y-1">
            <label htmlFor="fullName" className="block text-sm font-medium text-gray-700">
              Full Name <span className="text-red-500">*</span>
            </label>
            <input
              id="fullName"
              name="fullName"
              type="text"
              className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-black focus:border-black bg-white"
              placeholder="Jane Doe"
            />
          </div>

          <div className="space-y-1">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email Address <span className="text-red-500">*</span>
            </label>
            <input
              id="email"
              name="email"
              type="email"
              className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-black focus:border-black bg-white"
              placeholder="you@example.com"
            />
          </div>

          <div className="space-y-1">
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              Password <span className="text-red-500">*</span>
            </label>
            <input
              id="password"
              name="password"
              type="password"
              className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-black focus:border-black bg-white"
              placeholder="Minimum 6 characters"
            />
          </div>

          <div className="space-y-1">
            <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700">
              Confirm Password <span className="text-red-500">*</span>
            </label>
            <input
              id="confirmPassword"
              name="confirmPassword"
              type="password"
              className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-black focus:border-black bg-white"
              placeholder="Re-enter password"
            />
          </div>

          <div className="flex items-start space-x-2">
            <input
              id="agree"
              name="agree"
              type="checkbox"
              className="mt-1 w-4 h-4 border-gray-300 text-black focus:ring-black"
            />
            <label htmlFor="agree" className="text-xs text-gray-600 leading-snug">
              I agree to the <a href="#" className="underline hover:text-black">Terms of Service</a> and <a href="#" className="underline hover:text-black">Privacy Policy</a>.
            </label>
          </div>

          <button
            type="submit"
            className="w-full bg-black text-white py-3 rounded font-medium tracking-wide text-sm hover:bg-gray-800 transition-colors"
          >
            Create Account
          </button>

          <div className="text-center pt-2 text-xs text-gray-500">
            Already have an account? <a href="/login" className="text-blue-600 underline hover:opacity-80">Sign in</a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;