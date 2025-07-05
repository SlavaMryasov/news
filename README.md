🛠 Установка

1. Убедитесь, что у вас установлен Node.js версии 16 или выше.
2. Убедитесь, что у вас установлен pnpm (если нет, установите его командой: npm install -g pnpm).
3. Склонируйте репозиторий: git clone https://github.com/SlavaMryasov/news.git
4. Перейдите в папку проекта: cd news
5. Установите зависимости: pnpm i

🚀 Запуск проекта:

Для запуска проекта в режиме разработки выполните команду: pnpm run dev

🏗 Сборка проекта

Чтобы собрать проект для продакшена, выполните: pnpm run build

🧪 Тестирование сборки

Чтобы протестировать собранный проект локально, запустите: pnpm run preview

//////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////

Структура проекта

```
news
├─ .env
├─ .prettierignore
├─ .prettierrc.cjs
├─ README.md
├─ eslint.config.js
├─ index.html
├─ package.json
├─ pnpm-lock.yaml
├─ public
│  └─ vite.svg
├─ src
│  ├─ app
│  │  ├─ App.tsx
│  │  ├─ global.css
│  │  ├─ main.tsx
│  │  ├─ providers
│  │  │  ├─ router
│  │  │  │  └─ config
│  │  │  │     └─ router.tsx
│  │  │  └─ store
│  │  │     ├─ index.ts
│  │  │     └─ store.ts
│  │  └─ vite-env.d.ts
│  ├─ assets
│  │  └─ images
│  │     ├─ me.webp
│  │     └─ newsFallback.webp
│  ├─ entities
│  │  ├─ newsCard
│  │  │  ├─ NewsCard.tsx
│  │  │  └─ index.ts
│  │  └─ newsCardAdmin
│  │     ├─ NewsCardAdmin.tsx
│  │     └─ index.ts
│  ├─ features
│  │  ├─ mainHeaderMenu
│  │  │  ├─ MainHeaderMenu.tsx
│  │  │  └─ index.ts
│  │  ├─ manageNews
│  │  │  ├─ model
│  │  │  │  ├─ newsFormSchema.ts
│  │  │  │  └─ types.ts
│  │  │  └─ ui
│  │  │     ├─ addNewsModal
│  │  │     │  ├─ AddNewsModal.tsx
│  │  │     │  └─ index.ts
│  │  │     ├─ deleteNewsModal
│  │  │     │  ├─ DeleteNewsModal.tsx
│  │  │     │  └─ index.ts
│  │  │     ├─ editNewsModal
│  │  │     │  ├─ EditNewsModal.tsx
│  │  │     │  └─ index.ts
│  │  │     ├─ newsCardAdminList
│  │  │     │  ├─ NewsCardAdminList.tsx
│  │  │     │  └─ index.ts
│  │  │     └─ newsForm
│  │  │        ├─ NewsForm.tsx
│  │  │        └─ index.ts
│  │  ├─ newsBackButton
│  │  │  ├─ index.ts
│  │  │  └─ ui
│  │  │     └─ BackToNewsButton.tsx
│  │  ├─ newsCardList
│  │  │  ├─ NewsCardList.tsx
│  │  │  └─ index.ts
│  │  └─ newsCarousel
│  │     ├─ Carousel.tsx
│  │     ├─ CarouselItem.tsx
│  │     └─ index.ts
│  ├─ lib
│  ├─ pages
│  │  ├─ Error404.tsx
│  │  ├─ aboutMe
│  │  │  ├─ AboutMe.tsx
│  │  │  ├─ index.ts
│  │  │  └─ lib
│  │  │     └─ mock.ts
│  │  ├─ crud
│  │  │  ├─ Crud.tsx
│  │  │  └─ index.ts
│  │  ├─ index.ts
│  │  ├─ news
│  │  │  ├─ News.tsx
│  │  │  └─ index.ts
│  │  └─ newsItem
│  │     ├─ NewsItem.tsx
│  │     └─ index.ts
│  ├─ shared
│  │  ├─ api
│  │  │  ├─ newsApi.ts
│  │  │  └─ types.ts
│  │  ├─ lib
│  │  │  ├─ cn.ts
│  │  │  └─ constants.ts
│  │  └─ ui
│  │     ├─ aboutMeCard
│  │     │  ├─ AboutMeCard.tsx
│  │     │  └─ index.ts
│  │     ├─ button
│  │     │  ├─ Button.tsx
│  │     │  └─ index.ts
│  │     ├─ carousel
│  │     │  ├─ Carousel.tsx
│  │     │  └─ index.ts
│  │     ├─ dialog
│  │     │  └─ Dialog.tsx
│  │     ├─ icon
│  │     │  ├─ Icon.tsx
│  │     │  ├─ assets
│  │     │  │  └─ svgs
│  │     │  │     ├─ arrowLeft.svg
│  │     │  │     ├─ arrowRight.svg
│  │     │  │     ├─ burger.svg
│  │     │  │     ├─ chevronDown.svg
│  │     │  │     ├─ chevronUp.svg
│  │     │  │     ├─ cross.svg
│  │     │  │     ├─ plus.svg
│  │     │  │     ├─ search.svg
│  │     │  │     ├─ spinner.svg
│  │     │  │     ├─ trash.svg
│  │     │  │     └─ write.svg
│  │     │  ├─ icons.ts
│  │     │  └─ index.ts
│  │     ├─ input
│  │     │  ├─ Input.tsx
│  │     │  └─ index.ts
│  │     ├─ labeledList
│  │     │  ├─ LabeledList.tsx
│  │     │  └─ index.ts
│  │     ├─ paragraph
│  │     │  ├─ Paragraph.tsx
│  │     │  └─ index.ts
│  │     ├─ select
│  │     │  └─ Select.tsx
│  │     ├─ spinner
│  │     │  ├─ Spinner.tsx
│  │     │  └─ index.ts
│  │     └─ textarea
│  │        ├─ Textarea.tsx
│  │        └─ index.ts
│  └─ widgets
│     ├─ footer
│     │  └─ ui
│     │     └─ Footer.tsx
│     ├─ header
│     │  └─ ui
│     │     └─ Header.tsx
│     └─ layout
│        ├─ MainLayout.tsx
│        └─ MainLayoutWrapper.tsx
├─ tsconfig.json
└─ vite.config.ts

```
