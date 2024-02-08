"use client";

import React, { useState } from "react";
import { signIn } from "next-auth/react";
import { ROUTES } from "@/app/constants";

const Form = ({ submitAction, children }) => {
  const childrenArr = React.Children.toArray(children);
  const [form, setForm] = useState({});
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const user = await submitAction(form);

    if (user.error) {
      setError(user);
      return;
    }

    signIn("credentials", { ...user, callbackUrl: ROUTES.HOME_PAGE });
  };

  return (
    <FormComponent
      childrenArr={childrenArr}
      form={form}
      setForm={setForm}
      handleSubmit={handleSubmit}
      error={error}
    />
  );
};

const FormComponent = ({ handleSubmit, childrenArr, form, setForm, error }) => {
  return (
    <form onSubmit={handleSubmit}>
      {childrenArr.map((child) => React.cloneElement(child, { form, setForm }))}
      {error && (
        <p className="text-red-600 dark:text-red-400 mt-4 text-center">
          {error.text}
        </p>
      )}
    </form>
  );
};

export default Form;
