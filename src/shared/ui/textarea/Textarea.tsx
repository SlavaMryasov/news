import { cn } from '@/shared/lib/cn'
import { useId, type ComponentProps } from 'react'

type Props = {
  isError?: boolean
  label?: string
  hint?: string
  ref?: React.Ref<HTMLTextAreaElement>
} & ComponentProps<'textarea'>

export const Textarea = ({ isError, hint, disabled, label, className, ref, ...props }: Props) => {
  const id = useId()

  return (
    <div className="flex flex-col gap-1">
      <label htmlFor={id} className="text-gray-400">
        {label}
      </label>
      <textarea
        id={id}
        ref={ref}
        data-slot="textarea"
        className={cn(
          'h-full min-h-20 w-full rounded-lg bg-gray-200 text-gray-900 outline-none',
          'placeholder:text-gray-400',
          'focus:placeholder:text-gray-400 active:ring-1 active:ring-gray-700',
          'hover:ring-1 hover:ring-gray-400',
          'focus:ring-1 focus:ring-gray-700',
          'disabled:cursor-not-allowed disabled:text-gray-400 disabled:hover:ring-0',
          'p-2',
          {
            'ring-red-500 not-disabled:ring-2 hover:ring-red-500 hover:not-focus:not-disabled:shadow-[0_0_0_1.5px_red]':
              isError,
          },
          className,
        )}
        {...props}
      />
      <div>
        <span
          className={cn(
            { 'text-red-500': isError && !disabled },
            { 'cursor-not-allowed': disabled },
          )}
        >
          {hint}
        </span>
      </div>
    </div>
  )
}
