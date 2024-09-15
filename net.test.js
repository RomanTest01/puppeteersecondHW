const { clickElement, putText, getText } = require("./lib/commands");

let page;

beforeEach(async () => {
  page = await browser.newPage();
  await page.setDefaultNavigationTimeout(0);
  await page.goto("http://qamid.tmweb.ru/client/index.php");
});

afterEach(() => {
  page.close();
});

describe("qamid.tmweb tests", () => {
  beforeEach(async () => {

  test("Booking movie tickets for one person", async () => {
    await clickElement(page, "a:nth-child(3)");
    await clickElement(
      page,
      ".movie-seances__time[href='#'][data-seance-id='217']"
    );
    await clickElement(page, "div:nth-child(6) span:nth-child(5)");
    await clickElement(page, "button.acceptin-button");
    expect(await getText(page, "h2.ticket__check-title")).toContain(
      "Вы выбрали билеты:"
    );
  });
});
});
