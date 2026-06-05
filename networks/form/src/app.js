export const requestHandler = (req) => {
  const pathname = new URL(req.url).pathname;
  console.log(req.method);

  if (pathname === "/" && req.method === "GET") {
    return serveHomePage();
  }

  if (pathname === "/validate" && req.method === "POST") {
    return serveValidatePage(req);
  }

  return new Response("<h1>Page not found</h1>", {
    headers: {
      "content-type": "text/html",
    },
  });
};

const serveHomePage = () => {
  const page = Deno.readTextFileSync("./pages/home.html");
  return new Response(page, {
    headers: {
      "content-type": "text/html",
    },
  });
};

const serveValidatePage = async (req) => {
  const user = await req.text();
  const params = new URLSearchParams(user);
  const userDetails = Object.fromEntries(params.entries());

  return new Response(
    `<h1>YOUR NAME: ${userDetails.username} | YOUR EMAIL: ${userDetails.email}</h1>`,
    {
      headers: {
        "content-type": "text/html",
      },
    },
  );
};
