"use client";
import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { HiPhone, HiMapPin, HiEnvelope } from "react-icons/hi2";

type Props = {};

type Inputs = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

export default function ContactMe({}: Props) {
  const { register, handleSubmit } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (formData) => {
    window.location.href = `mailto:mousaaljasem121@gmail.com?subject=${formData.subject}&body=Hi, my name is ${formData.name}, My email is: "${formData.email}".\n${formData.message}`;
  };

  return (
    <div className="min-h-screen flex flex-col relative text-center md:text-left md:flex-row max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 justify-evenly items-center">
    {/* Header */}
    <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
      Contact
    </h3>

    {/* Content */}
    <div className="flex flex-col space-y-10 w-full">
      <h4 className="text-4xl mt-10 font-semibold text-center">
        Let’s chat.{" "}
        <span className="decoration-primary-color/50 underline">
          Email me below.
        </span>
      </h4>

      {/* Email Section */}
      <div className="flex items-center space-x-5 justify-center text-xl">
        <HiEnvelope className="text-primary-color animate-pulse" />
        <p>mousaaljasem121@gmail.com</p>
      </div>

      {/* Form */}
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col space-y-2 w-full sm:w-fit mx-auto"
      >
        {/* Name and Email */}
        <div className="flex flex-col sm:flex-row sm:space-x-2 space-y-2 sm:space-y-0">
          <input
            {...register("name")}
            placeholder="Name"
            className="contactInput w-full sm:w-auto"
            type="text"
          />
          <input
            {...register("email")}
            placeholder="Email"
            className="contactInput w-full sm:w-auto"
            type="email"
          />
        </div>

        {/* Subject */}
        <input
          {...register("subject")}
          placeholder="Subject"
          className="contactInput w-full"
          type="text"
        />

        {/* Message */}
        <textarea
          {...register("message")}
          placeholder="Message"
          className="contactInput w-full transition-none"
        />

        {/* Submit Button */}
        <button
          type="submit"
          className="bg-primary-color py-5 px-10 rounded-md text-black font-bold text-lg w-full sm:w-auto"
        >
          Submit
        </button>
      </form>
    </div>
  </div>
  );
}
