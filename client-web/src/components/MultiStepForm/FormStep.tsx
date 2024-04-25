import { useFormState } from "./FormContext";
import PlanChoiceForm from "./PlanChoiceForm";
import UserForm from "./UserForm";

export function FormStep() {
  const { step } = useFormState();

  switch (step) {
    case 1:
      return <UserForm />;
    case 2:
      return <PlanChoiceForm />;
    default:
      return null;
  }
}
