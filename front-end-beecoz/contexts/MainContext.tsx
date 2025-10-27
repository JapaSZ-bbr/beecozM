import { AuthProvider } from "./Auth/AuthContext";
import { AutonomousPublicationProvider } from "./Autonomous/Publication/AutonomousPublicationContext";
import { ChatProvider } from "./Chat/ChatContext";
import { ClientPublicationProvider } from "./Client/Publication/ClientPublicationContext";
import { ServiceProvider } from "./Service/ServiceContext";
import { WorkProvider } from "./Work/WorkContext";

export const MainContextProvider = ({ children }: any) => {
  return (
    <AuthProvider>
      <ClientPublicationProvider>
        <AutonomousPublicationProvider>
          <WorkProvider>
            <ChatProvider>
              <ServiceProvider>{children}</ServiceProvider>
            </ChatProvider>
          </WorkProvider>
        </AutonomousPublicationProvider>
      </ClientPublicationProvider>
    </AuthProvider>
  );
};
