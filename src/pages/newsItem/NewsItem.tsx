import { BackToNewsButton } from '@/features/newsBackButton'
import { useGetNewsQuery } from '@/shared/api/newsApi'
import { Spinner } from '@/shared/ui/spinner'
import { useParams } from 'react-router-dom'
import { Error404 } from '../Error404'

export const NewsItem = () => {
  const { data: newsData, isLoading: isLoadingGetNews } = useGetNewsQuery()
  const { route } = useParams<{ route: string }>()

  const currentPath = route ?? ''

  const news = newsData?.data.find(
    (item) => typeof item.route === 'string' && item.route.endsWith(currentPath),
  )

  if (isLoadingGetNews) return <Spinner />

  if (!news) return <Error404 />

  return (
    <div className="flex flex-col gap-2 p-5">
      <BackToNewsButton />
      <h3 className="text-xl font-bold md:text-2xl lg:text-3xl">{news?.title}</h3>
      <div>
        <div className="md:float-left md:w-1/2 md:pr-5">
          <img className="rounded-xl" src={news?.imageUrl} alt={news?.description} />
        </div>
        <p className="text-center text-2xl font-bold">Тут я вообще не заморачивался 😎</p>
        <p>{news?.news}</p>
        <hr className="text-amber-400" />
        <p>{fish}</p>
      </div>
    </div>
  )
}

const fish =
  ' Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempore, odit? Consectetur facere iusto debitis placeat ipsum, amet alias dicta ipsa nemo quaerat quos nisi ipsum, amet alias dicta ipsa nemo quaerat quos nisi ipsum, amet alias dicta ipsa nemo quaerat quos nisi ipsum, amet alias dicta ipsa nemo quaerat quos nisiipsum, amet alias dicta ipsa nemo quaerat quos nisiipsum, amet alias dicta ipsa nemo quaerat quos nisiipsum, amet alias dicta ipsa nemo quaerat quos nisiipsum, amet alias dicta ipsa nemo quaerat quos nisiipsum, amet alias dicta ipsa nemo quaerat quos nisiipsum, amet alias dicta ipsa nemo quaerat quos nisiipsum, amet alias dicta ipsa nemo quaerat quos nisiipsum, amet alias dicta ipsa nemo quaerat quos nisiipsum, amet alias dicta ipsa nemo quaerat quos nisi ipsum, amet alias dicta ipsa nemo quaerat quos nisiipsum, amet alias dicta ipsa nemo quaerat quos nisiipsum, amet alias dicta ipsa nemo quaerat quos nisiipsum, amet alias dicta ipsa nemo quaerat quos nisiipsum, amet alias dicta ipsa nemo quaerat quos nisi cum doloremque aliquid maiores impedit magnam ullam nostrum. Fugit nulla unde facere dolore, at blanditiis corporis, perspiciatis soluta deleniti nesciunt nobis officiis quo pariatur quis rerum molestias vero tenetur totam culpa aliquam? Illo atque nostrum facilis, eos aspernatur laudantium ullam nihil nobis architecto esse dicta perspiciatis cumque. Quam alias quo fugit voluptas magni illum exercitationem repudiandae animi vel vitae, similique reprehenderit doloribus sit. Voluptatum repellat voluptates odit sit blanditiis nam iusto provident sequi! Deserunt ratione minus quae dolor illo dolorum rerum veritatis animi labore non consectetur numquam voluptatem impedit consequuntur, nisi veniam architecto porro atque consequatur. Expedita inventore obcaecati debitis sint provident modi odit ipsum, dolorem qui! Et consequatur, similique dolor natus pariatur numquam sequi aut laborum eius repudiandae repellendus voluptas dolore nesciunt culpa, incidunt ipsum? Autem sunt fugiat dolor delectus eaque perferendis reiciendis voluptatibus explicabo facere repellendus possimus voluptatem dignissimos inventore quibusdam, aliquid quisquam tempora distinctio aperiam ratione, nesciunt harum libero ducimus! Voluptate, quas culpa. Tempore quas rerum sapiente deserunt aperiam voluptate tempora. Reprehenderit fugit accusantium porro nulla aperiam harum. Labore eligendi distinctio assumenda perferendis provident mollitia voluptates voluptate, iste quibusdam. Nisi, minima sequi. Distinctio aperiam iste recusandae in corporis aliquid, nostrum ullam veniam vero officia quos? Eveniet dicta architecto minima earum voluptatibus quod vero eum ea, voluptatum temporibus repellat est aperiam praesentium in, sequi exercitationem delectus nostrum soluta cumque. Vero, quos dolores! Similique fugit iure in nam est magnam repellendus eum voluptatem cupiditate temporibus. Eos exercitationem quod voluptatem amet ullam natus placeat nesciunt aliquid in. Hic quae odio inventore corporis asperiores omnis vero atque delectus consequatur eius. Placeat neque quo asperiores voluptatum quidem numquam corporis, similique ex vero est suscipit quam, eligendi quae, laudantium repudiandae porro deleniti in. Harum fugiat vel error repellat doloremque adipisci, accusantium ex assumenda in molestiae facilis asperiores nihil neque officiis commodi rerum ratione, repudiandae labore. Quibusdam totam optio aliquid, fugiat sed odit veritatis distinctio architecto aperiam perferendis rerum mollitia, explicabo blanditiis dolore earum cupiditate. Aliquid voluptates fuga ab reprehenderit quia, repellendus soluta, neque eveniet dolores ad commodi aperiam consequuntur iure ducimus facere nam rem quisquam odio, sint cumque libero quaerat eum. Eum doloribus officia esse nam doloremque vitae. A, possimus odio! Totam dolores laboriosam iusto ut! Laboriosam temporibus mollitia error, blanditiis laudantium eum accusantium non impedit, dolores velit nam?'
