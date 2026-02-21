"use client"
import { useForm } from '@/hooks/useForm';
import useValidations from '@/hooks/useValidations';
import { namesFormularie } from '@/mock/mock';
import Image from 'next/image';
import React from 'react';
import { Toaster } from 'react-hot-toast';

interface FormsProps {
  children?: React.ReactNode;
}

export default function LoginForm({ children }: FormsProps) {
  const {
    errors,
    form,
    handleBlur,
    handleChange,
    handleSubmit,
    loading,
    response
   } = useForm(namesFormularie, useValidations)

  return (
    <div className='div_bg-colorheader'>
      <Toaster position="top-right" />
      <Image src={"/Logo.png"} width={200} height={200} alt="logo" />
      <div className="header_register">
        <article className="article_div_form">
          <div className="div_formulario">
            <div className="sm:mx-auto sm:w-full sm:max-w-sm">
              <img src={"/image.png"} alt="Your Company" className="mx-auto h-10 w-auto" />
              <h2 className="mt-10 text-center text-2xl/9 font-bold tracking-tight text-black">
                Iniciar Sesión
              </h2>
            </div>

            <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
              <form onSubmit={handleSubmit}>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm/6 font-medium text-gray-100"
                    style={{ color: "black" }}
                  >
                    Email
                  </label>
                  <div className="mt-2">
                    <input
                      id="email"
                      type="email"
                      value={form.email}
                      onBlur={handleBlur}
                      onChange={handleChange}
                      name="email"
                      required
                      autoComplete="email"
                      className="block w-full rounded-md bg-black/5 px-3 py-1.5 text-base text-black outline-1 -outline-offset-1 outline-black/10 placeholder:text-black-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6"
                    />
                    {errors.email && (
                      <p className="text-red-400 my-0">{errors.email}</p>
                    )}
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="password"
                    className="block text-sm/6 font-medium text-gray-100"
                    style={{ color: "black" }}
                  >
                    Password
                  </label>
                  <div className="mt-2">
                    <input
                      id="password"
                      type="password"
                      value={form.password}
                      onBlur={handleBlur}
                      onChange={handleChange}
                      name="password"
                      required
                      autoComplete="current-password"
                      className="block w-full rounded-md bg-black/5 px-3 py-1.5 text-base text-black outline-1 -outline-offset-1 outline-black/10 placeholder:text-black-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6"
                    />
                    {errors.password && (
                      <p className="text-red-400 my-0">{errors.password}</p>
                    )}
                  </div>
                </div>

                <div>
                  <button
                    type="submit"
                    className="g-button w-full mt-6"
                  >
                    Sign in
                  </button>
                </div>
              </form>
            </div>
          </div>
        </article>
        <article className="h-[120vh] article_img_login">
        <img
            src={"/caballos.jpg"}
            className="imagenDeCaballos"
            alt="login"
          />
        </article>
      </div>
    </div>
  )
}