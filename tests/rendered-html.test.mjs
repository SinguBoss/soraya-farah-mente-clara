import assert from "node:assert/strict";
import test from "node:test";

const absoluteOpenGraphImage =
  /<meta(?=[^>]*\bproperty=["']og:image["'])(?=[^>]*\bcontent=["']https:\/\/[^"']+["'])[^>]*>/i;

test("renders the public site with deployable social metadata", async () => {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}`);
  const { default: worker } = await import(workerUrl.href);

  const response = await worker.fetch(
    new Request("http://localhost/", {
      headers: { accept: "text/html" },
    }),
    {
      ASSETS: {
        fetch: async () => new Response("Not found", { status: 404 }),
      },
    },
    {
      waitUntil() {},
      passThroughOnException() {},
    },
  );

  assert.equal(response.status, 200);
  assert.match(
    response.headers.get("content-type") ?? "",
    /^text\/html\b/i,
  );

  const html = await response.text();
  assert.match(html, /<title>Soraya Farah \| Programa Mente Clara<\/title>/i);
  assert.match(html, absoluteOpenGraphImage);
  assert.match(html, /arraste para o lado/i);
  assert.match(html, /assets\/v11\/yoga-wellness-logo-clean\.png/i);
  assert.doesNotMatch(html, /conteúdo sujeito à validação final/i);
});
