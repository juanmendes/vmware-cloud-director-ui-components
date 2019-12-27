/*!
 * Copyright 2019 VMware, Inc.
 * SPDX-License-Identifier: BSD-2-Clause
 */

import { BrowserModule } from '@angular/platform-browser';
import { LOCALE_ID, NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DataExporterModule } from '@vmw/vcd-ui-components';
import { DocLibModule } from '@vmw/vcd-ui-doc-lib';
import { ClarityModule } from '@clr/angular';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { registerLocaleData } from '@angular/common';
import { PipesModule } from '../../../components/src/common/pipes/pipes.module';
import { FormsModule } from '@angular/forms';

import localeFr from '@angular/common/locales/fr';
import localeEs from '@angular/common/locales/es';

registerLocaleData(localeFr, 'fr');
registerLocaleData(localeEs, 'es');

const supportedLocales = ['fr', 'es'];
const defaultLocale = 'en-US';
const LOCALE_SEPARATOR = '-';

function getSupportedLocale(): string {
    let partiallyMatchedLocale: string;
    const completelyMatchedLocale = supportedLocales.find(
        (supportedLocale: string) => navigator.language === supportedLocale
    );
    if (!completelyMatchedLocale) {
        partiallyMatchedLocale = supportedLocales.find(
            (supportedLocale: string) => navigator.language.split(LOCALE_SEPARATOR)[0] === supportedLocale
        );
    }
    return completelyMatchedLocale || partiallyMatchedLocale || defaultLocale;
}

@NgModule({
    declarations: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        DataExporterModule,
        DocLibModule,
        ClarityModule,
        BrowserAnimationsModule,
        ComponentsModule,
        DocLibModule,
        ClarityModule,
        BrowserAnimationsModule,
        PipesModule,
        FormsModule,
    ],
    providers: [{ provide: LOCALE_ID, useValue: getSupportedLocale() }],
    bootstrap: [AppComponent],
})
export class AppModule {}
