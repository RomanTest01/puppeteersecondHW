const puppeteer = require("puppeteer");
const chai = require("chai");
const expect = chai.expect;
const { Given, When, Then, Before, After, setDefaultTimeout } = require("cucumber");
const { putText, getText, clickElement } = require("../../lib/commands.js");

setDefaultTimeout(50000);
Before(async function () {
  const browser = await puppeteer.launch({ headless: false, slowMo: 100 });
  const page = await browser.newPage();
  this.browser = browser;
  this.page = page;
});

After(async function () {
  if (this.browser) {
    await this.browser.close();
  }
});

Given("пользователь находится на странице {string}", async function (string) {
  return await this.page.goto(`http://qamid.tmweb.ru${string}`, {
    setTimeout: 20000
  });
});

Given("user is on page {string}", async function (string) {
  return await this.page.goto(`http://qamid.tmweb.ru${string}`, {
    setTimeout: 20000
  });
});

When(
  "пользователь переходит на завтрашний день", async function () {
    return await clickElement(this.page, "a:nth-child(2)");
  }
);

When(
  "пользователь выбирает время сеанса",async function () {
    return await clickElement(
      this.page,
      ".movie-seances__time[href='#'][data-seance-id='217']"
    );
  }
);
When(
  "пользователь выбирает место в зале", async function () {
    return await clickElement(this.page, "div:nth-child(5) span:nth-child(7)");
  }
);
When(
  "пользователь выбирает второе место в зале", async function () {
    return await clickElement(this.page, "div:nth-child(5) span:nth-child(8)");
  }
);
When(
  "пользователь нажимает Забронировать", async function () {
    return await clickElement(this.page, "button.acceptin-button");
  }
);




When("user choose date", async function () {
  return await clickElement(this.page, "a:nth-child(3)");
});

When("user choose movie time", async function () {
  return await clickElement(
    this.page,
    ".movie-seances__time[href='#'][data-seance-id='217']"
  );
});
When("user choose seat", async function () {
  return await clickElement(this.page, "div:nth-child(5) span:nth-child(8)");
});

When("user choose one more seat", async function () {
  return await clickElement(this.page, "div:nth-child(3) span:nth-child(5)");
});
When("user click on the reserve button", async function () {
  return await clickElement(this.page, "button.acceptin-button");
});
When("user click on the get code button", async function () {
  return await clickElement(this.page, "button.acceptin-button");
});


When("user choose already selected seat", async function () {
  return await clickElement(this.page, ".buying-scheme__chair_taken");
});


Then(
  "пользователь видит текст {string}",  async function (string) {
    const actual = await getText(this.page, "h2.ticket__check-title");
    const expected = await string;
    expect(actual).contains(expected);
  }
);

Then("user get the code and text {string}", async function (string) {
  const actual = await getText(this.page, "h2.ticket__check-title");
  const expected = await string;
  expect(actual).contains(expected);
});

Then("button for reserving is inactive {string}", async function (string) {
  const actual = String(
    await this.page.$eval("button", (button) => {
      return button.disabled;
    })
  );
  const expected = "true";
  expect(actual).contains(expected);
});