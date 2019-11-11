import {
	IsData,
	IsDelta
}                       from '../core/common'
import {ICoreVariation} from '../core/Variation'

export interface IVariationData
	extends IVariationDataOrDelta<IsData> {
}

export interface IVariationDataOrDelta<DataOrDelta extends IsData | IsDelta>
	extends ICoreVariation<DataOrDelta> {

}
