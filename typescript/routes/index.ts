import {SDAH} from './../models';
import {appDetails} from './config'
import {indexes} from './indexes';
import {HymnalRoutes} from './hymnal'

class SDAHRoutes extends HymnalRoutes {
  constructor() {
    const basePath = '';
    super(basePath, SDAH, indexes, appDetails);
  }
}

export const routes = new SDAHRoutes().get();
