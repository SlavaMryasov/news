export type NewsItem = {
  id: string
  date: string
  title: string
  news: string
  description: string
  imageUrl: string
  route: string
}

export type NewsResponse = {
  message: string
  data: NewsItem[]
}
