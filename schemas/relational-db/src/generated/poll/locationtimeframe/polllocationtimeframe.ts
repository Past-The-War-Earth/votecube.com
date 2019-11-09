import {
	IImmutableActorRow,
} from '../../infrastructure/immutableactorrow';
import {
	IPoll,
} from '../poll';
import {
	IChosenPollVariation,
} from '../variation/chosenpollvariation';
import {
	IPollVariation,
} from '../variation/pollvariation';
import {
	IPollLTFContinent,
} from './location/pollltfcontinent';
import {
	IPollLTFCountry,
} from './location/pollltfcountry';
import {
	IPollLTFState,
} from './location/pollltfstate';
import {
	IPollLTFCounty,
} from './location/pollltfcounty';
import {
	IPollLTFTown,
} from './location/pollltftown';



//////////////////////////////
//     ENTITY INTERFACE     //
//////////////////////////////

export interface IPollLocationTimeFrame extends IImmutableActorRow {
	
	// Id Properties
	id: number;

	// Id Relations

	// Non-Id Properties
	endDate?: Date;
	startDate?: Date;

	// Non-Id Relations
	poll?: IPoll;
	chosenVariations?: IChosenPollVariation[];
	createdAtVariations?: IPollVariation[];
	pollContinents?: IPollLTFContinent[];
	pollCountries?: IPollLTFCountry[];
	pollStates?: IPollLTFState[];
	pollCounties?: IPollLTFCounty[];
	pollTowns?: IPollLTFTown[];
	pollVariations?: IPollVariation[];

	// Transient Properties

	// Public Methods
	
}


