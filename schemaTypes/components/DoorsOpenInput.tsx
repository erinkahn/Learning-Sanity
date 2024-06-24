import { NumberInputProps, useFormValue } from "sanity";
import {Stack, Text} from '@sanity/ui'

function subtractMinutesfromDate(date: string, minutes: number) {
   return new Date(new Date(date).getTime() - minutes * 60000);
}

export default function DoorsOpenInput(props: NumberInputProps) {
   const date = useFormValue(['date'] ) as string | undefined
   return (
      <Stack space={2}>
         {props.renderDefault(props)}
         {typeof props.value === 'number' && date ? ( 
            <Text size={1}>
               Doors open{' '}
               {subtractMinutesfromDate(date, props.value).toLocaleTimeString(undefined, {
                  month: 'long',
                  day: 'numeric',
                  hour: 'numeric',
                  minute: 'numeric',
                  year: 'numeric',
               })}
            </Text>
         ) : null}
      </Stack>
   );
}