import { INewsItem } from "../interfaces"

export interface INewListProps {
  news: Array<INewsItem>
  remove: (id: string) => any
  edit: (item: INewsItem) => any
}

export interface INewsListItemProps {
  item: INewsItem
  remove: (id: string) => any
  edit: (item: INewsItem) => any
}