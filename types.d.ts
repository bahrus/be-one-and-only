import {BeDecoratedProps, MinimalProxy} from 'be-decorated/types';


export interface EndUserProps{
    id: string,
}

export interface VirtualProps extends EndUserProps, MinimalProxy<HTMLTemplateElement>{

}

export type Proxy = HTMLTemplateElement & VirtualProps;

export interface ProxyProps extends VirtualProps{
    proxy: Proxy;
}

export type PP = ProxyProps;

export type PA = Partial<PP>;

export interface Actions{
    beBornIfTheOne(pp: PP, mold: PA): PA;
}