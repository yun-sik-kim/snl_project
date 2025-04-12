"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation"; // Import useRouter

import { useAuthStore } from "@stores/authStore"; // Import the store
import Modal from "@components/ui/Modal";
import LoginForm from "@components/features/LoginForm";

export default function TopNav() {
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const { isLoggedIn, logout } = useAuthStore(); // Access the login state
  const router = useRouter(); // Initialize router

  // Close the modal when isLoggedIn becomes true
  useEffect(() => {
    if (isLoggedIn) {
      setIsLoginModalOpen(false);
    }
  }, [isLoggedIn]);

  // Define logout handler
  const handleLogout = () => {
    logout(); // Set isLoggedIn to false in authStore
    setIsLoginModalOpen(false); // Close the modal
    router.push("/"); // Redirect to main page
  };

  return (
    <nav className="fixed w-full h-16 flex justify-between items-center bg-transparent text-black px-6 py-2 z-50">
      {/* Logo on the left */}
      <Link href="/" className="flex items-center ml-2">
        <Image
          src="/logo.svg"
          alt="Logo"
          width={64}
          height={64}
          className="p-1"
        />
      </Link>

      {/* Login Modal */}
      <Modal
        isOpen={isLoginModalOpen}
        onClose={() => setIsLoginModalOpen(false)}
      >
        <h2 className="text-2xl font-bold mb-4 text-center">Login</h2>
        <LoginForm />
      </Modal>

      {/* Log In/Logout Button */}
      <button
        onClick={isLoggedIn ? handleLogout : () => setIsLoginModalOpen(true)}
        className="px-4 py-2 bg-black text-white rounded-lg font-semibold hover:opacity-80 transition-opacity"
      >
        {isLoggedIn ? "Logout" : "Log In"}
      </button>
    </nav>
  );
}
