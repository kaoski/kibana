/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License;
 * you may not use this file except in compliance with the Elastic License.
 */

import { globalizeSelectors } from '../../utils/typed_redux';
import { logFilterSelectors as innerLogFilterSelectors } from './log_filter';
import { logMinimapSelectors as innerLogMinimapSelectors } from './log_minimap';
import { logPositionSelectors as innerLogPositionSelectors } from './log_position';
import { logTextviewSelectors as innerLogTextviewSelectors } from './log_textview';
import { LocalState } from './reducer';
import { waffleFilterSelectors as innerWaffleFilterSelectors } from './waffle_filter';

export const logFilterSelectors = globalizeSelectors(
  (state: LocalState) => state.logFilter,
  innerLogFilterSelectors
);

export const logMinimapSelectors = globalizeSelectors(
  (state: LocalState) => state.logMinimap,
  innerLogMinimapSelectors
);

export const logPositionSelectors = globalizeSelectors(
  (state: LocalState) => state.logPosition,
  innerLogPositionSelectors
);

export const logTextviewSelectors = globalizeSelectors(
  (state: LocalState) => state.logTextview,
  innerLogTextviewSelectors
);

export const waffleFilterSelectors = globalizeSelectors(
  (state: LocalState) => state.waffleFilter,
  innerWaffleFilterSelectors
);