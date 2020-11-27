import { IValidator } from '../validator/Validator';
import { Field, IField, IFieldRules } from './Field';
export interface IFieldOption {
    id: string | number;
    text?: string;
    [optionalKey: string]: any;
}
export interface IOptionsField extends IField {
    filteredOptions: IFieldOption[];
    options: IFieldOption[];
    optionText: {
        [optionKey: string]: string;
    };
    selectionMap: {
        [optionKey: string]: IFieldOption;
    };
    clear(): void;
    select(option: IFieldOption): any;
    unselect(optionToUnselect?: IFieldOption): any;
}
export interface IOptionFieldRules extends IFieldRules {
    multi?: boolean;
}
export declare class OptionsField extends Field implements IOptionsField {
    filteredOptions: IFieldOption[];
    optionsMap: {
        [optionKey: string]: IFieldOption;
    };
    originalSelectionMap: {
        [optionKey: string]: IFieldOption;
    };
    selectionMap: {
        [optionKey: string]: IFieldOption;
    };
    theOptions: IFieldOption[];
    constructor(validators: IValidator[], options?: IFieldOption[], rules?: IOptionFieldRules);
    get options(): IFieldOption[];
    set options(newOptions: IFieldOption[]);
    set optionText(textMap: any);
    get value(): any;
    set value(value: any);
    clear(): void;
    hidePopup(): void;
    isOriginal(): boolean;
    revert(): void;
    select(option: IFieldOption): void;
    setValue(value: any, resetOriginal?: boolean): void;
    unselect(optionToUnselect?: IFieldOption): void;
    protected getOriginal(): boolean;
    private doSelect;
    private filterOptions;
    private selectValue;
    private setOptions;
}
//# sourceMappingURL=OptionsField.d.ts.map