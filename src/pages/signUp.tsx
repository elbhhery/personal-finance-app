import { Link } from "react-router";
import Finance from "../../assets/images/avatars/main.png";
import hidePasswordImg from "../../assets/images/icon-hide-password.svg";
import showPasswordImg from "../../assets/images/icon-show-password.svg";
import { useState } from "react";
export default function SignUp() {
  const [form, setForm] = useState({ name: "", email: "", password: "" });
  const [showPassword, setShowPasssword] = useState(false);
  const [passwordTouched, setPasswordTouched] = useState(false);
  return (
    <div className="bg-[#F8F4F0] h-screen w-full flex items-center p-4 lg:gap-8">
      <div>
        <img src={Finance} alt="" className="hidden lg:block h-[730px]" />
      </div>
      <form
        action=""
        className="p-6 bg-[#FFFFFF] flex flex-col mx-auto w-full lg:w-[50%]"
      >
        <h2 className="text-3xl font-bold mb-4">Sign Up</h2>
        <label htmlFor="name" className="text-black/50 mb-2">
          Name
        </label>
        <input
          required
          type="text"
          name="name"
          className="border-2 border-black/50 rounded-lg mb-4 p-2"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
        />
        <label htmlFor="email" className="text-black/50 mb-2">
          Email
        </label>
        <input
          required
          type="email"
          name="email"
          className="border-2 border-black/50 rounded-lg mb-4 p-2"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
        />
        <label htmlFor="password" className="text-black/50 mb-2">
          password
        </label>
        <div className="relative">
          <span className="absolute inset-y-0 right-4 flex items-center text-gray-400">
            <img
              src={showPasswordImg}
              alt=""
              onClick={() => setShowPasssword(!showPassword)}
              className={`${showPassword ? "hidden" : "block"} cursor-pointer`}
            />
            <img
              src={hidePasswordImg}
              alt=""
              onClick={() => setShowPasssword(!showPassword)}
              className={`${showPassword ? "block" : "hidden"} cursor-pointer`}
            />
          </span>
          <input
            required
            type={showPassword ? "text" : "password"}
            name="password"
            className={`border-2 rounded-lg mb-1 p-2 w-full transition-all duration-200 outline-none
  ${
    passwordTouched
      ? form.password.length >= 8
        ? "border-black/50 focus:border-black/50"
        : "border-red-600 focus:border-red-600"
      : "border-black/50 focus:border-black/50"
  }
`}
            onFocus={() => setPasswordTouched(true)}
            value={form.password}
            onChange={(e) => setForm({ ...form, password: e.target.value })}
          />
        </div>
        <label
          htmlFor="password"
          className="text-black/50 mb-2 text-right text-[13px]"
        >
          password must be at least 8 characters
        </label>
        <button className="w-full bg-black py-3 text-white rounded-lg mt-6">
          Creat Account
        </button>
        <p className="text-center text-[#7C7B7B] mt-8">
          Aleardy have an account?{" "}
          <Link to="/logIn" className="text-[17px] text-black underline">
            login
          </Link>
        </p>
      </form>
    </div>
  );
}
