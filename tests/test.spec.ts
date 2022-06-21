import { expect, test } from "@playwright/test";

test("Dummy", async () => {
  console.log("Start the test =>");
  await expect(1).toBe(2);
});
