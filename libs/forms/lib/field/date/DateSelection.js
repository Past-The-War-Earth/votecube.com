export class DateSelection {
    constructor() {
        this.impl = {
            date: null,
            month: null,
            year: null
        };
    }
    get date() {
        return this.impl.date;
    }
    get month() {
        return this.impl.month;
    }
    get year() {
        return this.impl.year;
    }
    setState(external, date, month, year) {
        this.impl = {
            date,
            month,
            year
        };
    }
}
//# sourceMappingURL=DateSelection.js.map