"use client";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import {
  FaFacebook,
  FaYoutube,
  FaLinkedin,
  FaInstagram,
  FaEnvelope,
} from "react-icons/fa";
import { useState } from "react";
import "animate.css";
import { SpinningTextBasic } from "./contact-button";
import SocialMediaIcons from "./social-icons";

export function AlertDialogDemo() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Add server-side submission logic here if needed
  };

  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <div className="relative z-50 ">
          <SpinningTextBasic />
          <button
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 ..."
            aria-label="Open contact form"
          >
            <FaEnvelope size={24} className="text-white " />
          </button>
        </div>
      </AlertDialogTrigger>
      <AlertDialogContent className="bg-gray-900 text-white max-w-lg w-full p-6 rounded-lg animate__animated animate__fadeInUp">
        <AlertDialogHeader>
          <AlertDialogTitle className="text-2xl font-bold text-center">
            Get in Touch
          </AlertDialogTitle>
          <AlertDialogDescription className="text-center text-gray-300">
            We&apos;d love to hear from you! Fill out the form below or connect
            with us on social media.
          </AlertDialogDescription>
        </AlertDialogHeader>

        {/* Social Media Links */}
        <SocialMediaIcons />

        {/* Contact Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-300"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full mt-1 p-2 bg-gray-800 border border-gray-700 rounded focus:outline-none focus:ring-2 focus:ring-indigo-500 text-white"
              placeholder="Your name"
            />
          </div>
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-300"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full mt-1 p-2 bg-gray-800 border border-gray-700 rounded focus:outline-none focus:ring-2 focus:ring-indigo-500 text-white"
              placeholder="Your email"
            />
          </div>
          <div>
            <label
              htmlFor="message"
              className="block text-sm font-medium text-gray-300"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={4}
              className="w-full mt-1 p-2 bg-gray-800 border border-gray-700 rounded focus:outline-none focus:ring-2 focus:ring-indigo-500 text-white"
              placeholder="Your message"
            />
          </div>
          <AlertDialogFooter className="flex justify-end gap-2">
            <AlertDialogCancel asChild>
              <Button
                type="button"
                variant="outline"
                className="bg-gray-700 text-white hover:bg-gray-600 border-none"
              >
                Cancel
              </Button>
            </AlertDialogCancel>
            <AlertDialogAction asChild>
              <Button
                type="submit"
                className="bg-indigo-500 text-white hover:bg-indigo-600"
              >
                Send Message
              </Button>
            </AlertDialogAction>
          </AlertDialogFooter>
        </form>
      </AlertDialogContent>
    </AlertDialog>
  );
}
