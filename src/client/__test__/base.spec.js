import { handleSubmit, checkUrl } from "../js/base";
import fetch from "node-fetch";

describe("Testing the checkUrl functionality", () => {
  test("Testing the checkUrl() function to be defined", () => {
    expect(checkUrl).toBeDefined();
  });

  test("Testing the checkUrl() function, when send a true param", () => {
    const testUrl = "www.udacity.com";
    expect(checkUrl(testUrl)).toBeTruthy();
  });

  test("Testing the checkUrl() function, when send a false param", () => {
    const testUrl = "www.udacity#.com";
    expect(checkUrl(testUrl)).toBeFalsy();
  });
});

describe("Testing the submit functionality", () => {
  const event = { preventDefault: () => {} };
  const textAreaEle = document.getElementById("txt");
  const resultElm = document.getElementById("result");

  test("Testing the handleSubmit() function to be defined", () => {
    expect(handleSubmit).toBeDefined();
  });

  beforeEach(() => {
    jest.spyOn(event, "preventDefault");
  });

  test("Testing the handleSubmit() function, invalid", () => {
    document.addEventListener("DOMContentLoaded", () => {
      const testUrl = "www.#udacity.com";
      textAreaEle.value = testUrl;
      expect(textAreaEle.value).toBe(testUrl);

      handleSubmit(event);
      expect(resultElm.innerHTML).toEqual(
        "<span class='error'>An Invalid URL</span>"
      );
    });
  });
  test("Testing the handleSubmit() function, valid", () => {
    document.addEventListener("DOMContentLoaded", () => {
      const testUrl = "www.udacity.com";
      textAreaEle.value = testUrl;
      expect(textAreaEle.value).toBe(testUrl);

      handleSubmit(event);
      expect(resultElm.innerHTML).toEqual(
        `<ol><li>Agreement: agreement</li><li>Irony: NONIRONIC</li><li>Model: general_en</li><li>Confidence: 83</li></ol>`
      );
    });
  });
});
