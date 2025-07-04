import { BackToNewsButton } from '@/features/newsBackButton'

export const Error404 = () => {
  return (
    <div className="p-5">
      <h1>Упс, Вы заглянули на неcуществующую страницу</h1>
      <BackToNewsButton />
    </div>
  )
}
