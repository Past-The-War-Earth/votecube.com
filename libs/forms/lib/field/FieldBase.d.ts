import { IValidator } from '../validator/Validator';
import { IFieldGroup } from './FieldGroup';
export interface IFieldError {
    key: string;
    message?: string;
    [otherKey: string]: any;
}
export interface IComponent {
    setDelta(newDelta: number): void;
    setIsOriginal(newIsOriginal: boolean): void;
    setIsValid(newIsValid: boolean): void;
    setShowCalendar(newShowCalendar: boolean): void;
    setShowOptions(newShowOptions: boolean): void;
}
export interface IFieldBase {
    changeFlags: any;
    components: IComponent[];
    displayValue: any;
    errors: IFieldError[];
    group: IFieldGroup;
    hasValue: boolean;
    id: string;
    isRequired: boolean;
    name: string;
    optionText: any;
    pristine: boolean;
    text: any;
    theIsOriginal: boolean;
    touched: boolean;
    valid: boolean;
    validationRun: number;
    validators?: IValidator[];
    validatorMap?: {
        [validatorName: string]: IValidator;
    };
    value: any;
    addComponent(component: IComponent): void;
    setRun(runNumber: number): void;
    clearComponents(): void;
    focus(): void;
    hidePopup(): void;
    isSame(val1: any, val2: any): boolean;
    isOriginal(): boolean;
    displayMatches(): boolean;
    onChange(callback: (value: any) => void): void;
    removeComponent(component: IComponent): void;
    removeComponent(component: IComponent): void;
    revert(): void;
    setAsField(component: IComponent): void;
    setTrackOriginal(trackOriginal: boolean): void;
    setValue(newValue: any, resetOriginal?: boolean): void;
    touch(fromChild?: boolean, formParent?: boolean): void;
    validate(external?: boolean, fromParentGroup?: boolean, relatedField?: IFieldBase, originalCheckOnly?: boolean): void;
}
export declare abstract class FieldBase implements IFieldBase {
    validators: IValidator[];
    dirty: boolean;
    errors: IFieldError[];
    group: IFieldGroup;
    id: string;
    lastValue: any;
    name: string;
    components: IComponent[];
    pristine: boolean;
    text: any;
    theIsOriginal: boolean;
    valid: any;
    validationRun: number;
    validatorMap: any;
    valueChangeCallbacks: any[];
    protected theValue: any;
    protected originalValue: any;
    private theTouched;
    protected _optionText: string;
    constructor(validators?: IValidator[]);
    get hasValue(): boolean;
    get isRequired(): boolean;
    get optionText(): string;
    set optionText(newOptionText: string);
    get touched(): boolean;
    get value(): any;
    set value(newValue: any);
    get changeFlags(): any;
    get displayValue(): any;
    displayMatches(): boolean;
    setRun(runNumber: number): void;
    addComponent(component: IComponent): void;
    clearComponents(): void;
    detect(reuseChange?: number): void;
    focus(): void;
    hidePopup(): void;
    isSame(val1: any, val2: any): boolean;
    abstract isOriginal(): boolean;
    onChange(callback: (value: any) => void): void;
    removeComponent(component: IComponent): void;
    revert(): void;
    setAsField(component: IComponent): void;
    abstract setTrackOriginal(trackOriginal: boolean): void;
    setValue(newValue: any, resetOriginal?: boolean): void;
    touch(fromChild?: boolean, formParent?: boolean): void;
    abstract validate(external?: boolean, fromParentGroup?: boolean, relatedField?: IFieldBase): void;
    protected onValueChanged(): void;
    protected shouldValidate(external: boolean): boolean;
}
export declare function validate(field: FieldBase): void;
//# sourceMappingURL=FieldBase.d.ts.map