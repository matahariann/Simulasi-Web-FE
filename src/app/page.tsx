"use client";
import Image from "next/image";
import React, { useState } from "react";
import { login } from "../services/auth";
import { useRouter } from "next/navigation";
import { Icon } from "@iconify/react";

export default function Home() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const router = useRouter();

  const handleLoginClick = async (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    try {
      const res = await login(username, password);
      if (res) {
        console.log("ini berhasil login");
        localStorage.setItem("token", res.token);
        router.push("/dashboard-prodi");
        console.log(res);
      }
    } catch (error: any) {
      console.error(error);
      setError(error.message); // Set the error message to the error state
    }
  };

  return (
    <main
      className="min-h-screen flex items-center justify-center w-full"
      style={{
        backgroundImage: "url('/bgif.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="min-h-screen flex items-center justify-center w-full">
        <div className="bg-white dark:bg-gray-900 shadow-md rounded-lg px-8 py-6 max-w-md">
          <h1 className="text-2xl font-bold text-center mb-4 dark:text-gray-200">
            Welcome Back!
          </h1>
          <form action="#">
            <div className="mb-4">
              <label
                htmlFor="username"
                className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 flex items-center"
              >
                <Icon
                  icon="lucide:circle-user-round"
                  width="24px"
                  height="24px"
                  className="mr-2"
                />
                Username
              </label>
              <input
                type="text"
                className="shadow-sm rounded-md w-full px-3 py-2 border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                style={{ color: "black" }}
                placeholder="Username"
                required
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="password"
                className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 flex items-center"
              >
                <Icon
                  icon="lucide:lock"
                  width="24px"
                  height="24px"
                  className="mr-2"
                />
                Password
              </label>
              <input
                type="password"
                id="password"
                className="shadow-sm rounded-md w-full px-3 py-2 border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                style={{ color: "black" }}
                placeholder="Enter your password"
                required
                onChange={(e) => setPassword(e.target.value)}
              />
              <a
                href="#"
                className="text-xs text-gray-600 hover:text-indigo-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Forgot Password?
              </a>
            </div>
            <button
              onClick={handleLoginClick}
              className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Login
            </button>
          </form>
        </div>
      </div>
    </main>
  );
}
