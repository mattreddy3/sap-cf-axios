import { InternalAxiosRequestConfig } from "axios";
import { IDestinationData, IHTTPDestinationConfiguration } from "sap-cf-destconn";
export default function enhanceConfig(config: InternalAxiosRequestConfig, destination: IDestinationData<IHTTPDestinationConfiguration>, subdomain: string): Promise<InternalAxiosRequestConfig<any>>;
