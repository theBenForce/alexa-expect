const spokenExtension = {
  toHaveSaid(received, argument) {
    var content = received.response;

    if (content) {
      content = content.outputSpeech;
    }

    if (content) {
      content =
        content.type.toUpperCase() === "SSML" ? content.ssml : content.text;
    }

    pass = content.indexOf(argument) >= 0;

    if (pass) {
      return {
        message: () => `expected ${content} not to contain ${argument}`,
        pass: true
      };
    } else {
      return {
        message: () => `expected ${content} to contain ${argument}`,
        pass: false
      };
    }
  }
};

module.exports = spokenExtension;
