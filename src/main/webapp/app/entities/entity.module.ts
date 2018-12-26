import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { SecureAppRegionModule } from './region/region.module';
import { SecureAppCountryModule } from './country/country.module';
import { SecureAppLocationModule } from './location/location.module';
import { SecureAppDepartmentModule } from './department/department.module';
import { SecureAppTaskModule } from './task/task.module';
import { SecureAppEmployeeModule } from './employee/employee.module';
import { SecureAppJobModule } from './job/job.module';
import { SecureAppJobHistoryModule } from './job-history/job-history.module';
/* jhipster-needle-add-entity-module-import - JHipster will add entity modules imports here */

@NgModule({
    // prettier-ignore
    imports: [
        SecureAppRegionModule,
        SecureAppCountryModule,
        SecureAppLocationModule,
        SecureAppDepartmentModule,
        SecureAppTaskModule,
        SecureAppEmployeeModule,
        SecureAppJobModule,
        SecureAppJobHistoryModule,
        /* jhipster-needle-add-entity-module - JHipster will add entity modules here */
    ],
    declarations: [],
    entryComponents: [],
    providers: [],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class SecureAppEntityModule {}
