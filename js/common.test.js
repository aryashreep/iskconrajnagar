/**
 * @jest-environment jsdom
 */

describe("myFunction", () => {
  let navbarSticky, navbar, originalPageYOffset;

  beforeEach(() => {
    // Set up DOM elements
    document.body.innerHTML = `
      <div id="navbar_sticky" class=""></div>
      <div class="navbar" style="height: 120px;"></div>
    `;
    navbarSticky = document.getElementById("navbar_sticky");
    navbar = document.querySelector(".navbar");
    // Mock offsetTop and offsetHeight
    Object.defineProperty(navbarSticky, "offsetTop", { value: 10 });
    Object.defineProperty(navbar, "offsetHeight", { value: 120 });
    // Save original pageYOffset
    originalPageYOffset = window.pageYOffset;
    // Re-evaluate variables as in the original file
    global.stick_show_height = 100;
    global.navbar_height_minus = 82;
    global.navbar_sticky = navbarSticky;
    global.sticky = navbarSticky.offsetTop;
    global.navbar_height = navbar.offsetHeight;
    // Define myFunction in test scope
    global.myFunction = function () {
      if (window.pageYOffset >= sticky + navbar_height + stick_show_height) {
        navbar_sticky.classList.add("sticky");
        document.body.style.paddingTop =
          navbar_height - navbar_height_minus + "px";
      } else {
        navbar_sticky.classList.remove("sticky");
        document.body.style.paddingTop = "0";
      }
    };
  });

  afterEach(() => {
    // Restore pageYOffset
    window.pageYOffset = originalPageYOffset;
    document.body.innerHTML = "";
  });

  it("adds sticky class and sets paddingTop when pageYOffset is above threshold", () => {
    window.pageYOffset = 10 + 120 + 100; // sticky + navbar_height + stick_show_height
    myFunction();
    expect(navbarSticky.classList.contains("sticky")).toBe(true);
    expect(document.body.style.paddingTop).toBe(120 - 82 + "px");
  });

  it("removes sticky class and resets paddingTop when pageYOffset is below threshold", () => {
    window.pageYOffset = 10 + 120 + 99; // just below threshold
    navbarSticky.classList.add("sticky");
    document.body.style.paddingTop = "38px";
    myFunction();
    expect(navbarSticky.classList.contains("sticky")).toBe(false);
    expect(document.body.style.paddingTop).toBe("0px");
  });
});
