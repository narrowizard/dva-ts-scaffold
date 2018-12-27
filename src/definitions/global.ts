import { NS as Home } from "@models/home";
import { IHome } from "./state";

export interface IEmpty {

}

export interface IModel {
    namespace: string;
    effects?: any;
    reducers?: any;
    subscriptions?: any;
}

export interface IState {
    [Home]: IHome;
}
