"use client";

import { frontApi } from "@/firebase/frontApi";
import React, { useState } from "react";

const Form = ({ endpoint, children }) => {
  const childrenArr = React.Children.toArray(children);
  const [form, setForm] = useState({});

  const handleSubmit = async (e) => {
    e.preventDefault();
    await frontApi({ endpoint, data: form });
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
