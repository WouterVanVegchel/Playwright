import { expect, test } from "@playwright/test";

const password = "test123";

test("Dummy", async () => {
  console.log("Start the test =>", password);
  await expect(1).toBe(2);
});
