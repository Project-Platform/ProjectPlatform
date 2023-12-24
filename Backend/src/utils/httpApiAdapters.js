/**
 * Encodes an object as url-encoded string.
 */
function encodeUrl(obj) {
  return Object.entries(obj).reduce((acc, [key, value]) => {
    const encKey = encodeURIComponent(key);
    const encValue = encodeURIComponent(value);
    return `${acc ? `${acc}&` : ""}${encKey}=${encValue}`;
  }, "");
}

/**
 * Encodes an object as JSON
 */
function encodeJson(obj) {
  return JSON.stringify(obj);
}

/**
 * Encodes an express reqeust body based on the content type header.
 */
function encodeRequestBody(req) {
  const contentType = req.headers["content-type"];

  if (contentType?.includes("application/x-www-form-urlencoded")) {
    return encodeUrl(req.body);
  }

  if (contentType?.includes("application/json")) {
    return encodeJson(req.body);
  }

  return req.body;
}

/**
 * Adapts an Express request to a Fetch request, returning the Fetch Request instance.
 */
export function adaptRequestFromExpressToFetch(req) {
  const url = req.protocol + "://" + req.get("host") + req.originalUrl;

  const headers = new Headers();

  Object.entries(req.headers).forEach(([key, value]) => {
    if (Array.isArray(value)) {
      value.forEach((v) => {
        v && headers.append(key, v);
      });
      return;
    }

    value && headers.append(key, value);
  });

  // GET and HEAD not allowed to receive body
  const body = /GET|HEAD/.test(req.method) ? undefined : encodeRequestBody(req);

  const fReq = new Request(url, {
    method: req.method,
    headers,
    body,
  });

  return fReq;
}

/**
 * Adapts a Fetch Response to an Express response, invoking appropriate
 * Express response methods to handle the response.
 */
export async function adaptResponseFromFetchToExpress(fRes, res) {
  fRes.headers.forEach((value, key) => {
    if (value) {
      res.appendHeader(key, value);
    }
  });

  res.status(fRes.status);
  res.write(await fRes.text());
  res.end();
}

export const httpApiAdapters = {
  request: {
    fromExpressToFetch: adaptRequestFromExpressToFetch,
  },
  response: {
    fromFetchToExpress: adaptResponseFromFetchToExpress,
  },
};
