import { createContext, ReactNode, SetStateAction, useState } from "react";

export interface IChatContext {
    chatId: string | null,
    setChatId: React.Dispatch<SetStateAction<string | null>>
}
interface ChatProviderProps {
    children: ReactNode
}

export const ChatContext = createContext<IChatContext | null>(null)

export const ChatProvider = ({children}: ChatProviderProps) => {
    const [chatId, setChatId] = useState<string | null>(null);

    return (
        <ChatContext.Provider value={{chatId, setChatId}}>
            {children}
        </ChatContext.Provider>
    )
}
