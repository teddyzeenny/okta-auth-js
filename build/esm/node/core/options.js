/*!
 * Copyright (c) 2015-present, Okta, Inc. and/or its affiliates. All rights reserved.
 * The Okta software accompanied by this notice is provided pursuant to the Apache License, Version 2.0 (the "License.")
 *
 * You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0.
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * 
 * See the License for the specific language governing permissions and limitations under the License.
 */

import '../crypto/node.js';
import 'tiny-emitter';
import '../server/serverStorage.js';
import 'cross-fetch';
import { createOAuthOptionsConstructor } from '../oidc/options/OAuthOptionsConstructor.js';

function createCoreOptionsConstructor() {
    const OAuthOptionsConstructor = createOAuthOptionsConstructor();
    return class CoreOptionsConstructor extends OAuthOptionsConstructor {
        constructor(options) {
            super(options);
            this.services = options.services;
            this.transformAuthState = options.transformAuthState;
        }
    };
}

export { createCoreOptionsConstructor };
//# sourceMappingURL=options.js.map
