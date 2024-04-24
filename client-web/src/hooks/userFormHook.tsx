"use client";
import { useState } from "react";

export function userFormHook(steps: any[]) {
  const [currentStep, setCurrentSteps] = useState(0);

  function changedStep(i: number, e: any[]) {
    if (i < 0 || i >= steps.length) return;
  }

  return {
    currentStep,
    currentComponent: steps[currentStep],
    changedStep,
  };
}
