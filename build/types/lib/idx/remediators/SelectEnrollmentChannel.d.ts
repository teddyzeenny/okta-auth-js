/*!
 * Copyright (c) 2021-present, Okta, Inc. and/or its affiliates. All rights reserved.
 * The Okta software accompanied by this notice is provided pursuant to the Apache License, Version 2.0 (the "License.")
 *
 * You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0.
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *
 * See the License for the specific language governing permissions and limitations under the License.
 */
import { Remediator, RemediationValues } from './Base/Remediator';
import { IdxRemediationValueForm, IdxContext } from '../types/idx-js';
import { OktaAuthIdxInterface } from '../types/api';
export declare type SelectEnrollmentChannelValues = RemediationValues & {
    channel?: string;
};
export declare class SelectEnrollmentChannel extends Remediator<SelectEnrollmentChannelValues> {
    static remediationName: string;
    canRemediate(): boolean;
    getNextStep(authClient: OktaAuthIdxInterface, context: IdxContext): {
        authenticator: import("../types/idx-js").IdxAuthenticator;
        name: string;
        canSkip?: boolean | undefined;
        canResend?: boolean | undefined;
        inputs?: import("../types/api").Input[] | undefined;
        poll?: import("../types/api").IdxPollOptions | undefined;
        authenticatorEnrollments?: import("../types/idx-js").IdxAuthenticator[] | undefined;
        action?: ((params?: import("../types/idx-js").IdxActionParams | undefined) => Promise<import("../types/api").IdxTransaction>) | undefined;
        idp?: import("../types/idx-js").IdpConfig | undefined;
        href?: string | undefined;
        relatesTo?: {
            type?: string | undefined;
            value: import("../types/idx-js").IdxAuthenticator;
        } | undefined;
        refresh?: number | undefined;
    };
    getData(): {
        authenticator: {
            id: string | IdxRemediationValueForm | undefined;
            channel: string | undefined;
        };
        stateHandle: string | undefined;
    };
    getValuesAfterProceed(): SelectEnrollmentChannelValues;
}
