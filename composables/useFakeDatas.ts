import datas from "./fakeData";
import type {Items} from "~/types/items";

interface ItemReturn {
    itemDatas: Items[];
}

export const useItemDatas = (): ItemReturn => {
    const itemDatas = datas.map((item) => ({
        ...item,
    }));
    return {
        itemDatas
    };
};