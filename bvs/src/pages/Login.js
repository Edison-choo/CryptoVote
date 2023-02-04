import React, {useEffect} from 'react'
// const crypto = require("crypto");

import crypto from "crypto";

const Login = () => {

  // useEffect(() => {
  //   const script = document.createElement('script');
  
  //   script.src = "https://stg-id.singpass.gov.sg/static/ndi_embedded_auth.js";
  //   script.async = true;
  
  //   document.body.appendChild(script);
  
  //   return () => {
  //     document.body.removeChild(script);
  //   }
  // }, []);

  function formURL(qrType, callbackURL, clientId, state, nonce, signatureMethod, timestampExpiry, timestampStart, version) {
    let nonceString = nonce ? "&nonce=" + nonce : '';
    let baseUrl = "https://sandbox.api.myinfo.gov.sg/sgverify";
    let sgverifyURl = baseUrl +
        "?callback=" + encodeURIComponent(callbackURL) +
        "&client_id=" + clientId +
        nonceString +
        "&qr_type=" + qrType +
        "&signature_method=" + signatureMethod +
        "&state=" + state +
        "&timestamp_expiry=" + timestampExpiry + // Saturday, 10 October 2020 10:10:10
        "&timestamp_start=" + timestampStart + // Thursday, 10 October 2019 10:10:10
        "&v=" + version;
  
    /* Display all the params */
    console.log('--- Verify URL Params ---:'.green);
    console.log(' - baseUrl: ' + baseUrl);
    console.log(' - callback: ' + callbackURL);
    console.log(' (1) callback(URL Encoded): ' + encodeURIComponent(callbackURL));
    console.log(' (2) client_id: ' + clientId);
    console.log(' (3) nonce: ' + nonce);
    console.log(' (4) qr_type: ' + qrType);
    console.log(' (5) signature_method: ' + signatureMethod);
    console.log(' (6) state: ' + state);
    console.log(' (7) timestamp_expiry: ' + timestampExpiry);
    console.log(' (8) timestamp_start: ' + timestampStart);
    console.log(' (9) v: ' + version);
  
    /* Display the URL */
    console.log('--- Verify URL ---:'.green);
    console.log(sgverifyURl);
  
    return sgverifyURl;
  
  }

  function signURL(sgverifyURl, keytoSign) {
    var signedSgVerifyURl = crypto.createSign('RSA-SHA256')
        .update(sgverifyURl)
        .sign(keytoSign, 'base64');
  
    /* Signature */
    console.log('--- Signature of Verify URL ---:'.green);
    console.log(signedSgVerifyURl);
  
    return signedSgVerifyURl;
  }

  function assemblingUrlWithSignature(sgverifyURl, signedSgVerifyURl) {
  
    var sgverifyURlwithSignature = sgverifyURl +
        "&signature=" + signedSgVerifyURl;
    return sgverifyURlwithSignature;
  }

  // var today = new Date();
  // var url = formURL("dynamic", "http://localhost:3000/Loading", "STG2-SGVERIFY-SELF-TEST", "kiosk001", crypto.randomBytes(20).toString("hex"), "RS256", Math.round(today.getTime()+24 * 60 * 60 * 1000), Math.round(today.getTime()), 2);
  // var signedUrl = signURL(url, `-----BEGIN CERTIFICATE-----
  // MIIGpzCCBI+gAwIBAgIMItibCAAAAABXzANlMA0GCSqGSIb3DQEBCwUAMGgxCzAJ
  // BgNVBAYTAlNHMRgwFgYDVQQKEw9OZXRydXN0IFB0ZSBMdGQxJjAkBgNVBAsTHU5l
  // dHJ1c3QgQ2VydGlmaWNhdGUgQXV0aG9yaXR5MRcwFQYDVQQDEw5OZXRydXN0IENB
  // IDItMTAeFw0yMTA3MTUwMDEwNTRaFw0yNjA3MjAxNjAwMDBaMIG+MQswCQYDVQQG
  // EwJTRzEYMBYGA1UEChMPTmV0cnVzdCBQdGUgTHRkMSYwJAYDVQQLEx1OZXRydXN0
  // IENlcnRpZmljYXRlIEF1dGhvcml0eTEgMB4GA1UECxMXTmV0cnVzdCBDQSAyLTEg
  // KFNlcnZlcikxDzANBgNVBAsTBk15SW5mbzElMCMGA1UECxMcR292ZXJubWVudCBU
  // ZWNobm9sb2d5IEFnZW5jeTETMBEGA1UEAxMKc3RnLW15aW5mbzCCASIwDQYJKoZI
  // hvcNAQEBBQADggEPADCCAQoCggEBAMYFF2yIOoo8bIeA6nPGZJTYRCSb7Nhku+U+
  // XCTDJ8VYud0UtnexrElL4siLGwWG6eutRP1lnTH5sHoxXnmjvTPgAE4lEU1bHXBs
  // wap2ILQXJ+nBp3eJilFWNk77l60cD0kShpM+gXG/6S13yRUAv0/kjv8+LqDVH4Ha
  // 3aWxoTZsxLC1mqCznmBvt+wJHdnidCLsF11hHsxnaUAxZ/uHsOSbq5GUaGXZG+2Z
  // hrp1cWcrdGEil1A5RPeq7KHB4waymjAL+1hIb4E2HLVa6RvCEg/m9MC+/VZsdOD5
  // ZpRRX6k/ROM9BxjvdyUfE2kjnOs2oObAPauiA1948pFQjrfIFR8CAwEAAaOCAfgw
  // ggH0MAsGA1UdDwQEAwIFoDAdBgNVHSUEFjAUBggrBgEFBQcDAQYIKwYBBQUHAwIw
  // SAYDVR0gBEEwPzA9BggqhT4Ah2oGATAxMC8GCCsGAQUFBwIBFiNodHRwOi8vd3d3
  // Lm5ldHJ1c3QubmV0L291cnByYWN0aWNlczBDBggrBgEFBQcBAQQ3MDUwMwYIKwYB
  // BQUHMAKGJ2h0dHA6Ly9haWEubmV0cnVzdC5uZXQvbmV0cnVzdGNhMi0xLmNlcjCB
  // vgYDVR0fBIG2MIGzMC2gK6AphidodHRwOi8vY3JsLm5ldHJ1c3QubmV0L25ldHJ1
  // c3RjYTItMS5jcmwwgYGgf6B9pHsweTELMAkGA1UEBhMCU0cxGDAWBgNVBAoTD05l
  // dHJ1c3QgUHRlIEx0ZDEmMCQGA1UECxMdTmV0cnVzdCBDZXJ0aWZpY2F0ZSBBdXRo
  // b3JpdHkxFzAVBgNVBAMTDk5ldHJ1c3QgQ0EgMi0xMQ8wDQYDVQQDEwZDUkwxNjUw
  // KwYDVR0QBCQwIoAPMjAyMTA3MTUwMDEwNTRagQ8yMDI2MDcyMDE2MDAwMFowHwYD
  // VR0jBBgwFoAUF0smS5R5Cl/fmvEIN8NIN4O71/owHQYDVR0OBBYEFOiLrOLqn7QF
  // +S7IsQLl7oUx7Nu0MAkGA1UdEwQCMAAwDQYJKoZIhvcNAQELBQADggIBAKf5MZMI
  // jCAuAFXEdwR7Koy5stybD4vJxRbF9PlzS0iyVyc86M+5SOgb8bY4mqYqxNDmlsnS
  // 2AXmYofnaJs8vqcKyIuAVkDbrFq7l/Znxn1c97b7+LM1KnrHPs2TdmUfMUsyTFZN
  // 9Ewq8/Vi+vK+y06/aKgXtWf4in9BkGgfUSwRf9I4GQrYhWXplEhodj9oa8VHRoyF
  // KefGgKME86EdubOcZ8J7hLCNCfLGPv91FpE/4TNDueIJKwCp6D0GWY+rV+Bar0vB
  // rexItTW6/n8kLJ2AzX178roO7BmdGrOG0TSGRQ2AfcNQcM+qgTA0b1B4L0VmxfOh
  // f+NdpN1+LcyFKa2wbQgeH6mnBpKd30/f8ZPEPlLOpKTj3Bo3dViRjNx2BqvZs2bk
  // 1O8gz1Z0ppWoQDyCQIF0kRinpcQR4gaKiksUdtbY3KgcNs6zHkgX15BYNfS9S1pN
  // jothNY/y/2HRdO0LWR/hj+FRVekbiXl5OEPynnx7yGEh5gxttA7O/+tFg63KFs0T
  // skR8zI/aHcvQITK+DmoQVbFoMjOFTwIJQTEKGuQIDsRQkjmOhseLt60rsxx8vA8t
  // MB5+S+0fj9HYV253LXPcn7vDXl6Us6aY3SKafrYraCoSzxuUZaAFo4Ehqe7y2I6j
  // KG4aN+QDqIdhwCHWMgbnfL+9OufuairKxx85
  // -----END CERTIFICATE-----`);
  // var finalUrl = assemblingUrlWithSignature(url, signedURL);
  // console.log(finalUrl);

  // var authParamsSupplier = async() => {
  //   return {state: "dummySessionState", nonce: "dummySessionNonce"};

  // };

  // const onError = (errorId, message) => {
  //   console.log(`onError.errorId:${errorId} message:${message}`);
  // };

  // const initAuthSessionResponse = window.NodeIterator.initAuthSession(
  //   'ndi-qr',
  //   {
  //     clientId: '',
  //     redirectUri: '',
  //     scope: 'openId',
  //     responseType: 'code'
  //   },
  //   authParamsSupplier,
  //   onError
  // );

  // console.log('initAuthSession: ', initAuthSessionResponse);

  return (
    <>
        <section id="services" className="login section-bg bvsStyle">
          <div className="container" data-aos="fade-up">
            <div className="info">
                <div className="address">
                    <h4>BlockVote</h4>
                    <p>Scan QR code to login</p>
                  </div>
                  <div id="ndi-qr"></div>
                  <img src="img/bvs/Singpass.png" className="img-fluid animated" alt />
                  {/* <div className="form-group mt-3" style={{paddingTop:"80px"}}>
                <input type="text" className="form-control" name="subject" id="subject" placeholder="NRIC" required />
                </div>
                <div className="form-group mt-3">
                <input type="text" className="form-control" name="subject" id="subject" placeholder="Password" required />
                </div> */}
              <div id='btn-div' className='row d-flex justify-content-center'>
                <a id='btn-bvs' href="/SelectVote" className="btn-get-started scrollto">Login</a>
              </div>
              <div className='statement'>Don't have an account? <a href='/Register'>Sign Up</a></div>
              
              {/* <div style={{paddingTop:"80px"}} className='statement'>Don't have an account? <a href='/Register'>Sign Up</a></div> */}
            </div>
            
          </div>
        </section>
      <script src="https://stg-id.singpass.gov.sg/static/ndi_embedded_auth.js"></script>
        
    </>
  )
}

export default Login