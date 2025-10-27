import React, { ReactNode } from "react";
import { AutonomousAuthRegisterProvider } from "./Autonomous/AutonomousRegisterAuthContext";
import { ClientAuthRegisterProvider } from "./Client/ClientRegisterAuthContext";

interface RegisterAuthProviderProps {
  children: ReactNode;
}

export const RegisterAuthProvider = ({
  children,
}: RegisterAuthProviderProps) => {
  return (
    <ClientAuthRegisterProvider>
      <AutonomousAuthRegisterProvider>
        {children}
      </AutonomousAuthRegisterProvider>
    </ClientAuthRegisterProvider>
  );
};
