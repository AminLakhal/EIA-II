namespace L04 {

export interface Product {
    
    quantity: number;
    name: string;
    comment: string;
    date:string;
}

export interface Data {
    [category: string]: Product[];
}

export let data: Data = {

    initialProduct: [
        {  quantity:1,name: "Brot", comment:"das billige",date: "11.11.2022"},
        {  quantity:2,name: "Wein", comment: "einen trockenen",date: "10.1.2022"},
        {  quantity:1, name: "Eier", comment: "",date: "23.03.2022"}
    ]
}

}