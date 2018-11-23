export interface MenuModel {
    Data: MenuItem;
    Children: MenuModel[];
    children?: MenuModel[];
}

export interface MenuItem {
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