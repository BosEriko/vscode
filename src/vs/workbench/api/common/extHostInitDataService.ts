/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

import { IInitData } from './extHost.protocol';
import { createDecorator } from 'vs/platform/instantiation/common/instantiation';
import { URI } from 'vs/base/common/uri';

export const IExtHostInitDataService = createDecorator<IExtHostInitDataService>('IExtHostInitDataService');

export interface IExtHostInitDataService extends Readonly<IInitData> {
	_serviceBrand: undefined;
	readonly logFile: URI;
}

