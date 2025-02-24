import { cn } from '@/utils/cn';

interface IFeildProps {
  name: string;
  field: any;
  form: any;
}

export function Feild(props: IFeildProps) {
  const error = props.form.formState.errors[props.name]?.message?.toString();

  return (
    <div className={cn('flex flex-col')}>
      <label htmlFor={props.name} className="mb-1 text-sm text-teal">
        {props.field.label}
      </label>
      {props.field.type === 'image' && (
        <div className="relative">
          <input
            type="file"
            {...props.form.register(props.name)}
            className={cn({ 'border-red-500': !!error })}
            accept="image/*"
          />
          {!props.form.watch('image') && (
            <div className="pointer-events-none absolute right-2 top-1/2 h-10 w-36 -translate-y-1/2 bg-gray text-sm text-gray-400" />
          )}
        </div>
      )}
      {props.field.type === 'select' && (
        <select
          {...props.form.register(props.name)}
          className={cn(
            'p-3 focus:outline-none border rounded-lg bg-gray text-sm',
            {
              'border-red-500': !!error,
            },
          )}
        >
          <option value="" disabled>
            انتخاب کنید
          </option>
          {props.field.data.map((item: any) => (
            <option key={item.key} value={item.value}>
              {item.key}
            </option>
          ))}
        </select>
      )}
      {(props.field.type === 'text' ||
        props.field.type === 'number' ||
        props.field.type === 'password' ||
        props.field.type === 'email') && (
        <input
          type={props.field.type}
          {...props.form.register(props.name)}
          className={cn({ 'border-red-500': !!error })}
        />
      )}
      {!!error && <p className="mt-1 text-xs text-red-500">{error}</p>}
    </div>
  );
}
