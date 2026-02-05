const createResponse = (body, type, status) =>
  new Response(body, { status, headers: { "Content-Type": type } });

const fetchResponse = (fileDetails, readFile, status = 200) => {
  const body = readFile(fileDetails.path);
  return createResponse(body, fileDetails["Content-Type"], status);
};

const contentRegistry = {
  "/": { path: "./pages/home.html", "Content-Type": "text/html" },
  "/home": { path: "./pages/home.html", "Content-Type": "text/html" },
  "/man-utd": { path: "./pages/man-utd.html", "Content-Type": "text/html" },
  "/real": { path: "./pages/real-madrid.html", "Content-Type": "text/html" },
  "/google": { path: "./pages/google.html", "Content-Type": "text/html" },
  "/notFound": { path: "./pages/notFound.html", "Content-Type": "text/html" },
};

export const createRequestHandler = (readFile) => (request) =>
  handleRequest(request, readFile);

const handleRequest = (request, readFile) => {
  const url = new URL(request.url);
  const pathName = url.pathname;
  if (pathName in contentRegistry) {
    const fileDetails = contentRegistry[pathName];
    return fetchResponse(fileDetails, readFile);
  }

  return fetchResponse(contentRegistry["/notFound"], readFile, 404);
};
