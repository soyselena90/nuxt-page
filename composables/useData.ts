import { useItemDatas } from './useFakeDatas';
import type {Items} from "~/types/items";

// interface ItemReturn {
//     item: Maybe<Items>;
//     preItem: Maybe<Items>;
//     nextItem: Maybe<Items>;
// }

export const useData = (itemSlug:any) => {
    const { itemDatas } = useItemDatas();
    // const data = itemDatas.find((item:any) => item.itemSlug === itemSlug);
    const index = itemDatas.findIndex((item:any) => item.itemSlug === itemSlug);
    const item = itemDatas[index];
    const preItem = index <= 0 ? null : itemDatas[index - 1];
    const nextItem = index >= itemDatas.length - 1 ? null : itemDatas[index + 1];

    return {
        item,
        preItem,
        nextItem
    }
}