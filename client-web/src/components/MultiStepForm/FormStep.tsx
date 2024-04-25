import { useFormState } from "./FormContext";
import PaymentInfoForm from "./PaymentInfoForm";
import PlanChoiceForm from "./PlanChoiceForm";
import PlanChoiceScreen from "./PlanChoiceScreen";
import UserForm from "./UserForm";

export function FormStep() {
  const { step } = useFormState();

  switch (step) {
    case 1:
      return <UserForm />;
    case 2:
      return <PlanChoiceScreen />;
    case 3:
      return <PlanChoiceForm />;
    case 4:
      return <PaymentInfoForm />;
    default:
      return null;
  }
}
