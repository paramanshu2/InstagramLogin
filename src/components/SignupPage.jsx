import { useState } from 'react';
import { Facebook } from 'lucide-react';
import { Link } from 'react-router-dom';

function SignupPage() {
  const [emailOrPhone, setEmailOrPhone] = useState('');
  const [fullName, setFullName] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Signup attempt', { emailOrPhone, fullName, username, password });
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center py-12 px-4">
      <div className="w-full max-w-sm">
        <div className="bg-white border border-gray-300 px-10 py-8 mb-2.5">
          <div className="flex justify-center mb-8">
             
            <img
              src="/insta4.png"
              alt="Instagram"
              className="w-32 h-auto object-contain"
            />
          </div>

          <div className="text-center mb-4">
            <p className="text-gray-500 text-sm">
              Sign up to see photos and videos from your friends.
            </p>
          </div>

          <button className="w-full flex items-center justify-center gap-2 text-[#385185] font-semibold text-sm py-2 mb-4 border border-gray-300 rounded bg-white hover:bg-gray-50 transition-colors">
            <Facebook size={20} fill="#385185" />
            Log in with Facebook
          </button>

          <div className="flex items-center my-5">
            <div className="flex-1 border-t border-gray-300"></div>
            <div className="px-4 text-sm font-semibold text-gray-500">OR</div>
            <div className="flex-1 border-t border-gray-300"></div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-2">
            <input
              type="text"
              placeholder="Mobile number or email"
              value={emailOrPhone}
              onChange={(e) => setEmailOrPhone(e.target.value)}
              className="w-full px-2 py-2 text-xs border border-gray-300 rounded bg-gray-50 focus:outline-none focus:border-gray-400 focus:bg-white"
            />

            <input
              type="text"
              placeholder="Full name"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              className="w-full px-2 py-2 text-xs border border-gray-300 rounded bg-gray-50 focus:outline-none focus:border-gray-400 focus:bg-white"
            />

            <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full px-2 py-2 text-xs border border-gray-300 rounded bg-gray-50 focus:outline-none focus:border-gray-400 focus:bg-white"
            />

            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-2 py-2 text-xs border border-gray-300 rounded bg-gray-50 focus:outline-none focus:border-gray-400 focus:bg-white"
            />

            <button
              type="submit"
              className="w-full bg-[#0095f6] text-white font-semibold py-1.5 rounded-lg text-sm mt-3 hover:bg-[#1877f2] transition-colors"
            >
              Sign up
            </button>
          </form>

          <div className="text-center mt-5 text-xs text-gray-500">
            <p>
              By signing up, you agree to our{' '}
              <a href="#" className="text-[#00376b] hover:opacity-80">Terms</a>,{' '}
              <a href="#" className="text-[#00376b] hover:opacity-80">Privacy Policy</a> and{' '}
              <a href="#" className="text-[#00376b] hover:opacity-80">Cookies Policy</a>.
            </p>
          </div>
        </div>

        <div className="bg-white border border-gray-300 px-10 py-5 text-center mb-2.5">
          <p className="text-sm">
            Have an account?{' '}
            <a href="#" className="text-[#0095f6] font-semibold hover:opacity-80">
              <Link to="/"> Login</Link>
            </a>
          </p>
        </div>

        {/* <div className="text-center mb-10">
          <p className="text-sm mb-5">Get the app.</p>
          <div className="flex justify-center gap-2">
            <img
              src="https://static.cdninstagram.com/rsrc.php/v3/yz/r/c5Rp7Ym-Klz.png"
              alt="Get it on Google Play"
              className="h-10"
            />
            <img
              src="https://static.cdninstagram.com/rsrc.php/v3/yu/r/EHY6QnZYdNX.png"
              alt="Get it from Microsoft"
              className="h-10"
            />
          </div>
        </div> */}

        {/* <footer className="text-center">
          <div className="flex flex-wrap justify-center gap-x-4 gap-y-1 text-xs text-gray-500 mb-4">
            <a href="#" className="hover:underline">Meta</a>
            <a href="#" className="hover:underline">About</a>
            <a href="#" className="hover:underline">Blog</a>
            <a href="#" className="hover:underline">Jobs</a>
            <a href="#" className="hover:underline">Help</a>
            <a href="#" className="hover:underline">API</a>
            <a href="#" className="hover:underline">Privacy</a>
            <a href="#" className="hover:underline">Terms</a>
            <a href="#" className="hover:underline">Locations</a>
            <a href="#" className="hover:underline">Instagram Lite</a>
            <a href="#" className="hover:underline">Threads</a>
            <a href="#" className="hover:underline">Contact uploading and non-users</a>
            <a href="#" className="hover:underline">Meta Verified</a>
          </div>
          <div className="text-xs text-gray-500">
            <span>English © 2024 Instagram from Meta</span>
          </div>
        </footer> */}
      </div>
    </div>
  );
}

export default SignupPage;