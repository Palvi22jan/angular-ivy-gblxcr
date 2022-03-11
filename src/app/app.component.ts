import { Component } from '@angular/core';
import { Item, ItemStatus } from './model';

/**
 *  1. Display data in a table.
 *  2. Add ability to search by name using a textbox
 *  3. Add ability to filter by status.
 *  4. Add ability to sort the table.
 */

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public data: Item[] = [
    {
      id: '1',
      name: 'Get Dog Food',
      status: ItemStatus.Todo
    },
    {
      id: '2',
      name: 'Fetch Water',
      status: ItemStatus.Todo
    },
    {
      id: '3',
      name: 'Go On a Walk',
      status: ItemStatus.Complete
    },
    {
      id: '4',
      name: 'Cook Dinner',
      status: ItemStatus.Todo
    },
    {
      id: '5',
      name: 'Watch a Movie',
      status: ItemStatus.InProgress
    },
    {
      id: '6',
      name: 'Till the Field',
      status: ItemStatus.Complete
    },
    {
      id: '7',
      name: 'Plant Crops',
      status: ItemStatus.Complete
    },
    {
      id: '8',
      name: 'Harvest Crops',
      status: ItemStatus.InProgress
    }
  ];
}
