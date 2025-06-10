export type tabStoreItem = {
    name: string,
    data: {
        content: string,
        items: {
            text: string,
            children: {
                pic: string,
                title: string,
                num: number,
                price: number,
                id: number,
                add: boolean,
            }[]
        }[]
    }
}