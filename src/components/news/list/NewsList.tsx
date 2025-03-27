import { FC } from "react"
import { INewListProps } from "./interfaces"
import { NewsListItem } from './'
import './style.scss'

const NewsList: FC<INewListProps> = ({ news, remove, edit }) => {

  return (
    <div className="news-list">
      {news.map((item) => (
        <NewsListItem
          key={item.id}
          item={item}
          remove={remove}
          edit={edit}
        />
      ))}
    </div>
  )
}

export default NewsList