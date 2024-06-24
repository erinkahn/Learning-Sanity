import { StructureResolver } from "sanity/structure";
import { PinIcon } from "@sanity/icons";
import {BoltIcon} from '@sanity/icons'
import {BillIcon} from '@sanity/icons'
import {CalendarIcon} from '@sanity/icons'

export const structure: StructureResolver = (S) =>
   S.list()
      .id('root')
      .title('Content')
      .items([
         S.listItem()   
            .title('Upcoming Shows')
            .schemaType('show')
            .icon(BoltIcon)
            .child(
               S.documentList()
                  .title('Upcoming Shows')
                  .filter('_type == "show" && date > now()')
                  .defaultOrdering([{field: 'date', direction: 'asc'}])
            ),
         S.listItem()
            .title('Past Shows')
            .schemaType('show')
            .icon(CalendarIcon)
            .child(
               S.documentList()
                  .title('Past Shows')
                  .filter('_type == "show" && date < now()')
                  .defaultOrdering([{field: 'date', direction: 'desc'}])
            ),
         S.divider(),
         // S.documentTypeListItem('show').title('Shows').icon(BoltIcon),
         S.documentTypeListItem('location').title('Locations').icon(PinIcon),
         S.documentTypeListItem('seat').title('Seats').icon(BillIcon),
      ]);
