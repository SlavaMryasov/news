import { cn } from '@/shared/lib/cn'
import { MY_PHOTO } from '@/shared/lib/constants'
import { AboutMeCard } from '@/shared/ui/aboutMeCard'
import { LabeledList } from '@/shared/ui/labeledList'
import { Paragraph } from '@/shared/ui/paragraph'
import { aboutMe } from './lib/mock'

export const AboutMe = () => {
  return (
    <div className="flex justify-center p-4 md:p-5 lg:p-10">
      <div className={cn('grid h-full max-w-7xl grid-cols-1 gap-5', 'md:grid-cols-2')}>
        <div className="h-[40vh] overflow-hidden rounded-xl md:col-span-1 md:h-[100vh] md:max-h-[840px] lg:h-[80vh] lg:max-h-[742px]">
          <img src={MY_PHOTO} alt="Славка" className="h-full w-full object-cover" />
        </div>

        <AboutMeCard title="Мрясов Вячеслав Дмитриевич">
          {aboutMe.mainInfo.map((item) => (
            <Paragraph key={item.id}>
              {typeof item.value === 'string' ? (
                <span>
                  <span className="font-medium">{item.label}:</span> {item.value}
                </span>
              ) : (
                <LabeledList label={item.label} items={item.value} />
              )}
            </Paragraph>
          ))}

          {aboutMe.education.map((item) => (
            <Paragraph key={item.id}>
              <span className="font-medium">{item.label}:</span> {item.value}
            </Paragraph>
          ))}

          {aboutMe.techStack.map((item) => (
            <Paragraph key={item.id}>
              <LabeledList label={item.label} items={item.value} />
            </Paragraph>
          ))}
        </AboutMeCard>
        <AboutMeCard title="Опыт работы" className="w-full md:col-span-2 xl:pr-124">
          {aboutMe.experience.map((item) => (
            <div key={item.id} className="flex flex-col gap-4">
              <Paragraph>
                <span className="font-medium">
                  {item.place}, <a href={`https://${item.site}`}>{item.site}</a>, {item.sector}
                </span>
                <span className="font-medium text-gray-400">{item.period}</span>
              </Paragraph>
              <Paragraph>{item.desc}</Paragraph>
              <hr className="my-4 text-gray-200" />
            </div>
          ))}
        </AboutMeCard>
        <AboutMeCard title="О себе" className="md:col-span-2 xl:pr-124">
          {aboutMe.about.map((item) => (
            <Paragraph key={item.id}>{item.text}</Paragraph>
          ))}
        </AboutMeCard>
      </div>
    </div>
  )
}
