import { Page, Locator, expect } from '@playwright/test';

/**
 * Page Object Model for the Portfolio site
 * Encapsulates selectors and common actions for clean, maintainable tests
 */
export class PortfolioPage {
  readonly page: Page;

  // Sidebar elements
  readonly sidebar: Locator;
  readonly profileImage: Locator;
  readonly profileName: Locator;
  readonly profileTitle: Locator;
  readonly socialLinks: Locator;
  readonly aboutSection: Locator;
  readonly location: Locator;

  // Main content elements
  readonly mainContent: Locator;
  readonly themeToggle: Locator;

  // Hero section
  readonly hero: Locator;
  readonly heroTitle: Locator;
  readonly heroDescription: Locator;
  readonly heroStats: Locator;
  readonly scrollPrompt: Locator;

  // Experience section
  readonly experienceSection: Locator;
  readonly companyBlocks: Locator;
  readonly roleCards: Locator;

  // Skills section
  readonly skillsSection: Locator;
  readonly skillCategories: Locator;
  readonly educationBlock: Locator;

  // Contact section
  readonly contactSection: Locator;
  readonly contactCards: Locator;
  readonly journeyEnd: Locator;

  // Footer
  readonly footer: Locator;

  constructor(page: Page) {
    this.page = page;

    // Sidebar
    this.sidebar = page.locator('.sidebar');
    this.profileImage = page.locator('.avatar');
    this.profileName = page.locator('.name');
    this.profileTitle = page.locator('.title');
    this.socialLinks = page.locator('.social-links a');
    this.aboutSection = page.locator('.about-section');
    this.location = page.locator('.location');

    // Main content
    this.mainContent = page.locator('.main-content');
    this.themeToggle = page.locator('.theme-toggle');

    // Hero
    this.hero = page.locator('.hero');
    this.heroTitle = page.locator('.hero-title');
    this.heroDescription = page.locator('.hero-description');
    this.heroStats = page.locator('.stat');
    this.scrollPrompt = page.locator('.scroll-prompt');

    // Experience
    this.experienceSection = page.locator('.experience-section');
    this.companyBlocks = page.locator('.company-block');
    this.roleCards = page.locator('.role-card');

    // Skills
    this.skillsSection = page.locator('.skills-section');
    this.skillCategories = page.locator('.skill-category');
    this.educationBlock = page.locator('.education-block');

    // Contact
    this.contactSection = page.locator('.contact-section');
    this.contactCards = page.locator('.contact-card');
    this.journeyEnd = page.locator('.journey-end');

    // Footer
    this.footer = page.locator('.footer');
  }

  async goto() {
    await this.page.goto('/');
  }

  async toggleTheme() {
    await this.themeToggle.click();
  }

  async isDarkMode(): Promise<boolean> {
    const appClass = await this.page.locator('.app').getAttribute('class');
    return appClass?.includes('dark') ?? false;
  }

  async isLightMode(): Promise<boolean> {
    const appClass = await this.page.locator('.app').getAttribute('class');
    return appClass?.includes('light') ?? false;
  }

  async getSocialLinkHrefs(): Promise<string[]> {
    const links = await this.socialLinks.all();
    const hrefs: string[] = [];
    for (const link of links) {
      const href = await link.getAttribute('href');
      if (href) hrefs.push(href);
    }
    return hrefs;
  }

  async getContactLinkHrefs(): Promise<string[]> {
    const links = await this.contactCards.all();
    const hrefs: string[] = [];
    for (const link of links) {
      const href = await link.getAttribute('href');
      if (href) hrefs.push(href);
    }
    return hrefs;
  }

  async getCompanyNames(): Promise<string[]> {
    const names = await this.page.locator('.company-name').allTextContents();
    return names;
  }

  async getSkillCategoryTitles(): Promise<string[]> {
    const titles = await this.page.locator('.skill-category-title').allTextContents();
    return titles;
  }

  async scrollToSection(section: Locator) {
    await section.scrollIntoViewIfNeeded();
  }
}
