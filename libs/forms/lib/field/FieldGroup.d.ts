import { IValidator } from '../validator/Validator';
import { IFieldRules, IFieldText } from './Field';
import { FieldBase, IComponent, IFieldBase, IFieldError } from './FieldBase';
export interface IFieldMap {
    [key: string]: IFieldBase;
}
export interface IFieldValidityMap {
    [key: string]: IFieldError[];
}
export interface IFieldGroupText {
    [key: string]: IFieldGroupText | IFieldGroupingText | IFieldText | string;
}
export interface IFieldGroupingText {
    error: string;
    info: string;
    label: string;
}
export interface IFieldGroup extends IFieldBase {
    error: IFieldError;
    fields: IFieldMap;
    isRequired: boolean;
    text: IFieldGroupText;
    hideOtherPopups(fieldWithOpenPopup: FieldBase): void;
}
export declare class FieldGroup extends FieldBase implements IFieldGroup {
    fields: IFieldMap;
    error: IFieldError;
    rules: IFieldRules;
    text: IFieldGroupText;
    private hasRequiredChild;
    private hasChildValues;
    constructor(name: any, fields: IFieldMap, validators: IValidator[], text: any, textName?: string);
    get hasValue(): boolean;
    get isRequired(): boolean;
    get value(): any;
    get changeFlags(): any;
    set value(value: any);
    set optionText(textMap: any);
    addComponent(component: IComponent): void;
    clearComponents(): void;
    hideOtherPopups(fieldWithOpenPopup: FieldBase): void;
    isOriginal(): boolean;
    removeComponent(component: IComponent): void;
    setTrackOriginal(trackOriginal: boolean): void;
    setValue(value: any, resetOriginal?: boolean): void;
    touch(fromChild?: boolean, fromParent?: boolean): void;
    /**
     * If a Group is optional:
     *    If it has values, check all validators
     *    It it does not have any values, and only required validators on it's
     *    child fields are erroring, then it is valid
     *
     * Group must have a required validator to be required and is otherwise optional
     * @param fromParentGroup
     * @param relatedField
     */
    setRun(runNumber: number): void;
    validate(external?: boolean, fromParentGroup?: boolean, relatedField?: IFieldBase, originalCheckOnly?: boolean): void;
}
