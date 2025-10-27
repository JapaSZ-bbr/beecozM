import { AxiosRequestHeaders, HeadersDefaults } from "axios";

export interface CommonHeaderProperties extends HeadersDefaults {
    authorization: string;
}
export interface CommonHeaderInteceptors extends AxiosRequestHeaders {
    authorization: string;
}