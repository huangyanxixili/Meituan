export type FooterStoreItem = {
    title: string,
    icon: string,
    name: string,
}

export type BigSortStoreItem = {
    title: string,
    icon: string,
}

export type SmallSortStoreItem = {
    title: string,
    icon: string,
}

export type ContentNavListStoreItem = {
    tab: string;
    data: {
        pic: string;
        title: string;
        sales: string;
        price: string;
        label: string[];
    }[];
};