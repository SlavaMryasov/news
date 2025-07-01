import { cn } from '@/shared/lib/cn'
import { useId, type ComponentProps } from 'react'

export type Props = {
  label?: string
  hint?: string
  isError?: boolean
  isRequired?: boolean
  ref?: React.Ref<HTMLInputElement>
} & ComponentProps<'input'>

export const Input = ({
  label,
  value,
  placeholder,
  hint,
  isError,
  className,
  disabled,
  type = 'text',
  onChange,
  ref,
  ...props
}: Props) => {
  const id = useId()

  return (
    <div className="flex flex-col gap-1">
      <label htmlFor={id} className="text-gray-400">
        {label}
      </label>
      <div>
        <input
          id={id}
          type={type}
          ref={ref}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          className={cn(
            'h-full w-full rounded-lg bg-gray-200 px-2 py-3 outline-none',
            'placeholder:text-gray-400',
            'focus:placeholder:text-gray-400 active:ring-1 active:ring-gray-700 active:placeholder:text-gray-400',
            'hover:ring-1 hover:ring-gray-400',
            'focus:ring-1 focus:ring-gray-700',
            'disabled:cursor-not-allowed disabled:text-gray-400 disabled:hover:ring-0',

            {
              'ring-red-500 not-disabled:ring-2 hover:ring-red-500 hover:not-focus:not-disabled:shadow-[0_0_0_1.5px_red]':
                isError,
            },
            { 'cursor-not-allowed text-gray-400': disabled },

            className,
          )}
          disabled={disabled}
          {...props}
        />
      </div>
      <span
        className={cn({ 'text-red-500': isError && !disabled }, { 'cursor-not-allowed': disabled })}
      >
        {hint}
      </span>
    </div>
  )
}

Input.displayName = 'Input'
