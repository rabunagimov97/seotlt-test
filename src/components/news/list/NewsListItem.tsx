import { FC, useState } from "react"
import { INewsListItemProps } from "./interfaces"

export interface INewsListItemEditModeButtonProps {
  isEditMode: boolean
  setEditMode: (value: boolean) => void
}

const NewsListItemEditModeButton: FC<INewsListItemEditModeButtonProps> = ({ isEditMode, setEditMode }) => (
  <button onClick={() => setEditMode(!isEditMode)}>{isEditMode ? '×' : '✎'} </button>
)

const NewsListItem: FC<INewsListItemProps> = ({ item, remove, edit }) => {
  const { text, id, date } = item
  const [isEditMode, setEditMode] = useState(false)
  const [newsText, setNewsText] = useState(text)

  const onEditDoneButtonClicked = () => {
    edit({ ...item, text: newsText })
    setEditMode(false)
  }

  return (
    <div className="news-list-item">
      <div className="news-list-item__heading">
        <span>Добавлено: {new Date(date).toLocaleString()}</span>
        <span className="news-list-item__actions">
          <button onClick={() => remove(id)}>🗑</button>
          <NewsListItemEditModeButton isEditMode={isEditMode} setEditMode={setEditMode} />
        </span>
      </div>
      {isEditMode ? (
        <div className="news-list-item__edit">
          <textarea value={newsText} onChange={({ currentTarget: { value } }) => setNewsText(value)} />
          <button onClick={onEditDoneButtonClicked}>✓</button>
        </div>
      ) : (
        <div>{text}</div>
      )}
    </div>
  )
}

export default NewsListItem