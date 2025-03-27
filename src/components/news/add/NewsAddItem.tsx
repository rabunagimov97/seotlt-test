import { FC, useState } from "react"
import { INewsAddItemProps } from "./interfaces"
import './style.scss'

const NewsAddItem: FC<INewsAddItemProps> = ({ add }) => {
  const [newsText, setNewsText] = useState('')
  const onAddNewsItemButtonClicked = () => {
    add(newsText)
    setNewsText('')
  }

  return (
    <div className="news-add-item">
      <textarea value={newsText} onChange={({ currentTarget: { value } }) => setNewsText(value)} />
      <button disabled={!newsText} onClick={onAddNewsItemButtonClicked}>+</button>
    </div>
  )
}

export default NewsAddItem