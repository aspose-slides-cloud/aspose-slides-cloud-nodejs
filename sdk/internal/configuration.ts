/*
* MIT License

* Copyright (c) 2017 Aspose Pty Ltd

* Permission is hereby granted, free of charge, to any person obtaining a copy
* of this software and associated documentation files (the "Software"), to deal
* in the Software without restriction, including without limitation the rights
* to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
* copies of the Software, and to permit persons to whom the Software is
* furnished to do so, subject to the following conditions:

* The above copyright notice and this permission notice shall be included in all
* copies or substantial portions of the Software.

* THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
* IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
* FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
* AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
* LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
* OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
* SOFTWARE.
*/

const defaultBasePath = "https://api.aspose.cloud";

/**
 * Slides API configuration
 */
export class Configuration {

    /**
     * Client ID.
     */
    public appSid: string;

    /**
     * Client Secret.
     */
    public appKey: string;

    /**
     * access token.
     */
    public accessToken: string;

    /**
     * Base Url.
     */
    public baseUrl: string = defaultBasePath;

    /**
     * Base Url.
     */
    public authBaseUrl: string = defaultBasePath;

    /**
     *  Gets or sets slides operation timeout in seconds. 0 stands for no timeout. The timeout applies to the Slides operation, not to the HTTP request.
     */
    public timeout: number;

    /**
     *  Gets or sets a value indicating whether debug mode is enabled. In debug mode all requests and responses are logged to console.
     */
    public debugMode: boolean;

    /**
     *  Gets or sets collection of custom headers to be added to HTTP requests.
     */
    public customHeaders: { [key: string]: string } ;

    /**
     *  Gets or sets a value indicating whether insecure requests are allowed.
     */
    public allowInsecureRequests: boolean;

    constructor(appSid: string, appKey: string, baseUrl?: string, authBaseUrl?: string, debugMode?: boolean, timeout?: number) {
        if (baseUrl) {
            this.baseUrl = baseUrl;
            this.authBaseUrl = baseUrl;
        }
        if (authBaseUrl) {
            this.authBaseUrl = authBaseUrl;
        }

        this.appSid = appSid;
        this.appKey = appKey;
        this.debugMode = debugMode;
        this.timeout = timeout;
        this.customHeaders = {};
        this.allowInsecureRequests = false;
    }

    /**
     * Returns api base url
     */
    public getApiBaseUrl(): string {
        return this.baseUrl + "/v3.0";
    }
}
