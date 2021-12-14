export declare const DEFINE_SITUATION_TOP = "DEFINE_SITUATION_TOP";
export declare const CREATE_FACTOR = "CREATE_FACTOR";
export declare function setForm(name: any, newCurrentForm: any): void;
export declare function getForm(name: any): any;
export declare function ensureChildForm(parentFormName: any, childFormName: any, page: any, navigateToRouteOnNotFound: any, navigateParamsOnNotFound: any): any;
export declare function ensureTopForm(topFormName: any, formHandle: any, navigateToRouteOnNotFound: any, navigateParamsOnNotFound?: any): any;
export declare function ensureForm(form: any, formHandle: any): void;
export declare function uncacheForm(formName: any): void;
export declare function clearForm(form: any): void;
export declare function navigateOnValid(form: any, navigateToRouteOnValid: any, paramMap: any): void;
export declare var OPTIONS: {
    handleKeydown: (page: any, multi: any, event: any) => void;
    showFiltered: (page: any, element: any, event: any) => void;
};
//# sourceMappingURL=forms.d.ts.map