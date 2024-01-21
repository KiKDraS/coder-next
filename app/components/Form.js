"use client";

import { api } from "@/firebase/api";
import { signOut } from "next-auth/react";
import React, { useState } from "react";

const Form = ({ endpoint, children }) => {
  const childrenArr = React.Children.toArray(children);
  const [form, setForm] = useState({});

  const handleSubmit = async (e) => {
    e.preventDefault();
    await api({ endpoint, data: form });
    setForm(() => ({}));
  };

  return (
    <FormComponent
      childrenArr={childrenArr}
      form={form}
      setForm={setForm}
      handleSubmit={handleSubmit}
    />
  );
};

const FormComponent = ({ handleSubmit, childrenArr, form, setForm }) => {
  return (
    <form onSubmit={handleSubmit}>
      {childrenArr.map((child) => React.cloneElement(child, { form, setForm }))}
    </form>
  );
};

export default Form;
