export interface IMenuModel {
    Data: IMenuItem;
    Children: IMenuModel[];
    children?: IMenuModel[];
}

export interface IMenuItem {
    CreatedAt: string;
    DeletedAt: string;
    ID: number;
    Icon: string;
    IsMenu: number;
    Name: string;
    ParentID: number;
    Remarks: string;
    Status: number;
    URL: string;
    UpdatedAt: string;
}
