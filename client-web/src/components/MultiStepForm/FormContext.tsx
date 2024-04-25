"use client";
import { number } from "prop-types";
import { ReactNode, createContext, useContext, useState } from "react";

interface IFormContext {
  onHandleNext: () => void;
  onHandleBack: () => void;
  step: number;
}
const FormContext = createContext<IFormContext>({
  onHandleBack: () => {},
  onHandleNext: () => {},
  step: 1,
});

interface Iprops {
  children: ReactNode;
}
export function FormProvider({ children }: Iprops) {
  const [step, setStep] = useState(1);

  function onHandleNext() {
    console.log({ step });

    setStep((prevValue) => prevValue + 1);
  }

  function onHandleBack() {
    setStep((prevValue) => prevValue - 1);
  }

  return (
    <FormContext.Provider value={{ onHandleBack, onHandleNext, step }}>
      {children}
    </FormContext.Provider>
  );
}

export function useFormState() {
  return useContext(FormContext);
}
