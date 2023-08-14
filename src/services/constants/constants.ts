import axios from 'axios'

export const BASE_URL:string = 'https://shop-api.iran.liara.run/api/v1';

export const INSTANCE = axios.create({
    baseURL: BASE_URL,
    timeout: 50000
})

export const sortListSearch = {
    invoice:['جدیدترین','قدیمی ترین','صورتحساب های تایید شده','صورتحساب های ناموفق','صورتحساب های در انتظار پردازش','کل صورتحساب ها'],
    products:['جدیدترین','قدیمی ترین','معاف','مشمول'],
    customers:['حقیقی','حقوقی']
}