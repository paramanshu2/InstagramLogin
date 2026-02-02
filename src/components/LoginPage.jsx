import { useState } from 'react';
import { Facebook } from 'lucide-react';
import { Link } from 'react-router-dom';

function LoginPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Login attempt', { username, password });
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center py-12 px-4">
      <div className="flex flex-col md:flex-row gap-10">
        <div className="hidden md:block">
          <img
            src="/mockup3.png"
            alt="Instagram Preview"
            className="w-80 md:w-96"
          />
        </div>

        <div className="w-full max-w-sm md:w-88 space-y-4">
        <div className="bg-white/80 backdrop-blur-xl border border-gray-300  p-10 shadow-2xl shadow-purple-200/50  h-105 ">
            
          <div className="flex justify-center mb-5">
         
            <img
              src="/insta4.png"
              alt="Instagram"
              className="w-48 h-auto object-contain mx-auto"
            />
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              placeholder="Phone number, username or email address"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full px-1 py-2 text-sm border border-gray-300 rounded-sm bg-gray-50 focus:outline-none focus:border-gray-400 focus:bg-white"
            />

            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-1 py-2 text-sm border border-gray-300 rounded-sm bg-gray-50 focus:outline-none focus:border-gray-400 focus:bg-white"
            />

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-blue-500 to-blue-600 text-white font-semibold py-2.5 rounded-lg text-sm hover:from-blue-600 hover:to-blue-700 transition-colors"
            >
              Log in
            </button>
          </form>

          <div className="flex items-center my-4">
            <div className="flex-1 border-t border-gray-300"></div>
            <div className="px-4 text-sm font-semibold text-gray-500">OR</div>
            <div className="flex-1 border-t border-gray-300"></div>
          </div>

          <button className="w-full flex items-center justify-center gap-2 text-[#385185] font-semibold text-sm py-2 hover:opacity-80 transition-opacity">
            <Facebook size={20} fill="#385185" />
            Log in with Facebook
          </button>

          <div className="text-center ">
            <a href="#" className="text-xs text-[#00376b] hover:opacity-80">
              Forgotten your password?
            </a>
          </div>
        </div>

        <div className="bg-white/80 backdrop-blur-xl border border-gray-300 p-5 shadow-2xl shadow-purple-200/50 text-center">
          <p className="text-sm">
            Don't have an account?{' '}
            <a href="#" className="text-[#0095f6] font-semibold hover:opacity-80">
              <Link to="/signup"> Sign up</Link>
            </a>
          </p>
        </div>

        <div className="text-center mb-10">
          <p className="text-sm mb-4 font-semibold">Get the app.</p>
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
        </div>

        <footer className="text-center mt-10">
          <div className="flex flex-wrap  gap-x-4 gap-y-1 text-xs text-gray-500 mb-4">
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
        </footer>
        </div>
      </div>




      
    </div>
    // </div>
  );
}

export default LoginPage;