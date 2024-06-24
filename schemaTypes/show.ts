import { defineField, defineType } from "sanity";
import DoorsOpenInput from "./components/DoorsOpenInput";

export const show = defineType({
   name: 'show',
   title: 'Show',
   type: 'document',
   groups: [
      {name: 'info', title: 'Information'},
      {name: 'tickets', title: 'Tickets'},
   ],
   fields: [
      defineField({
         name: 'artist',
         title: 'Artist',
         type: 'string',
         group: 'info',
      }),
      defineField({
         name: 'slug',
         title: 'Slug',
         type: 'slug',
         options: {
            source: 'artist',
            maxLength: 96,
         },
         validation: (rule) => rule 
            .required()
            .error('A slug is required'),
         hidden: ({document}) => !document?.artist, // if artist is not set, hide the field
         group: 'info',
      }),
      defineField({
         name: 'type',
         type: 'string',
         options: {
            list: ['concert', 'festival', 'theater'],
            layout: 'radio',
         },
         group: 'info',
      }),
      defineField({
         name: 'location',
         title: 'Location',
         type: 'array',
         of: [{type: 'reference', to: {type: 'location'}}],
         group: 'info',
      }),
      defineField({
         name: 'date',
         title: 'Date',
         type: 'datetime',
         group: 'info',
      }),
      defineField({
         name: 'doorsOpen',
         description: 'When the doors open before the show starts',
         type: 'number',
         initialValue: 60,
         group: 'info',
         components: {
            input: DoorsOpenInput,
         },
      }),
      defineField({
         name: 'image',
         title: 'Image',
         type: 'image',
         options: {
            hotspot: true,
         },
         group: 'info',
      }),
      defineField({
         name: 'description',
         title: 'Description',
         type: 'text',
         group: 'info',
      }),
      defineField({
         name: 'price',
         title: 'Price',
         type: 'number',
         description: 'Cost of the ticket in USD',
         group: 'tickets'
      }),
      defineField({
         name: 'seat',
         title: 'Seat',
         type: 'array',
         of: [{type: 'reference', to: {type: 'seat'}}],
         group: 'tickets'
      }),
      defineField({
         name: 'website',
         type: 'url',
         group: 'tickets'
      }),
   ],
   preview: {
      select: {
         title: 'artist',
         subtitle: 'location.0.name',
         date: 'date',      
         media: 'image',
      },
      prepare({title, subtitle, date, media}) {
         return {
            title,
            subtitle: `${subtitle} - ${new Date(date).toLocaleDateString()}`,
            media: media || BoltIcon,
         }
      }
   },
});