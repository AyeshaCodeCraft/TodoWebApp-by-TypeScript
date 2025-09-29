
const Footer = () => {
  return (
    <footer className="bg-black text-gray-100 font-poppins">
      {/* Main grid */}
      <div className="max-w-[1170px] mx-auto px-5 py-20 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-10">
        {/* Column 1 */}
        <div className="flex flex-col gap-4">
          <h2 className="text-2xl font-bold font-inter mb-4">Exclusive</h2>
          <h3 className="text-lg font-medium">Subscribe</h3>
          <p className="text-base">Get 10% off your first order</p>
          <div className="flex items-center border border-white rounded px-3 py-2">
            <input
              type="email"
              placeholder="Enter your email"
              className="bg-transparent outline-none flex-1 text-white text-sm placeholder-gray-400"
            />
            <img src="/assets/icon-send.svg" alt="Send" className="w-6 cursor-pointer" />
          </div>
        </div>

        {/* Column 2 */}
        <div className="flex flex-col gap-3">
          <h3 className="text-lg font-medium mb-4">Support</h3>
          <p className="text-base">111 Bijoy sarani, Dhaka, DH 1515, Bangladesh.</p>
          <p className="text-base">exclusive@gmail.com</p>
          <p className="text-base">+88015-88888-9999</p>
        </div>

        {/* Column 3 */}
        <div className="flex flex-col gap-3">
          <h3 className="text-lg font-medium mb-4">Account</h3>
          <a href="#" className="hover:underline">My Account</a>
          <a href="#" className="hover:underline">Login / Register</a>
          <a href="#" className="hover:underline">Cart</a>
          <a href="#" className="hover:underline">Wishlist</a>
          <a href="#" className="hover:underline">Shop</a>
        </div>

        {/* Column 4 */}
        <div className="flex flex-col gap-3">
          <h3 className="text-lg font-medium mb-4">Quick Link</h3>
          <a href="#" className="hover:underline">Privacy Policy</a>
          <a href="#" className="hover:underline">Terms Of Use</a>
          <a href="#" className="hover:underline">FAQ</a>
          <a href="#" className="hover:underline">Contact</a>
        </div>

        {/* Column 5 */}
        <div className="flex flex-col gap-4">
          <h3 className="text-lg font-medium">Download App</h3>
          <p className="text-sm text-gray-400">Save $3 with App New User Only</p>
          <img src="/assets/Footer-img.svg" alt="App" className="max-w-[150px]" />
          <div className="flex gap-3">
            <img src="/assets/Icon-Facebook.svg" alt="Facebook" className="w-7 h-7 cursor-pointer" />
            <img src="/assets/Icon-Twitter.svg" alt="Twitter" className="w-7 h-7 cursor-pointer" />
            <img src="/assets/icon-instagram.svg" alt="Instagram" className="w-7 h-7 cursor-pointer" />
            <img src="/assets/Icon-Linkedin.svg" alt="LinkedIn" className="w-7 h-7 cursor-pointer" />
          </div>
        </div>
      </div>

      {/* Divider */}
      <hr className="border-t border-white/40" />

      {/* Bottom */}
      <div className="text-center text-sm py-4">
        © Copyright Rimel 2022. All rights reserved
      </div>
    </footer>
  )
}

export default Footer
