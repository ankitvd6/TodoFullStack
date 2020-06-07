import { Pipe, PipeTransform } from '@angular/core';
import { Todo } from '../todo';

@Pipe({name: 'sortBy'})
export class SortByPipe implements PipeTransform {
    transform(list: Todo[], sortOrder: string, sortParam:string, ...args: any[]) {
        if(list.length === 1)
            return list;
        else{
            if(sortOrder === 'asc' && sortParam === 'date')
                return list.slice().sort(this.compareDate);
            else if(sortOrder === 'desc' && sortParam === 'date')
                return list.slice().sort(this.compareDateDesc);
            // sort by heading string
            else if(sortOrder === 'asc' && sortParam === 'heading')
                return list.slice().sort(this.compareString);
            else if(sortOrder === 'desc' && sortParam === 'heading')
                return list.slice().sort(this.compareStringDesc);
            else if(sortOrder === 'low' && sortParam === 'priority')
                return list.filter(e => e.priority === 'low');
            else if(sortOrder === 'medium' && sortParam === 'priority')
                return list.filter(e => e.priority === 'medium');
            else if(sortOrder === 'high' && sortParam === 'priority')
                return list.filter(e => e.priority === 'high');
            else if(sortOrder === 'new' && sortParam === 'status')
                return list.filter(e => e.status === 'new');
            else if(sortOrder === 'in progress' && sortParam === 'status')
                return list.filter(e => e.status === 'in progress');
            else if(sortOrder === 'completed' && sortParam === 'status')
                return list.filter(e => e.status === 'completed');
            else return list;
        }
        // throw new Error("Method not implemented.");
    }

    compareString(a,b) {
        const headingA = a.heading.replace(/\s/g,'').toUpperCase();
        const headingB = b.heading.replace(/\s/g,'').toUpperCase();

        let comparison = 0;
        if(headingA > headingB) { comparison = 1; }
        else if(headingA < headingB) { comparison = -1; }
        return comparison;
    }
    compareStringDesc(a,b) {
        const headingA = a.heading.replace(/\s/g,'').toUpperCase();
        const headingB = b.heading.replace(/\s/g,'').toUpperCase();

        let comparison = 0;
        if(headingA > headingB) { comparison = 1; }
        else if(headingA < headingB) { comparison = -1; }
        return comparison * -1;
    }

    compareDate(a,b) {
        const dateA = Date.parse(a.dueDate);
        const dateB = Date.parse(b.dueDate);
        let comparison = 0;
        if(dateA > dateB) { comparison = 1; }
        else if(dateA < dateB) { comparison = -1; }
        return comparison;
    }

    compareDateDesc(a,b) {
        const dateA = Date.parse(a.dueDate);
        const dateB = Date.parse(b.dueDate);
        let comparison = 0;
        if(dateA > dateB) { comparison = 1; }
        else if(dateA < dateB) { comparison = -1; }
        return comparison * -1;
    }

}