import fetch from "node-fetch";

describe("Testing api/evaluate API", () => {
  test("Test if api/evaluate works fine with valid params", (done) => {
    const validUrl = "www.udacity.com";
    fetch(`http://localhost:3000/api/evaluate?url=${validUrl}`)
      .then((d) => d.json())
      .then((r) => {
        expect(r.irony).toBe("NONIRONIC");
        done();
      });
  });

  test("Test if api/evaluate works fine with invalid params", (done) => {
    const invalidUrl = "www.udafdfddcity.com";
    fetch(`http://localhost:3000/api/evaluate?url=${invalidUrl}`)
      .then((d) => d.json())
      .then((r) => {
        expect(r.status.credits).toBe("0");
        done();
      });
  });
});
