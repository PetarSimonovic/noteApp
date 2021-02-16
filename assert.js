var assert = {
  isTrue: function (assertionToCheck, describe) {
    console.log(assertionToCheck)
    if (!assertionToCheck) {
      throw new Error(
        `Assertion failed - ${describe}`
      );
    }
    else {
      console.log(`Assertion passed - ${describe}`)
    }
  },
};
