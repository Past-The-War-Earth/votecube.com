import {diToken}          from '@airport/di'
import {
	IContinent,
	ICountry,
	ICounty,
	IFactor,
	IFactorPosition,
	ILabel,
	IPoll,
	IPollContinent,
	IPollCountry,
	IPollCounty,
	IPollFactorPosition,
	IPollLabel,
	IPollState,
	IPollTown,
	IPosition,
	IState,
	ITown
}                         from '@votecube/model'
import {IModelSerializer} from './model/core/ModelSerializer'

export const AJAX_Z_CONTINENT       = diToken<IModelSerializer<IContinent>>()
export const AJAX_Z_COUNTRY         = diToken<IModelSerializer<ICountry>>()
export const AJAX_Z_COUNTY          = diToken<IModelSerializer<ICounty>>()
export const AJAX_Z_FACTOR          = diToken<IModelSerializer<IFactor>>()
export const AJAX_Z_FACTOR_POSITION = diToken<IModelSerializer<IFactorPosition>>()
export const AJAX_Z_POSITION        = diToken<IModelSerializer<IPosition>>()
export const AJAX_Z_POLL            = diToken<IModelSerializer<IPoll>>()
export const AJAX_Z_POLL_CONTINENT       = diToken<IModelSerializer<IPollContinent>>()
export const AJAX_Z_POLL_COUNTRY         = diToken<IModelSerializer<IPollCountry>>()
export const AJAX_Z_POLL_COUNTY          = diToken<IModelSerializer<IPollCounty>>()
export const AJAX_Z_POLL_LABEL           = diToken<IModelSerializer<IPollLabel>>()
export const AJAX_Z_POLL_STATE           = diToken<IModelSerializer<IPollState>>()
export const AJAX_Z_POLL_TOWN            = diToken<IModelSerializer<IPollTown>>()
export const AJAX_Z_LABEL                = diToken<IModelSerializer<ILabel>>()
export const AJAX_Z_POLL_FACTOR_POSITION = diToken<IModelSerializer<IPollFactorPosition>>()
export const AJAX_Z_STATE                = diToken<IModelSerializer<IState>>()
export const AJAX_Z_TOWN                 = diToken<IModelSerializer<ITown>>()
