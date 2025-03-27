import { useEffect, useMemo, useState } from "react";
import { NewsAddItem, NewsList } from "./"
import { INewsItem } from "./interfaces";
import { LocalData } from "../../logic";
import { localStorageNewsKey } from "../../logic/constants";
import { getRandomId } from "../../logic/helpers";
import './style.scss'

const News = () => {
  const localData = useMemo(() => new LocalData<INewsItem>(localStorageNewsKey), [])
  const [news, setNews] = useState(localData.get())

  useEffect(() => { localData.set(news) }, [news, localData])

  const addNewsItem = (text: string) => {
    setNews((prevState: any) => [...prevState, {
      id: getRandomId(),
      date: new Date().toString(),
      text,
    }])
  }

  const removeNewsItem = (id: string) => {
    setNews((prevState: any) => prevState.filter((item: any) => item.id !== id))
  }

  const editNewsItem = (editedItem: INewsItem) => {
    setNews((prevState: any) => prevState.map((item: any) => item.id === editedItem.id ? editedItem : item))
  }

  return (
    <div className="news">
      <h4 className="news__heading">Список новостей</h4>
      <NewsList news={news} remove={removeNewsItem} edit={editNewsItem} />
      <NewsAddItem add={addNewsItem} />
    </div>
  )
}

export default News