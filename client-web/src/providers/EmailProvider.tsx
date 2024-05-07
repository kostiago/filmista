import React, {
  createContext,
  useContext,
  useState,
  ReactNode,
  Dispatch,
  SetStateAction,
} from "react";

interface EmailProviderProps {
  children: ReactNode;
}

const EmailContext = createContext<
  | {
      email: string;
      setEmail: Dispatch<SetStateAction<string>>;
    }
  | undefined
>(undefined);

export const EmailProvider = ({ children }: EmailProviderProps) => {
  const [email, setEmail] = useState<string>("");

  return (
    <EmailContext.Provider value={{ email, setEmail }}>
      {children}
    </EmailContext.Provider>
  );
};

export const useEmail = () => {
  const context = useContext(EmailContext);
  if (!context) {
    throw new Error("useEmail must be used within an EmailProvider");
  }
  return context;
};
