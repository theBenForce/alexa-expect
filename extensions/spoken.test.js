const spoken = require("./spoken");

let received;

const testValue = "Test value";

beforeEach(() => {
  received = {
    ssml: {
      response: {
        outputSpeech: {
          type: "SSML",
          ssml: `<speak>${testValue}</speak>`
        }
      }
    },
    text: {
      response: {
        outputSpeech: {
          type: "plainText",
          text: testValue
        }
      }
    }
  };
});

describe("spoken expects", () => {
  test("toHaveSaid should pass when ssml string is present", () => {
    var result = spoken.toHaveSaid(received.ssml, testValue);

    expect(result.pass).toBe(true);
  });

  test("toHaveSaid should pass when text string is present", () => {
    var result = spoken.toHaveSaid(received.text, testValue);

    expect(result.pass).toBe(true);
  });

  test("toHaveSaid should fail when ssml string is not present", () => {
    received.ssml.response.outputSpeech.ssml =
      "<speak>Something different</speak>";
    var result = spoken.toHaveSaid(received.ssml, testValue);

    expect(result.pass).toBe(false);
  });
});
