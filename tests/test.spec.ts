import { expect, test } from "@playwright/test";

const password = "d0gsaremybestfr13nds_378";

test("Dummy", async () => {
  console.log("Start the test =>", password);
  await expect(1).toBe(2);
});
