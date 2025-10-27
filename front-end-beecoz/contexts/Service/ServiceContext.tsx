import { Children, createContext, ReactNode, useEffect, useState } from "react";
import { IServiceType } from "../../interfaces/Service/IServiceType";
import { api } from "../../services/api";

export interface IServiceContext {
    serviceTypes: IServiceType[]
}
interface ServiceProviderProps {
    children: ReactNode
}

export const ServiceContext = createContext<IServiceContext | null>(null)

export const ServiceProvider = ({children}: ServiceProviderProps) => {
    const [serviceTypes, setServiceTypes] = useState<Array<IServiceType>>([]);

    useEffect(() => {
        const fetch = async () => {
            const {data: {serviceType}} = await api.get<{serviceType: Array<IServiceType>}>('/service_type/read')

            setServiceTypes(serviceType)
        }

        fetch()
    }, []);

    return (
        <ServiceContext.Provider value={{serviceTypes}}>
            {children}
        </ServiceContext.Provider>
    )
}