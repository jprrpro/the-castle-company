/*
Part 1: The Castle Company
    Aequilibrium is in the business of building castles (we really aren’t, but let’s pretend). Now, we also
    believe in quality aesthetics, so we only want to build castles in two types of places:
    a. Peaks
    b. Valleys
    Let’s say you have an array of integers that describes a stretch of land, where each integer represents the
    current height of the land. Can you write a function that reads that array and returns the number of
    castles that Aequilibrium should build on that stretch of land? You can write this solution in whatever
    language you like and provide a way to test it.
    You can make the following assumptions:
    * You can always build a castle at the start of the array, provided it is non-empty
    * You can always build a castle at the end of the array, provided it is non-empty
    * We only want to build one castle per peak or valley.
    * A peak is an integer or series of integers that is above the immediately preceding and following
    ints. For example, in the sequence [2,6,6,6,3] the sequence of three 6s is a peak.
    * A valley is an integer or series of integers that is below the immediately preceding and
    following ints. For example, in the sequence [6,1,4] the "1" would be a valley.
*/

const getCastleCount = (landHeights) => {
  let castles = 0;
  let hasCastleBeenBuiltOnSeries = false;

  if (landHeights.length < 2) {
    return 1;
  }

  for (let i = 1; i < landHeights.length - 1; i++) {
    let prev = landHeights[i - 1];
    let next = landHeights[i + 1];
    let current = landHeights[i];

    /**
     * Checking for peaks and valleys without any series
     */
    if (
      (current < prev && current < next) ||
      (current > prev && current > next)
    ) {
      castles++;
    }

    /**
     * Checking for peaks and valleys within a series with same height and ensuring is just one castle per series as requested
     */
    if (current === next) {
      if (!hasCastleBeenBuiltOnSeries) {
        castles++;
        hasCastleBeenBuiltOnSeries = true;
      }
    } else {
      if (current === prev) {
        hasCastleBeenBuiltOnSeries = false;
      }
    }
  }

  /**
   * Based on the premise that a castle can always been built at
   * the start and end of the array, i just added them here in the
   * castle counter. I intentionally started the loop at index 1 because of this
   */
  return castles + 2;
};

exports.getCastleCount = getCastleCount;
