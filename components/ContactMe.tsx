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
    <div className="h-screen flex relative flex-col text-center md:text-left md:flex-row w-screen max-w-7xl px-10 justify-evenly mx-auto items-center">
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        Contact
      </h3>

      <div className="flex flex-col space-y-10">
        <h4 className="text-4xl font-semibold text-center">
          Lets chat.{" "}
          <span className="decoration-primary-color/50 underline">
            Email me below.
          </span>
        </h4>

        <div>
          <div className="flex items-center space-x-5 justify-center text-2xl">
            <HiEnvelope className="text-primary-color animate-pulse" />
            <p>mousaljasem121@gmail.com</p>
          </div>
        </div>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col space-y-2 w-fit mx-auto"
        >
          <div className="flex space-x-2">
            <input
              {...register("name")}
              placeholder="Name"
              className="contactInput"
              type="text"
            />
            <input
              {...register("email")}
              placeholder="Email"
              className="contactInput"
              type="email"
            />
          </div>

          <input
            {...register("subject")}
            placeholder="Subject"
            className="contactInput"
            type="text"
          />

          <textarea
            {...register("message")}
            placeholder="Message"
            className="contactInput transition-none"
          />
          <button
            type="submit"
            className="bg-primary-color py-5 px-10 rounded-md text-black font-bold text-lg "
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
